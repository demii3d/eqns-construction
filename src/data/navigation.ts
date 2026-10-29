import { services, serviceHref } from './services'

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  {
    label: 'Services',
    href: '/services',
    children: services.map((s) => ({ label: s.shortTitle, href: serviceHref(s.slug), description: s.distinction })),
  },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Who We Work With', href: '/who-we-work-with' },
  { label: 'Contact', href: '/contact' },
]

export const cta = { label: 'Discuss a Project', href: '/contact' }

export const footerCompany = [
  { label: 'About EQNS', href: '/about' },
  { label: 'Our Approach', href: '/our-approach' },
  { label: 'Who We Work With', href: '/who-we-work-with' },
  { label: 'Contact', href: '/contact' },
]

export const footerLegal = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
]
