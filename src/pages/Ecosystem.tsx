import { useState, useMemo } from 'react'
import { useEcosystemProjects } from '../hooks/useContentData'
import type { EcosystemCategory } from '../data/ecosystem'

const CATEGORIES: EcosystemCategory[] = ['Tools', 'Games', 'Social', 'NFTs', 'DeFi', 'Wallets']
const ALL_CATEGORIES = ['All', ...CATEGORIES] as const
type FilterCategory = EcosystemCategory | 'All'

export function Ecosystem() {
  const allProjects = useEcosystemProjects()
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory | null>(null)

  const filteredProjects = useMemo(() => {
    if (!selectedCategory || selectedCategory === 'All') {
      return allProjects
    }
    return allProjects.filter(project =>
      project.category.includes(selectedCategory)
    )
  }, [allProjects, selectedCategory])

  const toggleCategory = (category: FilterCategory) => {
    setSelectedCategory(prev => {
      // Si on clique sur le même filtre, on le désélectionne
      if (prev === category) {
        return null
      }
      // Sinon, on sélectionne le nouveau filtre
      return category
    })
  }

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
      
      <section className="section-12">
        <div className="form-block w-form">
          <form className="form">
            <div style={{ marginBottom: '2rem', padding: '0 2rem' }}>
              <div className="collection-list-6" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
                {ALL_CATEGORIES.map(category => (
                  <label
                    key={category}
                    className={`w-checkbox fs-checkbox_field-4-2 ${selectedCategory === category ? 'is-active' : ''}`}
                    style={{ cursor: 'pointer', userSelect: 'none' }}
                  >
                    <div
                      className={`w-checkbox-input w-checkbox-input--inputType-custom fs-checkbox_button-4-2 ${
                        selectedCategory === category ? 'w--redirected-checked' : ''
                      }`}
                    />
                    <input
                      type="checkbox"
                      checked={selectedCategory === category}
                      onChange={() => toggleCategory(category)}
                      style={{ opacity: 0, position: 'absolute', zIndex: -1 }}
                    />
                    <span className="fs-checkbox_label-4-2 w-form-label">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </form>
        </div>
        <div className="projects_wrapper">
          <div className="collection-list-wrapper w-dyn-list">
            <div role="list" className="collection-list w-dyn-items">
              {filteredProjects.length > 0 ? (
                filteredProjects.map(project => (
                  <div key={project.id} role="listitem" className="collection-item-3 w-dyn-item">
                    <div className="div-block-21">
                      {project.image && (
                        <img 
                          src={project.image} 
                          alt={project.name} 
                          width="154" 
                          className="image-22"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = '/images/Technology.svg'
                          }}
                        />
                      )}
                      <h3 className="heading-5-copy">{project.name}</h3>
                      <div className="uui-text-size-large">{project.description}</div>
                    </div>
                    <div className="w-layout-hflex flex-block-4">
                      {project.website && (
                        <a href={project.website} target="_blank" rel="noopener noreferrer" className="w-inline-block">
                          <img src="/images/deweb.svg" loading="lazy" alt="site" />
                        </a>
                      )}
                      {project.links && project.links.filter(l => l.type === 'x').map(l => (
                        <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer" className="w-inline-block">
                          <img src="/images/X.svg" loading="lazy" alt="x" />
                        </a>
                      ))}
                    </div>
                    <div className="collection-list-wrapper-3 w-dyn-list">
                      <div role="list" className="collection-list-7 w-dyn-items">
                        {project.category.map(category => (
                          <div key={category} role="listitem" className="w-dyn-item">
                            <div className="text-block-15">{category}</div>
                          </div>
                        ))}
                      </div>
                  </div>
                </div>
              ))
              ) : (
                <div className="w-dyn-empty">
                  <div>No items found.</div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-11">
        <div className="uui-padding-vertical-xhuge-copy">
          <div className="uui-layout39_component">
            <div className="uui-text-align-center-2">
              <div className="uui-max-width-large-2">
                <h2 className="heading-4">Don't see your project ?</h2>
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

