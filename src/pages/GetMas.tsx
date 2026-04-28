import { useEffect, useState } from 'react'

const DEX = [
  { name: 'Dusa', href: 'https://app.dusa.io/', desc: 'Native DEX on Massa chain' },
  { name: 'EagleFi', href: 'https://www.eaglefi.io/', desc: 'Liquidity & swaps' },
]

const CEX = [
  { name: 'MEXC', href: 'https://www.mexc.co', desc: 'Global crypto exchange' },
  { name: 'Bitget', href: 'https://www.bitgetapp.com', desc: 'Buy with credit card' },
]

function ExchangeCard({ name, href, desc }: { name: string; href: string; desc: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="gm-xcard">
      <div className="gm-xcard__inner">
        <span className="gm-xcard__name">{name}</span>
        <span className="gm-xcard__desc">{desc}</span>
      </div>
      <span className="gm-xcard__arrow" aria-hidden="true">↗</span>
    </a>
  )
}

export function GetMas() {
  const [isWidgetLoading, setIsWidgetLoading] = useState(true)

  useEffect(() => {
    document.body.classList.add('page-mono-theme', 'page-getmas-theme')
    return () => {
      document.body.classList.remove('page-mono-theme', 'page-getmas-theme')
    }
  }, [])

  return (
    <div className="gm-root">
      <style>{`
        .gm-root {
          background: #000;
          color: #fff;
          min-height: 100vh;
          font-family: 'Space Grotesk', sans-serif;
        }

        /* ── Hero ── */
        .gm-hero {
          padding: clamp(56px, 8vw, 100px) 24px clamp(48px, 6vw, 80px);
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .gm-hero__title {
          font-size: clamp(2.4rem, 6vw, 5rem);
          font-weight: 700;
          letter-spacing: -0.03em;
          line-height: 1;
          margin: 0 0 12px;
          color: #fff;
        }
        .gm-hero__sub {
          font-size: clamp(0.85rem, 2vw, 1rem);
          color: rgba(255,255,255,0.45);
          max-width: 400px;
          margin: 0 auto 40px;
          line-height: 1.65;
        }

        /* ── Widget ── */
        .gm-widget-wrap {
          position: relative;
          width: min(600px, 100%);
          margin: 0 auto;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          background: #0a0a0a;
          box-shadow: 0 0 0 1px rgba(255,255,255,0.04),
                      0 32px 80px rgba(0,0,0,0.7);
        }
        .gm-widget-loader {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 14px;
          background: #0a0a0a;
          z-index: 2;
        }
        .gm-widget-loader__ring {
          width: 28px;
          height: 28px;
          border: 2px solid rgba(255,255,255,0.06);
          border-top-color: #fff;
          border-radius: 50%;
          animation: gm-spin 0.75s linear infinite;
        }
        .gm-widget-loader__text {
          font-size: 11px;
          letter-spacing: 0.1em;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
        }
        @keyframes gm-spin { to { transform: rotate(360deg); } }

        .gm-widget-iframe {
          display: block;
          width: 100%;
          height: 480px;
          border: none;
        }
        @media (max-width: 480px) {
          .gm-widget-iframe { height: 430px; }
        }

        /* ── Exchanges section ── */
        .gm-exchanges {
          position: relative;
          overflow: hidden;
          background: #000;
          padding: clamp(56px, 8vw, 96px) 24px clamp(64px, 10vw, 112px);
        }

        /* Pixel dot background */
        .gm-exchanges::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url('/images/PIXEL%20MULTI%20BACKGROUND.svg');
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          opacity: 0.55;
          pointer-events: none;
        }

        /* Fade the pixel pattern at the top */
        .gm-exchanges::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, #000, transparent);
          pointer-events: none;
          z-index: 1;
        }

        .gm-exchanges__inner {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: 0 auto;
        }

        .gm-exchanges__heading {
          font-size: clamp(1.5rem, 3.5vw, 2.2rem);
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 40px;
          color: #fff;
        }
        .gm-exchanges__heading span {
          color: rgba(255,255,255,0.3);
        }

        .gm-exchanges__grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        @media (max-width: 580px) {
          .gm-exchanges__grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }
        }

        /* ── Column ── */
        .gm-xcol__label {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 12px;
        }
        .gm-xcol__tag {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #000;
          background: #fff;
          padding: 3px 8px;
          border-radius: 3px;
          line-height: 1.6;
        }
        .gm-xcol__tagline {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.02em;
        }

        .gm-xcol__cards {
          display: flex;
          flex-direction: column;
          gap: 2px;
          background: rgba(255,255,255,0.06);
          border-radius: 10px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        /* ── Card ── */
        .gm-xcard {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 20px;
          background: rgba(0,0,0,0.4);
          text-decoration: none;
          color: #fff;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: background 0.15s ease;
        }
        .gm-xcard:last-child {
          border-bottom: none;
        }
        .gm-xcard:hover {
          background: rgba(255,255,255,0.06);
        }
        .gm-xcard:hover .gm-xcard__arrow {
          opacity: 1;
          transform: translate(2px, -2px);
        }
        .gm-xcard__inner {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .gm-xcard__name {
          font-size: 0.95rem;
          font-weight: 600;
          color: #fff;
          letter-spacing: -0.01em;
        }
        .gm-xcard__desc {
          font-size: 11px;
          color: rgba(255,255,255,0.35);
        }
        .gm-xcard__arrow {
          font-size: 16px;
          color: rgba(255,255,255,0.25);
          opacity: 0;
          transition: opacity 0.15s ease, transform 0.15s ease;
          flex-shrink: 0;
          margin-left: 12px;
        }

        /* ── Divider ── */
        .gm-divider {
          height: 1px;
          background: rgba(255,255,255,0.07);
          margin: 0 24px;
        }
      `}</style>

      {/* Hero + Widget */}
      <section className="gm-hero">
        <h1 className="gm-hero__title">Get $MAS</h1>
        <p className="gm-hero__sub">
          Swap any crypto for MAS instantly using the widget below.
        </p>

        <link rel="stylesheet" type="text/css" href="/css/widget_lets.css" />
        <div className="gm-widget-wrap">
          {isWidgetLoading && (
            <div className="gm-widget-loader" aria-live="polite">
              <div className="gm-widget-loader__ring" aria-hidden="true" />
              <span className="gm-widget-loader__text">Loading…</span>
            </div>
          )}
          <iframe
            src="https://letsexchange.io/v2/widget?affiliate_id=ZA9pV7Cit1WsM8qP&is_iframe=true"
            className="gm-widget-iframe"
            allow="clipboard-read; clipboard-write"
            onLoad={() => setIsWidgetLoading(false)}
            title="LetsExchange swap widget"
          />
        </div>
      </section>

      <div className="gm-divider" />

      {/* Exchanges */}
      <section className="gm-exchanges">
        <div className="gm-exchanges__inner">
          <h2 className="gm-exchanges__heading">
            More ways to get MAS<span>.</span>
          </h2>

          <div className="gm-exchanges__grid">
            <div className="gm-xcol">
              <div className="gm-xcol__label">
                <span className="gm-xcol__tag">DEX</span>
                <span className="gm-xcol__tagline">Already on Massa? Swap on-chain.</span>
              </div>
              <div className="gm-xcol__cards">
                {DEX.map(e => <ExchangeCard key={e.name} {...e} />)}
              </div>
            </div>

            <div className="gm-xcol">
              <div className="gm-xcol__label">
                <span className="gm-xcol__tag">CEX</span>
                <span className="gm-xcol__tagline">Buy with fiat or card.</span>
              </div>
              <div className="gm-xcol__cards">
                {CEX.map(e => <ExchangeCard key={e.name} {...e} />)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetMas
