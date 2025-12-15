import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <section className="uui-section_layout38">
      <div className="uui-page-padding-2">
        <div className="uui-container-large-2">
          <div className="uui-padding-vertical-xhuge">
            <div className="uui-layout39_component">
              <div className="uui-text-align-center-2">
                <div className="uui-max-width-large-2">
                  <h1 className="heading-4-center">Page introuvable</h1>
                  <div className="uui-space-xsmall"></div>
                  <p className="uui-text-size-xlarge">Le contenu demandé n’existe pas encore dans cette version React.</p>
                  <div className="uui-space-small"></div>
                  <Link to="/" className="button w-button">
                    Retour à l’accueil
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFound

