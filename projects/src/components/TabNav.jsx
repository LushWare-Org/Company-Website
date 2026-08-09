export default function TabNav({ tabs, activeId, onChange }) {
  return (
    <nav className="tabnav" aria-label="Service domains">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={'tab-btn' + (activeId === tab.id ? ' active' : '')}
          onClick={() => onChange(tab.id)}
          aria-current={activeId === tab.id ? 'true' : undefined}
        >
          <span className="n">{tab.num}</span> {tab.label}
        </button>
      ))}
    </nav>
  )
}
