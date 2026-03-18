import { motion } from "framer-motion";

const layers = [
  {
    label: "AI Layer",
    color: "border-accent/30 bg-accent/5",
    items: ["AI Agents", "Copilots", "Automation Pipelines", "LLM Orchestration"],
  },
  {
    label: "Blockchain Layer",
    color: "border-accent/25 bg-accent/[0.03]",
    items: ["Smart Contracts", "RWA Tokenization", "Protocol Integrations", "On-chain Data"],
  },
  {
    label: "Cloud Layer",
    color: "border-border bg-card/30",
    items: ["Compute", "APIs", "Storage", "Edge Functions"],
  },
  {
    label: "Application Layer",
    color: "border-accent/20 bg-accent/[0.02]",
    items: ["Enterprise Dashboards", "Workflow Tools", "Analytics Systems", "Client Portals"],
  },
  {
    label: "Talent Layer",
    color: "border-accent/40 bg-accent/8",
    highlight: true,
    items: ["Builder Network", "Embedded Engineers", "Reputation Index", "Skill Matching"],
  },
];

const InfrastructureStack = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.p
          className="text-xs font-sans uppercase tracking-widest text-accent mb-3 text-center font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Infrastructure Stack
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight text-center mb-4 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Five layers.{" "}
          <span className="italic text-muted-foreground">One system.</span>
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Every product maps to a layer. Every partner plugs into a layer. Every builder ships within a layer.
        </motion.p>

        <div className="flex flex-col gap-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              className={`group rounded-2xl border p-6 md:p-8 ${layer.color} ${layer.highlight ? "ring-1 ring-accent/20" : ""} hover:shadow-md transition-all duration-300`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <h3 className={`text-sm font-sans uppercase tracking-wider shrink-0 w-44 font-medium ${layer.highlight ? "text-accent" : "text-muted-foreground"}`}>
                  {layer.label}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-sans px-3 py-1 rounded-full border border-border bg-background/50 text-muted-foreground group-hover:text-foreground transition-colors"
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
