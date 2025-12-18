import { Link } from 'react-router-dom'
import { SEO } from '../components/SEO'
import { useEffect } from 'react'

export function NotFound() {
  useEffect(() => {
    // S'assurer que le serveur renvoie un 404
    // En production, cela devrait être géré par le serveur web
    // Pour Vite en dev, on peut au moins mettre le status dans l'URL
    if (import.meta.env.PROD) {
      // En production, le serveur web devrait gérer ça
      document.title = '404 - Page introuvable | Massa'
    }
  }, [])

  return (
    <>
      <SEO 
        title="404 - Page introuvable" 
        description="La page demandée n'existe pas."
        noindex={true}
      />
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
    </>
  )
}

export default NotFound

