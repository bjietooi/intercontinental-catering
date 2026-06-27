import Reveal from './Reveal.jsx'
import Button from './Button.jsx'
import Icon from './Icon.jsx'
import Img from './Img.jsx'
import { contact, images } from '../data/content.js'

export default function CTASection({
  eyebrow = 'Let’s plan something memorable',
  title = 'Ready to delight your guests?',
  text = 'Tell us about your occasion and we’ll curate a menu — and a quote — made just for you.',
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep py-24 text-cream sm:py-28">
      <Img src={images.banquet} alt="" className="absolute inset-0 h-full w-full" imgClassName="opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-navy-deep/80" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gold-line" />

      <div className="container relative">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="eyebrow eyebrow-center">{eyebrow}</span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-sand/80">{text}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button to="/contact" variant="primary" arrow>Request a Quote</Button>
            <Button href={contact.phoneHref} variant="outline">
              <Icon name="phone" className="h-4 w-4" /> {contact.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
