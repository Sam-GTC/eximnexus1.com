import { ArrowRight, Shield, Globe, TrendingUp } from "lucide-react";

const HeroSection = () => {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Background with parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?auto=format&fit=crop&w=1920&q=80')`,
        }}
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/60" />

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 md:py-40 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/90 text-sm mb-8 animate-fade-in">
            <Globe className="w-4 h-4 text-accent" />
            <span>Trusted by 200+ Exporters Across 35+ Countries</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up">
            Your Gateway to
            <span className="block text-accent mt-2">Global Trade Excellence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            End-to-end Export-Import consulting — from IEC Registration & Customs Clearance to Supply Chain Optimization & Regulatory Compliance. We transform your international trade vision into reality.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <button
              onClick={() => scrollTo("#quote")}
              className="btn-gold flex items-center justify-center gap-2 text-lg"
            >
              Request Free Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollTo("#services")}
              className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-all flex items-center justify-center gap-2"
            >
              Explore Our Services
            </button>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-3 gap-6 max-w-lg animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
            {[
              { icon: Shield, label: "Licensed DGFT Consultant" },
              { icon: Globe, label: "35+ Countries Served" },
              { icon: TrendingUp, label: "₹500Cr+ Trade Facilitated" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-primary-foreground/70 text-xs leading-tight">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
