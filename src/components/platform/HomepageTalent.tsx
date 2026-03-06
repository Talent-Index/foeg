import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const filters = ["AI Engineers", "Blockchain Engineers", "Full-Stack Builders", "Infrastructure Architects"];

const builders = [
  { name: "Amara O.", role: "AI/ML Engineer", skills: ["LLMs", "Agents", "Python"], tier: "Principal" },
  { name: "Kofi M.", role: "Smart Contract Engineer", skills: ["Solidity", "Rust", "EVM"], tier: "Architect" },
  { name: "Zara K.", role: "Full-Stack Builder", skills: ["React", "Node.js", "Web3"], tier: "Builder" },
];

const tierColor: Record<string, string> = {
  Builder: "border-primary/30 text-primary",
  Architect: "border-primary/50 text-primary",
  Principal: "border-primary text-primary",
};

const HomepageTalent = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <motion.p
              className="text-xs font-mono uppercase tracking-widest text-primary mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Talent Index
            </motion.p>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Deploy elite AI &{" "}
              <span className="text-muted-foreground">blockchain engineers.</span>
            </motion.h2>
            <motion.p
              className="mt-4 text-muted-foreground max-w-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Access verified builders with proven experience deploying AI agents, blockchain infrastructure, and production systems.
            </motion.p>
          </div>
          <Button asChild variant="outline" className="rounded-full self-start md:self-auto">
            <Link to="/talent">
              Explore Talent Index <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <motion.div
          className="flex flex-wrap gap-2 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          {filters.map((f) => (
            <span key={f} className="text-xs font-mono px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary/30 hover:text-foreground cursor-pointer transition-colors">
              {f}
            </span>
          ))}
        </motion.div>

        {/* Builder cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {builders.map((b, i) => (
            <motion.div
              key={b.name}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                  {b.name.charAt(0)}
                </div>
                <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${tierColor[b.tier]}`}>
                  {b.tier}
                </span>
              </div>
              <h3 className="font-medium text-foreground">{b.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{b.role}</p>
              <div className="flex flex-wrap gap-1.5">
                {b.skills.map((s) => (
                  <span key={s} className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageTalent;
