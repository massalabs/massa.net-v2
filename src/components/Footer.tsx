import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <section className="section-5">
      <div className="uui-padding-vertical-xlarge">
        <div className="w-layout-grid uui-footer05_top-wrapper">
          <Link to="/" className="uui-footer05_logo-link w-inline-block">
            <img width="120" loading="lazy" alt="" src="/images/LOGO.svg" />
          </Link>
          <div className="uui-footer05_link-list">
            <div className="uui-footer05_link-list-heading">Solutions</div>
            <Link to="/deweb" className="uui-footer05_link w-inline-block">
              <div className="text-block-12">Deweb</div>
            </Link>
            <Link to="/asc" className="uui-footer05_link w-inline-block">
              <div className="text-block-12">ASC</div>
            </Link>
            <Link to="/technology" className="uui-footer05_link w-inline-block">
              <div className="text-block-12">Technology</div>
            </Link>
          </div>
          <div className="uui-footer05_link-list">
            <div className="uui-footer05_link-list-heading">Build</div>
            <a href="https://docs.massa.net/" target="_blank" rel="noreferrer" className="uui-footer05_link w-inline-block">
              <div>Docs</div>
            </a>
            <Link to="/grants-bounty" className="uui-footer05_link w-inline-block">
              <div>Grants & Bounties</div>
            </Link>
          </div>
          <div className="uui-footer05_link-list">
            <div className="uui-footer05_link-list-heading">Explore</div>
            <Link to="/ecosystem" className="uui-footer05_link w-inline-block">
              <div>Ecosystem</div>
            </Link>
            <Link to="/get-mas" className="uui-footer05_link-copy w-inline-block">
              <div>Get $MAS</div>
            </Link>
          </div>
          <div className="uui-footer05_link-list">
            <div className="uui-footer05_link-list-heading">Community</div>
            <a href="https://forum.massa.community/" target="_blank" rel="noreferrer" className="uui-footer05_link w-inline-block">
              <div>Forum</div>
            </a>
            <a href="#" className="uui-footer05_link w-inline-block"></a>
          </div>
          <div className="uui-footer05_link-list">
            <div className="uui-footer05_link-list-heading">About</div>
            <Link to="/team" className="uui-footer05_link w-inline-block">
              <div>Team</div>
            </Link>
            <Link to="/blog" className="uui-footer05_link w-inline-block">
              <div>Blog</div>
            </Link>
            <Link to="/privacy-policy" className="uui-footer05_link w-inline-block">
              <div>Privacy policy</div>
            </Link>
            <Link to="/terms-of-service" className="uui-footer05_link w-inline-block">
              <div>Terms of service</div>
            </Link>
          </div>
        </div>
        <div className="w-layout-hflex flex-block-5">
          <a href="https://coinmarketcap.com/currencies/massa/" target="_blank" rel="noreferrer" className="w-inline-block">
            <img src="/images/CMC.svg" loading="lazy" width="140" alt="" />
          </a>
          <a href="https://www.coingecko.com/en/coins/massa" target="_blank" rel="noreferrer" className="w-inline-block">
            <img src="/images/CG.svg" loading="lazy" width="93" alt="" />
          </a>
        </div>
        <div className="uui-footer05_bottom-wrapper">
          <div className="uui-footer05_legal-list-wrapper">
            <div className="uui-text-size-small-4 text-color-gray500">© 2025 Massa</div>
          </div>
          <div className="w-layout-grid uui-footer05_social-icons">
            <a href="https://discord.com/invite/massa" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/Discord.svg" loading="lazy" alt="" />
            </a>
            <a href="https://x.com/massachain" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/X.svg" loading="lazy" alt="" />
            </a>
            <a href="https://www.youtube.com/@massa_chain" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/Youtube.svg" loading="lazy" alt="" />
            </a>
            <a href="https://t.me/massanetwork" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/Tg.svg" loading="lazy" width="24" alt="" />
            </a>
            <a href="https://www.linkedin.com/company/massa-labs" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/Linkedin.svg" loading="lazy" alt="" />
            </a>
            <a href="https://massachain.medium.com/" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/user-check.svg" loading="lazy" alt="" />
            </a>
            <a href="https://github.com/massalabs" target="_blank" rel="noreferrer" className="w-inline-block">
              <img src="/images/Github.svg" loading="lazy" alt="" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer

