import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import type { ClientCategory } from '../data/content'
import { getService, serviceHref } from '../data/services'
import { SmartImage } from './SmartImage'
import { cn } from '../lib/cn'

/** Detailed editorial layout, alternating image side on desktop. */
export function ClientCategoryDetail({ category, index }: { category: ClientCategory; index: number }) {
  const flip = index % 2 === 1
  return (
    <div id={category.id} className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
      <div className={cn('lg:col-span-6', flip && 'lg:order-2')}>
        <SmartImage image={category.image} ratio="4 / 3" sizes="(min-width: 1024px) 50vw, 100vw" />
      </div>
      <div className={cn('lg:col-span-6', flip && 'lg:order-1')}>
        <p className="eyebrow">{String(index + 1).padStart(2, '0')}</p>
        <h2 className="display-md mt-4">{category.title}</h2>
        <p className="mt-5 text-muted-text">{category.detail}</p>
        <h3 className="mt-8 text-sm font-semibold uppercase tracking-[0.14em]">May support</h3>
        <ul className="mt-4 space-y-2.5">
          {category.needs.map((n) => (
            <li key={n} className="flex gap-3 text-[0.9375rem]"><Check size={18} className="mt-0.5 shrink-0 text-bronze" aria-hidden="true" />{n}</li>
          ))}
        </ul>
        <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {category.services.map((slug) => {
            const s = getService(slug)
            return s ? <li key={slug}><Link to={serviceHref(slug)} className="text-link">{s.shortTitle}</Link></li> : null
          })}
        </ul>
      </div>
    </div>
  )
}

/** Compact card for the homepage grid. */
export function ClientCategoryCard({ category, index }: { category: ClientCategory; index: number }) {
  return (
    <Link to={`/who-we-work-with#${category.id}`} className="group block h-full border-t border-ink pt-6 transition-colors hover:border-bronze">
      <span className="font-display text-sm font-semibold tracking-[0.18em] text-bronze-text">{String(index + 1).padStart(2, '0')}</span>
      <h3 className="mt-4 text-xl">{category.title}</h3>
      <p className="mt-3 text-[0.9375rem] text-muted-text">{category.summary}</p>
      <span className="mt-5 inline-block text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink underline decoration-champagne decoration-1 underline-offset-[6px] group-hover:text-bronze-text">Learn more</span>
    </Link>
  )
}
