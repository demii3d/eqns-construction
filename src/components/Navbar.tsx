import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ChevronDown, Menu } from 'lucide-react'
import { primaryNav, cta, type NavItem } from '../data/navigation'
import { useScrolled } from '../hooks/useScrolled'
import { Wordmark } from './Wordmark'
import { MobileNavigation } from './MobileNavigation'
import { cn } from '../lib/cn'

function ServicesMenu({ item }: { item: NavItem }) {
  const [hovered, setHovered] = useState(false)
  const [pinned, setPinned] = useState(false)
  const open = hovered || pinned
  const wrap = useRef<HTMLLIElement>(null)
  const toggle = useRef<HTMLButtonElement>(null)
  const timer = useRef<number>(undefined)
  const { pathname } = useLocation()
  const active = pathname.startsWith('/services')

  useEffect(() => { setHovered(false); setPinned(false) }, [pathname])

  const close = () => { setHovered(false); setPinned(false) }
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && open) {
      close()
      toggle.current?.focus()
    }
  }

  return (
    <li
      ref={wrap}
      className="relative"
      onMouseEnter={() => { window.clearTimeout(timer.current); setHovered(true) }}
      onMouseLeave={() => { timer.current = window.setTimeout(() => setHovered(false), 120) }}
      onKeyDown={onKeyDown}
      onBlur={(e) => { if (!wrap.current?.contains(e.relatedTarget as Node)) close() }}
    >
      <div className="flex items-center">
        <Link to={item.href} className={cn('nav-link pr-1', active && 'nav-link-active')}>{item.label}</Link>
        <button
          ref={toggle}
          type="button"
          aria-expanded={open}
          aria-controls="services-menu"
          aria-label="Services menu"
          onClick={() => setPinned((p) => !p)}
          className="nav-link nav-chevron"
        >
          <ChevronDown size={14} aria-hidden="true" className={cn('transition-transform duration-[var(--duration-base)]', open && 'rotate-180')} />
        </button>
      </div>
      <div
        id="services-menu"
        hidden={!open}
        className="absolute left-1/2 top-full z-50 w-[min(34rem,90vw)] -translate-x-1/2 pt-3"
      >
        <ul className="grid grid-cols-1 gap-px border border-line bg-line shadow-soft sm:grid-cols-2">
          {item.children?.map((c) => (
            <li key={c.href} className="bg-white sm:[&:last-child:nth-child(odd)]:col-span-2">
              <Link to={c.href} className="block h-full px-5 py-4 transition-colors hover:bg-stone focus-visible:bg-stone">
                <span className="block font-display text-[0.9375rem] font-semibold text-ink">{c.label}</span>
                <span className="mt-1 block text-[0.8125rem] leading-snug text-muted-text">{c.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Navbar() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  return (
    <>
      <header
        className={cn(
          'on-dark fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-[var(--duration-base)]',
          scrolled ? 'bg-ink/95 shadow-[0_1px_0_rgb(255_255_255/0.08)] backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <div className="container-eqns flex h-[var(--header-h)] items-center justify-between gap-6">
          <Wordmark />
          <nav aria-label="Primary" className="hidden lg:block">
            <ul className="flex items-center gap-1 xl:gap-3">
              {primaryNav.map((item) =>
                item.children ? (
                  <ServicesMenu key={item.href} item={item} />
                ) : (
                  <li key={item.href}>
                    <NavLink to={item.href} end className={({ isActive }) => cn('nav-link', isActive && 'nav-link-active')}>
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>
          <div className="flex items-center gap-3">
            <Link to={cta.href} className="btn btn-accent on-dark hidden !min-h-11 !px-5 lg:inline-flex">
              {cta.label}
            </Link>
            <button
              ref={menuButton}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center text-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMobileOpen(true)}
            >
              <Menu size={26} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
      <MobileNavigation open={mobileOpen} onClose={() => { setMobileOpen(false); menuButton.current?.focus() }} />
    </>
  )
}
