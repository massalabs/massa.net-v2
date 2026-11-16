import { useCallback, useEffect, useRef, useState, memo, type ReactNode } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { LANGUAGES, type LocaleCode } from '../i18n/localeMeta'
import { useLanguage } from '../i18n/LanguageContext'
import { MaskIcon } from './MaskIcon'

type NavItem = {
  key: string
  icon: ReactNode
  to?: string
  href?: string
}

type NavSection = {
  id: string
  labelKey: string
  items: NavItem[]
}

const GossipIcon = (
  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path
      d="M12 2.5c5.8 0 10.5 4.4 10.5 9.8 0 2.9-1.4 5.5-3.7 7.3-.1.1-.2.3-.2.5v1.4c0 .3-.3.5-.6.4l-2.2-.6c-.2-.1-.3 0-.5.1-.9.2-1.8.3-2.8.3-5.8 0-10.5-4.4-10.5-9.8S6.2 2.5 12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
    <circle cx="8.8" cy="12" r="1.3" fill="currentColor" />
    <circle cx="15.2" cy="12" r="1.3" fill="currentColor" />
  </svg>
)

const MasIcon = (
  <svg viewBox="0 0 143 137" fill="none" aria-hidden="true">
    <path d="M51.4872 3.48112L51.2336 3.88765L51.1322 3.7098L51.3351 3.37949L45.7552 0.0256348L38.7042 11.7895L44.4363 15.2196L40.9108 21.0889L46.4907 24.4427L46.5668 24.2903L46.6682 24.4681L46.7443 24.5952L52.3749 27.9744L48.8495 33.8437L43.1174 30.4136L39.5919 36.2829L34.2403 33.0561H33.733L30.3344 38.722L24.6023 35.292L21.0768 41.1612H21.0261L26.7835 44.6167L23.4102 50.2319L23.7146 50.7654L28.9901 53.916L25.4646 59.7853L31.1967 63.2154L27.6712 69.0846L21.9645 65.6545H21.7616L21.8123 65.5529L16.2324 62.199L12.7069 68.0683L6.84806 64.5366L6.36616 65.375H6.56906L4.15956 69.4149C4.15956 69.3133 4.15956 69.2117 4.15956 69.11L3.3733 70.4312L3.52548 70.5329L0 76.4021L5.5799 79.756L5.73208 79.5019H5.93498L5.73208 79.8322L11.312 83.1861L14.8375 77.3168L20.5695 80.7469L24.095 74.8776L35.5338 81.7632L39.0593 75.894L44.6645 79.2732L48.19 73.404L42.5848 70.0247L46.1102 64.1555L40.3782 60.7254L43.9036 54.8561L41.3166 53.3062L38.1716 51.4006L41.6971 45.5314L47.4291 48.9615L50.9546 43.0922L56.6867 46.5223L60.2122 40.653L65.8174 44.0323L69.3429 38.1631L63.7376 34.7838L67.2631 28.9145L55.9765 22.1306L59.502 16.2614L53.6431 12.7296L57.1686 6.86039L51.5887 3.50653L51.4872 3.48112Z" fill="currentColor" />
    <path d="M107.819 137L93.8946 112.812L81.7456 133.875H66.0712L53.9476 112.812L40.0486 136.949L37.9688 135.755C33.4541 133.163 29.2185 130.089 25.4394 126.608L24.019 125.312L45.9835 87.1241H46.5415L46.6937 86.9717H61.8355L73.9845 108.035L86.1334 86.9717H101.656L123.747 125.287L122.377 126.608C119.004 129.835 115.073 132.757 109.975 135.755L107.87 137H107.819ZM30.1316 124.347C32.6932 126.532 35.4325 128.565 38.2985 130.343L53.9476 103.157L68.8611 129.047H78.981L93.8946 103.157L109.544 130.318C112.663 128.361 115.301 126.405 117.584 124.372L98.7897 91.7992H88.8219L73.9084 117.69L58.9949 91.7992H48.8242L30.1062 124.347H30.1316Z" fill="currentColor" />
    <path d="M142.363 67.4075C142.211 70.4564 141.78 73.6578 140.994 77.3928H102.949L97.9017 68.627L112.815 42.7363H82.9882L77.9409 33.9705L97.6227 0C100.819 1.16877 103.887 2.5408 106.779 4.1161L90.166 32.9034H120.018L125.066 41.5421L110.152 67.4329H142.363V67.4075Z" fill="currentColor" />
  </svg>
)

