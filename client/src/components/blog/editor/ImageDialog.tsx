import { useEffect, useRef, useState } from 'react'
import { ImagePlus, Link2, Loader2, Images, Trash2, UploadCloud, X } from 'lucide-react'
import { adminDeleteImage, adminListImages, adminUploadImage, blogImageUrl } from '../../../services/blogService'
import { altFromFileName } from '../../../lib/imageResize'
import type { BlogImage } from '../../../types/blog'
import type { ImageAlign } from './extensions'

export interface ImageChoice {
  url: string
  alt: string
  caption: string
  width: number
  align: ImageAlign
}

interface ImageDialogProps {
  token: string
  /** 'cover' hides the layout options (width, alignment, caption). */
  mode: 'content' | 'cover'
  onInsert: (choice: ImageChoice) => void
  onClose: () => void
}

type Tab = 'upload' | 'library' | 'url'

const SIZES = [
  { value: 2000, label: 'Large — 2000px (recommended)' },
  { value: 1600, label: 'Medium — 1600px' },
  { value: 1200, label: 'Small — 1200px' },
  { value: 800, label: 'Thumbnail — 800px' },
  { value: 0, label: 'Original size' },
]

const formatBytes = (n: number) => (n > 1024 * 1024 ? `${(n / 1024 / 1024).toFixed(1)} MB` : `${Math.round(n / 1024)} KB`)

