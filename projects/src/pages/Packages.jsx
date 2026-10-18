import { useState } from 'react'
import { AUDIENCES, FOUNDER_PACKAGES, BUSINESS_PACKAGE, PARTNER_PACKAGE } from '../data/packages.js'
import Icon from '../components/Icon.jsx'
import FounderCard from '../components/FounderCard.jsx'
import WidePackageCard from '../components/WidePackageCard.jsx'
import SectionLabel from '../components/SectionLabel.jsx'

const COPY = {
  founders: {
    eyebrow: 'For Founders · Four Tiers',
    title: 'Trade cash for equity, or keep it — your call.',
    intro:
      'Four ways to bring LushWare onto your founding team. The less cash up front, the more equity we take as a genuine build partner — scale down the equity as your budget scales up.'
  },
  business: {
    eyebrow: 'For Businesses · Estimated Budget',
    title: 'A scoped, transparent engagement for established teams.',
    intro:
      'No equity, no guesswork — a fixed proposal built around a real discovery process, delivered by the same senior team behind every LushWare specialization.'
  },
  partners: {
    eyebrow: 'For Partners · Negotiable Commission',
    title: 'Refer, co-deliver, or resell — on terms we agree together.',
    intro:
      'For agencies and consultancies who want LushWare as a delivery arm or technology partner. Commission is structured per engagement, not off a rate card.'
  }
}

export default function Packages() {
  const [audience, setAudience] = useState('founders')
  const copy = COPY[audience]

  return (
    <main className="wrap">
      <section className="hero packages-hero">
        <span className="eyebrow">LushWare · Engagement Packages</span>
        <h1>
          Three ways to work with us. <span className="grad">One quality bar</span> across all of them.
        </h1>
        <p>
          Whether you&rsquo;re bootstrapping an idea, running an established business, or bringing us in as a
          delivery partner — choose the engagement model built for where you stand today.
        </p>
      </section>

      <nav className="audience-switch" aria-label="Choose your audience">
        {AUDIENCES.map((a) => (
          <button
            key={a.id}
            className={'audience-btn' + (audience === a.id ? ' active' : '')}
            onClick={() => setAudience(a.id)}
          >
            <Icon name={a.icon} />
            {a.label}
          </button>
        ))}
      </nav>

      <section className="panels packages-panels">
        <div className="panel-intro" key={audience}>
          <span className="eyebrow">{copy.eyebrow}</span>
          <h2>{copy.title}</h2>
          <p>{copy.intro}</p>
        </div>

        {audience === 'founders' && (
          <>
            <SectionLabel>Founder Packages</SectionLabel>
            <div className="price-grid">
              {FOUNDER_PACKAGES.map((pkg) => (
                <FounderCard pkg={pkg} key={pkg.id} />
              ))}
            </div>
            <p className="price-grid-note">
              As cash investment increases, the equity LushWare retains decreases proportionally — the fourth tier
              is a fully cash-funded engagement with no equity exchanged at all.
            </p>
          </>
        )}

        {audience === 'business' && (
          <>
            <SectionLabel>Business Package</SectionLabel>
            <WidePackageCard pkg={BUSINESS_PACKAGE} />
          </>
        )}

        {audience === 'partners' && (
          <>
            <SectionLabel>Partner Package</SectionLabel>
            <WidePackageCard pkg={PARTNER_PACKAGE} />
          </>
        )}
      </section>
    </main>
  )
}
