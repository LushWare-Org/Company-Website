// Cookie consent (Google Consent Mode v2). Analytics and ad storage start
// denied in the EEA, UK and Switzerland (by Google's IP region) and, as a
// fallback, for any browser on a European time zone; GA4 then only sends
// cookieless pings until the visitor chooses in <CookieConsent />.
// VITE_COOKIE_BANNER: 'eu' (default) asks visitors who look European,
// 'all' asks everyone (denied until they choose), 'off' never asks.
// "Analytics" also covers the lead-source record (attribution.ts).

import { setAttributionStorage } from './attribution'

export type ConsentChoice = { analytics: boolean; ads: boolean; updatedAt: string }

const KEY = 'lw_consent'
const OPEN_EVENT = 'lw:cookie-settings'
const MODE: string = import.meta.env.VITE_COOKIE_BANNER || 'eu'
// EEA + UK + Switzerland (ISO 3166-1 alpha-2), for gtag's region-specific default.
const CONSENT_REGIONS = [
  'AT', 'BE', 'BG', 'HR', 'CY', 'CZ', 'DK', 'EE', 'FI', 'FR', 'DE', 'GR', 'HU', 'IE', 'IT', 'LV', 'LT', 'LU',
  'MT', 'NL', 'PL', 'PT', 'RO', 'SK', 'SI', 'ES', 'SE', 'IS', 'LI', 'NO', 'GB', 'CH',
]

const state = (granted: boolean) => (granted ? 'granted' : 'denied')
const gtagConsent = (kind: 'default' | 'update', params: Record<string, unknown>) => window.gtag?.('consent', kind, params)

/** No IP lookup in the browser, so the time zone stands in for "is this visitor in Europe". */
function looksEuropean() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''
    return /^Europe\/|^Atlantic\/(Canary|Madeira|Azores|Reykjavik|Faroe)$/.test(tz)
  } catch {
    return false
  }
}

/** Whether this visitor must opt in before analytics/ad storage is used. */
export const consentRequired = () => MODE === 'all' || (MODE === 'eu' && looksEuropean())

export function getConsent(): ConsentChoice | null {
  try {
    return JSON.parse(localStorage.getItem(KEY) || 'null') as ConsentChoice | null
  } catch {
    return null
  }
}

/** Analytics storage allowed: the visitor's choice, or the default for their region. */
export function analyticsAllowed() {
  if (typeof window === 'undefined') return false
  const choice = getConsent()
  return choice ? choice.analytics : !consentRequired()
}

function toGtag(analytics: boolean, ads: boolean) {
  return {
    analytics_storage: state(analytics),
    ad_storage: state(ads),
    ad_user_data: state(ads),
    ad_personalization: state(ads),
  }
}

/** Call right after gtag is defined, before `config`. */
export function applyConsentDefaults() {
  const required = consentRequired()
  gtagConsent('default', { ...toGtag(!required, !required), wait_for_update: 500 })
  // Region defaults win over the global one, so the EEA/UK/CH stay denied even
  // when the time zone check misses them.
  gtagConsent('default', { ...toGtag(false, false), region: CONSENT_REGIONS })
  const choice = getConsent()
  if (choice) gtagConsent('update', toGtag(choice.analytics, choice.ads))
}

export function setConsent(analytics: boolean, ads: boolean) {
  const choice: ConsentChoice = { analytics, ads, updatedAt: new Date().toISOString() }
  try {
    localStorage.setItem(KEY, JSON.stringify(choice))
  } catch {
    /* storage blocked: the choice applies to this page view only */
  }
  gtagConsent('update', toGtag(analytics, ads))
  setAttributionStorage(analytics)
}

/** Reopens the banner (footer "Cookie settings" link). */
export const openCookieSettings = () => window.dispatchEvent(new Event(OPEN_EVENT))

export function onOpenCookieSettings(listener: () => void) {
  window.addEventListener(OPEN_EVENT, listener)
  return () => window.removeEventListener(OPEN_EVENT, listener)
}
