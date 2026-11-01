import { useRef, useState } from 'react'
import { NodeViewWrapper, type NodeViewProps } from '@tiptap/react'
import { AlignCenter, AlignLeft, AlignRight, AlertTriangle, Loader2, Maximize2, RefreshCw, Trash2, Type } from 'lucide-react'
import type { ImageAlign } from './extensions'
import { adminUploadImage } from '../../../services/blogService'

const ALIGNS: { value: ImageAlign; label: string; icon: typeof AlignLeft }[] = [
  { value: 'left', label: 'Float left (text wraps)', icon: AlignLeft },
  { value: 'center', label: 'Centre', icon: AlignCenter },
  { value: 'right', label: 'Float right (text wraps)', icon: AlignRight },
  { value: 'wide', label: 'Full width', icon: Maximize2 },
]
const WIDTHS = [25, 33, 50, 75, 100]

/** Editor view of an image: drag the side handles to resize; controls show when selected. */
export default function ImageNodeView({ node, updateAttributes, deleteNode, selected, editor }: NodeViewProps) {
  const { src, alt, caption, width, align } = node.attrs as { src: string; alt: string; caption: string; width: number; align: ImageAlign }
  const figureRef = useRef<HTMLElement>(null)
  const fileRef = useRef<HTMLInputElement>(null)
  const [editingText, setEditingText] = useState(false)
  const [resizing, setResizing] = useState(false)
  const [replacing, setReplacing] = useState(false)
  const editable = editor.isEditable
  const showControls = editable && (selected || editingText)

  const startResize = (e: React.PointerEvent, side: 'left' | 'right') => {
    e.preventDefault()
    const figure = figureRef.current
    if (!figure) return
    const parentWidth = editor.view.dom.clientWidth
    const startX = e.clientX
    const startWidth = figure.getBoundingClientRect().width
    // A centred image grows on both sides, so it follows the pointer at 2×.
    const factor = (side === 'left' ? -1 : 1) * (align === 'center' ? 2 : 1)
    setResizing(true)
    const onMove = (ev: PointerEvent) => {
      const px = startWidth + (ev.clientX - startX) * factor
      updateAttributes({ width: Math.max(10, Math.min(100, Math.round((px / parentWidth) * 100))), ...(align === 'wide' ? { align: 'center' } : {}) })
    }
    const onUp = () => {
      setResizing(false)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerup', onUp)
    }
    window.addEventListener('pointermove', onMove)
    window.addEventListener('pointerup', onUp)
  }

  const replace = async (file: File | undefined) => {
    const token = localStorage.getItem('adminToken')
    if (!file || !token) return
    setReplacing(true)
    try {
      const { url } = await adminUploadImage(file, token, { maxSize: 2000, quality: 0.85 })
      updateAttributes({ src: url })
    } catch (err) {
      alert((err as Error).message)
    } finally {
      setReplacing(false)
    }
  }

  const btn = (active: boolean) =>
    `p-1.5 rounded-md transition-colors ${active ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:bg-slate-100'}`

  return (
    <NodeViewWrapper
      as="figure"
      ref={figureRef}
      className={`blog-figure align-${align} ${selected ? 'is-selected' : ''} relative`}
      style={{ width: `${width}%` }}
      data-align={align}
    >
      <div className="relative group">
        <img src={src} alt={alt} draggable={false} data-drag-handle className={`cursor-grab ${replacing ? 'opacity-40' : ''}`} />
        {replacing && <Loader2 className="absolute inset-0 m-auto animate-spin text-emerald-600" size={32} />}

        {editable && !alt && (
          <span className="absolute bottom-2 left-2 inline-flex items-center gap-1 px-2 py-1 rounded bg-amber-500 text-white text-[11px] font-semibold pointer-events-none">
            <AlertTriangle size={12} /> Missing alt text
          </span>
        )}

        {editable && (
          <div data-image-controls>
            {(['left', 'right'] as const).map((side) => (
              <span
                key={side}
                onPointerDown={(e) => startResize(e, side)}
                title="Drag to resize"
                className={`absolute top-1/2 -translate-y-1/2 ${side === 'left' ? '-left-1.5' : '-right-1.5'} w-3 h-14 rounded-full bg-white border-2 border-emerald-600 shadow cursor-ew-resize transition-opacity ${
                  selected || resizing ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
            ))}
            {resizing && (
              <span className="absolute top-2 right-2 px-2 py-1 rounded bg-slate-900/80 text-white text-xs font-semibold">{width}%</span>
            )}
          </div>
        )}

        {showControls && (
          <div data-image-controls contentEditable={false} className="absolute top-2 left-2 z-20 flex flex-wrap items-center gap-0.5 bg-white rounded-lg shadow-lg border border-slate-200 p-1 max-w-[calc(100%-1rem)]">
            {ALIGNS.map(({ value, label, icon: Icon }) => (
              <button key={value} type="button" title={label} onClick={() => updateAttributes({ align: value, ...(value === 'wide' ? { width: 100 } : {}) })} className={btn(align === value)}>
                <Icon size={15} />
              </button>
            ))}
            <span className="w-px h-5 bg-slate-200 mx-1" />
            {WIDTHS.map((w) => (
              <button key={w} type="button" title={`${w}% width`} onClick={() => updateAttributes({ width: w })} className={`${btn(width === w)} text-[11px] font-bold px-2`}>
                {w}%
              </button>
            ))}
            <span className="w-px h-5 bg-slate-200 mx-1" />
            <button type="button" title="Alt text & caption" onClick={() => setEditingText((v) => !v)} className={btn(editingText)}>
              <Type size={15} />
            </button>
            <button type="button" title="Replace image" onClick={() => fileRef.current?.click()} className={btn(false)}>
              <RefreshCw size={15} />
            </button>
            <button type="button" title="Remove image" onClick={() => deleteNode()} className="p-1.5 rounded-md text-red-600 hover:bg-red-50">
              <Trash2 size={15} />
            </button>
            <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/gif" hidden onChange={(e) => replace(e.target.files?.[0])} />
          </div>
        )}
      </div>

      {editingText && editable && (
        <div data-image-controls contentEditable={false} className="mt-2 p-3 rounded-lg border border-slate-200 bg-slate-50 space-y-2 text-sm not-italic">
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Alt text <span className="font-normal text-slate-400">— describes the image for search engines and screen readers</span></span>
            <input value={alt} onChange={(e) => updateAttributes({ alt: e.target.value })} className="mt-1 w-full px-2.5 py-1.5 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-emerald-500" placeholder="e.g. Technician scheduling jobs on a tablet" />
          </label>
          <label className="block">
            <span className="text-xs font-semibold text-slate-600">Caption <span className="font-normal text-slate-400">(optional, shown under the image)</span></span>
            <input value={caption} onChange={(e) => updateAttributes({ caption: e.target.value })} className="mt-1 w-full px-2.5 py-1.5 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-emerald-500" />
          </label>
          <button type="button" onClick={() => setEditingText(false)} className="text-xs font-semibold text-emerald-700">Done</button>
        </div>
      )}
      {!editingText && caption && <figcaption>{caption}</figcaption>}
    </NodeViewWrapper>
  )
}
