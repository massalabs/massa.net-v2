import { useEffect } from 'react'

export function Asc() {
  useEffect(() => {
    document.body.classList.add('page-asc-theme')
    return () => {
      document.body.classList.remove('page-asc-theme')
    }
  }, [])

  return (
    <div className="page-asc">
      <header className="uui-section_heroheader14 home-section-bg home-section-bg--blog-flat asc-hero-no-svg">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <h1 className="uui-heading-xlarge asc-hero-title">Decentralized Blockchain Automation</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-button-row button-row-center">
                    <div className="text-block-6 asc-hero-kicker">Fully Automated Smart Contracts</div>
                  </div>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge">
                      Power your dApp Automations without Centralized Service Reliance
                    </div>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <img src="/images/pixel.svg" loading="lazy" alt="" className="image-21 asc-hero-pixel" />
        </section>
      </header>

      <section className="uui-section_layout38 home-section-bg home-section-bg--internet-flat asc-market-section">
        <div className="uui-page-padding-2-copy">
          <div className="uui-container-large-2">
            <div className="uui-padding-vertical-xhuge">
              <div className="uui-layout39_component">
                <div className="uui-text-align-center-2">
                  <div className="uui-max-width-large-2">
                    <h2 className="heading-4-center">A Booming Market with Innovative Products</h2>
                    <div className="uui-space-xsmall"></div>
                    <div className="text-block-9">
                      This simple concept of Decentralization has evolved over the past decade and a half, into a massive
                      ecosystem of thousands of financial producs, spanning across hundreds of blockchains.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="uui-section_logos04">
            <div className="uui-logo-loop_component"></div>
          </section>
        </div>
      </section>

      <section className="section-use-cases home-section-bg home-section-bg--follow-internet">
        <div className="use-cases-container">
          <h2 className="heading-4-center">Use-cases</h2>
          <div className="div-block-15-copy-copy">
            <div className="card">
              <div className="heading-3-copy">DeFi</div>
              <div className="uui-text-size-large">
                Fully automated strategies on DEXs.
                <br />
              </div>
            </div>
            <div className="card">
              <div className="heading-3-copy">Payment</div>
              <div className="uui-text-size-large">
                Loan payments and collateral liquidations
                <br />
              </div>
            </div>
            <div className="card">
              <div className="heading-3-copy">Gaming and NFTs</div>
              <div className="uui-text-size-large">
                Evolving NFTs and gaming environments
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="section-8 home-section-bg home-section-bg--gossip-flat">
        <div className="w-layout-blockcontainer container-2-copy w-container">
          <h2 className="heading-4-copy">Decentralization is Being Overlooked</h2>
          <div className="uui-space-xsmall"></div>
          <div className="uui-text-size-xlarge-center">
            While utility and adoption on the blockchain has increased, decentralization has taken a backstep, with many
            projects relying on centralized services for automation purposes for their DeFi Applications.
          </div>
        </div>
      </section>

      <section className="uui-section_layout38 home-section-bg home-section-bg--follow-flat">
        <div className="uui-page-padding-2-copy">
          <div className="uui-container-large-2">
            <div className="uui-padding-vertical-xhuge">
              <div className="uui-layout39_component">
                <div className="uui-text-align-center-2">
                  <div className="uui-max-width-large-2">
                    <h2 className="heading-4-center">Autonomous Smart Contracts</h2>
                    <div className="uui-space-xsmall"></div>
                    <div className="text-block-9">
                      This is where Massa's Autonomous Smart Contracts step in, ensuring that Decentralization remains as one
                      of the core pillars of the Blockchain for the forseeable future.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="uui-section_logos04">
            <div className="uui-logo-loop_component"></div>
          </section>
        </div>

        <section className="section-4 home-section-bg home-section-bg--blog">
          <div className="div-block-15-high">
            <div className="card">
              <div>
                <div className="heading-3">
                  Fully On-chain Automation
                </div>
                <div className="uui-text-size-large-margin">
                  Unlike traditional smart contracts that rely on external bots (like Chainlink Keepers or Gelato), Massa ASCs
                  execute <strong>natively on-chain</strong> without external triggers.
                  <br />
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="heading-3">
                  Censorship-Resistant &amp; Trustless
                </div>
                <div className="uui-text-size-large-margin">
                  Since execution is fully decentralized, there's no single point of failure or reliance on centralized
                  services, ensuring maximum security and resilience.
                  <br />
                </div>
              </div>
            </div>
            <div className="card">
              <div>
                <div className="heading-3">
                  Self-Sustaining Smart Contracts
                </div>
                <div className="uui-text-size-large-margin">
                  Massa ASCs can <strong>wake themselves up</strong> and execute actions automatically, enabling use cases like{' '}
                  <strong>recurring payments, automated trading, DeFi strategies</strong> and <strong>Evolvable NFTs</strong>{' '}
                  without off-chain dependencies.
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  )
}

export default Asc

