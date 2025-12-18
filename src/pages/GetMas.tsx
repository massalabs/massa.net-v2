export function GetMas() {
  return (
    <div>
      <section className="divsquares-copy">
        <h1>Get $MAS</h1>
        <div className="w-embed w-iframe">
          <link rel="stylesheet" type="text/css" href="https://letsexchange.io/widget_lets.css" />
          <div className="lets-widget" id="lets_widget_ZA9pV7Cit1WsM8qP" style={{ width: '600px', height: '480px' }}>
            <iframe
              src="https://letsexchange.io/v2/widget?affiliate_id=ZA9pV7Cit1WsM8qP&is_iframe=true"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="clipboard-read; clipboard-write"
            ></iframe>
          </div>
        </div>
      </section>

      <section className="masprovider-links">
        <h2 className="heading-4-center-white-copy">
          <strong className="bold-text-2-copy-copy">Exchanges:</strong>
        </h2>
        <div className="div-block-15-high-copy">
          <div className="card-button">
            <div>
              <div className="heading-3">
                <strong className="heading-3-copy">DEX</strong>
              </div>
              <div className="uui-text-size-large-margin">
                You already own some crypto on Massa chain ? Exchange them on DEX:
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <a href="https://app.dusa.io/" target="_blank" rel="noreferrer" className="button w-button">
                  Dusa
                </a>
                <a href="https://www.eaglefi.io/" target="_blank" rel="noreferrer" className="button w-button">
                  EagleFi
                </a>
              </div>
            </div>
          </div>
          <div className="card-button">
            <div>
              <div className="heading-3">
                <strong className="heading-3-copy">CEX</strong>
              </div>
              <div className="uui-text-size-large-margin">Buy with your credit card on crypto trading CEX platform</div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <a href="https://www.mexc.co" target="_blank" rel="noreferrer" className="button w-button">
                  MEXC
                </a>
                <a href="https://www.bitgetapp.com" target="_blank" rel="noreferrer" className="button w-button">
                  Bitget
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default GetMas

