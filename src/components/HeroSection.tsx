import { ArrowRight, Download, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import slider1 from "@/assets/slider1.jpg";
import slider2 from "@/assets/slider2.jpg";
import slider3 from "@/assets/slider3.jpg";
import headerImg from "@/assets/default-header-img.jpg";

const certifications = [
  { label: "APEDA" },
  { label: "FSSAI" },
  { label: "ISO 22000" },
  { label: "Halal Certified" },
];

const slides = [
  {
    image: slider1,
    headline: "Rooted in India.",
    highlight: "Engineered for Global Retail.",
    subtitle: "Premium dehydrated vegetables, organic agro commodities & spirulina — processed under ISO 22000 standards.",
  },
  {
    image: slider2,
    headline: "Precision Logistics.",
    highlight: "Delivered Worldwide.",
    subtitle: "Direct-from-source pricing with 3–7% RoDTEP savings passed to you. FOB, CIF, and DDP terms available.",
  },
  {
    image: headerImg,
    headline: "Fleet-Scale Supply.",
    highlight: "Zero Compromise on Quality.",
    subtitle: "From Aurangabad processing units to international ports — full traceability at every mile.",
  },
  {
    image: slider3,
    headline: "Farm to Freight.",
    highlight: "End-to-End Export Solutions.",
    subtitle: "Integrated cold-chain, customs clearance, and compliance documentation for seamless cross-border trade.",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrent(index);
    setTimeout(() => setIsTransitioning(false), 800);
  }, [isTransitioning]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Slide backgrounds */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: current === i ? 1 : 0, zIndex: current === i ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center scale-105"
            style={{
              backgroundImage: `url('${slide.image}')`,
              animation: current === i ? "kenBurns 12s ease-in-out infinite alternate" : "none",
            }}
          />
          <div className="absolute inset-0 bg-dark-earth/65" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40 w-full flex items-center">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 border border-metallic-gold/40 text-metallic-gold text-xs font-bold tracking-[0.3em] uppercase mb-8 animate-fade-in">
            Since 2009 — Aurangabad, India
          </span>

          {slides.map((slide, i) => (
            <div
              key={i}
              className="transition-all duration-700 ease-in-out"
              style={{
                opacity: current === i ? 1 : 0,
                transform: current === i ? "translateY(0)" : "translateY(20px)",
                position: current === i ? "relative" : "absolute",
                pointerEvents: current === i ? "auto" : "none",
              }}
            >
              {current === i && (
                <>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-off-white leading-[1.1] mb-6">
                    {slide.headline}
                    <span className="block text-metallic-gold mt-2">{slide.highlight}</span>
                  </h1>
                  <p className="text-lg md:text-xl text-off-white/70 mb-10 max-w-2xl leading-relaxed">
                    {slide.subtitle}
                  </p>
                </>
              )}
            </div>
          ))}

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <button onClick={() => scrollTo("#quote")} className="btn-gold flex items-center justify-center gap-3">
              Request 72-Hour Sample Kit
              <ArrowRight className="w-5 h-5" />
            </button>
            <button onClick={() => scrollTo("#compliance")} className="btn-outline text-off-white border-off-white/30 hover:bg-off-white/10 flex items-center justify-center gap-3">
              <Download className="w-5 h-5" />
              View Compliance Map
            </button>
          </div>

          {/* Certification strip */}
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-off-white/40 text-xs tracking-[0.2em] uppercase">Certified By</span>
            {certifications.map((cert) => (
              <div key={cert.label} className="flex items-center gap-2 px-3 py-1.5 border border-off-white/10 bg-off-white/5">
                <span className="text-off-white/70 text-xs font-medium">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <div className="absolute z-20 bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button onClick={prev} className="w-10 h-10 flex items-center justify-center rounded-full bg-off-white/10 hover:bg-off-white/20 backdrop-blur-sm border border-off-white/20 transition-all text-off-white">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all duration-500 ${current === i ? "w-8 bg-metallic-gold" : "w-2 bg-off-white/30 hover:bg-off-white/50"}`}
            />
          ))}
        </div>
        <button onClick={next} className="w-10 h-10 flex items-center justify-center rounded-full bg-off-white/10 hover:bg-off-white/20 backdrop-blur-sm border border-off-white/20 transition-all text-off-white">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