const NAV_SECTIONS: NavSection[] = [
  {
    id: 'products',
    labelKey: 'nav.products',
    items: [
      { key: 'deweb', icon: <MaskIcon src="/images/deweb.svg" />, to: '/deweb' },
      { key: 'gossip', icon: GossipIcon, to: '/gossip' },
    ],
  },
  {
    id: 'solutions',
    labelKey: 'nav.solutions',
    items: [
      { key: 'asc', icon: <MaskIcon src="/images/ASC.svg" />, to: '/asc' },
      { key: 'technology', icon: <MaskIcon src="/images/Technology.svg" />, to: '/technology' },
    ],
  },
  {
    id: 'build',
    labelKey: 'nav.build',
    items: [
      { key: 'docs', icon: <MaskIcon src="/images/Docs.svg" />, href: 'https://docs.massa.net/' },
      { key: 'grants', icon: <MaskIcon src="/images/Bounties.svg" />, to: '/grants-bounty' },
    ],
  },
  {
    id: 'explore',
    labelKey: 'nav.explore',
    items: [
      { key: 'ecosystem', icon: <MaskIcon src="/images/Ecosystem.svg" />, to: '/ecosystem' },
      { key: 'buyMas', icon: MasIcon, to: '/get-mas' },
    ],
  },
  {
    id: 'community',
    labelKey: 'nav.community',
    items: [{ key: 'forum', icon: <MaskIcon src="/images/Forum.svg" />, href: 'https://forum.massa.community/' }],
  },
  {
    id: 'about',
    labelKey: 'nav.about',
    items: [
      { key: 'team', icon: <MaskIcon src="/images/Team.svg" />, to: '/team' },
      { key: 'blog', icon: <MaskIcon src="/images/Blog.svg" />, to: '/blog' },
    ],
  },
]

const SOCIALS = [
  { label: 'Discord', href: 'https://discord.com/invite/massa', icon: '/images/Discord.svg' },
  { label: 'X', href: 'https://x.com/massachain', icon: '/images/X.svg' },
]

