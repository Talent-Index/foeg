import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";

const sections = [
  {
    label: "Problem",
    title: "Businesses lack infrastructure.",
    body: "Across emerging markets, businesses are stuck between two realities: the promise of AI and blockchain, and the absence of infrastructure to deploy them. Building from scratch is slow, expensive, and fragmented.",
  },
  {
    label: "Solution",
    title: "One platform. Complete infrastructure.",
    body: "FOEG Labs is the unified platform where enterprises deploy AI agents, connect to blockchain systems, and access elite engineering talent — through a single interface.",
  },
  {
    label: "Architecture",
    title: "The full-stack platform.",
    body: "Four layers: underlying infrastructure (AI models, cloud, blockchain networks), the FOEG platform (enterprise tools, developer portal, talent index), application layer (agents, contracts, pipelines), and industry-specific business applications.",
  },
  {
    label: "Traction",
    title: "Real industries. Production systems.",
    body: "AutoFlow powers car wash operations. Logistics Intelligence automates fleet companies. Retail Intelligence runs multi-branch analytics. Each is a proof point — FOEG infrastructure works in production, not in theory.",
  },
  {
    label: "Vision",
    title: "The Stripe of AI infrastructure.",
    body: "FOEG is building the default platform enterprises use to deploy AI and blockchain systems — a platform so reliable and integrated that businesses don't ask whether to use it, they ask how fast they can deploy.",
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
