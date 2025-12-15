import { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const dropdownEvents = (id: string) => ({
    onPointerEnter: () => setOpenDropdown(id),
    onPointerLeave: () => setOpenDropdown((current) => (current === id ? null : current)),
  })

  return (
    <div data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb285" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="uui-navbar07_component w-nav">
      <div className="uui-navbar07_container">
        <Link to="/" aria-current="page" className="uui-navbar07_logo-link w-nav-brand w--current">
          <div className="uui-logo_component"><img width="120" loading="lazy" alt="" src="/images/LOGO.svg" /></div>
        </Link>
        <nav role="navigation" className="uui-navbar07_menu w-nav-menu">
          <div className="uui-navbar07_menu-left">
            <div
              data-hover="true"
              data-delay="300"
              data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb28c"
              className="uui-navbar07_menu-dropdown w-dropdown"
              {...dropdownEvents('solutions')}
            >
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Solutions</strong></div>
              </div>
              <nav
                data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb292"
                className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'solutions' ? 'is-open' : ''}`}
              >
                <div className="uui-navbar07_dropdown-link-list">
                <Link to="/deweb" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/deweb.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">DeWeb</div>
                      <div className="uui-text-size-small">The web as you know, 100% decentralized</div>
                    </div>
                </Link>
                <Link to="/asc" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/ASC.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">ASC</div>
                      <div className="uui-text-size-small">Autonomous Smart Contracts</div>
                    </div>
                </Link>
                <Link to="/technology" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Technology.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Technology</div>
                      <div className="uui-text-size-small">Our unique tech built for freedom</div>
                      </div>
                </Link>
                </div>
              </nav>
            </div>
            <div
              data-hover="true"
              data-delay="300"
              data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ac"
              className="uui-navbar07_menu-dropdown w-dropdown"
              {...dropdownEvents('build')}
            >
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Build</strong></div>
              </div>
              <nav
                data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2b2"
                className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'build' ? 'is-open' : ''}`}
              >
                <div className="uui-navbar07_dropdown-link-list">
                <a href="https://docs.massa.net/" target="_blank" className="uui-navbar07_dropdown-link w-inline-block" rel="noreferrer">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Docs.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Docs</div>
                      <div className="uui-text-size-small">Learn the basic concepts of the Massa blockchain</div>
                      </div>
                    </a>
                <Link to="/grants-bounty" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Bounties.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Grants & Bounties</div>
                      <div className="uui-text-size-small">For promising ideas that need help or funding</div>
                    </div>
                </Link>
                </div>
        </nav>
            </div>
            <div
              data-hover="true"
              data-delay="300"
              data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2c4"
              className="uui-navbar07_menu-dropdown w-dropdown"
              {...dropdownEvents('explore')}
            >
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Explore</strong></div>
              </div>
              <nav
                data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ca"
                className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'explore' ? 'is-open' : ''}`}
              >
                <div className="uui-navbar07_dropdown-link-list">
                <Link to="/ecosystem" className="uui-navbar07_dropdown-link-copy-copy w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Ecosystem.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Ecosystem</div>
                      <div className="uui-text-size-small">Explore the Massa ecosystem</div>
                    </div>
                </Link>
                <Link to="/get-mas" className="uui-navbar07_dropdown-link-copy-copy w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Ecosystem.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Buy $MAS</div>
                      <div className="uui-text-size-small">Available options to get $MAS</div>
                </div>
                </Link>
            </div>
        </nav>
            </div>
            <div
              data-hover="true"
              data-delay="300"
              data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2d4"
              className="uui-navbar07_menu-dropdown w-dropdown"
              {...dropdownEvents('community')}
            >
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Community</strong></div>
              </div>
              <nav
                data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2da"
                className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'community' ? 'is-open' : ''}`}
              >
                <div className="uui-navbar07_dropdown-link-list">
                  <a href="https://forum.massa.community/" target="_blank" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Forum.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Forum</div>
                      <div className="uui-text-size-small">Community Forum for constructive discussions</div>
        </div>
                  </a>
                  <Link to="/ambassador" className="uui-navbar07_dropdown-link w-inline-block">
  <div className="uui-navbar07_icon-wrapper"><img src="/images/Ambassador.svg" loading="lazy" alt="" /></div>
  <div className="uui-navbar07_item-right">
    <div className="uui-navbar07_item-heading">Ambassador</div>
    <div className="uui-text-size-small">Coming soon</div>
  </div>
</Link>
                </div>
              </nav>
            </div>
            <div
              data-hover="true"
              data-delay="300"
              data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ec"
              className="uui-navbar07_menu-dropdown w-dropdown"
              {...dropdownEvents('about')}
            >
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">About</strong></div>
              </div>
              <nav
                data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2f2"
                className={`uui-navbar07_dropdown-list w-dropdown-list ${openDropdown === 'about' ? 'is-open' : ''}`}
              >
                <div className="uui-navbar07_dropdown-link-list">
                <Link to="/team" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Team.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Team</div>
                      <div className="uui-text-size-small">Meet the team behind innovation</div>
                    </div>
                </Link>
                <Link to="/blog" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Blog.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Blog</div>
                      <div className="uui-text-size-small">Read the latest news about the ecosystem</div>
                    </div>
                </Link>
                </div>
              </nav>
            </div>
          </div>
          <div className="uui-navbar07_menu-right">
            <Link to="/start" className="link-block-7 w-inline-block">
              <div className="textlink">Get started</div>
            </Link>
            <div className="div-block-25">
              <a href="https://discord.com/invite/massa" className="link-block w-inline-block"><img src="/images/Discord.svg" loading="lazy" alt="" /></a>
              <a href="https://x.com/massachain" className="link-block-2 w-inline-block"><img src="/images/X.svg" loading="lazy" alt="" /></a>
        </div>
      </div>
        </nav>
        <div className="uui-navbar07_menu-button w-nav-button" onClick={() => setOpen(!open)}>
          <div className="menu-icon_component">
            <div className="menu-icon_line-top"></div>
            <div className="menu-icon_line-middle">
              <div className="menu-icon_line-middle-inner"></div>
            </div>
            <div className="menu-icon_line-bottom"></div>
          </div>
              </div>
          </div>
      </div>
  )
}

export default Navbar


