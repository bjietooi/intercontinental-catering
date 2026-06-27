import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { nav, contact } from '../data/content.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out-expo ${
        scrolled
          ? 'border-b border-white/10 bg-ink/85 py-3 backdrop-blur-xl'
          : 'border-b border-transparent bg-gradient-to-b from-ink/70 via-ink/25 to-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between gap-4">
        <Logo />

        <nav className="hidden items-center gap-9 lg:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `link-underline text-sm font-medium tracking-wide transition-colors ${
                  isActive ? 'text-gold' : 'text-cream/75 hover:text-cream'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={contact.phoneHref} className="flex items-center gap-2 text-sm font-medium text-cream/80 transition-colors hover:text-cream">
            <Icon name="phone" className="h-4 w-4 text-gold" />
            {contact.phone}
          </a>
          <NavLink to="/contact" className="btn-primary px-6 py-3 text-[0.72rem]">
            Request a Quote
          </NavLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="grid h-11 w-11 place-items-center rounded-full border border-cream/25 text-cream transition-colors lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile panel */}
      <div
        className={`fixed inset-x-0 top-0 z-40 origin-top bg-navy-deep px-6 pb-10 pt-24 shadow-lift transition-all duration-500 ease-out-expo lg:hidden ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-4 opacity-0'
        }`}
      >
        <nav className="flex flex-col divide-y divide-white/10">
          {nav.map((item, i) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={{ transitionDelay: open ? `${i * 45 + 80}ms` : '0ms' }}
              className={({ isActive }) =>
                `flex items-center justify-between py-4 font-serif text-2xl transition-colors ${
                  isActive ? 'text-gold' : 'text-cream'
                }`
              }
            >
              {item.label}
              <Icon name="arrowUpRight" className="h-5 w-5 text-gold/60" />
            </NavLink>
          ))}
        </nav>
        <div className="mt-8 flex flex-col gap-3">
          <a href={contact.phoneHref} className="btn-outline w-full">
            <Icon name="phone" className="h-4 w-4" /> {contact.phone}
          </a>
          <NavLink to="/contact" className="btn-primary w-full">
            Request a Quote
          </NavLink>
        </div>
      </div>
    </header>
  )
}
