import Icon from './Icon.jsx'
import EquityGauge from './EquityGauge.jsx'

export default function FounderCard({ pkg }) {
  return (
    <div className={'price-card' + (pkg.featured ? ' featured' : '')}>
      {pkg.featured && <span className="featured-badge">Most chosen</span>}
      <span className="price-card-tier mono">{pkg.tier}</span>
      <h4 className="price-card-name">{pkg.name}</h4>
      <div className="price-card-price-row">
        <span className="price-card-price">{pkg.price}</span>
        {pkg.budgetPercent && (
          <span className="price-card-price-note">(Or {pkg.budgetPercent}% of the Estimated Budget)</span>
        )}
      </div>
      <p className="price-card-tagline">{pkg.tagline}</p>

      <EquityGauge value={pkg.equity} />

      <ul className="price-card-features">
        {pkg.features.map((f) => (
          <li key={f}>
            <Icon name="check" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <button className="price-card-cta">
        Enquire about this tier
        <Icon name="arrow" />
      </button>
    </div>
  )
}
