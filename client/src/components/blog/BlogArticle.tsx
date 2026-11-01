import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ChevronRight, Clock, ListTree } from 'lucide-react'
import type { BlogPost } from '../../types/blog'
import { formatDate, withHeadingIds } from '../../lib/blogHtml'

type ArticlePost = Pick<BlogPost, 'title' | 'excerpt' | 'content' | 'coverImage' | 'category' | 'tags' | 'author' | 'publishedAt' | 'readingTime'>

/** Article header, cover, table of contents and body — the public post page and the admin preview. */
export default function BlogArticle({ post, preview = false }: { post: ArticlePost; preview?: boolean }) {
  const { html, toc } = useMemo(() => withHeadingIds(post.content), [post.content])
  const [activeId, setActiveId] = useState<string | null>(null)

  // Highlight the section being read in the table of contents.
  useEffect(() => {
    if (!toc.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActiveId(visible[0].target.id)
      },
      { rootMargin: '-110px 0px -65% 0px' },
    )
    toc.forEach((t) => {
      const el = document.getElementById(t.id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [toc])

  const initials = post.author.name
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <article>
      <header className="max-w-3xl mx-auto text-center">
        <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500 mb-6">
          <Link to="/" className="hover:text-emerald-700">Home</Link>
          <ChevronRight size={12} />
          <Link to="/blog" className="hover:text-emerald-700">Blog</Link>
          {post.category && (
            <>
              <ChevronRight size={12} />
              <span className="text-emerald-700">{post.category}</span>
            </>
          )}
        </nav>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
          {post.title || (preview ? 'Untitled post' : '')}
        </h1>
        {post.excerpt && <p className="mt-5 text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-500">
          <span className="inline-flex items-center gap-2.5">
            <span className="w-9 h-9 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center">{initials}</span>
            <span className="text-left leading-tight">
              <span className="block font-semibold text-slate-800">{post.author.name}</span>
              {post.author.role && <span className="block text-xs">{post.author.role}</span>}
            </span>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Calendar size={15} />
            <time dateTime={post.publishedAt ?? undefined}>{formatDate(post.publishedAt) || 'Not published yet'}</time>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock size={15} /> {post.readingTime} min read
          </span>
        </div>
      </header>

      {post.coverImage.url && (
        <figure className="max-w-5xl mx-auto mt-10">
          <img src={post.coverImage.url} alt={post.coverImage.alt || post.title} className="w-full aspect-[16/9] object-cover rounded-2xl" />
        </figure>
      )}

      <div className={`mx-auto mt-12 ${toc.length >= 2 ? 'max-w-6xl lg:grid lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-14' : 'max-w-3xl'}`}>
        <div className="min-w-0 max-w-3xl w-full mx-auto">
          {toc.length >= 2 && (
            <details className="lg:hidden mb-8 border border-emerald-100 bg-emerald-50/50 rounded-xl px-5 py-4">
              <summary className="cursor-pointer font-semibold text-slate-800 flex items-center gap-2">
                <ListTree size={16} className="text-emerald-600" /> In this article
              </summary>
              <TocList toc={toc} activeId={activeId} />
            </details>
          )}
          <div className="blog-content" dangerouslySetInnerHTML={{ __html: html }} />
          {post.tags.length > 0 && (
            <div className="mt-12 pt-6 border-t border-slate-200 flex flex-wrap gap-2">
              {post.tags.map((tag) =>
                preview ? (
                  <span key={tag} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600">#{tag}</span>
                ) : (
                  <Link key={tag} to={`/blog?tag=${encodeURIComponent(tag)}`} className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-emerald-100 hover:text-emerald-800 transition-colors">
                    #{tag}
                  </Link>
                ),
              )}
            </div>
          )}
        </div>
        {toc.length >= 2 && (
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-3 flex items-center gap-2">
                <ListTree size={14} className="text-emerald-600" /> In this article
              </p>
              <TocList toc={toc} activeId={activeId} />
            </div>
          </aside>
        )}
      </div>
    </article>
  )
}

function TocList({ toc, activeId }: { toc: ReturnType<typeof withHeadingIds>['toc']; activeId: string | null }) {
  return (
    <ol className="mt-3 space-y-1 border-l border-slate-200">
      {toc.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`block -ml-px border-l-2 py-1 text-sm leading-snug transition-colors ${item.level === 3 ? 'pl-6' : 'pl-3'} ${
              activeId === item.id ? 'border-emerald-600 text-emerald-700 font-semibold' : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ol>
  )
}
