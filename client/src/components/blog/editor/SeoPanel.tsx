import { useMemo, useState } from 'react'
import { CheckCircle2, CircleAlert, CircleX, Plus, Search, X } from 'lucide-react'
import type { BlogSeo } from '../../../types/blog'
import { analyzeSeo, countPhrase, type SeoCheck, type SeoInput } from './seoAnalysis'
import { Highlighted } from '../BlogCard'
import { stripTags } from '../../../lib/blogHtml'
import { SITE_URL } from '../../../seo/routes'

interface SeoPanelProps extends Omit<SeoInput, 'metaTitle' | 'metaDescription' | 'focusKeyword'> {
  seo: BlogSeo
  onChange: (seo: BlogSeo) => void
  /** Highlights a phrase in the editor. */
  onHighlight: (term: string) => void
}

const STATUS_ICON = {
  good: <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />,
  ok: <CircleAlert size={16} className="text-amber-500 shrink-0 mt-0.5" />,
  bad: <CircleX size={16} className="text-red-500 shrink-0 mt-0.5" />,
}

const GROUPS: { id: SeoCheck['group']; label: string }[] = [
  { id: 'keyword', label: 'Focus keyword' },
  { id: 'meta', label: 'Title & description' },
  { id: 'content', label: 'Content' },
  { id: 'readability', label: 'Readability' },
]

function LengthMeter({ length, min, max }: { length: number; min: number; max: number }) {
  const pct = Math.min(100, (length / (max * 1.15)) * 100)
  const color = length >= min && length <= max ? 'bg-emerald-500' : length > max ? 'bg-red-500' : 'bg-amber-400'
  return (
    <div className="mt-1.5 flex items-center gap-2">
      <div className="flex-1 h-1.5 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} transition-all`} style={{ width: `${pct}%` }} />
      </div>
      <span className="text-[11px] tabular-nums text-slate-500">
        {length}/{max}
      </span>
    </div>
  )
}

