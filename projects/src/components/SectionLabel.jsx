export default function SectionLabel({ children }) {
  return (
    <div className="section-label">
      <h3>{children}</h3>
      <div className="rule" />
    </div>
  )
}
