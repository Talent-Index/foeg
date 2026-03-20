import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface UseCaseDetail {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  steps: string[];
  metrics: { label: string; value: string }[];
  layers: string[];
}

const details: UseCaseDetail[] = [
  {
    id: "invoice-assurance",
    title: "Zero-Touch Invoice Assurance",
    subtitle: "Eliminate invoice fraud and processing delays with AI verification and blockchain immutability.",
    problem:
      "Enterprise procurement teams process thousands of invoices monthly. Manual review causes 3–5 day delays, 2–4% error rates, and leaves organizations exposed to duplicate or fraudulent submissions — costing enterprises $7.2B annually in the US alone.",
    solution:
      "FOEG deploys AI agents inside Odoo ERP that extract, validate, and cross-reference invoice data against purchase orders in real time. Every verified invoice is hashed and anchored on Avalanche C-Chain for tamper-proof audit trails.",
    steps: [
      "AI agents ingest invoices via Odoo ERP webhook or API upload",
      "NLP extraction of line items, amounts, tax IDs, and vendor data",
      "Cross-validation against purchase orders and contract terms",
      "Anomaly detection flags duplicates, mismatches, and fraud patterns",
      "Verified invoices are hashed and anchored on Avalanche C-Chain",
      "Real-time dashboard with audit-ready compliance reports",
    ],
    metrics: [
      { label: "Processing Time", value: "↓ 90%" },
      { label: "Error Rate", value: "< 0.1%" },
      { label: "Fraud Detection", value: "98.6%" },
      { label: "Cost Savings", value: "$420K/yr" },
    ],
    layers: ["AI Layer", "Blockchain Layer", "Middleware", "ERP"],
  },
  {
    id: "autonomous-procurement",
    title: "Autonomous Procurement System",
    subtitle: "AI-driven procurement that auto-qualifies vendors, optimizes spend, and enforces compliance at every step.",
    problem:
      "Procurement cycles take 14–30 days with fragmented approvals spread across email, spreadsheets, and disconnected tools. Vendor scoring is subjective, maverick spending goes undetected, and category managers lack real-time spend visibility.",
    solution:
      "FOEG deploys autonomous procurement agents that integrate directly into Odoo. AI handles vendor scoring, spend analysis, and approval routing — while blockchain records every decision for compliance auditability.",
    steps: [
      "Requisition captured in Odoo triggers FOEG procurement agent",
      "AI scores vendors on price, delivery history, risk, and ESG metrics",
      "Automated 3-way matching: PO → receipt → invoice",
      "Smart approval routing based on spend category and threshold",
      "Blockchain-stamped decision trail for every procurement action",
      "Monthly AI-generated spend optimization recommendations",
    ],
    metrics: [
      { label: "Cycle Time", value: "↓ 65%" },
      { label: "Maverick Spend", value: "↓ 80%" },
      { label: "Vendor Compliance", value: "99.2%" },
      { label: "Annual Savings", value: "12–18%" },
    ],
    layers: ["AI Layer", "Middleware", "ERP"],
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection Engine",
    subtitle: "Multi-layer AI + blockchain system that catches sophisticated fraud while eliminating false positives.",
    problem:
      "Traditional rule-based fraud systems miss 40% of sophisticated attacks (invoice splitting, ghost vendors, collusion) while generating 80%+ false positives. Investigation teams waste weeks chasing legitimate transactions while real fraud goes undetected.",
    solution:
      "FOEG deploys a multi-model AI fraud engine that analyzes transaction patterns, vendor behavior, and document authenticity simultaneously. Suspicious transactions are flagged with explainable risk scores, and all fraud decisions are recorded on-chain for regulatory defensibility.",
    steps: [
      "Real-time transaction stream ingested from ERP and payment systems",
      "Graph neural network maps vendor-entity relationships and anomalies",
      "Document AI verifies invoice authenticity and detects manipulation",
      "Behavioral models flag deviations from established procurement patterns",
      "Risk scores with explainable reasoning sent to investigation dashboard",
      "Confirmed fraud events anchored on Avalanche with full evidence chain",
    ],
    metrics: [
      { label: "Fraud Caught", value: "↑ 94%" },
      { label: "False Positives", value: "↓ 87%" },
      { label: "Detection Speed", value: "< 30s" },
      { label: "Loss Prevention", value: "$2.1M/yr" },
    ],
    layers: ["AI Layer", "Blockchain Layer", "Middleware"],
  },
  {
    id: "erp-payments",
    title: "ERP-Native Payments (M-Pesa)",
    subtitle: "Bridge mobile money and enterprise ERP with real-time reconciliation and blockchain settlement proof.",
    problem:
      "Businesses across Africa process millions in M-Pesa transactions that sit in spreadsheets for days before manual entry into ERP systems. Cash flow visibility is 48–72 hours behind reality, reconciliation errors cost 3–5% of revenue, and audit trails are non-existent.",
    solution:
      "FOEG builds a middleware bridge between M-Pesa (Safaricom Daraja API) and Odoo ERP. Every payment triggers automatic journal entries, customer matching, and optional blockchain anchoring for dispute-proof settlement records.",
    steps: [
      "M-Pesa payment callback received via Safaricom Daraja API",
      "FOEG middleware matches payment to customer and invoice in Odoo",
      "Automatic journal entry created with correct GL codes and tax treatment",
      "Settlement confirmation hashed and anchored on Avalanche",
      "Real-time cash position dashboard updated across all payment channels",
      "Monthly reconciliation report auto-generated with variance analysis",
    ],
    metrics: [
      { label: "Reconciliation", value: "Real-time" },
      { label: "Manual Entry", value: "↓ 95%" },
      { label: "Revenue Leakage", value: "↓ 3.2%" },
      { label: "Cash Visibility", value: "Instant" },
    ],
    layers: ["Middleware", "ERP", "Blockchain Layer"],
  },
  {
    id: "onchain-audit",
    title: "On-Chain Audit & Compliance Layer",
    subtitle: "Continuous compliance with immutable audit trails that regulators can verify independently.",
    problem:
      "Audit preparation takes 6–12 weeks of manual document gathering across fragmented systems. Regulators distrust self-reported data, compliance teams burn out on repetitive evidence collection, and failures carry 7-figure penalties plus reputational damage.",
    solution:
      "FOEG deploys an always-on compliance layer that continuously captures, verifies, and anchors critical business events on Avalanche. AI agents auto-generate compliance packages, and regulators can independently verify any record via blockchain proof.",
    steps: [
      "Critical business events captured from ERP, HR, and finance systems",
      "AI classifies events by regulatory framework (SOX, IFRS, tax codes)",
      "Evidence packages auto-assembled with supporting documentation",
      "Merkle tree of all compliance events anchored on Avalanche weekly",
      "Regulator portal provides independent verification of any record",
      "AI monitors regulatory changes and flags new compliance obligations",
    ],
    metrics: [
      { label: "Audit Prep", value: "↓ 85%" },
      { label: "Compliance Cost", value: "↓ 60%" },
      { label: "Record Integrity", value: "100%" },
      { label: "Penalty Risk", value: "↓ 90%" },
    ],
    layers: ["Blockchain Layer", "AI Layer", "ERP"],
  },
];

