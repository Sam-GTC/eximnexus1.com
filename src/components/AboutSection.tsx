import { CheckCircle, Award, Users } from "lucide-react";

const highlights = [
  "ISO 22000 & HACCP Certified Facility",
  "Direct Farm-to-Port Supply Chain",
  "14-Point Quality Assurance Protocol",
  "APEDA & FSSAI Registered Exporter",
  "RoDTEP & Duty Drawback Expertise",
  "Dedicated Account Managers for Key Markets",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 section-alt-muted">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="section-label">About Nexus International</span>
            <h2 className="section-heading">
              From Indian Soil to
              <span className="text-barn-red block">Global Shelves</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 mt-6">
              Nexus International is a vertically integrated agro-processor and exporter headquartered in Aurangabad, Maharashtra. Since 2009, we have specialized in <strong className="text-foreground">premium dehydrated vegetables</strong>, <strong className="text-foreground">organic agro commodities</strong>, and <strong className="text-foreground">nutraceutical-grade spirulina</strong> for the global food processing and retail industry.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our direct-from-source model eliminates intermediaries, ensuring procurement officers in the EU and Middle East receive consistent quality at a 3–7% lower landed cost than market average — backed by full traceability from farm gate to destination port.
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <CheckCircle className="w-4 h-4 text-chilli-green flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <button
              onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-gold"
            >
              Request Facility Tour
            </button>
          </div>

          <div className="relative">
            <div className="overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80"
                alt="Agricultural processing facility"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 glass-card p-5 flex items-center gap-4 bg-card">
              <div className="w-12 h-12 bg-chilli-green/10 flex items-center justify-center">
                <Award className="w-6 h-6 text-chilli-green" />
              </div>
              <div>
                <p className="font-bold text-foreground">ISO 22000</p>
                <p className="text-muted-foreground text-xs">Certified Facility</p>
              </div>
            </div>
            <div className="absolute -top-6 -right-6 glass-card p-5 flex items-center gap-4 bg-card">
              <div className="w-12 h-12 bg-metallic-gold/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-metallic-gold" />
              </div>
              <div>
                <p className="font-bold text-foreground">35+ Countries</p>
                <p className="text-muted-foreground text-xs">Active Markets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
