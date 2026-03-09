import { motion } from "framer-motion";

const steps = [
  "Businesses deploy FOEG infrastructure",
  "Operational data grows",
  "More automation opportunities",
  "More builders join platform",
  "More industry solutions built",
  "More businesses adopt FOEG",
];

const PlatformFlywheel = () => {
  const radius = 160;
  const center = 200;

  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Network Effects
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          The FOEG{" "}
          <span className="text-muted-foreground">flywheel.</span>
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground mb-16 max-w-lg mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          Every deployment makes the platform smarter. Every builder makes it more capable. The platform compounds.
        </motion.p>

        {/* Mobile: vertical flow */}
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
              <div className="w-8 h-8 rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-xs font-mono text-primary shrink-0">
                {i + 1}
              </div>
              <p className="text-sm text-foreground">{step}</p>
            </motion.div>
          ))}
          <div className="flex justify-center mt-2">
            <svg width="24" height="24" viewBox="0 0 24 24" className="text-primary">
              <path d="M12 4v12m0 0l-4-4m4 4l4-4" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-xs text-center font-mono text-muted-foreground">Cycle repeats</p>
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
            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                <span className="text-xs font-mono text-primary font-semibold text-center leading-tight">FOEG<br/>Platform</span>
              </div>
            </div>

            {/* Circle connectors */}
            <svg className="absolute inset-0" width={center * 2} height={center * 2}>
              <circle cx={center} cy={center} r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="4 4" />
            </svg>

            {/* Nodes */}
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
                    <div className="w-8 h-8 mx-auto rounded-full border border-primary/30 bg-primary/10 flex items-center justify-center text-xs font-mono text-primary mb-1">
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
    </section>
  );
};

export default PlatformFlywheel;
