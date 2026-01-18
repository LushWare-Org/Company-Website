import InquiryForm from "../components/InquiryForm";

const solutions = [
  {
    title: "Lush Hotel Cloud",
    subtitle: "Hotel Internal Management System",
    description:
      "A centralized cloud suite for reservations, housekeeping, inventory, and finance, built for multi-property operations.",
  },
  {
    title: "Property Management System",
    subtitle: "Unified property oversight",
    description:
      "Digital workflows for property listings, maintenance tracking, tenant relations, and revenue oversight with real-time dashboards.",
  },
  {
    title: "Viduvaru",
    subtitle: "Online Ticket Booking for Boat Services",
    description:
      "Self-service bookings, capacity management, e-ticketing, and boarding validation designed for marine transport operators.",
  },
  {
    title: "Travel Agency CRM System",
    subtitle: "Lead-to-trip lifecycle",
    description:
      "Automate inquiries, itineraries, payments, and post-trip follow-ups with a CRM tuned for travel teams.",
  },
];

export default function SolutionsPage() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Our Solutions
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Purpose-built platforms</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Each product is crafted for a distinct operational challenge. Explore the overview and drop an inquiry so we can tailor a demo to your needs.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                    {solution.subtitle}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900">{solution.title}</h3>
                  <p className="mt-3 text-gray-600">{solution.description}</p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700">
                  Inquiry
                </span>
              </div>

              <InquiryForm topic={solution.title} ctaLabel="Send inquiry" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
