import { Link } from 'react-router-dom'
import { tabPath } from '../seo/routes.js'

export default function TabNav({ tabs, activeId }) {
  return (
    <nav className="tabnav" aria-label="Service domains">
      {tabs.map((tab) => (
        <Link
          key={tab.id}
          to={tabPath(tab)}
          className={'tab-btn' + (activeId === tab.id ? ' active' : '')}
          aria-current={activeId === tab.id ? 'page' : undefined}
        >
          <span className="n">{tab.num}</span> {tab.label}
        </Link>
      ))}
    </nav>
  )
}
