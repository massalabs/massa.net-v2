import { useEffect, useRef, useState, type CSSProperties } from 'react'
import { useBlogPosts } from '../hooks/useContentData'
import { SEO } from '../components/SEO'
import { useLanguage } from '../i18n/LanguageContext'

const SLIDER_SLIDES = [
  {
    id: 'gossip' as const,
    ctaHref: '/gossip',
    image: '/images/gossip%20preview.png',
    background: '#3AF3D1',
  },
  {
    id: 'deweb' as const,
    ctaHref: '/deweb',
    image: '/images/89b1956c9b306c972c5685d9f0e522df.png',
    background: '#0000A8',
  },
  {
    id: 'asc' as const,
    ctaHref: '/asc',
    image: '/images/ASC.svg',
    background: '#FFFF00',
  },
] as const

const DEWEB_BG_LOGOS = Array.from({ length: 20 }, (_, i) => `/images/logo_${i + 1}.svg`)
const GOSSIP_BG_HEADS = Array.from({ length: 42 }, (_, index) => ({
  src: `/images/Head${(index % 4) + 1}.svg`,
  x: (index * 17 + (index % 3) * 7) % 100,
  y: (index * 29 + (index % 5) * 11) % 100,
  driftX: ((index % 9) - 4) * 7,
  driftY: ((index % 7) - 3) * 9,
  duration: 14 + (index % 10),
  delay: (index % 9) * -1.5,
  size: 10 + (index % 5) * 4,
  alpha: 0.14 + (index % 6) * 0.08,
}))

const halton = (index: number, base: number) => {
  let result = 0
  let f = 1 / base
  let i = index
  while (i > 0) {
    result += f * (i % base)
    i = Math.floor(i / base)
    f /= base
  }
  return result
}

const ASC_BG_ICONS = Array.from({ length: 44 }, (_, index) => {
  const sources = [
    '/images/deweb.svg',
    '/images/ASC.svg',
    '/images/Technology.svg',
    '/images/Docs.svg',
    '/images/Bounties.svg',
    '/images/Forum.svg',
    '/images/Ambassador.svg',
    '/images/Team.svg',
    '/images/Blog.svg',
  ]
  const hX = halton(index + 1, 2)
  const hY = halton(index + 1, 3)
  return {
    src: sources[index % sources.length],
    x: 6 + hX * 88,
    y: 8 + hY * 84,
    driftX: ((index % 9) - 4) * 6,
    driftY: ((index % 7) - 3) * 8,
    duration: 15 + (index % 8),
    delay: (index % 10) * -1.4,
    size: 12 + (index % 4) * 3,
    alpha: 0.08 + (index % 5) * 0.03,
  }
})

const DEWEB_BG_ICONS = Array.from({ length: 58 }, (_, index) => {
  const hX = halton(index + 1, 2)
  const hY = halton(index + 1, 3)
  return {
    variant: index % 9,
    x: 5 + hX * 90,
    y: 6 + hY * 88,
    driftX: ((index % 11) - 5) * 6,
    driftY: ((index % 9) - 4) * 7,
    duration: 13 + (index % 9),
    delay: (index % 10) * -1.25,
    width: 22 + (index % 5) * 8,
    height: 10 + (index % 4) * 4,
    alpha: 0.14 + (index % 5) * 0.06,
  }
})

type FloatingVarsStyle = CSSProperties & {
  '--drift-x': string
  '--drift-y': string
  '--float-duration': string
  '--float-delay': string
}

