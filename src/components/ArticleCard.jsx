import { Link } from 'react-router-dom'
import Img from './Img.jsx'
import Icon from './Icon.jsx'

function formatDate(iso) {
  const d = new Date(iso + 'T00:00:00')
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function ArticleCard({ article, featured = false }) {
  return (
    <Link
      to={`/articles#${article.slug}`}
      className={`group card flex overflow-hidden hover:-translate-y-1.5 hover:border-gold/30 hover:shadow-lift ${
        featured ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      <div className={featured ? 'lg:w-1/2' : ''}>
        <Img
          src={article.image}
          alt={article.title}
          className={featured ? 'aspect-[16/11] w-full lg:h-full' : 'aspect-[16/10] w-full'}
          imgClassName="transition-transform duration-[1.1s] ease-out-expo group-hover:scale-105"
        />
      </div>
      <div className={`flex flex-1 flex-col p-6 ${featured ? 'lg:p-9' : ''}`}>
        <div className="flex items-center gap-3 text-[0.68rem] font-semibold uppercase tracking-widest text-gold">
          <span>{article.category}</span>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <span className="text-muted">{article.readTime}</span>
        </div>
        <h3 className={`mt-3 font-serif font-semibold text-cream ${featured ? 'text-3xl lg:text-4xl' : 'text-2xl'}`}>
          {article.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-sand/75">{article.excerpt}</p>
        <div className="mt-5 flex items-center justify-between">
          <span className="text-xs text-muted">{formatDate(article.date)}</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest text-gold transition-transform duration-300 group-hover:translate-x-1">
            Read <Icon name="arrowRight" className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}
