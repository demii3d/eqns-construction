import type { ReactNode } from 'react'
import { cn } from '../lib/cn'

interface Props {
  eyebrow?: string
  title: ReactNode
  text?: ReactNode
  align?: 'left' | 'center'
  dark?: boolean
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export function SectionHeading({ eyebrow, title, text, align = 'left', dark = false, as: Tag = 'h2', className }: Props) {
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', dark && 'on-dark', 'max-w-3xl', className)}>
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <Tag className={cn('display-lg', dark && '!text-white')}>{title}</Tag>
      {text && <p className={cn('lead mt-6', align === 'center' && 'mx-auto')}>{text}</p>}
    </div>
  )
}
