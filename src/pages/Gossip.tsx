import { useEffect, type CSSProperties } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

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
    </div>
  )
}

export default Gossip
