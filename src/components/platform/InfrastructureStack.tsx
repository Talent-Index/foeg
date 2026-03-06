import { motion } from "framer-motion";

const layers = [
  {
    label: "Business Applications",
    color: "border-primary/40 bg-primary/5",
    items: ["AutoFlow", "Logistics Automation", "Retail Intelligence", "Service Dashboards"],
  },
  {
    label: "Application Layer",
    color: "border-primary/30 bg-primary/[0.03]",
    items: ["AI Agents", "Smart Contracts", "Automation Pipelines", "Financial Data Infrastructure"],
  },
  {
    label: "FOEG Platform",
    color: "border-primary/50 bg-primary/10",
    highlight: true,
    items: ["Enterprise Infrastructure", "Developer Portal", "Talent Index", "Ecosystem Programs"],
  },
  {
    label: "Underlying Infrastructure",
    color: "border-border bg-card/30",
    items: ["AI Models", "Cloud Infrastructure", "Blockchain Networks", "Data Pipelines"],
  },
];

const InfrastructureStack = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Platform Architecture
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The full stack for{" "}
          <span className="text-muted-foreground">AI-native businesses.</span>
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          From underlying cloud and blockchain networks to production business applications — FOEG powers every layer.
        </motion.p>

        <div className="flex flex-col gap-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              className={`rounded-2xl border p-6 md:p-8 ${layer.color} ${layer.highlight ? "ring-1 ring-primary/20" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h3 className={`text-sm font-mono uppercase tracking-wider shrink-0 w-48 ${layer.highlight ? "text-primary font-semibold" : "text-muted-foreground"}`}>
                  {layer.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1 rounded-full border border-border bg-background/50 text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfrastructureStack;
