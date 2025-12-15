import { AnimatedFreedom } from '../components/AnimatedFreedom'
import { AnimatedPixels } from '../components/AnimatedPixels'
import { useBlogPosts } from '../hooks/useContentData'

export function Home() {
  const blogPosts = useBlogPosts()
  
  return (
    <div>
      {/* Hero Section */}
      <header className="uui-section_heroheader14">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <div className="uui-button-row button-row-center">
                    <div className="uui-heading-xlarge">Redefining</div>
                    <AnimatedFreedom />
                    <div className="uui-heading-xlarge">in the Digital Age</div>
                  </div>
                  <h1 className="text-block-7">The first decentralized cloud network</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge">Massa is the Layer 1 that brings true decentralization to where it's needed.</div>
                  </div>
                  <div className="uui-space-large"></div>
                  <div className="uui-button-row button-row-center is-reverse-mobile-landscape">
                    <a href="/ecosystem" className="button w-button">Explore freedom</a>
                    <a href="https://docs.massa.net/" className="button w-button">Build freedom</a>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <AnimatedPixels />
      </header>

      {/* Problem Section */}
      <section className="uui-section_layout38">
        <div className="uui-page-padding-2">
          <div className="uui-container-large-2">
            <div className="uui-padding-vertical-xhuge">
              <div className="uui-layout39_component">
                <div className="uui-text-align-center-2">
                  <div className="uui-max-width-large-2">
                    <h2 className="heading-4-center">We are forgetting the roots</h2>
                    <div className="uui-space-xsmall"></div>
                    <h2 className="uui-heading-medium">Are we truly experiencing Web3 today?</h2>
                    <div className="uui-space-xsmall"></div>
                    <div className="text-block-9">The Web3 evolution promised to decentralize the internet, but today, it reveals a troubling reality : Most dApps are non-Web3, but pretend to be. They still rely heavily on Web2 infrastructures, raising significant security concerns. Leading to numerous hacks that have cost millions DeFi protocols, leaving countless users frustrated and exposed.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="uui-section_cta11">
        <div className="uui-page-padding-3">
          <div className="uui-container-large-2">
            <div className="uui-padding-vertical-xhuge">
              <div className="div-block-5">
                <div className="div-block-4">
                  <div className="uui-cta11_component">
                    <div className="uui-text-align-center-2">
                      <h3 className="heading">Deploy a dApp that lives forever</h3>
                      <div className="uui-space-xsmall"></div>
                      <div className="uui-text-size-xlarge">The Web powered by Massa - It functions just like the normal web, but it's 100% decentralized, immutable and secure, forever.</div>
                      <div className="uui-space-xsmall"></div>
                      <a href="https://docs.massa.net/" className="button w-button">Start now</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section Header */}
      <section className="section-19">
        <div className="div-block-15">
          <h2 className="heading-4-copy">Massa: Where Freedom Thrives</h2>
          <div className="uui-space-xsmall"></div>
          <h2 className="uui-heading-medium-copy">Are we truly experiencing Web3 today?</h2>
          <div className="uui-space-xsmall"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-2">
        <div className="div-block-14-copy">
          <div className="div-block-12-copy-copy">
            <img src="/images/Group-79.svg" loading="lazy" alt="" className="image-19" />
            <div className="div-block-13">
              <div className="uui-space-large">
                <div className="uui-space-large"></div>
              </div>
              <div className="uui-text-align-center-2">
                <h3 className="heading">Onchain web hosting</h3>
                <div className="uui-space-xsmall"></div>
                <div className="uui-text-size-xlarge">Uninterrupted, uncensored.</div>
              </div>
              <div className="uui-space-large">
                <div className="uui-space-large"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-9">
          <div className="div-block-12">
            <img src="/images/Group-79.svg" loading="lazy" alt="" className="image-19" />
            <div className="div-block-13">
              <div className="uui-space-large">
                <div className="uui-space-large"></div>
              </div>
              <div className="uui-text-align-center-2">
                <h3 className="heading">Autonomous Smart Contracts</h3>
                <div className="uui-text-size-xlarge">complete automation, zero interference.</div>
              </div>
              <div className="uui-space-large">
                <div className="uui-space-large"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="div-block-14">
          <div className="div-block-12-copy">
            <img src="/images/Group-79.svg" loading="lazy" alt="" className="image-19" />
            <div className="div-block-13">
              <div className="uui-space-large">
                <div className="uui-space-large"></div>
              </div>
              <div className="uui-text-align-center-2">
                <h3 className="heading">True decentralization</h3>
                <div className="uui-text-size-xlarge">No single point of failure.</div>
              </div>
              <div className="uui-space-large">
                <div className="uui-space-large"></div>
              </div>
          </div>
          </div>
        </div>
      </section>

      {/* Pixel separator */}
      <section><img src="/images/pixel.svg" loading="lazy" alt="" className="image-38" /></section>

      {/* Solutions description */}
      <section className="section-3">
        <div className="div-block-15-copy">
          <div className="uui-space-xsmall"></div>
          <div className="text-block-9-copy-copy">By combining Automated Smart Contracts and DeWeb, both powered by our Layer 1. It is now possible to deploy true decentralized dApps.</div>
          <div className="uui-space-xsmall"></div>
        </div>
      </section>

      {/* Solutions Cards */}
      <section className="section-4">
        <div className="div-block-15-copy-copy">
          <a href="/deweb" className="card-w-hover w-inline-block">
            <img src="/images/deweb.svg" loading="lazy" width="40" alt="" />
            <div>
              <div className="heading-3">DeWeb</div>
              <div className="uui-text-size-large">The web as you know, 100% decentralized</div>
            </div>
          </a>
          <a href="/asc" className="card-w-hover w-inline-block">
            <img src="/images/ASC.svg" loading="lazy" width="40" alt="" />
            <div>
              <div className="heading-3">ASC</div>
              <div className="uui-text-size-large">Autonomous Smart Contracts</div>
            </div>
          </a>
          <a href="/technology" className="card-w-hover w-inline-block">
            <img src="/images/Technology.svg" loading="lazy" width="40" alt="" />
            <div>
              <div className="heading-3">Massa L1</div>
              <div className="uui-text-size-large">Our unique tech built for freedom</div>
            </div>
          </a>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section-18">
        <div className="div-block-15">
          <h2 className="heading-4-copy">Usecases</h2>
        </div>
        <div className="div-block-grid">
          <div className="card">
            <div>
              <div className="heading-3">Decentralized Social Media Platforms</div>
              <div className="uui-text-size-large-copy">100% Uncensorable social media platforms, fully hosted on-chain.</div>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="heading-3">Decentralized Sites and dApps</div>
              <div className="uui-text-size-large-copy">DNS-Hijacking Proof Websites and DeFi Applications.</div>
            </div>
          </div>
          <div className="card">
            <div>
              <div className="heading-3">Decentralized Cross-Chain Automation</div>
            </div>
            <div className="uui-text-size-large-copy">Automate your dApps, fully decentralized, across countless countless Chains.</div>
          </div>
          <div className="card">
            <div>
              <div className="heading-3">Evolvable NFTs</div>
            </div>
            <div className="uui-text-size-large-copy">Self Evolving NFTs, with on-chain triggers.</div>
          </div>
          <div className="card">
            <div>
              <div className="heading-3">Web3 Gaming</div>
            </div>
            <div className="uui-text-size-large-copy">Automate NPCs, in-game TXs, bringing true decentralization to gaming.</div>
          </div>
          <div className="card">
            <div>
              <div className="heading-3">Storage Providers</div>
              <div className="uui-text-size-large-copy">Share your unused storage with other users, and earn tokens.</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="uui-section_layout21">
        <div className="uui-page-padding-5">
          <div className="uui-container-large-4">
            <div className="uui-padding-vertical-xhuge-3">
              <div className="w-layout-grid uui-layout20_component-copy">
                <div className="uui-layout21_content-left">
                  <h2 className="heading-4">Massa brings decentralization to where it's needed. What drives us is the idea of experiencing true Web3, and open it to the world.</h2>
                  <div className="uui-space-xsmall"></div>
                  <a href="https://massachain.medium.com/" className="button-secondary w-button">Read more</a>
                </div>
                <div className="uui-layout21_content-right">
                  <div className="text-block-9-copy">Since 2019, we've on a mission to build something truly unique. A solution driven by a single purpose : true decentralization.Airdrops, points, farming, agressive community management… What seemed to be a quick trend as become a long and painfull narrative in the Web3 space. Massadoption* won't come from these types of ideas.What we need instead, is to create real tools and solutions to real problems. We're probably not affected by this right now, but countless examples in other countries emerge everyday. Censure, blockages, access to the tools are not granted to everyone depending on where you live. We're aiming for true free internet.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Section */}
      <section className="div-block-17">
        <div className="div-block-15-copy">
          <h2 className="heading-4-copy">Follow our journey</h2>
          <div className="uui-space-small"></div>
          <div className="uui-space-xsmall"></div>
          <section className="uui-section_logos03">
            <div className="uui-page-padding-7">
              <div className="uui-container-large-5">
                <div className="uui-logos03_logo-list">
                  <div className="uui-logos03_wrapper">
                    <a href="https://x.com/massachain" className="w-inline-block"><img src="/images/coinbase_1.svg" loading="lazy" alt="Company logo" className="uui-logos03_logo" /></a>
                  </div>
                  <div className="uui-logos03_wrapper">
                    <a href="https://t.me/massanetwork" className="w-inline-block"><img src="/images/spotify_1.svg" loading="lazy" alt="Company logo" className="uui-logos03_logo" /></a>
                  </div>
                  <div className="uui-logos03_wrapper">
                    <a href="https://discord.com/invite/massa" className="w-inline-block"><img src="/images/slack_1.svg" loading="lazy" alt="Company logo" className="uui-logos03_logo" /></a>
                  </div>
                  <div className="uui-logos03_wrapper">
                    <a href="https://massachain.medium.com/" className="w-inline-block"><img src="/images/dropbox.svg" loading="lazy" alt="Company logo" className="uui-logos03_logo" /></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="uui-space-xsmall"></div>
        </div>
        <footer className="uui-footer05_component">
          <div className="uui-page-padding-8">
            <div className="uui-container-large-5"></div>
          </div>
        </footer>
      </section>

      {/* Blog Section */}
      <section className="section-20">
        <h2 className="heading-4-center-black">Read the latest from Massa</h2>
      </section>
      <section className="section-6">
        <div className="uui-max-width-large-2"></div>
        <div className="padding-global">
          <div className="container-large">
            <div className="wrapper-bloc-header is--blog"></div>
            <div className="blog_component">
              <div className="blog_list-wrapper">
                <div className="blog_list-preview">
                  {blogPosts.slice(0, 3).map(post => (
                    <div key={post.id} role="listitem" className="collection-item w-dyn-item">
                      {post.image && (
                        <img 
                          src={encodeURI(post.image)} 
                          loading="lazy" 
                          width="Auto" 
                          alt={post.title} 
                          className="image-7"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/Technology.svg'
                          }}
                        />
                      )}
                      <div className="text-block">{post.title}</div>
                      <div className="text-block-2">{post.excerpt}</div>
                      <a href={`/blog/${post.id}`} target="_blank" rel="noopener noreferrer" className="button-3 w-button">Read more</a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home


