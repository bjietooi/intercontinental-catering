import { Section, SectionHeading } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Img from '../components/Img.jsx'
import StatCounter from '../components/StatCounter.jsx'
import HeroSlideshow from '../components/HeroSlideshow.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import PackageList from '../components/PackageList.jsx'
import CTASection from '../components/CTASection.jsx'
import {
  company,
  images,
  heroSlides,
  stats,
  certifications,
  promises,
  services,
  menuCategories,
  process,
  testimonials,
  articles,
} from '../data/content.js'

export default function Home() {
  return (
    <>
      {/* ============== HERO ============== */}
      <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-ink text-cream">
        <HeroSlideshow images={heroSlides} />
        <div className="absolute inset-0 bg-hero-fade" />
        <div className="absolute inset-0 bg-grain opacity-[0.05] mix-blend-overlay" />

        <div className="container relative pb-16 pt-32 sm:pb-20">
          <div className="max-w-4xl">
            <span className="eyebrow animate-fade-in">{company.name} · Since {company.established}</span>
            <h1 className="mt-6 animate-fade-up font-serif text-6xl font-semibold leading-[0.98] tracking-tight text-shadow-soft sm:text-7xl lg:text-8xl xl:text-[6.6rem]">
              Memorable Catering,
              <span className="block italic text-gold">Crafted for You</span>
            </h1>
            <p className="mt-7 max-w-xl animate-fade-up text-lg leading-relaxed text-sand/85" style={{ animationDelay: '120ms' }}>
              Premium Asian event catering in Singapore — fresh ingredients, thoughtfully curated menus
              and seamless service for every occasion.
            </p>
            <div className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row" style={{ animationDelay: '220ms' }}>
              <Button to="/menu" variant="primary" arrow>Explore the Menu</Button>
              <Button to="/contact" variant="outline">Request a Quote</Button>
            </div>
          </div>

          <div className="mt-14 flex animate-fade-up flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-7" style={{ animationDelay: '320ms' }}>
            {certifications.slice(0, 3).map((c) => (
              <div key={c.name} className="flex items-center gap-2.5">
                <Icon name="check" className="h-4 w-4 text-gold" />
                <span className="text-sm font-medium text-cream/80">{c.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-7 right-6 hidden items-center gap-3 text-xs uppercase tracking-widest text-cream/55 lg:flex">
          <span className="origin-right rotate-90">Scroll</span>
          <span className="h-12 w-px animate-pulse bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* ============== INTRO ============== */}
      <Section tone="ink">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-lift">
              <Img src={images.heroReal} alt="An elegant Intercontinental Catering event spread" className="aspect-[4/5] w-full" imgClassName="object-cover" />
            </div>
            <div className="absolute -bottom-8 -right-4 w-60 rounded-2xl border border-gold/30 bg-navy p-6 text-cream shadow-lift sm:-right-8">
              <p className="font-serif text-5xl font-semibold text-gold"><StatCounter value={25} suffix="+" /></p>
              <p className="mt-1 text-sm text-sand/70">Years crafting memorable events across Singapore</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Welcome to Intercontinental Catering"
              title="A trusted name in Asian event catering"
              intro="For over two decades we’ve brought fresh, flavour-forward Asian cuisine to Singapore’s corporate functions, private celebrations and special occasions — beautifully presented and seamlessly served."
            />
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {promises.map((p, i) => (
                <Reveal key={p.title} delay={i * 80} className="flex gap-4 rounded-xl border border-white/10 bg-navy/40 p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon name={p.icon} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-serif text-lg font-semibold text-cream">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-sand/70">{p.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <div className="mt-8">
              <Button to="/about" variant="ghost" arrow>Our Story</Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ============== SERVICES ============== */}
      <Section tone="navy">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            eyebrow="What we cater"
            title="Occasions we love to serve"
            intro="Whatever you’re planning, we have a format and a menu to match — beautifully delivered and impeccably served."
          />
          <Reveal className="hidden sm:block">
            <Button to="/contact" variant="outline" arrow>Start planning</Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============== MENU PREVIEW ============== */}
      <Section tone="ink" id="menu">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 shadow-lift">
              <Img src={images.banquet} alt="Buffet spread" className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="From our kitchen"
              title="Menus for every occasion"
              intro="Complete packages priced per pax — from everyday buffets to premium feasts, all cooked fresh the same day. Here’s a look at our most-loved buffet tiers."
            />
            <Reveal className="mt-8">
              <PackageList packages={menuCategories[0].packages} />
            </Reveal>
            <Reveal className="mt-9">
              <Button to="/menu" variant="primary" arrow>View Full Menu</Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============== STATS ============== */}
      <section className="relative overflow-hidden bg-navy-deep py-20 text-cream sm:py-24">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-[0.05]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gold-line" />
        <div className="container relative">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 90} className="text-center sm:border-r sm:border-white/10 sm:last:border-r-0">
                <p className="font-serif text-6xl font-semibold text-gold lg:text-7xl">
                  <StatCounter value={s.value} suffix={s.suffix} compact={s.compact} />
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest text-sand/70">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============== PROCESS ============== */}
      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="How it works"
              title="From first call to last bite — handled"
              intro="We’ve refined our process over thousands of events so yours runs effortlessly."
            />
            <Reveal className="mt-8">
              <Button to="/contact" variant="primary" arrow>Start planning</Button>
            </Reveal>
          </div>
          <div className="flex flex-col">
            {process.map((step, i) => (
              <Reveal key={step.step} delay={i * 80} className="group flex gap-6 border-t border-white/10 py-7 first:border-t-0 first:pt-0">
                <span className="font-serif text-4xl font-semibold text-gold/40 transition-colors group-hover:text-gold">{step.step}</span>
                <div>
                  <h3 className="font-serif text-2xl font-semibold text-cream">{step.title}</h3>
                  <p className="mt-2 max-w-md text-sand/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ============== TESTIMONIALS ============== */}
      <Section tone="navy">
        <div className="pointer-events-none absolute right-8 top-12 hidden lg:block">
          <Icon name="quote" className="h-32 w-32 text-gold/15" strokeWidth={1} />
        </div>
        <SectionHeading eyebrow="Kind words" title="Loved by hosts across Singapore" intro="Eight thousand events and counting — here’s what a few of our clients had to say." />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100} className="flex flex-col rounded-2xl border border-white/10 bg-ink/40 p-8">
              <div className="flex gap-1 text-gold">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Icon key={s} name="star" className="h-4 w-4" strokeWidth={0} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 flex-1 font-serif text-xl italic leading-relaxed text-cream/90">“{t.quote}”</p>
              <div className="mt-6 border-t border-white/10 pt-4">
                <p className="font-semibold text-cream">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============== ARTICLES ============== */}
      <Section tone="ink">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading eyebrow="From the journal" title="Tips, stories & catering know-how" intro="Planning an event? Our team shares hard-won advice on menus, portions and dietary needs." />
          <Reveal className="hidden sm:block">
            <Button to="/articles" variant="outline" arrow>Read the journal</Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {articles.slice(0, 3).map((a, i) => (
            <Reveal key={a.slug} delay={i * 90}>
              <ArticleCard article={a} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
