import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { site } from '../data/site'

interface Props {
  title: string
  description: string
  image?: string
  noindex?: boolean
}

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

/** Lightweight per-route metadata. Swap for a head manager if SSR is ever added. */
export function SEOHead({ title, description, image = '/og-image.png', noindex = false }: Props) {
  const { pathname } = useLocation()
  useEffect(() => {
    const origin = site.url.replace(/\/$/, '') || window.location.origin
    const url = origin + (pathname === '/' ? '/' : pathname.replace(/\/$/, ''))
    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', site.name)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:image', origin + image)
    setMeta('property', 'og:image:width', '1200')
    setMeta('property', 'og:image:height', '630')
    setMeta('property', 'og:image:alt', 'EQNS: Construction & Property Management. The Right Elements. The Right Results.')
    setMeta('name', 'twitter:card', 'summary_large_image')
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!link) {
      link = document.createElement('link')
      link.rel = 'canonical'
      document.head.appendChild(link)
    }
    link.href = url
  }, [title, description, image, noindex, pathname])
  return null
}
