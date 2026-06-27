import { useState } from 'react'

// Image with graceful fallback: if the remote image fails, it degrades to a
// tasteful dark gradient instead of a broken icon.
export default function Img({ src, alt = '', className = '', imgClassName = '', ...rest }) {
  const [failed, setFailed] = useState(false)
  const hasPosition = /(^|\s)(absolute|fixed|relative|sticky)(\s|$)/.test(className)

  return (
    <div className={`overflow-hidden bg-navy-deep ${hasPosition ? '' : 'relative'} ${className}`}>
      {failed ? (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-navy via-navy-deep to-ink">
          <span className="font-serif text-3xl italic text-gold/50">INTL</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          {...rest}
        />
      )}
    </div>
  )
}
