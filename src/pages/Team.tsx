import { SEO } from '../components/SEO'
import { MaskIcon } from '../components/MaskIcon'
import { useTeam } from '../hooks/useContentData'

export function Team() {
  const team = useTeam()

  return (
    <div className="pg pg-team">
      <SEO title="Team — Massa" description="Meet the people building Massa, the decentralized and scalable layer 1 blockchain." />

      <header className="pg-section pg-section--tight team-hero">
        <div className="pg-container pg-center pg-narrow">
          <span className="pg-eyebrow">Team</span>
          <h1 className="pg-h1" style={{ marginTop: '1.25rem' }}>Meet the Massa team</h1>
        </div>
      </header>

      <section className="pg-section" style={{ paddingTop: 0 }}>
        <div className="pg-container">
          <ul className="team-grid">
            {team.map((person) => (
              <li key={person.id} className="team-card">
                <div className="team-photo">
                  <img src={encodeURI(person.image)} alt={person.name} loading="lazy" width={400} height={400} />
                </div>
                <div className="team-meta">
                  <div className="team-text">
                    <h2 className="team-name">{person.name}</h2>
                    <p className="team-role">{person.role}</p>
                  </div>
                  {person.linkedin && (
                    <a
                      href={person.linkedin}
                      className="team-link"
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${person.name} on LinkedIn`}
                    >
                      <MaskIcon src="/images/Linkedin.svg" />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}

export default Team
