import { useEffect, useState } from 'react'
import Img from './Img.jsx'

// Cross-fading hero background with a slow Ken Burns pan. Respects reduced-motion.
export default function HeroSlideshow({ images = [], interval = 6500, className = '' }) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (images.length <= 1) return
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return
    const id = setInterval(() => setActive((i) => (i + 1) % images.length), interval)
    return () => clearInterval(id)
  }, [images.length, interval])

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {images.map((src, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-[1600ms] ease-out ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Img
            src={src}
            alt=""
            className="h-full w-full"
            imgClassName={`object-cover ${i % 2 === 0 ? 'animate-kenburns' : 'animate-kenburns2'}`}
          />
        </div>
      ))}
    </div>
  )
}
