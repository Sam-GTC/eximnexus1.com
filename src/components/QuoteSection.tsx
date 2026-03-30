import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const productOptions = [
  "Dehydrated Onion — Flakes",
  "Dehydrated Onion — Granules",
  "Dehydrated Onion — Powder",
  "Dehydrated Garlic — Flakes",
  "Dehydrated Garlic — Powder",
  "Dehydrated Ginger — Powder",
  "Spirulina Powder",
  "Other / Custom",
];

const portOptions = [
  "Rotterdam, Netherlands",
  "Hamburg, Germany",
  "Jebel Ali, UAE",
  "Dammam, Saudi Arabia",
  "Felixstowe, UK",
  "Muscat, Oman",
  "Other",
];

const QuoteSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", product: "", port: "", volume: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Sample Kit Request Received!",
      description: "Our trade team will contact you within 24 hours with pricing and sample details.",
    });
    setForm({ name: "", email: "", phone: "", company: "", product: "", port: "", volume: "", message: "" });
  };

  return (
    <section id="quote" className="py-24 px-4 bg-dark-earth relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-chilli-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-metallic-gold/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="text-off-white">
            <span className="text-metallic-gold font-bold text-xs tracking-[0.25em] uppercase mb-3 block">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6 leading-tight border-l-[5px] border-metallic-gold pl-5">
              Request Your
              <span className="text-metallic-gold block">72-Hour Sample Kit</span>
            </h2>
            <p className="text-off-white/60 text-lg leading-relaxed mb-10">
              Tell us what you need — product, mesh size, volume, and destination — and we'll dispatch a sample kit with full lab reports within 72 hours.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+91-8888038896" },
                { icon: Mail, label: "Email Us", value: "contact@eximnexus.com" },
                { icon: MapPin, label: "Facility", value: "Aurangabad, Maharashtra, India" },
                { icon: Clock, label: "Working Hours", value: "Mon – Sat: 9:00 AM – 7:00 PM IST" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-off-white/5 border border-off-white/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-metallic-gold" />
                  </div>
                  <div>
                    <p className="text-off-white/40 text-xs uppercase tracking-wider">{item.label}</p>
                    <p className="text-off-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-card p-8 shadow-2xl border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-6">Sample Kit Request</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input type="text" placeholder="Full Name *" required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold" />
              <input type="email" placeholder="Email Address *" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold" />
              <input type="tel" placeholder="Phone Number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold" />
              <input type="text" placeholder="Company Name" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold" />
            </div>
            <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-metallic-gold">
              <option value="">Select Product & Mesh Size</option>
              {productOptions.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <select value={form.port} onChange={e => setForm({ ...form, port: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold">
                <option value="">Destination Port</option>
                {portOptions.map(p => <option key={p} value={p}>{p}</option>)}
              </select>
              <input type="text" placeholder="Volume (MT)" value={form.volume} onChange={e => setForm({ ...form, volume: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold" />
            </div>
            <textarea placeholder="Additional requirements..." rows={3} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-metallic-gold resize-none" />
            <button type="submit" className="btn-gold w-full flex items-center justify-center gap-2 text-sm">
              <Send className="w-4 h-4" />
              Request Sample Kit
            </button>
            <p className="text-muted-foreground text-xs text-center mt-4">We dispatch samples within 72 hours. Your information is 100% secure.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
