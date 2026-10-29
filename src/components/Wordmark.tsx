import { Link } from 'react-router-dom'
import { cn } from '../lib/cn'

/** EQNS logo (white lettering, bronze Q). Designed for dark backgrounds. */
export function Wordmark({ className, linked = true }: { className?: string; linked?: boolean }) {
  const img = (
    <img
      src="/images/eqns-logo.png"
      alt={linked ? '' : 'EQNS'}
      width={640}
      height={151}
      className={cn('h-8 w-auto md:h-9', className)}
    />
  )
  if (!linked) return img
  return (
    <Link to="/" aria-label="EQNS home" className="inline-block rounded-sm">
      {img}
    </Link>
  )
}
