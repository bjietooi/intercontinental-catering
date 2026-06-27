import { Section, SectionHeading } from '../components/Section.jsx'
import PageHero from '../components/PageHero.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Img from '../components/Img.jsx'
import StatCounter from '../components/StatCounter.jsx'
import CTASection from '../components/CTASection.jsx'
import { company, images, stats, certifications } from '../data/content.js'

const pillars = [
  {
    icon: 'sparkle',
    title: 'Our Mission',
    text: company.mission,
  },
  {
    icon: 'utensils',
    title: 'Our Vision',
    text: 'To be Singapore’s most-trusted Asian catering name — the first call hosts make when an occasion truly matters, and the reason their guests remember the day.',
  },
  {
    icon: 'leaf',
    title: 'Our Values',
    text: 'Freshness without compromise, craft in every dish and warmth in every interaction — we treat your event as carefully as if it were our own.',
  },
]

const milestones = [
  {
    year: '2000',
    title: 'Where it began',
    text: 'Intercontinental Catering opens its doors in Singapore with a simple belief — that great Asian food, cooked fresh, brings people together.',
  },
  {
    year: '2008',
    title: 'Growing island-wide',
    text: 'Word of mouth carried us across the island, from corporate boardrooms to family celebrations, building a reputation for reliability and flavour.',
  },
  {
    year: '2015',
    title: 'Thousands of events',
    text: 'Having catered thousands of gatherings, we refined our process so every delivery, setup and buffet line runs effortlessly, time after time.',
  },
  {
    year: '2020',
    title: 'Five-star service',
    text: 'A consistent five-star rating from corporate and private clients alike cemented our place as a name hosts could trust without a second thought.',
  },
  {
    year: 'Today',
    title: '25+ years on',
    text: 'Over two and a half decades later, we still cook fresh the same day and curate every menu by hand — crafting memorable dining for every occasion.',
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="Memorable dining, crafted since 2000"
        intro="For more than 25 years we’ve brought premium Asian event catering to Singapore — fresh ingredients, thoughtfully curated menus and seamless service that hosts return to, occasion after occasion."
        image={images.chef}
        crumb="About"
      />

      {/* ============== STORY SPLIT ============== */}
      <Section tone="ink">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-lift">
              <Img
                src={images.heroReal}
                alt="An Intercontinental Catering event spread, freshly prepared and beautifully styled"
                className="aspect-[4/5] w-full"
                imgClassName="object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-60 rounded-2xl border border-gold/30 bg-navy p-6 text-cream shadow-lift sm:-right-8">
              <p className="font-serif text-5xl font-semibold text-gold">
                <StatCounter value={8000} suffix="+" compact />
              </p>
              <p className="mt-1 text-sm text-sand/70">Events catered across Singapore since 2000</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              eyebrow="Since 2000"
              title="A quarter-century of memorable dining"
              intro="Intercontinental Catering began with a love of Asian cooking and a conviction that the best food is made fresh — never frozen, never reheated."
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-sand/80">
              <Reveal as="p" delay={80}>
                Every dish leaves our kitchen cooked the same day, from wok-fired classics to chef’s
                signatures. We curate each menu thoughtfully — built around your taste, your theme and your
                budget — so the spread feels made for the moment, not pulled from a template.
              </Reveal>
              <Reveal as="p" delay={160}>
                Over the years we’ve become a trusted name for corporate functions, private celebrations and
                special occasions island-wide. From boardroom lunches to wedding banquets, hosts return to us
                because the food delights and the service simply works.
              </Reveal>
              <Reveal as="p" delay={240} className="border-l-2 border-gold/40 pl-5 font-serif text-lg italic text-cream/90">
                “{company.mission}”
              </Reveal>
            </div>
            <Reveal className="mt-9" delay={300}>
              <Button to="/menu" variant="ghost" arrow>Explore the Menu</Button>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============== MISSION / VISION / VALUES ============== */}
      <Section tone="navy">
        <SectionHeading
          align="center"
          eyebrow="What guides us"
          title="The promise behind every plate"
          intro="Three principles have shaped how we cook, curate and serve since the very beginning."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="card flex h-full flex-col p-8">
                <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-cream">{p.title}</h3>
                <p className="mt-3 leading-relaxed text-sand/75">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ============== TIMELINE / MILESTONES ============== */}
      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionHeading
              eyebrow="Our journey"
              title="Milestones along the way"
              intro="From a single kitchen to a name hosts across the island rely on — here’s how the story unfolded."
            />
            <Reveal className="mt-8">
              <Button to="/contact" variant="primary" arrow>Plan your event</Button>
            </Reveal>
          </div>

          <div className="relative">
            <span className="pointer-events-none absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/25 to-transparent" />
            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 80} className="relative pl-10">
                  <span className="absolute left-0 top-1.5 grid h-4 w-4 place-items-center rounded-full border border-gold/50 bg-ink">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                  <p className="font-serif text-sm font-semibold uppercase tracking-widest text-gold">{m.year}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-cream">{m.title}</h3>
                  <p className="mt-2 max-w-md leading-relaxed text-sand/70">{m.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ============== STATS BAND ============== */}
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

      {/* ============== WHY US STRIP ============== */}
      <Section tone="navy">
        <div className="flex flex-col items-end justify-between gap-6 sm:flex-row">
          <SectionHeading
            eyebrow="Why hosts choose us"
            title="Reasons to trust your event to us"
            intro="A quarter-century of doing the small things right — so the big day takes care of itself."
          />
          <Reveal className="hidden sm:block">
            <Button to="/contact" variant="outline" arrow>Request a Quote</Button>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {certifications.map((c, i) => (
            <Reveal key={c.name} delay={(i % 2) * 90} className="flex items-start gap-5 rounded-2xl border border-white/10 bg-ink/40 p-7">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Icon name={i % 2 === 0 ? 'shield' : 'check'} className="h-6 w-6" />
              </span>
              <div>
                <h3 className="font-serif text-xl font-semibold text-cream">{c.name}</h3>
                <p className="mt-1 leading-relaxed text-sand/70">{c.detail}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection />
    </>
  )
}
