import { memo, type CSSProperties, type ReactNode } from 'react'

const halton = (index: number, base: number) => {
  let result = 0
  let f = 1 / base
  let i = index
  while (i > 0) {
    result += f * (i % base)
    i = Math.floor(i / base)
    f /= base
  }
  return result
}

type Props = {
  count: number
  render: (index: number) => ReactNode
  minSize?: number
  maxSize?: number
  minAlpha?: number
  maxAlpha?: number
}

/**
 * Decorative field of slowly drifting icons, evenly spread with a Halton sequence.
 * Colour comes from the theme (currentColor); the parent .pg-float mask keeps the
 * centre clear so headline copy is never covered.
 */
export const FloatField = memo(function FloatField({
  count,
  render,
  minSize = 16,
  maxSize = 32,
  minAlpha = 0.18,
  maxAlpha = 0.5,
}: Props) {
  return (
    <div className="pg-float" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const size = minSize + ((i * 7) % 5) / 4 * (maxSize - minSize)
        const alpha = minAlpha + ((i * 3) % 5) / 4 * (maxAlpha - minAlpha)
        const style = {
          left: `${4 + halton(i + 1, 2) * 92}%`,
          top: `${5 + halton(i + 1, 3) * 90}%`,
          width: `${size}px`,
          height: `${size}px`,
          opacity: alpha,
          '--drift-x': `${((i % 11) - 5) * 6}px`,
          '--drift-y': `${((i % 9) - 4) * 7}px`,
          '--float-duration': `${13 + (i % 9)}s`,
          '--float-delay': `${(i % 10) * -1.3}s`,
        } as CSSProperties
        return (
          <span key={i} className="pg-float-item" style={style}>
            {render(i)}
          </span>
        )
      })}
    </div>
  )
})

export default FloatField
