import { Link } from 'react-router-dom'
import Icon from './Icon.jsx'
import DomainPanel from './DomainPanel.jsx'
import { subtabPath } from '../seo/routes.js'

export default function DeepTechPanel({ data, activeSub }) {
  const active = activeSub ?? data.subtabs[0]

  return (
    <div className="panel-content">
      <div className="panel-intro">
        <span className="eyebrow">{data.eyebrow}</span>
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="subtabs">
        {data.subtabs.map((st) => (
          <Link
            key={st.id}
            to={subtabPath(data, st)}
            className={'subtab-btn' + (active.id === st.id ? ' active' : '')}
            aria-current={active.id === st.id ? 'page' : undefined}
          >
            <Icon name={st.icon} />
            {st.label}
          </Link>
        ))}
      </div>

      <div className="subpanel active" key={active.id}>
        <DomainPanel data={active} />
      </div>
    </div>
  )
}
