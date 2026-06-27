// Classic menu list: dish name — dotted leader — price, with optional description.
export default function MenuList({ items, className = '' }) {
  return (
    <ul className={`divide-y divide-white/10 ${className}`}>
      {items.map((it) => (
        <li key={it.name} className="py-4">
          <div className="flex items-baseline gap-3">
            <h4 className="font-serif text-lg font-medium text-cream">{it.name}</h4>
            <span className="mb-1 flex-1 border-b border-dotted border-cream/20" />
            <span className="font-serif text-lg font-semibold text-gold">${it.price}</span>
          </div>
          {it.desc && <p className="mt-1 max-w-md text-sm leading-relaxed text-sand/60">{it.desc}</p>}
        </li>
      ))}
    </ul>
  )
}
