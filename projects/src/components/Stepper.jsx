export default function Stepper({ steps }) {
  return (
    <div className="stepper">
      {steps.map((s, i) => (
        <div className="step" key={s.t}>
          <div className="step-node">{String(i + 1).padStart(2, '0')}</div>
          <div className="step-body">
            <h4>{s.t}</h4>
            <p>{s.d}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
