import { useEffect, useRef } from 'react'

/**
 * Pixel "network" behind the home hero.
 * - Nodes light up and send out pixel ripples in the four product colours.
 * - The pointer leaves a short pixel trail.
 * - One <canvas>, only lit cells are drawn, capped at ~30fps, paused off-screen
 *   or in background tabs, and a static frame for reduced-motion users.
 */
const COLORS = ['#3AF3D1', '#2F6BFF', '#FFFF00', '#FF7300', '#FFFFFF']

type Lit = { c: string; v: number }
type Pulse = { cx: number; cy: number; r: number; max: number; c: string; speed: number }

export function HeroNetwork() {
  const ref = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let cell = 16
    let cols = 0
    let rows = 0
    let dpr = 1
    const lit = new Map<number, Lit>()
    let pulses: Pulse[] = []
    let nodes: Array<{ x: number; y: number; c: string }> = []
    let raf = 0
    let last = 0
    let spawnClock = 0
    let visible = true

    const key = (x: number, y: number) => y * cols + x
    const light = (x: number, y: number, c: string, v = 1) => {
      if (x < 0 || y < 0 || x >= cols || y >= rows) return
      const k = key(x, y)
      const cur = lit.get(k)
      if (!cur || cur.v < v) lit.set(k, { c, v })
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      cell = rect.width < 700 ? 13 : 16
      canvas.width = Math.round(rect.width * dpr)
      canvas.height = Math.round(rect.height * dpr)
      cols = Math.ceil(rect.width / cell)
      rows = Math.ceil(rect.height / cell)
      lit.clear()
      pulses = []
      const count = Math.round((cols * rows) / 140)
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.floor(Math.random() * cols),
        y: Math.floor(Math.random() * rows),
        c: COLORS[i % COLORS.length],
      }))
    }

    const spawn = () => {
      const n = nodes[Math.floor(Math.random() * nodes.length)]
      if (!n) return
      pulses.push({ cx: n.x, cy: n.y, r: 0, max: 4 + Math.random() * 7, c: n.c, speed: 9 + Math.random() * 6 })
    }

    const draw = () => {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, cols * cell, rows * cell)
      const size = cell - 4
      // resting nodes
      for (const n of nodes) {
        ctx.globalAlpha = 0.5
        ctx.fillStyle = n.c
        ctx.fillRect(n.x * cell + 2, n.y * cell + 2, size, size)
      }
      // lit cells
      for (const [k, l] of lit) {
        const x = k % cols
        const y = (k - x) / cols
        ctx.globalAlpha = l.v * 0.9
        ctx.fillStyle = l.c
        ctx.fillRect(x * cell + 2, y * cell + 2, size, size)
      }
      ctx.globalAlpha = 1
    }

    const step = (dt: number) => {
      spawnClock += dt
      const interval = cols > 60 ? 0.17 : 0.3
      while (spawnClock > interval) {
        spawnClock -= interval
        spawn()
      }
      // advance ripples: light the ring (square/Chebyshev ring = pixel look)
      pulses = pulses.filter((p) => {
        const prev = Math.floor(p.r)
        p.r += p.speed * dt
        const r = Math.floor(p.r)
        if (r !== prev && r > 0) {
          const fade = 1 - r / p.max
          for (let i = -r; i <= r; i++) {
            if (Math.random() < 0.55) light(p.cx + i, p.cy - r, p.c, fade)
            if (Math.random() < 0.55) light(p.cx + i, p.cy + r, p.c, fade)
            if (Math.random() < 0.55) light(p.cx - r, p.cy + i, p.c, fade)
            if (Math.random() < 0.55) light(p.cx + r, p.cy + i, p.c, fade)
          }
        }
        return p.r < p.max
      })
      // decay
      const decay = dt * 1.6
      for (const [k, l] of lit) {
        l.v -= decay
        if (l.v <= 0.02) lit.delete(k)
      }
    }

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame)
      if (!last) last = t
      const dt = (t - last) / 1000
      if (dt < 1 / 30) return
      last = t
      step(Math.min(dt, 0.1))
      draw()
    }

    const start = () => {
      if (raf || reduced || !visible || document.hidden) return
      last = 0
      raf = requestAnimationFrame(frame)
    }
    const stop = () => {
      cancelAnimationFrame(raf)
      raf = 0
    }

    const onPointer = (e: PointerEvent) => {
      if (reduced) return
      const rect = canvas.getBoundingClientRect()
      const x = Math.floor((e.clientX - rect.left) / cell)
      const y = Math.floor((e.clientY - rect.top) / cell)
      const c = COLORS[(x + y) % COLORS.length]
      light(x, y, c, 1)
      if (Math.random() < 0.5) light(x + (Math.random() < 0.5 ? 1 : -1), y, c, 0.7)
      if (Math.random() < 0.5) light(x, y + (Math.random() < 0.5 ? 1 : -1), c, 0.7)
    }

    resize()
    if (reduced) {
      for (let i = 0; i < 18; i++) {
        spawn()
        step(0.12)
      }
      draw()
    } else {
      start()
    }

    const ro = new ResizeObserver(() => {
      resize()
      if (reduced) draw()
    })
    ro.observe(canvas)
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting
      if (visible) start()
      else stop()
    })
    io.observe(canvas)
    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)
    const host = canvas.parentElement
    host?.addEventListener('pointermove', onPointer, { passive: true })

    return () => {
      stop()
      ro.disconnect()
      io.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      host?.removeEventListener('pointermove', onPointer)
    }
  }, [])

  return <canvas ref={ref} className="hero2-canvas" aria-hidden="true" />
}

export default HeroNetwork
