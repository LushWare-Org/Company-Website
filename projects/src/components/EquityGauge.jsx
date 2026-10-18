const MAX = 25
const TICKS = [0, 5, 10, 15, 20, 25]

export default function EquityGauge({ value }) {
  const pct = Math.min(100, (value / MAX) * 100)

  return (
    <div className="equity-gauge">
      <div className="equity-gauge-top">
        <span className="equity-gauge-label">Equity retained by LushWare</span>
        <span className="equity-gauge-value">{value === 0 ? 'None' : `${value}%`}</span>
      </div>
      <div className="equity-gauge-track">
        <div className="equity-gauge-fill" style={{ width: `${pct}%` }} />
        {TICKS.map((t) => (
          <span key={t} className="equity-gauge-tick" style={{ left: `${(t / MAX) * 100}%` }} />
        ))}
      </div>
      <div className="equity-gauge-scale">
        {TICKS.map((t) => (
          <span key={t}>{t}%</span>
        ))}
      </div>
    </div>
  )
}
