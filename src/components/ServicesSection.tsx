import { Ship, FileCheck, Scale, TrendingUp, Globe, ShieldCheck, Package, Landmark } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "IEC & License Registration",
    description: "Complete assistance with Import Export Code (IEC), RCMC, FSSAI, and all mandatory trade licenses under DGFT regulations.",
  },
  {
    icon: Ship,
    title: "Freight Forwarding & Logistics",
    description: "Multi-modal freight solutions — sea, air, and road — with real-time tracking, optimal routing, and cost-efficient cargo management.",
  },
  {
    icon: Scale,
    title: "Customs Brokerage Excellence",
    description: "Expert customs clearance, tariff classification (HS codes), duty computation, and seamless port documentation for hassle-free trade.",
  },
  {
    icon: ShieldCheck,
    title: "Regulatory Compliance",
    description: "Navigate complex FEMA, RBI, and DGFT regulations with confidence. We ensure full compliance with export-import laws and trade policies.",
  },
  {
    icon: TrendingUp,
    title: "Duty Drawback & Incentives",
    description: "Maximize your profitability through government schemes — MEIS, RoDTEP, Advance Authorization, and Duty Drawback claims.",
  },
  {
    icon: Globe,
    title: "Market Entry Strategy",
    description: "Data-driven market analysis, buyer identification, trade fair coordination, and entry strategies for 35+ international markets.",
  },
  {
    icon: Package,
    title: "Supply Chain Optimization",
    description: "End-to-end supply chain consulting — from sourcing and procurement to warehousing, packaging standards, and last-mile delivery.",
  },
  {
    icon: Landmark,
    title: "Trade Finance Advisory",
    description: "Expert guidance on Letters of Credit (LC), Bank Guarantees, export credit insurance, and ECGC-backed financing solutions.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <span className="text-primary font-semibold text-sm tracking-widest uppercase text-center block">What We Do</span>
        <h2 className="section-title mt-3">Comprehensive Trade Solutions</h2>
        <p className="section-subtitle">
          From documentation to delivery, we provide 360° support for your international trade operations with unmatched expertise and reliability.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="service-card group">
              <div className="w-14 h-14 mx-auto mb-5 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-base font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
              <button
                onClick={() => document.querySelector("#quote")?.scrollIntoView({ behavior: "smooth" })}
                className="text-primary text-sm font-semibold hover:text-accent transition-colors"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
