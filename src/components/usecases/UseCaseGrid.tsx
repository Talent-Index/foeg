import { motion } from "framer-motion";
import { FileCheck, ShoppingCart, ShieldAlert, Smartphone, ClipboardCheck, ArrowRight } from "lucide-react";

const useCases = [
  {
    id: "invoice-assurance",
    icon: FileCheck,
    title: "Zero-Touch Invoice Assurance",
    industry: "Enterprise Finance",
    problem: "Manual invoice processing causes 3–5 day delays, 2–4% error rates, and exposes organizations to duplicate and fraudulent submissions worth millions annually.",
    layers: ["AI Layer", "Blockchain Layer", "Middleware", "ERP"],
  },
  {
    id: "autonomous-procurement",
    icon: ShoppingCart,
    title: "Autonomous Procurement System",
    industry: "Supply Chain & Procurement",
    problem: "Procurement cycles take 14–30 days with fragmented approvals, manual vendor scoring, and zero visibility into spend optimization opportunities.",
    layers: ["AI Layer", "Middleware", "ERP"],
  },
  {
    id: "fraud-detection",
    icon: ShieldAlert,
    title: "Fraud Detection Engine",
    industry: "Financial Services",
    problem: "Traditional rule-based fraud systems miss 40% of sophisticated attacks while generating 80%+ false positives, costing enterprises both revenue and customer trust.",
    layers: ["AI Layer", "Blockchain Layer", "Middleware"],
  },
  {
    id: "erp-payments",
    icon: Smartphone,
    title: "ERP-Native Payments (M-Pesa)",
    industry: "Emerging Market Commerce",
    problem: "Businesses in Africa reconcile mobile money payments manually — M-Pesa transactions sit in spreadsheets for days before hitting the ERP, causing cash flow blindness.",
    layers: ["Middleware", "ERP", "Blockchain Layer"],
  },
  {
    id: "onchain-audit",
    icon: ClipboardCheck,
    title: "On-Chain Audit & Compliance Layer",
    industry: "Regulatory & Governance",
    problem: "Audit preparation takes 6–12 weeks of manual document gathering. Regulators distrust self-reported data, and compliance failures carry 7-figure penalties.",
    layers: ["Blockchain Layer", "AI Layer", "ERP"],
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
            Production Use Cases
          </p>
          <h2 className="text-3xl md:text-4xl font-display tracking-tight leading-[1.1]">
            From concept to{" "}
            <span className="italic text-muted-foreground">deployed infrastructure.</span>
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
                    className="text-[10px] font-sans px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium"
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
