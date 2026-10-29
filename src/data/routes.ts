import { services } from './services.ts'

/** Every indexable path. Used by the sitemap plugin. */
export const sitemapPaths: string[] = [
  '/',
  '/about',
  '/services',
  ...services.map((s) => `/services/${s.slug}`),
  '/our-approach',
  '/who-we-work-with',
  '/contact',
  '/privacy-policy',
  '/cookie-policy',
]
