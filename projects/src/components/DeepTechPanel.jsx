import { useState } from 'react'
import Icon from './Icon.jsx'
import DomainPanel from './DomainPanel.jsx'

export default function DeepTechPanel({ data }) {
  const [activeSub, setActiveSub] = useState(data.subtabs[0].id)
  const active = data.subtabs.find((s) => s.id === activeSub)

  return (
    <div className="panel-content">
      <div className="panel-intro">
        <span className="eyebrow">{data.eyebrow}</span>
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="subtabs">
        {data.subtabs.map((st) => (
          <button
            key={st.id}
            className={'subtab-btn' + (activeSub === st.id ? ' active' : '')}
            onClick={() => setActiveSub(st.id)}
          >
            <Icon name={st.icon} />
            {st.label}
          </button>
        ))}
      </div>

      <div className="subpanel active" key={active.id}>
        <DomainPanel data={active} />
      </div>
    </div>
  )
}
