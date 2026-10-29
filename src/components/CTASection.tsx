import type { ReactNode } from 'react'
import { images } from '../data/images'
import { Button } from './Button'
import { SmartImage } from './SmartImage'

interface Props {
  title?: ReactNode
  text?: ReactNode
  primary?: { label: string; to: string }
  secondary?: { label: string; to: string }
  withImage?: boolean
}

export function CTASection({
  title = 'Let’s Bring the Right Elements Together.',
  text = 'Whether you are planning building works, improving a property, arranging maintenance, or exploring property management, EQNS is ready to understand your requirements.',
  primary = { label: 'Discuss a Project', to: '/contact' },
  secondary = { label: 'Contact EQNS', to: '/contact' },
  withImage = true,
}: Props) {
  return (
    <section aria-labelledby="cta-heading" className="on-dark relative isolate overflow-hidden bg-charcoal">
      {withImage && (
        <>
          <SmartImage image={images.towers} fill sizes="100vw" imgClassName="opacity-30 grayscale" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 to-ink/50" aria-hidden="true" />
        </>
      )}
      <div className="container-eqns section relative">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Start a conversation</p>
          <h2 id="cta-heading" className="display-lg !text-white">{title}</h2>
          <p className="lead mt-6">{text}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button to={primary.to} variant="accent" arrow>{primary.label}</Button>
            <Button to={secondary.to} variant="outline-light">{secondary.label}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
