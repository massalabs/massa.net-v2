import { useState, useEffect, useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { LANGUAGES, type LocaleCode } from '../i18n/localeMeta'
import { useLanguage } from '../i18n/LanguageContext'

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null)
  const isMobileMenu = isMobile || open

  useEffect(() => {
    if (!langMenuOpen) return
    const onDocClick = (e: MouseEvent) => {
      const el = langMenuRef.current
      if (el && !el.contains(e.target as Node)) setLangMenuOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLangMenuOpen(false)
    }
    document.addEventListener('click', onDocClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('click', onDocClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [langMenuOpen])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout)
      }
    }
  }, [closeTimeout])

  const handleDropdownEnter = (id: string) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setOpenDropdown(id)
  }

  const handleDropdownLeave = (id: string) => {
    const timeout = setTimeout(() => {
      setOpenDropdown((current) => (current === id ? null : current))
      setCloseTimeout(null)
    }, 150)
    setCloseTimeout(timeout)
  }

  const dropdownEvents = (id: string) => {
    if (isMobileMenu) return {}
    return {
      onPointerEnter: () => handleDropdownEnter(id),
      onPointerLeave: () => handleDropdownLeave(id),
    }
  }

  const dropdownListEvents = (id: string) => {
    if (isMobileMenu) {
      return {}
    }
    return {
      onPointerEnter: () => handleDropdownEnter(id),
      onPointerLeave: () => handleDropdownLeave(id),
    }
  }

  const handleLinkClick = () => {
    if (isMobileMenu) {
      setOpen(false)
      setOpenDropdown(null)
      setLangMenuOpen(false)
    }
  }

  const changeLanguage = (next: LocaleCode) => {
    setLocale(next)
    setLangMenuOpen(false)
  }

  const currentLangLabel = LANGUAGES.find((l) => l.code === locale)?.label ?? 'English'

  const renderMobileLinks = (
    id: string,
    items: Array<{ title: string; desc: string; iconSrc?: string; iconNode?: ReactNode; to?: string; href?: string; external?: boolean }>,
  ) => (
    <div className="mobile-nav-section-panel">
      {items.map((item) =>
        item.external ? (
          <a
            key={`${id}-${item.title}`}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {item.iconNode ? item.iconNode : item.iconSrc ? (
              <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src={item.iconSrc} alt="" /></div>
            ) : null}
            <div className="uui-navbar07_item-right">
              <div className="uui-navbar07_item-heading">{item.title}</div>
              <div className="uui-text-size-small">{item.desc}</div>
            </div>
          </a>
        ) : (
          <Link
            key={`${id}-${item.title}`}
            to={item.to ?? '/'}
            className="mobile-nav-link"
            onClick={handleLinkClick}
          >
            {item.iconNode ? item.iconNode : item.iconSrc ? (
              <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src={item.iconSrc} alt="" /></div>
            ) : null}
            <div className="uui-navbar07_item-right">
              <div className="uui-navbar07_item-heading">{item.title}</div>
              <div className="uui-text-size-small">{item.desc}</div>
            </div>
          </Link>
        ),
      )}
    </div>
  )

  const languageDropdown = (
    <div className="navbar-lang-dropdown" ref={langMenuRef}>
      <button
        type="button"
        className="navbar-lang-trigger"
        aria-label={`Language: ${currentLangLabel}`}
        aria-haspopup="listbox"
        aria-expanded={langMenuOpen}
        onClick={(e) => {
          e.stopPropagation()
          setLangMenuOpen((v) => !v)
        }}
      >
        {/* Glove icon to keep the navbar clean; label remains available for screen readers */}
        <span className="navbar-lang-globe" aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
            <path d="M2 12H22" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
            <path
              d="M12 2C14.5 4.5 16 8.1 16 12C16 15.9 14.5 19.5 12 22C9.5 19.5 8 15.9 8 12C8 8.1 9.5 4.5 12 2Z"
              stroke="currentColor"
              strokeWidth="1.7"
            />
          </svg>
        </span>
        <span className="navbar-lang-trigger-label navbar-lang-sr-only">{currentLangLabel}</span>
        <svg className="navbar-lang-chevron" width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {langMenuOpen && (
        <ul className="navbar-lang-list" role="listbox">
          {LANGUAGES.map((l) => (
            <li key={l.code} role="presentation">
              <button
                type="button"
                role="option"
                aria-selected={locale === l.code}
                className={`navbar-lang-option ${locale === l.code ? 'is-active' : ''}`}
                onClick={() => changeLanguage(l.code)}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )

  const mobileSections: Array<{
    id: string
    label: string
    items: Array<{ title: string; desc: string; iconSrc?: string; iconNode?: ReactNode; to?: string; href?: string; external?: boolean }>
  }> = [
    {
      id: 'products',
      label: t('nav.products'),
      items: [
        { title: t('nav.item.deweb.title'), desc: t('nav.item.deweb.desc'), iconSrc: '/images/deweb.svg', to: '/deweb' },
        {
          title: t('nav.item.gossip.title'),
          desc: t('nav.item.gossip.desc'),
          to: '/gossip',
          iconNode: (
            <div className="uui-navbar07_icon-wrapper gossip-menu-head-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none">
                <path d="M12 2.5c5.8 0 10.5 4.4 10.5 9.8 0 2.9-1.4 5.5-3.7 7.3-.1.1-.2.3-.2.5v1.4c0 .3-.3.5-.6.4l-2.2-.6c-.2-.1-.3 0-.5.1-.9.2-1.8.3-2.8.3-5.8 0-10.5-4.4-10.5-9.8S6.2 2.5 12 2.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <circle cx="8.8" cy="12" r="1.3" fill="currentColor" />
                <circle cx="15.2" cy="12" r="1.3" fill="currentColor" />
              </svg>
            </div>
          ),
        },
      ],
    },
    {
      id: 'solutions',
      label: t('nav.solutions'),
      items: [
        { title: t('nav.item.asc.title'), desc: t('nav.item.asc.desc'), iconSrc: '/images/ASC.svg', to: '/asc' },
        { title: t('nav.item.technology.title'), desc: t('nav.item.technology.desc'), iconSrc: '/images/Technology.svg', to: '/technology' },
      ],
    },
    {
      id: 'build',
      label: t('nav.build'),
      items: [
        { title: t('nav.item.docs.title'), desc: t('nav.item.docs.desc'), iconSrc: '/images/Docs.svg', href: 'https://docs.massa.net/', external: true },
        { title: t('nav.item.grants.title'), desc: t('nav.item.grants.desc'), iconSrc: '/images/Bounties.svg', to: '/grants-bounty' },
      ],
    },
    {
      id: 'explore',
      label: t('nav.explore'),
      items: [
        { title: t('nav.item.ecosystem.title'), desc: t('nav.item.ecosystem.desc'), iconSrc: '/images/Ecosystem.svg', to: '/ecosystem' },
        {
          title: t('nav.item.buyMas.title'),
          desc: t('nav.item.buyMas.desc'),
          to: '/get-mas',
          iconNode: (
            <div className="uui-navbar07_icon-wrapper" aria-hidden="true">
              <svg width="24" height="24" viewBox="0 0 143 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M51.4872 3.48112L51.2336 3.88765L51.1322 3.7098L51.3351 3.37949L45.7552 0.0256348L38.7042 11.7895L44.4363 15.2196L40.9108 21.0889L46.4907 24.4427L46.5668 24.2903L46.6682 24.4681L46.7443 24.5952L52.3749 27.9744L48.8495 33.8437L43.1174 30.4136L39.5919 36.2829L34.2403 33.0561H33.733L30.3344 38.722L24.6023 35.292L21.0768 41.1612H21.0261L26.7835 44.6167L23.4102 50.2319L23.7146 50.7654L28.9901 53.916L25.4646 59.7853L31.1967 63.2154L27.6712 69.0846L21.9645 65.6545H21.7616L21.8123 65.5529L16.2324 62.199L12.7069 68.0683L6.84806 64.5366L6.36616 65.375H6.56906L4.15956 69.4149C4.15956 69.3133 4.15956 69.2117 4.15956 69.11L3.3733 70.4312L3.52548 70.5329L0 76.4021L5.5799 79.756L5.73208 79.5019H5.93498L5.73208 79.8322L11.312 83.1861L14.8375 77.3168L20.5695 80.7469L24.095 74.8776L35.5338 81.7632L39.0593 75.894L44.6645 79.2732L48.19 73.404L42.5848 70.0247L46.1102 64.1555L40.3782 60.7254L43.9036 54.8561L41.3166 53.3062L38.1716 51.4006L41.6971 45.5314L47.4291 48.9615L50.9546 43.0922L56.6867 46.5223L60.2122 40.653L65.8174 44.0323L69.3429 38.1631L63.7376 34.7838L67.2631 28.9145L55.9765 22.1306L59.502 16.2614L53.6431 12.7296L57.1686 6.86039L51.5887 3.50653L51.4872 3.48112Z" fill="currentColor" />
                <path d="M107.819 137L93.8946 112.812L81.7456 133.875H66.0712L53.9476 112.812L40.0486 136.949L37.9688 135.755C33.4541 133.163 29.2185 130.089 25.4394 126.608L24.019 125.312L45.9835 87.1241H46.5415L46.6937 86.9717H61.8355L73.9845 108.035L86.1334 86.9717H101.656L123.747 125.287L122.377 126.608C119.004 129.835 115.073 132.757 109.975 135.755L107.87 137H107.819ZM30.1316 124.347C32.6932 126.532 35.4325 128.565 38.2985 130.343L53.9476 103.157L68.8611 129.047H78.981L93.8946 103.157L109.544 130.318C112.663 128.361 115.301 126.405 117.584 124.372L98.7897 91.7992H88.8219L73.9084 117.69L58.9949 91.7992H48.8242L30.1062 124.347H30.1316Z" fill="currentColor" />
                <path d="M142.363 67.4075C142.211 70.4564 141.78 73.6578 140.994 77.3928H102.949L97.9017 68.627L112.815 42.7363H82.9882L77.9409 33.9705L97.6227 0C100.819 1.16877 103.887 2.5408 106.779 4.1161L90.166 32.9034H120.018L125.066 41.5421L110.152 67.4329H142.363V67.4075Z" fill="currentColor" />
              </svg>
            </div>
          ),
        },
      ],
    },
    {
      id: 'community',
      label: t('nav.community'),
      items: [
        { title: t('nav.item.forum.title'), desc: t('nav.item.forum.desc'), iconSrc: '/images/Forum.svg', href: 'https://forum.massa.community/', external: true },
        { title: t('nav.item.ambassador.title'), desc: t('nav.item.ambassador.desc'), iconSrc: '/images/Ambassador.svg', to: '/ambassador' },
      ],
    },
    {
      id: 'about',
      label: t('nav.about'),
      items: [
        { title: t('nav.item.team.title'), desc: t('nav.item.team.desc'), iconSrc: '/images/Team.svg', to: '/team' },
        { title: t('nav.item.blog.title'), desc: t('nav.item.blog.desc'), iconSrc: '/images/Blog.svg', to: '/blog' },
      ],
    },
  ]

  const selectedMobileSection = mobileSections.find((section) => section.id === openDropdown) ?? null

  return (
    <div data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb285" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="uui-navbar07_component w-nav">
      <div className="uui-navbar07_container">
        <Link to="/" aria-current="page" className="uui-navbar07_logo-link w-nav-brand w--current">
          <div className="uui-logo_component"><img width="120" loading="lazy" alt="" src="/images/LOGO.svg" /></div>
        </Link>
        <nav role="navigation" className={`uui-navbar07_menu w-nav-menu ${open ? 'w--open' : ''}`} {...(open ? { 'data-nav-menu-open': '' } : {})}>
          <div className="uui-navbar07_menu-left">
            {isMobileMenu ? (
              selectedMobileSection ? (
                <div className="mobile-nav-detail">
                  <button type="button" className="mobile-nav-back" onClick={() => setOpenDropdown(null)}>
                    <span aria-hidden="true">←</span>
                    <span>{selectedMobileSection.label}</span>
                  </button>
                  {renderMobileLinks(selectedMobileSection.id, selectedMobileSection.items)}
                </div>
              ) : (
                <div className="mobile-nav-root">
                  {mobileSections.map((section) => (
                    <button key={section.id} type="button" className="mobile-nav-root-link" onClick={() => setOpenDropdown(section.id)}>
                      <span>{section.label}</span>
                      <span aria-hidden="true">›</span>
                    </button>
                  ))}
                </div>
              )
            ) : (
              <>
            <div data-hover="true" data-delay="300" className="uui-navbar07_menu-dropdown w-dropdown" {...dropdownEvents('products')}>
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-block-5"><strong className="bold-text">{t('nav.products')}</strong></div>
              </div>
              <nav className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'products' ? 'is-open w--open' : ''}`} {...dropdownListEvents('products')}>
                <div className="uui-navbar07_mega-layout">
                  <div className="uui-navbar07_dropdown-link-list">
                    <Link to="/deweb" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/deweb.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.deweb.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.deweb.desc')}</div>
                      </div>
                    </Link>
                    <Link to="/gossip" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper gossip-menu-head-icon">
                        <svg viewBox="0 0 242 221" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                          <path d="M230.61 119.88C225.23 114.5 218.22 111.11 209.59 109.73C207.68 87 199.42 69.02 184.99 56.15C174 46.38 159.98 39.75 143.12 36.35C142.31 26.9 139.11 19.38 133.53 13.81C127 7.27 117.8 4 105.94 4C96.38 4 88.53 6.24 82.41 10.74C82.13 10.42 81.83 10.11 81.53 9.81C75 3.27 65.8 0 53.94 0C42.08 0 33.34 3.27 26.81 9.81C20.27 16.34 17 25.54 17 37.4C17 43.05 17.75 48.09 19.26 52.53C15.02 53.91 11.4 56.11 8.4 59.11C2.8 64.71 0 72.59 0 82.75C0 92.91 2.83 100.79 8.5 106.39C11.17 109.02 14.3 111.03 17.89 112.42C17.73 115.02 17.65 117.68 17.65 120.4C17.65 136.98 20.74 151.41 26.82 163.26C29.27 168.04 32.23 172.41 35.73 176.36C34.57 180.02 34 184.15 34 188.75C34 198.91 36.83 206.79 42.5 212.39C48.17 217.99 55.95 220.79 65.85 220.79C75.75 220.79 83.69 217.99 89.3 212.39C91.49 210.2 93.25 207.66 94.58 204.77H114.08C120.16 204.77 125.97 204.47 131.52 203.87C138.3 208.62 146.87 211 157.25 211C170.24 211 180.36 207.37 187.61 200.12C190.09 197.65 192.14 194.82 193.78 191.66C195.85 191.89 198.01 192 200.25 192C213.24 192 223.36 188.37 230.61 181.12C237.86 173.87 241.49 163.66 241.49 150.5C241.49 137.34 237.86 127.14 230.61 119.88ZM220.49 154.3C220.49 161.55 218.85 166.86 215.56 170.24C212.27 173.61 207.16 175.3 200.25 175.3C199.56 175.3 198.89 175.28 198.24 175.24C196.33 175.15 194.57 174.9 192.98 174.5C189.65 173.68 187.01 172.22 185.06 170.11C182.51 167.35 180.98 163.45 180.46 158.39C179.54 160.17 178.53 161.87 177.43 163.49C177.47 164.21 177.49 164.94 177.49 165.7V173.3C177.49 178.21 176.74 182.23 175.23 185.36C174.51 186.86 173.62 188.15 172.56 189.24C169.27 192.61 164.16 194.3 157.25 194.3C150.34 194.3 145.27 192.57 142.06 189.11C141.36 188.35 140.73 187.5 140.19 186.56C133.9 187.95 127.01 188.77 119.54 189.04C117.76 189.11 115.93 189.14 114.08 189.14C108.3 189.14 102.83 188.83 97.69 188.2C91.86 187.49 86.45 186.38 81.47 184.87C81.48 185.18 81.48 185.5 81.48 185.82V191.68C81.48 197.28 80.21 201.39 77.67 203.99C77.4 204.26 77.12 204.52 76.82 204.77C74.29 206.86 70.63 207.9 65.85 207.9C62.74 207.9 60.12 207.45 57.98 206.53C57.35 206.69 56.74 206.85 56.15 207.03L56.21 205.62C55.43 205.12 54.73 204.54 54.13 203.89C51.65 201.22 50.41 197.15 50.41 191.68V185.82C50.41 180.22 51.65 176.12 54.13 173.51C54.96 172.64 55.95 171.91 57.1 171.33C53.77 168.2 50.92 164.6 48.53 160.55C42.57 150.41 39.56 137.46 39.56 121.86V117.99C39.56 116.69 39.58 115.4 39.63 114.14C39.79 109.1 40.29 104.36 41.12 99.92C38.74 101.24 35.65 101.9 31.85 101.9C26.51 101.9 22.6 100.56 20.13 97.89C20.03 97.78 19.93 97.67 19.84 97.56C17.55 94.89 16.41 90.93 16.41 85.68V79.82C16.41 74.22 17.65 70.12 20.13 67.51C21.62 65.94 23.64 64.84 26.18 64.22C27.85 63.81 29.74 63.6 31.85 63.6C33.15 63.6 34.37 63.68 35.5 63.84C37.59 61.31 39.88 58.93 42.35 56.7C41.66 56.22 41.05 55.67 40.49 55.07C39.46 53.97 38.61 52.65 37.96 51.12C36.75 48.37 36.15 44.93 36.15 40.82V33.98C36.15 27.44 37.6 22.65 40.49 19.61C43.37 16.57 47.93 15.05 54.17 15.05C60.41 15.05 65 16.57 67.97 19.61C69.51 21.2 70.66 23.26 71.39 25.8C72.07 28.13 72.41 30.85 72.41 33.98V39.67C72.78 39.54 73.15 39.42 73.53 39.3C78.17 37.83 83.07 36.64 88.21 35.75C88.41 32.14 89.11 29.14 90.31 26.75C90.91 25.55 91.64 24.5 92.49 23.61C95.37 20.57 99.93 19.05 106.17 19.05C112.41 19.05 117 20.57 119.97 23.61C122.28 25.99 123.69 29.43 124.19 33.94C124.34 35.2 124.41 36.55 124.41 37.98V44.82C124.41 47.1 124.23 49.17 123.87 51.02C130.37 51.46 136.4 52.35 141.94 53.69C152.99 56.36 162.12 60.82 169.22 67.03C180.32 76.74 186.59 91.26 187.9 110.26C188.07 112.76 188.16 115.34 188.16 117.99V121.86C188.16 124.12 188.1 126.32 187.97 128.46C191.05 126.62 195.15 125.7 200.25 125.7C203.98 125.7 207.18 126.19 209.85 127.18C212.15 128.01 214.05 129.21 215.56 130.76C218.85 134.14 220.49 139.45 220.49 146.7V154.3Z" fill="currentColor" />
                          <path d="M90.4 126.56C90.4 136.51 82.33 144.58 72.38 144.58C62.43 144.58 54.35 136.51 54.35 126.56C54.35 116.61 62.42 108.53 72.38 108.53C82.34 108.53 90.4 116.6 90.4 126.56Z" fill="currentColor" />
                          <path d="M138.04 126.56C138.04 128.37 137.77 130.12 137.27 131.76C135.27 138.44 129.49 143.48 122.42 144.42C121.64 144.53 120.83 144.58 120.02 144.58C110.06 144.58 101.99 136.51 101.99 126.56C101.99 116.61 110.06 108.53 120.02 108.53C129.98 108.53 138.04 116.6 138.04 126.56Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.gossip.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.gossip.desc')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div data-hover="true" data-delay="300" className="uui-navbar07_menu-dropdown w-dropdown" {...dropdownEvents('solutions')}>
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-block-5"><strong className="bold-text">{t('nav.solutions')}</strong></div>
              </div>
              <nav className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'solutions' ? 'is-open w--open' : ''}`} {...dropdownListEvents('solutions')}>
                <div className="uui-navbar07_mega-layout">
                  <div className="uui-navbar07_dropdown-link-list">
                    <Link to="/asc" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/ASC.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.asc.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.asc.desc')}</div>
                      </div>
                    </Link>
                    <Link to="/technology" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Technology.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.technology.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.technology.desc')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ac" className="uui-navbar07_menu-dropdown w-dropdown" {...dropdownEvents('build')}>
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-block-5"><strong className="bold-text">{t('nav.build')}</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2b2" className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'build' ? 'is-open w--open' : ''}`} {...dropdownListEvents('build')}>
                <div className="uui-navbar07_mega-layout">
                  <div className="uui-navbar07_dropdown-link-list">
                    <a href="https://docs.massa.net/" target="_blank" className="uui-navbar07_dropdown-link w-inline-block" rel="noreferrer" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Docs.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.docs.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.docs.desc')}</div>
                      </div>
                    </a>
                    <Link to="/grants-bounty" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Bounties.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.grants.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.grants.desc')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2c4" className="uui-navbar07_menu-dropdown w-dropdown" {...dropdownEvents('explore')}>
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-block-5"><strong className="bold-text">{t('nav.explore')}</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ca" className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'explore' ? 'is-open w--open' : ''}`} {...dropdownListEvents('explore')}>
                <div className="uui-navbar07_mega-layout">
                  <div className="uui-navbar07_dropdown-link-list">
                    <Link to="/ecosystem" className="uui-navbar07_dropdown-link-copy-copy w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Ecosystem.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.ecosystem.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.ecosystem.desc')}</div>
                      </div>
                    </Link>
                    <Link to="/get-mas" className="uui-navbar07_dropdown-link-copy-copy w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper">
                        <svg width="24" height="24" viewBox="0 0 143 137" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M51.4872 3.48112L51.2336 3.88765L51.1322 3.7098L51.3351 3.37949L45.7552 0.0256348L38.7042 11.7895L44.4363 15.2196L40.9108 21.0889L46.4907 24.4427L46.5668 24.2903L46.6682 24.4681L46.7443 24.5952L52.3749 27.9744L48.8495 33.8437L43.1174 30.4136L39.5919 36.2829L34.2403 33.0561H33.733L30.3344 38.722L24.6023 35.292L21.0768 41.1612H21.0261L26.7835 44.6167L23.4102 50.2319L23.7146 50.7654L28.9901 53.916L25.4646 59.7853L31.1967 63.2154L27.6712 69.0846L21.9645 65.6545H21.7616L21.8123 65.5529L16.2324 62.199L12.7069 68.0683L6.84806 64.5366L6.36616 65.375H6.56906L4.15956 69.4149C4.15956 69.3133 4.15956 69.2117 4.15956 69.11L3.3733 70.4312L3.52548 70.5329L0 76.4021L5.5799 79.756L5.73208 79.5019H5.93498L5.73208 79.8322L11.312 83.1861L14.8375 77.3168L20.5695 80.7469L24.095 74.8776L35.5338 81.7632L39.0593 75.894L44.6645 79.2732L48.19 73.404L42.5848 70.0247L46.1102 64.1555L40.3782 60.7254L43.9036 54.8561L41.3166 53.3062L38.1716 51.4006L41.6971 45.5314L47.4291 48.9615L50.9546 43.0922L56.6867 46.5223L60.2122 40.653L65.8174 44.0323L69.3429 38.1631L63.7376 34.7838L67.2631 28.9145L55.9765 22.1306L59.502 16.2614L53.6431 12.7296L57.1686 6.86039L51.5887 3.50653L51.4872 3.48112Z" fill="currentColor" />
                          <path d="M107.819 137L93.8946 112.812L81.7456 133.875H66.0712L53.9476 112.812L40.0486 136.949L37.9688 135.755C33.4541 133.163 29.2185 130.089 25.4394 126.608L24.019 125.312L45.9835 87.1241H46.5415L46.6937 86.9717H61.8355L73.9845 108.035L86.1334 86.9717H101.656L123.747 125.287L122.377 126.608C119.004 129.835 115.073 132.757 109.975 135.755L107.87 137H107.819ZM30.1316 124.347C32.6932 126.532 35.4325 128.565 38.2985 130.343L53.9476 103.157L68.8611 129.047H78.981L93.8946 103.157L109.544 130.318C112.663 128.361 115.301 126.405 117.584 124.372L98.7897 91.7992H88.8219L73.9084 117.69L58.9949 91.7992H48.8242L30.1062 124.347H30.1316Z" fill="currentColor" />
                          <path d="M142.363 67.4075C142.211 70.4564 141.78 73.6578 140.994 77.3928H102.949L97.9017 68.627L112.815 42.7363H82.9882L77.9409 33.9705L97.6227 0C100.819 1.16877 103.887 2.5408 106.779 4.1161L90.166 32.9034H120.018L125.066 41.5421L110.152 67.4329H142.363V67.4075Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.buyMas.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.buyMas.desc')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2d4" className="uui-navbar07_menu-dropdown w-dropdown" {...dropdownEvents('community')}>
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-block-5"><strong className="bold-text">{t('nav.community')}</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2da" className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'community' ? 'is-open w--open' : ''}`} {...dropdownListEvents('community')}>
                <div className="uui-navbar07_mega-layout">
                  <div className="uui-navbar07_dropdown-link-list">
                    <a href="https://forum.massa.community/" target="_blank" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img src="/images/Forum.svg" loading="lazy" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.forum.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.forum.desc')}</div>
                      </div>
                    </a>
                    <Link to="/ambassador" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img src="/images/Ambassador.svg" loading="lazy" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.ambassador.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.ambassador.desc')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>

            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ec" className="uui-navbar07_menu-dropdown w-dropdown" {...dropdownEvents('about')}>
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.67" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="text-block-5"><strong className="bold-text">{t('nav.about')}</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2f2" className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'about' ? 'is-open w--open' : ''}`} {...dropdownListEvents('about')}>
                <div className="uui-navbar07_mega-layout">
                  <div className="uui-navbar07_dropdown-link-list">
                    <Link to="/team" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img src="/images/Team.svg" loading="lazy" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.team.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.team.desc')}</div>
                      </div>
                    </Link>
                    <Link to="/blog" className="uui-navbar07_dropdown-link w-inline-block" onClick={handleLinkClick}>
                      <div className="uui-navbar07_icon-wrapper"><img src="/images/Blog.svg" loading="lazy" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.blog.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.blog.desc')}</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </nav>
            </div>
              </>
            )}
          </div>

          <div className="uui-navbar07_menu-right">
            {isMobileMenu ? (
              <>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>{languageDropdown}</div>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Link to="/start" className="button w-button" onClick={handleLinkClick}>
                    {t('nav.getStarted')}
                  </Link>
                </div>
                <div className="div-block-25" style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                  <a href="https://discord.com/invite/massa" className="link-block w-inline-block"><img src="/images/Discord.svg" loading="lazy" alt="" /></a>
                  <a href="https://x.com/massachain" className="link-block-2 w-inline-block"><img src="/images/X.svg" loading="lazy" alt="" /></a>
                </div>
              </>
            ) : (
              <>
                {languageDropdown}
                <Link to="/start" className="link-block-7 w-inline-block">
                  <div className="textlink">{t('nav.getStarted')}</div>
                </Link>
                <div className="div-block-25">
                  <a href="https://discord.com/invite/massa" className="link-block w-inline-block"><img src="/images/Discord.svg" loading="lazy" alt="" /></a>
                  <a href="https://x.com/massachain" className="link-block-2 w-inline-block"><img src="/images/X.svg" loading="lazy" alt="" /></a>
                </div>
              </>
            )}
          </div>
        </nav>
        <div className={`uui-navbar07_menu-button w-nav-button ${open ? 'w--open' : ''}`} onClick={() => setOpen(!open)}>
          <div className="menu-icon_component">
            {open ? (
              <>
                <div className="menu-icon_line-top" style={{ transform: 'rotate(45deg) translate(5px, 5px)' }} />
                <div className="menu-icon_line-middle" style={{ opacity: 0 }} />
                <div className="menu-icon_line-bottom" style={{ transform: 'rotate(-45deg) translate(7px, -6px)' }} />
              </>
            ) : (
              <>
                <div className="menu-icon_line-top" />
                <div className="menu-icon_line-middle">
                  <div className="menu-icon_line-middle-inner" />
                </div>
                <div className="menu-icon_line-bottom" />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
