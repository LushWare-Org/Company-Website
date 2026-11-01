import { useEffect, useRef, useState, type ReactNode } from 'react'
import { useEditorState, type Editor } from '@tiptap/react'
import {
  AlignCenter, AlignJustify, AlignLeft, AlignRight, Baseline, Bold, Code, Code2, Columns3, Eraser, Highlighter, ImagePlus,
  IndentDecrease, IndentIncrease, Italic, Link2, List, ListChecks, ListOrdered, Merge, Minus, Quote, Redo2, RemoveFormatting,
  Rows3, Search, SplitSquareHorizontal, Strikethrough, Subscript as SubIcon, Superscript as SupIcon, Table2, Trash2, Underline,
  Undo2, Unlink, Youtube, MessageSquareWarning,
} from 'lucide-react'
import type { CalloutVariant } from './extensions'

const TEXT_COLORS = ['#0f172a', '#475569', '#047857', '#059669', '#1d4ed8', '#7c3aed', '#be123c', '#c2410c', '#a16207']
const HIGHLIGHTS = ['#fef08a', '#bbf7d0', '#bfdbfe', '#fbcfe8', '#fed7aa', '#e9d5ff']

function Btn({ onClick, active, disabled, title, children }: { onClick: () => void; active?: boolean; disabled?: boolean; title: string; children: ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={active}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()}
      onClick={onClick}
      className={`h-8 min-w-8 px-1.5 inline-flex items-center justify-center rounded-md transition-colors disabled:opacity-30 disabled:pointer-events-none ${
        active ? 'bg-emerald-100 text-emerald-800' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
      }`}
    >
      {children}
    </button>
  )
}

const Sep = () => <span className="w-px h-6 bg-slate-200 mx-1 shrink-0" />

/** A toolbar button that opens a small panel; closes on outside click. */
function Pop({ icon, title, active, children }: { icon: ReactNode; title: string; active?: boolean; children: (close: () => void) => ReactNode }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!open) return
    const onDown = (e: MouseEvent) => !ref.current?.contains(e.target as Node) && setOpen(false)
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [open])
  return (
    <div ref={ref} className="relative">
      <Btn title={title} active={active || open} onClick={() => setOpen((v) => !v)}>
        {icon}
      </Btn>
      {open && <div className="absolute left-0 top-full mt-1 z-40 bg-white border border-slate-200 rounded-xl shadow-xl p-3 min-w-[220px]">{children(() => setOpen(false))}</div>}
    </div>
  )
}