export default function SeoPanel({ seo, onChange, onHighlight, ...input }: SeoPanelProps) {
  const [keywordDraft, setKeywordDraft] = useState('')
  const result = useMemo(
    () => analyzeSeo({ ...input, metaTitle: seo.metaTitle, metaDescription: seo.metaDescription, focusKeyword: seo.focusKeyword }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [input.title, input.slug, input.excerpt, input.coverAlt, input.html, input.otherKeywords, seo.metaTitle, seo.metaDescription, seo.focusKeyword],
  )
  const text = useMemo(() => stripTags(input.html), [input.html])
  const set = (patch: Partial<BlogSeo>) => onChange({ ...seo, ...patch })
  const kwTerms = seo.focusKeyword.trim() ? [seo.focusKeyword.trim()] : []
  const scoreColor = result.score >= 75 ? 'text-emerald-600 stroke-emerald-500' : result.score >= 50 ? 'text-amber-500 stroke-amber-400' : 'text-red-500 stroke-red-500'

  const addKeyword = () => {
    const k = keywordDraft.trim()
    if (k && !seo.keywords.some((x) => x.toLowerCase() === k.toLowerCase())) set({ keywords: [...seo.keywords, k] })
    setKeywordDraft('')
  }

  const field = 'w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/10'
  const host = SITE_URL.replace(/^https?:\/\//, '')

  return (
    <div className="space-y-6">
      {/* Score */}
      <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
        <svg viewBox="0 0 36 36" className={`w-16 h-16 -rotate-90 ${scoreColor}`}>
          <circle cx="18" cy="18" r="15.5" fill="none" className="stroke-slate-200" strokeWidth="3.5" />
          <circle cx="18" cy="18" r="15.5" fill="none" strokeWidth="3.5" strokeLinecap="round" strokeDasharray={`${(result.score / 100) * 97.4} 97.4`} className="transition-all duration-500" />
          <text x="18" y="18" textAnchor="middle" dominantBaseline="central" className="rotate-90 origin-center fill-current stroke-none text-[10px] font-bold">
            {result.score}
          </text>
        </svg>
        <div>
          <p className="font-bold text-slate-900">SEO score</p>
          <p className="text-xs text-slate-500 leading-relaxed">
            {result.score >= 75 ? 'Looking good — ready to rank.' : result.score >= 50 ? 'Decent. Fix the orange and red items below.' : 'Needs work before publishing.'}
          </p>
        </div>
      </div>

      {/* Focus keyword */}
      <div>
        <label className="block">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Focus keyword</span>
          <div className="mt-1.5 flex gap-2">
            <input value={seo.focusKeyword} onChange={(e) => set({ focusKeyword: e.target.value })} placeholder="e.g. field service software" className={field} />
            <button type="button" title="Highlight in the article" disabled={!seo.focusKeyword.trim()} onClick={() => onHighlight(seo.focusKeyword.trim())} className="px-3 rounded-lg border border-slate-300 text-slate-600 hover:border-emerald-500 hover:text-emerald-700 disabled:opacity-40">
              <Search size={16} />
            </button>
          </div>
        </label>
        {seo.focusKeyword.trim() && (
          <p className="mt-2 text-xs text-slate-600">
            Used <span className="font-bold text-slate-900">{result.keywordCount}×</span> in {result.words} words · density{' '}
            <span className={`font-bold ${result.density > 2.5 ? 'text-red-600' : result.density >= 0.5 ? 'text-emerald-700' : 'text-amber-600'}`}>{result.density.toFixed(1)}%</span>
          </p>
        )}
      </div>

      {/* Secondary keywords with live counts */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Related keywords</span>
        <p className="text-[11px] text-slate-500 mt-0.5">Synonyms and long-tail phrases. Click one to find it in the article.</p>
        <div className="mt-2 flex gap-2">
          <input
            value={keywordDraft}
            onChange={(e) => setKeywordDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ',') {
                e.preventDefault()
                addKeyword()
              }
            }}
            placeholder="Add a keyword and press Enter"
            className={field}
          />
          <button type="button" onClick={addKeyword} className="px-3 rounded-lg border border-slate-300 text-slate-600 hover:border-emerald-500 hover:text-emerald-700">
            <Plus size={16} />
          </button>
        </div>
        {seo.keywords.length > 0 && (
          <ul className="mt-2 space-y-1">
            {seo.keywords.map((k) => {
              const n = countPhrase(text, k)
              return (
                <li key={k} className="flex items-center justify-between gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 text-sm">
                  <button type="button" onClick={() => onHighlight(k)} className="truncate text-left text-slate-700 hover:text-emerald-700">{k}</button>
                  <span className="flex items-center gap-2 shrink-0">
                    <span className={`text-xs font-bold tabular-nums ${n ? 'text-emerald-700' : 'text-slate-400'}`}>{n}×</span>
                    <button type="button" onClick={() => set({ keywords: seo.keywords.filter((x) => x !== k) })} className="text-slate-400 hover:text-red-600" aria-label={`Remove ${k}`}>
                      <X size={14} />
                    </button>
                  </span>
                </li>
              )
            })}
          </ul>
        )}
      </div>

      {/* Meta fields */}
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">SEO title</span>
        <input value={seo.metaTitle} onChange={(e) => set({ metaTitle: e.target.value })} placeholder={result.serpTitle || 'Defaults to “Post title | LushWare Blog”'} className={`${field} mt-1.5`} />
        <LengthMeter length={result.serpTitle.length} min={30} max={60} />
      </label>
      <label className="block">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Meta description</span>
        <textarea value={seo.metaDescription} onChange={(e) => set({ metaDescription: e.target.value })} rows={3} placeholder={input.excerpt || 'Defaults to the excerpt'} className={`${field} mt-1.5 resize-y`} />
        <LengthMeter length={result.serpDescription.length} min={120} max={160} />
      </label>

      {/* Google preview */}
      <div>
        <span className="text-xs font-bold uppercase tracking-wider text-slate-600">Google preview</span>
        <div className="mt-2 p-4 rounded-xl border border-slate-200 bg-white font-[arial,sans-serif]">
          <div className="flex items-center gap-2">
            <img src="/favicon.ico" alt="" className="w-6 h-6 rounded-full border border-slate-200 p-0.5" />
            <div className="leading-tight min-w-0">
              <p className="text-[13px] text-[#202124]">LushWare</p>
              <p className="text-[12px] text-[#4d5156] truncate">{host} › blog › {input.slug || 'post-url'}</p>
            </div>
          </div>
          <p className="mt-2 text-[19px] leading-snug text-[#1a0dab] line-clamp-1">{result.serpTitle.length > 62 ? `${result.serpTitle.slice(0, 60)}…` : result.serpTitle || 'Your post title'}</p>
          <p className="mt-1 text-[13px] leading-relaxed text-[#4d5156] line-clamp-2 [&_mark]:bg-transparent [&_mark]:font-bold [&_mark]:text-[#4d5156]">
            <Highlighted text={result.serpDescription.length > 160 ? `${result.serpDescription.slice(0, 158)}…` : result.serpDescription || 'Add a meta description to control this snippet.'} terms={kwTerms} />
          </p>
        </div>
      </div>

      <label className="flex items-start gap-2.5 text-sm text-slate-700">
        <input type="checkbox" checked={seo.noindex} onChange={(e) => set({ noindex: e.target.checked })} className="mt-0.5 accent-emerald-600" />
        <span>
          Hide from search engines <span className="text-slate-400">(noindex — the post stays reachable by link)</span>
        </span>
      </label>

      {/* Checklist */}
      {GROUPS.map((g) => {
        const items = result.checks.filter((c) => c.group === g.id)
        if (!items.length) return null
        return (
          <div key={g.id}>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-600 mb-2">{g.label}</p>
            <ul className="space-y-2">
              {[...items]
                .sort((a, b) => ['bad', 'ok', 'good'].indexOf(a.status) - ['bad', 'ok', 'good'].indexOf(b.status))
                .map((c) => (
                  <li key={c.id} className="flex items-start gap-2 text-[13px] leading-snug text-slate-700">
                    {STATUS_ICON[c.status]}
                    <span>{c.label}</span>
                  </li>
                ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
