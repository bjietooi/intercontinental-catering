import Img from './Img.jsx'
import Icon from './Icon.jsx'

export default function ServiceCard({ service }) {
  return (
    <article className="group relative block overflow-hidden rounded-2xl border border-white/10 shadow-soft">
      <Img
        src={service.image}
        alt={service.title}
        className="aspect-[4/5] w-full"
        imgClassName="transition-transform duration-[1.2s] ease-out-expo group-hover:scale-[1.07]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-6">
        <p className="text-[0.68rem] font-semibold uppercase tracking-widest text-gold">{service.short}</p>
        <h3 className="mt-2 font-serif text-2xl font-semibold text-cream">{service.title}</h3>
        <p className="mt-2 max-h-0 overflow-hidden text-sm leading-relaxed text-cream/0 transition-all duration-500 ease-out-expo group-hover:max-h-28 group-hover:text-cream/80">
          {service.text}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          Enquire <Icon name="arrowRight" className="h-4 w-4" />
        </span>
      </div>
    </article>
  )
}
