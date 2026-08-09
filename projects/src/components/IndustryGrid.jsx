import Icon from './Icon.jsx'

export default function IndustryGrid({ industries }) {
  return (
    <div className="industries-grid">
      {industries.map((ind) => (
        <div className="industry-card" key={ind.key}>
          <div className="industry-head">
            <div className="industry-icon">
              <Icon name={ind.key} />
            </div>
            <h4>{ind.name}</h4>
          </div>
          <ul>
            {ind.items.map((it) =>
              typeof it === 'string' ? (
                <li key={it}>
                  <span className="item-name">{it}</span>
                </li>
              ) : (
                <li key={it.n}>
                  <span>
                    <span className="item-name">{it.n}</span>
                    <span className="item-desc">{it.d}</span>
                  </span>
                </li>
              )
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}
