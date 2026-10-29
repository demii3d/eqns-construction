import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/cn'

type Variant = 'primary' | 'accent' | 'outline' | 'outline-light'

const variantClass: Record<Variant, string> = {
  primary: 'btn-primary',
  accent: 'btn-accent',
  outline: 'btn-outline',
  'outline-light': 'btn-outline-light',
}

interface Common {
  variant?: Variant
  arrow?: boolean
  className?: string
  children: ReactNode
}

type LinkProps = Common & { to: string }
type NativeProps = Common & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children' | 'className'> & { to?: undefined }

export function Button(props: LinkProps | NativeProps) {
  const { variant = 'primary', arrow = false, className, children } = props
  const classes = cn('btn', variantClass[variant], variant === 'outline-light' || variant === 'accent' ? 'on-dark' : '', className)
  const content = (
    <>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </>
  )
  if ('to' in props && props.to !== undefined) {
    return <Link to={props.to} className={classes}>{content}</Link>
  }
  const { variant: _v, arrow: _a, className: _c, children: _ch, to: _t, ...rest } = props as NativeProps
  void _v; void _a; void _c; void _ch; void _t
  return <button className={classes} {...rest}>{content}</button>
}

export function TextLink({ to, children, className }: { to: string; children: ReactNode; className?: string }) {
  return (
    <Link to={to} className={cn('text-link', className)}>
      {children}
      <ArrowRight size={15} aria-hidden="true" />
    </Link>
  )
}
