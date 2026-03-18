import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const studies = [
  {
    title: "AutoPay — AI for Car Wash Operations",
    category: "Enterprise",
    problem: "Multi-location car wash operators tracked revenue manually across branches.",
    implementation: "Deployed AutoFlow: automated revenue tracking, real-time performance dashboards, operational analytics.",
    result: "Real-time visibility across all locations. Manual reporting eliminated.",
  },
  {
    title: "Ecosystem Builder Programs Across 5 Protocols",
    category: "Ecosystem",
    problem: "Blockchain protocols struggled to activate builders in emerging markets.",
    implementation: "FOEG ran hackathons, dev camps, and activation programs across Avalanche, Starknet, and 3 other ecosystems.",
    result: "1,200+ builders activated. 40+ partner organizations onboarded.",
  },
  {
    title: "AI Audit Deployments for Financial Infrastructure",
    category: "Enterprise",
    problem: "Financial institutions needed automated risk analysis and compliance checks.",
    implementation: "Deployed AI agents for document analysis, anomaly detection, and automated audit trails.",
    result: "40% faster data processing. Continuous monitoring replacing quarterly reviews.",
  },
];

const HomepageCaseStudies = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-sans uppercase tracking-widest text-accent mb-3 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Case Studies
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-16 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Real infrastructure.{" "}
          <span className="italic text-muted-foreground">Measurable outcomes.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((cs, i) => (
            <motion.div
              key={cs.title}
              className="p-8 rounded-2xl border border-border bg-card/50 hover:border-accent/30 transition-all flex flex-col hover:shadow-lg duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <span className="text-[10px] font-sans uppercase tracking-wider text-accent font-medium">{cs.category}</span>
              <h3 className="mt-3 text-lg font-display text-foreground leading-snug mb-4">{cs.title}</h3>
              <div className="space-y-3 mb-6 flex-1">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">Problem</p>
                  <p className="text-sm text-muted-foreground">{cs.problem}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">Implementation</p>
                  <p className="text-sm text-muted-foreground">{cs.implementation}</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-1">Result</p>
                  <p className="text-sm text-foreground/80 font-medium">{cs.result}</p>
                </div>
              </div>
              <Button asChild variant="ghost" size="sm" className="self-start text-accent hover:text-accent/80 px-0">
                <Link to="/case-studies">
                  View Full Case Study <ArrowRight className="ml-1 h-3 w-3" />
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
