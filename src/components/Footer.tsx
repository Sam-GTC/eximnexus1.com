import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer id="contact" className="bg-brand-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <img
            src="https://image1.jdomni.in/storeLogo/23112025/49/53/81/CC4CAF8A1D7B79FA2273ADE4A9_1763917491652.png?output-format=webp"
            alt="Nexus International"
            className="h-12 object-contain mb-4"
          />
          <p className="text-primary-foreground/60 text-sm leading-relaxed">
            India's trusted Export-Import consultancy — facilitating global trade through expertise, compliance, and innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-5 text-sm tracking-widest uppercase text-accent">Quick Links</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            {["Home", "About Us", "Services", "Products", "Gallery", "Contact"].map(link => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(/\s/g, "")}`} className="hover:text-primary-foreground transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-5 text-sm tracking-widest uppercase text-accent">Services</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            {["IEC Registration", "Customs Clearance", "Freight Forwarding", "Duty Drawback", "Compliance Advisory", "Trade Finance"].map(s => (
              <li key={s}><span className="hover:text-primary-foreground transition-colors cursor-pointer">{s}</span></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-5 text-sm tracking-widest uppercase text-accent">Contact</h4>
          <div className="space-y-4 text-sm text-primary-foreground/60">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
              <p>5, Kalash Height, Nutan Colony Road, Kranti Chowk, Aurangabad, Maharashtra 431001</p>
            </div>
            <a href="tel:+918888038896" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
              <Phone className="w-4 h-4 text-accent" />
              +91-8888038896
            </a>
            <a href="mailto:contact@eximnexus.com" className="flex items-center gap-3 hover:text-primary-foreground transition-colors">
              <Mail className="w-4 h-4 text-accent" />
              contact@eximnexus.com
            </a>
          </div>
          <div className="flex gap-3 mt-6">
            {[
              { href: "https://www.facebook.com/Nexusin.in/", label: "f" },
              { href: "https://www.linkedin.com/company/nexus-international8/", label: "in" },
              { href: "https://www.instagram.com/nexus_international_/", label: "ig" },
            ].map(s => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-colors text-xs font-bold">
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10 py-5 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <p className="text-xs text-primary-foreground/40">© 2024 Nexus International. All Rights Reserved.</p>
          <button onClick={scrollTop} className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center hover:bg-primary transition-colors" aria-label="Back to top">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
