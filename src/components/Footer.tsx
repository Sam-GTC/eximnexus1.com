import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      {/* Contact bar */}
      <div className="bg-brand-cyan py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center gap-8 text-primary-foreground">
          <div className="flex items-center gap-3">
            <Phone className="w-6 h-6" />
            <div>
              <p className="text-xs opacity-80">Contact Us</p>
              <a href="tel:+918888038896" className="font-semibold">+91-8888038896</a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-6 h-6" />
            <div>
              <p className="text-xs opacity-80">Mail Us</p>
              <span className="font-semibold">contact@eximnexus.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Useful Links */}
        <div>
          <h4 className="font-bold mb-4 text-lg">USEFUL LINKS</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Home</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Products</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Services</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Gallery</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Videos</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Blogs</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Testimonials</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
            <li><a href="#" className="hover:opacity-100 transition-opacity">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4 text-lg">CONTACT</h4>
          <div className="flex items-start gap-2 text-sm opacity-80 mb-4">
            <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
            <p>Nexus International, 5, Kalash Height, Nutan Colony Road-Kranti Chowk, Aurangabad-Maharashtra, Maharashtra 431001</p>
          </div>
          <p className="text-sm opacity-80">support@eximnexus.com</p>
          <p className="text-sm opacity-80">contact@eximnexus.com</p>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-bold mb-4 text-lg">CONNECT</h4>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/Nexusin.in/" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm font-bold">f</a>
            <a href="https://www.linkedin.com/company/nexus-international8/" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm font-bold">in</a>
            <a href="https://www.instagram.com/nexus_international_/" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm font-bold">ig</a>
            <a href="https://twitter.com/home" className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors text-sm font-bold">tw</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10 py-4 px-4 text-center text-sm opacity-60">
        © Copyrights 2021 - 2022. Nexus International. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