function LinkPanel({ editor, close }: { editor: Editor; close: () => void }) {
  const current = editor.getAttributes('link') as { href?: string; target?: string | null; rel?: string | null }
  const [href, setHref] = useState(current.href ?? '')
  const [newTab, setNewTab] = useState(current.target === '_blank')
  const [nofollow, setNofollow] = useState(Boolean(current.rel?.includes('nofollow')))

  const apply = () => {
    let url = href.trim()
    if (!url) {
      editor.chain().focus().extendMarkRange('link').unsetLink().run()
      return close()
    }
    if (!/^(https?:\/\/|mailto:|tel:|\/|#)/.test(url)) url = `https://${url}`
    const attrs = { href: url, target: newTab ? '_blank' : null, rel: [nofollow && 'nofollow', newTab && 'noopener noreferrer'].filter(Boolean).join(' ') || null }
    if (editor.state.selection.empty && !editor.isActive('link')) {
      editor.chain().focus().insertContent({ type: 'text', text: url, marks: [{ type: 'link', attrs }] }).run()
    } else {
      editor.chain().focus().extendMarkRange('link').setLink(attrs).run()
    }
    close()
  }

  return (
    <div className="w-72 space-y-2.5">
      <input
        autoFocus
        value={href}
        onChange={(e) => setHref(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), apply())}
        placeholder="https://… or /solutions/…"
        className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500"
      />
      <p className="text-[11px] text-slate-500">Use a path like /blog/… or /solutions/… for internal links.</p>
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={newTab} onChange={(e) => setNewTab(e.target.checked)} className="accent-emerald-600" /> Open in a new tab
      </label>
      <label className="flex items-center gap-2 text-sm text-slate-700">
        <input type="checkbox" checked={nofollow} onChange={(e) => setNofollow(e.target.checked)} className="accent-emerald-600" /> nofollow (sponsored / untrusted)
      </label>
      <div className="flex justify-between pt-1">
        {current.href ? (
          <button type="button" onClick={() => (editor.chain().focus().extendMarkRange('link').unsetLink().run(), close())} className="inline-flex items-center gap-1 text-sm font-semibold text-red-600">
            <Unlink size={14} /> Remove
          </button>
        ) : (
          <span />
        )}
        <button type="button" onClick={apply} className="px-4 py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700">
          Apply
        </button>
      </div>
    </div>
  )
}

function YoutubePanel({ editor, close }: { editor: Editor; close: () => void }) {
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')
  const insert = () => {
    if (!editor.chain().focus().setYoutubeVideo({ src: url.trim() }).run()) return setError('Paste a valid YouTube link.')
    close()
  }
  return (
    <div className="w-72 space-y-2">
      <input autoFocus value={url} onChange={(e) => setUrl(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && (e.preventDefault(), insert())} placeholder="https://www.youtube.com/watch?v=…" className="w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500" />
      {error && <p className="text-xs text-red-600">{error}</p>}
      <button type="button" onClick={insert} className="w-full py-1.5 bg-emerald-600 text-white text-sm font-semibold rounded-lg hover:bg-emerald-700">Embed video</button>
    </div>
  )
}

function TablePanel({ editor, close }: { editor: Editor; close: () => void }) {
  const [hover, setHover] = useState<[number, number]>([0, 0])
  return (
    <div>
      <p className="text-xs font-semibold text-slate-600 mb-2">{hover[0] ? `${hover[0]} × ${hover[1]} table` : 'Insert table'}</p>
      <div className="grid grid-cols-8 gap-1" onMouseLeave={() => setHover([0, 0])}>
        {Array.from({ length: 64 }, (_, i) => {
          const r = Math.floor(i / 8) + 1
          const c = (i % 8) + 1
          return (
            <button
              key={i}
              type="button"
              onMouseEnter={() => setHover([r, c])}
              onClick={() => (editor.chain().focus().insertTable({ rows: r, cols: c, withHeaderRow: true }).run(), close())}
              className={`w-5 h-5 rounded-sm border ${r <= hover[0] && c <= hover[1] ? 'bg-emerald-200 border-emerald-500' : 'border-slate-300'}`}
            />
          )
        })}
      </div>
    </div>
  )
}

interface ToolbarProps {
  editor: Editor
  onImage: () => void
  onFind: () => void
  findOpen: boolean
}

export default function Toolbar({ editor, onImage, onFind, findOpen }: ToolbarProps) {
  const s = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      block: e.isActive('heading', { level: 2 }) ? 'h2' : e.isActive('heading', { level: 3 }) ? 'h3' : e.isActive('heading', { level: 4 }) ? 'h4' : e.isActive('codeBlock') ? 'code' : 'p',
      bold: e.isActive('bold'),
      italic: e.isActive('italic'),
      underline: e.isActive('underline'),
      strike: e.isActive('strike'),
      code: e.isActive('code'),
      sub: e.isActive('subscript'),
      sup: e.isActive('superscript'),
      link: e.isActive('link'),
      highlight: e.isActive('highlight'),
      color: (e.getAttributes('textStyle').color as string | undefined) ?? '',
      align: (['center', 'right', 'justify'] as const).find((a) => e.isActive({ textAlign: a })) ?? 'left',
      bullet: e.isActive('bulletList'),
      ordered: e.isActive('orderedList'),
      task: e.isActive('taskList'),
      quote: e.isActive('blockquote'),
      callout: e.isActive('callout'),
      table: e.isActive('table'),
      listItem: e.isActive('listItem') || e.isActive('taskItem'),
      canUndo: e.can().undo(),
      canRedo: e.can().redo(),
      canMerge: e.can().mergeCells(),
      canSplit: e.can().splitCell(),
    }),
  })

  const chain = () => editor.chain().focus()
  const listItemType = editor.isActive('taskItem') ? 'taskItem' : 'listItem'

  const setBlock = (value: string) => {
    if (value === 'p') chain().setParagraph().run()
    else if (value === 'code') chain().toggleCodeBlock().run()
    else chain().toggleHeading({ level: Number(value[1]) as 2 | 3 | 4 }).run()
  }

  const callout = (variant: CalloutVariant, label: string, cls: string, close: () => void) => (
    <button type="button" onClick={() => (chain().toggleCallout(variant).run(), close())} className={`w-full text-left px-3 py-2 rounded-lg text-sm font-medium border ${cls}`}>
      {label}
    </button>
  )

  return (
    <div className="border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="flex flex-wrap items-center gap-0.5 px-3 py-1.5">
        <Btn title="Undo (Ctrl+Z)" disabled={!s.canUndo} onClick={() => chain().undo().run()}><Undo2 size={16} /></Btn>
        <Btn title="Redo (Ctrl+Shift+Z)" disabled={!s.canRedo} onClick={() => chain().redo().run()}><Redo2 size={16} /></Btn>
        <Sep />
        <select
          value={s.block}
          onChange={(e) => setBlock(e.target.value)}
          title="Text style"
          className="h-8 px-2 text-sm font-medium text-slate-700 bg-transparent border border-slate-200 rounded-md hover:border-slate-300 focus:outline-none focus:border-emerald-500"
        >
          <option value="p">Paragraph</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
          <option value="code">Code block</option>
        </select>
        <Sep />
        <Btn title="Bold (Ctrl+B)" active={s.bold} onClick={() => chain().toggleBold().run()}><Bold size={16} /></Btn>
        <Btn title="Italic (Ctrl+I)" active={s.italic} onClick={() => chain().toggleItalic().run()}><Italic size={16} /></Btn>
        <Btn title="Underline (Ctrl+U)" active={s.underline} onClick={() => chain().toggleUnderline().run()}><Underline size={16} /></Btn>
        <Btn title="Strikethrough" active={s.strike} onClick={() => chain().toggleStrike().run()}><Strikethrough size={16} /></Btn>
        <Btn title="Inline code" active={s.code} onClick={() => chain().toggleCode().run()}><Code size={16} /></Btn>
        <Btn title="Subscript" active={s.sub} onClick={() => chain().toggleSubscript().run()}><SubIcon size={16} /></Btn>
        <Btn title="Superscript" active={s.sup} onClick={() => chain().toggleSuperscript().run()}><SupIcon size={16} /></Btn>
        <Pop title="Text colour" active={Boolean(s.color)} icon={<Baseline size={16} style={s.color ? { color: s.color } : undefined} />}>
          {(close) => (
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Text colour</p>
              <div className="grid grid-cols-5 gap-1.5">
                {TEXT_COLORS.map((c) => (
                  <button key={c} type="button" title={c} onClick={() => (chain().setColor(c).run(), close())} className={`w-7 h-7 rounded-md border-2 ${s.color === c ? 'border-emerald-500' : 'border-white ring-1 ring-slate-200'}`} style={{ background: c }} />
                ))}
                <label title="Custom colour" className="w-7 h-7 rounded-md ring-1 ring-slate-200 overflow-hidden cursor-pointer bg-[conic-gradient(red,yellow,lime,aqua,blue,magenta,red)]">
                  <input type="color" className="opacity-0 w-full h-full cursor-pointer" onChange={(e) => chain().setColor(e.target.value).run()} />
                </label>
              </div>
              <button type="button" onClick={() => (chain().unsetColor().run(), close())} className="mt-2 text-xs font-semibold text-slate-500 hover:text-slate-900">Reset colour</button>
            </div>
          )}
        </Pop>
        <Pop title="Highlight" active={s.highlight} icon={<Highlighter size={16} />}>
          {(close) => (
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Highlight</p>
              <div className="flex gap-1.5">
                {HIGHLIGHTS.map((c) => (
                  <button key={c} type="button" onClick={() => (chain().toggleHighlight({ color: c }).run(), close())} className="w-7 h-7 rounded-md ring-1 ring-slate-200" style={{ background: c }} />
                ))}
              </div>
              <button type="button" onClick={() => (chain().unsetHighlight().run(), close())} className="mt-2 text-xs font-semibold text-slate-500 hover:text-slate-900">Remove highlight</button>
            </div>
          )}
        </Pop>
        <Sep />
        <Btn title="Align left" active={s.align === 'left'} onClick={() => chain().setTextAlign('left').run()}><AlignLeft size={16} /></Btn>
        <Btn title="Align centre" active={s.align === 'center'} onClick={() => chain().setTextAlign('center').run()}><AlignCenter size={16} /></Btn>
        <Btn title="Align right" active={s.align === 'right'} onClick={() => chain().setTextAlign('right').run()}><AlignRight size={16} /></Btn>
        <Btn title="Justify" active={s.align === 'justify'} onClick={() => chain().setTextAlign('justify').run()}><AlignJustify size={16} /></Btn>
        <Sep />
        <Btn title="Bulleted list" active={s.bullet} onClick={() => chain().toggleBulletList().run()}><List size={16} /></Btn>
        <Btn title="Numbered list" active={s.ordered} onClick={() => chain().toggleOrderedList().run()}><ListOrdered size={16} /></Btn>
        <Btn title="Checklist" active={s.task} onClick={() => chain().toggleTaskList().run()}><ListChecks size={16} /></Btn>
        <Btn title="Indent list item" disabled={!s.listItem} onClick={() => chain().sinkListItem(listItemType).run()}><IndentIncrease size={16} /></Btn>
        <Btn title="Outdent list item" disabled={!s.listItem} onClick={() => chain().liftListItem(listItemType).run()}><IndentDecrease size={16} /></Btn>
        <Btn title="Quote" active={s.quote} onClick={() => chain().toggleBlockquote().run()}><Quote size={16} /></Btn>
        <Pop title="Callout box" active={s.callout} icon={<MessageSquareWarning size={16} />}>
          {(close) => (
            <div className="space-y-1.5 w-48">
              {callout('info', 'Info / tip', 'bg-blue-50 border-blue-200 text-blue-900', close)}
              {callout('warning', 'Warning', 'bg-amber-50 border-amber-200 text-amber-900', close)}
              {callout('success', 'Key takeaway', 'bg-emerald-50 border-emerald-200 text-emerald-900', close)}
            </div>
          )}
        </Pop>
        <Btn title="Code block" active={s.block === 'code'} onClick={() => chain().toggleCodeBlock().run()}><Code2 size={16} /></Btn>
        <Btn title="Divider" onClick={() => chain().setHorizontalRule().run()}><Minus size={16} /></Btn>
        <Sep />
        <Pop title="Link" active={s.link} icon={<Link2 size={16} />}>
          {(close) => <LinkPanel editor={editor} close={close} />}
        </Pop>
        <Btn title="Insert image" onClick={onImage}><ImagePlus size={16} /></Btn>
        <Pop title="Embed YouTube video" icon={<Youtube size={16} />}>
          {(close) => <YoutubePanel editor={editor} close={close} />}
        </Pop>
        <Pop title="Insert table" active={s.table} icon={<Table2 size={16} />}>
          {(close) => <TablePanel editor={editor} close={close} />}
        </Pop>
        <Sep />
        <Btn title="Find & replace (Ctrl+F)" active={findOpen} onClick={onFind}><Search size={16} /></Btn>
        <Btn title="Clear formatting" onClick={() => chain().unsetAllMarks().clearNodes().run()}><RemoveFormatting size={16} /></Btn>
      </div>

      {s.table && (
        <div className="flex flex-wrap items-center gap-0.5 px-3 py-1 border-t border-slate-100 bg-emerald-50/50 text-xs">
          <span className="font-bold text-emerald-800 mr-2 uppercase tracking-wider text-[10px]">Table</span>
          <Btn title="Add column before" onClick={() => chain().addColumnBefore().run()}><Columns3 size={15} /><span className="ml-1">← Col</span></Btn>
          <Btn title="Add column after" onClick={() => chain().addColumnAfter().run()}><Columns3 size={15} /><span className="ml-1">Col →</span></Btn>
          <Btn title="Delete column" onClick={() => chain().deleteColumn().run()}><Eraser size={15} /><span className="ml-1">Col</span></Btn>
          <Sep />
          <Btn title="Add row above" onClick={() => chain().addRowBefore().run()}><Rows3 size={15} /><span className="ml-1">↑ Row</span></Btn>
          <Btn title="Add row below" onClick={() => chain().addRowAfter().run()}><Rows3 size={15} /><span className="ml-1">Row ↓</span></Btn>
          <Btn title="Delete row" onClick={() => chain().deleteRow().run()}><Eraser size={15} /><span className="ml-1">Row</span></Btn>
          <Sep />
          <Btn title="Merge cells" disabled={!s.canMerge} onClick={() => chain().mergeCells().run()}><Merge size={15} /></Btn>
          <Btn title="Split cell" disabled={!s.canSplit} onClick={() => chain().splitCell().run()}><SplitSquareHorizontal size={15} /></Btn>
          <Btn title="Toggle header row" onClick={() => chain().toggleHeaderRow().run()}><span className="font-bold px-1">H</span></Btn>
          <Sep />
          <Btn title="Delete table" onClick={() => chain().deleteTable().run()}><Trash2 size={15} className="text-red-600" /></Btn>
        </div>
      )}
    </div>
  )
}
