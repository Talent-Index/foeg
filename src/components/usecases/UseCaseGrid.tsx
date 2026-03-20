import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FileCheck, Truck, ShieldCheck, BarChart3, Zap, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "invoice-assurance",
    icon: FileCheck,
    title: "Zero-Touch Invoice Assurance",
    industry: "Financial Services",
    problem: "Manual invoice processing causes delays, errors, and fraud exposure across enterprise supply chains.",
    layers: ["AI Layer", "Blockchain Layer", "Application Layer"],
  },
  {
    id: "supply-chain-provenance",
    icon: Truck,
    title: "Supply Chain Provenance Tracking",
    industry: "Logistics & Manufacturing",
    problem: "Multi-party supply chains lack transparency, making compliance and quality audits slow and unreliable.",
    layers: ["Blockchain Layer", "Cloud Layer", "Application Layer"],
  },
  {
    id: "automated-compliance",
    icon: ShieldCheck,
    title: "Automated Regulatory Compliance",
    industry: "Government & Enterprise",
    problem: "Compliance reporting is manual, error-prone, and fails to keep up with evolving regulatory frameworks.",
    layers: ["AI Layer", "Application Layer", "Talent Layer"],
  },
  {
    id: "predictive-operations",
    icon: BarChart3,
    title: "Predictive Operations Intelligence",
    industry: "Mobility & Services",
    problem: "Operations teams rely on lagging indicators and spreadsheet-based planning, missing revenue optimization opportunities.",
    layers: ["AI Layer", "Cloud Layer", "Application Layer"],
  },
  {
    id: "tokenized-assets",
    icon: Zap,
    title: "Tokenized Asset Management",
    industry: "Real Estate & Finance",
    problem: "Illiquid real-world assets lack transparent ownership, fractional access, and programmable settlement.",
    layers: ["Blockchain Layer", "Cloud Layer", "Talent Layer"],
  },
];

const UseCaseGrid = () => {
  return (
    <section className="py-20 md:py-28 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-sans uppercase tracking-widest text-accent mb-3 font-medium">
            Enterprise Applications
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight leading-[1.1]">
            From concept to{" "}
            <span className="italic text-muted-foreground">production.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {useCases.map((uc, i) => (
            <motion.a
              key={uc.id}
              href={`#${uc.id}`}
              className="group block p-7 rounded-2xl border border-border bg-card/50 hover:border-accent/30 hover:bg-card hover:shadow-lg transition-all hover:-translate-y-1 duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <uc.icon className="h-8 w-8 text-accent mb-5" />
              <p className="text-[10px] font-sans uppercase tracking-wider text-muted-foreground mb-2 font-medium">
                {uc.industry}
              </p>
              <h3 className="text-lg font-display text-foreground mb-3">{uc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{uc.problem}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {uc.layers.map((layer) => (
                  <span
                    key={layer}
                    className="text-[10px] font-sans px-2.5 py-0.5 rounded-full border border-border bg-background/60 text-muted-foreground"
                  >
                    {layer}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center text-xs font-sans text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium">
                View Details <ArrowRight className="ml-1 h-3 w-3" />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseGrid;
