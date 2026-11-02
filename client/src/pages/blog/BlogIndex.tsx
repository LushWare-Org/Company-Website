import { useEffect, useMemo, useRef, useState, useSyncExternalStore } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { ArrowRight, Hash, Loader2, Search, SearchX, X } from 'lucide-react'
import BlogCard from '../../components/blog/BlogCard'
import { fetchBlogPosts } from '../../services/blogService'
import { getBlogState, setBlogList, subscribeBlog } from '../../data/blogStore'
import type { BlogListResponse } from '../../types/blog'

const PAGE_SIZE = 12
const SEARCH_DELAY = 250

export default function BlogIndex() {
  const [params, setParams] = useSearchParams()
  const q = params.get('q') ?? ''
  const tag = params.get('tag') ?? ''
  const category = params.get('category') ?? ''
  const filtered = Boolean(q || tag || category)

  const store = useSyncExternalStore(subscribeBlog, getBlogState, getBlogState)
  const [fetched, setFetched] = useState<{ key: string; data: BlogListResponse } | null>(null)
  const [loading, setLoading] = useState(false)
  const [loadingMore, setLoadingMore] = useState(false)
  const [error, setError] = useState('')
  const [focused, setFocused] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Search box text; follows ?q= when it changes from outside (back button, tag links).
  const [input, setInput] = useState(q)
  const [syncedQ, setSyncedQ] = useState(q)
  if (q !== syncedQ) {
    setSyncedQ(q)
    if (q !== input.trim()) setInput(q)
  }

  const key = `${q}|${tag}|${category}`
  // Unfiltered first page comes from the store (prerendered data) until refreshed.
  const result = fetched?.key === key ? fetched.data : filtered ? null : store.list
  const terms = useMemo(() => q.split(/\s+/).filter(Boolean), [q])

  useEffect(() => {
    const ac = new AbortController()
    setLoading(true)
    setError('')
    fetchBlogPosts({ q, tag, category, limit: PAGE_SIZE }, ac.signal)
      .then((data) => {
        setFetched({ key, data })
        if (!q && !tag && !category) setBlogList(data)
      })
      .catch(() => !ac.signal.aborted && setError('We could not load articles right now. Please try again shortly.'))
      .finally(() => !ac.signal.aborted && setLoading(false))
    return () => ac.abort()
  }, [key, q, tag, category])

  // "/" focuses the search box.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(target.tagName) && !target.isContentEditable) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('keydown', onKey)
      if (timer.current) clearTimeout(timer.current)
    }
  }, [])

  const update = (changes: Record<string, string>) => {
    const next = new URLSearchParams(params)
    for (const [k, v] of Object.entries(changes)) {
      if (v) next.set(k, v)
      else next.delete(k)
    }
    setParams(next, { replace: true, preventScrollReset: true })
  }

  const onSearchChange = (value: string) => {
    setInput(value)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => update({ q: value.trim() }), SEARCH_DELAY)
  }

  const clearAll = () => {
    if (timer.current) clearTimeout(timer.current)
    setInput('')
    setParams(new URLSearchParams(), { replace: true, preventScrollReset: true })
  }

  const loadMore = async () => {
    if (!result) return
    setLoadingMore(true)
    try {
      const next = await fetchBlogPosts({ q, tag, category, limit: PAGE_SIZE, page: result.page + 1 })
      setFetched({ key, data: { ...next, posts: [...result.posts, ...next.posts] } })
    } catch {
      setError('Could not load more articles.')
    } finally {
      setLoadingMore(false)
    }
  }

  const posts = result?.posts ?? []
  const featured = !filtered ? posts.find((p) => p.featured) ?? posts[0] : undefined
  const rest = featured ? posts.filter((p) => p !== featured) : posts
  const tags = result?.tags ?? store.list?.tags ?? []
  const categories = result?.categories ?? store.list?.categories ?? []
  const needle = input.trim().toLowerCase()
  const suggestions = needle ? tags.filter((t) => t.name.includes(needle) && t.name !== tag).slice(0, 6) : []
  const pending = loading || input.trim() !== q

  return (
    <section className="pt-32 pb-24 md:pt-40 selection:bg-emerald-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Hero + live search */}
        <header className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-8 bg-emerald-600" />
            <span className="px-3 py-1 border border-emerald-600 text-[10px] font-bold text-emerald-700 uppercase tracking-[0.22em]">LushWare Blog</span>
            <div className="h-px w-8 bg-emerald-600" />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900">
            Insights on Software, AI <span className="text-emerald-600">&amp; Operations</span>
          </h1>
          <p className="mt-5 text-lg text-slate-600">
            Practical guides for field service, manufacturing, logistics, tourism and growing businesses — written by the team that builds the systems.
          </p>

          <div className="relative mt-10 text-left">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
              <input
                ref={inputRef}
                type="search"
                value={input}
                onChange={(e) => onSearchChange(e.target.value)}
                onFocus={() => setFocused(true)}
                onBlur={() => setTimeout(() => setFocused(false), 150)}
                placeholder="Search articles, topics or keywords…"
                aria-label="Search the blog"
                className="w-full pl-14 pr-24 py-4 bg-white border-2 border-slate-200 rounded-2xl text-base shadow-sm placeholder:text-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all [&::-webkit-search-cancel-button]:hidden"
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                {pending && <Loader2 size={18} className="animate-spin text-emerald-600" />}
                {input ? (
                  <button onClick={() => onSearchChange('')} className="p-1 text-slate-400 hover:text-slate-700" aria-label="Clear search">
                    <X size={18} />
                  </button>
                ) : (
                  <kbd className="hidden sm:inline-flex h-6 items-center rounded border border-slate-200 bg-slate-50 px-2 text-xs text-slate-400">/</kbd>
                )}
              </div>
            </div>
            {focused && suggestions.length > 0 && (
              <div className="absolute z-20 mt-2 w-full bg-white border border-slate-200 rounded-xl shadow-lg p-3">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate-400 mb-2">Matching topics</p>
                <div className="flex flex-wrap gap-2">
                  {suggestions.map((t) => (
                    <button
                      key={t.name}
                      onMouseDown={(e) => e.preventDefault()}
                      onClick={() => {
                        if (timer.current) clearTimeout(timer.current)
                        setInput('')
                        update({ tag: t.name, q: '' })
                      }}
                      className="inline-flex items-center gap-1 px-3 py-1.5 text-sm bg-emerald-50 text-emerald-800 hover:bg-emerald-100 rounded-full"
                    >
                      <Hash size={13} /> {t.name} <span className="text-emerald-600/70 text-xs">{t.count}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </header>

        {/* Category tabs + popular tags */}
        {(categories.length > 0 || tags.length > 0) && (
          <div className="mt-10 flex flex-col items-center gap-4">
            {categories.length > 0 && (
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  onClick={() => update({ category: '' })}
                  className={`px-4 py-2 text-sm font-semibold border transition-colors ${!category ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-200 text-slate-700 hover:border-emerald-500'}`}
                >
                  All
                </button>
                {categories.map((c) => (
                  <button
                    key={c.name}
                    onClick={() => update({ category: category === c.name ? '' : c.name })}
                    className={`px-4 py-2 text-sm font-semibold border transition-colors ${category === c.name ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-200 text-slate-700 hover:border-emerald-500'}`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
            {tags.length > 0 && (
              <div className="flex flex-wrap justify-center gap-1.5 max-w-4xl">
                {tags.slice(0, 14).map((t) => (
                  <button
                    key={t.name}
                    onClick={() => update({ tag: tag === t.name ? '' : t.name })}
                    className={`px-2.5 py-1 text-xs font-medium rounded-full transition-colors ${tag === t.name ? 'bg-emerald-100 text-emerald-800 ring-1 ring-emerald-400' : 'bg-slate-100 text-slate-600 hover:bg-emerald-50 hover:text-emerald-700'}`}
                  >
                    #{t.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Search status */}
        {filtered && (
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4" aria-live="polite">
            <p className="text-sm text-slate-600">
              {result ? (
                <>
                  <span className="font-bold text-slate-900">{result.total}</span> {result.total === 1 ? 'article' : 'articles'}
                  {q && <> for “<span className="font-semibold text-slate-900">{q}</span>”</>}
                  {tag && <> tagged <span className="font-semibold text-emerald-700">#{tag}</span></>}
                  {category && <> in <span className="font-semibold text-emerald-700">{category}</span></>}
                </>
              ) : (
                'Searching…'
              )}
            </p>
            <button onClick={clearAll} className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-900">
              <X size={15} /> Clear filters
            </button>
          </div>
        )}

        {error && !result && <p className="mt-16 text-center text-slate-500">{error}</p>}

        {/* Results */}
        <div className={`transition-opacity duration-200 ${pending && result ? 'opacity-60' : 'opacity-100'}`}>
          {featured && (
            <div className="mt-12">
              <BlogCard post={featured} featured />
            </div>
          )}
          {rest.length > 0 && (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((post) => (
                <BlogCard key={post._id} post={post} terms={terms} />
              ))}
            </div>
          )}
          {!result && !error && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-hidden>
              {Array.from({ length: 6 }, (_, i) => (
                <div key={i} className="border border-slate-100 animate-pulse">
                  <div className="aspect-[16/9] bg-slate-100" />
                  <div className="p-6 space-y-3">
                    <div className="h-3 w-1/3 bg-slate-100" />
                    <div className="h-5 w-4/5 bg-slate-100" />
                    <div className="h-3 w-full bg-slate-100" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {result && posts.length === 0 && (
          <div className="mt-16 text-center max-w-md mx-auto">
            <SearchX className="mx-auto text-slate-300" size={48} />
            <h2 className="mt-4 text-xl font-bold text-slate-900">{filtered ? 'No articles match your search' : 'No articles yet'}</h2>
            <p className="mt-2 text-slate-500">{filtered ? 'Try a different keyword, or browse one of the topics above.' : 'New articles are on the way — check back soon.'}</p>
            {filtered && (
              <button onClick={clearAll} className="mt-6 px-6 py-3 bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-700">
                Show all articles
              </button>
            )}
          </div>
        )}

        {result && result.page < result.pages && (
          <div className="mt-12 text-center">
            <button
              onClick={loadMore}
              disabled={loadingMore}
              className="inline-flex items-center gap-2 px-7 py-3 border-2 border-emerald-600 text-emerald-700 text-sm font-bold hover:bg-emerald-600 hover:text-white transition-colors disabled:opacity-60"
            >
              {loadingMore && <Loader2 size={16} className="animate-spin" />} Load more articles
            </button>
          </div>
        )}

        <div className="mt-24 bg-slate-900 text-white px-8 py-12 sm:px-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Have an operations problem to solve?</h2>
            <p className="mt-2 text-slate-300">Talk to the engineers behind these articles — a free consultation, no obligation.</p>
          </div>
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white text-sm font-bold hover:bg-emerald-400 transition-colors shrink-0">
            Book a free consultation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
