import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import type { ImageAsset } from '../data/images'
import { SmartImage } from './SmartImage'
import { Breadcrumbs, type Crumb } from './Breadcrumbs'

interface Props {
  eyebrow?: string
  title: ReactNode
  intro?: ReactNode
  image: ImageAsset
  breadcrumbs?: Crumb[]
  actions?: ReactNode
  position?: string
}

/** Compact dark hero used by every interior page. The homepage has its own larger hero. */
export function PageHero({ eyebrow, title, intro, image, breadcrumbs, actions, position }: Props) {
  const reduce = useReducedMotion()
  return (
    <section className="on-dark relative isolate overflow-hidden bg-ink pt-[calc(var(--header-h)+4rem)] pb-16 md:pb-24 md:pt-[calc(var(--header-h)+6rem)]">
      <SmartImage image={image} fill eager sizes="100vw" position={position} imgClassName="opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/40" aria-hidden="true" />
      <div className="container-eqns relative">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="max-w-3xl"
        >
          {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
          <h1 className="display-lg !text-white">{title}</h1>
          {intro && <p className="lead mt-6">{intro}</p>}
          {actions && <div className="mt-9 flex flex-col gap-3 sm:flex-row">{actions}</div>}
        </motion.div>
      </div>
    </section>
  )
}
