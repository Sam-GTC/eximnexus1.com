import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  href: string;
  variant?: "green" | "red" | "gold";
}

const variants = {
  green: "bg-chilli-green text-off-white",
  red: "bg-barn-red text-off-white",
  gold: "bg-metallic-gold text-dark-earth",
};

const CTABanner = ({ title, subtitle, buttonText, href, variant = "green" }: CTABannerProps) => {
  const scrollTo = () => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className={`${variants[variant]} py-14 px-4`}>
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">{title}</h3>
        <p className="opacity-80 text-sm md:text-base max-w-xl mx-auto mb-6">{subtitle}</p>
        <button
          onClick={scrollTo}
          className={`inline-flex items-center gap-2 px-8 py-3 font-bold uppercase tracking-[2px] text-sm transition-all hover:brightness-110 ${
            variant === "gold"
              ? "bg-dark-earth text-off-white"
              : "bg-metallic-gold text-dark-earth"
          }`}
        >
          {buttonText}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
