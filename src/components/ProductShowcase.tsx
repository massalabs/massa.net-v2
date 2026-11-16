import { useRef, useState, type CSSProperties, type KeyboardEvent, type TouchEvent } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'
import { MaskIcon } from './MaskIcon'

type ProductId = 'gossip' | 'deweb' | 'asc'

type Product = {
  id: ProductId
  to: string
  bg: string
  fg: string
  image?: string
  deco: string[]
}

const PRODUCTS: Product[] = [
  {
    id: 'gossip',
    to: '/gossip',
    bg: '#3AF3D1',
    fg: '#18181B',
    image: '/images/gossip%20preview.png',
    deco: ['/images/Head1.svg', '/images/Head2.svg', '/images/Head3.svg', '/images/Head4.svg'],
  },
  {
    id: 'deweb',
    to: '/deweb',
    bg: '#0000A8',
    fg: '#F5F1E8',
    image: '/images/89b1956c9b306c972c5685d9f0e522df.png',
    deco: ['/images/deweb.svg', '/images/Ecosystem.svg', '/images/Docs.svg'],
  },
  {
    id: 'asc',
    to: '/asc',
    bg: '#FFFF00',
    fg: '#1E1D03',
    deco: ['/images/ASC.svg', '/images/Technology.svg', '/images/Bounties.svg', '/images/Blog.svg'],
  },
]

// Fixed, hand-placed decoration spots (percent of the stage). Static: no animation cost.
const DECO_SPOTS = [
  { x: 4, y: 10, s: 22, o: 0.35 },
  { x: 14, y: 84, s: 16, o: 0.25 },
  { x: 33, y: 6, s: 14, o: 0.22 },
  { x: 46, y: 92, s: 20, o: 0.3 },
  { x: 58, y: 8, s: 18, o: 0.28 },
  { x: 92, y: 14, s: 24, o: 0.35 },
  { x: 96, y: 52, s: 14, o: 0.22 },
  { x: 88, y: 88, s: 20, o: 0.3 },
  { x: 70, y: 94, s: 14, o: 0.2 },
  { x: 2, y: 48, s: 14, o: 0.2 },
]

const GOSSIP_ICON = (
  <svg viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2.5c5.8 0 10.5 4.4 10.5 9.8 0 2.9-1.4 5.5-3.7 7.3-.1.1-.2.3-.2.5v1.4c0 .3-.3.5-.6.4l-2.2-.6c-.2-.1-.3 0-.5.1-.9.2-1.8.3-2.8.3-5.8 0-10.5-4.4-10.5-9.8S6.2 2.5 12 2.5Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinejoin="round"
    />
    <circle cx="8.8" cy="12" r="1.4" fill="currentColor" />
    <circle cx="15.2" cy="12" r="1.4" fill="currentColor" />
  </svg>
)

