import InquiryForm from "../components/InquiryForm";

const programs = [
  {
    title: "Software Development Project Base",
    description:
      "Join structured builds with mentors, code reviews, and delivery rituals. Perfect for engineers growing into product ownership.",
  },
  {
    title: "AI & Automation Project Base",
    description:
      "Hands-on automation and agent projects: data pipelines, workflow orchestration, and LLM-powered copilots.",
  },
];

export default function ProjectBasePage() {
  return (
    <section id="project-base" className="scroll-mt-24 bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Project Base
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Build with us</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Choose a track and send an inquiry. We will align scope, timelines, and the outcomes you need.
        </p>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold text-gray-900">{program.title}</h3>
              <p className="mt-3 text-gray-600">{program.description}</p>
              <InquiryForm topic={program.title} ctaLabel="Send inquiry" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
