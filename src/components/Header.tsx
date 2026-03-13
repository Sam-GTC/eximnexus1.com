import { Phone, Mail, Search, Heart, User, Menu } from "lucide-react";
import { useState } from "react";

const navItems = ["HOME", "PRODUCTS", "SERVICES", "GALLERY", "VIDEOS", "BLOGS", "TESTIMONIALS", "ABOUT US", "MORE"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-brand-magenta text-primary-foreground text-xs py-1 px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone className="w-3 h-3" />
          </span>
          <span className="flex items-center gap-1">
            <Mail className="w-3 h-3" />
          </span>
          <span className="hidden md:inline">Nutan Colony Road-Kranti Chowk</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/Nexusin.in/" className="hover:opacity-80">f</a>
          <a href="https://www.linkedin.com/company/nexus-international8/" className="hover:opacity-80">in</a>
          <a href="https://www.instagram.com/nexus_international_/" className="hover:opacity-80">ig</a>
          <a href="https://twitter.com/home" className="hover:opacity-80">tw</a>
        </div>
      </div>

      {/* Logo & actions bar */}
      <div className="bg-background py-3 px-4 flex items-center justify-between border-b border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <svg className="w-4 h-4 text-brand-green" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/></svg>
          <span className="hidden sm:inline">Nutan Colony Road-Kranti Chowk</span>
        </div>

        <div className="flex-shrink-0">
          <img
            src="https://image1.jdomni.in/storeLogo/23112025/49/53/81/CC4CAF8A1D7B79FA2273ADE4A9_1763917491652.png?output-format=webp"
            alt="Nexus International Logo"
            className="h-14 md:h-16 object-contain"
          />
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Search className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <Heart className="w-5 h-5 cursor-pointer hover:text-primary transition-colors" />
          <div className="flex items-center gap-1 text-sm cursor-pointer hover:text-primary transition-colors">
            <User className="w-5 h-5" />
            <span className="hidden md:inline">Log In | Sign Up</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-background border-b border-border px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>

          <ul className="hidden md:flex items-center justify-center gap-6 py-3 w-full">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="nav-link text-xs">{item}</a>
              </li>
            ))}
          </ul>

          <div className="md:hidden flex items-center gap-2 text-sm">
            <span>0</span>
            <span>Cart</span>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-2 pb-4 px-2">
            {navItems.map((item) => (
              <li key={item}>
                <a href="#" className="nav-link text-xs block py-2 border-b border-border">{item}</a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
