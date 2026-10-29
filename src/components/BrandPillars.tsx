import { brandElements } from '../data/content'
import { cn } from '../lib/cn'

/** The four EQNS principles, set as a restrained architectural grid. */
export function BrandPillars({ detailed = false, className }: { detailed?: boolean; className?: string }) {
  return (
    <dl className={cn('grid grid-cols-2 gap-x-6 gap-y-8 border-t border-line pt-8 sm:grid-cols-4', detailed && 'lg:gap-x-8', className)}>
      {brandElements.map((b) => (
        <div key={b.name} className="border-l border-champagne pl-4">
          <dt className="flex items-baseline gap-2">
            <span aria-hidden="true" className="serif-accent text-3xl text-bronze">{b.letter}</span>
            <span className="font-display text-[0.9375rem] font-semibold text-ink">{b.name}</span>
          </dt>
          <dd className="mt-2 text-[0.8125rem] leading-snug text-muted-text">{b.text}</dd>
        </div>
      ))}
    </dl>
  )
}
