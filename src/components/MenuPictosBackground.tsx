/**
 * Pictos du menu (DeWeb, ASC, Technology, etc.) en arrière-plan,
 * style pixelisé, très faible opacité.
 * @param scoped - si true, remplit le parent (section) ; si false, fond fixe toute la page
 */
const MENU_PICTOS = [
  { src: '/images/deweb.svg', alt: '', left: '8%', top: '12%', size: 56 },
  { src: '/images/Ecosystem.svg', alt: '', left: '88%', top: '18%', size: 48 },
  { src: '/images/ASC.svg', alt: '', left: '15%', top: '45%', size: 52 },
  { src: '/images/Technology.svg', alt: '', left: '82%', top: '38%', size: 44 },
  { src: '/images/Docs.svg', alt: '', left: '6%', top: '72%', size: 40 },
  { src: '/images/Bounties.svg', alt: '', left: '92%', top: '58%', size: 46 },
  { src: '/images/Forum.svg', alt: '', left: '22%', top: '85%', size: 42 },
  { src: '/images/Ambassador.svg', alt: '', left: '78%', top: '78%', size: 38 },
  { src: '/images/Team.svg', alt: '', left: '42%', top: '8%', size: 44 },
  { src: '/images/Blog.svg', alt: '', left: '58%', top: '92%', size: 40 },
] as const

type MenuPictosBackgroundProps = { scoped?: boolean; variant?: 'light' | 'dark' }

export function MenuPictosBackground({ scoped = false, variant = 'light' }: MenuPictosBackgroundProps) {
  const isDark = variant === 'dark'
  return (
    <div
      aria-hidden
      className="menu-pictos-background"
      style={{
        position: scoped ? 'absolute' : 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      {MENU_PICTOS.map((p, i) => (
        <img
          key={i}
          src={p.src}
          alt={p.alt}
          loading="lazy"
          style={{
            position: 'absolute',
            left: p.left,
            top: p.top,
            width: isDark ? 64 : p.size,
            height: isDark ? 64 : p.size,
            opacity: isDark ? 0.3 : 0.07,
            imageRendering: 'pixelated',
            filter: isDark ? 'brightness(0)' : 'brightness(0) invert(1)',
          }}
        />
      ))}
    </div>
  )
}

export default MenuPictosBackground
