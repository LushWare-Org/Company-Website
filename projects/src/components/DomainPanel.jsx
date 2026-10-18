import Stepper from './Stepper.jsx'
import IndustryGrid from './IndustryGrid.jsx'
import SectionLabel from './SectionLabel.jsx'

export default function DomainPanel({ data }) {
  return (
    <div className="panel-content">
      <div className="panel-intro">
        <span className="eyebrow">{data.eyebrow}</span>
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
      </div>

      <div className="blueprint-split">
        <div className="blueprint-col">
          <SectionLabel>Build Blueprint</SectionLabel>
          <Stepper steps={data.steps} />
        </div>

        <div className="industries-col">
          <SectionLabel>{data.appsLabel}</SectionLabel>
          <IndustryGrid industries={data.industries} />
        </div>
      </div>
    </div>
  )
}
