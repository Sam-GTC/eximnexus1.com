import { useState } from "react";
import { Send, Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const QuoteSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Received!",
      description: "Our trade consultant will contact you within 24 hours.",
    });
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  };

  return (
    <section id="quote" className="py-20 px-4 bg-brand-navy relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-sky/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info side */}
          <div className="text-primary-foreground">
            <span className="text-accent font-semibold text-sm tracking-widest uppercase">Get Started</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mt-3 mb-6 leading-tight">
              Request a Free
              <span className="text-accent block">Trade Consultation</span>
            </h2>
            <p className="text-primary-foreground/70 text-lg leading-relaxed mb-10">
              Whether you're a first-time exporter or scaling to new markets, our team provides personalized advisory tailored to your business goals.
            </p>

            <div className="space-y-6">
              {[
                { icon: Phone, label: "Call Us", value: "+91-8888038896" },
                { icon: Mail, label: "Email Us", value: "contact@eximnexus.com" },
                { icon: MapPin, label: "Visit Us", value: "Nutan Colony Road, Kranti Chowk, Aurangabad" },
                { icon: Clock, label: "Working Hours", value: "Mon - Sat: 9:00 AM - 7:00 PM" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-primary-foreground/50 text-xs">{item.label}</p>
                    <p className="text-primary-foreground font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-8 shadow-2xl">
            <h3 className="text-xl font-bold text-foreground mb-6">Fill in Your Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text" placeholder="Full Name *" required
                value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="email" placeholder="Email Address *" required
                value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="tel" placeholder="Phone Number"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <input
                type="text" placeholder="Company Name"
                value={form.company} onChange={e => setForm({ ...form, company: e.target.value })}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm mb-4 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="">Select Service Required</option>
              <option value="iec">IEC & License Registration</option>
              <option value="freight">Freight Forwarding</option>
              <option value="customs">Customs Clearance</option>
              <option value="compliance">Regulatory Compliance</option>
              <option value="drawback">Duty Drawback Advisory</option>
              <option value="sourcing">Product Sourcing</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Tell us about your requirement..."
              rows={4}
              value={form.message} onChange={e => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground text-sm mb-6 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2 text-base">
              <Send className="w-4 h-4" />
              Submit Request
            </button>
            <p className="text-muted-foreground text-xs text-center mt-4">We respond within 24 hours. Your information is 100% secure.</p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
