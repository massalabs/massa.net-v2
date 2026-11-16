import type { CSSProperties } from 'react'

/**
 * Renders a single-colour SVG file as a CSS mask so it inherits `currentColor`.
 * Lets one icon file follow every page theme without per-page colour filters.
 */
export function MaskIcon({ src, className = '' }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`mask-icon ${className}`.trim()}
      style={{ '--mask-src': `url("${encodeURI(src)}")` } as CSSProperties}
    />
  )
}

export default MaskIcon
