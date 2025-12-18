// Script pour générer le sitemap dynamiquement au build
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/deweb', priority: '0.8', changefreq: 'monthly' },
  { path: '/asc', priority: '0.8', changefreq: 'monthly' },
  { path: '/technology', priority: '0.8', changefreq: 'monthly' },
  { path: '/ecosystem', priority: '0.8', changefreq: 'weekly' },
  { path: '/get-mas', priority: '0.7', changefreq: 'monthly' },
  { path: '/grants-bounty', priority: '0.7', changefreq: 'monthly' },
  { path: '/start', priority: '0.7', changefreq: 'monthly' },
  { path: '/team', priority: '0.6', changefreq: 'monthly' },
  { path: '/blog', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy-policy', priority: '0.3', changefreq: 'yearly' },
  { path: '/terms-of-service', priority: '0.3', changefreq: 'yearly' },
]

// Récupérer l'URL de base depuis les variables d'environnement ou utiliser une valeur par défaut
const baseUrl = process.env.VITE_SITE_URL || process.env.SITE_URL || 'https://massa.net'
const lastmod = new Date().toISOString().split('T')[0]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('\n')}
</urlset>
`

const publicDir = path.join(__dirname, '..', 'public')
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap)

// Mettre à jour robots.txt avec la bonne URL
const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Pages à ne pas indexer (si nécessaire)
# Disallow: /admin/
# Disallow: /private/
`

fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt)

console.log(`✅ Sitemap généré avec l'URL de base: ${baseUrl}`)
console.log(`✅ robots.txt mis à jour`)

