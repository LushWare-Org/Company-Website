import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Copy, ExternalLink, FileText, Loader2, Pencil, Plus, Search, Star, Trash2 } from 'lucide-react'
import { adminDeletePost, adminGetPost, adminListPosts, adminSavePost, UnauthorizedError } from '../../services/blogService'
import { Highlighted } from '../../components/blog/BlogCard'
import type { BlogPostSummary } from '../../types/blog'

type StatusFilter = 'all' | 'published' | 'scheduled' | 'draft'

const postStatus = (p: BlogPostSummary): Exclude<StatusFilter, 'all'> =>
  p.status === 'draft' ? 'draft' : p.publishedAt && Date.parse(p.publishedAt) > Date.now() ? 'scheduled' : 'published'

const STATUS_STYLE = {
  published: 'bg-emerald-100 text-emerald-800',
  scheduled: 'bg-amber-100 text-amber-800',
  draft: 'bg-slate-200 text-slate-700',
}

export default function AdminBlogList() {
  const navigate = useNavigate()
  const token = localStorage.getItem('adminToken') ?? ''
  const [posts, setPosts] = useState<BlogPostSummary[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [search, setSearch] = useState('')
  const [status, setStatus] = useState<StatusFilter>('all')
  const [busyId, setBusyId] = useState<string | null>(null)

  const fail = (err: unknown) => {
    if (err instanceof UnauthorizedError) {
      localStorage.removeItem('adminToken')
      navigate('/admin')
    } else setError((err as Error).message)
  }

  useEffect(() => {
    adminListPosts(token)
      .then(({ posts }) => setPosts(posts))
      .catch(fail)
      .finally(() => setLoading(false))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  const terms = useMemo(() => search.toLowerCase().split(/\s+/).filter(Boolean), [search])

  // Instant client-side search across title, slug, excerpt, tags, category and keywords.
  const visible = useMemo(
    () =>
      posts.filter((p) => {
        if (status !== 'all' && postStatus(p) !== status) return false
        const haystack = [p.title, p.slug, p.excerpt, p.category, p.seo?.focusKeyword ?? '', ...p.tags].join(' ').toLowerCase()
        return terms.every((t) => haystack.includes(t))
      }),
    [posts, status, terms],
  )

  const counts = useMemo(() => {
    const c = { all: posts.length, published: 0, scheduled: 0, draft: 0 }
    posts.forEach((p) => c[postStatus(p)]++)
    return c
  }, [posts])

  const remove = async (post: BlogPostSummary) => {
    if (!confirm(`Delete “${post.title}” permanently?`)) return
    setBusyId(post._id)
    try {
      await adminDeletePost(post._id, token)
      setPosts((list) => list.filter((p) => p._id !== post._id))
    } catch (err) {
      fail(err)
    } finally {
      setBusyId(null)
    }
  }

  const duplicate = async (post: BlogPostSummary) => {
    setBusyId(post._id)
    try {
      const { post: full } = await adminGetPost(post._id, token)
      const { post: copy } = await adminSavePost(
        { ...full, title: `${full.title} (copy)`, slug: `${full.slug}-copy`, status: 'draft', publishedAt: null, featured: false },
        token,
      )
      navigate(`/admin/blog/edit?id=${copy._id}`)
    } catch (err) {
      fail(err)
      setBusyId(null)
    }
  }

  return (
    <div className="min-h-screen bg-emerald-50/50 text-slate-900">
      <header className="bg-white border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center gap-3">
          <Link to="/admin/dashboard" className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900" title="Back to client requests">
            <ArrowLeft size={18} />
          </Link>
          <img src="/logo.jpeg" alt="" className="w-9 h-9 rounded-lg" />
          <div>
            <h1 className="text-lg font-bold leading-none">Blog</h1>
            <p className="text-xs text-slate-500 mt-1">Write and manage articles for lushware.net/blog</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <a href="/blog" target="_blank" rel="noreferrer" className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700">
              <ExternalLink size={15} /> View blog
            </a>
            <Link to="/admin/blog/edit" className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700">
              <Plus size={16} /> New post
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-5 py-8">
        <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
          <div className="flex gap-1 p-1 bg-white border border-slate-200 rounded-xl">
            {(['all', 'published', 'scheduled', 'draft'] as const).map((s) => (
              <button
                key={s}
                onClick={() => setStatus(s)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold capitalize ${status === s ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`}
              >
                {s === 'draft' ? 'Drafts' : s} <span className="opacity-70 text-xs">{counts[s]}</span>
              </button>
            ))}
          </div>
          <div className="relative flex-1">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by title, URL, tag, category or keyword…"
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-sm focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
            />
          </div>
        </div>

        {error && <p className="mb-4 px-4 py-3 bg-red-50 text-red-700 text-sm rounded-lg">{error}</p>}

        {loading ? (
          <div className="flex justify-center py-24"><Loader2 className="animate-spin text-emerald-600" size={28} /></div>
        ) : visible.length === 0 ? (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl">
            <FileText className="mx-auto text-slate-300" size={44} />
            <p className="mt-4 font-semibold text-slate-800">{posts.length ? 'No posts match your search' : 'No posts yet'}</p>
            {!posts.length && (
              <Link to="/admin/blog/edit" className="mt-5 inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg">
                <Plus size={16} /> Write your first post
              </Link>
            )}
          </div>
        ) : (
          <ul className="bg-white border border-slate-200 rounded-2xl divide-y divide-slate-100 overflow-hidden">
            {visible.map((p) => {
              const st = postStatus(p)
              return (
                <li key={p._id} className={`flex items-center gap-4 px-4 py-3 hover:bg-emerald-50/40 ${busyId === p._id ? 'opacity-50 pointer-events-none' : ''}`}>
                  <Link to={`/admin/blog/edit?id=${p._id}`} className="w-24 aspect-[16/10] rounded-lg overflow-hidden bg-slate-100 shrink-0">
                    {p.coverImage?.url && <img src={p.coverImage.url} alt="" loading="lazy" className="w-full h-full object-cover" />}
                  </Link>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${STATUS_STYLE[st]}`}>{st}</span>
                      {p.featured && <Star size={13} className="text-amber-500 fill-amber-400" />}
                      {p.category && <span className="text-xs text-slate-500 truncate">{p.category}</span>}
                    </div>
                    <Link to={`/admin/blog/edit?id=${p._id}`} className="block mt-1 font-semibold text-slate-900 hover:text-emerald-700 truncate">
                      <Highlighted text={p.title} terms={terms} />
                    </Link>
                    <p className="text-xs text-slate-500 truncate">
                      /blog/<Highlighted text={p.slug} terms={terms} />
                      {p.seo?.focusKeyword && (
                        <>
                          {' '}· keyword: <span className="text-slate-700"><Highlighted text={p.seo.focusKeyword} terms={terms} /></span>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="hidden md:block text-right text-xs text-slate-500 shrink-0 w-36">
                    <p>{p.wordCount.toLocaleString()} words · {p.readingTime} min</p>
                    <p className="mt-0.5">
                      {st === 'draft' ? 'Edited' : st === 'scheduled' ? 'Goes live' : 'Published'}{' '}
                      {new Date(st === 'draft' ? p.updatedAt : p.publishedAt!).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex items-center gap-0.5 shrink-0">
                    <Link to={`/admin/blog/edit?id=${p._id}`} title="Edit" className="p-2 rounded-lg text-slate-500 hover:bg-emerald-100 hover:text-emerald-800"><Pencil size={16} /></Link>
                    {st === 'published' && (
                      <a href={`/blog/${p.slug}`} target="_blank" rel="noreferrer" title="View on site" className="p-2 rounded-lg text-slate-500 hover:bg-emerald-100 hover:text-emerald-800"><ExternalLink size={16} /></a>
                    )}
                    <button onClick={() => duplicate(p)} title="Duplicate as draft" className="p-2 rounded-lg text-slate-500 hover:bg-emerald-100 hover:text-emerald-800"><Copy size={16} /></button>
                    <button onClick={() => remove(p)} title="Delete" className="p-2 rounded-lg text-slate-500 hover:bg-red-50 hover:text-red-600"><Trash2 size={16} /></button>
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </main>
    </div>
  )
}
