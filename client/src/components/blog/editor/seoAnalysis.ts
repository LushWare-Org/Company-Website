// Live on-page SEO checks for the blog editor (focus keyword, lengths,
// links, readability). Pure functions over the editor HTML.
import { escapeRegex, slugify, stripTags } from '../../../lib/blogHtml'
import { SITE_URL } from '../../../seo/routes'

export type CheckStatus = 'good' | 'ok' | 'bad'

export interface SeoCheck {
  id: string
  group: 'keyword' | 'meta' | 'content' | 'readability'
  status: CheckStatus
  label: string
}

export interface SeoInput {
  title: string
  slug: string
  excerpt: string
  metaTitle: string
  metaDescription: string
  focusKeyword: string
  coverAlt: string
  html: string
  /** Focus keywords of the other posts (keyword cannibalization check). */
  otherKeywords: { keyword: string; title: string }[]
}

export interface SeoResult {
  checks: SeoCheck[]
  score: number
  words: number
  keywordCount: number
  density: number
  /** The title and description Google is likely to show. */
  serpTitle: string
  serpDescription: string
}

/** Whole-phrase, case-insensitive occurrences of `phrase` in `text`. */
export function countPhrase(text: string, phrase: string): number {
  const p = phrase.trim()
  if (!p) return 0
  const rx = new RegExp(`(?<![\\p{L}\\p{N}])${escapeRegex(p).replace(/\s+/g, '\\s+')}(?![\\p{L}\\p{N}])`, 'giu')
  return text.match(rx)?.length ?? 0
}

const wordsOf = (text: string) => (text ? text.split(/\s+/).filter(Boolean).length : 0)

const tagTexts = (html: string, tag: string) => [...html.matchAll(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'gi'))].map((m) => stripTags(m[1]))

export function serpTitleOf(title: string, metaTitle: string) {
  return metaTitle.trim() || (title.trim() ? `${title.trim()} | LushWare Blog` : '')
}

