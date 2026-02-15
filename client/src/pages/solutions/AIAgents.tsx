import React from "react";
import QuestionItem from "../../components/QuestionItem";
import WhyChooseLushWare from "../../components/WhyChooseLushWare";
import ValueCard from "../../components/ValueCard";
import { useNavigate } from "react-router-dom";

const AIAgents: React.FC = () => {
  const navigate = useNavigate();

  const faqItems = [
    {
      question: "What are AI Agents?",
      answer:
        "AI Agents are autonomous software programs that can perform tasks, make decisions, and interact with users or systems based on artificial intelligence algorithms."
    },
    {
      question: "What are AI Chatbots?",
      answer:
        "AI Chatbots are intelligent conversational agents that understand user inputs and provide automated responses, improving engagement and customer support."
    },
    {
      question: "How do AI solutions benefit my business?",
      answer:
        "AI Agents and Chatbots help streamline operations, enhance customer experience, automate repetitive tasks, and provide insights through data-driven intelligence."
    },
    {
      question: "Can AI Agents integrate with existing systems?",
      answer:
        "Yes. Our AI solutions can integrate seamlessly with CRM platforms, websites, mobile apps, and other business tools to enhance your workflows."
    },
    {
      question: "Is my data secure with AI solutions?",
      answer:
        "Absolutely. We implement strict security protocols and compliance measures to protect all business and customer data handled by our AI systems."
    }
  ];

  return (
    <section className="w-full py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="max-w-6xl mt-12 mx-auto text-center mb-16">

          <div className="flex items-center justify-center gap-2 mb-5 ">
            <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
              AI Agents & AI Chatbots
            </div>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-[#0F172A] tracking-tight leading-[1.1] mb-6 hero-line">
            Automate, Engage, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-800 via-emerald-500 to-emerald-800 hero-line">
              & Optimize with AI
            </span>
          </h1>

          <p className="text-xl text-slate-600 font-medium max-w-7xl mx-auto hero-line">
            Harness the power of AI Agents and Chatbots to automate tasks, enhance customer interactions, 
            and gain actionable insights through intelligent systems.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] blur-3xl transform scale-90 -z-10"></div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <img 
              src="/hero/chat.png" 
              alt="AI Agents Dashboard" 
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/60 via-transparent to-transparent"></div>

            {/* Floating Action Button on Image */}
            <div className="
              absolute 
              bottom-4 sm:bottom-6 lg:bottom-8 
              left-1/2 -translate-x-1/2 
              w-full px-4 sm:px-0 
              flex justify-center
            ">
              <button
                onClick={() => navigate("/contact")}
                className="
                  w-full sm:w-auto
                  max-w-xs sm:max-w-none
                  
                  bg-white text-[#1A1A1A]
                  px-6 sm:px-8 lg:px-12
                  py-3 sm:py-4
                  
                  text-xs sm:text-sm lg:text-base
                  font-bold tracking-wide
                  
                  rounded-full
                  shadow-xl
                  
                  transition-all duration-500
                  hover:bg-emerald-600 hover:text-white
                  hover:scale-105
                "
              >
                Learn How AI Can Help
              </button>
            </div>

          </div>
        </div>

        {/* AI Value & Benefits Section */}
        <div className="max-w-7xl py-20 mx-auto px-4 lg:px-0">

          {/* Section Intro */}
          <div className="max-w-5xl mx-auto text-center mb-20">
            <div className="flex items-center justify-center gap-2 mb-8 ">
              <div className="px-2 py-1 bg-emerald-600 text-[14px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                Business Impact
              </div>
            </div>
            <p className="text-2xl text-slate-600 font-medium">
              Our AI solutions help automate business operations, enhance engagement, and deliver intelligent insights for smarter decision-making.
            </p>
          </div>

          {/* 4 Pillars: Benefits & Value */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Automated Operations",
                desc: "AI Agents handle repetitive tasks, freeing up your team to focus on higher-value work.",
                link: "Automation"
              },
              {
                num: "02",
                title: "Intelligent Customer Engagement",
                desc: "Chatbots provide instant, personalized responses to improve customer satisfaction.",
                link: "Engagement"
              },
              {
                num: "03",
                title: "Data-Driven Insights",
                desc: "Analyze patterns and predict outcomes with AI-powered analytics.",
                link: "Insights"
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





        </div>

        {/* How We Add Value */}
        <section className=" py-16">
          <div className="max-w-7xl mx-auto">
            
            {/* Section Header */}
            <div className="mb-20 text-center md:text-left">
              <div className="flex items-center md:justify-start justify-center gap-2 mb-4 ">
                <div className="px-2 py-1 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                  AI Agents & AI Chatbots
                </div>
              </div>
              <h3 className="text-5xl md:text-7xl font-semibold text-slate-900 tracking-tight mb-8">
                How <span className="text-emerald-600  ">AI Agents</span> & Chatbots <br/> 
                Drive Your Enterprise
              </h3>
              <p className="text-2xl text-slate-800 max-w-5xl  leading-relaxed">
                Understand the role of AI Agents and Chatbots, and see how they deliver real business value through automation and intelligent insights.
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[minmax(300px,_auto)]">
              
              {/* 1. Large Feature: AI Agents (Dominant Emerald Card) */}
              <div className="md:col-span-8 group relative overflow-hidden rounded-[2.5rem] bg-[#062c1b] md:p-12 p-8 flex flex-col justify-end shadow-2xl">
                {/* Abstract Emerald Glow */}
                <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] group-hover:bg-emerald-500/20 transition-all duration-1000"></div>
                
                <div className="relative z-10">
                  <div className="inline-block px-5 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-[0.2em] mb-8">
                    Autonomous Excellence
                  </div>
                  <h4 className="text-4xl font-bold text-white mb-8 tracking-tight">About AI Agents</h4>
                  <p className="text-white text-xl leading-relaxed max-w-2xl font-light">
                    AI Agents are autonomous software programs capable of performing tasks, making decisions, and interacting with systems or users intelligently. They reduce manual workload, automate repetitive processes, and help teams focus on strategic activities.
                  </p>
                </div>
              </div>

              {/* 2. About AI Chatbots (Sophisticated Light Card) */}
              <div className="md:col-span-4 group rounded-[2.5rem] bg-white border border-emerald-200 md:p-10 p-6 hover:shadow-2xl hover:shadow-emerald-900/5 transition-all duration-500 flex flex-col">
                <div className="mb-auto">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                    </div>
                    <h4 className="text-3xl font-bold text-slate-700 tracking-tight mb-6">About AI Chatbots</h4>
                    <p className="text-slate-900 text-lg leading-relaxed ">
                        AI Chatbots are intelligent conversational agents that communicate with users in real-time. They enhance customer support and provide personalized experiences.
                    </p>
                </div>
              </div>

              {/* 3. How We Add Value (The Full-Width "Royal Banner" Card) */}
              <div className="md:col-span-12 group rounded-[2.5rem] bg-white border border-emerald-300 md:p-12 p-7 relative overflow-hidden">
                
                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-12">
                  <div className="md:max-w-xl">
                    <h4 className="text-4xl font-bold text-emerald-900 mb-4 tracking-tight">How We Add Value</h4>
                    <p className="text-slate-700 text-xl leading-relaxed ">
                      By combining AI Agents and Chatbots with your business systems, we deliver automation, actionable insights, and improved customer interactions.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="text-6xl font-serif  text-emerald-300 group-hover:text-emerald-300 transition-colors duration-500">Growth.</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Reusable Why Choose LushWare Section */}
        <WhyChooseLushWare />

        {/* FAQ Section */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center mb-4">
              <span className="px-3 py-1 text-[11px] font-bold tracking-[0.35em] text-emerald-700 bg-emerald-50 rounded-full uppercase">
                AI Solutions
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight mb-4 hero-line">
              AI Agents & AI Chatbots
            </h2>

            <p className="text-lg text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
              Automate customer interactions, enhance support, and streamline operations
              using intelligent AI-powered agents and chatbots.
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

export default AIAgents;
