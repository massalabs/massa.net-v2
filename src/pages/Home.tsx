import { useRef, useState } from 'react'
import { MenuPictosBackground } from '../components/MenuPictosBackground'
import { HeroPictosBackground } from '../components/HeroPictosBackground'
import { useBlogPosts } from '../hooks/useContentData'
import { SEO } from '../components/SEO'

const SLIDER_SLIDES = [
  {
    id: 'gossip',
    title: 'Gossip',
    subtitle: 'Decentralized messaging, reimagined',
    description: 'A truly decentralized messaging application built on Massa blockchain. Experience secure, private, and censorship-resistant communication without relying on centralized servers.',
    ctaLabel: 'Explore Gossip',
    ctaHref: '/ecosystem',
    image: '/images/gossip%20preview.png',
    imageAlt: 'Gossip App - Mobile',
    background: '#3AF3D1',
  },
  {
    id: 'deweb',
    title: 'DeWeb',
    subtitle: 'The web as you know, 100% decentralized',
    description: 'Host your website and domain name in a fully decentralized way, permanently available and uncensorable.',
    ctaLabel: 'Learn more',
    ctaHref: '/deweb',
    image: '/images/89b1956c9b306c972c5685d9f0e522df.png',
    imageAlt: 'DeWeb Search - Hosting freedom, one block at a time',
    background: '#0000A8',
  },
  {
    id: 'asc',
    title: 'Autonomous Applications',
    subtitle: 'Smart contracts that run by themselves',
    description: 'Autonomous Smart Contracts (ASC) enable dApps to execute without constant external triggers. Build truly decentralized applications that operate 24/7 on the Massa network.',
    ctaLabel: 'Discover ASC',
    ctaHref: '/asc',
    image: '/images/ASC.svg',
    imageAlt: 'Autonomous Smart Contracts',
    background: '#FFFF00',
  },
] as const

