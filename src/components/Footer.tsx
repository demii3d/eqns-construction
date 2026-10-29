import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { site } from '../data/site'
import { services, serviceHref } from '../data/services'
import { footerCompany, footerLegal } from '../data/navigation'
import { Wordmark } from './Wordmark'

const socials = [
  { key: 'linkedin', label: 'LinkedIn' },
  { key: 'instagram', label: 'Instagram' },
  { key: 'facebook', label: 'Facebook' },
  { key: 'x', label: 'X' },
] as const

const linkCls = 'text-[0.9375rem] text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline'

export function Footer() {
  const { email, phone, address, hours } = site.contact
  const socialLinks = socials.filter((s) => site.social[s.key])
  return (
    <footer className="on-dark bg-ink pt-16 text-white md:pt-24">
      <div className="container-eqns">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Wordmark />
            <p className="serif-accent mt-6 text-2xl text-champagne">{site.slogan}</p>
            <p className="mt-5 max-w-sm text-[0.9375rem] text-white/70">{site.description}</p>
            {socialLinks.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                {socialLinks.map(({ key, label }) => (
                  <li key={key}>
                    <a href={site.social[key]} target="_blank" rel="noopener noreferrer" aria-label={`EQNS on ${label} (opens in a new tab)`} className={linkCls}>{label}</a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Company" className="lg:col-span-2">
            <h2 className="eyebrow !text-champagne">Company</h2>
            <ul className="mt-5 space-y-3">
              {footerCompany.map((l) => (<li key={l.href}><Link to={l.href} className={linkCls}>{l.label}</Link></li>))}
            </ul>
          </nav>

          <nav aria-label="Services" className="lg:col-span-3">
            <h2 className="eyebrow !text-champagne">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (<li key={s.slug}><Link to={serviceHref(s.slug)} className={linkCls}>{s.shortTitle}</Link></li>))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow !text-champagne">Contact</h2>
            <ul className="mt-5 space-y-3 text-[0.9375rem] text-white/70">
              {email && <li className="flex gap-3"><Mail size={16} className="mt-1 shrink-0 text-champagne" aria-hidden="true" /><a href={`mailto:${email}`} className={linkCls}>{email}</a></li>}
              {phone && <li className="flex gap-3"><Phone size={16} className="mt-1 shrink-0 text-champagne" aria-hidden="true" /><a href={`tel:${phone.replace(/\s/g, '')}`} className={linkCls}>{phone}</a></li>}
              {address && <li className="flex gap-3"><MapPin size={16} className="mt-1 shrink-0 text-champagne" aria-hidden="true" /><span>{address}</span></li>}
              {hours && <li className="pl-7">{hours}</li>}
              <li className={email || phone || address ? 'pt-2' : ''}>
                <Link to="/contact" className="text-link">Send an enquiry</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 py-8 text-[0.8125rem] text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {site.legal.companyName || site.name}. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLegal.map((l) => (<li key={l.href}><Link to={l.href} className="underline-offset-4 hover:text-white hover:underline">{l.label}</Link></li>))}
          </ul>
        </div>
      </div>
    </footer>
  )
}