const ArrowRight = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export function ProductShowcase() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const touchStart = useRef<{ x: number; y: number } | null>(null)
  const current = PRODUCTS[active]

  const go = (i: number, focus = false) => {
    const next = (i + PRODUCTS.length) % PRODUCTS.length
    setActive(next)
    if (focus) tabRefs.current[next]?.focus()
  }

  const onTabKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowRight') go(active + 1, true)
    else if (e.key === 'ArrowLeft') go(active - 1, true)
    else if (e.key === 'Home') go(0, true)
    else if (e.key === 'End') go(PRODUCTS.length - 1, true)
    else return
    e.preventDefault()
  }

  const onTouchStart = (e: TouchEvent) => {
    const p = e.touches[0]
    touchStart.current = { x: p.clientX, y: p.clientY }
  }
  const onTouchEnd = (e: TouchEvent) => {
    const start = touchStart.current
    touchStart.current = null
    if (!start) return
    const p = e.changedTouches[0]
    const dx = p.clientX - start.x
    const dy = p.clientY - start.y
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) go(active + (dx < 0 ? 1 : -1))
  }

  return (
    <section className="showcase" aria-labelledby="showcase-title">
      <div className="showcase-inner">
        <div className="showcase-head">
          <h2 id="showcase-title" className="showcase-title">
            {t('nav.products')}
          </h2>
          <div
            className="showcase-tabs"
            role="tablist"
            aria-label={t('nav.products')}
            style={{ '--active': active, '--ind-bg': current.bg, '--ind-fg': current.fg } as CSSProperties}
          >
            <span className="showcase-indicator" aria-hidden="true" />
            {PRODUCTS.map((p, i) => (
              <button
                key={p.id}
                ref={(el) => {
                  tabRefs.current[i] = el
                }}
                type="button"
                role="tab"
                id={`showcase-tab-${p.id}`}
                aria-selected={i === active}
                aria-controls={`showcase-panel-${p.id}`}
                tabIndex={i === active ? 0 : -1}
                className="showcase-tab"
                style={{ '--p-bg': p.bg, '--p-fg': p.fg } as CSSProperties}
                onClick={() => go(i)}
                onKeyDown={onTabKey}
              >
                <span className="showcase-tab-icon" aria-hidden="true">
                  {p.id === 'gossip' ? GOSSIP_ICON : <MaskIcon src={p.id === 'deweb' ? '/images/deweb.svg' : '/images/ASC.svg'} />}
                </span>
                <span className="showcase-tab-label">{p.id === 'asc' ? 'ASC' : t(`home.slider.${p.id}.title`)}</span>
              </button>
            ))}
          </div>
        </div>

        <div
          className="showcase-stage"
          style={{ '--p-bg': current.bg, '--p-fg': current.fg } as CSSProperties}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {PRODUCTS.map((p, i) => {
            const isActive = i === active
            return (
              <div
                key={p.id}
                role="tabpanel"
                id={`showcase-panel-${p.id}`}
                aria-labelledby={`showcase-tab-${p.id}`}
                aria-hidden={!isActive}
                inert={!isActive}
                className={`showcase-panel showcase-panel--${p.id}${isActive ? ' is-active' : ''}`}
              >
                <div className="showcase-deco" aria-hidden="true">
                  {DECO_SPOTS.map((d, k) => (
                    <span
                      key={k}
                      className="showcase-deco-item"
                      style={{ left: `${d.x}%`, top: `${d.y}%`, width: d.s, height: d.s, opacity: d.o }}
                    >
                      {p.id === 'gossip' ? (
                        <img src={p.deco[k % p.deco.length]} alt="" />
                      ) : (
                        <MaskIcon src={p.deco[k % p.deco.length]} />
                      )}
                    </span>
                  ))}
                </div>

                <div className="showcase-copy">
                  {p.id === 'deweb' ? (
                    <h3 className="showcase-name">
                      <MaskIcon src="/images/logo_1.svg" className="showcase-deweb-logo" />
                      <span className="mnav-sr-only">DeWeb</span>
                    </h3>
                  ) : (
                    <h3 className="showcase-name">{t(`home.slider.${p.id}.title`)}</h3>
                  )}
                  <p className="showcase-sub">{t(`home.slider.${p.id}.subtitle`)}</p>
                  <p className="showcase-desc">{t(`home.slider.${p.id}.description`)}</p>
                  <Link to={p.to} className="showcase-cta" tabIndex={isActive ? 0 : -1}>
                    {t(`home.slider.${p.id}.cta`)} <ArrowRight />
                  </Link>
                </div>

                <div className="showcase-visual">
                  {p.image ? (
                    <img src={p.image} alt={t(`home.slider.${p.id}.imageAlt`)} loading="lazy" decoding="async" />
                  ) : (
                    <div className="showcase-asc-art" aria-hidden="true">
                      <MaskIcon src="/images/ASC.svg" className="showcase-asc-mark" />
                      <span className="showcase-asc-ring showcase-asc-ring--1" />
                      <span className="showcase-asc-ring showcase-asc-ring--2" />
                    </div>
                  )}
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}

export default ProductShowcase
