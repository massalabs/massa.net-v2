import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type Dispatch,
  type MutableRefObject,
  type ReactNode,
  type SetStateAction,
} from 'react'
import { applyLocaleToDocument, isLocale, type LocaleCode } from './localeMeta'
import { getEnglishMessage, getMessage, hasStaticDictionary, interpolate } from './messages'

const STORAGE_KEY = 'massa-lang'
const AUTO_I18N_CACHE_PREFIX = 'massa-auto-i18n'

function readInitialLocale(): LocaleCode {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage.getItem(STORAGE_KEY) ?? 'en'
  return isLocale(saved) ? saved : 'en'
}

type LanguageContextValue = {
  locale: LocaleCode
  setLocale: (code: LocaleCode) => void
  t: (key: string, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>(readInitialLocale)
  const [autoMap, setAutoMap] = useState<Partial<Record<LocaleCode, Record<string, string>>>>({})
  const [flushTick, setFlushTick] = useState(0)
  const inFlightRef = useRef<Set<string>>(new Set())
  const pendingRef = useRef<Set<string>>(new Set())
  const scheduleRef = useRef<number | null>(null)

  useEffect(() => {
    applyLocaleToDocument(locale)
  }, [locale])

  useEffect(() => {
    if (hasStaticDictionary(locale)) return
    const raw = window.localStorage.getItem(`${AUTO_I18N_CACHE_PREFIX}:${locale}`)
    if (!raw) return
    try {
      const parsed = JSON.parse(raw) as Record<string, string>
      setAutoMap((prev) => ({ ...prev, [locale]: { ...(prev[locale] ?? {}), ...parsed } }))
    } catch {
      // Ignore malformed cache
    }
  }, [locale])

  const setLocale = useCallback((code: LocaleCode) => {
    setLocaleState(code)
    window.localStorage.setItem(STORAGE_KEY, code)
    applyLocaleToDocument(code)
  }, [])

  useEffect(() => {
    if (hasStaticDictionary(locale)) return
    const batch = Array.from(pendingRef.current).slice(0, 10)
    if (batch.length === 0) return

    batch.forEach((key) => {
      pendingRef.current.delete(key)
      inFlightRef.current.add(key)
    })

    const run = async () => {
      const translatedPairs = await Promise.all(
        batch.map(async (key) => {
          const source = getEnglishMessage(key)
          if (!source || source === key) {
            inFlightRef.current.delete(key)
            return [key, source] as const
          }
          try {
            const translated = await autoTranslate(source, locale)
            inFlightRef.current.delete(key)
            return [key, translated] as const
          } catch {
            inFlightRef.current.delete(key)
            return [key, source] as const
          }
        }),
      )

      const nextChunk = Object.fromEntries(translatedPairs)
      setAutoMap((prev) => {
        const merged = { ...(prev[locale] ?? {}), ...nextChunk }
        window.localStorage.setItem(`${AUTO_I18N_CACHE_PREFIX}:${locale}`, JSON.stringify(merged))
        return { ...prev, [locale]: merged }
      })
    }

    run().finally(() => {
      if (pendingRef.current.size > 0) {
        setFlushTick((v) => v + 1)
      }
    })
  }, [flushTick, locale])

  const t = useCallback(
    (key: string, vars?: Record<string, string | number>) => {
      if (hasStaticDictionary(locale)) {
        return interpolate(getMessage(locale, key), vars)
      }

      const cached = autoMap[locale]?.[key]
      if (cached != null) {
        return interpolate(cached, vars)
      }

      if (!inFlightRef.current.has(key) && !pendingRef.current.has(key)) {
        pendingRef.current.add(key)
        scheduleFlush(setFlushTick, scheduleRef)
      }

      return interpolate(getEnglishMessage(key), vars)
    },
    [autoMap, locale],
  )

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

function scheduleFlush(
  setFlushTick: Dispatch<SetStateAction<number>>,
  scheduleRef: MutableRefObject<number | null>,
) {
  if (scheduleRef.current != null) return
  scheduleRef.current = window.setTimeout(() => {
    scheduleRef.current = null
    setFlushTick((v) => v + 1)
  }, 0)
}

async function autoTranslate(text: string, locale: LocaleCode): Promise<string> {
  const tl = encodeURIComponent(locale)
  const q = encodeURIComponent(text)
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${tl}&dt=t&q=${q}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`translate failed: ${res.status}`)
  const data = (await res.json()) as unknown
  if (!Array.isArray(data) || !Array.isArray(data[0])) return text
  const parts = data[0] as Array<[string]>
  const out = parts.map((p) => (Array.isArray(p) ? String(p[0] ?? '') : '')).join('')
  return out || text
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return ctx
}
