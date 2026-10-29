import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

/** Gentle fade-and-rise on first view. Renders plainly when reduced motion is preferred. */
export function Reveal({ children, delay = 0, className, as = 'div' }: { children: ReactNode; delay?: number; className?: string; as?: 'div' | 'li' }) {
  const reduce = useReducedMotion()
  const Tag = as === 'li' ? motion.li : motion.div
  if (reduce) {
    const Plain = as
    return <Plain className={className}>{children}</Plain>
  }
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </Tag>
  )
}
