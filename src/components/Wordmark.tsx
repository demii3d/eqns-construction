import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

export function Wordmark({ className, linked = true, tone = 'light' }: { className?: string; linked?: boolean; tone?: 'light' | 'dark' }) {
  const inner = (
    <span className={cn('inline-flex items-baseline gap-[0.12em] font-display font-bold tracking-[0.28em] leading-none text-[1.5rem]', tone === 'light' ? 'text-white' : 'text-ink', className)}>
      EQNS
      <span aria-hidden="true" className="inline-block h-[0.28em] w-[0.28em] bg-champagne" />
    </span>
  )
  if (!linked) return inner
  return (
    <Link to="/" aria-label="EQNS home" className="inline-block rounded-sm">
      {inner}
    </Link>
  )
}
