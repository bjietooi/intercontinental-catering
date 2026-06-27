import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import Icon from './Icon.jsx'
import { company, contact, nav, social, certifications } from '../data/content.js'

export default function Footer() {
  const year = 2026
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-navy-deep text-cream">
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
      <div className="container relative">
        <div className="grid gap-12 border-b border-white/10 py-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-sand/70">{company.mission}</p>
            <div className="mt-6 flex gap-3">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-cream/80 transition-all duration-300 hover:border-gold hover:bg-gold hover:text-ink"
                >
                  <Icon name={s.icon} className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Explore</h4>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="link-underline text-sm text-cream/70 transition-colors hover:text-cream">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Why us</h4>
            <ul className="mt-5 space-y-3">
              {certifications.map((c) => (
                <li key={c.name} className="flex items-start gap-2 text-sm text-cream/70">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {c.name}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-gold">Get in touch</h4>
            <ul className="mt-5 space-y-4 text-sm text-cream/70">
              <li className="flex items-start gap-3">
                <Icon name="mapPin" className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {contact.addressShort}
                  <br />
                  {contact.postal}
                </span>
              </li>
              <li>
                <a href={contact.phoneHref} className="flex items-center gap-3 hover:text-cream">
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-gold" />
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="flex items-center gap-3 hover:text-cream">
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-gold" />
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 py-7 text-xs text-cream/45 sm:flex-row">
          <p>© {year} {company.legalName}. All rights reserved.</p>
          <p className="font-serif text-base italic text-gold-light">{company.tagline}</p>
          <div className="flex gap-5">
            <Link to="/contact" className="transition-colors hover:text-cream/80">Privacy Policy</Link>
            <Link to="/contact" className="transition-colors hover:text-cream/80">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
