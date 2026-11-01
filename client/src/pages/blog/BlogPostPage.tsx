import { useEffect, useState, useSyncExternalStore } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight, Check, Facebook, Link2, Linkedin, Twitter } from 'lucide-react'
import BlogArticle from '../../components/blog/BlogArticle'
import BlogCard from '../../components/blog/BlogCard'
import NotFoundPage from '../NotFoundPage'
import { fetchBlogPost } from '../../services/blogService'
import { getBlogState, setBlogPost, subscribeBlog } from '../../data/blogStore'
import { absoluteUrl } from '../../seo/routes'

export default function BlogPostPage() {
  const { slug = '' } = useParams()
  const entry = useSyncExternalStore(subscribeBlog, () => getBlogState().posts[slug], () => getBlogState().posts[slug])
  const [failedSlug, setFailedSlug] = useState<string | null>(null)
  const [progress, setProgress] = useState(0)
  const [copied, setCopied] = useState(false)

  // Always refresh: a prerendered copy may be older than the latest edit.
  useEffect(() => {
    const ac = new AbortController()
    fetchBlogPost(slug, ac.signal)
      .then((data) => setBlogPost(slug, data))
      .catch(() => !ac.signal.aborted && setFailedSlug(slug))
    return () => ac.abort()
  }, [slug])

  // Reading progress bar.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  if (entry === null) return <NotFoundPage />

  if (!entry) {
    return (
      <section className="pt-36 pb-24 px-5">
        {failedSlug === slug ? (
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-2xl font-bold text-slate-900">This article could not be loaded</h1>
            <p className="mt-2 text-slate-500">Please check your connection and try again.</p>
            <Link to="/blog" className="mt-6 inline-block px-6 py-3 bg-emerald-600 text-white text-sm font-semibold">Back to the blog</Link>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto animate-pulse space-y-5" aria-busy>
            <div className="h-3 w-40 bg-slate-100 mx-auto" />
            <div className="h-10 w-4/5 bg-slate-100 mx-auto" />
            <div className="h-4 w-2/3 bg-slate-100 mx-auto" />
            <div className="aspect-[16/9] bg-slate-100 rounded-2xl mt-10" />
          </div>
        )}
      </section>
    )
  }

  const { post, related } = entry
  const url = absoluteUrl(`/blog/${post.slug}`)
  const share = [
    { name: 'LinkedIn', icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}` },
    { name: 'X', icon: Twitter, href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(post.title)}` },
    { name: 'Facebook', icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}` },
  ]

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      /* clipboard blocked: nothing to do */
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-1 z-[60] pointer-events-none" aria-hidden>
        <div className="h-full bg-emerald-500 transition-[width] duration-150" style={{ width: `${progress}%` }} />
      </div>

      <section className="pt-32 md:pt-40 pb-20 px-5 sm:px-8 selection:bg-emerald-100">
        <BlogArticle post={post} />

        <div className="max-w-3xl mx-auto mt-10 flex flex-wrap items-center justify-between gap-4">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-emerald-700">
            <ArrowLeft size={16} /> All articles
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-400 mr-1">Share</span>
            {share.map(({ name, icon: Icon, href }) => (
              <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={`Share on ${name}`} className="w-9 h-9 flex items-center justify-center border border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
                <Icon size={16} />
              </a>
            ))}
            <button onClick={copyLink} aria-label="Copy link" className="w-9 h-9 flex items-center justify-center border border-slate-200 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 transition-colors">
              {copied ? <Check size={16} className="text-emerald-600" /> : <Link2 size={16} />}
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-14 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-8 sm:p-10">
          <h2 className="text-2xl font-bold tracking-tight">Want this working in your business?</h2>
          <p className="mt-2 text-emerald-50">We build the software behind these ideas. Tell us about your operations and we will show you what is possible.</p>
          <Link to="/contact" className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-800 text-sm font-bold hover:bg-emerald-50 transition-colors">
            Book a free consultation <ArrowRight size={16} />
          </Link>
        </div>

        {related.length > 0 && (
          <div className="max-w-6xl mx-auto mt-20">
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 mb-6">Keep reading</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p._id} post={p} />
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  )
}
