import { useState } from 'react'
import { TABS } from '../data/specializations.js'
import TabNav from '../components/TabNav.jsx'
import DomainPanel from '../components/DomainPanel.jsx'
import DeepTechPanel from '../components/DeepTechPanel.jsx'
import Vine from '../components/Vine.jsx'

export default function Home() {
  const [activeId, setActiveId] = useState(TABS[0].id)
  const active = TABS.find((t) => t.id === activeId)

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

      <TabNav tabs={TABS} activeId={activeId} onChange={setActiveId} />

      <section className="panels">
        <div className="panel active" key={active.id}>
          {active.isDeepTech ? <DeepTechPanel data={active} /> : <DomainPanel data={active} />}
        </div>
      </section>
    </main>
  )
}
