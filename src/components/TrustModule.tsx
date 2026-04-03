import { useState } from "react";
import { Shield, Clock, Droplets, Award, CheckCircle } from "lucide-react";

const regions = {
  middleEast: {
    label: "Middle East",
    badges: [
      { icon: Shield, text: "SFDA Approved" },
      { icon: Award, text: "Halal Certified" },
      { icon: Clock, text: "7-Day Transit to Dubai" },
      { icon: CheckCircle, text: "Jebel Ali Port Direct" },
    ],
    certifications: [
      "Saudi Food & Drug Authority (SFDA) Registration",
      "UAE Municipality Import Compliance",
      "Halal Certification — Jamiat Ulama-i-Hind",
      "GCC Standardization Organization (GSO) Conformity",
    ],
    transitText: "Average transit time: 7 days from JNPT to Jebel Ali. Weekly sailings via MSC, Maersk, and Hapag-Lloyd.",
  },
  euUk: {
    label: "EU / UK",
    badges: [
      { icon: Shield, text: "BRC Certified" },
      { icon: Award, text: "GFSI Recognized" },
      { icon: Droplets, text: "<5% Moisture Guaranteed" },
      { icon: CheckCircle, text: "EU MRL Compliant" },
    ],
    certifications: [
      "BRC Global Standard for Food Safety",
      "ISO 22000 Food Safety Management",
      "EU Maximum Residue Levels (MRL) Compliance",
      "RASFF Alert-Free Track Record Since 2018",
    ],
    transitText: "Average transit time: 21 days from JNPT to Rotterdam. Full container loads with phytosanitary and EUR.1 documentation.",
  },
};

type RegionKey = keyof typeof regions;

const TrustModule = () => {
  const [active, setActive] = useState<RegionKey>("middleEast");
  const region = regions[active];

  return (
    <section id="trust" className="py-24 px-4 bg-dark-earth text-off-white">
      <div className="max-w-7xl mx-auto">
        <span className="text-metallic-gold font-bold text-xs tracking-[0.25em] uppercase mb-3 block">Compliance & Certifications</span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4 border-l-[5px] border-metallic-gold pl-5 [&::after]:bg-[linear-gradient(90deg,hsl(var(--metallic-gold)),hsl(var(--off-white)/0.3))]">
          The Gold Standard in Food Safety
        </h2>
        <p className="text-off-white/60 text-lg max-w-2xl mb-12">
          Region-specific compliance ensuring your shipment clears customs without delays, every time.
        </p>

        {/* Tabs */}
        <div className="flex gap-0 mb-12">
          {(Object.keys(regions) as RegionKey[]).map((key) => (
            <button
              key={key}
              onClick={() => setActive(key)}
              className={`px-8 py-3 font-bold text-sm tracking-[0.15em] uppercase transition-all ${
                active === key
                  ? "bg-metallic-gold text-dark-earth"
                  : "border border-off-white/20 text-off-white/60 hover:text-off-white hover:border-off-white/40"
              }`}
            >
              {regions[key].label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Badges */}
          <div className="grid grid-cols-2 gap-4">
            {region.badges.map((badge, i) => (
              <div key={i} className="border border-off-white/10 bg-off-white/5 p-6 flex items-center gap-4">
                <badge.icon className="w-8 h-8 text-metallic-gold flex-shrink-0" />
                <span className="text-off-white font-bold text-sm">{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Certifications list */}
          <div>
            <h3 className="text-lg font-display font-bold text-metallic-gold mb-6">Active Certifications</h3>
            <ul className="space-y-4 mb-8">
              {region.certifications.map((cert, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-chilli-green flex-shrink-0 mt-0.5" />
                  <span className="text-off-white/80 text-sm">{cert}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-off-white/10 pt-6">
              <p className="text-off-white/50 text-sm leading-relaxed">
                <Clock className="w-4 h-4 inline mr-2 text-metallic-gold" />
                {region.transitText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustModule;
