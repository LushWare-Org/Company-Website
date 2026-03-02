// pages/SolutionsPage.tsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "../components/InquiryForm";
import QuestionItem from "../components/QuestionItem";

type Solution = {
  title: string;
  subtitle: string;
  description: string;
  image?: string;
};

const solutions: Solution[] = [
  {
    title: "Viduvaru",
    subtitle: "Online Ticket Booking for Boat Services",
    description: "Self-service bookings, capacity management, e-ticketing, and boarding validation designed for marine transport.",
    image: "/solution/boat.png",
  },
  {
    title: "Lush Hotel Cloud",
    subtitle: "Hotel Internal Management System",
    description: "A centralized cloud suite for reservations, housekeeping, inventory, and finance, built for multi-property operations.",
    image: "/solution/hotel.png",
  },
  {
    title: "Property Management System",
    subtitle: "Unified property oversight",
    description: "Digital workflows for property listings, maintenance tracking, tenant relations, and revenue oversight.",
    image: "/solution/realstate.png",
  },
  {
    title: "Travel Agency CRM System",
    subtitle: "Lead-to-trip lifecycle",
    description: "Automate inquiries, itineraries, payments, and post-trip follow-ups with a CRM tuned for travel teams.",
    image: "/solution/travel.png",
  },
];

const faqItems = [
  {
    question: "What are LushWare's Travel Management Solutions?",
    answer: "Our travel management solutions are specialized software platforms designed to help travel agencies, tour operators, and travel businesses streamline their operations, from booking management to itinerary planning and customer relationship management.",
  },
  {
    question: "How can these solutions improve our travel business operations?",
    answer: "Our solutions automate repetitive tasks, centralize customer data, improve booking accuracy, streamline payments, and provide real-time reporting—enabling your team to focus on delivering exceptional travel experiences.",
  },
  {
    question: "Are these solutions suitable for all sizes of travel businesses?",
    answer: "Yes. Our solutions are scalable and can be customized for solo travel consultants, small travel agencies, large tour operators, and enterprise travel management companies.",
  },
  {
    question: "Can these solutions integrate with existing travel industry tools?",
    answer: "Yes. Our solutions integrate seamlessly with GDS systems, payment processors, email platforms, and other third-party travel tools to create a unified ecosystem.",
  },
  {
    question: "Is customer data secure in your travel management solutions?",
    answer: "Absolutely. We use industry-standard security measures including encryption, access controls, compliance with data protection regulations, and regular security audits to protect sensitive customer and business data.",
  },
  {
    question: "How long does implementation typically take?",
    answer: "Implementation timelines vary based on your specific needs and complexity, but typically range from a few weeks to a few months. Our team provides guided onboarding and training to ensure smooth adoption.",
  },
];

