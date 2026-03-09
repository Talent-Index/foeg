import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const studies = [
  {
    title: "AutoFlow — Car Wash Infrastructure",
    category: "Enterprise",
    metrics: ["Automated revenue tracking across locations", "Real-time performance dashboards", "Operational analytics replacing manual processes"],
  },
  {
    title: "Scaling Builder Onboarding Across 5 Ecosystems",
    category: "Ecosystem",
    metrics: ["1,200+ builders activated globally", "5 blockchain ecosystem integrations", "40+ partner organizations onboarded"],
  },
  {
    title: "AI Agent Deployment for Financial Infrastructure",
    category: "Enterprise",
    metrics: ["40% faster data processing", "Automated risk analysis pipelines", "Real-time monitoring and alerting"],
  },
];

const HomepageCaseStudies = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Real infrastructure.{" "}
          <span className="text-muted-foreground">Measurable outcomes.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all flex flex-col"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{cs.category}</span>
              <h3 className="mt-3 text-lg font-display font-medium text-foreground leading-snug mb-4">{cs.title}</h3>
              <ul className="space-y-2 mb-6 flex-1">
                {cs.metrics.map((m) => (
                  <li key={m} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary/50" />
                    {m}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" size="sm" className="self-start text-primary hover:text-primary/80 px-0">
                <Link to="/case-studies">
                  View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageCaseStudies;
