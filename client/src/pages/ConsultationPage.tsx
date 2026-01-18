import InquiryForm from "../components/InquiryForm";

export default function ConsultationPage() {
  return (
    <section id="consultation" className="scroll-mt-24 bg-gray-50 px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Free Tech Consultation
        </p>
        <h2 className="mt-2 text-3xl font-bold text-gray-900">Talk through your roadmap</h2>
        <p className="mt-3 text-gray-600 max-w-3xl">
          Share the challenge, integration landscape, and success metrics. We will propose approaches you can action immediately.
        </p>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Book a quick consult</h3>
          <p className="mt-2 text-gray-600">
            We respond within one business day with a recommended path or a slot to talk live.
          </p>
          <InquiryForm topic="a tech consultation" ctaLabel="Request consultation" />
        </div>
      </div>
    </section>
  );
}
