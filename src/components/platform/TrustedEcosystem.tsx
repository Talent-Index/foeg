import { motion } from "framer-motion";
import { Cloud, Link2, GraduationCap, Rocket } from "lucide-react";

const categories = [
  { icon: Cloud, label: "Cloud Infrastructure", partners: ["AWS", "Google Cloud", "Azure"] },
  { icon: Link2, label: "Blockchain Ecosystems", partners: ["Avalanche", "Starknet", "Fantom"] },
  { icon: GraduationCap, label: "Universities", partners: ["Covenant University", "Pan-Atlantic", "LASU"] },
  { icon: Rocket, label: "Startup Programs", partners: ["Antler", "Genesys", "HackQuest"] },
];

const TrustedEcosystem = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Ecosystem
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Integrated with the ecosystems{" "}
          <span className="text-muted-foreground">that power innovation.</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.label}
              className="p-6 rounded-2xl border border-border bg-card/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <cat.icon className="h-6 w-6 text-primary mb-4" />
              <h3 className="text-sm font-mono uppercase tracking-wider text-foreground mb-4">{cat.label}</h3>
              <div className="space-y-2">
                {cat.partners.map((p) => (
                  <div key={p} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                    {p}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedEcosystem;
