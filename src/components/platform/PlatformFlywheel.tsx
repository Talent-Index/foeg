import { motion } from "framer-motion";

const steps = [
  "Builders deploy on FOEG",
  "Operational data grows",
  "Platform improves",
  "New solutions emerge",
  "More businesses adopt",
  "More builders join",
];

const PlatformFlywheel = () => {
  const radius = 160;
  const center = 200;

  return (
    <section className="py-24 md:py-32 border-t border-border">
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
              Network Effects
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-4 leading-[1.1]">
              The system{" "}
              <span className="italic text-muted-foreground">compounds.</span>
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md leading-relaxed">
              Every deployment makes the platform smarter. Every builder makes it more capable. Every data point unlocks new automation opportunities.
            </p>
            <p className="text-sm text-muted-foreground/70">
              This is how infrastructure companies become category-defining platforms.
            </p>
          </motion.div>

          {/* Flywheel visual */}
          <div>
            {/* Mobile: vertical */}
            <div className="md:hidden flex flex-col gap-3 max-w-sm mx-auto">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-8 h-8 rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center text-xs font-sans text-accent shrink-0 font-medium">
                    {i + 1}
                  </div>
                  <p className="text-sm text-foreground">{step}</p>
                </motion.div>
              ))}
              <p className="text-xs text-center font-sans text-muted-foreground mt-2">↻ Cycle repeats</p>
            </div>

            {/* Desktop: circular */}
            <div className="hidden md:flex justify-center">
              <motion.div
                className="relative"
                style={{ width: center * 2, height: center * 2 }}
                initial={{ opacity: 0, rotate: -30 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center">
                    <span className="text-xs font-sans text-accent font-semibold text-center leading-tight">FOEG<br />Flywheel</span>
                  </div>
                </div>

                <svg className="absolute inset-0" width={center * 2} height={center * 2}>
                  <circle cx={center} cy={center} r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
                </svg>

                {steps.map((step, i) => {
                  const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
                  const x = center + radius * Math.cos(angle);
                  const y = center + radius * Math.sin(angle);
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-36 -ml-[4.5rem] -mt-5"
                      style={{ left: x, top: y }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                    >
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto rounded-full border border-accent/30 bg-accent/10 flex items-center justify-center text-xs font-sans text-accent mb-1 font-medium">
                          {i + 1}
                        </div>
                        <p className="text-[11px] text-muted-foreground leading-tight">{step}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformFlywheel;