export default function ImageDialog({ token, mode, onInsert, onClose }: ImageDialogProps) {
  const [tab, setTab] = useState<Tab>('upload')
  const [file, setFile] = useState<File | null>(null)
  const [preview, setPreview] = useState('')
  const [selectedUrl, setSelectedUrl] = useState('')
  const [urlInput, setUrlInput] = useState('')
  const [alt, setAlt] = useState('')
  const [caption, setCaption] = useState('')
  const [width, setWidth] = useState(100)
  const [align, setAlign] = useState<ImageAlign>('center')
  const [maxSize, setMaxSize] = useState(2000)
  const [quality, setQuality] = useState(85)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [library, setLibrary] = useState<BlogImage[] | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const fileRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  useEffect(() => () => {
    if (preview) URL.revokeObjectURL(preview)
  }, [preview])

  useEffect(() => {
    if (tab !== 'library' || library) return
    adminListImages(token)
      .then(({ images }) => setLibrary(images))
      .catch((err) => setError(err.message))
  }, [tab, library, token])

  const pickFile = (f: File | undefined) => {
    if (!f) return
    if (!/^image\/(jpeg|png|webp|gif)$/.test(f.type)) {
      setError('Please choose a JPEG, PNG, WebP or GIF image.')
      return
    }
    setError('')
    setFile(f)
    setPreview(URL.createObjectURL(f))
    if (!alt) setAlt(altFromFileName(f.name))
  }

  const removeFromLibrary = async (img: BlogImage) => {
    if (!confirm('Delete this image from the media library? Posts that use it will show a broken image.')) return
    try {
      await adminDeleteImage(img._id, token)
      setLibrary((list) => list?.filter((i) => i._id !== img._id) ?? null)
      if (selectedUrl === blogImageUrl(img._id)) setSelectedUrl('')
    } catch (err) {
      setError((err as Error).message)
    }
  }

  const submit = async () => {
    setError('')
    let url = tab === 'library' ? selectedUrl : tab === 'url' ? urlInput.trim() : ''
    if (tab === 'url' && !/^https:\/\//.test(url)) {
      setError('Enter a full https:// image URL.')
      return
    }
    if (tab === 'upload') {
      if (!file) {
        setError('Choose an image to upload.')
        return
      }
      setBusy(true)
      try {
        url = (await adminUploadImage(file, token, { maxSize, quality: quality / 100 })).url
      } catch (err) {
        setError((err as Error).message)
        setBusy(false)
        return
      }
      setBusy(false)
    }
    if (!url) {
      setError('Select an image.')
      return
    }
    onInsert({ url, alt: alt.trim(), caption: caption.trim(), width: align === 'wide' ? 100 : width, align })
  }

  const tabBtn = (t: Tab, label: string, Icon: typeof ImagePlus) => (
    <button
      type="button"
      onClick={() => {
        setTab(t)
        setError('')
      }}
      className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border-b-2 transition-colors ${tab === t ? 'border-emerald-600 text-emerald-700' : 'border-transparent text-slate-500 hover:text-slate-800'}`}
    >
      <Icon size={16} /> {label}
    </button>
  )

  const input = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 backdrop-blur-sm p-4" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[92vh] flex flex-col overflow-hidden" role="dialog" aria-modal aria-label={mode === 'cover' ? 'Cover image' : 'Insert image'}>
        <div className="flex items-center justify-between px-6 pt-5">
          <h2 className="text-lg font-bold text-slate-900">{mode === 'cover' ? 'Cover image' : 'Insert image'}</h2>
          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700" aria-label="Close">
            <X size={20} />
          </button>
        </div>
        <div className="flex gap-1 px-4 border-b border-slate-200 mt-2">
          {tabBtn('upload', 'Upload', UploadCloud)}
          {tabBtn('library', 'Media library', Images)}
          {tabBtn('url', 'From URL', Link2)}
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {tab === 'upload' && (
            <>
              <div
                onClick={() => fileRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault()
                  setDragOver(true)
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={(e) => {
                  e.preventDefault()
                  setDragOver(false)
                  pickFile(e.dataTransfer.files[0])
                }}
                className={`relative flex flex-col items-center justify-center min-h-[200px] border-2 border-dashed rounded-xl cursor-pointer transition-colors overflow-hidden ${dragOver ? 'border-emerald-500 bg-emerald-50' : 'border-slate-300 hover:border-emerald-400 bg-slate-50'}`}
              >
                {preview ? (
                  <img src={preview} alt="" className="max-h-64 object-contain" />
                ) : (
                  <>
                    <UploadCloud size={36} className="text-emerald-600" />
                    <p className="mt-3 text-sm font-semibold text-slate-700">Drop an image here, or click to browse</p>
                    <p className="text-xs text-slate-500 mt-1">JPEG, PNG, WebP or GIF — resized and converted to WebP automatically</p>
                  </>
                )}
                <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden onChange={(e) => pickFile(e.target.files?.[0])} />
              </div>
              {file && (
                <p className="text-xs text-slate-500">
                  {file.name} · {formatBytes(file.size)} {file.type === 'image/gif' && '· GIFs keep their animation and are uploaded as-is'}
                </p>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">Resize to (longest side)</span>
                  <select value={maxSize} onChange={(e) => setMaxSize(Number(e.target.value))} className={`${input} mt-1 bg-white`}>
                    {SIZES.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">Compression quality: {quality}%</span>
                  <input type="range" min={50} max={100} step={5} value={quality} onChange={(e) => setQuality(Number(e.target.value))} className="mt-3 w-full accent-emerald-600" />
                </label>
              </div>
            </>
          )}

          {tab === 'library' &&
            (library === null ? (
              <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-emerald-600" />
              </div>
            ) : library.length === 0 ? (
              <p className="text-center text-sm text-slate-500 py-12">No images uploaded yet.</p>
            ) : (
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                {library.map((img) => {
                  const url = blogImageUrl(img._id)
                  return (
                    <div key={img._id} className={`group relative aspect-square rounded-lg overflow-hidden border-2 cursor-pointer ${selectedUrl === url ? 'border-emerald-600 ring-2 ring-emerald-500/30' : 'border-transparent hover:border-emerald-300'}`}>
                      <img
                        src={url}
                        alt={img.name}
                        loading="lazy"
                        onClick={() => {
                          setSelectedUrl(url)
                          if (!alt) setAlt(altFromFileName(img.name))
                        }}
                        className="w-full h-full object-cover bg-slate-100"
                      />
                      <div className="absolute bottom-0 inset-x-0 bg-slate-900/70 text-white text-[10px] px-1.5 py-1 truncate pointer-events-none">
                        {img.width && img.height ? `${img.width}×${img.height} · ` : ''}
                        {formatBytes(img.size)}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFromLibrary(img)}
                        className="absolute top-1 right-1 p-1 rounded bg-white/90 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="Delete image"
                      >
                        <Trash2 size={13} />
                      </button>
                    </div>
                  )
                })}
              </div>
            ))}

          {tab === 'url' && (
            <label className="block">
              <span className="text-xs font-semibold text-slate-600">Image URL</span>
              <input value={urlInput} onChange={(e) => setUrlInput(e.target.value)} placeholder="https://…" className={`${input} mt-1`} />
              {/^https:\/\//.test(urlInput) && <img src={urlInput} alt="" className="mt-3 max-h-48 rounded-lg" />}
            </label>
          )}

          <div className="grid sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
            <label className="block sm:col-span-2">
              <span className="text-xs font-semibold text-slate-600">Alt text <span className="text-amber-600">(important for SEO and accessibility)</span></span>
              <input value={alt} onChange={(e) => setAlt(e.target.value)} placeholder="Describe what the image shows" className={`${input} mt-1`} />
            </label>
            {mode === 'content' && (
              <>
                <label className="block sm:col-span-2">
                  <span className="text-xs font-semibold text-slate-600">Caption (optional)</span>
                  <input value={caption} onChange={(e) => setCaption(e.target.value)} className={`${input} mt-1`} />
                </label>
                <div>
                  <span className="text-xs font-semibold text-slate-600">Position</span>
                  <div className="mt-1 grid grid-cols-4 gap-1">
                    {(['left', 'center', 'right', 'wide'] as const).map((a) => (
                      <button key={a} type="button" onClick={() => setAlign(a)} className={`py-2 rounded-lg text-xs font-semibold capitalize border ${align === a ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 text-slate-600 hover:border-emerald-400'}`}>
                        {a === 'wide' ? 'Full' : a}
                      </button>
                    ))}
                  </div>
                </div>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600">Display width: {align === 'wide' ? 100 : width}%</span>
                  <input type="range" min={10} max={100} step={5} value={align === 'wide' ? 100 : width} disabled={align === 'wide'} onChange={(e) => setWidth(Number(e.target.value))} className="mt-3 w-full accent-emerald-600" />
                </label>
              </>
            )}
          </div>
          {error && <p className="text-sm text-red-600">{error}</p>}
        </div>

        <div className="flex justify-end gap-3 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button type="button" onClick={onClose} className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900">Cancel</button>
          <button type="button" onClick={submit} disabled={busy} className="inline-flex items-center gap-2 px-5 py-2 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700 disabled:opacity-60">
            {busy && <Loader2 size={15} className="animate-spin" />} {busy ? 'Uploading…' : mode === 'cover' ? 'Use as cover' : 'Insert image'}
          </button>
        </div>
      </div>
    </div>
  )
}