const renderDewebWebIcon = (variant: number) => {
  switch (variant) {
    case 0:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
          <path d="M3 12h18M12 3c2.6 2.1 4 5.4 4 9s-1.4 6.9-4 9c-2.6-2.1-4-5.4-4-9s1.4-6.9 4-9Z" stroke="currentColor" strokeWidth="1.7" />
        </svg>
      )
    case 1:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 3.5v17M4.5 12h15M6.5 7.5c1.6 1 3.4 1.5 5.5 1.5s3.9-.5 5.5-1.5M6.5 16.5c1.6-1 3.4-1.5 5.5-1.5s3.9.5 5.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 2:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.2" fill="currentColor" />
          <circle cx="5" cy="7" r="1.5" fill="currentColor" />
          <circle cx="19" cy="8" r="1.5" fill="currentColor" />
          <circle cx="6.5" cy="17.5" r="1.5" fill="currentColor" />
          <circle cx="17.5" cy="17.5" r="1.5" fill="currentColor" />
          <path d="M12 12 5 7M12 12l7-4M12 12l-5.5 5.5M12 12l5.5 5.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 3:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="5" width="17" height="12.5" rx="2.2" stroke="currentColor" strokeWidth="1.7" />
          <path d="M7 20h10M9 17.5v2.5m6-2.5v2.5M6.5 9.5h11M9.5 7.5v4M14.5 7.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 4:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 12.5 8 8l3 3 5-5 4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 18.5h17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          <circle cx="8" cy="8" r="1.3" fill="currentColor" />
          <circle cx="11" cy="11" r="1.3" fill="currentColor" />
          <circle cx="16" cy="6" r="1.3" fill="currentColor" />
          <circle cx="20" cy="10" r="1.3" fill="currentColor" />
        </svg>
      )
    case 5:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 3.2 20.2 7.9v8.2L12 20.8 3.8 16.1V7.9L12 3.2Z" stroke="currentColor" strokeWidth="1.7" />
          <path d="M12 3.2v17.6M3.8 7.9 12 12l8.2-4.1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 6:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" stroke="currentColor" strokeWidth="2" />
          <path d="M3 12h18M12 3v18M7 7.5h10M7 16.5h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
        </svg>
      )
    case 7:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.4" stroke="currentColor" strokeWidth="1.8" strokeDasharray="1.2 2.1" strokeLinecap="round" />
          <path d="M3.8 12h16.4M12 3.8v16.4M6.8 8.2c1.4.7 3.1 1 5.2 1 2.1 0 3.8-.3 5.2-1M6.8 15.8c1.4-.7 3.1-1 5.2-1 2.1 0 3.8.3 5.2 1" stroke="currentColor" strokeWidth="1.4" strokeDasharray="0.8 2" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8.8" stroke="currentColor" strokeWidth="1.7" />
          <circle cx="7.2" cy="10.2" r="0.9" fill="currentColor" />
          <circle cx="13.5" cy="7.2" r="0.9" fill="currentColor" />
          <circle cx="16.8" cy="13.8" r="0.9" fill="currentColor" />
          <path d="M7.2 10.2 13.5 7.2 16.8 13.8 10.1 16.5 7.2 10.2Z" stroke="currentColor" strokeWidth="1.2" />
        </svg>
      )
  }
}

/** Cards "The Internet is Not Free" — clés i18n : home.internet.<icon>.title / .text */
const INTERNET_NOT_FREE_ICONS = ['gatekeepers', 'server', 'shield', 'database', 'target', 'lock'] as const

/** Icônes SVG pour les cards */
const CARD_ICONS: Record<string, React.ReactNode> = {
  gatekeepers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  server: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="18" y1="6" x2="18.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" /><line x1="18" y1="18" x2="18.01" y2="18" />
    </svg>
  ),
  shield: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  target: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  lock: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width={28} height={28}>
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  ),
}

