import { Phone, Mail, Menu, X, Globe, ChevronDown, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Products", href: "#products" },
  { label: "Gallery", href: "#gallery" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      {/* Top utility bar */}
      <div className={`bg-brand-navy text-primary-foreground text-xs py-2 px-4 transition-all duration-300 ${scrolled ? "hidden" : "flex"} items-center justify-between`}>
        <div className="flex items-center gap-6">
          <a href="tel:+918888038896" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Phone className="w-3 h-3" />
            <span>+91-8888038896</span>
          </a>
          <a href="mailto:contact@eximnexus.com" className="flex items-center gap-1.5 hover:text-accent transition-colors">
            <Mail className="w-3 h-3" />
            <span className="hidden sm:inline">contact@eximnexus.com</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Globe className="w-3 h-3" />
            <span className="hidden sm:inline">Global Trade Partner</span>
          </span>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/Nexusin.in/" className="hover:text-accent transition-colors" aria-label="Facebook">f</a>
            <a href="https://www.linkedin.com/company/nexus-international8/" className="hover:text-accent transition-colors" aria-label="LinkedIn">in</a>
            <a href="https://www.instagram.com/nexus_international_/" className="hover:text-accent transition-colors" aria-label="Instagram">ig</a>
          </div>
        </div>
      </div>

      {/* Main nav - glassmorphism */}
      <nav className={`transition-all duration-500 ${
        scrolled
          ? "bg-card/90 backdrop-blur-xl shadow-lg border-b border-border/50"
          : "bg-card/70 backdrop-blur-md"
      }`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" onClick={() => scrollTo("#home")} className="flex-shrink-0">
            <img
              src="https://image1.jdomni.in/storeLogo/23112025/49/53/81/CC4CAF8A1D7B79FA2273ADE4A9_1763917491652.png?output-format=webp"
              alt="Nexus International - Export Import Consultants"
              className="h-10 md:h-14 object-contain"
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="nav-link px-4 py-2 rounded-lg hover:bg-primary/5 transition-all"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo("#quote")}
              className="hidden sm:flex items-center gap-2 btn-primary text-sm py-2.5 px-5"
            >
              <MessageSquare className="w-4 h-4" />
              Get Quote
            </button>
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-primary/5 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96 border-t border-border/50" : "max-h-0"}`}>
          <ul className="px-4 py-4 space-y-1 bg-card/95 backdrop-blur-xl">
            {navItems.map((item) => (
              <li key={item.label}>
                <button
                  onClick={() => scrollTo(item.href)}
                  className="nav-link w-full text-left py-3 px-4 rounded-lg hover:bg-primary/5 transition-all"
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => scrollTo("#quote")}
                className="btn-primary w-full text-sm mt-2"
              >
                Request a Quote
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
