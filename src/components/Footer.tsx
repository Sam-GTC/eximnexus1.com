import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="bg-dark-earth text-off-white">
      {/* Certification strip */}
      <div className="border-b border-off-white/10 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-8 text-off-white/40 text-xs font-bold tracking-[0.2em] uppercase">
          <span>APEDA Registered</span>
          <span className="w-1 h-1 bg-metallic-gold" />
          <span>FSSAI Certified</span>
          <span className="w-1 h-1 bg-metallic-gold" />
          <span>ISO 22000</span>
          <span className="w-1 h-1 bg-metallic-gold" />
          <span>Halal Certified</span>
          <span className="w-1 h-1 bg-metallic-gold" />
          <span>BRC Compliant</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="lg:col-span-1">
          <img
            src="https://image1.jdomni.in/storeLogo/23112025/49/53/81/CC4CAF8A1D7B79FA2273ADE4A9_1763917491652.png?output-format=webp"
            alt="Nexus International"
            className="h-12 object-contain mb-4"
          />
          <p className="text-off-white/50 text-sm leading-relaxed">
            Premium dehydrated vegetables and agro commodities — processed in India, trusted globally by procurement teams across 35+ countries.
          </p>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs tracking-[0.2em] uppercase text-metallic-gold">Navigation</h4>
          <ul className="space-y-3 text-sm text-off-white/50">
            {["Home", "About", "Products", "Calculator", "Compliance", "Testimonials", "Contact"].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase()}`} className="hover:text-off-white transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs tracking-[0.2em] uppercase text-metallic-gold">Products</h4>
          <ul className="space-y-3 text-sm text-off-white/50">
            {["Dehydrated Onion", "Dehydrated Garlic", "Dehydrated Ginger", "Spirulina Powder", "Fresh Onions", "Agro Commodities"].map(s => (
              <li key={s}><span className="hover:text-off-white transition-colors cursor-pointer">{s}</span></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-5 text-xs tracking-[0.2em] uppercase text-metallic-gold">Contact</h4>
          <div className="space-y-4 text-sm text-off-white/50">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-metallic-gold" />
              <p>5, Kalash Height, Nutan Colony Road, Kranti Chowk, Aurangabad, Maharashtra 431001</p>
            </div>
            <a href="tel:+918888038896" className="flex items-center gap-3 hover:text-off-white transition-colors">
              <Phone className="w-4 h-4 text-metallic-gold" />
              +91-8888038896
            </a>
            <a href="mailto:contact@eximnexus.com" className="flex items-center gap-3 hover:text-off-white transition-colors">
              <Mail className="w-4 h-4 text-metallic-gold" />
              contact@eximnexus.com
            </a>
          </div>
          <div className="flex gap-3 mt-6">
            {[
              { href: "https://www.facebook.com/Nexusin.in/", label: "f" },
              { href: "https://www.linkedin.com/company/nexus-international8/", label: "in" },
              { href: "https://www.instagram.com/nexus_international_/", label: "ig" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-off-white/5 border border-off-white/10 flex items-center justify-center hover:bg-metallic-gold hover:text-dark-earth transition-all text-xs font-bold">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-off-white/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs text-off-white/30">© 2026 Nexus International. All Rights Reserved.</p>
          <button onClick={scrollTop} className="w-9 h-9 bg-metallic-gold/20 flex items-center justify-center hover:bg-metallic-gold hover:text-dark-earth transition-all" aria-label="Back to top">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
