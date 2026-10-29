import { cn } from '../lib/cn'

export function PrincipleCard({ number, title, text, dark = false }: { number: string; title: string; text: string; dark?: boolean }) {
  return (
    <div className={cn('h-full border-t pt-6', dark ? 'border-white/20' : 'border-ink')}>
      <span className={cn('font-display text-sm font-semibold tracking-[0.18em]', dark ? 'text-champagne' : 'text-bronze-text')}>{number}</span>
      <h3 className={cn('mt-4 text-xl', dark && '!text-white')}>{title}</h3>
      <p className={cn('mt-3 text-[0.9375rem]', dark ? 'text-white/70' : 'text-muted-text')}>{text}</p>
    </div>
  )
}
