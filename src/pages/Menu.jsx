import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import Img from '../components/Img.jsx'
import MenuList from '../components/MenuList.jsx'
import CTASection from '../components/CTASection.jsx'
import { images, menuCategories } from '../data/content.js'

// Cycle section tones for visual rhythm, like Home.
const tones = ['ink', 'navy', 'deep']

export default function Menu() {
  return (
    <>
      <PageHero
        eyebrow="Our Menu"
        title="An Asian menu for every occasion"
        intro="Wok-fired classics, roasts, seafood and noodles — every dish is cooked fresh the same day and fully customisable to your event. Prices are listed per portion, generous enough to share."
        image={images.banquet}
        crumb="Menu"
      />

      {/* ============== INTRO + STICKY CATEGORY PILL-NAV ============== */}
      <Section tone="ink">
        <div className="flex flex-col gap-10">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Browse the à la carte</span>
            <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-4xl">
              From chef’s signatures to comforting staples
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-sand/80">
              Mix and match across categories to build a spread that suits your guests. Every dish
              is prepared from fresh ingredients and styled beautifully for your buffet line.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-5 py-2.5 text-sm text-gold-light">
              <Icon name="tag" className="h-4 w-4 shrink-0" />
              <span>Prices are per portion (serves several) — confirm pax on enquiry.</span>
            </div>
          </Reveal>

          <Reveal
            delay={120}
            className="sticky top-20 z-20 -mx-5 rounded-2xl border border-white/10 bg-ink/85 px-5 py-4 backdrop-blur supports-[backdrop-filter]:bg-ink/70 sm:mx-0 sm:px-6"
          >
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="mr-1 hidden text-xs font-semibold uppercase tracking-widest text-muted sm:inline">
                Jump to
              </span>
              {menuCategories.map((cat) => (
                <a
                  key={cat.slug}
                  href={`#${cat.slug}`}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-sand transition-all duration-300 ease-out-expo hover:border-gold hover:bg-gold/10 hover:text-gold-light"
                >
                  {cat.name}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      {/* ============== CATEGORY SECTIONS ============== */}
      {menuCategories.map((cat, i) => {
        const imageFirst = i % 2 === 0
        return (
          <Section key={cat.slug} tone={tones[i % tones.length]} id={cat.slug} className="scroll-mt-28">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Image */}
              <Reveal
                className={`${imageFirst ? 'order-2 lg:order-1' : 'order-2'}`}
              >
                <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 shadow-lift">
                  <Img
                    src={cat.image}
                    alt={cat.name}
                    className="aspect-[4/5] w-full"
                    imgClassName="object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
                  <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-ink/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-light backdrop-blur">
                    <Icon name="utensils" className="h-3.5 w-3.5" />
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
              </Reveal>

              {/* Dish list */}
              <div className={`${imageFirst ? 'order-1 lg:order-2' : 'order-1'}`}>
                <Reveal>
                  <span className="eyebrow">{cat.tagline}</span>
                  <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl">
                    {cat.name}
                  </h2>
                </Reveal>
                <Reveal delay={100} className="mt-8">
                  <MenuList items={cat.items} />
                </Reveal>
              </div>
            </div>
          </Section>
        )
      })}

      {/* ============== CUSTOM-MENU CALLOUT ============== */}
      <Section tone="deep">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-gold/20 bg-navy/40 p-8 shadow-lift sm:p-12 lg:p-16">
          <div className="pointer-events-none absolute right-0 top-0 hidden lg:block">
            <Icon name="sparkle" className="h-40 w-40 text-gold/10" strokeWidth={1} />
          </div>
          <div className="relative grid items-center gap-10 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
                <Icon name="utensils" className="h-6 w-6" />
              </span>
              <span className="eyebrow mt-7">Beyond the à la carte</span>
              <h2 className="mt-5 font-serif text-3xl font-semibold leading-[1.1] tracking-tight text-cream sm:text-4xl lg:text-[2.75rem]">
                Customised menus available
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/80">
                Have a theme, dietary needs or a set budget in mind? Share the details and our chefs
                will curate a bespoke menu — vegetarian, no-pork, no-beef or allergy-aware — designed
                entirely around your occasion.
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:items-end">
              <ul className="flex w-full flex-col gap-3">
                {['Tailored to your theme & venue', 'Dietary needs handled with care', 'Transparent, budget-aware quotes'].map(
                  (point, idx) => (
                    <Reveal
                      key={point}
                      delay={idx * 80}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-ink/40 px-4 py-3"
                    >
                      <Icon name="check" className="h-4 w-4 shrink-0 text-gold" />
                      <span className="text-sm font-medium text-cream/85">{point}</span>
                    </Reveal>
                  ),
                )}
              </ul>
              <div className="mt-2 w-full lg:w-auto">
                <Button to="/contact" variant="primary" arrow className="w-full sm:w-auto">
                  Plan a Custom Menu
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
