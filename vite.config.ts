import { defineConfig, loadEnv, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { sitemapPaths } from './src/data/routes'

/** Emits sitemap.xml at build time. Set VITE_SITE_URL to the production origin. */
function sitemap(siteUrl: string): Plugin {
  return {
    name: 'eqns-sitemap',
    generateBundle() {
      const base = siteUrl.replace(/\/$/, '')
      const urls = sitemapPaths.map((p) => `  <url><loc>${base}${p}</loc></url>`).join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
    },
  }
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [react(), tailwindcss(), sitemap(env.VITE_SITE_URL || 'https://www.example.com')],
  }
})
