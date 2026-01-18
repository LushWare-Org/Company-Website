type InquiryFormProps = {
  topic: string;
  ctaLabel?: string;
};

export default function InquiryForm({ topic, ctaLabel = "Send Inquiry" }: InquiryFormProps) {
  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      className="mt-4 space-y-3"
    >
      <div className="grid md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          required
        />
      </div>

      <input
        type="text"
        placeholder="Company / Organization"
        className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      />

      <textarea
        placeholder={`What do you need for ${topic}?`}
        rows={3}
        className="w-full rounded-md border border-gray-200 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        required
      />

      <button
        type="submit"
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        {ctaLabel}
      </button>
    </form>
  );
}