const MidCTA = () => (
  <motion.div
    className="py-16 text-center"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
  >
    <p className="text-sm text-muted-foreground mb-4">See how this applies to your operations?</p>
    <div className="flex flex-col sm:flex-row gap-3 justify-center">
      <Button asChild size="lg" className="rounded-full px-8">
        <Link to="/enterprise">
          Deploy With FOEG <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
      <Button asChild size="lg" variant="outline" className="rounded-full px-8 border-border">
        <a href="https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz?mode=gi_t" target="_blank" rel="noopener noreferrer">
          Join Community
        </a>
      </Button>
    </div>
  </motion.div>
);

const UseCaseDetailSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 space-y-24 md:space-y-32">
        {details.map((uc, idx) => (
          <div key={uc.id}>
            <motion.div
              id={uc.id}
              className="scroll-mt-28"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div className="mb-10">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {uc.layers.map((l) => (
                    <span
                      key={l}
                      className="text-[10px] font-sans uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-accent/20 bg-accent/5 text-accent font-medium"
                    >
                      {l}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight mb-3 leading-[1.1]">
                  {uc.title}
                </h3>
                <p className="text-muted-foreground max-w-2xl leading-relaxed">
                  {uc.subtitle}
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
                {/* Problem + Solution */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                      The Problem
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{uc.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-accent mb-2 font-medium">
                      The FOEG Solution
                    </p>
                    <p className="text-sm text-foreground/80 leading-relaxed">{uc.solution}</p>
                  </div>

                  {/* Business Impact Metrics */}
                  <div>
                    <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-3 font-medium">
                      Business Impact
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {uc.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-4 rounded-xl border border-border bg-card/50 hover:border-accent/20 transition-colors"
                        >
                          <p className="text-xl md:text-2xl font-display text-accent mb-1">
                            {m.value}
                          </p>
                          <p className="text-xs text-muted-foreground font-sans">{m.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Steps - visual flow */}
                <div>
                  <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-5 font-medium">
                    System Flow
                  </p>
                  <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-3 bottom-3 w-px bg-border" />
                    <div className="space-y-5">
                      {uc.steps.map((step, si) => (
                        <motion.div
                          key={si}
                          className="flex gap-4 items-start relative"
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: si * 0.06 }}
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center z-10">
                            <span className="text-[10px] font-sans font-bold text-accent">
                              {si + 1}
                            </span>
                          </div>
                          <p className="text-sm text-foreground/80 leading-relaxed pt-0.5">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mid-section CTA after every 2 use cases */}
            {(idx + 1) % 2 === 0 && idx < details.length - 1 && <MidCTA />}

            {/* Divider */}
            {idx < details.length - 1 && (idx + 1) % 2 !== 0 && (
              <div className="mt-20 md:mt-28 border-t border-border" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseDetailSection;
