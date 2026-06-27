import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { Section, SectionHeading } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import ArticleCard from '../components/ArticleCard.jsx'
import CTASection from '../components/CTASection.jsx'
import { images, articles, articleCategories } from '../data/content.js'

export default function Articles() {
  // Featured article (fallback to the first one).
  const featured = useMemo(
    () => articles.find((a) => a.featured) || articles[0],
    [],
  )

  // Filtering — exclude the featured article from the grid.
  const rest = useMemo(
    () => articles.filter((a) => a.slug !== featured.slug),
    [featured],
  )
  const [selectedCategory, setSelectedCategory] = useState('All')
  const filtered = useMemo(
    () =>
      selectedCategory === 'All'
        ? rest
        : rest.filter((a) => a.category === selectedCategory),
    [rest, selectedCategory],
  )

  // Newsletter band.
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Stories from our kitchen"
        intro="Practical tips on menus, portions and dietary planning — the hard-won know-how we’ve gathered across thousands of events."
        image={images.chef}
        crumb="Articles"
      />

      {/* ============== FEATURED ============== */}
      <Section tone="ink">
        <div className="mb-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured read"
            title="The one to start with"
            intro="Our most-loved guide — everything that goes into building a menu your guests will remember."
          />
          <Reveal className="hidden shrink-0 items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold sm:flex">
            <Icon name="sparkle" className="h-4 w-4" />
            Editor’s pick
          </Reveal>
        </div>
        <Reveal>
          <ArticleCard article={featured} featured />
        </Reveal>
      </Section>

      {/* ============== FILTER + GRID ============== */}
      <Section tone="navy">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="All articles"
            title="Browse the journal"
            intro="Filter by topic to find advice on planning, corporate functions, food and weddings."
          />
          <Reveal className="flex flex-wrap gap-2.5">
            {articleCategories.map((cat) => {
              const active = selectedCategory === cat
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`rounded-full px-5 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.16em] transition-all duration-300 ease-out-expo ${
                    active
                      ? 'bg-gold text-ink shadow-gold'
                      : 'border border-white/15 text-cream hover:border-gold/50 hover:text-gold-light'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </Reveal>
        </div>

        {filtered.length > 0 ? (
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 90}>
                <ArticleCard article={a} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mt-14 flex flex-col items-center rounded-2xl border border-white/10 bg-ink/40 px-6 py-20 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
              <Icon name="sparkle" className="h-6 w-6" />
            </span>
            <h3 className="mt-6 font-serif text-2xl font-semibold text-cream">
              No articles here yet
            </h3>
            <p className="mt-2 max-w-md text-sand/75">
              We’re still writing for this topic. In the meantime, explore our other guides.
            </p>
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
            >
              View all articles
              <Icon name="arrowRight" className="h-4 w-4" />
            </button>
          </Reveal>
        )}
      </Section>

      {/* ============== NEWSLETTER ============== */}
      <Section tone="deep">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-gold/15 text-gold">
            <Icon name="mail" className="h-6 w-6" />
          </span>
          <span className="eyebrow eyebrow-center mt-7">Stay in the loop</span>
          <h2 className="mt-5 font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">
            Catering tips, straight to your inbox
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand/80">
            Occasional notes on menus, portions and planning — no spam, just the good stuff.
          </p>

          {subscribed ? (
            <div className="mt-9 inline-flex items-center gap-3 rounded-full border border-gold/30 bg-gold/10 px-6 py-3.5 text-cream">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-gold text-ink">
                <Icon name="check" className="h-4 w-4" strokeWidth={2.2} />
              </span>
              <span className="text-sm font-medium">
                Thank you — you’re on the list.
              </span>
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              className="mt-9 flex w-full max-w-md flex-col gap-3 sm:flex-row"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full flex-1 rounded-full border border-white/15 bg-ink/60 px-6 py-3.5 text-sm text-cream placeholder:text-muted/60 transition-colors focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20"
              />
              <Button variant="primary" arrow className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}
        </Reveal>
      </Section>

      <CTASection />
    </>
  )
}
