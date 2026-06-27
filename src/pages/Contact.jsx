import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import { Section } from '../components/Section.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import Icon from '../components/Icon.jsx'
import { company, contact, social, services, images } from '../data/content.js'

const initialForm = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  eventDate: '',
  guests: '',
  message: '',
}

const inputClass =
  'w-full rounded-lg border border-white/15 bg-ink/60 px-4 py-3 text-cream outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/20 placeholder:text-muted/60'
const labelClass = 'mb-2 block text-xs font-medium uppercase tracking-wider text-muted'

export default function Contact() {
  const [formState, setFormState] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormState(initialForm)
    setSubmitted(false)
  }

  const details = [
    {
      icon: 'mapPin',
      label: 'Visit Us',
      value: contact.address,
      href: contact.mapsHref,
      external: true,
    },
    {
      icon: 'phone',
      label: 'Call Us',
      value: contact.phone,
      href: contact.phoneHref,
    },
    {
      icon: 'phone',
      label: 'WhatsApp',
      value: contact.whatsapp,
      href: contact.whatsappHref,
      external: true,
    },
    {
      icon: 'mail',
      label: 'Email Us',
      value: contact.email,
      href: contact.emailHref,
    },
    {
      icon: 'phone',
      label: 'Fax',
      value: contact.fax,
    },
  ]

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's plan your event"
        intro="Tell us about your occasion and we'll craft a tailored proposal — menu, styling and a transparent quote. Have a question? We're always happy to help."
        image={images.table}
        crumb="Contact"
      />

      {/* ============== ENQUIRY + DETAILS ============== */}
      <Section tone="ink">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          {/* ---- LEFT: Enquiry form ---- */}
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-navy/50 p-8 shadow-soft sm:p-10">
              {submitted ? (
                <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon name="check" className="h-8 w-8" strokeWidth={2} />
                  </span>
                  <h3 className="mt-6 font-serif text-3xl font-semibold text-cream">
                    Thank you, {formState.name ? formState.name.split(' ')[0] : 'friend'}
                  </h3>
                  <p className="mt-3 max-w-sm text-sand/80">
                    We've received your enquiry and we'll be in touch within one business day to plan
                    the details of your event.
                  </p>
                  <div className="mt-8">
                    <Button onClick={handleReset} variant="outline">
                      Send another enquiry
                    </Button>
                  </div>
                </div>
              ) : (
                <>
                  <span className="eyebrow">Request a quote</span>
                  <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl">
                    Send us an enquiry
                  </h2>
                  <p className="mt-3 text-sand/80">
                    Share a few details and our team will get back to you with a curated proposal.
                  </p>

                  <form onSubmit={handleSubmit} className="mt-8 grid gap-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="you@email.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="e.g. 9123 4567"
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="eventType" className={labelClass}>
                          Event Type
                        </label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formState.eventType}
                          onChange={handleChange}
                          className={`${inputClass} appearance-none`}
                        >
                          <option value="">Select an occasion</option>
                          {services.map((s) => (
                            <option key={s.slug} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label htmlFor="eventDate" className={labelClass}>
                          Event Date
                        </label>
                        <input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formState.eventDate}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div>
                        <label htmlFor="guests" className={labelClass}>
                          Guests / Pax
                        </label>
                        <input
                          id="guests"
                          name="guests"
                          type="number"
                          min="1"
                          value={formState.guests}
                          onChange={handleChange}
                          placeholder="e.g. 50"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className={labelClass}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Tell us about your venue, theme, dietary needs and budget…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button type="submit" className="btn-primary group mt-2 w-full">
                      <span>Send enquiry</span>
                      <Icon
                        name="arrowRight"
                        className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                      />
                    </button>
                  </form>
                </>
              )}
            </div>
          </Reveal>

          {/* ---- RIGHT: Contact details ---- */}
          <div>
            <Reveal>
              <span className="eyebrow">Get in touch</span>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-cream sm:text-4xl">
                We'd love to hear from you
              </h2>
              <p className="mt-3 text-sand/80">
                Reach {company.name} directly — call, message or email, or drop by our kitchen at
                KA Food Link.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {details.map((d, i) => {
                const body = (
                  <>
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                      <Icon name={d.icon} className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-wider text-muted">
                        {d.label}
                      </p>
                      <p className="mt-1.5 text-sm leading-relaxed text-cream/90 transition-colors group-hover:text-gold-light">
                        {d.value}
                      </p>
                    </div>
                  </>
                )
                const cls =
                  'group flex gap-4 rounded-xl border border-white/10 bg-navy/40 p-5 transition-colors hover:border-gold/30'
                return (
                  <Reveal key={d.label} delay={i * 70}>
                    {d.href ? (
                      <a
                        href={d.href}
                        target={d.external ? '_blank' : undefined}
                        rel={d.external ? 'noopener noreferrer' : undefined}
                        className={cls}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className={cls}>{body}</div>
                    )}
                  </Reveal>
                )
              })}
            </div>

            {/* Opening hours */}
            <Reveal delay={120}>
              <div className="mt-4 rounded-xl border border-white/10 bg-navy/40 p-6">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon name="clock" className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted">
                    Opening Hours
                  </p>
                </div>
                <dl className="mt-5 grid gap-3">
                  {contact.hours.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between gap-4 border-t border-white/10 pt-3 first:border-t-0 first:pt-0"
                    >
                      <dt className="text-sm text-sand/80">{h.day}</dt>
                      <dd className="text-sm font-medium text-cream">{h.time}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Social */}
            <Reveal delay={180}>
              <div className="mt-6 flex items-center gap-4">
                <span className="text-xs font-medium uppercase tracking-wider text-muted">
                  Follow us
                </span>
                <div className="flex items-center gap-3">
                  {social.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={s.name}
                      className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-navy/40 text-sand transition-all hover:-translate-y-0.5 hover:border-gold/40 hover:text-gold"
                    >
                      <Icon name={s.icon} className="h-5 w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* ============== MAP ============== */}
      <Section tone="deep">
        <Reveal className="flex flex-col gap-5">
          <span className="eyebrow">Find us</span>
          <h2 className="font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-cream sm:text-5xl">
            171 Kampong Ampat, KA Food Link
          </h2>
          <p className="max-w-2xl text-lg leading-relaxed text-sand/80">
            Our kitchen is centrally located with island-wide delivery. Drop by to discuss your
            menu, or let us bring the feast to you.
          </p>
        </Reveal>
        <Reveal delay={120} className="mt-10">
          <div className="h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 shadow-lift">
            <iframe
              title="Map"
              src="https://www.google.com/maps?q=KA+Food+Link+171+Kampong+Ampat+Singapore+368330&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0 grayscale-[0.3]"
            />
          </div>
        </Reveal>
        <Reveal delay={200} className="mt-8">
          <Button href={contact.mapsHref} variant="ghost" arrow>
            Open in Google Maps
          </Button>
        </Reveal>
      </Section>
    </>
  )
}
