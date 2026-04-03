import { useState } from "react";
import { Download, CheckCircle, MapPin } from "lucide-react";

const regionData = [
  {
    id: "europe",
    label: "Europe",
    color: "bg-chilli-green",
    certifications: ["BRC Global Standard", "ISO 22000", "EU MRL Compliance", "RASFF Clear"],
    standards: "Products tested per EC Regulation 396/2005 for maximum residue levels. Full traceability from farm to port.",
  },
  {
    id: "middleeast",
    label: "Middle East",
    color: "bg-metallic-gold",
    certifications: ["SFDA Registration", "Halal Certified", "GSO Conformity", "UAE Municipality Approved"],
    standards: "Halal certification via Jamiat Ulama-i-Hind. All documentation aligned with GCC import protocols.",
  },
  {
    id: "asia",
    label: "Asia Pacific",
    color: "bg-barn-red",
    certifications: ["FSSAI Certified", "APEDA Registered", "Phytosanitary Compliant", "Codex Alimentarius"],
    standards: "Direct compliance with ASEAN food safety harmonization standards. Multi-language labeling available.",
  },
];

const ComplianceMap = () => {
  const [activeRegion, setActiveRegion] = useState(0);
  const region = regionData[activeRegion];

  return (
    <section id="compliance" className="py-24 px-4 section-alt-warm">
      <div className="max-w-7xl mx-auto">
        <span className="section-label">Global Reach</span>
        <h2 className="section-heading">Compliance Map</h2>
        <p className="section-subtitle mt-4">
          Click a region to view our active certifications and download the latest batch lab reports.
        </p>

        <div className="mt-12 grid lg:grid-cols-2 gap-12">
          {/* Map placeholder */}
          <div className="bg-dark-earth p-8 relative min-h-[400px] flex flex-col justify-center">
            <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=800')] bg-cover bg-center" />
            <div className="relative z-10">
              <MapPin className="w-8 h-8 text-metallic-gold mb-6" />
              <h3 className="text-2xl font-display font-bold text-off-white mb-8">Select a Region</h3>
              <div className="flex flex-wrap gap-3">
                {regionData.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveRegion(i)}
                    className={`px-6 py-3 font-bold text-sm tracking-[0.15em] uppercase transition-all ${
                      activeRegion === i
                        ? "bg-metallic-gold text-dark-earth"
                        : "border border-off-white/20 text-off-white/60 hover:text-off-white"
                    }`}
                  >
                    {r.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Region detail */}
          <div className="bg-card border border-border p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className={`w-3 h-3 ${region.color}`} />
              <h3 className="text-xl font-display font-bold text-foreground">{region.label}</h3>
            </div>

            <ul className="space-y-4 mb-8">
              {region.certifications.map((cert, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-chilli-green flex-shrink-0" />
                  <span className="text-foreground text-sm font-medium">{cert}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground text-sm leading-relaxed mb-8 border-t border-border pt-6">
              {region.standards}
            </p>

            <button className="btn-outline text-barn-red border-barn-red flex items-center gap-3 w-full justify-center">
              <Download className="w-5 h-5" />
              Download Latest Lab Report
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComplianceMap;
