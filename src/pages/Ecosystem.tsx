import { useEcosystemProjects } from '../hooks/useContentData'

export function Ecosystem() {
  const ecosystemProjects = useEcosystemProjects()
  
  return (
    <div>
      <section className="section-11">
        <div className="uui-container-large">
          <div className="uui-space"></div>
          <div className="uui-heroheader14_component">
            <div className="uui-text-align-center">
              <div className="uui-max-width-xlarge">
                <h1 className="uui-heading-xlarge-white">Discover Massa Ecosystem</h1>
                <div className="uui-max-width-large align-center"></div>
              </div>
            </div>
            <div className="uui-space"></div>
          </div>
        </div>
      </section>
      <img src="/images/background-pixel-reverse.svg" loading="lazy" alt="" className="image-21" />
      {/* Filtres supprimés pour demo */}
      <section className="section-12">
        <div className="projects_wrapper">
          <div className="collection-list-wrapper">
            <div role="list" className="collection-list">
              {ecosystemProjects.map(project => (
                <div key={project.id} className="collection-item-3">
                  <div className="div-block-21">
                    <img src={project.image} alt={project.name} width={154} className="image-22" />
                    <h3 className="heading-5-copy">{project.name}</h3>
                    <div className="uui-text-size-large">{project.description}</div>
                  </div>
                  <div className="w-layout-hflex flex-block-4">
                    {project.website && <a href={project.website} className="w-inline-block"><img src="/images/deweb.svg" alt="site" /></a>}
                    {project.links.filter(l=>l.type==='x').map(l=>(
                      <a key={l.url} href={l.url} className="w-inline-block"><img src="/images/X.svg" alt="x" /></a>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-11">
        <div className="uui-padding-vertical-xhuge-copy">
          <div className="uui-layout39_component">
            <div className="uui-text-align-center-2">
              <div className="uui-max-width-large-2">
                <h2 className="heading-4">Don’t see your project ?</h2>
                <div className="uui-space-xsmall">
                  <div className="uui-space-large"></div>
                </div>
              </div>
              <a href="mailto:kevin@massa.foundation" className="button-secondary w-button">List now</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Ecosystem

