import { useEffect, useState } from 'react';
import { Cookie } from 'lucide-react';
import { consentRequired, getConsent, onOpenCookieSettings, setConsent } from '../lib/consent';

/**
 * Cookie banner (Consent Mode v2, see lib/consent.ts). Opens on the first visit
 * when consent is required, and again from the footer's "Cookie settings".
 * Accept and Reject have equal weight, as EU regulators expect.
 */
export default function CookieConsent() {
  // The browser mounts with createRoot (no hydration), so reading storage here is safe.
  const [open, setOpen] = useState(() => typeof window !== 'undefined' && consentRequired() && !getConsent());
  const [customize, setCustomize] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);

  useEffect(() => {
    return onOpenCookieSettings(() => {
      const choice = getConsent();
      setAnalytics(choice?.analytics ?? !consentRequired());
      setAds(choice?.ads ?? !consentRequired());
      setCustomize(true);
      setOpen(true);
    });
  }, []);

  if (!open) return null;

  const choose = (a: boolean, d: boolean) => {
    setConsent(a, d);
    setOpen(false);
    setCustomize(false);
  };

  const btn = 'flex-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors';
  const options = [
    { label: 'Necessary', desc: 'Your cookie choice and the contact form. Always on.', checked: true, set: null },
    {
      label: 'Analytics',
      desc: 'Google Analytics visits, and which campaign or site brought you, so we know what works.',
      checked: analytics,
      set: setAnalytics,
    },
    { label: 'Advertising', desc: 'Measure Google Ads clicks and show our ads to past visitors.', checked: ads, set: setAds },
  ];

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      className="fixed z-[60] bottom-4 left-4 right-4 md:right-auto md:left-6 md:bottom-6 md:max-w-md bg-white border border-zinc-200 rounded-2xl shadow-2xl p-5 font-sans text-zinc-800"
    >
      <div className="flex items-center gap-2 mb-2">
        <Cookie size={18} className="text-emerald-600" />
        <h2 id="cookie-consent-title" className="text-base font-bold">
          Cookies on LushWare
        </h2>
      </div>
      <p className="text-sm text-zinc-600 leading-relaxed">
        We'd like to use cookies to see how visitors use the site and which campaigns bring enquiries. You can change
        your choice any time under "Cookie settings" in the footer.
      </p>

      {customize && (
        <ul className="mt-4 space-y-3">
          {options.map((o) => (
            <li key={o.label}>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={o.checked}
                  disabled={!o.set}
                  onChange={(e) => o.set?.(e.target.checked)}
                  className="mt-0.5 h-4 w-4 accent-emerald-600"
                />
                <span className="text-sm">
                  <span className="font-semibold">{o.label}</span>
                  <span className="block text-zinc-500">{o.desc}</span>
                </span>
              </label>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        <button onClick={() => choose(false, false)} className={`${btn} bg-zinc-100 text-zinc-800 hover:bg-zinc-200`}>
          Reject all
        </button>
        <button onClick={() => choose(true, true)} className={`${btn} bg-emerald-600 text-white hover:bg-emerald-700`}>
          Accept all
        </button>
        {customize ? (
          <button
            onClick={() => choose(analytics, ads)}
            className={`${btn} basis-full border border-emerald-600 text-emerald-700 hover:bg-emerald-50`}
          >
            Save choices
          </button>
        ) : (
          <button
            onClick={() => setCustomize(true)}
            className="basis-full text-sm font-medium text-zinc-500 underline underline-offset-2 hover:text-zinc-800"
          >
            Customize
          </button>
        )}
      </div>
    </div>
  );
}
