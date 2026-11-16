import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { FloatField } from '../components/FloatField'

const DUSA_APP = 'https://app.dusa.io/'

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const ArrowUpRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const MasMark = (
  <svg viewBox="0 0 143 137" fill="none" aria-hidden="true">
    <path d="M51.4872 3.48112L51.2336 3.88765L51.1322 3.7098L51.3351 3.37949L45.7552 0.0256348L38.7042 11.7895L44.4363 15.2196L40.9108 21.0889L46.4907 24.4427L46.5668 24.2903L46.6682 24.4681L46.7443 24.5952L52.3749 27.9744L48.8495 33.8437L43.1174 30.4136L39.5919 36.2829L34.2403 33.0561H33.733L30.3344 38.722L24.6023 35.292L21.0768 41.1612H21.0261L26.7835 44.6167L23.4102 50.2319L23.7146 50.7654L28.9901 53.916L25.4646 59.7853L31.1967 63.2154L27.6712 69.0846L21.9645 65.6545H21.7616L21.8123 65.5529L16.2324 62.199L12.7069 68.0683L6.84806 64.5366L6.36616 65.375H6.56906L4.15956 69.4149C4.15956 69.3133 4.15956 69.2117 4.15956 69.11L3.3733 70.4312L3.52548 70.5329L0 76.4021L5.5799 79.756L5.73208 79.5019H5.93498L5.73208 79.8322L11.312 83.1861L14.8375 77.3168L20.5695 80.7469L24.095 74.8776L35.5338 81.7632L39.0593 75.894L44.6645 79.2732L48.19 73.404L42.5848 70.0247L46.1102 64.1555L40.3782 60.7254L43.9036 54.8561L41.3166 53.3062L38.1716 51.4006L41.6971 45.5314L47.4291 48.9615L50.9546 43.0922L56.6867 46.5223L60.2122 40.653L65.8174 44.0323L69.3429 38.1631L63.7376 34.7838L67.2631 28.9145L55.9765 22.1306L59.502 16.2614L53.6431 12.7296L57.1686 6.86039L51.5887 3.50653L51.4872 3.48112Z" fill="currentColor" />
    <path d="M107.819 137L93.8946 112.812L81.7456 133.875H66.0712L53.9476 112.812L40.0486 136.949L37.9688 135.755C33.4541 133.163 29.2185 130.089 25.4394 126.608L24.019 125.312L45.9835 87.1241H46.5415L46.6937 86.9717H61.8355L73.9845 108.035L86.1334 86.9717H101.656L123.747 125.287L122.377 126.608C119.004 129.835 115.073 132.757 109.975 135.755L107.87 137H107.819ZM30.1316 124.347C32.6932 126.532 35.4325 128.565 38.2985 130.343L53.9476 103.157L68.8611 129.047H78.981L93.8946 103.157L109.544 130.318C112.663 128.361 115.301 126.405 117.584 124.372L98.7897 91.7992H88.8219L73.9084 117.69L58.9949 91.7992H48.8242L30.1062 124.347H30.1316Z" fill="currentColor" />
    <path d="M142.363 67.4075C142.211 70.4564 141.78 73.6578 140.994 77.3928H102.949L97.9017 68.627L112.815 42.7363H82.9882L77.9409 33.9705L97.6227 0C100.819 1.16877 103.887 2.5408 106.779 4.1161L90.166 32.9034H120.018L125.066 41.5421L110.152 67.4329H142.363V67.4075Z" fill="currentColor" />
  </svg>
)

const STEPS = [
  {
    title: 'Set up a wallet',
    body: 'Install a Massa wallet like Massa Station or Bearby to hold and swap $MAS.',
    cta: { label: 'Choose a wallet', to: '/start' },
  },
  {
    title: 'Bring assets to Massa',
    body: 'Use the official Massa Bridge to move tokens from other chains to Massa.',
    cta: { label: 'Open the bridge', href: 'https://bridge.massa.net/index' },
  },
  {
    title: 'Swap for $MAS on Dusa',
    body: 'Trade your bridged tokens for $MAS on Dusa, directly on-chain.',
    cta: { label: 'Go to Dusa', href: DUSA_APP },
  },
]

export function GetMas() {
  return (
    <div className="pg pg-getmas">
      <SEO title="Get $MAS — Massa" description="Swap for $MAS on Dusa, the native decentralized exchange on Massa." />

      <header className="pg-hero getmas-hero">
        <FloatField count={30} render={() => MasMark} minSize={18} maxSize={34} minAlpha={0.12} maxAlpha={0.3} />
        <div className="pg-container">
          <span className="pg-eyebrow">Get $MAS</span>
          <h1 className="pg-h1">Get $MAS on Dusa</h1>
          <p className="pg-lede">
            Swap for $MAS directly on Massa with Dusa, the native decentralized exchange. No middlemen, no custody, fully on-chain.
          </p>

          <a href={DUSA_APP} target="_blank" rel="noreferrer" className="getmas-dusa">
            <span className="getmas-dusa-logo">
              <img src="/images/dusa.png" alt="" width={56} height={56} />
            </span>
            <span className="getmas-dusa-text">
              <span className="getmas-dusa-name">
                Dusa <span className="getmas-dusa-tag">Native DEX</span>
              </span>
              <span className="getmas-dusa-desc">The first DEX with a decentralized frontend and automatic orders.</span>
            </span>
            <span className="getmas-dusa-cta">
              Swap now <ArrowUpRight />
            </span>
          </a>
        </div>
      </header>

      <section className="pg-section pg-inv">
        <div className="pg-container">
          <div className="pg-header">
            <span className="pg-eyebrow">New to Massa?</span>
            <h2 className="pg-h2" style={{ marginTop: '1.25rem' }}>Three steps to your first $MAS</h2>
          </div>
          <ol className="pg-steps">
            {STEPS.map((step) => (
              <li key={step.title}>
                <article className="pg-card pg-card--bare start-card" style={{ height: '100%' }}>
                  <div className="pg-stack" style={{ flex: 1 }}>
                    <h3 className="pg-h3">{step.title}</h3>
                    <p className="pg-body">{step.body}</p>
                  </div>
                  {step.cta.to ? (
                    <Link to={step.cta.to} className="pg-btn start-card-btn">
                      {step.cta.label} <ArrowRight />
                    </Link>
                  ) : (
                    <a href={step.cta.href} target="_blank" rel="noreferrer" className="pg-btn start-card-btn">
                      {step.cta.label} <ArrowRight />
                    </a>
                  )}
                </article>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  )
}

export default GetMas
