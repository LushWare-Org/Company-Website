// Lead attribution: where the visitor came from (UTM tags, ad click ids,
// external referrer), sent with each inquiry so the admin dashboard can tie
// leads to campaigns. Stored in localStorage for 90 days; a later visit from
// a campaign, ad or another site replaces it (last non-direct click, like GA4).
// Only stored with analytics consent (consent.ts); otherwise it is kept in
// memory for the current page load and still sent with an inquiry.

export type Attribution = {
  source: string
  medium: string
  campaign?: string
  term?: string
  content?: string
  /** Ad click id and its parameter name (gclid, gbraid, wbraid, msclkid, fbclid, li_fat_id). */
  clickId?: string
  clickIdType?: string
  referrer?: string
  /** First page of the attributed visit. */
  landingPage: string
  capturedAt: string
}

const KEY = 'lw_attribution'
const MAX_AGE_MS = 90 * 24 * 60 * 60 * 1000
const CLICK_IDS = ['gclid', 'gbraid', 'wbraid', 'msclkid', 'fbclid', 'li_fat_id']
const SEARCH_ENGINES = ['google.', 'bing.', 'yahoo.', 'duckduckgo.', 'baidu.', 'yandex.', 'ecosia.']
const AD_SOURCES: Record<string, string> = { gclid: 'google', gbraid: 'google', wbraid: 'google', msclkid: 'bing', fbclid: 'facebook', li_fat_id: 'linkedin' }

let pending: Attribution | null = null

const clip = (v: string | null | undefined, n = 150) => (v ? v.trim().slice(0, n) : undefined)

function read(): Attribution | null {
  try {
    const a = JSON.parse(localStorage.getItem(KEY) || 'null') as Attribution | null
    return a && Date.now() - Date.parse(a.capturedAt) < MAX_AGE_MS ? a : null
  } catch {
    return null
  }
}

function write(a: Attribution) {
  try {
    localStorage.setItem(KEY, JSON.stringify(a))
  } catch {
    /* storage blocked: attribution is best-effort */
  }
}

/** Call once per page load, before any client-side navigation. `store`: analytics consent. */
export function captureAttribution(store: boolean) {
  if (typeof window === 'undefined') return
  const params = new URLSearchParams(window.location.search)
  const clickIdType = CLICK_IDS.find((k) => params.get(k))
  let referrerHost = ''
  try {
    referrerHost = document.referrer ? new URL(document.referrer).hostname : ''
  } catch {
    /* malformed referrer */
  }
  const external = referrerHost && referrerHost !== window.location.hostname
  const hasUtm = params.has('utm_source') || params.has('utm_medium') || params.has('utm_campaign')
  if (!hasUtm && !clickIdType && !external) {
    // Direct visit: keep the existing attribution, or record a direct one.
    if (read()) return
  }

  // Search engines are named like GA4 does ("google", not "www.google.co.uk").
  const searchEngine = SEARCH_ENGINES.find((s) => referrerHost.includes(s))?.slice(0, -1)
  const attribution: Attribution = {
    source:
      clip(params.get('utm_source')) ??
      (clickIdType ? AD_SOURCES[clickIdType] : undefined) ??
      searchEngine ??
      (external ? referrerHost.replace(/^www\./, '') : '(direct)'),
    medium:
      clip(params.get('utm_medium')) ??
      (clickIdType ? 'cpc' : external ? (searchEngine ? 'organic' : 'referral') : '(none)'),
    campaign: clip(params.get('utm_campaign')),
    term: clip(params.get('utm_term')),
    content: clip(params.get('utm_content')),
    clickId: clickIdType ? clip(params.get(clickIdType), 300) : undefined,
    clickIdType,
    referrer: external ? clip(document.referrer, 300) : undefined,
    landingPage: window.location.pathname.slice(0, 200),
    capturedAt: new Date().toISOString(),
  }
  if (store) write(attribution)
  else pending = attribution
}

/** Consent changed: store the current visit's attribution, or forget the stored one. */
export function setAttributionStorage(allowed: boolean) {
  if (allowed) {
    if (pending) write(pending)
    pending = null
    return
  }
  pending = read() ?? pending
  try {
    localStorage.removeItem(KEY)
  } catch {
    /* nothing stored */
  }
}

/** The visitor's current attribution, or null if none was recorded. */
export const getAttribution = (): Attribution | null => (typeof window === 'undefined' ? null : (read() ?? pending))
