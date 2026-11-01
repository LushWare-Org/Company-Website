import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { EditorContent, useEditor, useEditorState } from '@tiptap/react'
import { BubbleMenu } from '@tiptap/react/menus'
import { NodeSelection } from '@tiptap/pm/state'
import {
  ArrowLeft, Bold, CalendarClock, Check, ExternalLink, Eye, FileText, Heading2, Heading3, Highlighter, ImagePlus, Italic,
  ListTree, Loader2, PanelRight, RotateCcw, Search as SearchIcon, Send, Star, Trash2, Underline, X,
} from 'lucide-react'
import Toolbar from '../../components/blog/editor/Toolbar'
import FindReplaceBar from '../../components/blog/editor/FindReplaceBar'
import ImageDialog, { type ImageChoice } from '../../components/blog/editor/ImageDialog'
import SeoPanel from '../../components/blog/editor/SeoPanel'
import { analyzeSeo } from '../../components/blog/editor/seoAnalysis'
import { buildExtensions } from '../../components/blog/editor/extensions'
import BlogArticle from '../../components/blog/BlogArticle'
import { adminDeletePost, adminGetPost, adminListPosts, adminSavePost, adminUploadImage, UnauthorizedError } from '../../services/blogService'
import { altFromFileName } from '../../lib/imageResize'
import { slugify, withHeadingIds } from '../../lib/blogHtml'
import type { BlogPost, BlogPostInput, BlogPostSummary } from '../../types/blog'

type Form = Omit<BlogPostInput, 'content'>
type Tab = 'post' | 'seo' | 'outline'
type Notice = { type: 'success' | 'error' | 'info'; text: string } | null

const emptyForm = (): Form => ({
  title: '',
  slug: '',
  excerpt: '',
  coverImage: { url: '', alt: '' },
  category: '',
  tags: [],
  author: { name: 'LushWare Team', role: '' },
  status: 'draft',
  publishedAt: null,
  featured: false,
  seo: { metaTitle: '', metaDescription: '', focusKeyword: '', keywords: [], noindex: false },
})

const formFromPost = (p: BlogPost): Form => ({
  title: p.title,
  slug: p.slug,
  excerpt: p.excerpt,
  coverImage: { url: p.coverImage?.url ?? '', alt: p.coverImage?.alt ?? '' },
  category: p.category,
  tags: p.tags,
  author: { name: p.author?.name ?? 'LushWare Team', role: p.author?.role ?? '' },
  status: p.status,
  publishedAt: p.publishedAt,
  featured: p.featured,
  seo: {
    metaTitle: p.seo?.metaTitle ?? '',
    metaDescription: p.seo?.metaDescription ?? '',
    focusKeyword: p.seo?.focusKeyword ?? '',
    keywords: p.seo?.keywords ?? [],
    noindex: p.seo?.noindex ?? false,
  },
})

/* Local backup of unsaved work (per browser), offered for restore on reload. */
interface Backup {
  form: Form
  content: string
  savedAt: number
}
const backupKey = (id: string) => `blog-backup:${id || 'new'}`
const readBackup = (id: string): Backup | null => {
  try {
    return JSON.parse(localStorage.getItem(backupKey(id)) ?? 'null')
  } catch {
    return null
  }
}
const writeBackup = (id: string, b: Backup) => {
  try {
    localStorage.setItem(backupKey(id), JSON.stringify(b))
  } catch {
    /* storage full or blocked */
  }
}
const clearBackup = (id: string) => {
  try {
    localStorage.removeItem(backupKey(id))
  } catch {
    /* ignore */
  }
}

/** ISO ↔ <input type="datetime-local"> value in the browser's time zone. */
const toLocalInput = (iso: string | null) => {
  if (!iso) return ''
  const d = new Date(iso)
  return new Date(d.getTime() - d.getTimezoneOffset() * 60000).toISOString().slice(0, 16)
}

const isGenericName = (name: string) => /^(image|screenshot|img|photo)[\s_-]*\d*\.\w+$/i.test(name)

