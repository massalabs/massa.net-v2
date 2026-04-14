import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function AmbassadorComingSoon() {
  const { t } = useLanguage()
  useEffect(() => {
    document.body.classList.add('page-home-theme')
    return () => {
      document.body.classList.remove('page-home-theme')
    }
  }, [])

  return (
    <div className="uui-section_heroheader14 hero-home">
      <div className="uui-page-padding">
        <div className="uui-container-large">
          <div className="uui-space"></div>
          <div className="uui-heroheader14_component">
            <div className="uui-text-align-center">
              <div className="uui-max-width-xlarge">
                <h1 className="uui-heading-xlarge">Ambassador</h1>
                <div className="uui-space-small"></div>
                <p className="uui-text-size-xlarge">{t('ambassador.hero.comingSoon')}</p>
                <div className="uui-space-large"></div>
                <a href="/" className="button w-button">{t('ambassador.hero.ctaHome')}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <img src="/images/pixel.svg" loading="lazy" alt="" className="image-21" />
      </section>
    </div>
  )
}

