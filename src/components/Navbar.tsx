import { useState } from 'react'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <div data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb285" data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="uui-navbar07_component w-nav">
      <div className="uui-navbar07_container">
        <a href="/" aria-current="page" className="uui-navbar07_logo-link w-nav-brand w--current">
          <div className="uui-logo_component"><img width="120" loading="lazy" alt="" src="/images/LOGO.svg" /></div>
        </a>
        <nav role="navigation" className="uui-navbar07_menu w-nav-menu">
          <div className="uui-navbar07_menu-left">
            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb28c" className="uui-navbar07_menu-dropdown w-dropdown">
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Solutions</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb292" style={{opacity:0, transform:"translate3d(0, -2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="uui-navbar07_dropdown-list w-dropdown-list">
                <div className="uui-navbar07_dropdown-link-list">
                  <a href="/deweb" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/deweb.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">DeWeb</div>
                      <div className="uui-text-size-small">The web as you know, 100% decentralized</div>
                    </div>
                  </a>
                  <a href="/asc" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/ASC.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">ASC</div>
                      <div className="uui-text-size-small">Autonomous Smart Contracts</div>
                    </div>
                  </a>
                  <a href="/technology" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Technology.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Technology</div>
                      <div className="uui-text-size-small">Our unique tech built for freedom</div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ac" className="uui-navbar07_menu-dropdown w-dropdown">
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Build</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2b2" style={{opacity:0, transform:"translate3d(0, -2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="uui-navbar07_dropdown-list w-dropdown-list">
                <div className="uui-navbar07_dropdown-link-list">
                  <a href="https://docs.massa.net/" target="_blank" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Docs.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Docs</div>
                      <div className="uui-text-size-small">Learn the basic concepts of the Massa blockchain</div>
                    </div>
                  </a>
                  <a href="/grants-bounty" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Bounties.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Grants & Bounties</div>
                      <div className="uui-text-size-small">For promising ideas that need help or funding</div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2c4" className="uui-navbar07_menu-dropdown w-dropdown">
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Explore</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ca" style={{opacity:0, transform:"translate3d(0, -2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="uui-navbar07_dropdown-list w-dropdown-list">
                <div className="uui-navbar07_dropdown-link-list">
                  <a href="/ecosystem" className="uui-navbar07_dropdown-link-copy-copy w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Ecosystem.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Ecosystem</div>
                      <div className="uui-text-size-small">Explore the Massa ecosystem</div>
                    </div>
                  </a>
                  <a href="/get-mas" className="uui-navbar07_dropdown-link-copy-copy w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img loading="lazy" src="/images/Ecosystem.svg" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Buy $MAS</div>
                      <div className="uui-text-size-small">Available options to get $MAS</div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2d4" className="uui-navbar07_menu-dropdown w-dropdown">
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">Community</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2da" style={{opacity:0, transform:"translate3d(0, -2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="uui-navbar07_dropdown-list w-dropdown-list">
                <div className="uui-navbar07_dropdown-link-list">
                  <a href="https://forum.massa.community/" target="_blank" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Forum.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Forum</div>
                      <div className="uui-text-size-small">Community Forum for constructive discussions</div>
                    </div>
                  </a>
                  <a href="#" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Ambassador.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Ambassador</div>
                      <div className="uui-text-size-small">Coming soon</div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
            <div data-hover="true" data-delay="300" data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2ec" className="uui-navbar07_menu-dropdown w-dropdown">
              <div className="uui-navbar07_dropdown-toggle w-dropdown-toggle">
                <div className="uui-dropdown-icon w-embed"><svg width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg></div>
                <div className="text-block-5"><strong className="bold-text">About</strong></div>
              </div>
              <nav data-w-id="f2f4127e-f14c-5b38-ea60-2d65363fb2f2" style={{opacity:0, transform:"translate3d(0, -2rem, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)"}} className="uui-navbar07_dropdown-list w-dropdown-list">
                <div className="uui-navbar07_dropdown-link-list">
                  <a href="/team" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Team.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Team</div>
                      <div className="uui-text-size-small">Meet the team behind innovation</div>
                    </div>
                  </a>
                  <a href="/blog" className="uui-navbar07_dropdown-link w-inline-block">
                    <div className="uui-navbar07_icon-wrapper"><img src="/images/Blog.svg" loading="lazy" alt="" /></div>
                    <div className="uui-navbar07_item-right">
                      <div className="uui-navbar07_item-heading">Blog</div>
                      <div className="uui-text-size-small">Read the latest news about the ecosystem</div>
                    </div>
                  </a>
                </div>
              </nav>
            </div>
          </div>
          <div className="uui-navbar07_menu-right">
            <a href="/start" className="link-block-7 w-inline-block">
              <div className="textlink">Get started</div>
            </a>
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


