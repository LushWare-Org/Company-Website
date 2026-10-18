import Icon from './Icon.jsx'

export default function WidePackageCard({ pkg }) {
  return (
    <div className="wide-card">
      <div className="wide-card-left">
        <div className="wide-card-icon">
          <Icon name={pkg.icon} />
        </div>
        <h4>{pkg.name}</h4>
        <div className="wide-card-price">{pkg.price}</div>
        <p className="wide-card-tagline">{pkg.tagline}</p>
        <button className="price-card-cta" onClick={() => window.open("https://calendly.com/lushware-net/30min", '_blank')}>
          {pkg.icon === 'handshake' ? 'Start a partner conversation' : 'Request a proposal'}
          <Icon name="arrow" />
        </button>
      </div>
      <div className="wide-card-right">
        <ul className="price-card-features">
          {pkg.features.map((f) => (
            <li key={f}>
              <Icon name="check" />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
