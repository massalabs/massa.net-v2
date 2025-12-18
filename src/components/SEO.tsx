import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type SEOProps = {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
}

export function SEO({ title, description, canonical, noindex = false }: SEOProps) {
  const location = useLocation()
  // Détecter automatiquement l'URL de base (fonctionne en dev, staging, production)
  const baseUrl = typeof window !== 'undefined' 
    ? `${window.location.protocol}//${window.location.host}`
    : ''
  const fullUrl = `${baseUrl}${location.pathname}`
  const canonicalUrl = canonical || fullUrl

  useEffect(() => {
    // Mettre à jour le titre
    if (title) {
      document.title = `${title} | Massa`
    }

    // Mettre à jour ou créer la balise meta description
    let metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', description || '')
    } else {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      metaDescription.setAttribute('content', description || '')
      document.head.appendChild(metaDescription)
    }

    // Mettre à jour ou créer la balise canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]')
    if (canonicalLink) {
      canonicalLink.setAttribute('href', canonicalUrl)
    } else {
      canonicalLink = document.createElement('link')
      canonicalLink.setAttribute('rel', 'canonical')
      canonicalLink.setAttribute('href', canonicalUrl)
      document.head.appendChild(canonicalLink)
    }

    // Gérer noindex
    let noindexMeta = document.querySelector('meta[name="robots"]')
    if (noindex) {
      if (noindexMeta) {
        noindexMeta.setAttribute('content', 'noindex, nofollow')
      } else {
        noindexMeta = document.createElement('meta')
        noindexMeta.setAttribute('name', 'robots')
        noindexMeta.setAttribute('content', 'noindex, nofollow')
        document.head.appendChild(noindexMeta)
      }
    } else {
      if (noindexMeta) {
        noindexMeta.setAttribute('content', 'index, follow')
      }
    }

    // Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]') || document.createElement('meta')
    ogTitle.setAttribute('property', 'og:title')
    ogTitle.setAttribute('content', title ? `${title} | Massa` : 'Massa - The Host of Freedom')
    if (!document.querySelector('meta[property="og:title"]')) {
      document.head.appendChild(ogTitle)
    }

    const ogUrl = document.querySelector('meta[property="og:url"]') || document.createElement('meta')
    ogUrl.setAttribute('property', 'og:url')
    ogUrl.setAttribute('content', fullUrl)
    if (!document.querySelector('meta[property="og:url"]')) {
      document.head.appendChild(ogUrl)
    }

    const ogDescription = document.querySelector('meta[property="og:description"]') || document.createElement('meta')
    ogDescription.setAttribute('property', 'og:description')
    ogDescription.setAttribute('content', description || '')
    if (!document.querySelector('meta[property="og:description"]')) {
      document.head.appendChild(ogDescription)
    }
  }, [title, description, canonicalUrl, fullUrl, noindex])

  return null
}

