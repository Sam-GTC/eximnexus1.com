import { CheckCircle, Award, Users, Target } from "lucide-react";

const highlights = [
  "Licensed DGFT & Customs Consultants",
  "End-to-End Trade Documentation",
  "Regulatory Compliance & Risk Mitigation",
  "Multi-Modal Logistics Coordination",
  "Duty Drawback & Incentive Advisory",
  "Market Entry Strategy for 35+ Countries",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">About Nexus International</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mt-3 mb-6 leading-tight">
              Your Trusted Partner in
              <span className="text-primary block">International Trade</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Nexus International is a premier Export-Import consultancy headquartered in Aurangabad, Maharashtra. With over 15 years of domain expertise, we specialize in <strong className="text-foreground">Supply Chain Optimization</strong>, <strong className="text-foreground">Customs Brokerage</strong>, and <strong className="text-foreground">Regulatory Compliance</strong> — enabling Indian businesses to compete on the global stage.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of certified trade professionals has facilitated over ₹500 Crore in cross-border commerce, serving 200+ exporters across agro commodities, dehydrated products, industrial goods, and specialty chemicals.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-brand-green flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
            >
              Schedule a Consultation
            </button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                alt="Global shipping and trade operations"
                className="w-full h-[500px] object-cover"
              />
            </div>
            {/* Floating cards */}
            <div className="absolute -bottom-6 -left-6 glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground">ISO Certified</p>
                <p className="text-muted-foreground text-xs">Quality Assured Operations</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="font-bold text-foreground">200+</p>
                <p className="text-muted-foreground text-xs">Active Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
