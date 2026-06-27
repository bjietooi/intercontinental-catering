// Event-package list: package name + meta (items · min pax) on the left,
// price per pax/set on the right.
export default function PackageList({ packages, className = '' }) {
  return (
    <ul className={`divide-y divide-white/10 ${className}`}>
      {packages.map((p) => (
        <li key={p.name} className="flex items-center justify-between gap-4 py-4">
          <div className="min-w-0">
            <h4 className="font-serif text-lg font-medium text-cream">{p.name}</h4>
            <p className="mt-1 text-xs uppercase tracking-wider text-muted">
              {p.items} <span className="px-1 text-gold/50">·</span> {p.min}
            </p>
          </div>
          <div className="shrink-0 text-right">
            <span className="font-serif text-xl font-semibold text-gold">
              {p.from ? 'from ' : ''}${p.price}
            </span>
            <span className="block text-xs text-sand/60">per {p.unit}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}
