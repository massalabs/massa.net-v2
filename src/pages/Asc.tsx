import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { FloatField } from '../components/FloatField'
import { MaskIcon } from '../components/MaskIcon'

const FLOAT_ICONS = [
  '/images/ASC.svg',
  '/images/deweb.svg',
  '/images/Technology.svg',
  '/images/Docs.svg',
  '/images/Bounties.svg',
  '/images/Forum.svg',
  '/images/Team.svg',
  '/images/Blog.svg',
]

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const BENEFITS = [
  {
    title: 'Fully on-chain automation',
    body: (
      <>
        Unlike traditional smart contracts that rely on external bots (like Chainlink Keepers or Gelato), Massa ASCs execute{' '}
        <strong>natively on-chain</strong> without external triggers.
      </>
    ),
  },
  {
    title: 'Censorship-resistant & trustless',
    body: (
      <>
        Since execution is fully decentralized, there's no single point of failure or reliance on centralized services, ensuring
        maximum security and resilience.
      </>
    ),
  },
  {
    title: 'Self-sustaining smart contracts',
    body: (
      <>
        Massa ASCs can <strong>wake themselves up</strong> and execute actions automatically, enabling{' '}
        <strong>recurring payments, automated trading, DeFi strategies</strong> and <strong>evolvable NFTs</strong> without
        off-chain dependencies.
      </>
    ),
  },
]

const USE_CASES = [
  {
    title: 'DeFi',
    body: 'Fully automated strategies on DEXs, like limit orders and rebalancing.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 17l5-5 4 4 8-9" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h5v5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Payments',
    body: 'Recurring payments, loan repayments and collateral liquidations that run on schedule.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.7" />
        <path d="M3 10h18M7 15h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Gaming & NFTs',
    body: 'Evolving NFTs and living game worlds that change over time without a server.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M6 9h12a3 3 0 0 1 3 3v2.5a2.5 2.5 0 0 1-4.6 1.4L15 14H9l-1.4 1.9A2.5 2.5 0 0 1 3 14.5V12a3 3 0 0 1 3-3Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
        <path d="M8 11v2M7 12h2M16 12h.01" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function Asc() {
  return (
    <div className="pg pg-asc">
      <SEO
        title="Autonomous Smart Contracts — Massa"
        description="Massa ASCs execute natively on-chain without external bots or keepers: decentralized automation for DeFi, payments and gaming."
      />

      <header className="pg-hero">
        <FloatField
          count={48}
          render={(i) => <MaskIcon src={FLOAT_ICONS[i % FLOAT_ICONS.length]} />}
          minSize={16}
          maxSize={28}
          minAlpha={0.3}
          maxAlpha={0.7}
        />
        <div className="pg-container">
          <span className="pg-eyebrow">Autonomous Smart Contracts</span>
          <h1 className="pg-h1">Decentralized Blockchain Automation</h1>
          <p className="pg-lede">
            Fully automated smart contracts. Power your dApp automations without relying on centralized services.
          </p>
          <div className="pg-actions">
            <a href="https://docs.massa.net/" target="_blank" rel="noreferrer" className="pg-btn pg-btn--solid">
              Build with ASCs <ArrowRight />
            </a>
            <Link to="/technology" className="pg-btn">
              Explore the technology
            </Link>
          </div>
        </div>
        <span className="pg-edge pg-edge--to-b" aria-hidden="true" />
      </header>

      <section className="pg-section pg-inv">
        <div className="pg-container pg-split" style={{ alignItems: 'start' }}>
          <div className="pg-stack">
            <span className="pg-eyebrow">The problem</span>
            <h2 className="pg-h2">Decentralization is being overlooked</h2>
          </div>
          <div className="pg-stack">
            <p className="pg-lede">
              <strong>A booming market with innovative products.</strong> The simple concept of decentralization has evolved over
              the past decade and a half into a massive ecosystem of thousands of financial products, spanning hundreds of
              blockchains.
            </p>
            <p className="pg-lede">
              But while utility and adoption on the blockchain have increased, decentralization has taken a back seat, with many
              projects relying on centralized services to automate their DeFi applications.
            </p>
          </div>
        </div>
      </section>

      <section className="pg-section">
        <div className="pg-container">
          <div className="pg-header pg-center pg-narrow">
            <span className="pg-eyebrow">The solution</span>
            <h2 className="pg-h2" style={{ marginTop: '1.25rem' }}>Autonomous Smart Contracts</h2>
            <p className="pg-lede">
              This is where Massa's Autonomous Smart Contracts step in, ensuring that decentralization remains one of the core
              pillars of the blockchain for the foreseeable future.
            </p>
          </div>
          <div className="pg-grid">
            {BENEFITS.map((b, i) => (
              <article key={b.title} className="pg-card">
                <span className="pg-card-index">0{i + 1}</span>
                <h3 className="pg-h3">{b.title}</h3>
                <p className="pg-body">{b.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-inv">
        <div className="pg-container">
          <div className="pg-header">
            <span className="pg-eyebrow">Use cases</span>
            <h2 className="pg-h2" style={{ marginTop: '1.25rem' }}>What you can automate</h2>
          </div>
          <div className="pg-grid">
            {USE_CASES.map((u) => (
              <article key={u.title} className="pg-card pg-card--bare">
                <span className="pg-card-icon">{u.icon}</span>
                <h3 className="pg-h3">{u.title}</h3>
                <p className="pg-body">{u.body}</p>
              </article>
            ))}
          </div>
          <div className="pg-actions" style={{ marginTop: '2.5rem' }}>
            <a href="https://docs.massa.net/" target="_blank" rel="noreferrer" className="pg-btn pg-btn--solid">
              Start building <ArrowRight />
            </a>
            <Link to="/grants-bounty" className="pg-btn">
              Grants & bounties
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Asc
