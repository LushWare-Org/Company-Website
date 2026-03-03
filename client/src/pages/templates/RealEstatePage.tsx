import { useState, useEffect} from "react";

export default function RealEstatePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiry: "Acquisition Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({
      name: "",
      email: "",
      inquiry: "Acquisition Inquiry",
      message: "",
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const properties = [
    {
      title: "The Mayfair Archive",
      loc: "London, W1K",
      priceGBP: "£8,450,000",
      priceLKR: "LKR 3.2B",
      img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000&auto=format&fit=crop",
      tag: "Off-Market",
      beds: 5,
      baths: 4,
      sqft: "4,200 sq ft",
      desc: "A meticulously restored Georgian townhouse set in the heart of Mayfair. Original cornicing, a private garden, and a wine cellar of remarkable character.",
    },
    {
      title: "The Koggala Pavilion",
      loc: "Southern Province, SL",
      priceGBP: "£2,100,000",
      priceLKR: "LKR 780M",
      img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
      tag: "New Acquisition",
      beds: 6,
      baths: 5,
      sqft: "6,800 sq ft",
      desc: "An architectural retreat on the southern coastline, inspired by the Geoffrey Bawa legacy. Infinity pool, private beach access, and full-service staff quarters.",
    },
    {
      title: "Belgravia Mews",
      loc: "London, SW1X",
      priceGBP: "£14,000,000",
      priceLKR: "LKR 5.3B",
      img: "https://images.unsplash.com/photo-1768067437750-f18d26d3397b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=1000&auto=format&fit=crop",
      tag: "Private Mandate",
      beds: 7,
      baths: 6,
      sqft: "7,100 sq ft",
      desc: "An extraordinary double-fronted mews house in Belgravia. Entirely reimagined interior with rooftop terrace and private garage — a rare London trophy asset.",
    },
    {
      title: "Cinnamon Gardens Residence",
      loc: "Colombo 07, SL",
      priceGBP: "£1,850,000",
      priceLKR: "LKR 690M",
      img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
      tag: "Exclusive Listing",
      beds: 4,
      baths: 3,
      sqft: "3,900 sq ft",
      desc: "Set in the leafy embassy quarter of Colombo, this contemporary residence offers refined living with smart home integration and landscaped tropical gardens.",
    },
    {
      title: "The Chelsea Penthouse",
      loc: "London, SW3",
      priceGBP: "£9,750,000",
      priceLKR: "LKR 3.7B",
      img: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=1000&auto=format&fit=crop",
      tag: "Premium",
      beds: 3,
      baths: 3,
      sqft: "2,800 sq ft",
      desc: "A spectacular penthouse with panoramic views across the Thames. Designed by an award-winning studio with bespoke joinery and a wraparound terrace.",
    },
    {
      title: "Galle Fort Heritage Villa",
      loc: "Galle, SL",
      priceGBP: "£3,200,000",
      priceLKR: "LKR 1.2B",
      img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=1000&auto=format&fit=crop",
      tag: "Heritage Asset",
      beds: 5,
      baths: 4,
      sqft: "5,500 sq ft",
      desc: "A UNESCO World Heritage-listed Dutch colonial villa within the ancient fort walls. A once-in-a-generation opportunity at the meeting of history and ocean.",
    },
  ];

  const team = [
    {
      name: "James Whitfield",
      title: "Managing Partner, London",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400&auto=format&fit=crop",
      bio: "Former Director at Knight Frank with 20 years specialising in prime London and cross-border acquisitions.",
    },
    {
      name: "Dilani Perera",
      title: "Head of Sri Lanka Operations",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
      bio: "A leading authority on Colombo's emerging luxury market, previously at JLL South Asia.",
    },
    {
      name: "Oliver Hartley",
      title: "Senior Acquisition Advisor",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
      bio: "Specialist in heritage and off-market residential estates across Greater London and the Home Counties.",
    },
  ];

  const process = [
    {
      num: "01",
      title: "Initial Consultation",
      desc: "A private briefing to understand your acquisition criteria, investment objectives, and confidentiality requirements.",
    },
    {
      num: "02",
      title: "Asset Identification",
      desc: "Our global network surfaces on-market and exclusive off-market opportunities matched precisely to your mandate.",
    },
    {
      num: "03",
      title: "Due Diligence",
      desc: "Rigorous institutional-grade legal, structural, and financial verification across both UK and Sri Lankan markets.",
    },
    {
      num: "04",
      title: "Seamless Completion",
      desc: "End-to-end transaction management, cross-border legal coordination, and post-acquisition concierge support.",
    },
  ];

  const testimonials = [
    {
      quote:
        "A highly professional service with a deep understanding of the UK–Sri Lanka corridor. Their discretion and market intelligence are truly exceptional.",
      author: "Managing Director",
      org: "International Investment Fund, Singapore",
    },
    {
      quote:
        "The team provided seamless support for our off-market acquisition in London. Their attention to detail and professionalism is world-class.",
      author: "Private Estate Principal",
      org: "London, UK",
    },
    {
      quote:
        "Transparent, efficient, and reliable. They are our first choice for any strategic property movement in Colombo.",
      author: "Portfolio Manager",
      org: "UHNWI Wealth Group, Dubai",
    },
  ];

  const insights = [
    {
      date: "March 2026",
      category: "Market Report",
      title: "The Resilience of Mayfair: Q1 Property Trends",
      excerpt:
        "An in-depth analysis of luxury residential market performance across Central London, with data-driven outlook for 2026.",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=600&auto=format&fit=crop",
    },
    {
      date: "February 2026",
      category: "Investment",
      title: "Heritage vs. New Build: Long-Term Asset Value",
      excerpt:
        "Evaluating the capital appreciation of Grade II listed estates compared to contemporary penthouses in the prime market.",
      img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
    },
    {
      date: "January 2026",
      category: "Global Reach",
      title: "Colombo: The Emerging Hub for UK Investors",
      excerpt:
        "Why British capital is flowing into the Port City development and Southern Province at an unprecedented rate.",
      img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=600&auto=format&fit=crop",
    },
  ];

  return (
    <div
      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      className="text-[#042921] bg-[#fcfbf7]"
    >
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; }
        .sans { font-family: 'DM Sans', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', serif; }
        .fade-in { animation: fadeUp 0.8s ease forwards; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .hover-line::after { content:''; display:block; width:0; height:1px; background:#d4af37; transition:width 0.5s ease; }
        .hover-line:hover::after { width:100%; }
        .nav-link { position:relative; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#d4af37; transition:width 0.4s; }
        .nav-link:hover::after { width:100%; }
        input, textarea, select { font-family: 'DM Sans', sans-serif; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #fcfbf7; }
        ::-webkit-scrollbar-thumb { background: #042921; }
      `}</style>

      {/*  NAVIGATION  */}
      <nav
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled ? "bg-[#fcfbf7] shadow-[0_4px_40px_rgba(4,41,33,0.08)] border-b border-[#042921]/10" : "bg-[#fcfbf7]/90 backdrop-blur-md border-b border-[#042921]/5"}`}
      >
        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 h-20 flex items-center justify-between">
          <div className="flex items-center gap-10">
            <div>
              <div
                className="text-2xl font-bold text-[#042921] tracking-tighter leading-none"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                PRIME<span className=" text-[#d4af37]">ABODE</span>
              </div>
              <div className="sans text-[8px] font-semibold uppercase tracking-[0.2em] text-[#042921]/80 mt-0.5">
                Global Real Estate Advisory
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {["Portfolio", "Advisory", "Insights", "About Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="nav-link sans text-[12px] font-semibold uppercase tracking-[0.25em] text-[#042921] hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <button className="hidden md:flex sans cursor-pointer items-center gap-3 bg-[#042921] text-[#fcfbf7] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#d4af37] hover:text-[#042921] transition-all duration-500 group">
              <span>Private Office</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
            <button
              className="lg:hidden p-2 flex flex-col gap-1.5"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-[1.5px] bg-[#042921] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`}
              ></div>
              <div
                className={`h-[1.5px] bg-[#042921] transition-all duration-300 ${mobileMenuOpen ? "opacity-0 w-6" : "w-4 ml-auto"}`}
              ></div>
              <div
                className={`w-6 h-[1.5px] bg-[#042921] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`}
              ></div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} bg-[#fcfbf7] border-t border-[#042921]/10`}
        >
          <div className="px-6 py-6 flex flex-col gap-6">
            {["Portfolio", "Advisory", "Insights", "About Us"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                onClick={() => setMobileMenuOpen(false)}
                className="sans text-[11px] font-semibold uppercase tracking-[0.3em] text-[#042921] hover:text-[#d4af37] transition-colors cursor-pointer"
              >
                {item}
              </a>
            ))}
            <button className="sans cursor-pointer flex items-center gap-3 bg-[#042921] text-[#fcfbf7] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-[#d4af37] hover:text-[#042921] transition-all duration-500 group w-full justify-center mt-2">
              <span>Private Office</span>
              <span className="group-hover:translate-x-1 transition-transform">
                →
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/*  HERO  */}
      <section className="relative bg-[#fcfbf7] min-h-screen flex items-center overflow-hidden pt-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-green-800/[0.25]"></div>
        </div>

        <div className="max-w-[1700px] mx-auto px-6 lg:px-16 w-full relative z-10 py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 lg:space-y-10 fade-in">
              <div className="flex items-center gap-4">
                <span className="w-10 h-px bg-[#d4af37]"></span>
                <span className="sans text-[10px] font-bold uppercase tracking-[0.8em] text-[#d4af37]">
                  London · Colombo · Global
                </span>
              </div>
              <h1
                className="text-5xl sm:text-7xl md:text-8xl lg:text-[6.5rem] text-[#042921] leading-[0.85] tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Where
                <br />
                <span className="text-[#d4af37]">Legacy</span>
                <br />
                Resides.
              </h1>
              <p className="serif text-base sm:text-lg lg:text-xl text-[#042921] leading-relaxed max-w-lg font-semibold">
                "Facilitating the acquisition of extraordinary properties across
                the world's most resilient markets — with uncompromising
                discretion."
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-2 lg:pt-4">
                <button className="group cursor-pointer sans bg-[#042921] text-[#fcfbf7] px-8 sm:px-10 py-4 sm:py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:bg-[#d4af37] hover:text-[#042921] transition-all duration-500 relative overflow-hidden">
                  <span className="relative z-10">Explore Portfolio</span>
                </button>
                <button className="group cursor-pointer sans border border-[#042921]/20 text-[#042921] px-8 sm:px-10 py-4 sm:py-5 text-[11px] font-bold uppercase tracking-[0.4em] hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-500">
                  Speak to an Advisor
                </button>
              </div>

              {/* Mobile property cards — hidden on lg+ */}
              <div className="grid grid-cols-2 gap-3 pt-4 lg:hidden">
                <div className="relative overflow-hidden aspect-[3/4] shadow-xl group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                    alt="Prime London Property"
                    className="w-full h-full object-cover grayscale-[20%]"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#042921]/80 to-transparent p-3 sm:p-4">
                    <p className="sans text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                      Mayfair, London
                    </p>
                    <p
                      className="text-white text-sm font-semibold mt-0.5"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      £8.45M
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3">
                  <div className="relative overflow-hidden aspect-[3/4] shadow-xl group flex-1">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
                      alt="Sri Lanka Pavilion"
                      className="w-full h-full object-cover grayscale-[20%]"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#042921]/80 to-transparent p-3 sm:p-4">
                      <p className="sans text-[9px] sm:text-[11px] font-bold uppercase tracking-widest text-[#d4af37]">
                        Southern Province, SL
                      </p>
                      <p
                        className="text-white text-sm font-semibold mt-0.5"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        LKR 780M
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#042921] p-3 sm:p-4 text-[#fcfbf7]">
                    <p className="sans text-[9px] font-bold uppercase tracking-widest text-[#d4af37] mb-1">
                      Current Market
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      1,248 Listings
                    </p>
                    <p className="sans text-xs text-[#fcfbf7]/60 mt-0.5">
                      UK & Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop property grid — hidden below lg */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 pt-12">
                  <div className="relative overflow-hidden aspect-[3/4] shadow-2xl group">
                    <img
                      src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop"
                      alt="Prime London Property"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#042921]/80 to-transparent p-6">
                      <p className="sans text-[12px] font-bold uppercase tracking-widest text-[#d4af37]">
                        Mayfair, London
                      </p>
                      <p
                        className="text-white font-semibold mt-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        £8.45M
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="relative overflow-hidden aspect-[3/4] shadow-2xl group">
                    <img
                      src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop"
                      alt="Sri Lanka Pavilion"
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#042921]/80 to-transparent p-6">
                      <p className="sans text-[12px] font-bold uppercase tracking-widest text-[#d4af37]">
                        Southern Province, SL
                      </p>
                      <p
                        className="text-white font-semibold mt-1"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        LKR 780M
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#042921] p-6 text-[#fcfbf7]">
                    <p className="sans text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-2">
                      Current Market
                    </p>
                    <p
                      className="text-lg font-semibold"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      1,248 Verified Listings
                    </p>
                    <p className="sans text-md text-[#fcfbf7]/60 mt-1">
                      Across UK & Sri Lanka
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 right-16 hidden lg:block -rotate-90 origin-right">
          <p className="sans text-[9px] font-bold uppercase tracking-[0.6em] text-[#042921]/20">
            RICS Regulated · FCA Compliant · Est. 1998
          </p>
        </div>
      </section>

      {/* PROPERTY SEARCH */}
      <section
        className="bg-white py-12 lg:py-16 px-6 lg:px-16 border-y border-[#042921]/8"
        id="portfolio"
      >
        <div className="max-w-[1700px] mx-auto">
          <div className="flex justify-between items-center mb-6 lg:mb-8">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse"></div>
              <h3
                className="text-lg lg:text-xl text-[#042921]"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Global Asset{" "}
                <span className="text-[#d4af37]">Intelligence.</span>
              </h3>
            </div>
          </div>

          <div className="bg-[#fcfbf7] border border-[#042921]/8 shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#042921]/8">
              <div className="md:col-span-5 p-5 lg:p-7 flex flex-col gap-2 lg:gap-3">
                <label className="sans text-[12px] font-bold uppercase tracking-widest text-[#d4af37]">
                  Location
                </label>
                <input
                  className="sans bg-transparent text-lg lg:text-xl text-[#042921] outline-none placeholder:text-[#042921]/25 font-medium"
                  placeholder="Mayfair, London or Colombo 07..."
                />
              </div>
              <div className="md:col-span-4 p-5 lg:p-7 flex flex-col gap-2 lg:gap-3">
                <label className="sans text-[12px] font-bold uppercase tracking-widest text-[#d4af37]">
                  Asset Type
                </label>
                <select className="bg-transparent sans text-base lg:text-lg text-[#042921] outline-none appearance-none cursor-pointer font-medium">
                  <option>All Asset Classes</option>
                  <option>Prime Residential</option>
                  <option>Commercial Investment</option>
                  <option>Heritage & Listed</option>
                  <option>Development Sites</option>
                </select>
              </div>
              <div className="md:col-span-3">
                <button className="w-full cursor-pointer h-full min-h-[64px] lg:min-h-[80px] bg-[#042921] text-[#fcfbf7] flex items-center justify-center gap-4 hover:bg-[#d4af37] hover:text-[#042921] transition-all duration-500 group">
                  <span className="sans text-[13px] lg:text-[14px] font-bold uppercase tracking-[0.5em]">
                    Search
                  </span>
                  <span className="text-xl lg:text-2xl group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-[#042921]/8 border-t border-[#042921]/8">
              {[
                {
                  label: "Listing Status",
                  options: [
                    "All Listings",
                    "Exclusive Off-Market",
                    "Active Mandates",
                  ],
                },
                {
                  label: "Price Range",
                  options: ["£1M — £5M", "£5M — £20M", "£20M+"],
                },
                {
                  label: "Tenure",
                  options: [
                    "Freehold Only",
                    "Leasehold 999yr",
                    "Shared Freehold",
                  ],
                },
                {
                  label: "Target Yield",
                  options: ["3.5% — 5.0%", "5.0% — 8.5%", "Value-Add"],
                },
                {
                  label: "Bedrooms",
                  options: ["2 — 3 Beds", "4 — 5 Beds", "6+ Beds"],
                },
              ].map((f, i) => (
                <div
                  key={i}
                  className={`p-4 lg:p-5 hover:bg-[#042921]/[0.015] transition-all ${i === 4 ? "hidden md:block" : ""}`}
                >
                  <label className="sans text-[10px] lg:text-[12px] font-bold uppercase tracking-tighter text-[#042921]/50 block mb-1.5 lg:mb-2">
                    {f.label}
                  </label>
                  <select className="w-full sans bg-transparent text-sm lg:text-md font-semibold text-[#042921] outline-none appearance-none cursor-pointer">
                    {f.options.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  FEATURED PROPERTIES*/}
      <section className="bg-[#fcfbf7] py-16 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 lg:mb-20 border-b border-[#042921]/10 pb-8 lg:pb-12 gap-8 md:gap-0">
            <div className="w-full">
              <p className="sans text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.35em] sm:tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
                Prime Selection
              </p>

              <h2
                className="text-3xl sm:text-5xl md:text-7xl text-[#042921] leading-[1.05] md:leading-none tracking-tight md:tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Featured
                <br />
                <span>Residences.</span>
              </h2>
            </div>

            {/* Desktop Right Side (unchanged) */}
            <div className="hidden md:block text-right pb-2">
              <p className="sans text-[12px] uppercase tracking-[0.4em] text-[#042921]/40 font-bold mb-3">
                Audited Mandates · 2026
              </p>

              <button className="sans group cursor-pointer flex items-center gap-4 text-[12px] font-bold uppercase tracking-[0.25em] text-[#042921] hover:text-[#d4af37] transition-colors ml-auto">
                <span>View All Properties</span>
                <div className="w-8 h-px bg-current group-hover:w-16 transition-all duration-500"></div>
              </button>
            </div>

            {/* Mobile CTA */}
            <div className="md:hidden pt-4 border-t border-[#042921]/10">
              <p className="sans text-[10px] uppercase tracking-[0.3em] text-[#042921]/40 font-bold mb-4">
                Audited Mandates · 2026
              </p>

              <button className="sans group flex items-center justify-between w-full text-[11px] font-bold uppercase tracking-[0.2em] text-[#042921]">
                <span>View All Properties</span>
                <div className="w-6 h-px bg-current"></div>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 sm:gap-10 lg:gap-14">
            {properties.map((p, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[4/3] sm:aspect-[3/4] overflow-hidden bg-[#042921]/5 mb-5 lg:mb-8">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute top-0 right-0 bg-[#042921] text-[#fcfbf7] px-4 lg:px-5 py-2 sans text-[10px] font-bold uppercase tracking-widest">
                    {p.tag}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042921]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
                      <p className="serif text-[#fcfbf7] text-base lg:text-lg font-semibold leading-relaxed">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="sans text-[11px] font-bold uppercase tracking-[0.25em] text-[#d4af37] mb-0.5">
                        {p.loc}
                      </p>
                      <h3
                        className="text-xl lg:text-2xl text-[#042921] transition-all duration-400"
                        style={{ fontFamily: "'Playfair Display', serif" }}
                      >
                        {p.title}
                      </h3>
                    </div>
                  </div>
                  <div className="sans flex items-center gap-3 lg:gap-4 text-[13px] lg:text-[14px] text-[#042921]/50 font-semibold">
                    <span>{p.beds} bed</span>
                    <div className="w-1 h-1 rounded-full bg-[#042921]/20"></div>
                    <span>{p.baths} bath</span>
                    <div className="w-1 h-1 rounded-full bg-[#042921]/20"></div>
                    <span>{p.sqft}</span>
                  </div>
                  <div className="flex justify-between items-center pt-3 lg:pt-4 border-t border-[#042921]/20">
                    <p
                      className="text-xl lg:text-2xl font-semibold text-[#042921]"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.priceGBP ? `£${p.priceGBP}` : `Rs ${p.priceLKR}`}
                    </p>
                    <div className="w-8 h-8 lg:w-9 lg:h-9 border border-[#042921]/30 rounded-full flex items-center justify-center group-hover:bg-[#042921] group-hover:text-[#fcfbf7] transition-all duration-500">
                      <span className="text-xs font-bold group-hover:translate-x-0.5 transition-transform">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-16 text-center px-4 sm:px-0">
            <button
              className="
      sans cursor-pointer
      w-full sm:w-auto
      bg-[#042921] text-[#fcfbf7]
      px-6 sm:px-8 lg:px-10
      py-3 sm:py-4 lg:py-5
      text-[11px] sm:text-[12px]
      font-bold uppercase
      tracking-[0.25em] sm:tracking-[0.4em] lg:tracking-[0.5em]
      hover:bg-[#d4af37] hover:text-[#042921]
      transition-all duration-500
      min-h-[48px]
    "
            >
              View All 1,248 Properties
            </button>
          </div>
        </div>
      </section>

      {/* ASSET CATEGORIES  */}
      <section className="bg-white py-16 lg:py-28 px-6 lg:px-16 border-y border-[#042921]/10">
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
            <div className="lg:w-1/3 lg:sticky lg:top-48 space-y-6 lg:space-y-8">
              <div>
                <p className="sans text-[12px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
                  Asset Index
                </p>
                <h2
                  className="text-5xl sm:text-6xl md:text-8xl text-[#042921] leading-[0.85] tracking-tighter"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  The
                  <br />
                  <span>Class</span>
                  <br />
                  <span className="text-[#d4af37]">Index.</span>
                </h2>
              </div>
              <p className="serif text-base lg:text-xl font-semibold text-[#042921] leading-relaxed max-w-xs">
                A definitive classification of high-yield assets across the
                London–Colombo investment corridor.
              </p>
            </div>

            <div className="lg:w-2/3 w-full divide-y divide-[#042921]/20 border-t border-[#042921]/8">
              {[
                {
                  name: "Heritage Villas",
                  loc: "London / Galle",
                  type: "Historical Assets",
                },
                {
                  name: "Sky Residences",
                  loc: "Colombo 01 / London SE1",
                  type: "Urban Luxury",
                },
                {
                  name: "Prime Land",
                  loc: "Port City / Home Counties",
                  type: "Strategic Holding",
                },
                {
                  name: "Coastal Estates",
                  loc: "Southern Province, SL",
                  type: "Bespoke Retreats",
                },
                {
                  name: "Boutique Hotels",
                  loc: "Cultural Triangle, SL",
                  type: "Hospitality Assets",
                },
                {
                  name: "Penthouse Suites",
                  loc: "Mayfair / Kensington",
                  type: "Elite Residential",
                },
                {
                  name: "Industrial Assets",
                  loc: "Logistics Corridors",
                  type: "Infrastructure",
                },
                {
                  name: "Rural Retreats",
                  loc: "The Cotswolds, UK",
                  type: "Private Estate",
                },
                {
                  name: "New Developments",
                  loc: "Emerging Markets",
                  type: "Growth Portfolio",
                },
                {
                  name: "Private Islands",
                  loc: "Exclusive Mandates",
                  type: "Ultra-Prime",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveCategory(idx)}
                  onMouseLeave={() => setActiveCategory(null)}
                  className={`group py-6 lg:py-9 px-3 lg:px-5 flex flex-col md:flex-row md:items-center justify-between transition-all duration-500 cursor-pointer ${activeCategory === idx ? "bg-[#042921]/[0.025]" : ""}`}
                >
                  <div className="flex items-baseline gap-4 lg:gap-8">
                    <span className="sans font-mono text-[11px] lg:text-[12px] text-[#d4af37] opacity-90 group-hover:opacity-100 transition-opacity shrink-0">
                      [{String(idx + 1).padStart(2, "0")}]
                    </span>
                    <h3
                      className={`text-2xl sm:text-3xl md:text-4xl text-[#042921] transition-all duration-400 ${activeCategory === idx ? "translate-x-3" : ""}`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.name}
                    </h3>
                  </div>
                  <div className="mt-2 md:mt-0 pl-8 md:pl-0 md:text-right">
                    <p className="sans text-[11px] lg:text-[12px] font-bold uppercase tracking-widest text-[#042921] group-hover:text-[#d4af37] transition-colors">
                      {item.loc}
                    </p>
                    <p className="sans text-[10px] lg:text-[11px] uppercase tracking-[0.25em] text-[#042921]/50 font-semibold mt-0.5">
                      {item.type}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/*  OUR PROCESS  */}
      <section
        className="bg-[#042921] py-16 lg:py-28 px-6 lg:px-16"
        id="advisory"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start pb-10 lg:pb-14">
            <div>
              <p className="sans text-[11px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
                How We Work
              </p>
              <h2
                className="text-4xl sm:text-5xl md:text-7xl text-[#fcfbf7] leading-none tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Our <span>Advisory</span>
                <br />
                Process.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-[#fcfbf7]/40">
            {process.map((p, i) => (
              <div
                key={i}
                className="p-7 lg:p-10 border-b sm:border-b lg:border-b-0 lg:border-r border-[#fcfbf7]/10 last:border-r-0 sm:[&:nth-child(2)]:border-r sm:[&:nth-child(2)]:lg:border-r-0 sm:[&:nth-child(3)]:border-r-0 sm:[&:nth-child(3)]:lg:border-r sm:[&:nth-child(3n)]:border-r-0 group hover:bg-[#fcfbf7]/[0.03] transition-all duration-500"
              >
                <div className="space-y-6 lg:space-y-8">
                  <span className="sans font-mono text-[13px] text-[#d4af37] block">
                    / {p.num}
                  </span>
                  <div className="space-y-3 lg:space-y-4">
                    <h3
                      className="text-lg lg:text-xl text-[#fcfbf7] transition-all duration-400"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="sans text-sm text-[#fcfbf7]/90 leading-relaxed font-light">
                      {p.desc}
                    </p>
                  </div>
                  <div className="w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-700"></div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 lg:mt-16 text-center">
            <button className="sans cursor-pointer w-full sm:w-auto border border-[#d4af37]/40 text-[#d4af37] px-12 py-4 lg:py-5 text-[12px] font-bold uppercase tracking-[0.5em] hover:bg-[#d4af37] hover:text-[#042921] transition-all duration-500">
              Begin Your Advisory
            </button>
          </div>
        </div>
      </section>

      {/*  WHY PRIMEABODE  */}
      <section className="bg-[#fcfbf7] py-16 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-8 lg:space-y-10">
              <div>
                <p className="sans text-[11px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
                  Strategic Advantage
                </p>
                <h2
                  className="text-4xl sm:text-5xl md:text-7xl text-[#042921] leading-none tracking-tighter"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Why <span>Prime</span>
                  <br />
                  Abode.
                </h2>
              </div>
              <p className="serif text-base lg:text-xl text-[#042921] leading-relaxed font-semibold">
                With leadership based in London and an operations hub in
                Colombo, we offer data-driven property advisory that traditional
                agencies simply cannot match.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                {[
                  {
                    title: "Verified Portfolios",
                    desc: "Every asset is subjected to institutional-grade verification for your complete peace of mind.",
                    icon: "◆",
                  },
                  {
                    title: "Retained Advisors",
                    desc: "Our consultants operate under a retained mandate model, ensuring total loyalty to you.",
                    icon: "◆",
                  },
                  {
                    title: "Cross-Border Legal",
                    desc: "Full-spectrum legal support bridging UK compliance with Sri Lankan land law.",
                    icon: "◆",
                  },
                  {
                    title: "Corridor Expertise",
                    desc: "Unparalleled intelligence on the UK–Sri Lanka investment corridor.",
                    icon: "◆",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="group p-5 lg:p-7 bg-white border border-[#042921]/6 hover:border-[#d4af37]/50 hover:shadow-lg transition-all duration-500"
                  >
                    <h4
                      className="text-base font-semibold text-[#042921] mb-2 lg:mb-3 transition-all"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="sans text-sm text-[#042921] leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-4 lg:mt-0">
              <div className="relative overflow-hidden aspect-[1] shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1769028885299-c5c3503d6778?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=800&auto=format&fit=crop"
                  alt="Advisory Excellence"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#042921]/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <p className="sans text-[11px] font-bold uppercase tracking-widest text-[#d4af37] mb-1">
                    Our Promise
                  </p>
                  <p
                    className="text-white text-xl lg:text-2xl font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    Absolute Discretion.
                    <br />
                    Unmatched Results.
                  </p>
                </div>
                {/* Mobile badge — inside image on small screens */}
                <div className="absolute top-4 right-4 bg-[#d4af37] p-4 text-[#042921] lg:hidden">
                  <p
                    className="text-2xl font-bold leading-none"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    28<sup className="text-xs">yr</sup>
                  </p>
                  <p className="sans text-[9px] uppercase tracking-widest font-bold mt-1">
                    Excellence
                  </p>
                </div>
              </div>
              {/* Desktop badge — outside image */}
              <div className="absolute -bottom-6 -right-6 bg-[#d4af37] p-6 text-[#042921] hidden lg:block">
                <p
                  className="text-3xl font-bold"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  28<sup className="text-base">yr</sup>
                </p>
                <p className="sans text-[11px] uppercase tracking-widest font-bold mt-1">
                  Excellence
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ABOUT  */}
      <section
        className="bg-white py-16 lg:py-28 px-6 lg:px-16 border-y border-[#042921]/8"
        id="about-us"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 space-y-8 lg:space-y-10">
              <div>
                <p className="sans text-[11px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
                  Our Story
                </p>
                <h2
                  className="text-5xl sm:text-6xl md:text-8xl text-[#042921] leading-[0.85] tracking-tighter"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  The
                  <br />
                  <span className="text-[#d4af37]">Authority.</span>
                </h2>
              </div>
              <div className="border-l-2 border-[#d4af37]/60 pl-6 lg:pl-8 space-y-3 lg:space-y-4">
                <p className="serif text-lg sm:text-xl lg:text-2xl text-[#042921]/90 leading-relaxed font-semibold">
                  "We facilitate the silent movement of capital between the
                  world's most resilient property markets."
                </p>
                <p className="sans text-[10px] uppercase tracking-[0.4em] text-[#042921] font-bold">
                  London · Colombo · Global
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-10 lg:space-y-14">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-8">
                <div className="p-6 lg:p-8 bg-[#fcfbf7] border border-[#042921]/15 hover:border-[#d4af37]/40 hover:shadow-md transition-all duration-500">
                  <p className="sans text-[12px] text-[#d4af37] font-bold uppercase tracking-widest mb-3 lg:mb-4">
                    01 / Discretion
                  </p>
                  <p className="sans text-sm lg:text-md text-[#042921] leading-relaxed font-light">
                    PrimeAbode operates exclusively through private mandates. We
                    specialise in off-market acquisitions where privacy is the
                    ultimate asset — and your interests are always paramount.
                  </p>
                </div>
                <div className="p-6 lg:p-8 bg-[#fcfbf7] border border-[#042921]/15 hover:border-[#d4af37]/40 hover:shadow-md transition-all duration-500">
                  <p className="sans text-[12px] text-[#d4af37] font-bold uppercase tracking-widest mb-3 lg:mb-4">
                    02 / The Corridor
                  </p>
                  <p className="sans text-sm lg:text-md text-[#042921] leading-relaxed font-light">
                    As the definitive bridge between the UK and Sri Lanka, we
                    provide a seamless portal for both institutional and private
                    investors seeking the best of both markets.
                  </p>
                </div>
              </div>

              <p className="serif text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed text-[#042921]">
                With a leadership team rooted in{" "}
                <span className="text-[#d4af37]">London</span> and an
                engineering hub in{" "}
                <span className="text-[#d4af37]">Colombo</span>, PrimeAbode is
                uniquely positioned to deliver property advisory that
                traditional agencies cannot match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  TEAM  */}
      <section className="bg-[#fcfbf7] py-16 lg:py-28 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 lg:mb-16 border-b border-[#042921]/20 pb-6 lg:pb-8 flex flex-col md:flex-row justify-between items-start gap-3">
            <div>
              <p className="sans text-[11px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
                Our People
              </p>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-[#042921] tracking-tighter"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The <span>Leadership</span> Team.
              </h2>
            </div>
            <p className="sans text-[12px] text-[#042921] uppercase tracking-widest font-bold ">
              Trusted by the World's Most Discerning Clients
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-10">
            {team.map((m, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[3/4] mb-5 lg:mb-7">
                  <img
                    src={m.img}
                    alt={m.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042921]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-7">
                      <p className="serif text-[#fcfbf7] text-base lg:text-xl font-light leading-relaxed">
                        {m.bio}
                      </p>
                    </div>
                  </div>
                  {/* Mobile bio — always visible below image on small screens */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#042921]/60 to-transparent sm:hidden">
                    <p className="serif text-[#fcfbf7] text-sm font-light leading-relaxed line-clamp-2">
                      {m.bio}
                    </p>
                  </div>
                </div>
                <h4
                  className="text-xl lg:text-2xl font-semibold text-[#042921] group-hover:text-[#d4af37] transition-all"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {m.name}
                </h4>
                <p className="sans text-[11px] lg:text-[12px] uppercase tracking-[0.25em] text-[#d4af37] font-bold mt-0.5">
                  {m.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  TESTIMONIALS  */}
      <section className="bg-[#042921] py-14 lg:py-20 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="mb-10 lg:mb-16 border-b border-[#fcfbf7]/40 pb-8 lg:pb-12">
            <p className="sans text-[11px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
              Client Testimonials
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl text-[#fcfbf7] tracking-tighter"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Words of <span>Trust.</span>
            </h2>
          </div>

          <div className="space-y-0 divide-y divide-[#fcfbf7]/30">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="group py-6 lg:py-10 flex flex-col md:grid md:grid-cols-4 gap-0 lg:gap-8 hover:bg-[#fcfbf7]/[0.02] transition-all px-3"
              >
                <div className="flex items-center md:flex-col md:items-start gap-2 md:gap-0 mb-3 md:mb-0">
                  <p className="sans text-[11px] lg:text-[14px] font-bold uppercase tracking-widest text-[#d4af37] leading-tight">
                    {t.author}
                  </p>
                  <span className="text-[#fcfbf7]/20 md:hidden text-xs">·</span>
                  <p className="sans text-[10px] lg:text-[12px] text-[#fcfbf7]/50 uppercase tracking-wider md:mt-1 leading-tight">
                    {t.org}
                  </p>
                </div>
                <div className="md:col-span-3 border-l border-[#d4af37]/20 pl-4 md:border-none md:pl-0">
                  <p className="serif text-base sm:text-lg md:text-2xl text-[#fcfbf7]/90 leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  INSIGHTS / BLOG  */}
      <section
        className="bg-[#fcfbf7] py-16 lg:py-28 px-6 lg:px-16"
        id="insights"
      >
        <div className="max-w-[1600px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 lg:mb-16 border-b border-[#042921]/30 pb-8 lg:pb-12 gap-4">
            <div>
              <p className="sans text-[11px] font-bold uppercase tracking-[0.5em] text-[#d4af37] mb-3 lg:mb-4">
                Market Intelligence
              </p>
              <h2
                className="text-4xl sm:text-5xl md:text-6xl text-[#042921] tracking-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The <span className="text-[#d4af37]">Abode</span> Journal.
              </h2>
            </div>
            <a
              href="#"
              className="sans group flex items-center gap-3 text-[13px] font-bold uppercase tracking-[0.3em] text-[#042921] hover:text-[#d4af37] transition-colors md:pb-2 md:hidden"
            >
              <span>All Insights</span>
              <span className="group-hover:translate-x-1.5 transition-transform">
                →
              </span>
            </a>
            <a
              href="#"
              className="sans group hidden md:flex items-center gap-4 text-[14px] font-bold uppercase tracking-[0.3em] text-[#042921] hover:text-[#d4af37] transition-colors pb-2"
            >
              <span>All Insights</span>
              <span className="group-hover:translate-x-1.5 transition-transform">
                →
              </span>
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            {insights.map((post, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-video mb-5 lg:mb-7">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-800"
                  />
                  <div className="absolute top-0 left-0 bg-[#042921] text-[#d4af37] px-3 lg:px-4 py-2 sans text-[10px] lg:text-[11px] font-bold uppercase tracking-widest">
                    {post.category}
                  </div>
                </div>
                <div className="space-y-3 lg:space-y-4">
                  <div className="flex justify-between sans text-[11px] lg:text-[12px] font-bold uppercase tracking-widest">
                    <span className="text-[#042921]">{post.date}</span>
                    <span className="text-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity">
                      Read →
                    </span>
                  </div>
                  <h3
                    className="text-xl lg:text-2xl text-[#042921] leading-snug transition-all duration-300"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {post.title}
                  </h3>
                  <p className="sans text-sm lg:text-md font-light leading-relaxed text-[#042921]">
                    {post.excerpt}
                  </p>
                  <div className="w-0 h-px bg-[#d4af37] group-hover:w-full transition-all duration-700 mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  CTA BANNER  */}
      <section className="bg-[#042921] py-20 lg:py-28 px-6 lg:px-16 relative overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[22vw] sm:text-[18vw] font-bold text-[#fcfbf7]/[0.06] uppercase tracking-tighter pointer-events-none select-none"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Heritage
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex justify-center items-center gap-4 lg:gap-5 mb-6 lg:mb-8">
            <div className="h-px w-8 lg:w-12 bg-[#d4af37]/50"></div>
            <span className="sans text-[10px] lg:text-[11px] uppercase tracking-[0.6em] text-[#d4af37] font-bold">
              Private Inquiries
            </span>
            <div className="h-px w-8 lg:w-12 bg-[#d4af37]/50"></div>
          </div>
          <h2
            className="text-4xl sm:text-5xl md:text-7xl text-[#fcfbf7] mb-5 lg:mb-6 tracking-tighter leading-[1.1]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Begin Your <span className="text-[#d4af37]">Heritage</span> Journey.
          </h2>
          <p className="serif text-lg sm:text-xl lg:text-2xl text-[#fcfbf7] mb-7 lg:mb-8 leading-relaxed font-light max-w-3xl mx-auto">
            From the historic squares of London to the emerging horizons of
            Colombo, our advisors are ready to secure your next significant
            asset.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-5 justify-center">
            <button className="sans cursor-pointer group relative bg-[#d4af37] text-[#042921] font-bold uppercase tracking-[0.3em] text-[12px] px-10 lg:px-12 py-5 lg:py-6 hover:bg-white transition-all duration-500 overflow-hidden">
              <span className="relative z-10">Consult an Associate</span>
            </button>
            <button className="sans cursor-pointer text-[#fcfbf7] font-bold uppercase tracking-[0.3em] text-[12px] px-10 py-5 lg:py-6 border border-[#fcfbf7]/20 hover:border-[#d4af37] hover:text-[#d4af37] transition-all duration-500">
              View Global Map
            </button>
          </div>
        </div>
      </section>

      {/*  CONTACT  */}
      <section
        className="py-14 lg:py-28 px-5 lg:px-16 bg-[#f9f6ee] overflow-x-hidden"
        id="contact"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 lg:mb-20">
            <p className="sans text-[11px] font-bold uppercase tracking-[0.6em] text-[#d4af37] mb-3 lg:mb-4">
              Get in Touch
            </p>
            <h2
              className="text-3xl sm:text-4xl lg:text-6xl text-[#042921]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Connect with the <span>Private Office.</span>
            </h2>
            <div className="w-16 h-px bg-[#d4af37] mx-auto mt-5 lg:mt-6"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-start">
            <div className="lg:col-span-2 space-y-7 lg:space-y-10">
              {[
                {
                  country: "United Kingdom HQ",
                  addr1: "45 Berkeley Square, Mayfair",
                  addr2: "London, W1J 5AS",
                  phone: "+44 (0) 20 7946 0011",
                  img: "https://images.unsplash.com/photo-1616587896595-51352538155b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=600&auto=format&fit=crop",
                },
                {
                  country: "Sri Lanka Operations",
                  addr1: "World Trade Center, Echelon Square",
                  addr2: "Colombo 01, Sri Lanka",
                  phone: "+94 11 234 5678",
                  img: null,
                },
              ].map((h, i) => (
                <div key={i} className="group">
                  {h.img && (
                    <div className="relative overflow-hidden aspect-video mb-4 lg:mb-5">
                      <img
                        src={h.img}
                        alt={h.country}
                        className="w-full h-full object-cover transition-all duration-800"
                      />
                    </div>
                  )}
                  <p className="sans text-[11px] font-bold uppercase tracking-widest text-[#042921] mb-2 group-hover:text-[#d4af37] transition-colors">
                    {h.country}
                  </p>
                  <div className="serif text-base lg:text-xl text-[#042921]">
                    <p>{h.addr1}</p>
                    <p>{h.addr2}</p>
                    <p className="sans text-xs lg:text-sm font-semibold mt-2">
                      {h.phone}
                    </p>
                  </div>
                </div>
              ))}
              <div className="bg-[#042921] p-5 lg:p-5 text-[#f9f6ee] relative">
                <p className="sans text-[10px] uppercase tracking-widest opacity-80 mb-0.5">
                  Priority Correspondence
                </p>
                <p className="serif text-base lg:text-2xl break-all sm:break-normal">
                  concierge@primeabode.uk
                </p>
                <div
                  className="absolute -right-4 -bottom-4 text-6xl font-bold opacity-5 pointer-events-none"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  PA
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white p-6 sm:p-8 lg:p-14 border border-[#042921]/6 shadow-sm overflow-x-hidden">
              <h3
                className="text-xl lg:text-3xl text-[#042921] mb-6 lg:mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Send an Inquiry
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5 lg:space-y-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
                  <div>
                    <label className="sans text-[12px] uppercase tracking-widest font-bold text-[#042921] block mb-1">
                      Full Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Alexander Sterling"
                      required
                      className="sans w-full border-b border-[#042921]/30 py-2.5 lg:py-3 outline-none focus:border-[#d4af37] bg-transparent transition-colors placeholder:text-[#042921]/50 text-sm"
                    />
                  </div>
                  <div>
                    <label className="sans text-[12px] uppercase tracking-widest font-bold text-[#042921]/55 block mb-1">
                      Email Address
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="sterling@london.com"
                      required
                      className="sans w-full border-b border-[#042921]/30 py-2.5 lg:py-3 outline-none focus:border-[#d4af37] bg-transparent transition-colors placeholder:text-[#042921]/50 text-sm"
                    />
                  </div>
                </div>
                <div>
                  <label className="sans text-[12px] uppercase tracking-widest font-bold text-[#042921]/55 block mb-1">
                    Inquiry Type
                  </label>
                  <select
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    className="sans w-full border-b border-[#042921]/30 py-2.5 lg:py-3 outline-none bg-transparent text-[#042921]/75 text-sm"
                  >
                    <option>Acquisition Inquiry</option>
                    <option>Portfolio Management</option>
                    <option>Asset Valuation</option>
                    <option>Investment Advisory</option>
                    <option>Off-Market Opportunity</option>
                  </select>
                </div>
                <div>
                  <label className="sans text-[12px] uppercase tracking-widest font-bold text-[#042921]/55 block mb-1">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How may our advisors assist you?"
                    required
                    className="sans w-full border-b border-[#042921]/30 py-2.5 lg:py-3 outline-none focus:border-[#d4af37] bg-transparent transition-colors placeholder:text-[#042921]/50 resize-none text-sm"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6 pt-2">
                  <button
                    type="submit"
                    className="sans w-full sm:w-auto bg-[#042921] text-[#f9f6ee] px-10 lg:px-12 py-4 text-[12px] font-bold uppercase tracking-[0.4em] hover:bg-[#d4af37] hover:text-[#042921] transition-all duration-500 whitespace-nowrap"
                  >
                    Initiate Inquiry
                  </button>
                  {submitted && (
                    <p className="sans text-emerald-800 text-[10px] uppercase tracking-widest font-bold">
                      ✓ Inquiry Transmitted Successfully.
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/*  FOOTER  */}
      <footer className="bg-[#042921] text-[#f9f6ee] pt-14 lg:pt-20 pb-8 lg:pb-10 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-14 pb-8 lg:pb-10 border-b border-[#f9f6ee]/30">
            <div className="col-span-2 lg:col-span-1 space-y-5 lg:space-y-6">
              <div>
                <div
                  className="text-3xl font-bold tracking-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  PRIME<span className="font-light">ABODE</span>
                </div>
                <div className="sans text-[8px] tracking-[0.4em] uppercase opacity-50 mt-1 font-semibold">
                  United Kingdom
                </div>
              </div>
              <p className="sans text-sm leading-relaxed opacity-80 font-light max-w-xs">
                A bespoke approach to prime real estate. From Mayfair to
                Colombo, we define the standard of exceptional living.
              </p>
              <div className="sans flex gap-5 opacity-80">
                <span className="text-xs uppercase tracking-widest cursor-pointer hover:text-[#d4af37] transition-colors font-semibold">
                  Instagram
                </span>
                <span className="text-xs uppercase tracking-widest cursor-pointer hover:text-[#d4af37] transition-colors font-semibold">
                  LinkedIn
                </span>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-5">
              <h4 className="sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                Properties
              </h4>
              <ul className="space-y-2.5 lg:space-y-3 sans text-sm opacity-85 font-light">
                {[
                  "Prime Residential",
                  "Commercial Investments",
                  "Heritage & Listed",
                  "Off-Market Estates",
                  "New Developments",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="hover:text-[#d4af37] hover:opacity-100 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:space-y-5">
              <h4 className="sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                Advisory
              </h4>
              <ul className="space-y-2.5 lg:space-y-3 sans text-sm opacity-85 font-light">
                {[
                  "Market Analysis 2026",
                  "Property Valuation",
                  "Investment Strategy",
                  "Cross-Border Legal",
                  "Our London Team",
                ].map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="hover:text-[#d4af37] hover:opacity-100 transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4 lg:space-y-5">
              <h4 className="sans text-[10px] font-bold uppercase tracking-[0.3em] text-[#d4af37]">
                Contact
              </h4>
              <div className="sans space-y-3 lg:space-y-4 text-sm opacity-85 font-light">
                <div>
                  <p className="font-semibold opacity-40 uppercase tracking-widest text-[9px] mb-1">
                    London HQ
                  </p>
                  <p>45 Berkeley Square</p>
                  <p>Mayfair, W1J 5AS</p>
                </div>
                <div>
                  <p className="font-semibold opacity-40 uppercase tracking-widest text-[9px] mb-1">
                    Colombo Hub
                  </p>
                  <p>World Trade Center</p>
                  <p>Colombo 01, Sri Lanka</p>
                </div>
                <p className="text-[#d4af37] opacity-100 break-all sm:break-normal">
                  concierge@primeabode.uk
                </p>
              </div>
            </div>
          </div>

          <div className="py-5 lg:py-6 border-b border-[#f9f6ee]/30 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <div className="sans flex flex-wrap gap-3 lg:gap-8 opacity-80">
              <div className="border border-current px-3 py-1 text-[10px] lg:text-[11px] font-bold tracking-tight">
                RICS
              </div>
              <div className="border border-current px-3 py-1 text-[10px] lg:text-[11px] font-bold tracking-tight">
                THE PROPERTY OMBUDSMAN
              </div>
              <div className="border border-current px-3 py-1 text-[10px] lg:text-[11px] font-bold tracking-tight">
                FCA
              </div>
            </div>
            <p className="sans text-[10px] lg:text-[11px] uppercase tracking-widest opacity-80">
              All data verified · Fiduciary Standards Applied · 2026
            </p>
          </div>

          <div className="pt-6 lg:pt-8 flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
            <p className="sans text-[11px] lg:text-[12px] uppercase tracking-[0.2em] opacity-80">
              © 2026 PrimeAbode UK. All rights reserved.
            </p>
            <div className="sans flex flex-wrap gap-x-4 gap-y-2 lg:gap-6 text-[11px] lg:text-[12px] uppercase tracking-[0.2em] opacity-80">
              {[
                "Privacy Policy",
                "Terms of Use",
                "Modern Slavery Statement",
                "Cookie Policy",
              ].map((l) => (
                <a
                  key={l}
                  href="#"
                  className="hover:opacity-100 transition-opacity"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
