export function Start() {
  return (
    <div>
      <header className="uui-section_heroheader14">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <h1 className="uui-heading-xlarge">Start your journey</h1>
                  <div className="uui-space-small"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section>
          <img src="/images/pixel.svg" loading="lazy" alt="" className="image-21" />
        </section>
      </header>

      <section className="section-17-copy"></section>

      <section className="section-456">
        <h2 className="heading-4-center-white">
          <strong className="bold-text-2-copy">Use Massa</strong>
        </h2>
        <h2 className="heading-4-center-white-copy">
          <strong className="bold-text-2-copy-copy">Wallets</strong>
        </h2>
        <div className="div-block-15-copy-copy">
          {[
            {
              title: 'Massa Station',
              text: 'Your gateway to the decentralized web',
              href: 'https://station.massa.net/',
            },
            {
              title: 'Bearby Wallet',
              text: 'Browser wallet for managing $MAS',
              href: 'https://chromewebstore.google.com/detail/bearby/papngmkmknnmfhabbckobgfpihpdgplk',
            },
            {
              title: 'Metamask Snap',
              text: 'The most used crypto-wallet now on Massa',
              href: 'https://snaps.metamask.io/snap/npm/massalabs/metamask-snap/',
            },
            {
              title: 'Enkrypt',
              text: 'A simple way to connect to the Massa ecosystem. Trusted multichain extension by MyEtherWallet creators.',
              href: 'https://www.enkrypt.com/download.html',
            },
          ].map((item) => (
            <div key={item.title} className="card-button">
              <div>
                <div className="heading-3-copy">{item.title}</div>
                <div className="uui-text-size-large">{item.text}</div>
              </div>
              <div className="uui-space-small"></div>
              <a href={item.href} target="_blank" rel="noreferrer" className="button-3-copy w-button">
                Download
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="divsquares">
        <h2 className="heading-4-center-white-copy">
          <strong className="bold-text-2-copy-copy">Explore</strong>
        </h2>
        <div className="div-block-15-high-copy">
          <div className="card-button">
            <div>
              <div className="heading-3">
                <strong className="heading-3-copy">Get $MAS</strong>
              </div>
              <div className="uui-text-size-large-margin">
                Buy $MAS on Centralized and Decentralized Exchanges.
              </div>
            </div>
            <a href="/get-mas" className="button-3-copy w-button">
              Buy $MAS
            </a>
          </div>
          <div className="card-button">
            <div>
              <div className="heading-3">
                <strong className="heading-3-copy">Bridge</strong>
              </div>
              <div className="uui-text-size-large-margin">Bridge your assets on Massa chain and start to explore.</div>
            </div>
            <a href="https://bridge.massa.net/index" target="_blank" rel="noreferrer" className="button-3-copy w-button">
              Use Bridge
            </a>
          </div>
          <div className="card-button">
            <div>
              <div className="heading-3">
                <strong className="heading-3-copy">Run a node</strong>
              </div>
              <div className="uui-text-size-large-margin">
                Participate in the decentralization of the network by running a node.
              </div>
            </div>
            <div className="uui-space-small"></div>
            <a href="https://docs.massa.net/docs/node/run" target="_blank" rel="noreferrer" className="button-3-copy w-button">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section className="section-10-copy">
        <div className="uui-container-large-2">
          <div className="uui-padding-vertical-xhuge">
            <div className="div-block-5">
              <div className="div-block-4">
                <div className="uui-cta11_component">
                  <div className="uui-text-align-center-2">
                    <h3 className="heading">Developper Tools</h3>
                    <div className="uui-space-xsmall"></div>
                    <div className="uui-text-size-xlarge">Everything you need to deploy on Massa</div>
                    <div className="uui-space-xsmall">
                      <div className="uui-space-large"></div>
                    </div>
                    <a href="https://docs.massa.net/" className="button w-button" target="_blank" rel="noreferrer">
                      Massa Docs
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Start

