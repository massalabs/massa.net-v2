import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { MaskIcon } from './MaskIcon'

type FooterLink = { labelKey: string; to?: string; href?: string }

const COLUMNS: Array<{ headingKey: string; links: FooterLink[] }> = [
  {
    headingKey: 'footer.solutions',
    links: [
      { labelKey: 'footer.deweb', to: '/deweb' },
      { labelKey: 'footer.asc', to: '/asc' },
      { labelKey: 'footer.technology', to: '/technology' },
    ],
  },
  {
    headingKey: 'footer.build',
    links: [
      { labelKey: 'footer.docs', href: 'https://docs.massa.net/' },
      { labelKey: 'footer.grants', to: '/grants-bounty' },
    ],
  },
  {
    headingKey: 'footer.explore',
    links: [
      { labelKey: 'footer.ecosystem', to: '/ecosystem' },
      { labelKey: 'footer.getMas', to: '/get-mas' },
    ],
  },
  {
    headingKey: 'footer.community',
    links: [{ labelKey: 'footer.forum', href: 'https://forum.massa.community/' }],
  },
  {
    headingKey: 'footer.about',
    links: [
      { labelKey: 'footer.team', to: '/team' },
      { labelKey: 'footer.blog', to: '/blog' },
      { labelKey: 'footer.privacy', to: '/privacy-policy' },
      { labelKey: 'footer.terms', to: '/terms-of-service' },
    ],
  },
]

const SOCIALS = [
  { label: 'Discord', href: 'https://discord.com/invite/massa', icon: '/images/Discord.svg' },
  { label: 'X', href: 'https://x.com/massachain', icon: '/images/X.svg' },
  { label: 'YouTube', href: 'https://www.youtube.com/@massa_chain', icon: '/images/Youtube.svg' },
  { label: 'Telegram', href: 'https://t.me/massanetwork', icon: '/images/Tg.svg' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/massa-labs', icon: '/images/Linkedin.svg' },
  { label: 'Medium', href: 'https://massachain.medium.com/', icon: '/images/user-check.svg' },
  { label: 'GitHub', href: 'https://github.com/massalabs', icon: '/images/Github.svg' },
]

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="mfoot">
      <div className="mfoot-inner">
        <div className="mfoot-top">
          <div className="mfoot-brand">
            <Link to="/" className="mfoot-logo" aria-label="Massa — home">
              <MaskIcon src="/images/LOGO.svg" className="mfoot-logo-mark" />
            </Link>
            <div className="mfoot-markets">
              <a href="https://coinmarketcap.com/currencies/massa/" target="_blank" rel="noreferrer" aria-label="CoinMarketCap">
                <MaskIcon src="/images/CMC.svg" className="mfoot-market mfoot-market--cmc" />
              </a>
              <a href="https://www.coingecko.com/en/coins/massa" target="_blank" rel="noreferrer" aria-label="CoinGecko">
                <MaskIcon src="/images/CG.svg" className="mfoot-market mfoot-market--cg" />
              </a>
            </div>
          </div>
          <nav className="mfoot-cols" aria-label="Footer">
            {COLUMNS.map((col) => (
              <div key={col.headingKey} className="mfoot-col">
                <h2 className="mfoot-heading">{t(col.headingKey)}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.labelKey}>
                      {l.href ? (
                        <a href={l.href} target="_blank" rel="noreferrer" className="mfoot-link">
                          {t(l.labelKey)}
                        </a>
                      ) : (
                        <Link to={l.to ?? '/'} className="mfoot-link">
                          {t(l.labelKey)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
        <div className="mfoot-bottom">
          <p className="mfoot-legal">© {new Date().getFullYear()} Massa</p>
          <ul className="mfoot-socials">
            {SOCIALS.map((s) => (
              <li key={s.label}>
                <a href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="mfoot-social">
                  <MaskIcon src={s.icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
