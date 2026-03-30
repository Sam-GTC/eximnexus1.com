import { ArrowRight, Download } from "lucide-react";

const certifications = [
  { label: "APEDA", img: "https://upload.wikimedia.org/wikipedia/en/thumb/6/6e/APEDA_Logo.svg/1200px-APEDA_Logo.svg.png" },
  { label: "FSSAI", img: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/FSSAI_logo.png/220px-FSSAI_logo.png" },
  { label: "ISO 22000", img: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&h=80&fit=crop" },
  { label: "Halal Certified", img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=80&h=80&fit=crop" },
];

const HeroSection = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-stretch overflow-hidden">
      {/* Split-screen background */}
      <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center ken-burns-left"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1200&q=80')` }}
          />
          <div className="absolute inset-0 bg-dark-earth/70" />
        </div>
        <div className="relative overflow-hidden hidden md:block">
          <div
            className="absolute inset-0 bg-cover bg-center ken-burns-right"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80')` }}
          />
          <div className="absolute inset-0 bg-dark-earth/80" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40 w-full flex items-center">
        <div className="max-w-3xl">
          <span className="inline-block px-4 py-1.5 border border-metallic-gold/40 text-metallic-gold text-xs font-bold tracking-[0.3em] uppercase mb-8 animate-fade-in">
            Since 2009 — Aurangabad, India
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-off-white leading-[1.1] mb-6 animate-fade-in-up">
            Rooted in India.
            <span className="block text-metallic-gold mt-2">Engineered for Global Retail.</span>
          </h1>

          <p className="text-lg md:text-xl text-off-white/70 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Premium dehydrated vegetables, organic agro commodities & spirulina — processed under ISO 22000 standards. Direct-from-source pricing with 3–7% RoDTEP savings passed to you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
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
          <div className="flex flex-wrap items-center gap-6 animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            <span className="text-off-white/40 text-xs tracking-[0.2em] uppercase">Certified By</span>
            {certifications.map((cert) => (
              <div key={cert.label} className="flex items-center gap-2 px-3 py-1.5 border border-off-white/10 bg-off-white/5">
                <span className="text-off-white/70 text-xs font-medium">{cert.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default HeroSection;
