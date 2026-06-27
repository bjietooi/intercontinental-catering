import Reveal from './Reveal.jsx'

const tones = {
  ink: 'bg-ink',
  navy: 'bg-navy',
  deep: 'bg-navy-deep',
  cream: 'bg-cream text-ink', // rare light section
}

export function Section({ children, tone = 'ink', id, className = '', container = true }) {
  return (
    <section id={id} className={`relative py-20 sm:py-24 lg:py-28 ${tones[tone] || tones.ink} ${className}`}>
      {container ? <div className="container">{children}</div> : children}
    </section>
  )
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', onLight = false, className = '', titleClassName = '' }) {
  const centered = align === 'center'
  return (
    <Reveal
      className={`flex flex-col gap-5 ${centered ? 'items-center text-center' : 'items-start'} ${
        centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span className={`eyebrow ${centered ? 'eyebrow-center' : ''} ${onLight ? '!text-gold-dark' : ''}`}>{eyebrow}</span>
      )}
      <h2
        className={`font-serif text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-[3.3rem] ${
          onLight ? 'text-ink' : 'text-cream'
        } ${titleClassName}`}
      >
        {title}
      </h2>
      {intro && <p className={`text-lg leading-relaxed ${onLight ? 'text-ink/70' : 'text-sand/80'}`}>{intro}</p>}
    </Reveal>
  )
}
