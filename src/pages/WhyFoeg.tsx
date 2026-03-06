import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";

const sections = [
  {
    label: "Problem",
    title: "Businesses lack infrastructure.",
    body: "Modern enterprises need AI systems, blockchain connectivity, and elite engineering talent — but building this from scratch is slow, expensive, and fragmented.",
  },
  {
    label: "Solution",
    title: "FOEG Platform.",
    body: "FOEG Labs provides end-to-end infrastructure connecting enterprises with AI agents, blockchain systems, and verified builders through a single platform.",
  },
  {
    label: "Architecture",
    title: "Full-stack platform.",
    body: "Four layers: underlying infrastructure (AI models, blockchain networks), FOEG platform (enterprise tools, developer portal, talent index), application layer (agents, contracts, pipelines), and business applications (AutoFlow, retail intelligence, logistics).",
  },
  {
    label: "Industry Solutions",
    title: "Real industries. Real revenue.",
    body: "AutoFlow for car wash operations. Logistics Intelligence for fleet companies. Retail Intelligence for multi-branch businesses. Service Business Systems for providers.",
  },
  {
    label: "Vision",
    title: "The infrastructure layer for AI-native businesses.",
    body: "FOEG aims to be the default platform enterprises use to deploy AI and blockchain systems — the way Stripe powers payments or AWS powers cloud.",
  },
];

const WhyFoeg = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.p
            className="text-xs font-mono uppercase tracking-widest text-primary mb-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Why FOEG
          </motion.p>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            The case for{" "}
            <span className="text-muted-foreground">FOEG Labs.</span>
          </motion.h1>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          {sections.map((s, i) => (
            <motion.div
              key={s.label}
              className="p-8 rounded-2xl border border-border bg-card/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{s.label}</span>
              <h3 className="mt-2 text-xl font-display font-medium text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default WhyFoeg;