export default function SolutionsPage() {
  const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
  const [visibleSolutions, setVisibleSolutions] = useState<Set<number>>(new Set());
  const solutionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = solutionRefs.current.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleSolutions((prev) => new Set(prev).add(index));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    solutionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="solutions" className=" px-5 sm:px-6 py-16 sm:py-24">
      <div className="mx-auto pt-16 max-w-7xl">

        {/* HEADER */}
        <div className="max-w-6xl mt-8 sm:mt-12 mx-auto text-center mb-16 sm:mb-24">
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Travel Management Solutions
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Power Smarter Travel <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              With Intelligent Travel Software
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-600 font-medium max-w-6xl mx-auto hero-line">
            Our travel solutions help agencies, tour operators, and travel businesses
            streamline bookings, manage itineraries, automate operations, and deliver
            exceptional travel experiences from planning to completion.
          </p>
        </div>

        {/* THE GRID */}
        <div className="grid gap-px border  border-slate-100 rounded-[2rem] sm:rounded-[3rem] overflow-hidden">
          {solutions.slice().reverse().map((solution, index) => (
            <div
              key={solution.title}
              ref={(el) => { solutionRefs.current[index] = el; }}
              className={`group relative gap-12 md:gap-4 grid md:grid-cols-2 bg-white transition-all duration-700 ${
                visibleSolutions.has(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${(index % 2) * 150}ms` }}
            >
              {/* IMAGE SIDE */}
              <div className={`relative flex h-72 sm:h-96 md:h-[550px] items-center justify-center overflow-hidden bg-white p-6 sm:p-12 ${index % 2 === 1 ? 'md:order-last' : ''}`}>

                <div className="absolute h-52 w-52 sm:h-80 sm:w-80 rounded-[3rem] sm:rounded-[4rem] bg-white border border-slate-100 scale-110 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.08)]" />
                <div className="absolute h-52 w-52 sm:h-80 sm:w-80 rounded-[3rem] sm:rounded-[4rem] border-2 border-emerald-600/60 rotate-[25deg] scale-110" />
                <div className="absolute top-16 right-12 sm:top-24 sm:right-20 z-0 h-16 w-16 sm:h-24 sm:w-24 rounded-3xl bg-emerald-50/40 backdrop-blur-md border border-white/50 shadow-sm rotate-12" />

                <div className="relative z-10 flex flex-col items-center -translate-y-6 sm:-translate-y-12">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className=" sm:w-full sm:scale-125 md:w-[90%] md:scale-110 object-contain filter drop-shadow-[0_30px_50px_rgba(0,0,0,0.12)]"
                  />
                  <div className="absolute -bottom-10 sm:-bottom-16 h-8 sm:h-10 w-3/4 rounded-[100%] bg-emerald-600/50 blur-3xl opacity-100" />
                  <div className="absolute -bottom-4 sm:-bottom-8 h-2 w-1/2 rounded-[100%] bg-emerald-950/20 blur-md opacity-100" />
                </div>
              </div>

              {/* TEXT SIDE */}
              <div className="group relative flex flex-col justify-between p-8 sm:p-12 lg:p-20 lg:py-28 bg-slate-50 border border-transparent hover:bg-white hover:border-slate-200 transition-all duration-500">

                <div className="flex justify-between items-start">
                  <div className="space-y-1">
                    <p className="text-sm sm:text-xl font-semibold text-slate-800 uppercase tracking-widest">
                      {solution.subtitle}
                    </p>
                  </div>
                </div>

                <div className="mt-4 mb-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-none mb-4">
                    {solution.title}
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-md border-b border-slate-600 pb-6 sm:pb-8">
                    {solution.description}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <button
                    onClick={() => setSelectedSolution(solution)}
                    className="group relative rounded-3xl flex items-center gap-4 overflow-hidden bg-slate-900 px-6 sm:px-8 py-3 sm:py-4 text-white transition-all duration-300 active:scale-95"
                  >
                    <span className="absolute inset-0 z-0 h-full w-full translate-x-[-100%] bg-emerald-600 transition-transform duration-500 ease-out group-hover:translate-x-0" />
                    <span className="relative z-10 flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em]">
                      Send Requirement
                      <svg
                        className="h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-500 group-hover:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>
                    <span className="absolute inset-0 z-10 h-full w-full translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[200%]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ SECTION */}
      <div className="mt-20 sm:mt-32 max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12">
          <h3 className="text-sm font-semibold tracking-[0.25em] text-emerald-600 uppercase mb-3">
            Travel Solutions FAQ
          </h3>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 mb-2">
            Frequently Asked Questions
          </p>
          <p className="text-slate-800 max-w-2xl text-base sm:text-lg mx-auto">
            Clear answers to common questions about our travel management solutions.
          </p>
        </div>

        <div>
          {faqItems.map((item, index) => (
            <QuestionItem
              key={`${item.question}-${index}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>

      {/* MODAL — fixed overflow-y-scroll + overflow-hidden conflict */}
      {selectedSolution && createPortal(
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-md transition-all duration-500"
            onClick={() => setSelectedSolution(null)}
          />
          <div className="relative w-full max-w-2xl max-h-[94vh] overflow-y-auto bg-white shadow-2xl rounded-3xl animate-in fade-in zoom-in-95 duration-300">
            <div className="p-6 sm:p-8 lg:p-14">
              <InquiryForm
                inquiryType="solution"
                topic={selectedSolution.title}
                industry={selectedSolution.title}
                onSuccess={() => setSelectedSolution(null)}
                onClose={() => setSelectedSolution(null)}
                showCloseButton={true}
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}