export function analyzeSeo(input: SeoInput): SeoResult {
  const kw = input.focusKeyword.trim()
  const text = stripTags(input.html)
  const words = wordsOf(text)
  const serpTitle = serpTitleOf(input.title, input.metaTitle)
  const serpDescription = input.metaDescription.trim() || input.excerpt.trim()
  const paragraphs = tagTexts(input.html, 'p').filter(Boolean)
  const headings = [...tagTexts(input.html, 'h2'), ...tagTexts(input.html, 'h3')]
  const alts = [...input.html.matchAll(/<img[^>]*?alt="([^"]*)"/gi)].map((m) => m[1])
  const imageCount = (input.html.match(/<img\b/gi) ?? []).length
  const hrefs = [...input.html.matchAll(/<a[^>]*?href="([^"]*)"/gi)].map((m) => m[1])
  const host = SITE_URL.replace(/^https?:\/\//, '')
  const internal = hrefs.filter((h) => h.startsWith('/') || h.startsWith('#') || h.includes(host)).length
  const external = hrefs.length - internal

  const checks: SeoCheck[] = []
  const add = (group: SeoCheck['group'], id: string, status: CheckStatus, label: string) => checks.push({ id, group, status, label })

  const keywordCount = kw ? countPhrase(text, kw) : 0
  const density = kw && words ? ((keywordCount * wordsOf(kw)) / words) * 100 : 0

  // Focus keyword
  if (!kw) {
    add('keyword', 'kw-set', 'bad', 'Set a focus keyword — the search phrase this article should rank for.')
  } else {
    const inTitle = countPhrase(serpTitle, kw) > 0
    const titleStart = serpTitle.toLowerCase().startsWith(kw.toLowerCase())
    add('keyword', 'kw-title', inTitle ? (titleStart ? 'good' : 'ok') : 'bad', inTitle ? (titleStart ? 'Focus keyword starts the SEO title.' : 'Focus keyword is in the SEO title — moving it to the start is even better.') : 'Add the focus keyword to the SEO title.')
    add('keyword', 'kw-desc', countPhrase(serpDescription, kw) ? 'good' : 'bad', countPhrase(serpDescription, kw) ? 'Focus keyword is in the meta description.' : 'Use the focus keyword in the meta description.')
    const kwSlug = slugify(kw)
    add('keyword', 'kw-slug', input.slug.includes(kwSlug) ? 'good' : 'ok', input.slug.includes(kwSlug) ? 'Focus keyword is in the URL.' : `Consider including “${kwSlug}” in the URL slug.`)
    const firstPara = paragraphs[0] ?? ''
    add('keyword', 'kw-intro', countPhrase(firstPara, kw) ? 'good' : 'bad', countPhrase(firstPara, kw) ? 'Focus keyword appears in the first paragraph.' : 'Mention the focus keyword in the first paragraph.')
    const inHeadings = headings.filter((h) => countPhrase(h, kw)).length
    add('keyword', 'kw-headings', inHeadings ? 'good' : 'ok', inHeadings ? `Focus keyword is in ${inHeadings} subheading${inHeadings > 1 ? 's' : ''}.` : 'Use the focus keyword (or a variation) in at least one H2/H3 subheading.')
    const inAlt = [...alts, input.coverAlt].some((a) => countPhrase(a, kw))
    add('keyword', 'kw-alt', inAlt ? 'good' : 'ok', inAlt ? 'Focus keyword is in an image alt text.' : 'Add the focus keyword to the alt text of at least one image.')
    if (words >= 100) {
      const d = density.toFixed(1)
      add(
        'keyword',
        'kw-density',
        density >= 0.5 && density <= 2.5 ? 'good' : density > 2.5 ? 'bad' : 'ok',
        density > 2.5
          ? `Keyword density ${d}% is too high (${keywordCount}×) — this reads as keyword stuffing. Aim for 0.5–2.5%.`
          : density < 0.5
            ? `Keyword density ${d}% (${keywordCount}×) is low. Aim for 0.5–2.5%.`
            : `Keyword density ${d}% (${keywordCount}×) is good.`,
      )
    }
    const clash = input.otherKeywords.find((o) => o.keyword.trim().toLowerCase() === kw.toLowerCase())
    add('keyword', 'kw-unique', clash ? 'bad' : 'good', clash ? `“${clash.title}” already targets this keyword — two posts would compete for the same search.` : 'No other post targets this focus keyword.')
  }

  // Meta
  const tLen = serpTitle.length
  add('meta', 'meta-title', tLen >= 30 && tLen <= 60 ? 'good' : tLen > 0 && tLen <= 70 ? 'ok' : 'bad', tLen === 0 ? 'Add a title.' : tLen > 60 ? `SEO title is ${tLen} characters — Google cuts off around 60.` : tLen < 30 ? `SEO title is short (${tLen} characters); use 30–60.` : `SEO title length is good (${tLen} characters).`)
  const dLen = serpDescription.length
  add('meta', 'meta-desc', dLen >= 120 && dLen <= 160 ? 'good' : dLen >= 70 && dLen <= 180 ? 'ok' : 'bad', dLen === 0 ? 'Write a meta description (or an excerpt) — it is the snippet shown in search results.' : dLen > 160 ? `Meta description is ${dLen} characters — keep it under 160.` : dLen < 120 ? `Meta description is ${dLen} characters — 120–160 works best.` : `Meta description length is good (${dLen} characters).`)
  add('meta', 'meta-slug', input.slug && input.slug.length <= 75 ? 'good' : 'ok', !input.slug ? 'Set a URL slug.' : input.slug.length > 75 ? 'The URL slug is long — shorter URLs are easier to share.' : 'URL slug is short and readable.')

  // Content
  add('content', 'length', words >= 900 ? 'good' : words >= 300 ? 'ok' : 'bad', words >= 900 ? `${words} words — in-depth content.` : words >= 300 ? `${words} words. Articles of 900+ words tend to rank better for competitive keywords.` : `Only ${words} words — write at least 300.`)
  add('content', 'subheadings', headings.length >= 2 ? 'good' : words < 300 ? 'ok' : 'bad', headings.length >= 2 ? `${headings.length} subheadings structure the article.` : 'Break the text up with H2/H3 subheadings.')
  add('content', 'internal-links', internal ? 'good' : 'bad', internal ? `${internal} internal link${internal > 1 ? 's' : ''} to other LushWare pages.` : 'Link to at least one related LushWare page (solution, industry or another post).')
  add('content', 'external-links', external ? 'good' : 'ok', external ? `${external} outbound link${external > 1 ? 's' : ''} to sources.` : 'Consider linking to an authoritative outside source.')
  const missingAlt = alts.filter((a) => !a.trim()).length + Math.max(0, imageCount - alts.length)
  add('content', 'images', imageCount === 0 ? 'ok' : missingAlt ? 'bad' : 'good', imageCount === 0 ? 'Add at least one image to the article.' : missingAlt ? `${missingAlt} image${missingAlt > 1 ? 's are' : ' is'} missing alt text.` : `All ${imageCount} image${imageCount > 1 ? 's have' : ' has'} alt text.`)
  add('content', 'cover', input.coverAlt.trim() ? 'good' : 'ok', input.coverAlt.trim() ? 'Cover image has alt text.' : 'Add a cover image with alt text (used for social sharing too).')

  // Readability
  const sentences = text.split(/(?<=[.!?])\s+/).filter((s) => wordsOf(s) > 2)
  const longSentences = sentences.filter((s) => wordsOf(s) > 25).length
  const longShare = sentences.length ? (longSentences / sentences.length) * 100 : 0
  if (sentences.length >= 5) {
    add('readability', 'sentences', longShare <= 25 ? 'good' : 'ok', longShare <= 25 ? 'Sentence length is easy to read.' : `${Math.round(longShare)}% of sentences are longer than 25 words — try splitting some.`)
  }
  const longParas = paragraphs.filter((p) => wordsOf(p) > 150).length
  add('readability', 'paragraphs', longParas ? 'ok' : 'good', longParas ? `${longParas} paragraph${longParas > 1 ? 's are' : ' is'} over 150 words — shorter paragraphs read better on phones.` : 'Paragraphs are a comfortable length.')
  // Text between subheadings
  const sections = input.html.split(/<h[23][^>]*>/i).map((s) => wordsOf(stripTags(s)))
  const longSection = sections.some((n) => n > 350)
  if (words >= 300) add('readability', 'sections', longSection ? 'ok' : 'good', longSection ? 'A section runs over 350 words without a subheading.' : 'Subheadings are well distributed.')

  const weight = { good: 1, ok: 0.5, bad: 0 }
  const score = Math.round((checks.reduce((s, c) => s + weight[c.status], 0) / checks.length) * 100)
  return { checks, score, words, keywordCount, density, serpTitle, serpDescription }
}
