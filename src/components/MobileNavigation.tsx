import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ChevronDown, X } from 'lucide-react'
import { primaryNav, cta } from '../data/navigation'
import { Wordmark } from './Wordmark'
import { cn } from '../lib/cn'

export function MobileNavigation({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useReducedMotion()
  const panel = useRef<HTMLDivElement>(null)
  const closeBtn = useRef<HTMLButtonElement>(null)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()
  const prevPath = useRef(pathname)

  // Close after navigating
  useEffect(() => {
    if (prevPath.current !== pathname && open) onClose()
    prevPath.current = pathname
  }, [pathname, open, onClose])

  // Scroll lock, Escape, focus trap
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeBtn.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab' || !panel.current) return
      const f = panel.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
      if (!f.length) return
      const first = f[0], last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', onKey)
    return () => { document.body.style.overflow = prev; document.removeEventListener('keydown', onKey) }
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 lg:hidden"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-ink/60" onClick={onClose} aria-hidden="true" />
          <motion.div
            ref={panel}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="on-dark absolute right-0 top-0 flex h-full w-[min(24rem,100%)] flex-col overflow-y-auto bg-ink px-6 pb-8"
            initial={reduce ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduce ? undefined : { x: '100%' }}
            transition={{ duration: 0.32, ease: [0.25, 1, 0.5, 1] }}
          >
            <div className="flex h-[var(--header-h)] shrink-0 items-center justify-between">
              <Wordmark />
              <button ref={closeBtn} type="button" onClick={onClose} aria-label="Close menu" className="inline-flex h-11 w-11 items-center justify-center text-white">
                <X size={26} aria-hidden="true" />
              </button>
            </div>
            <nav aria-label="Mobile" className="mt-6 flex-1">
              <ul className="border-t border-white/10">
                {primaryNav.map((item) => (
                  <li key={item.href} className="border-b border-white/10">
                    {item.children ? (
                      <>
                        <div className="flex items-center justify-between">
                          <NavLink to={item.href} className={({ isActive }) => cn('mobile-link flex-1', isActive && 'text-champagne')}>{item.label}</NavLink>
                          <button
                            type="button"
                            aria-expanded={servicesOpen}
                            aria-controls="mobile-services"
                            aria-label="Toggle services list"
                            onClick={() => setServicesOpen((s) => !s)}
                            className="inline-flex h-12 w-12 items-center justify-center text-white"
                          >
                            <ChevronDown size={20} aria-hidden="true" className={cn('transition-transform', servicesOpen && 'rotate-180')} />
                          </button>
                        </div>
                        <ul id="mobile-services" hidden={!servicesOpen} className="mb-3 ml-1 border-l border-champagne/40 pl-4">
                          {item.children.map((c) => (
                            <li key={c.href}>
                              <Link to={c.href} className="block py-2.5 text-[0.9375rem] text-white/75 hover:text-white">{c.label}</Link>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <NavLink to={item.href} end className={({ isActive }) => cn('mobile-link', isActive && 'text-champagne')}>{item.label}</NavLink>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <Link to={cta.href} className="btn btn-accent on-dark mt-8 w-full">{cta.label}</Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
