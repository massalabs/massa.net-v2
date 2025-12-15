import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type SanitizedContent = {
  html: string
  bodyClass?: string
}

const ROUTE_MAP: Record<string, string> = {
  'index.html': '/',
  'home-with-freedom.html': '/',
  'deweb.html': '/deweb',
  'asc.html': '/asc',
  'technology.html': '/technology',
  'ecosystem.html': '/ecosystem',
  'get-mas.html': '/get-mas',
  'grants-bounty.html': '/grants-bounty',
  'start.html': '/start',
  'team.html': '/team',
  'blog.html': '/blog',
  'privacy-policy.html': '/privacy-policy',
  'terms-of-service.html': '/terms-of-service',
}

const SELECTORS_TO_REMOVE = [
  '[class*="uui-navbar07_component"]',
  '[class*="uui-navbar07_component-copy"]',
  '.uui-footer05_component',
  '.uui-footer05_component-copy',
  '.w-nav-overlay',
  'script',
]

const sanitizedCache = new Map<string, SanitizedContent>()

function isAbsolutePath(value: string) {
  return /^(?:https?:|mailto:|tel:|data:|\/\/)/i.test(value)
}

function normalizeAssetPath(path?: string | null) {
  if (!path) return ''
  if (isAbsolutePath(path)) return path
  let clean = path.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\.{2}\//, '')
  if (clean.startsWith('images/')) {
    clean = clean.replace(/^images\//, '')
    return `/images/${clean}`
  }
  if (clean.startsWith('documents/')) {
    clean = clean.replace(/^documents\//, '')
    return `/documents/${clean}`
  }
  return clean.startsWith('/') ? clean : `/${clean}`
}

function normalizeHref(href?: string | null) {
  if (!href || href === '#') return href ?? '#'
  if (isAbsolutePath(href) || href.startsWith('#') || href === '/') return href
  let clean = href.replace(/\\/g, '/').replace(/^\.\//, '').replace(/^\.{2}\//, '')

  if (clean.startsWith('documents/')) {
    clean = clean.replace(/^documents\//, '')
    return `/documents/${clean}`
  }

  if (clean.startsWith('images/')) {
    clean = clean.replace(/^images\//, '')
    return `/images/${clean}`
  }

  if (clean.endsWith('.html')) {
    const mapped = ROUTE_MAP[clean] ?? `/${clean.replace(/\.html$/, '')}`
    return mapped
  }

  return clean.startsWith('/') ? clean : `/${clean}`
}

function sanitizeWebflowHtml(rawHtml: string): SanitizedContent {
  if (sanitizedCache.has(rawHtml)) {
    return sanitizedCache.get(rawHtml)!
  }

  if (typeof document === 'undefined') {
    return { html: rawHtml }
  }

  const template = document.createElement('template')
  template.innerHTML = rawHtml

  const htmlEl = template.content.querySelector('html')
  const bodyEl = htmlEl?.querySelector('body') ?? template.content.querySelector('body')
  const workingBody =
    bodyEl ??
    (() => {
      const wrapper = document.createElement('div')
      wrapper.appendChild(template.content.cloneNode(true))
      return wrapper
    })()
  const bodyClass = bodyEl instanceof HTMLElement ? bodyEl.className : undefined
  const scope: ParentNode = workingBody

  SELECTORS_TO_REMOVE.forEach((selector) => {
    scope.querySelectorAll(selector).forEach((node) => {
      node.remove()
    })
  })

  scope.querySelectorAll('.section-5').forEach((node) => {
    if (node instanceof HTMLElement && node.querySelector('.uui-footer05_top-wrapper')) {
      node.remove()
    }
  })

  scope.querySelectorAll('[data-w-id]').forEach((node) => {
    if (node instanceof HTMLElement) {
      node.removeAttribute('style')
    }
  })

  scope.querySelectorAll('[src]').forEach((node) => {
    const element = node as HTMLElement
    const attr = element.getAttribute('src')
    const normalized = normalizeAssetPath(attr)
    if (normalized) {
      element.setAttribute('src', normalized)
    }
  })

  scope.querySelectorAll('[data-src]').forEach((node) => {
    const element = node as HTMLElement
    const attr = element.getAttribute('data-src')
    const normalized = normalizeAssetPath(attr)
    if (normalized) {
      element.setAttribute('data-src', normalized)
    }
  })

  scope.querySelectorAll('[srcset]').forEach((node) => {
    const element = node as HTMLElement
    const attr = element.getAttribute('srcset')
    if (!attr) return
    const rebuilt = attr
      .split(',')
      .map((entry) => {
        const [path, size] = entry.trim().split(/\s+/)
        const normalized = normalizeAssetPath(path)
        return size ? `${normalized} ${size}` : normalized
      })
      .join(', ')
    element.setAttribute('srcset', rebuilt)
  })

  scope.querySelectorAll('a').forEach((node) => {
    const element = node as HTMLAnchorElement
    const normalized = normalizeHref(element.getAttribute('href'))
    if (normalized) {
      element.setAttribute('href', normalized)
    }
  })

  const sanitizedHtml = (workingBody as HTMLElement).innerHTML

  const result = { html: sanitizedHtml, bodyClass }
  sanitizedCache.set(rawHtml, result)
  return result
}

type WebflowPageProps = {
  html: string
  className?: string
}

export function WebflowPage({ html, className }: WebflowPageProps) {
  const [content, setContent] = useState<SanitizedContent>({ html: '' })
  const containerRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const sanitized = sanitizeWebflowHtml(html)
    setContent(sanitized)
  }, [html])

  useEffect(() => {
    if (!content.bodyClass) return
    const classes = content.bodyClass.split(/\s+/).filter(Boolean)
    classes.forEach((cls) => document.body.classList.add(cls))
    return () => {
      classes.forEach((cls) => document.body.classList.remove(cls))
    }
  }, [content.bodyClass])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      const anchor = target.closest('a')
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (
        !href ||
        anchor.target === '_blank' ||
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#')
      ) {
        return
      }
      if (href.endsWith('.pdf')) return
      event.preventDefault()
      navigate(href)
    }

    container.addEventListener('click', handleClick)
    return () => container.removeEventListener('click', handleClick)
  }, [navigate, content])

  if (!content.html) {
    return <div className="webflow-page webflow-page--loading">Chargement...</div>
  }

  const combinedClass = useMemo(() => {
    const classes = ['webflow-page']
    if (className) classes.push(className)
    if (content.bodyClass) classes.push(content.bodyClass)
    return classes.join(' ')
  }, [className, content.bodyClass])

  return (
    <div
      ref={containerRef}
      className={combinedClass}
      dangerouslySetInnerHTML={{ __html: content.html }}
    />
  )
}

export default WebflowPage

