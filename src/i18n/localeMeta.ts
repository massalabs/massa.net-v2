/** Langues disponibles — couverture mondiale */
export const LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'fr', label: 'Français' },
  { code: 'es', label: 'Español' },
  { code: 'pt', label: 'Português' },
  { code: 'zh-CN', label: '中文（简体）' },
  { code: 'ja', label: '日本語' },
  { code: 'ko', label: '한국어' },
  { code: 'ar', label: 'العربية' },
  { code: 'hi', label: 'हिन्दी' },
  { code: 'id', label: 'Bahasa Indonesia' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'ru', label: 'Русский' },
] as const

export type LocaleCode = (typeof LANGUAGES)[number]['code']

export function isLocale(v: string): v is LocaleCode {
  return LANGUAGES.some((l) => l.code === v)
}

export function applyLocaleToDocument(code: LocaleCode) {
  document.documentElement.lang = code
  document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr'
}
