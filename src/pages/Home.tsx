import { useEffect, type ReactNode } from 'react'
import { useBlogPosts } from '../hooks/useContentData'
import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { MaskIcon } from '../components/MaskIcon'
import { ProductShowcase } from '../components/ProductShowcase'
import { HeroNetwork } from '../components/HeroNetwork'
import { useLanguage } from '../i18n/LanguageContext'

/** Cards "The Internet is Not Free" — clés i18n : home.internet.<icon>.title / .text */
const INTERNET_NOT_FREE_ICONS = ['gatekeepers', 'server', 'shield', 'database', 'target', 'lock'] as const

/** Icônes SVG pour les cards */
const CARD_ICONS: Record<string, ReactNode> = {
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

const FOLLOW_LINKS = [
  { name: 'X', desc: 'News and announcements', href: 'https://x.com/massachain', icon: '/images/X_1.svg' },
  { name: 'Telegram', desc: 'Chat with the community', href: 'https://t.me/massanetwork', icon: '/images/Telegram.svg' },
  { name: 'Discord', desc: 'Builders and support', href: 'https://discord.com/invite/massa', icon: '/images/Discord.svg' },
  { name: 'Medium', desc: 'Long reads and updates', href: 'https://massachain.medium.com/', icon: '/images/mediumblue.svg' },
]

export function Home() {
  const { t } = useLanguage()
  const blogPosts = useBlogPosts()
  useEffect(() => {
    document.body.classList.add('page-home-theme')
    return () => {
      document.body.classList.remove('page-home-theme')
    }
  }, [])

  return (
    <>
      <SEO title={t('home.seo.title')} description={t('home.seo.description')} />
    <div>
      {/* Hero */}
      <header className="hero2">
        <HeroNetwork />
        <div className="hero2-veil" aria-hidden="true" />
        <div className="hero2-content">
          <span className="hero2-eyebrow">
            <span className="hero2-eyebrow-dot" aria-hidden="true" />
            {t('home.hero.subheading')}
          </span>
          <h1 className="hero2-title">
            {t('home.hero.heading')}
            {t('home.hero.headingAccent') && <span className="hero2-accent">{t('home.hero.headingAccent')}</span>}
          </h1>
          <p className="hero2-lede">{t('home.hero.body')}</p>
          <div className="hero2-actions">
            <a href="https://usegossip.massa.network/" target="_blank" rel="noreferrer" className="hero2-btn hero2-btn--solid">
              {t('home.hero.ctaGossip')}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a href="https://docs.massa.net/" target="_blank" rel="noreferrer" className="hero2-btn">
              {t('home.hero.ctaBuild')}
            </a>
          </div>
          <dl className="hero2-stats">
            <div>
              <dt>{t('home.hero.stat1.label')}</dt>
              <dd>10K</dd>
            </div>
            <div>
              <dt>{t('home.hero.stat2.label')}</dt>
              <dd>1000+</dd>
            </div>
            <div>
              <dt>{t('home.hero.stat3.label')}</dt>
              <dd>32</dd>
            </div>
          </dl>
          <div className="hero2-live">
            <span className="hero2-live-label">{t('home.hero.liveOn')}</span>
            <Link to="/deweb" aria-label="DeWeb">
              <MaskIcon src="/images/logo_1.svg" className="hero2-live-logo hero2-live-logo--deweb" />
            </Link>
            <Link to="/gossip" aria-label="Gossip">
              <MaskIcon src="/images/gossiplogo.svg" className="hero2-live-logo hero2-live-logo--gossip" />
            </Link>
          </div>
        </div>
      </header>

      <ProductShowcase />

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

      {/* Social Section */}
      <section className="pg pg-section pg-inv follow">
        <div className="pg-container">
          <div className="follow-head">
            <h2 className="pg-h2">{t('home.follow.title')}</h2>
          </div>
          <ul className="follow-grid">
            {FOLLOW_LINKS.map((l) => (
              <li key={l.name}>
                <a href={l.href} className="follow-card" target="_blank" rel="noopener noreferrer">
                  <span className="follow-icon">
                    <MaskIcon src={l.icon} />
                  </span>
                  <span className="follow-text">
                    <span className="follow-name">{l.name}</span>
                    <span className="follow-desc">{l.desc}</span>
                  </span>
                  <svg className="follow-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <span className="pg-edge pg-edge--to-a" aria-hidden="true" />
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
              <Link key={post.id} to={`/blog/${post.id}`} className="blog_card">
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
              </Link>
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


