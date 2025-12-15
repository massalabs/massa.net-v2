import { useTeam } from '../hooks/useContentData'

export function Team() {
  const team = useTeam()
  
  return (
    <div>
      <section className="section-11">
        <div className="uui-container-large">
          <div className="uui-space"></div>
          <div className="uui-heroheader14_component">
            <div className="uui-text-align-center">
              <div className="uui-max-width-xlarge">
                <h1 className="uui-heading-xlarge-white">Discover Massa Team</h1>
                <div className="uui-max-width-large align-center"></div>
              </div>
            </div>
            <div className="uui-space"></div>
          </div>
        </div>
      </section>
      <img src="/images/background-pixel-reverse.svg" loading="lazy" alt="" className="image-21" />
      <section className="section-12">
        <div className="collection-list-wrapper-2 w-dyn-list">
          <div role="list" className="collection-list-5 w-dyn-items">
            {team.map(person => (
              <div key={person.id} className="collection-item-5 w-dyn-item">
                <img src={person.image} loading="lazy" width={192} alt={person.name} className="image-25" />
                <div className="uui-space-small"></div>
                <h1 className="name">{person.name}</h1>
                <h1 className="job-description">{person.role}</h1>
                <div className="uui-space-small"></div>
                {person.linkedin && (
                  <a href={person.linkedin} className="w-inline-block" target="_blank" rel="noreferrer">
                    <img src="/images/Linkedin.svg" loading="lazy" alt="LinkedIn" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      <section>
        <img src="/images/pixel.svg" loading="lazy" alt="" className="image-21" />
      </section>
    </div>
  )
}

export default Team

