import { motion } from "framer-motion";
import { Building2, Code, Landmark } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    title: "Businesses",
    description: "Deploy AI and blockchain infrastructure to automate operations and unlock new growth.",
  },
  {
    icon: Code,
    title: "Builders",
    description: "Build AI agents and Web3 systems using FOEG developer infrastructure and APIs.",
  },
  {
    icon: Landmark,
    title: "Institutions",
    description: "Launch innovation programs, ecosystem accelerators, and industry infrastructure.",
  },
];

const PlatformAudience = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Who FOEG Is For
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Built for the organizations{" "}
          <span className="text-muted-foreground">shaping what's next.</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((a, i) => (
            <motion.div
              key={a.title}
              className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <a.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-display font-medium text-foreground mb-3">{a.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformAudience;
