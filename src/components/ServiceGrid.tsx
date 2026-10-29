import type { Service } from '../data/services'
import { ServiceCard } from './ServiceCard'
import { Reveal } from './Reveal'

/** Responsive service grid. A final card that would be orphaned becomes a full-width feature. */
export function ServiceGrid({ items }: { items: Service[] }) {
  const featureLast = items.length % 3 === 1
  return (
    <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {items.map((s, i) => (
        <Reveal as="li" key={s.slug} delay={(i % 3) * 0.06} className={featureLast && i === items.length - 1 ? 'sm:col-span-2 lg:col-span-3' : undefined}>
          <ServiceCard service={s} variant={featureLast && i === items.length - 1 ? 'wide' : 'image'} />
        </Reveal>
      ))}
    </ul>
  )
}
