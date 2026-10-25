import { useParams } from 'react-router-dom'
import { TABS } from '../data/specializations.js'
import TabNav from '../components/TabNav.jsx'
import DomainPanel from '../components/DomainPanel.jsx'
import DeepTechPanel from '../components/DeepTechPanel.jsx'
import Vine from '../components/Vine.jsx'
import NotFound from './NotFound.jsx'

export default function Home() {
  // The active tab/subtab comes from the URL so each specialization is a linkable, indexable page.
  const { tabSlug, subSlug } = useParams()
  const active = tabSlug ? TABS.find((t) => t.slug === tabSlug && t !== TABS[0]) : TABS[0]
  const activeSub = active?.subtabs && (subSlug ? active.subtabs.slice(1).find((s) => s.slug === subSlug) : active.subtabs[0])

  if (!active || (subSlug && !activeSub)) return <NotFound />

  return (
    <main className="wrap">
      <section className="hero">
        <span className="eyebrow">LushWare · Capability Map</span>
        <h1>
          Five disciplines. <span className="grad">One growth-engineered build path</span> for every industry you
          operate in.
        </h1>
        <p>
          From scalable systems to autonomous agents, tuned models, deep tech, and blockchain — each specialization
          below unfolds as a build blueprint first, then the industries it&rsquo;s proven across.
        </p>
        <Vine />
      </section>

      <TabNav tabs={TABS} activeId={active.id} />

      <section className="panels">
        <div className="panel active" key={active.id}>
          {active.isDeepTech ? <DeepTechPanel data={active} activeSub={activeSub} /> : <DomainPanel data={active} />}
        </div>
      </section>
    </main>
  )
}
