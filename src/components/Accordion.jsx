import { useState } from 'react'
import Icon from './Icon.jsx'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10">
      <button type="button" onClick={onToggle} className="flex w-full items-center justify-between gap-6 py-6 text-left" aria-expanded={isOpen}>
        <span className={`font-serif text-xl transition-colors sm:text-2xl ${isOpen ? 'text-gold' : 'text-cream'}`}>{item.q}</span>
        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border transition-all duration-300 ${isOpen ? 'rotate-180 border-gold bg-gold text-ink' : 'border-cream/25 text-cream'}`}>
          <Icon name={isOpen ? 'minus' : 'plus'} className="h-4 w-4" />
        </span>
      </button>
      <div className={`grid transition-all duration-500 ease-out-expo ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="max-w-2xl pb-6 pr-12 text-base leading-relaxed text-sand/80">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

export default function Accordion({ items, defaultOpen = 0 }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="flex flex-col">
      {items.map((item, i) => (
        <AccordionItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
      ))}
    </div>
  )
}
