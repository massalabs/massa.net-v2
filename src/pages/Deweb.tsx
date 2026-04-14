import { useEffect, type CSSProperties } from 'react'

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

const DEWEB_HERO_BG_ICONS = Array.from({ length: 58 }, (_, index) => {
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

export function Deweb() {
  useEffect(() => {
    // Ajouter une classe au body pour cibler les styles spécifiques
    document.body.classList.add('page-deweb')
    return () => {
      document.body.classList.remove('page-deweb')
    }
  }, [])

  return (
    <div>
      <header className="uui-section_heroheader14 deweb-hero">
        <div className="deweb-hero-floating-icons" aria-hidden="true">
          {DEWEB_HERO_BG_ICONS.map((icon, index) => (
            <span
              key={`deweb-hero-icon-${index}`}
              className={`deweb-hero-floating-icon deweb-web-icon--${icon.variant === 6 ? 'pixel' : icon.variant === 7 ? 'dot' : icon.variant === 8 ? 'blur' : 'classic'}`}
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
              } as CSSProperties}
            >
              {renderDewebWebIcon(icon.variant)}
            </span>
          ))}
        </div>
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <h1 className="uui-heading-xlargeblue">The Internet, Redefined</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-button-row button-row-center">
                    <div className="text-block-6-blue">Your website, replicated on thousands of computers. Unstoppable.</div>
                  </div>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge-blue">Power your dApp Automations without Centralized Service Reliance</div>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
              <a href="https://deweb.massa.network/search" className="button-blue w-button" target="_blank" rel="noreferrer">
                Start Now
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="section-21">
        <div className="video w-video w-embed" style={{ paddingTop: '56.25%', height: 'auto' }}>
          <a
            href="https://www.youtube.com/watch?v=jW56dlUAd7A"
            target="_blank"
            rel="noreferrer noopener"
            style={{ 
              display: 'block', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              cursor: 'pointer' 
            }}
            aria-label="Watch Introducing DeWeb on YouTube"
          >
            <img
              src="/images/youtube-deweb-thumb.jpg"
              alt="Introducing DeWeb - Click to watch on YouTube"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '68px',
                height: '48px',
                backgroundColor: 'rgba(23, 35, 34, 0.9)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                style={{ marginLeft: '4px' }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </section>

      <section className="section-8-deweb">
        <div className="w-layout-blockcontainer container-2-deweb w-container">
          <h2 className="heading-4-deweb">No central authority. No risk of shutdown. True digital freedom.</h2>
          <div className="uui-space-xsmall"></div>
          <div className="uui-text-size-xlarge-deweb">
            On DeWeb you can host your website and domain name in a fully decentralized way, ensuring it remains permanently
            available, uncensorable, and self-sustaining.
          </div>
          <div className="uui-space-large"></div>
          <img src="/images/svg.svg" loading="lazy" alt="" />
        </div>
      </section>

      <section className="section-4-deweb">
        <div className="div-block-15-copy-copy">
          <div className="card-deweb">
            <div>
              <div className="deweb-card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="heading-3-deweb">Censorship-Resistant</div>
              <div className="uui-text-size-large-deweb">
                Distributed across a global network and accessible from anywhere, any time.
                <br />
              </div>
            </div>
          </div>
          <div className="card-deweb">
            <div>
              <div className="deweb-card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8.5 10.5C8.5 9.4 9.4 8.5 10.5 8.5H13.5C14.6 8.5 15.5 9.4 15.5 10.5C15.5 11.6 14.6 12.5 13.5 12.5H10.5C9.4 12.5 8.5 13.4 8.5 14.5C8.5 15.6 9.4 16.5 10.5 16.5H13.5C14.6 16.5 15.5 15.6 15.5 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="heading-3-deweb">Cost-Effective</div>
            </div>
            <div className="uui-text-size-large-deweb">
              One time payment, fully refundable. No monthly fees.
              <br />
            </div>
          </div>
          <div className="card-deweb">
            <div>
              <div className="deweb-card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="heading-3-deweb">Total Immutability</div>
              <div className="uui-text-size-large-deweb">
                Make your site so permanent, even you can't take it down.
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4-deweb-copy">
        <div className="div-block-15-deweb-high">
          <div className="card-deweb-2">
            <div>
              <div className="heading-3-deweb-2">Upload your website</div>
            </div>
          </div>
          <div className="card-deweb-2">
            <div>
              <div className="heading-3-deweb-2">Make a one time payment. No monthly fees.</div>
            </div>
          </div>
          <div id="w-node-b5b40a6e-d8b2-cd47-2f32-8d45c5ce79da-71d192fd" className="card-deweb-2">
            <div className="div-block-24">
              <div className="heading-3-deweb-2">Launch and chill</div>
            </div>
          </div>
          <div id="w-node-_1d543842-de84-6c38-c0c6-a903afa6b319-71d192fd">
            <a href="https://deweb.massa.network/search" className="button-blue w-button" target="_blank" rel="noreferrer">
              Start Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deweb

