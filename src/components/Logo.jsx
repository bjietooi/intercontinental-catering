import { Link } from 'react-router-dom'

// Real Intercontinental Catering wordmark (light/cream — for the dark theme).
export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Intercontinental Catering — home"
    >
      <img
        src="/assets/brand/logo-light.png"
        alt="Intercontinental Catering"
        width="226"
        height="83"
        className="h-11 w-auto transition-transform duration-300 ease-out-expo group-hover:scale-[1.02] sm:h-12"
      />
    </Link>
  )
}
