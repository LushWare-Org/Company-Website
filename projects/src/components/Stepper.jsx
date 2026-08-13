export default function Stepper({ steps }) {
  return (
    <div className="stepper">
      {steps.map((s, i) => (
        <div className="flow-node" key={s.t}>
          <div className="flow-card">
            <div className="step-node">{String(i + 1).padStart(2, '0')}</div>
            <div className="step-body">
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          </div>
          {i < steps.length - 1 && <div className="flow-arrow" aria-hidden="true" />}
        </div>
      ))}
    </div>
  )
}