const Chevron = ({ className }: { className?: string }) => (
  <svg className={className} width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function NavItemLink({
  item,
  className,
  onNavigate,
  compact = false,
}: {
  item: NavItem
  className: string
  onNavigate: () => void
  compact?: boolean
}) {
  const { t } = useLanguage()
  const body = (
    <>
      <span className="mnav-item-icon">{item.icon}</span>
      <span className="mnav-item-text">
        <span className="mnav-item-title">
          {t(`nav.item.${item.key}.title`)}
          {item.href && (
            <svg className="mnav-item-ext" width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
        {!compact && <span className="mnav-item-desc">{t(`nav.item.${item.key}.desc`)}</span>}
      </span>
    </>
  )
  if (item.href) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" className={className} onClick={onNavigate}>
        {body}
      </a>
    )
  }
  return (
    <Link to={item.to ?? '/'} className={className} onClick={onNavigate}>
      {body}
    </Link>
  )
}

function LanguagePicker({ variant }: { variant: 'desktop' | 'mobile' }) {
  const { locale, setLocale, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const current = LANGUAGES.find((l) => l.code === locale)

  if (variant === 'mobile') {
    return (
      <label className="mnav-lang-mobile">
        <span className="mnav-sr-only">{t('nav.language')}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <select value={locale} onChange={(e) => setLocale(e.target.value as LocaleCode)}>
          {LANGUAGES.map((l) => (
            <option key={l.code} value={l.code}>
              {l.label}
            </option>
          ))}
        </select>
        <Chevron />
      </label>
    )
  }

  return (
    <div className="mnav-lang" ref={ref}>
      <button
        type="button"
        className="mnav-lang-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t('nav.language')}: ${current?.label ?? 'English'}`}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z" stroke="currentColor" strokeWidth="1.6" />
        </svg>
        <span className="mnav-lang-code">{locale.split('-')[0].toUpperCase()}</span>
      </button>
      {open && (
        <ul className="mnav-panel mnav-lang-list" role="listbox" aria-label={t('nav.language')}>
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={locale === l.code}
                className={`mnav-lang-option${locale === l.code ? ' is-active' : ''}`}
                onClick={() => {
                  setLocale(l.code)
                  setOpen(false)
                }}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export const Navbar = memo(function Navbar() {
  const { t } = useLanguage()
  const location = useLocation()
  const [openId, setOpenId] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)
  const lastPointer = useRef<string>('mouse')
  const barRef = useRef<HTMLDivElement>(null)

  const closeAll = useCallback(() => {
    setOpenId(null)
    setMobileOpen(false)
  }, [])

  // Close menus whenever the route changes
  useEffect(() => {
    closeAll()
  }, [location.pathname, closeAll])

  // Escape + outside click for desktop dropdowns
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAll()
    }
    const onDoc = (e: MouseEvent) => {
      if (barRef.current && !barRef.current.contains(e.target as Node)) setOpenId(null)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onDoc)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onDoc)
    }
  }, [closeAll])

  // Close the mobile menu when the user starts scrolling the page
  useEffect(() => {
    if (!mobileOpen) return
    const startY = window.scrollY
    const onScroll = () => Math.abs(window.scrollY - startY) > 40 && setMobileOpen(false)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [mobileOpen])

  // Close mobile menu if the viewport grows past the breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1100px)')
    const onChange = () => mq.matches && setMobileOpen(false)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  const cancelClose = () => {
    if (closeTimer.current) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }
  const scheduleClose = () => {
    cancelClose()
    closeTimer.current = window.setTimeout(() => setOpenId(null), 140)
  }

  return (
    <header className={`mnav${mobileOpen ? ' is-mobile-open' : ''}`} ref={barRef}>
      <div className="mnav-bar">
        <Link to="/" className="mnav-logo" aria-label="Massa — home">
          <MaskIcon src="/images/LOGO.svg" className="mnav-logo-mark" />
        </Link>

        <nav className="mnav-desktop" aria-label="Main">
          <ul className="mnav-menu">
            {NAV_SECTIONS.map((section) => {
              const isOpen = openId === section.id
              return (
                <li
                  key={section.id}
                  className="mnav-menu-item"
                  onPointerEnter={(e) => {
                    if (e.pointerType !== 'mouse') return
                    cancelClose()
                    setOpenId(section.id)
                  }}
                  onPointerLeave={(e) => {
                    if (e.pointerType !== 'mouse') return
                    scheduleClose()
                  }}
                >
                  <button
                    type="button"
                    className={`mnav-trigger${isOpen ? ' is-open' : ''}`}
                    aria-expanded={isOpen}
                    aria-controls={`mnav-panel-${section.id}`}
                    onPointerDown={(e) => {
                      lastPointer.current = e.pointerType
                    }}
                    onClick={(e) => {
                      // Mouse users already opened it on hover: a click should not close it again.
                      const fromMouse = e.detail > 0 && lastPointer.current === 'mouse'
                      setOpenId(fromMouse ? section.id : isOpen ? null : section.id)
                    }}
                  >
                    {t(section.labelKey)}
                    <Chevron className="mnav-trigger-chevron" />
                  </button>
                  <div id={`mnav-panel-${section.id}`} className={`mnav-panel mnav-dropdown${isOpen ? ' is-open' : ''}`} hidden={!isOpen}>
                    {section.items.map((item) => (
                      <NavItemLink key={item.key} item={item} className="mnav-item" onNavigate={closeAll} />
                    ))}
                  </div>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="mnav-actions">
          <LanguagePicker variant="desktop" />
          <Link to="/start" className="mnav-cta">
            {t('nav.getStarted')}
          </Link>
          <div className="mnav-socials">
            {SOCIALS.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="mnav-social">
                <MaskIcon src={s.icon} />
              </a>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="mnav-burger"
          aria-expanded={mobileOpen}
          aria-controls="mnav-mobile"
          aria-label={mobileOpen ? t('nav.closeMenu') : t('nav.openMenu')}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="mnav-burger-line" />
          <span className="mnav-burger-line" />
        </button>
      </div>

      <div className="mnav-scrim" aria-hidden="true" onClick={() => setMobileOpen(false)} />
      <div id="mnav-mobile" className="mnav-mobile" aria-hidden={!mobileOpen} inert={!mobileOpen}>
        <div className="mnav-mobile-grid">
          {NAV_SECTIONS.map((section) => (
            <section key={section.id} className="mnav-mobile-group">
              <h2 className="mnav-mobile-label">{t(section.labelKey)}</h2>
              {section.items.map((item) => (
                <NavItemLink key={item.key} item={item} className="mnav-mlink" onNavigate={closeAll} compact />
              ))}
            </section>
          ))}
        </div>
        <div className="mnav-mobile-footer">
          <Link to="/start" className="mnav-cta mnav-cta--block" onClick={closeAll}>
            {t('nav.getStarted')}
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <div className="mnav-mobile-meta">
            <LanguagePicker variant="mobile" />
            <div className="mnav-socials">
              {SOCIALS.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="mnav-social">
                  <MaskIcon src={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
})

export default Navbar
