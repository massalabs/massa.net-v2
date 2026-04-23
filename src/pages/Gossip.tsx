import { useEffect, type CSSProperties } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

const gossipFeatures = [
  {
    index: '01',
    title: 'No Phone Numbers',
    body: 'Your real sessions are only linked to your device. Identity is defined by a passphrase of your choice. No personal information required.',
    head: 1,
  },
  {
    index: '02',
    title: 'End-to-End Encryption',
    body: 'Contrary to Telegram, your conversations are end-to-end encrypted by default. Only you and the person you gossip with can read the messages.',
    head: 2,
  },
  {
    index: '03',
    title: 'Perfect Forward / Backward Secrecy',
    body: "Encryption keys are ephemeral and fresh ones are generated at each message. Even if an attacker breaks one key, they won't be able to read anything else.",
    head: 3,
  },
  {
    index: '04',
    title: 'Post-Quantum Security',
    body: 'Not even quantum computers can read your messages in Gossip. We use post-quantum standard (ML-KEM + AES-256) and authentication (ML-DSA).',
    head: 4,
  },
  {
    index: '05',
    title: 'Plausible Deniability',
    body: 'If someone leaks your conversation, you can plausibly say they forged it. There is no cryptographic proof that leaked messages originate from you.',
    head: 1,
  },
  {
    index: '06',
    title: 'Decentralized & Sealed Metadata',
    body: 'Unlike Signal or WhatsApp that rely on central servers, Gossip uses a decentralized network. Metadata is encrypted and nobody knows who is talking to whom.',
    head: 2,
  },
  {
    index: '07',
    title: 'Censorship Resistant',
    body: 'No central authority can stop or compromise the app. Even if banned from app stores, alternative versions remain available on the Massa Decentralized Web.',
    head: 3,
  },
]

export function Gossip() {
  const { t } = useLanguage()
  const floatingHeads = Array.from({ length: 36 }, (_, index) => ({
    src: `/images/Head${(index % 4) + 1}.svg`,
    x: (index * 17) % 100,
    y: (index * 29) % 100,
    driftX: ((index % 7) - 3) * 8,
    driftY: ((index % 5) - 2) * 10,
    duration: 14 + (index % 9),
    delay: (index % 8) * -1.6,
    size: 12 + (index % 4) * 4,
    alpha: 0.2 + (index % 5) * 0.08,
  }))

  useEffect(() => {
    document.body.classList.add('page-gossip')
    return () => {
      document.body.classList.remove('page-gossip')
    }
  }, [])

  return (
    <div className="page-gossip">
      <section className="uui-section_heroheader14 gossip-hero">
        <div className="gossip-floating-heads" aria-hidden="true">
          {floatingHeads.map((head, index) => (
            <img
              key={`gossip-head-${index}`}
              src={head.src}
              alt=""
              className="gossip-floating-head"
              style={
                {
                  '--x': `${head.x}%`,
                  '--y': `${head.y}%`,
                  '--drift-x': `${head.driftX}px`,
                  '--drift-y': `${head.driftY}px`,
                  '--float-duration': `${head.duration}s`,
                  '--float-delay': `${head.delay}s`,
                  '--head-size': `${head.size}px`,
                  '--head-alpha': head.alpha,
                } as CSSProperties
              }
            />
          ))}
        </div>
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space" />
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <h1 className="uui-heading-xlarge gossip-title">Gossip</h1>
                  <div className="uui-space-small" />
                  <h2 className="uui-heading-medium gossip-heading">{t('gossip.hero.heading')}</h2>
                  <div className="uui-space-small" />
                  <div className="uui-max-width-large align-center">
                    <p className="uui-text-size-xlarge gossip-subtitle">
                      {t('gossip.hero.body')}
                    </p>
                  </div>
                  <div className="uui-space-large" />
                  <a
                    href="https://usegossip.massa.network/"
                    target="_blank"
                    rel="noreferrer"
                    className="button-blue-inverted w-button gossip-cta"
                  >
                    {t('gossip.hero.ctaOpen')}
                  </a>
                  <div className="uui-space-large" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="gossip-features">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="gossip-features__header">
              <span className="gossip-features__eyebrow">
                <span className="gossip-features__eyebrow-dot" aria-hidden="true" />
                Essential Features
              </span>
              <h2 className="gossip-features__title">
                Silent by nature.
                <br />
                <span className="gossip-features__title-accent">Powerful by design.</span>
              </h2>
              <p className="gossip-features__lede">
                Built on Massa Network's decentralized infrastructure, Gossip provides unparalleled privacy
                and security features that put you in complete control.
              </p>
            </div>

            <div className="gossip-features__grid">
              {gossipFeatures.map((feature) => (
                <article key={feature.index} className="gossip-feature-card">
                  <header className="gossip-feature-card__head">
                    <span className="gossip-feature-card__index">{feature.index}</span>
                    <span className="gossip-feature-card__rule" aria-hidden="true" />
                  </header>
                  <img
                    src={`/images/Head${feature.head}.svg`}
                    alt=""
                    aria-hidden="true"
                    className="gossip-feature-card__pixel"
                  />
                  <h3 className="gossip-feature-card__title">{feature.title}</h3>
                  <p className="gossip-feature-card__body">{feature.body}</p>
                  <span className="gossip-feature-card__corner" aria-hidden="true" />
                </article>
              ))}
            </div>

            <div className="gossip-features__footer">
              <a
                href="https://docs.massa.net/"
                target="_blank"
                rel="noreferrer"
                className="gossip-features__cta"
              >
                <span>Read technical paper</span>
                <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gossip
