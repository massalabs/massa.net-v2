import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { LANGUAGES, type LocaleCode } from '../i18n/localeMeta'
import { useLanguage } from '../i18n/LanguageContext'

type MegaSpotlightData = {
  titleKey: string
  textKey: string
  href: string
  image: string
  external?: boolean
}

const MEGA_SPOTLIGHT: Record<string, MegaSpotlightData> = {
  products: {
    titleKey: 'mega.products.title',
    textKey: 'mega.products.text',
    href: '/deweb',
    image: encodeURI('/images/89b1956c9b306c972c5685d9f0e522df.png'),
  },
  solutions: {
    titleKey: 'mega.solutions.title',
    textKey: 'mega.solutions.text',
    href: '/technology',
    image: '/images/Group.png',
  },
  build: {
    titleKey: 'mega.build.title',
    textKey: 'mega.build.text',
    href: 'https://docs.massa.net/',
    image: '/images/youtube-deweb-thumb.jpg',
    external: true,
  },
  explore: {
    titleKey: 'mega.explore.title',
    textKey: 'mega.explore.text',
    href: '/ecosystem',
    image: '/images/Group-1.png',
  },
  community: {
    titleKey: 'mega.community.title',
    textKey: 'mega.community.text',
    href: 'https://forum.massa.community/',
    image: encodeURI('/images/gossip preview.png'),
    external: true,
  },
  about: {
    titleKey: 'mega.about.title',
    textKey: 'mega.about.text',
    href: '/blog',
    image: '/images/youtube-deweb-thumb.jpg',
  },
}

export function Navbar() {
  const { locale, setLocale, t } = useLanguage()
  const [langMenuOpen, setLangMenuOpen] = useState(false)
  const langMenuRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null)

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

  const toggleDropdown = (id: string) => {
    setOpenDropdown((current) => (current === id ? null : current))
  }

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
    if (isMobile) {
      return {
        onClick: (e: React.MouseEvent) => {
          e.preventDefault()
          e.stopPropagation()
          toggleDropdown(id)
        },
      }
    }
    return {
      onPointerEnter: () => handleDropdownEnter(id),
      onPointerLeave: () => handleDropdownLeave(id),
    }
  }

  const dropdownListEvents = (id: string) => {
    if (isMobile) {
      return {}
    }
    return {
      onPointerEnter: () => handleDropdownEnter(id),
      onPointerLeave: () => handleDropdownLeave(id),
    }
  }

  useEffect(() => {
    if (isMobile && openDropdown) {
      const handleClickOutside = () => {
        setOpenDropdown(null)
      }
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobile, openDropdown])

  const handleLinkClick = () => {
    if (isMobile) {
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

  const renderMegaSpotlight = (id: string) => {
    const card = MEGA_SPOTLIGHT[id]
    if (!card) return null

    const body = (
      <>
        <div className="uui-navbar07_mega-card-media">
          <img src={card.image} alt="" loading="lazy" className="uui-navbar07_mega-card-img" />
        </div>
        <div className="uui-navbar07_mega-card-body">
          <div className="uui-navbar07_mega-card-title">{t(card.titleKey)}</div>
          <div className="uui-navbar07_mega-card-text">{t(card.textKey)}</div>
        </div>
      </>
    )

    return (
      <div className="uui-navbar07_mega-right">
        {card.external ? (
          <a
            href={card.href}
            target="_blank"
            rel="noreferrer"
            className="uui-navbar07_mega-card"
            onClick={handleLinkClick}
          >
            {body}
          </a>
        ) : (
          <Link to={card.href} className="uui-navbar07_mega-card" onClick={handleLinkClick}>
            {body}
          </Link>
        )}
      </div>
    )
  }

  return (
    <div data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb285" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="uui-navbar07_component w-nav">
      <div className="uui-navbar07_container">
        <Link to="/" aria-current="page" className="uui-navbar07_logo-link w-nav-brand w--current">
          <div className="uui-logo_component"><img width="120" loading="lazy" alt="" src="/images/LOGO.svg" /></div>
        </Link>
        <nav role="navigation" className={`uui-navbar07_menu w-nav-menu ${open ? 'w--open' : ''}`} {...(open ? { 'data-nav-menu-open': '' } : {})}>
          <div className="uui-navbar07_menu-left">
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
                      <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Ecosystem.svg" alt="" /></div>
                      <div className="uui-navbar07_item-right">
                        <div className="uui-navbar07_item-heading">{t('nav.item.gossip.title')}</div>
                        <div className="uui-text-size-small">{t('nav.item.gossip.desc')}</div>
                      </div>
                    </Link>
                  </div>
                  {renderMegaSpotlight('products')}
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
                  {renderMegaSpotlight('solutions')}
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
                  {renderMegaSpotlight('build')}
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
                  {renderMegaSpotlight('explore')}
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
                  {renderMegaSpotlight('community')}
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
                  {renderMegaSpotlight('about')}
                </div>
              </nav>
            </div>
          </div>

          <div className="uui-navbar07_menu-right">
            {isMobile ? (
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
