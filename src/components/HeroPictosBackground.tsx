/**
 * Composition de 11 pictos Massa en arrière-plan du hero.
 * Représente l'écosystème (DeWeb, ASC, Technology, etc.) de façon décorative.
 */
const HERO_PICTOS = [
  { src: '/images/deweb.svg', left: '5%', top: '15%', size: 48, delay: 0 },
  { src: '/images/Ecosystem.svg', left: '92%', top: '12%', size: 52, delay: 0.1 },
  { src: '/images/ASC.svg', left: '12%', top: '68%', size: 40, delay: 0.05 },
  { src: '/images/Technology.svg', left: '88%', top: '55%', size: 46, delay: 0.15 },
  { src: '/images/Docs.svg', left: '3%', top: '42%', size: 38, delay: 0.02 },
  { src: '/images/Bounties.svg', left: '94%', top: '78%', size: 44, delay: 0.12 },
  { src: '/images/Forum.svg', left: '28%', top: '8%', size: 42, delay: 0.08 },
  { src: '/images/Ambassador.svg', left: '76%', top: '88%', size: 36, delay: 0.18 },
  { src: '/images/Team.svg', left: '48%', top: '4%', size: 40, delay: 0.04 },
  { src: '/images/Blog.svg', left: '62%', top: '72%', size: 38, delay: 0.1 },
  { src: '/images/Grants.svg', left: '18%', top: '88%', size: 44, delay: 0.06 },
] as const

export function HeroPictosBackground() {
  return (
    <div
      aria-hidden
      className="hero-pictos-background"
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {HERO_PICTOS.map((p, i) => (
        <img
          key={i}
          src={p.src}
          alt=""
          loading="eager"
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            opacity: 0.08,
            filter: 'brightness(0) invert(1)',
            imageRendering: 'auto',
            transition: 'opacity 0.3s ease',
          }}
        />
      ))}
    </div>
  )
}

export default HeroPictosBackground
