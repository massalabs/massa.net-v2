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
        <div className="video w-video w-embed" style={{ paddingTop: '56.25%', height: 'auto' }}>
          <a
            href="https://www.youtube.com/watch?v=jW56dlUAd7A"
            target="_blank"
            rel="noreferrer noopener"
            style={{ 
              display: 'block', 
              position: 'absolute', 
              top: 0, 
              left: 0, 
              width: '100%', 
              height: '100%',
              cursor: 'pointer' 
            }}
            aria-label="Watch Introducing DeWeb on YouTube"
          >
            <img
              src="/images/youtube-deweb-thumb.jpg"
              alt="Introducing DeWeb - Click to watch on YouTube"
              loading="lazy"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '68px',
                height: '48px',
                backgroundColor: 'rgba(23, 35, 34, 0.9)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
                zIndex: 1,
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="white"
                style={{ marginLeft: '4px' }}
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
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
              <div className="deweb-card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="heading-3-deweb">Censorship-Resistant</div>
              <div className="uui-text-size-large-deweb">
                Distributed across a global network and accessible from anywhere, any time.
                <br />
              </div>
            </div>
          </div>
          <div className="card-deweb">
            <div>
              <div className="deweb-card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8.5 10.5C8.5 9.4 9.4 8.5 10.5 8.5H13.5C14.6 8.5 15.5 9.4 15.5 10.5C15.5 11.6 14.6 12.5 13.5 12.5H10.5C9.4 12.5 8.5 13.4 8.5 14.5C8.5 15.6 9.4 16.5 10.5 16.5H13.5C14.6 16.5 15.5 15.6 15.5 14.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
              <div className="heading-3-deweb">Cost-Effective</div>
            </div>
            <div className="uui-text-size-large-deweb">
              One time payment, fully refundable. No monthly fees.
              <br />
            </div>
          </div>
          <div className="card-deweb">
            <div>
              <div className="deweb-card-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <rect x="4" y="11" width="16" height="9" rx="2" stroke="currentColor" strokeWidth="1.7" />
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
                </svg>
              </div>
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

