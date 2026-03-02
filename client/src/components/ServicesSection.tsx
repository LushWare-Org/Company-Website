import { useNavigate } from "react-router-dom";

interface Service {
  number: string;
  title: string;
  desc: string;
  tags: string[];
  color: string;
}

const servicesData: Service[] = [
  {
    number: "01",
    title: "Product Development",
    desc: "We build strong software products from idea to launch, designed to grow with your business and users.",
    tags: ["SaaS Architecture", "Product Strategy"],
    color: "group-hover:text-blue-600"
  },
  {
    number: "02",
    title: "Custom Development",
    desc: "Custom software solutions made for your company, helping you save time, reduce cost, and work smarter.",
    tags: ["Enterprise Solutions", "Legacy Migration"],
    color: "group-hover:text-indigo-600"
  },
  {
    number: "03",
    title: "Mobile App Development",
    desc: "High-quality mobile apps for iOS and Android, built for smooth performance and great user experience.",
    tags: ["React Native", "Native Performance"],
    color: "group-hover:text-emerald-600"
  },
  {
    number: "04",
    title: "Web Development",
    desc: "Modern websites and web apps that look great, load fast, and help your business attract more customers.",
    tags: ["Fullstack JS", "SEO Optimized"],
    color: "group-hover:text-amber-600"
  },
  {
    number: "05",
    title: "Cloud System Development",
    desc: "Secure cloud-based systems that manage your data, improve operations, and support business automation.",
    tags: ["AWS/Azure", "Process Automation"],
    color: "group-hover:text-purple-600"
  },
  {
    number: "06",
    title: "AI Based Development",
    desc: "AI-powered tools and smart systems that help automate tasks, improve decisions, and boost efficiency.",
    tags: ["Gen AI", "Neural Workflows"],
    color: "group-hover:text-rose-600"
  }
];

export default function ServicesSection() {
  const navigate = useNavigate();

  return (
    <section data-reveal className=" bg-[#ffffff] px-6 py-20  relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-24">
          
          <div className="lg:w-1/3 lg:sticky lg:top-48 h-fit">
            <div className="flex flex-col pl-4 md:pl-0  ">
              <div className="flex items-center gap-2 mb-4 md:pl-2">
                <div className="px-2 py-0.5 bg-emerald-600 text-[10px] font-bold text-white uppercase tracking-[0.2em] rounded-sm">
                  Our Services
                </div>
              </div>

              <h2 className="text-5xl md:text-7xl  font-semibold text-slate-900 tracking-tighter leading-[0.95] mb-8">
                Our 
                Specialized Software <br /> 
                <span className="relative">
                  <span className="relative z-10 text-emerald-600">Solutions.</span>
                  <svg className="absolute -bottom-1 left-0 w-full h-0.5 text-emerald-300" viewBox="0 0 100 2" preserveAspectRatio="none">
                    <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </span>
              </h2>
              <div className="mt-4">
                <button
                  onClick={() => navigate("/solutions")}
                  className="group relative cursor-pointer overflow-hidden px-10 py-4 rounded-full bg-stone-900 transition-all duration-500 hover:shadow-[0_10px_30px_-10px_rgba(16,185,129,0.3)]"
                >
                  <span className="absolute inset-0 w-0 h-full bg-emerald-700 transition-all duration-500 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover:w-full"></span>
                  
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <span className="text-sm font-medium tracking-wide text-white transition-colors duration-500">
                      VIEW ALL SOLUTIONS
                    </span>

                    <div className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
                      <svg 
                        className="h-4 w-4 transform transition-all duration-500 text-white group-hover:translate-x-5" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                      <svg 
                        className="absolute h-4 w-4 -translate-x-5 transform transition-all duration-500 text-white group-hover:translate-x-0" 
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </span>
                </button>
              </div>

            </div>
          </div>

          <div className="lg:w-1/2 space-y-6">
            {servicesData.map((service) => (
              <div 
                key={service.number}
                className="group relative px-4 bg-white border-2 border-slate-200 group-hover:border-transparent  transition-all duration-500 rounded-3xl hover:shadow-[0_20px_50px_rgba(16,185,129,0.2)]  shadow-[0_20px_50px_rgba(0,0,0,0.1)] " >

              <span className="hidden md:block absolute bottom-2 right-4 text-8xl font-black text-slate-100 transition-all duration-1000 group-hover:text-emerald-100 group-hover:-translate-y-4 select-none">
                {service.number}
              </span>
                {/* Top-Left Path */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-emerald-500 rounded-tl-3xl opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out z-10" />

                {/* Bottom-Right Path */}
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-emerald-500 rounded-br-3xl opacity-0 group-hover:opacity-100 group-hover:w-full group-hover:h-full transition-all duration-700 ease-in-out z-10" />

                <div className="p-10 md:p-14 border border-slate-50 transition-all duration-500 group-hover:bg-slate-50/50">
                  <div className="flex flex-col gap-10">
                    

                    {/* Main Content */}
                    <div className="space-y-4">
                      <h3 className="text-3xl font-bold text-slate-900 uppercase tracking-tighter group-hover:tracking-wide transition-all duration-500">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-lg leading-relaxed font-normal max-w-lg border-l-2 border-slate-100 md:pl-6 pl-0 group-hover:border-emerald-500 transition-all duration-500">
                        {service.desc}
                      </p>
                    </div>

                    {/* Tags: Technical Chips */}
                    <div className="flex flex-wrap gap-3">
                      {service.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="px-3 py-1 bg-emerald-50 border border-emerald-400 text-[11px] rounded-lg font-mono font-bold text-emerald-700 group-hover:bg-emerald-600 group-hover:border-emerald-600 group-hover:text-white transition-all duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
