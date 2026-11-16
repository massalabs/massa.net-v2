import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const STATS = [
  { value: '7K+', label: 'Nodes on our testnet' },
  { value: '10K', label: 'Transactions per second' },
  { value: '1000+', label: 'Nakamoto coefficient' },
]

const PILLARS = [
  { img: '/images/tx.svg', text: 'Transactions and smart contracts with low fees.' },
  { img: '/images/Low.svg', text: 'Proof-of-Stake. Low energy.' },
  { img: '/images/rewards.svg', text: 'Low hardware requirements. Anyone can participate and earn rewards.' },
  { img: '/images/distrib.svg', text: 'Balanced distribution. Truly decentralized.' },
]

const INNOVATIONS = [
  {
    title: 'Parallel block architecture',
    body: 'Blocks are produced in parallel threads, achieving unprecedented scalability.',
  },
  {
    title: 'Transaction sharding',
    body: 'Eliminates duplicate transactions and risks like double spending across parallel blocks.',
  },
  {
    title: 'Autonomous Smart Contracts',
    body: 'Remove the need for external centralized bots, revolutionizing DeFi and enabling truly autonomous operations.',
  },
  {
    title: 'On-chain web hosting',
    body: 'dApp frontends get the same level of decentralization as smart contracts. Browse dApps with no centralized intermediaries.',
  },
]

export function Technology() {
  return (
    <div className="pg pg-tech">
      <SEO
        title="Technology — Massa"
        description="Massa's parallel block graph reaches 10,000 transactions per second across thousands of nodes, without compromising decentralization or security."
      />

      <header className="pg-hero">
        <div className="pg-container">
          <span className="pg-eyebrow">Technology</span>
          <h1 className="pg-h1">Scalability with uncompromising security</h1>
          <p className="pg-lede">
            Massa is the first layer 1 blockchain to tackle the trilemma of scalability, decentralization and security without
            compromise: over 10,000 transactions per second across thousands of nodes.
          </p>
          <div className="pg-actions">
            <a href="/documents/Whitepaper.pdf" target="_blank" rel="noreferrer" className="pg-btn pg-btn--solid">
              Read the whitepaper <ArrowRight />
            </a>
            <a href="https://explorer.massa.net/mainnet" target="_blank" rel="noreferrer" className="pg-btn">
              Open the explorer
            </a>
          </div>
        </div>
        <span className="pg-edge pg-edge--to-b" aria-hidden="true" />
      </header>

      <section className="pg-section pg-section--tight pg-inv">
        <div className="pg-container">
          <div className="pg-grid">
            {STATS.map((s) => (
              <div key={s.label} className="pg-card pg-card--bare pg-stat">
                <span className="pg-stat-value">{s.value}</span>
                <span className="pg-stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section">
        <div className="pg-container pg-split">
          <div className="pg-stack">
            <span className="pg-eyebrow">The bottleneck</span>
            <h2 className="pg-h2">Current blockchains are limited</h2>
            <p className="pg-lede">
              Bitcoin, for instance, can only process about 5 transactions per second. Its sequential structure forces nodes to
              receive the previous block before creating the next one, which takes time in a decentralized peer-to-peer network.
            </p>
            <p className="pg-lede">
              <strong>Massa uses a multithreaded block graph</strong> that lets nodes create blocks in parallel and process
              10,000 transactions per second, making it the first blockchain to solve the trilemma.
            </p>
          </div>
          <figure className="pg-card tech-diagram">
            <img src="/images/schemamulti.svg" alt="Diagram of Massa's multithreaded block graph" loading="lazy" />
            <figcaption className="pg-body">Parallel threads of blocks, linked into a single graph.</figcaption>
          </figure>
        </div>
      </section>

      <section className="pg-section pg-inv">
        <div className="pg-container">
          <div className="pg-header pg-center pg-narrow">
            <h2 className="pg-h2">Scaled, decentralized and secure at the same time.</h2>
          </div>
          <div className="pg-grid pg-grid--2">
            {PILLARS.map((p) => (
              <div key={p.text} className="pg-card pg-card--bare tech-pillar">
                <span className="tech-pillar-art">
                  <img src={p.img} alt="" loading="lazy" />
                </span>
                <p className="pg-h3">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section">
        <div className="pg-container">
          <div className="pg-header pg-narrow">
            <span className="pg-eyebrow">Groundbreaking innovation</span>
            <h2 className="pg-h2" style={{ marginTop: '1.25rem' }}>
              An unprecedented combination of scale and decentralization
            </h2>
          </div>
          <div className="pg-grid pg-grid--2">
            {INNOVATIONS.map((item, i) => (
              <article key={item.title} className="pg-card">
                <span className="pg-card-index">0{i + 1}</span>
                <h3 className="pg-h3">{item.title}</h3>
                <p className="pg-body">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-inv">
        <div className="pg-container pg-split" style={{ alignItems: 'start' }}>
          <div className="pg-stack">
            <span className="pg-eyebrow">Autonomous Smart Contracts</span>
            <h2 className="pg-h2">Smart contracts that run themselves</h2>
            <p className="pg-lede">
              Massa's ASCs activate based on predefined conditions, eliminating external triggers. By embedding automation into
              smart contracts, ASCs unlock decentralized finance without centralized intermediaries.
            </p>
            <div className="pg-actions" style={{ marginTop: '2rem' }}>
              <Link to="/asc" className="pg-btn pg-btn--solid">
                Learn more about ASCs <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="pg-card pg-card--bare">
            <p className="pg-card-index">ASCs enable</p>
            <ul className="pg-list">
              <li>Automated strategies on DEXs, like limit orders</li>
              <li>Loan payments and collateral liquidations</li>
              <li>Evolving NFTs and gaming environments</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Technology
