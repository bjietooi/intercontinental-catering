import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import Icon from './Icon.jsx'

// Consistent dark banner hero for inner pages.
export default function PageHero({ eyebrow, title, intro, image, crumb }) {
  return (
    <section className="relative isolate overflow-hidden bg-ink pt-32 text-cream">
      <Img src={image} alt="" className="absolute inset-0 h-full w-full" imgClassName="opacity-35 animate-scale-in" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/55" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gold-line" />

      <div className="container relative pb-20 pt-12 sm:pb-24">
        <nav className="flex items-center gap-2 text-xs font-medium text-cream/55">
          <Link to="/" className="transition-colors hover:text-cream">Home</Link>
          <Icon name="arrowRight" className="h-3.5 w-3.5" />
          <span className="text-gold">{crumb || title}</span>
        </nav>
        <div className="mt-8 max-w-3xl animate-fade-up">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1 className="mt-5 font-serif text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          {intro && <p className="mt-6 max-w-2xl text-lg leading-relaxed text-sand/80">{intro}</p>}
        </div>
      </div>
    </section>
  )
}
