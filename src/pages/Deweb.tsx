import { useEffect } from 'react'

export function Deweb() {
  useEffect(() => {
    // Ajouter une classe au body pour cibler les styles spécifiques
    document.body.classList.add('page-deweb')
    return () => {
      document.body.classList.remove('page-deweb')
    }
  }, [])

  return (
    <div>
      <header className="uui-section_heroheader14">
        <div className="uui-page-padding">
          <div className="uui-container-large">
            <div className="uui-space"></div>
            <div className="uui-heroheader14_component">
              <div className="uui-text-align-center">
                <div className="uui-max-width-xlarge">
                  <h1 className="uui-heading-xlargeblue">The Internet, Redefined</h1>
                  <div className="uui-space-small"></div>
                  <div className="uui-button-row button-row-center">
                    <div className="text-block-6-blue">Your website, replicated on thousands of computers. Unstoppable.</div>
                  </div>
                  <div className="uui-space-small"></div>
                  <div className="uui-max-width-large align-center">
                    <div className="uui-text-size-xlarge-blue">Power your dApp Automations without Centralized Service Reliance</div>
                  </div>
                  <div className="uui-space-large"></div>
                </div>
              </div>
              <a href="https://deweb.massa.network/search" className="button-blue w-button" target="_blank" rel="noreferrer">
                Start Now
              </a>
            </div>
          </div>
        </div>
        <section>
          <img src="/images/bluepixel.svg" loading="lazy" alt="" className="image-21-copy" />
        </section>
      </header>

      <section className="section-21">
        <div style={{ paddingTop: '56.25%', maxWidth: '800px', width: '100%', margin: '0 auto' }} className="video w-video w-embed">
          <iframe
            className="embedly-embed"
            src="https://www.youtube.com/embed/jW56dlUAd7A?rel=0&modestbranding=1"
            width="800"
            height="450"
            scrolling="no"
            allowFullScreen
            title="Introducing DeWeb"
            loading="lazy"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          />
        </div>
      </section>

      <section className="section-8-deweb">
        <div className="w-layout-blockcontainer container-2-deweb w-container">
          <h2 className="heading-4-deweb">No central authority. No risk of shutdown. True digital freedom.</h2>
          <div className="uui-space-xsmall"></div>
          <div className="uui-text-size-xlarge-deweb">
            On DeWeb you can host your website and domain name in a fully decentralized way, ensuring it remains permanently
            available, uncensorable, and self-sustaining.
          </div>
          <div className="uui-space-large"></div>
          <img src="/images/svg.svg" loading="lazy" alt="" />
        </div>
      </section>

      <section className="section-4-deweb">
        <div className="div-block-15-copy-copy">
          <div className="card-deweb">
            <div>
              <div className="heading-3-deweb">Censorship-Resistant</div>
              <div className="uui-text-size-large-deweb">
                Distributed across a global network and accessible from anywhere, any time.
                <br />
              </div>
            </div>
          </div>
          <div className="card-deweb">
            <div>
              <div className="heading-3-deweb">Cost-Effective</div>
            </div>
            <div className="uui-text-size-large-deweb">
              One time payment, fully refundable. No monthly fees.
              <br />
            </div>
          </div>
          <div className="card-deweb">
            <div>
              <div className="heading-3-deweb">Total Immutability</div>
              <div className="uui-text-size-large-deweb">
                Make your site so permanent, even you can't take it down.
                <br />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-4-deweb-copy">
        <div className="div-block-15-deweb-high">
          <div className="card-deweb-2">
            <div>
              <div className="heading-3-deweb-2">Upload your website</div>
            </div>
          </div>
          <div className="card-deweb-2">
            <div>
              <div className="heading-3-deweb-2">Make a one time payment. No monthly fees.</div>
            </div>
          </div>
          <div id="w-node-b5b40a6e-d8b2-cd47-2f32-8d45c5ce79da-71d192fd" className="card-deweb-2">
            <div className="div-block-24">
              <div className="heading-3-deweb-2">Launch and chill</div>
            </div>
          </div>
          <div id="w-node-_1d543842-de84-6c38-c0c6-a903afa6b319-71d192fd">
            <a href="https://deweb.massa.network/search" className="button-blue w-button" target="_blank" rel="noreferrer">
              Start Now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Deweb

