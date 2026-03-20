import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
      "Enterprise procurement teams process thousands of invoices monthly. Manual review causes 3–5 day delays, 2–4% error rates, and leaves organizations exposed to duplicate or fraudulent submissions.",
    solution:
      "FOEG deploys AI agents that extract, validate, and cross-reference invoice data against purchase orders and contracts in real time. Every verified invoice is hashed and recorded on Avalanche for tamper-proof audit trails.",
    steps: [
      "AI agents ingest invoices via Odoo ERP or API integration",
      "Automated extraction of line items, amounts, and vendor data",
      "Cross-validation against purchase orders and contract terms",
      "Anomaly detection flags duplicates, mismatches, and fraud patterns",
      "Verified invoices are hashed and anchored on Avalanche C-Chain",
      "Dashboard provides real-time status and audit-ready reports",
    ],
    metrics: [
      { label: "Processing Time", value: "↓ 90%" },
      { label: "Error Rate", value: "< 0.1%" },
      { label: "Fraud Detection", value: "↑ 98%" },
      { label: "Audit Readiness", value: "Real-time" },
    ],
    layers: ["AI Layer", "Blockchain Layer", "Application Layer"],
  },
  {
    id: "supply-chain-provenance",
    title: "Supply Chain Provenance Tracking",
    subtitle: "End-to-end visibility across multi-party supply chains with blockchain-verified provenance.",
    problem:
      "Global supply chains involve 5–15 intermediaries. Without shared infrastructure, compliance audits take weeks, quality issues go undetected, and ESG reporting is based on estimates.",
    solution:
      "FOEG creates a shared provenance layer where every handoff, inspection, and certification is recorded on-chain. AI models analyze patterns to predict delays and flag compliance gaps before they escalate.",
    steps: [
      "Onboard suppliers and logistics partners onto the FOEG platform",
      "Each checkpoint records provenance data on Avalanche subnet",
      "IoT and manual inputs captured via APIs and mobile interfaces",
      "AI agents monitor for anomalies in timing, temperature, and handling",
      "Compliance dashboards auto-generate reports for regulators",
      "End consumers can verify origin via QR-linked provenance records",
    ],
    metrics: [
      { label: "Audit Time", value: "↓ 80%" },
      { label: "Traceability", value: "100%" },
      { label: "Dispute Resolution", value: "↓ 65%" },
      { label: "ESG Accuracy", value: "↑ 3x" },
    ],
    layers: ["Blockchain Layer", "Cloud Layer", "Application Layer"],
  },
  {
    id: "automated-compliance",
    title: "Automated Regulatory Compliance",
    subtitle: "AI-powered compliance monitoring that adapts to regulatory changes in real time.",
    problem:
      "Regulatory frameworks across emerging markets change frequently. Compliance teams spend 60%+ of time on manual monitoring and documentation instead of strategic risk management.",
    solution:
      "FOEG deploys AI compliance agents that continuously scan regulatory updates, map them to organizational obligations, and auto-generate the required documentation and audit trails.",
    steps: [
      "Map existing compliance obligations and reporting requirements",
      "AI agents monitor regulatory sources across jurisdictions",
      "Changes are classified by impact and mapped to internal policies",
      "Automated alerts sent to compliance officers with recommended actions",
      "Documentation and evidence packages generated automatically",
      "Blockchain-timestamped records ensure regulatory defensibility",
    ],
    metrics: [
      { label: "Manual Effort", value: "↓ 70%" },
      { label: "Response Time", value: "Hours → Minutes" },
      { label: "Coverage", value: "Multi-jurisdiction" },
      { label: "Penalty Risk", value: "↓ 85%" },
    ],
    layers: ["AI Layer", "Application Layer", "Talent Layer"],
  },
  {
    id: "predictive-operations",
    title: "Predictive Operations Intelligence",
    subtitle: "Turn operational data into revenue decisions with AI-powered forecasting and optimization.",
    problem:
      "Service businesses — car washes, fleet operators, retail chains — manage hundreds of locations with fragmented data. Revenue leakage, staffing mismatches, and maintenance failures cost 10–15% of annual revenue.",
    solution:
      "FOEG's AutoFlow system integrates POS, IoT, and ERP data into a unified intelligence layer. AI models forecast demand, optimize staffing, predict equipment failures, and surface revenue opportunities in real time.",
    steps: [
      "Connect POS, IoT sensors, and ERP systems via FOEG APIs",
      "Unified data lake normalizes metrics across all locations",
      "AI models trained on historical patterns for each location",
      "Real-time dashboards show performance, anomalies, and forecasts",
      "Automated recommendations for staffing, pricing, and maintenance",
      "Monthly AI-generated reports with actionable growth strategies",
    ],
    metrics: [
      { label: "Revenue Leakage", value: "↓ 12%" },
      { label: "Downtime", value: "↓ 40%" },
      { label: "Staff Efficiency", value: "↑ 25%" },
      { label: "Forecast Accuracy", value: "92%" },
    ],
    layers: ["AI Layer", "Cloud Layer", "Application Layer"],
  },
  {
    id: "tokenized-assets",
    title: "Tokenized Asset Management",
    subtitle: "Unlock liquidity from real-world assets with programmable ownership and transparent settlement.",
    problem:
      "Real estate, commodities, and infrastructure assets are illiquid, opaque, and accessible only to institutional investors. Settlement takes days or weeks, and fractional ownership is nearly impossible.",
    solution:
      "FOEG builds tokenization infrastructure on Avalanche that converts real-world assets into programmable digital tokens. Smart contracts handle ownership transfers, dividend distributions, and compliance checks automatically.",
    steps: [
      "Asset valuation, legal structuring, and regulatory mapping",
      "Smart contract deployment for token issuance on Avalanche",
      "KYC/AML compliance integrated into the minting process",
      "Fractional ownership enabled with programmable transfer rules",
      "Automated dividend and yield distribution via smart contracts",
      "Secondary market trading with transparent on-chain settlement",
    ],
    metrics: [
      { label: "Settlement Time", value: "T+0" },
      { label: "Minimum Investment", value: "↓ 100x" },
      { label: "Admin Overhead", value: "↓ 60%" },
      { label: "Investor Access", value: "Global" },
    ],
    layers: ["Blockchain Layer", "Cloud Layer", "Talent Layer"],
  },
];

const UseCaseDetailSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 space-y-24 md:space-y-32">
        {details.map((uc, idx) => (
          <motion.div
            key={uc.id}
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

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {uc.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="p-4 rounded-xl border border-border bg-card/50"
                    >
                      <p className="text-xl md:text-2xl font-display text-accent mb-1">
                        {m.value}
                      </p>
                      <p className="text-xs text-muted-foreground font-sans">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Steps */}
              <div>
                <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-5 font-medium">
                  How It Works
                </p>
                <div className="space-y-4">
                  {uc.steps.map((step, si) => (
                    <motion.div
                      key={si}
                      className="flex gap-3 items-start"
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: si * 0.06 }}
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center mt-0.5">
                        <span className="text-[10px] font-sans font-semibold text-accent">
                          {si + 1}
                        </span>
                      </div>
                      <p className="text-sm text-foreground/80 leading-relaxed">{step}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Divider */}
            {idx < details.length - 1 && (
              <div className="mt-20 md:mt-28 border-t border-border" />
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default UseCaseDetailSection;