export default function AdminBlogEditor() {
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  const id = params.get('id') ?? ''
  const token = localStorage.getItem('adminToken') ?? ''

  const [form, setForm] = useState<Form>(emptyForm)
  const [html, setHtml] = useState('')
  const [loading, setLoading] = useState(Boolean(id))
  const [saving, setSaving] = useState(false)
  const [dirty, setDirty] = useState(false)
  const [savedAt, setSavedAt] = useState<Date | null>(null)
  const [notice, setNotice] = useState<Notice>(null)
  const [tab, setTab] = useState<Tab>('post')
  const [panelOpen, setPanelOpen] = useState(true)
  const [imageDialog, setImageDialog] = useState<'content' | 'cover' | null>(null)
  const [findOpen, setFindOpen] = useState(false)
  const [findTerm, setFindTerm] = useState('')
  const [preview, setPreview] = useState(false)
  const [slugTouched, setSlugTouched] = useState(Boolean(id))
  const [tagDraft, setTagDraft] = useState('')
  const [restore, setRestore] = useState<Backup | null>(null)
  const [allPosts, setAllPosts] = useState<BlogPostSummary[]>([])
  const loadedId = useRef<string | null>(null)
  const htmlTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const backupNow = useRef<() => void>(() => {})
  const handleError = useCallback(
    (err: unknown) => {
      if (err instanceof UnauthorizedError) {
        // Session expired: keep the work so it's offered for restore after logging in again.
        backupNow.current()
        localStorage.removeItem('adminToken')
        navigate('/admin')
        return
      }
      setNotice({ type: 'error', text: (err as Error).message })
    },
    [navigate],
  )

  // Images dropped or pasted into the editor upload straight away.
  const uploadFiles = useRef<(files: File[], pos?: number) => void>(() => {})

  const editor = useEditor({
    extensions: buildExtensions(),
    editorProps: {
      attributes: { class: 'blog-content', spellcheck: 'true' },
      handleDrop: (view, event, _slice, moved) => {
        const files = Array.from(event.dataTransfer?.files ?? []).filter((f) => f.type.startsWith('image/'))
        if (moved || !files.length) return false
        event.preventDefault()
        uploadFiles.current(files, view.posAtCoords({ left: event.clientX, top: event.clientY })?.pos)
        return true
      },
      handlePaste: (_view, event) => {
        const files = Array.from(event.clipboardData?.files ?? []).filter((f) => f.type.startsWith('image/'))
        if (!files.length) return false
        uploadFiles.current(files)
        return true
      },
    },
    onUpdate: ({ editor: e }) => {
      setDirty(true)
      if (htmlTimer.current) clearTimeout(htmlTimer.current)
      htmlTimer.current = setTimeout(() => setHtml(e.getHTML()), 300)
    },
  })

  uploadFiles.current = async (files, pos) => {
    if (!editor) return
    for (const file of files) {
      setNotice({ type: 'info', text: `Uploading ${file.name}…` })
      try {
        const { url } = await adminUploadImage(file, token, { maxSize: 2000, quality: 0.85 })
        const attrs = { src: url, alt: isGenericName(file.name) ? '' : altFromFileName(file.name), width: 100, align: 'center' as const }
        if (pos != null) editor.chain().insertContentAt(pos, { type: 'figureImage', attrs }).run()
        else editor.chain().focus().setFigureImage(attrs).run()
        setNotice({ type: 'success', text: 'Image uploaded — click it to resize, align or add alt text.' })
      } catch (err) {
        handleError(err)
      }
    }
  }

  const counts = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      words: e?.storage.characterCount.words() ?? 0,
      chars: e?.storage.characterCount.characters() ?? 0,
    }),
  }) ?? { words: 0, chars: 0 }

  // Load the post (skipped right after creating it — the editor already has it).
  useEffect(() => {
    if (!editor || loadedId.current === (id || 'new')) return
    loadedId.current = id || 'new'
    if (!id) {
      const b = readBackup('')
      if (b && (b.form.title || b.content)) setRestore(b)
      return
    }
    setLoading(true)
    adminGetPost(id, token)
      .then(({ post }) => {
        setForm(formFromPost(post))
        editor.commands.setContent(post.content || '', { emitUpdate: false })
        setHtml(editor.getHTML())
        setSlugTouched(true)
        const b = readBackup(id)
        if (b && b.savedAt > Date.parse(post.updatedAt) && b.content !== post.content) setRestore(b)
      })
      .catch(handleError)
      .finally(() => setLoading(false))
  }, [editor, id, token, handleError])

  // Other posts: keyword cannibalization check + tag/category suggestions.
  useEffect(() => {
    adminListPosts(token).then(({ posts }) => setAllPosts(posts)).catch(() => {})
  }, [token])

  backupNow.current = () => {
    if (dirty && editor) writeBackup(id, { form, content: editor.getHTML(), savedAt: Date.now() })
  }

  // Back up unsaved work locally.
  useEffect(() => {
    if (!dirty) return
    const t = setTimeout(() => writeBackup(id, { form, content: editor?.getHTML() ?? html, savedAt: Date.now() }), 1500)
    return () => clearTimeout(t)
  }, [dirty, form, html, id, editor])

  // Warn before leaving with unsaved changes.
  useEffect(() => {
    if (!dirty) return
    const onBeforeUnload = (e: BeforeUnloadEvent) => e.preventDefault()
    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [dirty])

  useEffect(() => {
    if (notice?.type !== 'success') return
    const t = setTimeout(() => setNotice(null), 4000)
    return () => clearTimeout(t)
  }, [notice])

  const update = (patch: Partial<Form>) => {
    setForm((f) => {
      const next = { ...f, ...patch }
      if (patch.title !== undefined && !slugTouched) next.slug = slugify(patch.title)
      return next
    })
    setDirty(true)
  }

  const save = async (status?: Form['status']) => {
    if (!editor || saving) return
    if (!form.title.trim()) {
      setNotice({ type: 'error', text: 'Add a title before saving.' })
      return
    }
    const nextStatus = status ?? form.status
    const input: BlogPostInput = {
      ...form,
      slug: form.slug || slugify(form.title),
      status: nextStatus,
      publishedAt: nextStatus === 'published' && !form.publishedAt ? new Date().toISOString() : form.publishedAt,
      content: editor.getHTML(),
    }
    setSaving(true)
    try {
      const { post } = await adminSavePost(input, token, id || undefined)
      clearBackup(id)
      setForm(formFromPost(post))
      setSlugTouched(true)
      setDirty(false)
      setSavedAt(new Date())
      const live = post.status === 'published' && post.publishedAt && Date.parse(post.publishedAt) <= Date.now()
      setNotice({
        type: 'success',
        text: post.status === 'draft' ? 'Draft saved.' : live ? (form.status === 'published' ? 'Post updated.' : 'Post published! 🎉') : `Scheduled for ${new Date(post.publishedAt!).toLocaleString()}.`,
      })
      if (!id) {
        loadedId.current = post._id
        setParams({ id: post._id }, { replace: true })
      }
    } catch (err) {
      handleError(err)
    } finally {
      setSaving(false)
    }
  }

  // Ctrl/Cmd+S saves, Ctrl/Cmd+F opens find & replace.
  const saveRef = useRef(save)
  saveRef.current = save
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (!(e.ctrlKey || e.metaKey)) return
      if (e.key.toLowerCase() === 's') {
        e.preventDefault()
        void saveRef.current()
      }
      if (e.key.toLowerCase() === 'f' && !e.shiftKey) {
        e.preventDefault()
        setFindOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const remove = async () => {
    if (!id || !confirm(`Delete “${form.title}” permanently? This cannot be undone.`)) return
    try {
      await adminDeletePost(id, token)
      clearBackup(id)
      setDirty(false)
      navigate('/admin/blog')
    } catch (err) {
      handleError(err)
    }
  }

  const leave = () => {
    if (dirty && !confirm('You have unsaved changes. Leave without saving?')) return
    navigate('/admin/blog')
  }

  const insertImage = (choice: ImageChoice) => {
    if (imageDialog === 'cover') update({ coverImage: { url: choice.url, alt: choice.alt } })
    else editor?.chain().focus().setFigureImage({ src: choice.url, alt: choice.alt, caption: choice.caption, width: choice.width, align: choice.align }).run()
    setImageDialog(null)
  }

  const highlight = (term: string) => {
    setFindTerm(term)
    setFindOpen(true)
  }

  const addTag = (raw: string) => {
    const t = raw.trim().toLowerCase().replace(/^#/, '')
    if (t && !form.tags.includes(t)) update({ tags: [...form.tags, t] })
    setTagDraft('')
  }

  const otherKeywords = useMemo(
    () => allPosts.filter((p) => p._id !== id && p.seo?.focusKeyword).map((p) => ({ keyword: p.seo!.focusKeyword!, title: p.title })),
    [allPosts, id],
  )
  const knownTags = useMemo(() => [...new Set(allPosts.flatMap((p) => p.tags))].filter((t) => !form.tags.includes(t)).sort(), [allPosts, form.tags])
  const knownCategories = useMemo(() => [...new Set(allPosts.map((p) => p.category).filter(Boolean))].sort(), [allPosts])
  const toc = useMemo(() => withHeadingIds(html).toc, [html])
  const seoScore = useMemo(
    () =>
      analyzeSeo({
        title: form.title, slug: form.slug, excerpt: form.excerpt, metaTitle: form.seo.metaTitle, metaDescription: form.seo.metaDescription,
        focusKeyword: form.seo.focusKeyword, coverAlt: form.coverImage.alt, html, otherKeywords,
      }).score,
    [form, html, otherKeywords],
  )

  const scheduled = form.status === 'published' && form.publishedAt && Date.parse(form.publishedAt) > Date.now()
  const readingTime = Math.max(1, Math.round(counts.words / 220))
  const field = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'
  const label = 'text-xs font-bold uppercase tracking-wider text-slate-600'

  if (!editor) return null

  return (
    <div className="h-screen flex flex-col bg-slate-50 text-slate-900">
      {/* Top bar */}
      <header className="flex items-center gap-3 px-4 h-14 bg-white border-b border-slate-200 shrink-0">
        <button onClick={leave} className="p-2 rounded-lg text-slate-500 hover:bg-slate-100 hover:text-slate-900" title="Back to all posts">
          <ArrowLeft size={18} />
        </button>
        <img src="/logo.jpeg" alt="" className="w-8 h-8 rounded-lg" />
        <div className="min-w-0 hidden sm:block">
          <p className="text-sm font-bold truncate max-w-[280px]">{form.title || 'New post'}</p>
          <p className="text-[11px] text-slate-500">
            {saving ? 'Saving…' : dirty ? 'Unsaved changes' : savedAt ? `Saved ${savedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}` : id ? 'All changes saved' : 'Not saved yet'}
          </p>
        </div>
        <span
          className={`ml-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${
            scheduled ? 'bg-amber-100 text-amber-800' : form.status === 'published' ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-700'
          }`}
        >
          {scheduled ? 'Scheduled' : form.status === 'published' ? 'Published' : 'Draft'}
        </span>

        <div className="ml-auto flex items-center gap-2">
          {form.status === 'published' && id && !scheduled && (
            <a href={`/blog/${form.slug}`} target="_blank" rel="noreferrer" className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 hover:text-emerald-700">
              <ExternalLink size={15} /> View
            </a>
          )}
          <button onClick={() => setPreview(true)} className="inline-flex items-center gap-1.5 px-3 py-2 text-sm font-semibold text-slate-600 rounded-lg hover:bg-slate-100">
            <Eye size={16} /> <span className="hidden md:inline">Preview</span>
          </button>
          {form.status === 'published' ? (
            <button onClick={() => save('draft')} disabled={saving} className="hidden md:inline-flex px-3 py-2 text-sm font-semibold text-slate-600 rounded-lg hover:bg-slate-100 disabled:opacity-50">
              Unpublish
            </button>
          ) : (
            <button onClick={() => save('draft')} disabled={saving} className="px-3 py-2 text-sm font-semibold text-slate-700 border border-slate-300 rounded-lg hover:border-emerald-500 disabled:opacity-50">
              Save draft
            </button>
          )}
          <button onClick={() => save('published')} disabled={saving} className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-60">
            {saving ? <Loader2 size={15} className="animate-spin" /> : form.status === 'published' ? <Check size={15} /> : <Send size={15} />}
            {form.status === 'published' ? 'Update' : form.publishedAt && Date.parse(form.publishedAt) > Date.now() ? 'Schedule' : 'Publish'}
          </button>
          <button onClick={() => setPanelOpen((v) => !v)} title="Settings panel" className={`p-2 rounded-lg ${panelOpen ? 'bg-emerald-50 text-emerald-700' : 'text-slate-500 hover:bg-slate-100'}`}>
            <PanelRight size={18} />
          </button>
        </div>
      </header>

      {notice && (
        <div
          className={`flex items-center justify-between gap-3 px-4 py-2 text-sm shrink-0 ${
            notice.type === 'error' ? 'bg-red-50 text-red-800' : notice.type === 'success' ? 'bg-emerald-50 text-emerald-800' : 'bg-blue-50 text-blue-800'
          }`}
        >
          <span>{notice.text}</span>
          <button onClick={() => setNotice(null)} aria-label="Dismiss"><X size={15} /></button>
        </div>
      )}
      {restore && (
        <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2 text-sm bg-amber-50 text-amber-900 shrink-0">
          <span>Unsaved changes from {new Date(restore.savedAt).toLocaleString()} were found in this browser.</span>
          <span className="flex gap-3">
            <button
              onClick={() => {
                setForm(restore.form)
                editor.commands.setContent(restore.content, { emitUpdate: false })
                setHtml(editor.getHTML())
                setDirty(true)
                setRestore(null)
              }}
              className="inline-flex items-center gap-1 font-semibold"
            >
              <RotateCcw size={14} /> Restore
            </button>
            <button
              onClick={() => {
                clearBackup(id)
                setRestore(null)
              }}
              className="font-semibold text-amber-700"
            >
              Discard
            </button>
          </span>
        </div>
      )}

      <div className="flex-1 flex overflow-hidden relative">
        {/* Writing area */}
        <main className="flex-1 overflow-y-auto">
          <div className="sticky top-0 z-30">
            <Toolbar editor={editor} onImage={() => setImageDialog('content')} onFind={() => setFindOpen((v) => !v)} findOpen={findOpen} />
            {findOpen && <FindReplaceBar editor={editor} term={findTerm} onTermChange={setFindTerm} onClose={() => setFindOpen(false)} />}
          </div>

          <div className="max-w-3xl mx-auto px-5 sm:px-8 py-10">
            {loading ? (
              <div className="flex justify-center py-24"><Loader2 className="animate-spin text-emerald-600" size={28} /></div>
            ) : (
              <div className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6 sm:px-12 py-10">
                <textarea
                  value={form.title}
                  onChange={(e) => update({ title: e.target.value.replace(/\n/g, ' ') })}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault()
                      editor.commands.focus('start')
                    }
                  }}
                  rows={Math.max(1, Math.ceil(form.title.length / 34))}
                  placeholder="Article title"
                  className="w-full resize-none text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight text-slate-900 placeholder:text-slate-300 focus:outline-none [field-sizing:content]"
                />
                <div className="mt-6">
                  <BubbleMenu
                    editor={editor}
                    shouldShow={({ state, editor: e }) => !state.selection.empty && !(state.selection instanceof NodeSelection) && !e.isActive('codeBlock')}
                    className="flex items-center gap-0.5 bg-slate-900 text-white rounded-lg shadow-xl p-1"
                  >
                    {[
                      { title: 'Bold', icon: Bold, run: () => editor.chain().focus().toggleBold().run(), active: editor.isActive('bold') },
                      { title: 'Italic', icon: Italic, run: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive('italic') },
                      { title: 'Underline', icon: Underline, run: () => editor.chain().focus().toggleUnderline().run(), active: editor.isActive('underline') },
                      { title: 'Highlight', icon: Highlighter, run: () => editor.chain().focus().toggleHighlight({ color: '#fef08a' }).run(), active: editor.isActive('highlight') },
                      { title: 'Heading 2', icon: Heading2, run: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive('heading', { level: 2 }) },
                      { title: 'Heading 3', icon: Heading3, run: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive('heading', { level: 3 }) },
                    ].map(({ title, icon: Icon, run, active }) => (
                      <button key={title} type="button" title={title} onMouseDown={(e) => e.preventDefault()} onClick={run} className={`p-1.5 rounded-md ${active ? 'bg-emerald-600' : 'hover:bg-slate-700'}`}>
                        <Icon size={15} />
                      </button>
                    ))}
                  </BubbleMenu>
                  <EditorContent editor={editor} />
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Settings panel */}
        {panelOpen && (
          <aside className="w-full sm:w-[380px] shrink-0 border-l border-slate-200 bg-white flex flex-col absolute inset-y-0 right-0 z-40 lg:static shadow-xl lg:shadow-none">
            <div className="flex border-b border-slate-200 shrink-0">
              {([
                ['post', 'Post', FileText],
                ['seo', 'SEO', SearchIcon],
                ['outline', 'Outline', ListTree],
              ] as const).map(([t, name, Icon]) => (
                <button key={t} onClick={() => setTab(t)} className={`flex-1 flex items-center justify-center gap-1.5 py-3 text-sm font-semibold border-b-2 ${tab === t ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>
                  <Icon size={15} /> {name}
                  {t === 'seo' && (
                    <span className={`ml-1 px-1.5 rounded-full text-[10px] font-bold text-white ${seoScore >= 75 ? 'bg-emerald-500' : seoScore >= 50 ? 'bg-amber-500' : 'bg-red-500'}`}>{seoScore}</span>
                  )}
                </button>
              ))}
              <button onClick={() => setPanelOpen(false)} className="lg:hidden px-3 text-slate-400" aria-label="Close panel"><X size={18} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {tab === 'post' && (
                <div className="space-y-6">
                  <label className="block">
                    <span className={label}>URL</span>
                    <div className="mt-1.5 flex items-center border border-slate-300 rounded-lg overflow-hidden focus-within:border-emerald-500">
                      <span className="pl-3 text-xs text-slate-400 whitespace-nowrap">/blog/</span>
                      <input
                        value={form.slug}
                        onChange={(e) => {
                          setSlugTouched(true)
                          update({ slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-') })
                        }}
                        onBlur={() => update({ slug: slugify(form.slug) })}
                        className="flex-1 min-w-0 px-1 py-2 text-sm focus:outline-none"
                      />
                    </div>
                    {form.status === 'published' && id && <p className="mt-1 text-[11px] text-amber-700">Changing the URL of a published post breaks existing links to it.</p>}
                  </label>

                  <label className="block">
                    <span className={label}>Excerpt</span>
                    <textarea value={form.excerpt} onChange={(e) => update({ excerpt: e.target.value.slice(0, 400) })} rows={3} placeholder="A one or two sentence summary, shown on the blog list and below the title." className={`${field} mt-1.5 resize-y`} />
                    <p className="mt-1 text-[11px] text-slate-500 text-right">{form.excerpt.length}/400</p>
                  </label>

                  <div>
                    <span className={label}>Cover image</span>
                    {form.coverImage.url ? (
                      <div className="mt-1.5 space-y-2">
                        <div className="relative group rounded-lg overflow-hidden">
                          <img src={form.coverImage.url} alt={form.coverImage.alt} className="w-full aspect-[16/9] object-cover" />
                          <div className="absolute inset-0 bg-slate-900/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <button onClick={() => setImageDialog('cover')} className="px-3 py-1.5 bg-white text-sm font-semibold rounded-lg">Change</button>
                            <button onClick={() => update({ coverImage: { url: '', alt: '' } })} className="px-3 py-1.5 bg-white text-red-600 text-sm font-semibold rounded-lg">Remove</button>
                          </div>
                        </div>
                        <input value={form.coverImage.alt} onChange={(e) => update({ coverImage: { ...form.coverImage, alt: e.target.value } })} placeholder="Cover alt text" className={field} />
                      </div>
                    ) : (
                      <button onClick={() => setImageDialog('cover')} className="mt-1.5 w-full aspect-[16/9] flex flex-col items-center justify-center gap-2 border-2 border-dashed border-slate-300 rounded-lg text-sm text-slate-500 hover:border-emerald-400 hover:text-emerald-700">
                        <ImagePlus size={24} /> Add a cover image
                        <span className="text-[11px]">Also used when shared on LinkedIn, X and Facebook</span>
                      </button>
                    )}
                  </div>

                  <label className="block">
                    <span className={label}>Category</span>
                    <input value={form.category} onChange={(e) => update({ category: e.target.value })} list="blog-categories" placeholder="e.g. Field Service" className={`${field} mt-1.5`} />
                    <datalist id="blog-categories">{knownCategories.map((c) => <option key={c} value={c} />)}</datalist>
                  </label>

                  <div>
                    <span className={label}>Tags</span>
                    <div className="mt-1.5 flex flex-wrap gap-1.5 p-2 border border-slate-300 rounded-lg focus-within:border-emerald-500">
                      {form.tags.map((t) => (
                        <span key={t} className="inline-flex items-center gap-1 pl-2 pr-1 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-xs font-medium">
                          #{t}
                          <button onClick={() => update({ tags: form.tags.filter((x) => x !== t) })} aria-label={`Remove ${t}`} className="text-emerald-600 hover:text-red-600"><X size={12} /></button>
                        </span>
                      ))}
                      <input
                        value={tagDraft}
                        list="blog-tags"
                        onChange={(e) => (e.target.value.endsWith(',') ? addTag(e.target.value.slice(0, -1)) : setTagDraft(e.target.value))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') {
                            e.preventDefault()
                            addTag(tagDraft)
                          }
                          if (e.key === 'Backspace' && !tagDraft && form.tags.length) update({ tags: form.tags.slice(0, -1) })
                        }}
                        onBlur={() => tagDraft && addTag(tagDraft)}
                        placeholder={form.tags.length ? '' : 'Type a tag, press Enter'}
                        className="flex-1 min-w-[100px] text-sm focus:outline-none px-1"
                      />
                      <datalist id="blog-tags">{knownTags.map((t) => <option key={t} value={t} />)}</datalist>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <label className="block">
                      <span className={label}>Author</span>
                      <input value={form.author.name} onChange={(e) => update({ author: { ...form.author, name: e.target.value } })} className={`${field} mt-1.5`} />
                    </label>
                    <label className="block">
                      <span className={label}>Role</span>
                      <input value={form.author.role} onChange={(e) => update({ author: { ...form.author, role: e.target.value } })} placeholder="e.g. Lead Engineer" className={`${field} mt-1.5`} />
                    </label>
                  </div>

                  <label className="block">
                    <span className={`${label} flex items-center gap-1.5`}><CalendarClock size={13} /> Publish date</span>
                    <input
                      type="datetime-local"
                      value={toLocalInput(form.publishedAt)}
                      onChange={(e) => update({ publishedAt: e.target.value ? new Date(e.target.value).toISOString() : null })}
                      className={`${field} mt-1.5`}
                    />
                    <p className="mt-1 text-[11px] text-slate-500">Leave empty to publish now. A future date schedules the post — it goes live automatically.</p>
                  </label>

                  <label className="flex items-start gap-2.5 text-sm text-slate-700">
                    <input type="checkbox" checked={form.featured} onChange={(e) => update({ featured: e.target.checked })} className="mt-0.5 accent-emerald-600" />
                    <span className="inline-flex items-center gap-1"><Star size={14} className="text-amber-500" /> Feature at the top of the blog</span>
                  </label>

                  {id && (
                    <button onClick={remove} className="w-full inline-flex items-center justify-center gap-2 py-2.5 border border-red-200 text-red-600 text-sm font-semibold rounded-lg hover:bg-red-50">
                      <Trash2 size={15} /> Delete post
                    </button>
                  )}
                </div>
              )}

              {tab === 'seo' && (
                <SeoPanel
                  seo={form.seo}
                  onChange={(seo) => update({ seo })}
                  onHighlight={highlight}
                  title={form.title}
                  slug={form.slug}
                  excerpt={form.excerpt}
                  coverAlt={form.coverImage.alt}
                  html={html}
                  otherKeywords={otherKeywords}
                />
              )}

              {tab === 'outline' && (
                <div>
                  <p className="text-xs text-slate-500 mb-4">H2 and H3 headings become the article’s table of contents. Click one to jump to it.</p>
                  {toc.length === 0 ? (
                    <p className="text-sm text-slate-500">No subheadings yet. Use “Heading 2” in the toolbar to structure the article.</p>
                  ) : (
                    <ol className="space-y-1">
                      {toc.map((item, i) => (
                        <li key={item.id}>
                          <button
                            onClick={() => editor.view.dom.querySelectorAll('h2, h3')[i]?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
                            className={`w-full text-left text-sm py-1.5 rounded-md hover:bg-emerald-50 hover:text-emerald-800 ${item.level === 3 ? 'pl-6 text-slate-600' : 'pl-2 font-semibold text-slate-800'}`}
                          >
                            <span className="text-[10px] font-bold text-slate-400 mr-2">H{item.level}</span>
                            {item.text || <em className="text-slate-400">Empty heading</em>}
                          </button>
                        </li>
                      ))}
                    </ol>
                  )}
                  {toc[0]?.level === 3 && <p className="mt-4 text-xs text-amber-700">The first subheading is an H3 — start sections with an H2.</p>}
                </div>
              )}
            </div>
          </aside>
        )}
      </div>

      {/* Status bar */}
      <footer className="flex items-center gap-4 px-4 h-8 bg-white border-t border-slate-200 text-[11px] text-slate-500 shrink-0">
        <span>{counts.words.toLocaleString()} words</span>
        <span>{counts.chars.toLocaleString()} characters</span>
        <span>{readingTime} min read</span>
        <span className="ml-auto hidden sm:inline">Ctrl+S save · Ctrl+F find · drop or paste images into the article</span>
      </footer>

      {imageDialog && <ImageDialog token={token} mode={imageDialog} onInsert={insertImage} onClose={() => setImageDialog(null)} />}

      {preview && (
        <div className="fixed inset-0 z-[90] bg-white overflow-y-auto">
          <div className="sticky top-0 z-10 flex items-center justify-between px-5 py-3 bg-slate-900 text-white">
            <span className="text-sm font-semibold">Preview — how the post will look on the site</span>
            <button onClick={() => setPreview(false)} className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/10 rounded-lg text-sm font-semibold hover:bg-white/20">
              <X size={15} /> Close preview
            </button>
          </div>
          <div className="px-5 sm:px-8 py-14">
            <BlogArticle preview post={{ ...form, content: editor.getHTML(), readingTime }} />
          </div>
        </div>
      )}
    </div>
  )
}
