import { useState } from "react";
import { Bot, X, Send } from "lucide-react";

const cannedResponses: Record<string, string> = {
  "lead time": "Standard lead time for dehydrated products is 15–21 days from order confirmation. For GCC destinations, expect 7-day transit after dispatch from JNPT.",
  "price": "Our FOB prices range from $1,350–$2,800/MT depending on the product and mesh size. We pass 5% RoDTEP savings directly to you. Contact us for a binding quotation.",
  "sample": "We dispatch sample kits within 72 hours of request, including product samples, lab reports, and certification copies. No charges for qualified buyers.",
  "compliance": "We hold BRC, ISO 22000, FSSAI, APEDA, and Halal certifications. All products are tested per EU MRL standards with full traceability documentation.",
  "default": "Thank you for your interest. Our trade specialist will respond to your specific query within 24 hours. For immediate assistance, call +91-8888038896.",
};

const getResponse = (msg: string): string => {
  const lower = msg.toLowerCase();
  for (const [key, value] of Object.entries(cannedResponses)) {
    if (key !== "default" && lower.includes(key)) return value;
  }
  return cannedResponses.default;
};

const WhatsAppButton = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ from: "bot" | "user"; text: string }[]>([
    { from: "bot", text: "Welcome to Nexus Intelligence. Ask about lead times, pricing, or compliance." },
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { from: "user", text: userMsg }]);
    setInput("");
    setTimeout(() => {
      setMessages(prev => [...prev, { from: "bot", text: getResponse(userMsg) }]);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-chilli-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Nexus Intelligence"
      >
        {open ? <X className="w-6 h-6 text-off-white" /> : <Bot className="w-7 h-7 text-off-white" />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-card border border-border shadow-2xl flex flex-col">
          <div className="bg-chilli-green p-4 flex items-center gap-3">
            <Bot className="w-5 h-5 text-off-white" />
            <div>
              <p className="text-off-white font-bold text-sm">Nexus Intelligence</p>
              <p className="text-off-white/60 text-xs">Ask about products, pricing, compliance</p>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm p-3 max-w-[90%] ${
                msg.from === "bot"
                  ? "bg-muted text-foreground"
                  : "bg-chilli-green text-off-white ml-auto"
              }`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="p-3 border-t border-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type a question..."
              className="flex-1 px-3 py-2 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-chilli-green"
            />
            <button onClick={handleSend} className="w-10 h-10 bg-chilli-green flex items-center justify-center hover:brightness-110">
              <Send className="w-4 h-4 text-off-white" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
