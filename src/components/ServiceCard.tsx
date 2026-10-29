import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../data/services'
import { serviceHref } from '../data/services'
import { SmartImage } from './SmartImage'
import { cn } from '../lib/cn'

interface Props {
  service: Service
  /** 'wide' = horizontal feature card spanning the full grid on large screens */
  variant?: 'image' | 'wide'
  className?: string
}

export function ServiceCard({ service, variant = 'image', className }: Props) {
  return (
    <article className={cn('group relative flex h-full flex-col border border-line bg-white transition-[border-color,box-shadow,transform] duration-[var(--duration-base)] hover:border-champagne hover:shadow-soft', variant === 'wide' && 'lg:flex-row', className)}>
      {(
        <div className={cn('overflow-hidden', variant === 'wide' && 'lg:w-1/2')}>
          <SmartImage
            image={service.image}
            ratio="16 / 10"
            className={variant === 'wide' ? 'lg:!aspect-auto lg:h-full' : undefined}
            sizes={variant === 'wide' ? '(min-width: 1024px) 50vw, 100vw' : '(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'}
            imgClassName="transition-transform duration-[900ms] ease-[var(--ease-out-quart)] group-hover:scale-[1.04]"
          />
        </div>
      )}
      <div className={cn('flex flex-1 flex-col p-6 md:p-8', variant === 'wide' && 'lg:justify-center lg:p-14')}>
        <div className="flex items-center justify-between gap-4">
          <span className="font-display text-sm font-semibold tracking-[0.18em] text-bronze-text">{service.number}</span>
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.16em] text-muted-text">{service.category}</span>
        </div>
        <h3 className="mt-5 text-[1.375rem] leading-tight">
          <Link to={serviceHref(service.slug)} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-[-3px]">
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-[0.9375rem] text-muted-text">{service.summary}</p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink">
          Explore Service
          <ArrowUpRight size={16} aria-hidden="true" className="text-bronze transition-transform duration-[var(--duration-base)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </div>
    </article>
  )
}
