import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export interface Crumb { label: string; href?: string }

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.8125rem] text-white/70">
        {items.map((c, i) => {
          const last = i === items.length - 1
          return (
            <li key={c.label} className="flex items-center gap-2">
              {c.href && !last ? (
                <Link to={c.href} className="underline-offset-4 hover:text-white hover:underline">{c.label}</Link>
              ) : (
                <span aria-current={last ? 'page' : undefined} className={last ? 'text-white' : undefined}>{c.label}</span>
              )}
              {!last && <ChevronRight size={14} aria-hidden="true" className="text-champagne" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
