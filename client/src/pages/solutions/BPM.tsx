import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const BPM: React.FC = () => {
  const navigate = useNavigate();
  const faqItems = [
    {
      question: "What is Business Process Management (BPM)?",
      answer:
        "BPM is a systematic approach to improving and automating business processes, ensuring efficiency, transparency, and alignment with organizational goals."
    },
    {
      question: "How does BPM benefit my business?",
      answer:
        "BPM increases operational efficiency, reduces errors, enhances collaboration, and provides insights to continuously optimize workflows."
    },
    {
      question: "Can BPM integrate with existing systems?",
      answer:
        "Yes. BPM platforms can seamlessly integrate with ERP, CRM, HR, and other enterprise systems to unify data and workflows."
    },
    {
      question: "Is BPM suitable for small businesses?",
      answer:
        "Absolutely. BPM solutions are scalable and can be tailored to small businesses, growing startups, and large enterprises."
    },
    {
      question: "How does BPM ensure process optimization?",
      answer:
        "BPM provides monitoring, analytics, and reporting tools that help identify bottlenecks, track KPIs, and continuously improve business processes."
    }
  ];

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="max-w-6xl mt-12 mx-auto text-center mb-16">

          <div className="flex items-center justify-center gap-2 mb-2 ">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              Business Process Management
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Streamline Operations & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              Achieve Operational Excellence
            </span>
          </h1>

          <p className="text-xl text-slate-600 font-medium max-w-7xl mx-auto hero-line">
            Business Process Management (BPM) software helps organizations design, automate,
            monitor, and optimize workflows to improve efficiency, reduce costs, and ensure
            processes align with strategic objectives.
          </p>
        </div>

        {/* Middle Section: Product Image */}
        <div className="relative mb-24">
          <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform scale-90 -z-10"></div>
          <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img
              src="/hero/bm.jpg"
              alt="BPM Interface"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <button className="bg-white text-[#1A1A1A] px-12 py-4 rounded-full cursor-pointer font-bold shadow-xl hover:bg-emerald-600 duration-700 hover:text-white transition-all transform hover:scale-105"
                onClick={() => navigate("/contact")}
              >
                DISCOVER THE PLATFORM
              </button>
            </div>
          </div>
        </div>

        {/* BPM Value & Benefits Section */}
        <div className="max-w-8xl mx-auto px-6 lg:px-0">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-600 uppercase mb-4">
              Business Impact
            </h2>
            <p className="text-xl text-slate-600 font-medium">
              BPM software empowers organizations to streamline operations, optimize workflows,
              and achieve measurable business results.
            </p>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Process Automation",
                desc: "Automate repetitive tasks to save time and reduce human error.",
                link: "Automation"
              },
              {
                num: "02",
                title: "Workflow Optimization",
                desc: "Identify bottlenecks and optimize workflows for better efficiency.",
                link: "Optimization"
              },
              {
                num: "03",
                title: "Data-Driven Insights",
                desc: "Use analytics to monitor performance and make informed decisions.",
                link: "Analytics"
              },
              {
                num: "04",
                title: "Collaboration & Compliance",
                desc: "Ensure smooth collaboration across teams while maintaining regulatory compliance.",
                link: "Collaboration"
              }
            ].map((item, index) => (
              <ValueCard
                key={index}
                num={item.num}
                title={item.title}
                desc={item.desc}
                link={item.link}
              />
            ))}
          </div>

          {/* Divider */}
          <div className="my-24 border-t border-slate-200"></div>

            {/* BPM Overview Section - Gallery Style */}
            <section className="bg-white py-32 px-6">
              <div className="max-w-7xl mx-auto">
                
                {/* Header with Luxury Spacing */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                  <div>
                    <h2 className="text-emerald-700 font-black tracking-[0.1em] text-xs uppercase mb-8">
                      Operational Excellence
                    </h2>
                    <h3 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tighter leading-none">
                      Streamline, Optimize <br/>
                      <span className="text-emerald-600  font-normal">& Grow.</span>
                    </h3>
                  </div>
                  <div className="lg:pt-12">
                    <p className="text-2xl text-slate-700  leading-snug mb-6">
                      LushWare’s BPM solutions enable organizations to manage their processes more efficiently.
                    </p>
                    <div className="h-1 w-24 bg-emerald-600"></div>
                  </div>
                </div>

                {/* The Step-by-Step Architecture */}
                <div className="space-y-12">
                  
                  {/* 1. What is BPM - Large "Poster" Card */}
                  <div className="group relative grid grid-cols-1  lg:grid-cols-12 bg-slate-50 rounded-[3rem] overflow-hidden border border-slate-300 transition-all duration-700 hover:shadow-2xl hover:shadow-emerald-900/10">
                    <div className="lg:col-span-4 bg-emerald-800 p-12 flex flex-col justify-between text-white">
                      <span className="text-7xl font-serif italic opacity-50">01</span>
                      <h4 className="text-3xl font-bold tracking-tight">What is <br/> Business Process Management</h4>
                    </div>
                    <div className="lg:col-span-8 p-12 lg:p-16 flex items-center">
                      <p className="text-2xl text-slate-700 leading-relaxed ">
                        Business Process Management (BPM) is a <span className="text-slate-900 font-medium italic">structured approach</span> to analyzing, designing, automating, and improving your business processes. It ensures that every workflow is optimized to achieve strategic goals and operational efficiency.
                      </p>
                    </div>
                  </div>

                  {/* 2 & 3 Split Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    
                    {/* How it benefits */}
                    <div className="p-12 rounded-[3rem] border-2 border-emerald-200 hover:border-emerald-500 transition-all duration-500 group">
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-2xl font-serif italic text-emerald-600">02</span>
                        <div className="h-px flex-1 bg-emerald-300"></div>
                      </div>
                      <h4 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">How it Benefits Your Business</h4>
                      <p className="text-xl text-slate-900 leading-relaxed font-light group-hover:text-slate-900 transition-colors">
                        By implementing BPM, businesses can reduce process bottlenecks, improve collaboration between departments, and gain <span className="text-emerald-700 font-semibold">real-time visibility</span> into operations for faster, data-driven decisions.
                      </p>
                    </div>

                    {/* How we add value */}
                    <div className="p-12 rounded-[3rem] bg-emerald-900 text-white group relative overflow-hidden">
                      {/* Decorative Glow */}
                      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-400/20 blur-3xl"></div>
                      
                      <div className="flex items-center gap-4 mb-8">
                        <span className="text-2xl font-serif italic text-emerald-400">03</span>
                        <div className="h-px flex-1 bg-emerald-500"></div>
                      </div>
                      <h4 className="text-3xl font-bold mb-8 tracking-tight">How We Add Value</h4>
                      <p className="text-xl text-white leading-relaxed font-light">
                        LushWare customizes BPM solutions to align with your unique business goals. We provide automation, <span className="text-white font-medium">integration with your existing systems</span>, monitoring dashboards, and continuous support.
                      </p>
                    </div>

                  </div>
                </div>

                {/* Corporate Sign-off */}
                <div className="mt-24 text-center">
                    <p className="text-xs font-black tracking-[0.5em] text-slate-300 uppercase">
                      LushWare Proprietary Framework © 2026
                    </p>
                </div>
              </div>
            </section>


          <div className="my-24 border-t border-slate-200"></div>

        </div>

        <WhyChooseLushWare />

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-sm font-bold tracking-[0.3em] text-emerald-600 uppercase mb-4">
              BPM FAQ
            </h3>
            <p className="text-xl text-slate-600 font-medium">
              Clear answers to common questions about Business Process Management platforms.
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
      </div>
    </section>
  );
};

export default BPM;
