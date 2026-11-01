import { Link } from 'react-router-dom'
import { Clock } from 'lucide-react'
import type { BlogPostSummary } from '../../types/blog'
import { formatDate, splitByTerms } from '../../lib/blogHtml'

/** Text with search terms wrapped in <mark>. */
export function Highlighted({ text, terms }: { text: string; terms: string[] }) {
  return (
    <>
      {splitByTerms(text, terms).map((part, i) =>
        part.match ? (
          <mark key={i} className="bg-amber-200/80 text-inherit rounded-sm px-0.5">
            {part.text}
          </mark>
        ) : (
          <span key={i}>{part.text}</span>
        ),
      )}
    </>
  )
}

interface BlogCardProps {
  post: BlogPostSummary
  terms?: string[]
  /** Larger horizontal layout for the featured post. */
  featured?: boolean
}

export default function BlogCard({ post, terms = [], featured = false }: BlogCardProps) {
  return (
    <article
      className={`group relative flex bg-white border border-slate-200 hover:border-emerald-400 hover:shadow-[0_18px_40px_-20px_rgba(5,150,105,0.35)] transition-all duration-300 overflow-hidden ${
        featured ? 'flex-col lg:flex-row' : 'flex-col'
      }`}
    >
      <div className={`relative overflow-hidden bg-emerald-50 ${featured ? 'lg:w-3/5 aspect-[16/9] lg:aspect-auto lg:min-h-[340px]' : 'aspect-[16/9]'}`}>
        {post.coverImage?.url ? (
          <img
            src={post.coverImage.url}
            alt={post.coverImage.alt || post.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100">
            <img src="/logo2.jpg" alt="" className="w-24 opacity-40" />
          </div>
        )}
        {post.category && (
          <span className="absolute top-4 left-4 px-2.5 py-1 bg-white/95 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700">
            {post.category}
          </span>
        )}
      </div>

      <div className={`flex flex-col flex-1 ${featured ? 'p-6 sm:p-8 lg:p-10 justify-center' : 'p-6'}`}>
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <time dateTime={post.publishedAt ?? undefined}>{formatDate(post.publishedAt)}</time>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span className="inline-flex items-center gap-1">
            <Clock size={12} /> {post.readingTime} min read
          </span>
        </div>
        <h3 className={`font-bold text-slate-900 tracking-tight leading-snug group-hover:text-emerald-700 transition-colors ${featured ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
          {/* Stretched link: the whole card is clickable. */}
          <Link to={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            <Highlighted text={post.title} terms={terms} />
          </Link>
        </h3>
        {post.excerpt && (
          <p className={`mt-3 text-slate-600 leading-relaxed ${featured ? 'text-base line-clamp-4' : 'text-sm line-clamp-3'}`}>
            <Highlighted text={post.excerpt} terms={terms} />
          </p>
        )}
        {post.tags.length > 0 && (
          <div className="mt-auto pt-5 flex flex-wrap gap-1.5">
            {post.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="px-2 py-0.5 text-[11px] font-medium bg-slate-100 text-slate-600">
                #<Highlighted text={tag} terms={terms} />
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
