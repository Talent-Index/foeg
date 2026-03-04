import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";

const caseStudies = [
  { title: "Scaling Builder Onboarding Across 5 Ecosystems", category: "Ecosystem", metric: "1,200+ builders activated" },
  { title: "AI Agent Deployment for DeFi Protocol", category: "Enterprise", metric: "40% faster execution" },
  { title: "Talent Matching for Avalanche Hackathon", category: "Talent", metric: "60 builders matched in 48hrs" },
];

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Case Studies</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              Real infrastructure.{" "}
              <span className="text-muted-foreground">Measurable outcomes.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {caseStudies.map((cs, i) => (
              <motion.div
                key={cs.title}
                className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{cs.category}</span>
                <h3 className="mt-3 text-lg font-display font-medium text-foreground leading-snug">{cs.title}</h3>
                <p className="mt-4 text-sm font-mono text-muted-foreground">{cs.metric}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default CaseStudies;
