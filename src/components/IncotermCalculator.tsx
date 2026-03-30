import { useState } from "react";
import { Calculator, ArrowRight, TrendingDown } from "lucide-react";

const ports = [
  { name: "Rotterdam, Netherlands", code: "RTM", freightPerMT: 85, transitDays: 21 },
  { name: "Hamburg, Germany", code: "HAM", freightPerMT: 90, transitDays: 23 },
  { name: "Jebel Ali, UAE", code: "JEA", freightPerMT: 45, transitDays: 7 },
  { name: "Dammam, Saudi Arabia", code: "DMM", freightPerMT: 50, transitDays: 9 },
  { name: "Felixstowe, UK", code: "FXT", freightPerMT: 95, transitDays: 24 },
  { name: "Muscat, Oman", code: "MCT", freightPerMT: 48, transitDays: 8 },
];

const products = [
  { name: "Dehydrated Onion Flakes", fobPerMT: 1350 },
  { name: "Dehydrated Onion Granules", fobPerMT: 1450 },
  { name: "Dehydrated Onion Powder", fobPerMT: 1550 },
  { name: "Dehydrated Garlic Flakes", fobPerMT: 2200 },
  { name: "Dehydrated Garlic Powder", fobPerMT: 2500 },
  { name: "Dehydrated Ginger Powder", fobPerMT: 2800 },
];

const RODTEP_RATE = 0.05; // 5% RoDTEP benefit
const INSURANCE_RATE = 0.003; // 0.3% CIF insurance

const IncotermCalculator = () => {
  const [selectedPort, setSelectedPort] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [volume, setVolume] = useState(24);
  const [showResult, setShowResult] = useState(false);

  const port = ports[selectedPort];
  const product = products[selectedProduct];

  const fobTotal = product.fobPerMT * volume;
  const freightTotal = port.freightPerMT * volume;
  const insuranceTotal = fobTotal * INSURANCE_RATE;
  const cifTotal = fobTotal + freightTotal + insuranceTotal;
  const rodtepSaving = fobTotal * RODTEP_RATE;
  const effectiveCIF = cifTotal - rodtepSaving;

  return (
    <section id="calculator" className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <span className="section-label">Financial Engineering</span>
        <h2 className="section-heading">Incoterms & Cost Calculator</h2>
        <p className="section-subtitle mt-4">
          We pass the 3–7% government incentive directly to your bottom line. Estimate your landed cost below.
        </p>

        <div className="mt-12 gold-border bg-card p-8 md:p-12">
          <div className="flex items-center gap-3 mb-8">
            <Calculator className="w-6 h-6 text-metallic-gold" />
            <h3 className="text-lg font-display font-bold text-foreground">Estimate Your CIF Cost</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Product</label>
              <select
                value={selectedProduct}
                onChange={(e) => setSelectedProduct(Number(e.target.value))}
                className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              >
                {products.map((p, i) => (
                  <option key={i} value={i}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Destination Port</label>
              <select
                value={selectedPort}
                onChange={(e) => setSelectedPort(Number(e.target.value))}
                className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              >
                {ports.map((p, i) => (
                  <option key={i} value={i}>{p.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold tracking-[0.15em] uppercase text-muted-foreground mb-2">Volume (MT)</label>
              <input
                type="number"
                min={1}
                max={500}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value) || 1)}
                className="w-full px-4 py-3 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-metallic-gold"
              />
            </div>
          </div>

          <button
            onClick={() => setShowResult(true)}
            className="btn-gold flex items-center justify-center gap-3 w-full md:w-auto"
          >
            Calculate Estimate
            <ArrowRight className="w-5 h-5" />
          </button>

          {showResult && (
            <div className="mt-10 border-t border-border pt-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">FOB Price</p>
                  <p className="text-2xl font-display font-bold text-foreground">${fobTotal.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">${product.fobPerMT}/MT</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Freight</p>
                  <p className="text-2xl font-display font-bold text-foreground">${freightTotal.toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">${port.freightPerMT}/MT · {port.transitDays} days</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Insurance</p>
                  <p className="text-2xl font-display font-bold text-foreground">${Math.round(insuranceTotal).toLocaleString()}</p>
                  <p className="text-xs text-muted-foreground">0.3% of FOB</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">CIF Total</p>
                  <p className="text-2xl font-display font-bold text-barn-red">${Math.round(cifTotal).toLocaleString()}</p>
                </div>
              </div>

              {/* RoDTEP savings */}
              <div className="bg-chilli-green/10 border border-chilli-green/20 p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <TrendingDown className="w-6 h-6 text-chilli-green" />
                  <div>
                    <p className="text-sm font-bold text-foreground">RoDTEP Savings (5%)</p>
                    <p className="text-xs text-muted-foreground">Government incentive passed directly to you</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xl font-display font-bold text-chilli-green">-${Math.round(rodtepSaving).toLocaleString()}</p>
                  <p className="text-sm font-bold text-foreground">Effective: ${Math.round(effectiveCIF).toLocaleString()}</p>
                </div>
              </div>

              <p className="text-xs text-muted-foreground mt-4">
                * Estimates are indicative and subject to market conditions. Contact us for a binding quotation.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default IncotermCalculator;
