const projects = [
  {
    name: "HarborLink Travel Portal",
    summary: "B2C booking experience with dynamic packaging and loyalty journeys.",
    tags: ["Travel", "Customer Portal", "Payments"],
  },
  {
    name: "Vista Resorts Ops Suite",
    summary: "Property ops hub for housekeeping, maintenance, and guest services.",
    tags: ["Hospitality", "Operations", "Dashboards"],
  },
  {
    name: "Marina Tickets",
    summary: "High-volume ticketing with QR validation for boat services.",
    tags: ["Ticketing", "QR", "Mobile"],
  },
  {
    name: "Trail CRM",
    summary: "Lead-to-itinerary pipeline with automation for travel agencies.",
    tags: ["CRM", "Automation", "Integrations"],
  },
];

export default function WorkPage() {
  return (
    <section id="work" className="scroll-mt-24 bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Our Work
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Deliverables we have shipped</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          A sampling of the platforms we have rolled out for hospitality, travel, and operations teams.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-gray-900">{project.name}</h3>
              <p className="mt-2 text-gray-600">{project.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
