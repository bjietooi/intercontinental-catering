import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'

const variants = {
  primary: 'btn-primary',
  light: 'btn-light',
  outline: 'btn-outline',
  ghost: 'btn-ghost',
}

export default function Button({ children, to, href, variant = 'primary', arrow = false, className = '', ...rest }) {
  const cls = `${variants[variant] || variants.primary} group ${className}`
  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-300 ease-out-expo group-hover:translate-x-1" />
      )}
    </>
  )
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}
