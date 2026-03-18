import { motion } from "framer-motion";

const layers = [
  { label: "Talent", sublabel: "Builders & engineers", width: "60%" },
  { label: "Applications", sublabel: "Enterprise tools", width: "70%" },
  { label: "Platform", sublabel: "FOEG core systems", width: "85%", highlight: true },
  { label: "Infrastructure", sublabel: "AI · Blockchain · Cloud", width: "100%" },
];

const PlatformPositioning = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-sans uppercase tracking-widest text-accent mb-3 font-medium">
              Platform
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight leading-[1.1] mb-6">
              A unified platform for building and scaling{" "}
              <span className="italic opacity-60">modern businesses.</span>
            </h2>
            <p className="text-base md:text-lg opacity-70 leading-relaxed max-w-lg">
              FOEG is where enterprises deploy AI agents, connect to blockchain systems, and access elite engineering talent — through a single interface.
            </p>
          </motion.div>

          {/* Layered diagram */}
          <motion.div
            className="flex flex-col gap-3 items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                className={`rounded-xl border px-6 py-4 text-center transition-all ${
                  layer.highlight
                    ? "border-accent/50 bg-accent/10"
                    : "border-background/20 bg-background/5"
                }`}
                style={{ width: layer.width }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
              >
                <p className={`text-sm font-sans font-medium ${layer.highlight ? "text-accent" : "opacity-90"}`}>
                  {layer.label}
                </p>
                <p className="text-xs opacity-50 mt-0.5">{layer.sublabel}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlatformPositioning;