export function Home() {
  const { t } = useLanguage()
  const blogPosts = useBlogPosts()
  const sliderSectionRef = useRef<HTMLElement>(null)
  const hoverEnterTimerRef = useRef<number | null>(null)
  const hoverLeaveTimerRef = useRef<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [dewebLogoIndex, setDewebLogoIndex] = useState(0)
  const [isDesktop, setIsDesktop] = useState(() => window.innerWidth >= 992)
  const [isSliderHovered, setIsSliderHovered] = useState(false)
  useEffect(() => {
    document.body.classList.add('page-home-theme')
    return () => {
      document.body.classList.remove('page-home-theme')
    }
  }, [])

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    return () => {
      if (hoverEnterTimerRef.current) window.clearTimeout(hoverEnterTimerRef.current)
      if (hoverLeaveTimerRef.current) window.clearTimeout(hoverLeaveTimerRef.current)
    }
  }, [])

  useEffect(() => {
    document.body.classList.remove('page-home-hover-gossip', 'page-home-hover-deweb', 'page-home-hover-asc')
    if (isDesktop && isSliderHovered) {
      const slideId = SLIDER_SLIDES[currentSlide].id
      document.body.classList.add(`page-home-hover-${slideId}`)
    }
  }, [isDesktop, isSliderHovered, currentSlide])

  const isSliderFullscreen = isDesktop && isSliderHovered

  useEffect(() => {
    if (SLIDER_SLIDES[currentSlide].id !== 'deweb') return
    const intervalId = window.setInterval(() => {
      setDewebLogoIndex((prev) => (prev + 1) % DEWEB_BG_LOGOS.length)
    }, 700)
    return () => window.clearInterval(intervalId)
  }, [currentSlide])
  const goToSlide = (index: number) => {
    // Boucle infinie : si index < 0, aller à la dernière slide, si index >= length, aller à la première
    if (index < 0) {
      setCurrentSlide(SLIDER_SLIDES.length - 1)
    } else if (index >= SLIDER_SLIDES.length) {
      setCurrentSlide(0)
    } else {
      setCurrentSlide(index)
    }
  }

  const goNext = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1
      return next >= SLIDER_SLIDES.length ? 0 : next
    })
  }
  
  const goPrev = () => {
    setCurrentSlide((prev) => {
      const prevIndex = prev - 1
      return prevIndex < 0 ? SLIDER_SLIDES.length - 1 : prevIndex
    })
  }

  const activeTheme = isDesktop && isSliderHovered ? SLIDER_SLIDES[currentSlide].id : 'home'
  const themeBackground: Record<'home' | 'gossip' | 'deweb' | 'asc', string> = {
    home: '#FFFFFF',
    gossip: '#3AF3D1',
    deweb: '#0000A8',
    asc: '#FFFF00',
  }
  const themeForeground: Record<'home' | 'gossip' | 'deweb' | 'asc', string> = {
    home: '#000000',
    gossip: '#18181B',
    deweb: '#ECECEC',
    asc: '#1E1D03',
  }
  
  const handleSliderMouseEnter = () => {
    if (hoverLeaveTimerRef.current) {
      window.clearTimeout(hoverLeaveTimerRef.current)
      hoverLeaveTimerRef.current = null
    }
    if (hoverEnterTimerRef.current) window.clearTimeout(hoverEnterTimerRef.current)
    hoverEnterTimerRef.current = window.setTimeout(() => setIsSliderHovered(true), 120)
  }

  const handleSliderMouseLeave = () => {
    if (hoverEnterTimerRef.current) {
      window.clearTimeout(hoverEnterTimerRef.current)
      hoverEnterTimerRef.current = null
    }
    if (hoverLeaveTimerRef.current) window.clearTimeout(hoverLeaveTimerRef.current)
    hoverLeaveTimerRef.current = window.setTimeout(() => setIsSliderHovered(false), 160)
  }

  return (
    <>
      <SEO title={t('home.seo.title')} description={t('home.seo.description')} />
    <div>
      {/* Hero Section */}
      <header className="uui-section_heroheader14 hero-home">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <div className="uui-button-row button-row-center">
                    <div className="uui-heading-xlarge">{t('home.hero.heading')}</div>
                  </div>
                  <h1 className="text-block-7">{t('home.hero.subheading')}</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge">{t('home.hero.body')}</div>
                  </div>
                  <div className="uui-space-large"></div>
                  <div className="uui-button-row button-row-center is-reverse-mobile-landscape">
                    <a href="https://usegossip.massa.network/" target="_blank" rel="noreferrer" className="button w-button">{t('home.hero.ctaGossip')}</a>
                    <a href="https://docs.massa.net/" className="button w-button">{t('home.hero.ctaBuild')}</a>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-home-bottom-logos" aria-hidden="true">
          <img src="/images/logo_1.svg" alt="" className="hero-home-bottom-logo" />
          <img src="/images/gossiplogo.svg" alt="" className="hero-home-bottom-logo" />
        </div>
      </header>

      {/* Slider Gossip / DeWeb / ASC */}
      <section
        ref={sliderSectionRef}
        className={`uui-section_layout38 slide-${SLIDER_SLIDES[currentSlide].id}`}
        onMouseEnter={handleSliderMouseEnter}
        onMouseLeave={handleSliderMouseLeave}
        style={{
          height: isSliderFullscreen ? '95vh' : '82vh',
          minHeight: isSliderFullscreen ? '95vh' : '520px',
          maxHeight: isSliderFullscreen ? '95vh' : '82vh',
          display: 'flex',
          flexDirection: 'column',
          background: themeBackground[activeTheme],
          transition: 'background 260ms ease, height 220ms ease, min-height 220ms ease, max-height 220ms ease',
          color: themeForeground[activeTheme],
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {SLIDER_SLIDES[currentSlide].id === 'gossip' && (
          <div className="home-gossip-floating-heads" aria-hidden="true">
            {GOSSIP_BG_HEADS.map((head, index) => (
              <img
                key={`home-gossip-head-${index}`}
                src={head.src}
                alt=""
                className="home-gossip-floating-head"
                style={{
                  '--drift-x': `${head.driftX}px`,
                  '--drift-y': `${head.driftY}px`,
                  '--float-duration': `${head.duration}s`,
                  '--float-delay': `${head.delay}s`,
                  left: `${head.x}%`,
                  top: `${head.y}%`,
                  width: `${head.size}px`,
                  height: `${head.size}px`,
                  opacity: head.alpha,
                } as FloatingVarsStyle}
              />
            ))}
          </div>
        )}

        {SLIDER_SLIDES[currentSlide].id === 'asc' && (
          <div className="home-asc-floating-icons" aria-hidden="true">
            {ASC_BG_ICONS.map((icon, index) => (
              <img
                key={`home-asc-icon-${index}`}
                src={icon.src}
                alt=""
                className="home-asc-floating-icon"
                style={{
                  '--drift-x': `${icon.driftX}px`,
                  '--drift-y': `${icon.driftY}px`,
                  '--float-duration': `${icon.duration}s`,
                  '--float-delay': `${icon.delay}s`,
                  left: `${icon.x}%`,
                  top: `${icon.y}%`,
                  width: `${icon.size}px`,
                  height: `${icon.size}px`,
                  opacity: icon.alpha,
                } as FloatingVarsStyle}
              />
            ))}
          </div>
        )}

        {SLIDER_SLIDES[currentSlide].id === 'deweb' && (
          <div className="home-deweb-floating-icons" aria-hidden="true">
            {DEWEB_BG_ICONS.map((icon, index) => (
              <span
                key={`home-deweb-icon-${index}`}
                className={`home-deweb-floating-icon deweb-web-icon--${icon.variant === 6 ? 'pixel' : icon.variant === 7 ? 'dot' : icon.variant === 8 ? 'blur' : 'classic'}`}
                style={{
                  '--drift-x': `${icon.driftX}px`,
                  '--drift-y': `${icon.driftY}px`,
                  '--float-duration': `${icon.duration}s`,
                  '--float-delay': `${icon.delay}s`,
                  left: `${icon.x}%`,
                  top: `${icon.y}%`,
                  width: `${icon.width}px`,
                  height: `${icon.height}px`,
                  opacity: icon.alpha,
                } as FloatingVarsStyle}
              >
                {renderDewebWebIcon(icon.variant)}
              </span>
            ))}
          </div>
        )}

        {/* Slider = toute la section : track en flex 1, un slide à la fois */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
          }}
        >
          <div style={{ overflow: 'hidden', flex: 1, width: '100%', minHeight: 0 }}>
            <div
              style={{
                display: 'flex',
                width: `${SLIDER_SLIDES.length * 100}%`,
                height: '100%',
                transform: `translateX(-${currentSlide * (100 / SLIDER_SLIDES.length)}%)`,
                transition: 'transform 0.4s ease-out',
              }}
            >
              {SLIDER_SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  style={{
                    width: `${100 / SLIDER_SLIDES.length}%`,
                    flexShrink: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '0 clamp(1rem, 3vw, 2rem) 0',
                    minHeight: '100%',
                    boxSizing: 'border-box',
                  }}
                >
                  <div
                    className="uui-page-padding-2"
                    style={{
                      width: '100%',
                      maxWidth: '1200px',
                      display: 'flex',
                      flexDirection: slide.id === 'asc' ? 'column' : 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: 'clamp(1rem, 2vw, 1.5rem)',
                      flex: 1,
                      minHeight: 0,
                      paddingBottom: 0,
                      paddingTop: '0.5rem',
                    }}
                  >
                    <div
                      className="uui-text-align-center-2"
                      style={{
                        flexShrink: 0,
                        textAlign: slide.id === 'asc' ? 'center' : 'left',
                        flex: slide.id === 'asc' ? '0 0 auto' : '0 1 50%',
                      }}
                    >
                      <div className="uui-max-width-large-2" style={{ margin: 0 }}>
                        {slide.id === 'deweb' ? (
                          <div className="deweb-logos-marquee" aria-hidden="true">
                            <img
                              key={`deweb-title-logo-${dewebLogoIndex}`}
                              src={DEWEB_BG_LOGOS[dewebLogoIndex]}
                              alt=""
                              className="deweb-title-logo-single"
                            />
                          </div>
                        ) : (
                          <h2
                            className="heading-4-center slide-title"
                            style={{
                              fontFamily: "'Space Grotesk', sans-serif",
                              fontWeight: 500,
                              fontSize: 'clamp(2rem, 5vw, 64px)',
                              lineHeight: 1.35,
                              letterSpacing: '-0.0182em',
                              color: themeForeground[activeTheme],
                              backgroundColor: 'unset',
                              background: 'unset',
                              margin: 0,
                              textAlign: slide.id === 'asc' ? 'center' : 'left',
                            }}
                          >
                            {t(`home.slider.${slide.id}.title`)}
                          </h2>
                        )}
                        <div className="uui-space-xsmall" />
                        <h2 className="uui-heading-medium" style={{ color: themeForeground[activeTheme], fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', textAlign: slide.id === 'asc' ? 'center' : 'left' }}>
                          {t(`home.slider.${slide.id}.subtitle`)}
                        </h2>
                        <div className="uui-space-xsmall" />
                        <p className="text-block-9" style={{ color: themeForeground[activeTheme], maxWidth: slide.id === 'asc' ? '520px' : '100%', margin: slide.id === 'asc' ? '0 auto 0.5rem' : '0 0 0.5rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', textAlign: slide.id === 'asc' ? 'center' : 'left' }}>
                          {t(`home.slider.${slide.id}.description`)}
                        </p>
                        <a href={slide.ctaHref} className="button-blue-inverted w-button slider-cta" style={{ display: slide.id === 'asc' ? 'inline-block' : undefined }}>
                          {t(`home.slider.${slide.id}.cta`)}
                        </a>
                      </div>
                    </div>
                    {slide.id !== 'asc' && (
                      <div
                        style={{
                          maxWidth: slide.id === 'gossip' ? '280px' : 'min(500px, 55%)',
                          maxHeight: slide.id === 'deweb' ? '55vh' : '45vh',
                          alignSelf: 'center',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
                          display: 'flex',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <img
                          src={slide.image}
                          alt={t(`home.slider.${slide.id}.imageAlt`)}
                          loading="lazy"
                          style={{
                            width: '100%',
                            height: 'auto',
                            maxHeight: slide.id === 'deweb' ? '55vh' : '45vh',
                            display: 'block',
                            objectFit: 'contain',
                            objectPosition: 'bottom',
                          }}
                          onError={(e) => {
                            const img = e.target as HTMLImageElement
                            img.style.display = 'none'
                            const placeholder = document.createElement('div')
                            placeholder.style.cssText = 'width: 100%; padding: 60px 20px; background: rgba(255,255,255,0.08); text-align: center; color: rgba(255,255,255,0.6);'
                            placeholder.textContent = t(`home.slider.${slide.id}.imageAlt`)
                            img.parentElement?.appendChild(placeholder)
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation: flèches + dots — centrée comme le contenu (max-width 1200px) */}
          <div
            style={{
              position: 'absolute',
              bottom: '1.25rem',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '100%',
              maxWidth: '1200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1.5rem',
              padding: '0.75rem 1rem',
              flexWrap: 'wrap',
              zIndex: 20,
              pointerEvents: 'auto',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              aria-label={t('a11y.slidePrev')}
              onClick={goPrev}
              style={{
                background: 'rgba(0,0,0,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                color: themeForeground[activeTheme],
                cursor: 'pointer',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
              {SLIDER_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={t('a11y.goSlide', { n: i + 1 })}
                  onClick={() => goToSlide(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === i
                      ? themeForeground[activeTheme]
                      : 'rgba(0,0,0,0.25)',
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label={t('a11y.slideNext')}
              onClick={goNext}
              style={{
                background: 'rgba(0,0,0,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                color: themeForeground[activeTheme],
                cursor: 'pointer',
                opacity: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section "The Internet is Not Free" — fond SVG onde */}
      <section
        className="section-internet-not-free"
        style={{
          width: '100%',
          color: 'var(--home-dyn-fg, #FFFFFF)',
          padding: 'clamp(4rem, 10vw, 8rem) 1.5rem',
        }}
      >
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '28px',
            maxWidth: '1309px',
            margin: '0 auto',
          }}
        >
        <header
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            gap: '12px 40px',
            width: '100%',
          }}
        >
          <h2
            style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 500,
              fontSize: 'clamp(2rem, 5vw, 64px)',
              lineHeight: 1.35,
              letterSpacing: '-0.0182em',
              color: 'var(--home-dyn-fg, #FFFFFF)',
              margin: 0,
              flex: '1 1 100%',
            }}
          >
            {t('home.internet.title')}
          </h2>
        </header>

        <div
          style={{
            boxSizing: 'border-box',
            width: '100%',
            borderTop: '1px solid var(--home-dyn-fg, #FFFFFF)',
            paddingTop: '28px',
          }}
        >
          <div
            className="internet-not-free-cards"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: '1fr',
              gap: '1.5rem',
            }}
          >
            {INTERNET_NOT_FREE_ICONS.map((icon) => (
              <div
                key={icon}
                className="internet-not-free-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '1.5rem',
                  boxSizing: 'border-box',
                  background: 'rgba(0, 0, 0, 0.35)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ color: 'var(--home-dyn-fg, #FFFFFF)' }}>
                  {CARD_ICONS[icon]}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.25rem',
                    lineHeight: '1.4',
                    letterSpacing: '-0.5px',
                    margin: 0,
                    fontWeight: 600,
                    color: 'var(--home-dyn-fg, #FFFFFF)',
                  }}
                >
                  {t(`home.internet.${icon}.title`)}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '1.6',
                    letterSpacing: '-0.3px',
                    margin: 0,
                    color: 'var(--home-dyn-fg, #FFFFFF)',
                  }}
                >
                  {t(`home.internet.${icon}.text`)}
                </p>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      {/* Social Section — fond pixel, cards style internet-not-free */}
      <section className="section-follow-journey">
        <div className="follow-journey-content">
          <h2
            className="follow-journey-title"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(2rem, 5vw, 64px)',
              lineHeight: 1.35,
              letterSpacing: '-0.0182em',
              color: '#FFFFFF',
              margin: '0 0 1.5rem 0',
            }}
          >
            {t('home.follow.title')}
          </h2>
          <div className="follow-journey-cards">
            <a href="https://x.com/massachain" className="follow-journey-card" target="_blank" rel="noopener noreferrer">
              <img src="/images/X_1.svg" alt="X (Twitter)" className="follow-journey-logo" />
              <span className="follow-journey-label">X (Twitter)</span>
            </a>
            <a href="https://t.me/massanetwork" className="follow-journey-card" target="_blank" rel="noopener noreferrer">
              <img src="/images/Telegram.svg" alt="Telegram" className="follow-journey-logo" />
              <span className="follow-journey-label">Telegram</span>
            </a>
            <a href="https://discord.com/invite/massa" className="follow-journey-card" target="_blank" rel="noopener noreferrer">
              <img src="/images/Discord.svg" alt="Discord" className="follow-journey-logo" />
              <span className="follow-journey-label">Discord</span>
            </a>
            <a href="https://massachain.medium.com/" className="follow-journey-card" target="_blank" rel="noopener noreferrer">
              <img src="/images/mediumblue.svg" alt="Medium" className="follow-journey-logo" />
              <span className="follow-journey-label">Medium</span>
            </a>
          </div>
        </div>
        <footer className="uui-footer05_component">
          <div className="uui-page-padding-8">
            <div className="uui-container-large-5"></div>
          </div>
        </footer>
      </section>

      {/* Blog Section — titre au-dessus (jaune) + bloc SVG + cards */}
      <section className="section-6 section-blog">
        <div className="section-blog-header">
          <h2
            className="section-blog-title"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 500,
              fontSize: 'clamp(2rem, 5vw, 64px)',
              lineHeight: 1.35,
              letterSpacing: '-0.0182em',
              color: '#0b0b0b',
              margin: 0,
            }}
          >
            {t('home.blog.title')}
          </h2>
        </div>
        <div className="section-blog-cards-block">
          <div className="section-blog-inner">
          <div className="blog_cards">
            {blogPosts.slice(0, 3).map(post => (
              <a
                key={post.id}
                href={`/blog/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blog_card"
              >
                {post.image && (
                  <div className="blog_card-image">
                    <img
                      src={encodeURI(post.image)}
                      loading="lazy"
                      alt={post.title}
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = '/images/Technology.svg'
                      }}
                    />
                  </div>
                )}
                <div className="blog_card-body">
                  <h3 className="blog_card-title">{post.title}</h3>
                  <p className="blog_card-excerpt">{post.excerpt}</p>
                  <span className="blog_card-cta">{t('home.blog.readMore')}</span>
                </div>
              </a>
            ))}
          </div>
          </div>
        </div>
      </section>

    </div>
    </>
  )
}

export default Home


