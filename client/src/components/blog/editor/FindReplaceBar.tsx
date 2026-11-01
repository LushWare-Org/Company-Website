import { useEffect, useRef, useState } from 'react'
import { useEditorState, type Editor } from '@tiptap/react'
import { CaseSensitive, ChevronDown, ChevronUp, X } from 'lucide-react'
import { findMatches, setSearch } from './extensions'

interface FindReplaceBarProps {
  editor: Editor
  /** Search term set from outside (e.g. "highlight focus keyword"). */
  term: string
  onTermChange: (term: string) => void
  onClose: () => void
}

/** Live find (highlights every match as you type) with replace / replace all. */
export default function FindReplaceBar({ editor, term, onTermChange, onClose }: FindReplaceBarProps) {
  const [replacement, setReplacement] = useState('')
  const [caseSensitive, setCaseSensitive] = useState(false)
  const [current, setCurrent] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const matches = useEditorState({ editor, selector: ({ editor: e }) => findMatches(e.state.doc, term, caseSensitive) })
  const index = matches.length ? Math.min(current, matches.length - 1) : -1

  useEffect(() => {
    inputRef.current?.focus()
    inputRef.current?.select()
  }, [])

  // Keep the plugin's highlight in sync; clear it when the bar closes.
  useEffect(() => {
    setSearch(editor, { term, current: index, caseSensitive })
  }, [editor, term, index, caseSensitive])
  useEffect(() => () => setSearch(editor, { term: '', current: -1, caseSensitive: false }), [editor])

  const goTo = (i: number) => {
    if (!matches.length) return
    const next = (i + matches.length) % matches.length
    setCurrent(next)
    const m = matches[next]
    editor.commands.setTextSelection({ from: m.from, to: m.to })
    editor.view.dom.ownerDocument.defaultView?.requestAnimationFrame(() => {
      const el = editor.view.domAtPos(m.from).node as HTMLElement
      ;(el.nodeType === 1 ? el : el.parentElement)?.scrollIntoView({ block: 'center', behavior: 'smooth' })
    })
  }

  const replaceOne = () => {
    if (index < 0) return
    const m = matches[index]
    editor.chain().focus().insertContentAt({ from: m.from, to: m.to }, replacement).run()
  }

  const replaceAll = () => {
    if (!matches.length) return
    const { tr } = editor.state
    // Back to front so earlier positions stay valid.
    for (const m of [...matches].reverse()) {
      if (replacement) tr.insertText(replacement, m.from, m.to)
      else tr.delete(m.from, m.to)
    }
    editor.view.dispatch(tr)
  }

  const field = 'h-8 px-2.5 border border-slate-300 rounded-md text-sm focus:outline-none focus:border-emerald-500 w-44'

  return (
    <div className="flex flex-wrap items-center gap-2 px-3 py-2 border-b border-slate-200 bg-amber-50/60">
      <input
        ref={inputRef}
        value={term}
        onChange={(e) => {
          onTermChange(e.target.value)
          setCurrent(0)
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            goTo(e.shiftKey ? index - 1 : index + 1)
          }
          if (e.key === 'Escape') onClose()
        }}
        placeholder="Find in article…"
        className={field}
      />
      <span className="text-xs tabular-nums text-slate-600 min-w-16">{term ? (matches.length ? `${index + 1} of ${matches.length}` : 'No matches') : ''}</span>
      <button type="button" title="Match case" onClick={() => setCaseSensitive((v) => !v)} className={`h-8 w-8 inline-flex items-center justify-center rounded-md ${caseSensitive ? 'bg-emerald-100 text-emerald-800' : 'text-slate-500 hover:bg-white'}`}>
        <CaseSensitive size={18} />
      </button>
      <button type="button" title="Previous (Shift+Enter)" onClick={() => goTo(index - 1)} className="h-8 w-8 inline-flex items-center justify-center rounded-md text-slate-600 hover:bg-white"><ChevronUp size={16} /></button>
      <button type="button" title="Next (Enter)" onClick={() => goTo(index + 1)} className="h-8 w-8 inline-flex items-center justify-center rounded-md text-slate-600 hover:bg-white"><ChevronDown size={16} /></button>
      <span className="w-px h-6 bg-slate-300 mx-1" />
      <input value={replacement} onChange={(e) => setReplacement(e.target.value)} placeholder="Replace with…" className={field} />
      <button type="button" onClick={replaceOne} disabled={index < 0} className="h-8 px-3 rounded-md text-sm font-semibold text-slate-700 border border-slate-300 bg-white hover:border-emerald-500 disabled:opacity-40">Replace</button>
      <button type="button" onClick={replaceAll} disabled={!matches.length} className="h-8 px-3 rounded-md text-sm font-semibold text-slate-700 border border-slate-300 bg-white hover:border-emerald-500 disabled:opacity-40">Replace all</button>
      <button type="button" title="Close (Esc)" onClick={onClose} className="ml-auto h-8 w-8 inline-flex items-center justify-center rounded-md text-slate-500 hover:bg-white"><X size={16} /></button>
    </div>
  )
}