/** Cards "The Internet is Not Free" — contenu + icône adaptée */
const INTERNET_NOT_FREE_CARDS_DATA = [
  {
    title: 'A handful of gatekeepers',
    text: 'Most websites run on a handful of providers, giving corporations the power to censor content, block users, or shut platforms down instantly.',
    icon: 'gatekeepers',
  },
  {
    title: 'Single points of failure',
    text: 'When one server or provider goes offline, entire services disappear. Outages, DDoS attacks, or government pressure can silence millions at once.',
    icon: 'server',
  },
  {
    title: 'No due process',
    text: 'Content can be removed, accounts banned, or domains seized without due process, threatening freedom of speech and open access to information.',
    icon: 'shield',
  },
  {
    title: 'Your data, their product',
    text: 'User data is stored in centralized databases that are mined, sold, or breached—turning users into products rather than owners of their data.',
    icon: 'database',
  },
  {
    title: 'Targets for exploitation',
    text: 'Centralized systems are prime targets for exploits, hacks, and surveillance, exposing users to privacy and security risks at scale.',
    icon: 'target',
  },
  {
    title: 'Access can be revoked',
    text: 'Platforms control your content, identity, and reach. Access can be revoked at any time, with no guarantees or transparency.',
    icon: 'lock',
  },
] as const

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
  const blogPosts = useBlogPosts()
  const sliderSectionRef = useRef<HTMLElement>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
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
  
  return (
    <>
      <SEO 
        title="The Host of Freedom"
        description="Massa is a layer 1 blockchain, and the first decentralized cloud network, bringing true decentralization to where it's needed through its technology."
      />
    <div>
      {/* Hero Section */}
      <header className="uui-section_heroheader14 hero-home">
        <HeroPictosBackground />
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <div className="uui-button-row button-row-center">
                    <div className="uui-heading-xlarge">The Internet that belongs to you, forever.</div>
                  </div>
                  <h1 className="text-block-7">The first decentralized cloud network</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge">Stop relying on fragile servers and big tech. Massa hosts your apps and data directly on a global network that no one can shut down, censor, or control.</div>
                  </div>
                  <div className="uui-space-large"></div>
                  <div className="uui-button-row button-row-center is-reverse-mobile-landscape">
                    <a href="/ecosystem" className="button w-button">Try Gossip Messenger</a>
                    <a href="https://docs.massa.net/" className="button w-button">Start Building</a>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Slider Gossip / DeWeb / ASC */}
      <section
        ref={sliderSectionRef}
        className={`uui-section_layout38 slide-${SLIDER_SLIDES[currentSlide].id}`}
        style={{
          height: '82vh',
          minHeight: '520px',
          maxHeight: '82vh',
          display: 'flex',
          flexDirection: 'column',
          background: SLIDER_SLIDES[currentSlide].background,
          transition: 'background 0.5s ease-out',
          color: { gossip: '#18181B', deweb: '#ECECEC', asc: '#000' }[SLIDER_SLIDES[currentSlide].id],
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Grille blanche — uniquement sur DeWeb */}
        {SLIDER_SLIDES[currentSlide].id === 'deweb' && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
              `,
              backgroundSize: '32px 32px',
              pointerEvents: 'none',
            }}
          />
        )}
        {/* Icônes — uniquement sur ASC */}
        {SLIDER_SLIDES[currentSlide].id === 'asc' && <MenuPictosBackground scoped variant="dark" />}

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
                        <h2
                          className="heading-4-center slide-title"
                          style={{
                            fontFamily: "'Space Grotesk', sans-serif",
                            fontWeight: 500,
                            fontSize: 'clamp(2rem, 5vw, 64px)',
                            lineHeight: 1.35,
                            letterSpacing: '-0.0182em',
                            color: { gossip: '#18181B', deweb: '#ECECEC', asc: '#000' }[slide.id],
                            backgroundColor: 'unset',
                            background: 'unset',
                            margin: 0,
                            textAlign: slide.id === 'asc' ? 'center' : 'left',
                          }}
                        >
                          {slide.title}
                        </h2>
                        <div className="uui-space-xsmall" />
                        <h2 className="uui-heading-medium" style={{ color: { gossip: '#18181B', deweb: '#ECECEC', asc: '#000' }[slide.id], fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', textAlign: slide.id === 'asc' ? 'center' : 'left' }}>
                          {slide.subtitle}
                        </h2>
                        <div className="uui-space-xsmall" />
                        <p className="text-block-9" style={{ color: slide.id === 'gossip' ? 'rgba(24,24,27,0.9)' : slide.id === 'deweb' ? 'rgba(236,236,236,0.9)' : 'rgba(0,0,0,0.85)', maxWidth: slide.id === 'asc' ? '520px' : '100%', margin: slide.id === 'asc' ? '0 auto 0.5rem' : '0 0 0.5rem', fontSize: 'clamp(0.875rem, 1.5vw, 1rem)', textAlign: slide.id === 'asc' ? 'center' : 'left' }}>
                          {slide.description}
                        </p>
                        <a href={slide.ctaHref} className="button-blue-inverted w-button slider-cta" style={{ display: slide.id === 'asc' ? 'inline-block' : undefined }}>
                          {slide.ctaLabel}
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
                          alt={slide.imageAlt}
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
                            placeholder.textContent = slide.imageAlt
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
              aria-label="Slide précédent"
              onClick={goPrev}
              style={{
                background: SLIDER_SLIDES[currentSlide].id === 'asc' ? 'rgba(0,0,0,0.15)' : SLIDER_SLIDES[currentSlide].id === 'gossip' ? 'rgba(24,24,27,0.15)' : 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                color: { gossip: '#18181B', deweb: '#ECECEC', asc: '#000' }[SLIDER_SLIDES[currentSlide].id],
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
                  aria-label={`Aller au slide ${i + 1}`}
                  onClick={() => goToSlide(i)}
                  style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    border: 'none',
                    background: currentSlide === i
                      ? { gossip: '#18181B', deweb: '#ECECEC', asc: '#000' }[SLIDER_SLIDES[currentSlide].id]
                      : (SLIDER_SLIDES[currentSlide].id === 'asc' ? 'rgba(0,0,0,0.4)' : SLIDER_SLIDES[currentSlide].id === 'gossip' ? 'rgba(24,24,27,0.4)' : 'rgba(236,236,236,0.4)'),
                    cursor: 'pointer',
                    padding: 0,
                  }}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Slide suivant"
              onClick={goNext}
              style={{
                background: SLIDER_SLIDES[currentSlide].id === 'asc' ? 'rgba(0,0,0,0.15)' : SLIDER_SLIDES[currentSlide].id === 'gossip' ? 'rgba(24,24,27,0.15)' : 'rgba(255,255,255,0.15)',
                border: 'none',
                borderRadius: '50%',
                width: 44,
                height: 44,
                color: { gossip: '#18181B', deweb: '#ECECEC', asc: '#000' }[SLIDER_SLIDES[currentSlide].id],
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
          color: '#fff',
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
              color: '#FFFFFF',
              margin: 0,
              flex: '1 1 100%',
            }}
          >
            The Internet is Not Free
          </h2>
        </header>

        <div
          style={{
            boxSizing: 'border-box',
            width: '100%',
            borderTop: '1px solid #E0E0E0',
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
            {INTERNET_NOT_FREE_CARDS_DATA.map((item) => (
              <div
                key={item.title}
                className="internet-not-free-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '16px',
                  padding: '1.5rem',
                  boxSizing: 'border-box',
                  background: 'rgba(0,30,24,0.6)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '12px',
                }}
              >
                <div style={{ color: '#fff' }}>
                  {CARD_ICONS[item.icon]}
                </div>
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.25rem',
                    lineHeight: '1.4',
                    letterSpacing: '-0.5px',
                    margin: 0,
                    fontWeight: 600,
                    color: '#fff',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '1.6',
                    letterSpacing: '-0.3px',
                    margin: 0,
                    color: 'rgba(255,255,255,0.85)',
                  }}
                >
                  {item.text}
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
            Follow our journey
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
            Read the latest from Massa
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
                  <span className="blog_card-cta">Read more</span>
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


