import { Section, SectionHeading } from '../components/Section.jsx'
import PageHero from '../components/PageHero.jsx'
import Accordion from '../components/Accordion.jsx'
import CTASection from '../components/CTASection.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import { contact, faqs, promises, images } from '../data/content.js'

export default function Faqs() {
  return (
    <>
      <PageHero
        eyebrow="Help & FAQs"
        title="Questions, answered"
        intro="Quick answers on our Asian cuisine, ordering timelines, island-wide delivery and dietary needs — and a real person to call when you'd rather just ask."
        image={images.table}
        crumb="FAQs"
      />

      {/* ============== FAQ LIST ============== */}
      <Section tone="ink">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* LEFT — sticky intro + contact card */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Good to know"
              title="Everything you need to plan with confidence"
              intro="The questions our clients ask most — from menu curation to setup on the day. Can't find what you're after? We're a call or email away."
            />

            <Reveal className="mt-9">
              <div className="card p-8">
                <h3 className="font-serif text-2xl font-semibold text-cream">Still have questions?</h3>
                <p className="mt-2 text-sm leading-relaxed text-sand/70">
                  Speak with our team directly — we'll talk through your occasion and point you the right way.
                </p>

                <div className="mt-7 flex flex-col gap-4">
                  <a
                    href={contact.phoneHref}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink/40 p-4 transition-colors hover:border-gold/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon name="phone" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted">Call us</span>
                      <span className="block font-serif text-lg text-cream transition-colors group-hover:text-gold-light">
                        {contact.phone}
                      </span>
                    </span>
                  </a>

                  <a
                    href={contact.emailHref}
                    className="group flex items-center gap-4 rounded-xl border border-white/10 bg-ink/40 p-4 transition-colors hover:border-gold/40"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon name="mail" className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-xs uppercase tracking-widest text-muted">Email us</span>
                      <span className="block truncate font-serif text-lg text-cream transition-colors group-hover:text-gold-light">
                        {contact.email}
                      </span>
                    </span>
                  </a>
                </div>

                <div className="mt-7">
                  <Button to="/contact" variant="primary" arrow className="w-full sm:w-auto">
                    Request a Quote
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT — accordion */}
          <Reveal>
            <Accordion items={faqs} defaultOpen={0} />
          </Reveal>
        </div>
      </Section>

      {/* ============== REASSURANCE BAND ============== */}
      <Section tone="navy">
        <div className="pointer-events-none absolute right-8 top-12 hidden lg:block">
          <Icon name="sparkle" className="h-28 w-28 text-gold/10" strokeWidth={1} />
        </div>
        <SectionHeading
          eyebrow="Why hosts choose us"
          title="The reassurance behind every event"
          intro="Whatever the format or headcount, these are the standards you can count on — every single time."
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <Reveal
              key={p.title}
              delay={(i % 4) * 90}
              className="flex flex-col rounded-2xl border border-white/10 bg-ink/40 p-7 transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:border-gold/30"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                <Icon name={p.icon} className="h-6 w-6" />
              </span>
              <h3 className="mt-6 font-serif text-xl font-semibold text-cream">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-sand/70">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <CTASection
        eyebrow="Still curious?"
        title="Didn't find your answer?"
        text="Tell us about your occasion and we'll answer every question — then curate a menu and a quote made just for you."
      />
    </>
  )
}
