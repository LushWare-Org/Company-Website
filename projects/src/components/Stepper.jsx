export default function Stepper({ steps }) {
  return (
    <div className="stepper">
      {steps.map((s, i) => (
        <div className="step-row" key={s.t}>
          <div className="step-marker">
            <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
            {i < steps.length - 1 && <span className="step-line" aria-hidden="true" />}
          </div>
          <div className="step-body">
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
