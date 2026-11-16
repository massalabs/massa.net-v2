import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

type Action = { title: string; text: string; cta: string; href?: string; to?: string }

const WALLETS: Action[] = [
  { title: 'Massa Station', text: 'Your gateway to the decentralized web.', cta: 'Download', href: 'https://station.massa.net/' },
  {
    title: 'Bearby Wallet',
    text: 'Browser wallet for managing $MAS.',
    cta: 'Download',
    href: 'https://chromewebstore.google.com/detail/bearby/papngmkmknnmfhabbckobgfpihpdgplk',
  },
  {
    title: 'MetaMask Snap',
    text: 'The most used crypto wallet, now on Massa.',
    cta: 'Download',
    href: 'https://snaps.metamask.io/snap/npm/massalabs/metamask-snap/',
  },
  {
    title: 'Enkrypt',
    text: 'A simple way to connect to the Massa ecosystem. Trusted multichain extension by the MyEtherWallet creators.',
    cta: 'Download',
    href: 'https://www.enkrypt.com/download.html',
  },
]

const EXPLORE: Action[] = [
  { title: 'Get $MAS', text: "Swap for $MAS on Dusa, Massa's native DEX.", cta: 'Buy $MAS', to: '/get-mas' },
  { title: 'Bridge', text: 'Bridge your assets to the Massa chain and start exploring.', cta: 'Use the bridge', href: 'https://bridge.massa.net/index' },
  {
    title: 'Run a node',
    text: 'Take part in the decentralization of the network by running a node.',
    cta: 'Learn more',
    href: 'https://docs.massa.net/docs/node/run',
  },
]

function ActionCard({ item }: { item: Action }) {
  const cta = (
    <>
      {item.cta} <ArrowRight />
    </>
  )
  return (
    <article className="pg-card start-card">
      <div className="pg-stack" style={{ flex: 1 }}>
        <h3 className="pg-h3">{item.title}</h3>
        <p className="pg-body">{item.text}</p>
      </div>
      {item.to ? (
        <Link to={item.to} className="pg-btn start-card-btn">
          {cta}
        </Link>
      ) : (
        <a href={item.href} target="_blank" rel="noreferrer" className="pg-btn start-card-btn">
          {cta}
        </a>
      )}
    </article>
  )
}

export function Start() {
  return (
    <div className="pg pg-start">
      <SEO title="Get started — Massa" description="Pick a wallet, get $MAS, bridge assets, run a node and start building on Massa." />

      <header className="pg-section pg-section--tight">
        <div className="pg-container pg-center pg-narrow">
          <span className="pg-eyebrow">Get started</span>
          <h1 className="pg-h1" style={{ marginTop: '1.25rem' }}>Start your journey</h1>
          <p className="pg-lede" style={{ marginTop: '1.25rem' }}>
            Set up a wallet, get some $MAS and explore what's live on Massa.
          </p>
        </div>
      </header>

      <section className="pg-section" style={{ paddingTop: 0 }}>
        <div className="pg-container">
          <div className="pg-header">
            <span className="pg-eyebrow">Step 1</span>
            <h2 className="pg-h2" style={{ marginTop: '1rem' }}>Choose a wallet</h2>
          </div>
          <div className="pg-grid start-grid-4">
            {WALLETS.map((w) => (
              <ActionCard key={w.title} item={w} />
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section" style={{ paddingTop: 0 }}>
        <div className="pg-container">
          <div className="pg-header">
            <span className="pg-eyebrow">Step 2</span>
            <h2 className="pg-h2" style={{ marginTop: '1rem' }}>Explore the network</h2>
          </div>
          <div className="pg-grid">
            {EXPLORE.map((e) => (
              <ActionCard key={e.title} item={e} />
            ))}
          </div>
        </div>
      </section>

      <section className="pg-section pg-inv">
        <div className="pg-container pg-center pg-narrow">
          <h2 className="pg-h2">Developer tools</h2>
          <p className="pg-lede" style={{ marginTop: '1rem' }}>
            Everything you need to build and deploy on Massa.
          </p>
          <div className="pg-actions" style={{ marginTop: '2rem' }}>
            <a href="https://docs.massa.net/" target="_blank" rel="noreferrer" className="pg-btn pg-btn--solid">
              Read the docs <ArrowRight />
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

export default Start
