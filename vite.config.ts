import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { writeFileSync, existsSync, mkdirSync } from 'fs'
import { resolve, join } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = resolve(__filename, '..')

// Plugin pour générer le sitemap et robots.txt automatiquement
function generateSEO() {
  return {
    name: 'generate-seo',
    buildStart() {
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

      // Détecter l'URL de base depuis les variables d'environnement
      // En production, définit VITE_SITE_URL dans ton CI/CD
      // En dev, utilise localhost, sinon la variable d'environnement ou une valeur par défaut
      const baseUrl = process.env.VITE_SITE_URL || 'https://massa.net'
      const lastmod = new Date().toISOString().split('T')[0]

      // Générer le sitemap
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

      // Générer robots.txt
      const robotsTxt = `User-agent: *
Allow: /

# Sitemap
Sitemap: ${baseUrl}/sitemap.xml

# Pages à ne pas indexer (si nécessaire)
# Disallow: /admin/
# Disallow: /private/
`

      const publicDir = resolve(__dirname, 'public')
      
      // Créer le dossier public s'il n'existe pas
      if (!existsSync(publicDir)) {
        mkdirSync(publicDir, { recursive: true })
      }

      writeFileSync(join(publicDir, 'sitemap.xml'), sitemap)
      writeFileSync(join(publicDir, 'robots.txt'), robotsTxt)

      console.log(`✅ SEO files generated with base URL: ${baseUrl}`)
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), generateSEO()],
})
