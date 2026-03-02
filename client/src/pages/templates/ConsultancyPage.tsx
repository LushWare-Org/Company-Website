import { useState, useEffect, useRef } from "react";

const useInView = (threshold = 0.15) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, inView];
};

const FadeIn = ({ children, delay = 0, className = "", direction = "up" }) => {
  const [ref, inView] = useInView();
  const transforms = { up: "translateY(40px)", down: "translateY(-40px)", left: "translateX(-40px)", right: "translateX(40px)", none: "none" };
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "none" : transforms[direction],
      transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
    }}>
      {children}
    </div>
  );
};

const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end, duration]);
  return <span ref={ref}>{count}{suffix}</span>;
};

export default function GrowthCrest() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", company: "", message: "" });
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", color: "#1a1c1e", overflowX: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Montserrat:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #fff; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #f1f1f1; }
        ::-webkit-scrollbar-thumb { background: #ea580c; }
        .sans { font-family: 'Montserrat', sans-serif; }
        .serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes float { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
        @keyframes slideIn { from{transform:translateX(100%)} to{transform:translateX(0)} }
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        .hero-text { animation: fadeUp 1.2s ease forwards; }
        .hero-sub { animation: fadeUp 1.2s ease 0.3s both; }
        .hero-btns { animation: fadeUp 1.2s ease 0.6s both; }
        .hero-stats { animation: fadeUp 1.2s ease 0.9s both; }
        .hover-lift { transition: transform 0.4s ease, box-shadow 0.4s ease; }
        .hover-lift:hover { transform: translateY(-8px); box-shadow: 0 32px 64px rgba(0,0,0,0.12); }
        .card-hover { transition: all 0.5s ease; }
        .card-hover:hover { background: #0a0c0e !important; }
        .card-hover:hover .card-title { color: white !important; }
        .card-hover:hover .card-desc { color: #94a3b8 !important; }
        .card-hover:hover .card-num { color: #ea580c !important; }
        .img-hover img { transition: transform 1.2s ease, filter 1.2s ease; }
        .img-hover:hover img { transform: scale(1.06); filter: grayscale(0%) !important; }
        .btn-primary { transition: all 0.4s ease; }
        .btn-primary:hover { background: #ea580c !important; letter-spacing: 0.25em !important; }
        .btn-outline { transition: all 0.4s ease; border: 1px solid #cbd5e1; }
        .btn-outline:hover { border-color: #ea580c; color: #ea580c; }
        .nav-link { transition: all 0.3s ease; position: relative; }
        .nav-link::after { content:''; position:absolute; bottom:-2px; left:0; width:0; height:1px; background:#ea580c; transition:width 0.3s ease; }
        .nav-link:hover::after { width:100%; }
        .nav-link:hover { color: #ea580c; }
        .team-card:hover .team-overlay { opacity: 1 !important; }
        .team-card:hover img { transform: scale(1.05); }
        .testimonial-card { transition: all 0.4s ease; }
        .testimonial-card:hover { border-color: #ea580c !important; transform: translateY(-4px); }
        .service-row:hover .service-img { transform: scale(1.03); }
        .service-img { transition: transform 1s ease; }
        .process-dot { transition: all 0.3s ease; }
        .process-item:hover .process-dot { background: #ea580c !important; transform: scale(1.3); }
        .process-item:hover .process-title { color: #ea580c; }
        .footer-link { transition: color 0.2s, padding-left 0.2s; }
        .footer-link:hover { color: #fb923c; padding-left: 6px; }
        input:focus, textarea:focus { border-color: #ea580c !important; }
        .mobile-menu { animation: slideIn 0.3s ease; }
        @media (max-width: 768px) {
          .hide-mobile { display: none !important; }
          .hero-title { font-size: 52px !important; line-height: 0.95 !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(203,213,225,0.5)" : "none",
        transition: "all 0.5s ease",
        padding: "0 32px"
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 80 }}>
          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 14, cursor: "pointer" }} onClick={() => scrollTo("hero")}>
            <div style={{ position: "relative", width: 36, height: 36 }}>
              <div style={{ width: 36, height: 36, border: "1.5px solid #0a0c0e", transform: "rotate(45deg)", transition: "background 0.4s" }} />
              <span style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: 1 }}>GC</span>
            </div>
            <div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 13, letterSpacing: "0.2em", lineHeight: 1 }}>
                GROWTH<span style={{ color: "#ea580c" }}>CREST</span>
              </div>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 7, color: "#94a3b8", letterSpacing: "0.5em", fontWeight: 700, marginTop: 3 }}>STRATEGIC ALLIANCE</div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hide-mobile" style={{ display: "flex", alignItems: "center", gap: 40 }}>
            {[["Services", "services"], ["Process", "process"], ["Portfolio", "portfolio"], ["Team", "team"], ["Insights", "insights"]].map(([label, id]) => (
              <button key={id} className="nav-link sans" onClick={() => scrollTo(id)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", color: "#64748b", textTransform: "uppercase" }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div className="hide-mobile" style={{ width: 1, height: 32, background: "#e2e8f0" }} />
            <button className="hide-mobile btn-primary sans" onClick={() => scrollTo("contact")} style={{ background: "#0a0c0e", color: "white", border: "none", padding: "12px 28px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", cursor: "pointer" }}>
              Contact Desk
            </button>
            {/* Mobile hamburger */}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 4 }} className="mobile-ham">
              <div style={{ width: 22, height: 2, background: "#1a1c1e", marginBottom: 5, transition: "all 0.3s", transform: menuOpen ? "rotate(45deg) translate(5px,5px)" : "none" }} />
              <div style={{ width: 22, height: 2, background: "#1a1c1e", marginBottom: 5, opacity: menuOpen ? 0 : 1, transition: "all 0.3s" }} />
              <div style={{ width: 22, height: 2, background: "#1a1c1e", transition: "all 0.3s", transform: menuOpen ? "rotate(-45deg) translate(5px,-5px)" : "none" }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "#fff", position: "relative", overflow: "hidden", paddingTop: 80 }}>
        {/* Background */}
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <div style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: 900, height: 700, background: "radial-gradient(ellipse, rgba(234,88,12,0.06) 0%, transparent 70%)" }} />
          <div style={{ position: "absolute", top: 0, right: 0, width: "40%", height: "100%", backgroundImage: "linear-gradient(135deg, rgba(234,88,12,0.03) 0%, transparent 60%)" }} />
          {/* Grid lines */}
          {[...Array(8)].map((_, i) => (
            <div key={i} style={{ position: "absolute", left: `${(i + 1) * 12.5}%`, top: 0, bottom: 0, width: 1, background: "rgba(203,213,225,0.2)" }} />
          ))}
        </div>

        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", width: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center", position: "relative", zIndex: 10 }}>
          {/* Left Content */}
          <div>
            <div className="hero-text" style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 32 }}>
              <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, transparent, #ea580c)", marginBottom: 20 }} />
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 800, letterSpacing: "0.6em", color: "#ea580c", textTransform: "uppercase" }}>A New Standard of Excellence</span>
            </div>
            <div className="hero-sub">
              <h1 className="hero-title serif" style={{ fontSize: 80, fontWeight: 700, lineHeight: 0.92, letterSpacing: "-2px", color: "#0a0c0e", marginBottom: 32 }}>
                Strategy.<br />
                Execution.<br />
                <span style={{ background: "linear-gradient(135deg, #ea580c, #f97316)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Result.</span>
              </h1>
              <p style={{ color: "#64748b", fontSize: 17, fontWeight: 300, lineHeight: 1.75, maxWidth: 480, marginBottom: 48, fontFamily: "Cormorant Garamond, Georgia, serif" }}>
                GrowthCrest partners with forward-thinking leaders to architect their competitive advantage — blending London's financial precision with Colombo's engineering excellence.
              </p>
            </div>
            <div className="hero-btns" style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 64 }}>
              <button className="btn-primary sans" onClick={() => scrollTo("contact")} style={{ background: "#0a0c0e", color: "white", border: "none", padding: "18px 40px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer" }}>
                Begin Your Journey →
              </button>
              <button className="btn-outline sans" onClick={() => scrollTo("portfolio")} style={{ background: "transparent", color: "#0a0c0e", padding: "18px 40px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer" }}>
                View Portfolio
              </button>
            </div>
            {/* Stats */}
            <div className="hero-stats" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 32, borderTop: "1px solid #f1f5f9" }}>
              {[["$2.4B+", "Capital Managed"], ["14", "Global Offices"], ["98%", "Client Retention"]].map(([val, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 22, fontWeight: 800, color: "#0a0c0e", letterSpacing: "-0.5px" }}>{val}</div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.3em", marginTop: 4, fontWeight: 700 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div className="hide-mobile" style={{ position: "relative" }}>
            <div className="img-hover" style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5" }}>
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop" alt="GrowthCrest" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,14,0.4) 0%, transparent 50%)" }} />
            </div>
            {/* Floating badge */}
            <div style={{ position: "absolute", bottom: 32, left: -24, background: "white", padding: "20px 28px", boxShadow: "0 24px 48px rgba(0,0,0,0.12)", borderLeft: "3px solid #ea580c" }}>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase", marginBottom: 6 }}>Trusted Since 2013</div>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 700, color: "#0a0c0e" }}>500+ Engagements Delivered</div>
            </div>
            {/* Decorative element */}
            <div style={{ position: "absolute", top: -16, right: -16, width: 80, height: 80, border: "2px solid #ea580c", opacity: 0.3 }} />
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}>
          <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 8, letterSpacing: "0.5em", color: "#94a3b8", fontWeight: 700, textTransform: "uppercase" }}>Scroll</span>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #94a3b8, #ea580c)", animation: "pulse 2s infinite" }} />
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section id="services" style={{ background: "white", padding: "120px 32px", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", marginBottom: 96 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 48, height: 1, background: "#ea580c" }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.6em", textTransform: "uppercase" }}>Professional Disciplines</span>
                <div style={{ width: 48, height: 1, background: "#ea580c" }} />
              </div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, fontWeight: 700, letterSpacing: "-2px", color: "#0a0c0e", lineHeight: 1 }}>
                Strategic <span style={{ color: "#94a3b8", fontWeight: 300, fontStyle: "italic" }}>Pillars.</span>
              </h2>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#64748b", maxWidth: 520, marginTop: 20, fontWeight: 300, lineHeight: 1.7 }}>
                Three integrated disciplines. One unified vision. Designed to accelerate your enterprise from where it is to where it must be.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 120 }}>
            {[
              {
                id: "01", title: "M&A Advisory & Strategy",
                desc: "We guide senior leadership through the full lifecycle of mergers, acquisitions, and corporate restructuring. From rigorous due diligence to seamless post-merger integration, our advisors have navigated over $2.4B in capital realignment across the London financial market.",
                bullets: ["Transaction Structuring", "Due Diligence", "Post-Merger Integration", "Board-Level Advisory"],
                img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=900&auto=format&fit=crop",
                reverse: false
              },
              {
                id: "02", title: "Digital Engineering Hub",
                desc: "Our Colombo-based engineering collective designs and deploys bespoke technology ecosystems — from AI-driven CRMs to enterprise BPM platforms. We bridge executive strategy with technical execution, delivering systems that scale.",
                bullets: ["Custom CRM & BPM Systems", "AI & Data Architecture", "Cloud Infrastructure", "Tech-Enabled Transformation"],
                img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=900&auto=format&fit=crop",
                reverse: true
              },
              {
                id: "03", title: "Tax & Financial Architecture",
                desc: "Operating across jurisdictions requires precision. Our tax and financial architects design compliant, efficient structures that protect your capital and position your enterprise for sustainable cross-border growth.",
                bullets: ["International Tax Planning", "Regulatory Compliance", "Financial Restructuring", "Multi-Jurisdiction Advisory"],
                img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=900&auto=format&fit=crop",
                reverse: false
              }
            ].map((svc, i) => (
              <FadeIn key={i} delay={0.1} direction={svc.reverse ? "right" : "left"}>
                <div className="service-row" style={{ display: "grid", gridTemplateColumns: svc.reverse ? "2fr 3fr" : "3fr 2fr", gap: 80, alignItems: "center" }}>
                  {svc.reverse && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase" }}>Expertise // Global</span>
                      <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 42, fontWeight: 700, color: "#0a0c0e", letterSpacing: "-1px", lineHeight: 1.1 }}>{svc.title}</h3>
                      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#64748b", fontWeight: 300, lineHeight: 1.75 }}>{svc.desc}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
                        {svc.bullets.map(b => (
                          <div key={b} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 6, height: 6, background: "#ea580c", flexShrink: 0 }} />
                            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, color: "#475569", fontWeight: 600, letterSpacing: "0.05em" }}>{b}</span>
                          </div>
                        ))}
                      </div>
                      <button className="sans" onClick={() => scrollTo("contact")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#0a0c0e", marginTop: 8, width: "fit-content" }}>
                        Inquire Now <div style={{ width: 40, height: 1, background: "#ea580c" }} />
                      </button>
                    </div>
                  )}
                  <div className="img-hover" style={{ position: "relative", overflow: "hidden", aspectRatio: "16/10" }}>
                    <img src={svc.img} alt={svc.title} className="service-img" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(30%)" }} />
                    <div style={{ position: "absolute", top: 20, background: "#ea580c", padding: "10px 20px", left: svc.reverse ? "auto" : 20, right: svc.reverse ? 20 : "auto" }}>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 32, fontWeight: 800, color: "rgba(255,255,255,0.25)" }}>{svc.id}</span>
                    </div>
                  </div>
                  {!svc.reverse && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase" }}>Expertise // Global</span>
                      <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 42, fontWeight: 700, color: "#0a0c0e", letterSpacing: "-1px", lineHeight: 1.1 }}>{svc.title}</h3>
                      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#64748b", fontWeight: 300, lineHeight: 1.75 }}>{svc.desc}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginTop: 8 }}>
                        {svc.bullets.map(b => (
                          <div key={b} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                            <div style={{ width: 6, height: 6, background: "#ea580c", flexShrink: 0 }} />
                            <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, color: "#475569", fontWeight: 600, letterSpacing: "0.05em" }}>{b}</span>
                          </div>
                        ))}
                      </div>
                      <button className="sans" onClick={() => scrollTo("contact")} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: "none", cursor: "pointer", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", color: "#0a0c0e", marginTop: 8, width: "fit-content" }}>
                        Inquire Now <div style={{ width: 40, height: 1, background: "#ea580c" }} />
                      </button>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section style={{ background: "#fafafa", padding: "120px 32px", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap", gap: 32 }}>
            <FadeIn direction="left">
              <div>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.6em", textTransform: "uppercase" }}>Sectoral Expertise</span>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 56, fontWeight: 700, letterSpacing: "-1.5px", color: "#0a0c0e", lineHeight: 1, marginTop: 12 }}>
                  Industries <span style={{ color: "#94a3b8", fontWeight: 300, fontStyle: "italic" }}>We Influence.</span>
                </h2>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{ textAlign: "right", maxWidth: 280 }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: "#64748b", lineHeight: 1.7, marginBottom: 16, fontWeight: 300 }}>
                  Deep domain expertise across the sectors shaping tomorrow's global economy.
                </p>
                <button className="sans" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0a0c0e", background: "none", border: "none", borderBottom: "2px solid #ea580c", paddingBottom: 4, cursor: "pointer" }}>
                  Download Firm Profile
                </button>
              </div>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { name: "Financial Services", tag: "Optimising Capital", desc: "Navigating volatility, M&A complexity, and regulatory shifts for London-based institutions.", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop" },
              { name: "Public Sector", tag: "Building Resilience", desc: "Digital infrastructure and strategic foresight for government bodies and municipalities.", img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&auto=format&fit=crop" },
              { name: "Technology & Media", tag: "Scaling Innovation", desc: "Data-driven growth engineering for scale-ups and enterprise tech across UK and Asian hubs.", img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop" },
              { name: "Energy & Utilities", tag: "Engineering Sustainability", desc: "Operational transformation and strategic roadmaps for a sustainable energy transition.", img: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop" }
            ].map((ind, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="hover-lift" style={{ cursor: "pointer", background: "white", border: "1px solid #f1f5f9" }}>
                  <div className="img-hover" style={{ overflow: "hidden", aspectRatio: "3/4", position: "relative" }}>
                    <img src={ind.img} alt={ind.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)", transition: "all 0.8s ease" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,12,14,0.5) 0%, transparent 50%)" }} />
                    <div style={{ position: "absolute", top: 20, left: 20, fontFamily: "Cormorant Garamond, serif", fontSize: 48, fontWeight: 300, color: "rgba(255,255,255,0.5)" }}>0{i + 1}</div>
                  </div>
                  <div style={{ padding: "24px 20px 28px" }}>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase", display: "block", marginBottom: 8 }}>{ind.tag}</span>
                    <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 700, color: "#0a0c0e", borderBottom: "1px solid #f1f5f9", paddingBottom: 12, marginBottom: 12 }}>{ind.name}</h3>
                    <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, color: "#64748b", lineHeight: 1.6, fontWeight: 300 }}>{ind.desc}</p>
                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 3, height: 14, background: "#ea580c" }} />
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#0a0c0e" }}>Case Study</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ background: "#0a0c0e", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 800, height: 800, background: "radial-gradient(ellipse, rgba(234,88,12,0.06) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 80 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 40, height: 1, background: "#ea580c" }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.6em", textTransform: "uppercase" }}>Our Methodology</span>
                <div style={{ width: 40, height: 1, background: "#ea580c" }} />
              </div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, fontWeight: 700, color: "white", letterSpacing: "-2px", lineHeight: 1 }}>
                How We <span style={{ color: "#4b5563", fontWeight: 300, fontStyle: "italic" }}>Deliver.</span>
              </h2>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#94a3b8", maxWidth: 480, margin: "20px auto 0", fontWeight: 300, lineHeight: 1.7 }}>
                A proven, disciplined framework that transforms complex challenges into measurable competitive advantage.
              </p>
            </div>
          </FadeIn>

          {/* Process Steps */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 0, position: "relative" }}>
            {/* Connector line */}
            <div style={{ position: "absolute", top: 32, left: "10%", right: "10%", height: 1, background: "linear-gradient(to right, transparent, #ea580c, #ea580c, #ea580c, transparent)" }} />
            {[
              { num: "01", title: "Discovery", desc: "Deep-dive diagnostics and stakeholder interviews to map your current state, goals, and constraints." },
              { num: "02", title: "Strategy Design", desc: "Bespoke strategic architecture crafted by senior advisors using our proprietary Crest-Framework." },
              { num: "03", title: "Blueprint", desc: "Detailed operational and financial roadmaps with clear milestones and accountability structures." },
              { num: "04", title: "Execution", desc: "Hands-on implementation led by our London and Colombo teams working in close partnership." },
              { num: "05", title: "Elevation", desc: "Continuous performance reviews and strategic recalibrations to sustain and maximise your growth." }
            ].map((step, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="process-item" style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", padding: "0 16px", cursor: "default" }}>
                  <div className="process-dot" style={{ width: 64, height: 64, border: "1px solid #374151", background: i === 0 || i === 4 ? "#ea580c" : "#1a1c1e", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28, position: "relative", zIndex: 10, transition: "all 0.3s" }}>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 11, color: i === 0 || i === 4 ? "white" : "#ea580c", letterSpacing: "0.1em" }}>{step.num}</span>
                  </div>
                  <h4 className="process-title" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 12, color: "white", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12, transition: "color 0.3s" }}>{step.title}</h4>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          {/* CTA inside process */}
          <FadeIn>
            <div style={{ textAlign: "center", marginTop: 72 }}>
              <button className="btn-primary sans" onClick={() => scrollTo("contact")} style={{ background: "#ea580c", color: "white", border: "none", padding: "18px 48px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", cursor: "pointer" }}>
                Start the Discovery Process →
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── METRICS ── */}
      <section style={{ background: "white", padding: "100px 32px", borderBottom: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, border: "1px solid #f1f5f9" }}>
            {[
              { val: 500, suffix: "+", label: "Engagements Completed", sub: "Since 2013" },
              { val: 98, suffix: "%", label: "Client Retention Rate", sub: "Year on Year" },
              { val: 14, suffix: "", label: "Global Offices", sub: "London · Colombo · NYC" },
              { val: 2400, suffix: "M+", label: "Capital Advised", sub: "USD Equivalent" }
            ].map((m, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div style={{ padding: "48px 40px", textAlign: "center", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, fontWeight: 700, color: "#ea580c", lineHeight: 1, letterSpacing: "-2px" }}>
                    <Counter end={m.val} suffix={m.suffix} />
                  </div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 11, fontWeight: 700, color: "#0a0c0e", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 12 }}>{m.label}</div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#94a3b8", letterSpacing: "0.3em", textTransform: "uppercase", marginTop: 6, fontWeight: 500 }}>{m.sub}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO / CASE STUDIES ── */}
      <section id="portfolio" style={{ background: "#fcfcfc", padding: "120px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ borderLeft: "4px solid #ea580c", paddingLeft: 32, marginBottom: 96 }}>
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.6em", textTransform: "uppercase", display: "block", marginBottom: 16 }}>Strategic Archive</span>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, fontWeight: 700, letterSpacing: "-2px", color: "#0a0c0e", lineHeight: 1 }}>
                Impact <span style={{ color: "#d1d5db", fontStyle: "italic", fontWeight: 300 }}>&</span> Results.
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
            {[
              {
                company: "Mayfair Capital Partners", tag: "M&A Advisory", year: "2024",
                desc: "Guided a £180M cross-border acquisition of a European fintech platform for one of London's foremost asset management firms. Our advisory team managed every phase — from initial valuation to regulatory clearance — ensuring a seamless transition that expanded their AUM by 34%.",
                stat: "£180M", statLabel: "Deal Value", result: "+34% AUM Growth",
                img: "https://images.unsplash.com/photo-1541888946425-d81bb19240c5?q=80&w=900&auto=format&fit=crop",
                reverse: false
              },
              {
                company: "NovaTech Sri Lanka", tag: "Digital Engineering", year: "2023",
                desc: "Designed and deployed a custom AI-powered CRM ecosystem for a rapidly scaling telecom provider operating across Southeast Asia. Our Colombo engineering hub delivered the full stack in 6 months — cutting operational latency by 60% and reducing manual processing costs significantly.",
                stat: "60%", statLabel: "Latency Reduction", result: "6-Month Delivery",
                img: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=900&auto=format&fit=crop",
                reverse: true
              },
              {
                company: "Euro-Logistics Group", tag: "Supply Chain Intelligence", year: "2023",
                desc: "Leveraged predictive analytics and process reengineering to optimise cross-continental trade routes for a UK-based logistics conglomerate. The result: a 2.4x efficiency gain across their European distribution network within the first operating year.",
                stat: "2.4x", statLabel: "Efficiency Gains", result: "Year-1 Operational",
                img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=900&auto=format&fit=crop",
                reverse: false
              }
            ].map((cs, i) => (
              <FadeIn key={i} delay={0.1} direction={cs.reverse ? "right" : "left"}>
                <div style={{ display: "grid", gridTemplateColumns: cs.reverse ? "2fr 3fr" : "3fr 2fr", gap: 64, alignItems: "center" }}>
                  {cs.reverse && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase" }}>{cs.tag}</span>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#94a3b8", fontWeight: 500 }}>// {cs.year}</span>
                      </div>
                      <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 40, fontWeight: 700, color: "#0a0c0e", letterSpacing: "-1px", lineHeight: 1.1 }}>{cs.company}</h3>
                      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#64748b", fontWeight: 300, lineHeight: 1.75 }}>{cs.desc}</p>
                      <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
                        <div style={{ background: "#f8fafc", border: "1px solid #f1f5f9", padding: "16px 24px" }}>
                          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>{cs.statLabel}</div>
                          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, fontWeight: 700, color: "#ea580c" }}>{cs.stat}</div>
                        </div>
                        <div style={{ background: "#f8fafc", border: "1px solid #f1f5f9", padding: "16px 24px" }}>
                          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>Outcome</div>
                          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 700, color: "#0a0c0e" }}>{cs.result}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="img-hover" style={{ overflow: "hidden", aspectRatio: "16/10", position: "relative" }}>
                    <img src={cs.img} alt={cs.company} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)", transition: "all 0.8s ease" }} />
                    <div style={{ position: "absolute", inset: 0, border: "20px solid rgba(255,255,255,0.08)", transition: "all 0.7s ease" }} />
                  </div>
                  {!cs.reverse && (
                    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase" }}>{cs.tag}</span>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#94a3b8", fontWeight: 500 }}>// {cs.year}</span>
                      </div>
                      <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 40, fontWeight: 700, color: "#0a0c0e", letterSpacing: "-1px", lineHeight: 1.1 }}>{cs.company}</h3>
                      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#64748b", fontWeight: 300, lineHeight: 1.75 }}>{cs.desc}</p>
                      <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
                        <div style={{ background: "#f8fafc", border: "1px solid #f1f5f9", padding: "16px 24px" }}>
                          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>{cs.statLabel}</div>
                          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, fontWeight: 700, color: "#ea580c" }}>{cs.stat}</div>
                        </div>
                        <div style={{ background: "#f8fafc", border: "1px solid #f1f5f9", padding: "16px 24px" }}>
                          <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 6 }}>Outcome</div>
                          <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 700, color: "#0a0c0e" }}>{cs.result}</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ background: "#0a0c0e", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "20%", right: "-5%", width: 500, height: 500, background: "rgba(234,88,12,0.05)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-5%", width: 400, height: 400, background: "rgba(16,185,129,0.03)", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: 80, alignItems: "start" }}>
            <FadeIn direction="left">
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                  <div style={{ width: 40, height: 1, background: "#ea580c" }} />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.5em", textTransform: "uppercase" }}>The Firm</span>
                </div>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 56, fontWeight: 700, color: "white", letterSpacing: "-1.5px", lineHeight: 1.05 }}>
                  Global Insight.<br />
                  <span style={{ color: "#4b5563", fontWeight: 300, fontStyle: "italic" }}>Local Impact.</span>
                </h2>
                <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginTop: 40 }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 80, fontWeight: 700, color: "#ea580c", lineHeight: 1, letterSpacing: "-3px" }}>12+</span>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#6b7280", letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1.5 }}>
                    Years of Strategic<br />Operational Excellence
                  </div>
                </div>
                <div style={{ marginTop: 40 }} className="img-hover">
                  <div style={{ overflow: "hidden", aspectRatio: "4/3" }}>
                    <img src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=700&auto=format&fit=crop" alt="GrowthCrest Team" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(40%) brightness(0.7)", transition: "all 0.8s ease" }} />
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{ paddingTop: 8 }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 22, fontWeight: 300, color: "#e2e8f0", lineHeight: 1.7, borderLeft: "2px solid #374151", paddingLeft: 32, marginBottom: 32 }}>
                  GrowthCrest is a premier consultancy firm bridging the strategic foresight of <strong style={{ color: "white", fontWeight: 600 }}>London's financial core</strong> with the high-velocity engineering excellence of <strong style={{ color: "white", fontWeight: 600 }}>Colombo</strong>.
                </p>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#6b7280", fontWeight: 300, lineHeight: 1.75, paddingLeft: 32, marginBottom: 40 }}>
                  Founded in 2013, we have spent over a decade transforming complex market signals into actionable growth strategies. We combine deep industry expertise with modern, data-driven methodologies — helping global enterprises navigate volatility, optimise operations, and build for a sustainable, tech-forward future.
                </p>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#6b7280", fontWeight: 300, lineHeight: 1.75, paddingLeft: 32, marginBottom: 48 }}>
                  Our dual-hub model is our defining advantage. London brings the strategic credibility, regulatory intelligence, and senior advisory gravitas. Colombo delivers the engineering speed, technical depth, and cost efficiency that modern enterprises demand.
                </p>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, paddingLeft: 32, paddingTop: 40, borderTop: "1px solid #1f2937" }}>
                  {[
                    { title: "Our Vision", text: "To be the defining architectural force behind the world's most resilient and innovative digital enterprises." },
                    { title: "Our Mission", text: "To deliver measurable competitive advantage through precision strategy, data intelligence, and global operational synergy." }
                  ].map(item => (
                    <div key={item.title}>
                      <h4 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 10, color: "white", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 12 }}>{item.title}</h4>
                      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, color: "#6b7280", fontWeight: 300, lineHeight: 1.6 }}>{item.text}</p>
                    </div>
                  ))}
                </div>
                <div style={{ paddingLeft: 32, marginTop: 32 }}>
                  <button className="sans" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.35em", textTransform: "uppercase", color: "#ea580c", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                    Our Full History <div style={{ width: 40, height: 1, background: "#ea580c" }} />
                  </button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background: "white", padding: "120px 32px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "center", marginBottom: 80 }}>
            <FadeIn direction="left">
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 64, fontWeight: 700, letterSpacing: "-2px", color: "#0a0c0e", lineHeight: 1 }}>
                Why <span style={{ color: "#ea580c" }}>GrowthCrest?</span>
              </h2>
            </FadeIn>
            <FadeIn direction="right">
              <div style={{ borderLeft: "4px solid #0a0c0e", paddingLeft: 32 }}>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, color: "#64748b", fontWeight: 300, lineHeight: 1.65, fontStyle: "italic" }}>
                  "We don't simply provide recommendations — we build the strategic frameworks that define market leaders and protect their position for years to come."
                </p>
              </div>
            </FadeIn>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "#f1f5f9", border: "1px solid #f1f5f9" }}>
            {[
              { title: "The Elite Collective", label: "Expert Team", desc: "A bespoke assembly of C-suite advisors, ex-investment bankers, and senior technologists dedicated entirely to your high-stakes challenges.", icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "Architectural Precision", label: "Proven Methodology", desc: "Our proprietary Crest-Framework ensures every strategy is backed by rigorous structural analysis, competitive intelligence, and measurable milestones.", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10V11a1 1 0 011-1h2a1 1 0 011 1v10" },
              { title: "Quantum Analytics", label: "Data-Driven Insight", desc: "Proprietary AI and predictive modelling capabilities that translate complex market data into clear, actionable intelligence — before your competitors react.", icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055zM20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" },
              { title: "Cross-Border Synergy", label: "Global Experience", desc: "Twelve years of operating at the intersection of London's financial district and Colombo's engineering hub gives us a perspective no single-market firm can match.", icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="card-hover" style={{ background: "white", padding: "48px", cursor: "default" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 32 }}>
                    <svg style={{ width: 40, height: 40, color: "#0a0c0e", transition: "color 0.5s" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeWidth={0.75} d={item.icon} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span className="sans" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#d1d5db", letterSpacing: "0.3em", textTransform: "uppercase" }}>{item.label}</span>
                  </div>
                  <h3 className="card-title" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 28, fontWeight: 700, color: "#0a0c0e", marginBottom: 16, letterSpacing: "-0.5px", transition: "color 0.5s" }}>{item.title}</h3>
                  <p className="card-desc" style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: "#64748b", fontWeight: 300, lineHeight: 1.7, transition: "color 0.5s" }}>{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section id="team" style={{ background: "#fafafa", padding: "120px 32px", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 80, flexWrap: "wrap", gap: 32 }}>
              <div>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.6em", textTransform: "uppercase" }}>Leadership</span>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 56, fontWeight: 700, letterSpacing: "-1.5px", color: "#0a0c0e", lineHeight: 1, marginTop: 12 }}>
                  The Minds <span style={{ color: "#94a3b8", fontWeight: 300, fontStyle: "italic" }}>Behind the Work.</span>
                </h2>
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#64748b", maxWidth: 360, fontWeight: 300, lineHeight: 1.7 }}>
                Senior practitioners who have led transformations at the world's most demanding organisations.
              </p>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {[
              { name: "James Harrington", role: "Managing Director, London", bio: "Former Goldman Sachs VP. 20 years in M&A and corporate strategy across EMEA.", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500&auto=format&fit=crop" },
              { name: "Priya Mendis", role: "Head of Digital Engineering", bio: "Ex-McKinsey technologist. Led 40+ enterprise digital transformations across Asia-Pacific.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500&auto=format&fit=crop" },
              { name: "Oliver Whitfield", role: "Tax & Compliance Partner", bio: "International tax architect with 18 years structuring cross-jurisdiction frameworks.", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=500&auto=format&fit=crop" },
              { name: "Anjali Rodrigo", role: "Strategy Director, Colombo", bio: "Led digital infrastructure for Sri Lanka's top three banking institutions. MIT MBA.", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=500&auto=format&fit=crop" }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="team-card hover-lift" style={{ background: "white", border: "1px solid #f1f5f9", overflow: "hidden", cursor: "default" }}>
                  <div style={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
                    <img src={member.img} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)", transition: "transform 0.8s ease" }} />
                    <div className="team-overlay" style={{ position: "absolute", inset: 0, background: "rgba(10,12,14,0.7)", display: "flex", alignItems: "flex-end", padding: 24, opacity: 0, transition: "opacity 0.4s ease" }}>
                      <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, color: "rgba(255,255,255,0.8)", fontWeight: 300, lineHeight: 1.6 }}>{member.bio}</p>
                    </div>
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(10,12,14,0.4), transparent)" }} />
                  </div>
                  <div style={{ padding: "20px 24px 24px" }}>
                    <h4 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 700, color: "#0a0c0e", marginBottom: 6 }}>{member.name}</h4>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.3em", textTransform: "uppercase" }}>{member.role}</span>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#0a0c0e", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 20% 50%, rgba(234,88,12,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(234,88,12,0.04) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 72 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginBottom: 20 }}>
                <div style={{ width: 40, height: 1, background: "#ea580c" }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.6em", textTransform: "uppercase" }}>Client Voices</span>
                <div style={{ width: 40, height: 1, background: "#ea580c" }} />
              </div>
              <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 56, fontWeight: 700, color: "white", letterSpacing: "-1.5px" }}>
                What Our Clients <span style={{ color: "#4b5563", fontWeight: 300, fontStyle: "italic" }}>Say.</span>
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { quote: "GrowthCrest didn't just advise us — they became an extension of our leadership team. The M&A process they managed was precise, strategic, and completely transformed our market position.", name: "Richard Pemberton", title: "CEO, Mayfair Capital Partners", location: "London, UK" },
              { quote: "The engineering hub they set up in Colombo is nothing short of extraordinary. We delivered a complex CRM in six months at a fraction of the market cost, without compromising on quality.", name: "Senaka Perera", title: "CTO, NovaTech Sri Lanka", location: "Colombo, LK" },
              { quote: "Their tax and compliance team gave us the structural clarity we needed to expand into three new European markets confidently. They think three moves ahead — every time.", name: "Claire Hoffmann", title: "CFO, Euro-Logistics Group", location: "Frankfurt, DE" }
            ].map((t, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="testimonial-card" style={{ background: "#111316", border: "1px solid #1f2937", padding: "40px 36px", cursor: "default" }}>
                  <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 48, color: "#ea580c", lineHeight: 0.7, marginBottom: 20, fontWeight: 700, opacity: 0.6 }}>"</div>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 17, color: "#d1d5db", fontWeight: 300, lineHeight: 1.75, marginBottom: 32, fontStyle: "italic" }}>{t.quote}</p>
                  <div style={{ borderTop: "1px solid #1f2937", paddingTop: 24 }}>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: 11, color: "white", marginBottom: 4 }}>{t.name}</div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#ea580c", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>{t.title}</div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#4b5563", fontWeight: 500, marginTop: 2 }}>{t.location}</div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INSIGHTS ── */}
      <section id="insights" style={{ background: "white", padding: "120px 32px", borderTop: "1px solid #f1f5f9", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "25%", height: "100%", background: "#fafafa", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative", zIndex: 10 }}>
          <FadeIn>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 72, flexWrap: "wrap", gap: 24 }}>
              <div>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase" }}>Strategic Intelligence</span>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 52, fontWeight: 700, letterSpacing: "-1.5px", color: "#0a0c0e", lineHeight: 1, marginTop: 12 }}>
                  Latest <span style={{ color: "#94a3b8", fontWeight: 300 }}>Insights.</span>
                </h2>
              </div>
              <button className="sans" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#64748b", background: "none", border: "none", borderBottom: "2px solid #f1f5f9", paddingBottom: 4, cursor: "pointer" }}>
                Explore All Reports →
              </button>
            </div>
          </FadeIn>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
            {[
              { tag: "M&A Strategy", title: "The 2026 Cross-Border M&A Landscape: What London Dealmakers Must Know", date: "February 2026", read: "8 min read", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" },
              { tag: "Digital Engineering", title: "Why Asia's Engineering Talent Is Reshaping Global Enterprise Tech", date: "January 2026", read: "6 min read", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop" },
              { tag: "Tax Advisory", title: "Multi-Jurisdiction Structures in 2026: Balancing Efficiency and Compliance", date: "December 2025", read: "10 min read", img: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?q=80&w=600&auto=format&fit=crop" }
            ].map((post, i) => (
              <FadeIn key={i} delay={i * 0.12}>
                <div className="hover-lift" style={{ background: "white", border: "1px solid #f1f5f9", overflow: "hidden", cursor: "pointer", position: "relative" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, width: 3, height: 0, background: "#ea580c", transition: "height 0.4s ease" }} className="insight-accent" />
                  <div className="img-hover" style={{ overflow: "hidden", aspectRatio: "16/9" }}>
                    <img src={post.img} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "grayscale(20%)", transition: "all 0.8s ease" }} />
                  </div>
                  <div style={{ padding: 28 }}>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.3em", textTransform: "uppercase", display: "block", marginBottom: 12 }}>{post.tag}</span>
                    <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 700, color: "#0a0c0e", lineHeight: 1.3, marginBottom: 20 }}>{post.title}</h3>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#94a3b8", fontWeight: 500, display: "block" }}>{post.date}</span>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#cbd5e1", fontWeight: 500 }}>{post.read}</span>
                      </div>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "#0a0c0e", letterSpacing: "0.2em" }}>→</span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{ background: "#1a1c1e", padding: "120px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: 0, right: 0, width: "33%", height: "100%", background: "rgba(234,88,12,0.03)", clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%)", pointerEvents: "none" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ border: "1px solid #262a2e", padding: "80px 96px", background: "#161819", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: 0, right: 0, width: 256, height: 256, background: "rgba(234,88,12,0.04)", borderRadius: "50%", filter: "blur(80px)", transform: "translate(50%,-50%)" }} />
            <FadeIn>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 32, position: "relative", zIndex: 10 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{ width: 32, height: 1, background: "#ea580c" }} />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 800, color: "#ea580c", letterSpacing: "0.5em", textTransform: "uppercase" }}>Phase One</span>
                  <div style={{ width: 32, height: 1, background: "#ea580c" }} />
                </div>
                <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 72, fontWeight: 700, color: "white", letterSpacing: "-2px", lineHeight: 1 }}>
                  Ready to reach your <br />
                  <span style={{ color: "#4b5563", fontWeight: 300, fontStyle: "italic" }}>highest </span>
                  <span style={{ position: "relative", display: "inline-block" }}>
                    Crest?
                    <span style={{ position: "absolute", bottom: -4, left: 0, width: "100%", height: 8, background: "rgba(234,88,12,0.15)" }} />
                  </span>
                </h2>
                <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 19, color: "#6b7280", maxWidth: 560, fontWeight: 300, lineHeight: 1.7 }}>
                  Partner with our London leadership and Colombo technical hub to accelerate your enterprise's global potential. First consultation is complimentary.
                </p>
                <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", marginTop: 16 }}>
                  <button className="btn-primary sans" onClick={() => scrollTo("contact")} style={{ background: "#ea580c", color: "white", border: "none", padding: "20px 48px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}>
                    Schedule Consultation →
                  </button>
                  <button className="sans" onClick={() => scrollTo("portfolio")} style={{ background: "transparent", color: "#94a3b8", border: "1px solid #374151", padding: "20px 40px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.25em", textTransform: "uppercase", cursor: "pointer", transition: "all 0.4s" }}>
                    View Case Studies
                  </button>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#ea580c", animation: "pulse 2s infinite" }} />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, color: "#4b5563", fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase" }}>Direct Advisory: London · Colombo · NYC</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" style={{ background: "#fcfcfc", padding: "120px 32px", position: "relative", borderTop: "1px solid #f1f5f9" }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 4, background: "linear-gradient(to right, #ea580c, transparent)" }} />
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1px solid #e2e8f0", boxShadow: "0 40px 80px rgba(0,0,0,0.08)", overflow: "hidden" }}>
            {/* Left Panel */}
            <div style={{ background: "#0a0c0e", padding: "72px 64px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", bottom: "-10%", right: "-10%", fontFamily: "Cormorant Garamond, serif", fontSize: 160, fontWeight: 700, color: "rgba(255,255,255,0.02)", fontStyle: "italic", lineHeight: 1, pointerEvents: "none" }}>GC</div>
              <FadeIn direction="left">
                <div style={{ position: "relative", zIndex: 10 }}>
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 800, color: "#ea580c", letterSpacing: "0.5em", textTransform: "uppercase", display: "block", marginBottom: 24 }}>Connect</span>
                  <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 52, fontWeight: 700, color: "white", letterSpacing: "-1.5px", lineHeight: 1, marginBottom: 12 }}>
                    GLOBAL<br />
                    <span style={{ color: "#374151", fontWeight: 300, fontStyle: "italic" }}>OPERATIONS.</span>
                  </h2>
                  <div style={{ width: 48, height: 3, background: "#ea580c", marginBottom: 48 }} />

                  <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
                    {[
                      { region: "UNITED KINGDOM", city: "London Leadership", address: "Mayfair Executive Suite, W1K", phone: "+44 (0) 20 7946 0000", email: "london@growthcrest.com" },
                      { region: "SRI LANKA", city: "Colombo Hub", address: "World Trade Center, West Tower", phone: "+94 11 234 5678", email: "colombo@growthcrest.com" },
                      { region: "UNITED STATES", city: "New York Office", address: "330 Madison Avenue, NY 10017", phone: "+1 212 946 0000", email: "nyc@growthcrest.com" }
                    ].map((office, i) => (
                      <div key={i} style={{ cursor: "pointer" }}>
                        <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", display: "block", marginBottom: 6 }}>{office.region}</span>
                        <h5 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 20, fontWeight: 700, color: "white", marginBottom: 6 }}>{office.city}</h5>
                        <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 15, color: "#6b7280", fontWeight: 300 }}>{office.address}</p>
                        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, color: "#4b5563", marginTop: 4, fontWeight: 500 }}>{office.phone}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right Panel - Form */}
            <div style={{ background: "white", padding: "72px 64px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <FadeIn direction="right">
                <div style={{ marginBottom: 40 }}>
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 32, fontWeight: 700, color: "#0a0c0e", letterSpacing: "-0.5px", marginBottom: 8 }}>Initiate Engagement</h3>
                  <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: "#94a3b8", fontWeight: 300 }}>Share your brief and a senior advisor will be in touch within 24 hours.</p>
                </div>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                  {[
                    { name: "name", type: "text", label: "Full Name", required: true },
                    { name: "company", type: "text", label: "Company / Organisation", required: true },
                    { name: "email", type: "email", label: "Corporate Email", required: true }
                  ].map(field => (
                    <div key={field.name} style={{ position: "relative" }}>
                      <input
                        name={field.name}
                        type={field.type}
                        placeholder={field.label}
                        value={form[field.name]}
                        onChange={handleChange}
                        required={field.required}
                        style={{ width: "100%", padding: "16px 0", background: "transparent", border: "none", borderBottom: "1px solid #e2e8f0", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 16, color: "#0a0c0e", outline: "none", transition: "border-color 0.3s" }}
                      />
                      <label style={{ position: "absolute", top: -12, left: 0, fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.4em", textTransform: "uppercase" }}>{field.label}</label>
                    </div>
                  ))}
                  <div style={{ position: "relative" }}>
                    <textarea
                      name="message"
                      placeholder="Briefly describe your strategic requirements"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      required
                      style={{ width: "100%", padding: "16px 0", background: "transparent", border: "none", borderBottom: "1px solid #e2e8f0", fontFamily: "Cormorant Garamond, Georgia, serif", fontSize: 16, color: "#0a0c0e", outline: "none", resize: "none", transition: "border-color 0.3s" }}
                    />
                    <label style={{ position: "absolute", top: -12, left: 0, fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#94a3b8", letterSpacing: "0.4em", textTransform: "uppercase" }}>Strategic Requirements</label>
                  </div>
                  <button type="submit" className="btn-primary sans" style={{ background: "#0a0c0e", color: "white", border: "none", padding: "20px", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.4em", textTransform: "uppercase", cursor: "pointer", display: "flex", justifyContent: "center", alignItems: "center", gap: 12, marginTop: 8 }}>
                    Submit Brief →
                  </button>
                  {submitted && (
                    <div style={{ textAlign: "center", padding: "16px", background: "rgba(234,88,12,0.05)", border: "1px solid rgba(234,88,12,0.2)" }}>
                      <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, color: "#ea580c", letterSpacing: "0.4em", textTransform: "uppercase" }}>
                        ✓ Transmission Received — An advisor will review your brief within 24 hours.
                      </span>
                    </div>
                  )}
                </form>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: "#0a0c0e", color: "#94a3b8", paddingTop: 80, paddingBottom: 40, borderTop: "4px solid #ea580c" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px" }}>
          {/* Top */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 64, marginBottom: 64, alignItems: "start" }}>
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, border: "1.5px solid #ea580c", transform: "rotate(45deg)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ transform: "rotate(-45deg)", fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 800, color: "#ea580c" }}>GC</span>
                </div>
                <div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 14, letterSpacing: "0.2em", color: "white" }}>
                    GROWTH<span style={{ color: "#ea580c" }}>CREST</span>
                  </div>
                  <div style={{ fontFamily: "Montserrat, sans-serif", fontSize: 7, color: "#374151", letterSpacing: "0.5em", fontWeight: 700, marginTop: 2, textTransform: "uppercase" }}>Strategic Alliance</div>
                </div>
              </div>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontSize: 16, color: "#6b7280", maxWidth: 420, lineHeight: 1.7, fontWeight: 300 }}>
                Providing strategic foresight and operational excellence to global enterprises since 2013. Headquartered in London with delivery hubs in Colombo and New York.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                {["LinkedIn", "Twitter", "Instagram"].map(s => (
                  <div key={s} style={{ width: 36, height: 36, border: "1px solid #1f2937", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "border-color 0.3s, background 0.3s" }}>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: 8, fontWeight: 700, color: "#4b5563" }}>{s[0]}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, justifyContent: "flex-end", alignItems: "flex-start" }}>
              <button className="sans" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "#94a3b8", background: "transparent", border: "1px solid #1f2937", padding: "10px 20px", cursor: "pointer" }}>
                Global Offices
              </button>
              <button className="sans" onClick={() => scrollTo("contact")} style={{ fontFamily: "Montserrat, sans-serif", fontSize: 9, fontWeight: 700, letterSpacing: "0.3em", textTransform: "uppercase", color: "white", background: "#ea580c", border: "none", padding: "10px 20px", cursor: "pointer" }}>
                Contact Us
              </button>
            </div>
          </div>

          {/* Sitemap */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 40, paddingBottom: 56, borderBottom: "1px solid #111316" }}>
            {[
              { head: "Industries", links: ["Financial Services", "Technology & Media", "Energy & Utilities", "Public Sector"] },
              { head: "Capabilities", links: ["Strategy & M&A", "Risk & Compliance", "Digital Engineering", "Tax Advisory"] },
              { head: "Portfolio", links: ["Case Studies", "Client Outcomes", "Impact Reports", "Firm Profile"] },
              { head: "The Firm", links: ["About GrowthCrest", "Our Leadership", "Careers", "Inclusion & Diversity"] },
              { head: "Insights", links: ["Global Outlook 2026", "AI Ethics Report", "Executive Briefing", "Market Pulse"] }
            ].map(col => (
              <div key={col.head}>
                <h4 style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, fontWeight: 700, color: "white", textTransform: "uppercase", letterSpacing: "0.3em", borderLeft: "2px solid #ea580c", paddingLeft: 12, marginBottom: 20 }}>{col.head}</h4>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map(link => (
                    <li key={link}>
                      <a href="#" className="footer-link" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 11, color: "#6b7280", textDecoration: "none", display: "block", transition: "all 0.2s" }}>{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div style={{ paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {["Privacy Statement", "Terms of Use", "Cookie Notice", "Accessibility", "Sitemap"].map(link => (
                <a key={link} href="#" style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, color: "#374151", textDecoration: "none", fontWeight: 500, letterSpacing: "0.1em", transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#ea580c"}
                  onMouseLeave={e => e.target.style.color = "#374151"}
                >{link}</a>
              ))}
            </div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: 10, color: "#374151", fontWeight: 700, letterSpacing: "0.2em" }}>© 2026 GrowthCrest International Ltd.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}