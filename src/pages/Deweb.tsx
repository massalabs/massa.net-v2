import { SEO } from '../components/SEO'
import { FloatField } from '../components/FloatField'

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

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const DEWEB_APP = 'https://deweb.massa.network/search'
const DEWEB_VIDEO = 'https://www.youtube.com/watch?v=jW56dlUAd7A'

const FEATURES = [
  {
    title: 'Censorship-resistant',
    body: 'Distributed across a global network and accessible from anywhere, any time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Cost-effective',
    body: 'One time payment, fully refundable. No monthly fees.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8.5 10.5C8.5 9.4 9.4 8.5 10.5 8.5H13.5C14.6 8.5 15.5 9.4 15.5 10.5C15.5 11.6 14.6 12.5 13.5 12.5H10.5C9.4 12.5 8.5 13.4 8.5 14.5C8.5 15.6 9.4 16.5 10.5 16.5H13.5C14.6 16.5 15.5 15.6 15.5 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Total immutability',
    body: "Make your site so permanent, even you can't take it down.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
]

const STEPS = [
  { title: 'Upload your website', body: 'Push your static build to the Massa network with the DeWeb tooling.' },
  { title: 'Make a one time payment', body: 'Pay once for storage. No monthly fees, and it is refundable.' },
  { title: 'Launch and chill', body: 'Your site is replicated on thousands of nodes and stays online on its own.' },
]

export function Deweb() {
  return (
    <div className="pg pg-deweb">
      <SEO
        title="DeWeb — Decentralized web hosting on Massa"
        description="Host your website and domain fully on-chain. Replicated on thousands of computers, censorship-resistant and permanent."
      />

      <header className="pg-hero">
        <FloatField count={46} render={(i) => renderDewebWebIcon(i % 9)} minSize={18} maxSize={40} minAlpha={0.16} maxAlpha={0.42} />
        <div className="pg-container">
          <span className="pg-eyebrow">DeWeb</span>
          <h1 className="pg-h1">The Internet, Redefined</h1>
          <p className="pg-lede">
            Your website, replicated on thousands of computers. Unstoppable, uncensorable, and paid for once.
          </p>
          <div className="pg-actions">
            <a href={DEWEB_APP} target="_blank" rel="noreferrer" className="pg-btn pg-btn--solid">
              Start now <ArrowRight />
            </a>
            <a href={DEWEB_VIDEO} target="_blank" rel="noreferrer" className="pg-btn">
              Watch the intro
            </a>
          </div>
        </div>
        <span className="pg-edge pg-edge--to-b" aria-hidden="true" />
      </header>

      <section className="pg-section pg-inv">
        <div className="pg-container pg-split">
          <div className="pg-stack">
            <h2 className="pg-h2">No central authority. No risk of shutdown. True digital freedom.</h2>
            <p className="pg-lede">
              On DeWeb you can host your website and domain name in a fully decentralized way, ensuring it remains permanently
              available, uncensorable, and self-sustaining.
            </p>
            <a href={DEWEB_APP} target="_blank" rel="noreferrer" className="deweb-search">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
                <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
              <span>Browse .massa websites</span>
              <ArrowRight />
            </a>
          </div>
          <a href={DEWEB_VIDEO} target="_blank" rel="noreferrer noopener" className="deweb-video" aria-label="Watch Introducing DeWeb on YouTube">
            <img src="/images/youtube-deweb-thumb.jpg" alt="" loading="lazy" />
            <span className="deweb-video-play" aria-hidden="true">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="deweb-video-caption">Watch: Introducing DeWeb</span>
          </a>
        </div>
      </section>

      <section className="pg-section pg-inv" style={{ paddingTop: 0 }}>
        <div className="pg-container">
          <div className="pg-grid">
            {FEATURES.map((f) => (
              <article key={f.title} className="pg-card pg-card--bare">
                <span className="pg-card-icon">{f.icon}</span>
                <h3 className="pg-h3">{f.title}</h3>
                <p className="pg-body">{f.body}</p>
              </article>
            ))}
          </div>
        </div>
        <span className="pg-edge pg-edge--to-a" aria-hidden="true" />
      </section>

      <section className="pg-section">
        <div className="pg-container">
          <div className="pg-header pg-center">
            <span className="pg-eyebrow">How it works</span>
            <h2 className="pg-h2" style={{ marginTop: '1.25rem' }}>Live on the decentralized web in three steps</h2>
          </div>
          <ol className="pg-steps">
            {STEPS.map((step) => (
              <li key={step.title}>
                <article className="pg-card" style={{ height: '100%' }}>
                  <h3 className="pg-h3">{step.title}</h3>
                  <p className="pg-body">{step.body}</p>
                </article>
              </li>
            ))}
          </ol>
          <div className="pg-actions" style={{ justifyContent: 'center', marginTop: '2.5rem' }}>
            <a href={DEWEB_APP} target="_blank" rel="noreferrer" className="pg-btn pg-btn--solid">
              Start now <ArrowRight />
            </a>
            <a href="https://docs.massa.net/" target="_blank" rel="noreferrer" className="pg-btn">
              Read the docs
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deweb
