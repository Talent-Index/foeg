import { motion } from "framer-motion";

const UseCaseHero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--gradient-pink)/0.3)] via-[hsl(var(--gradient-peach)/0.2)] to-[hsl(var(--gradient-lavender)/0.15)]" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.p
          className="text-xs font-sans uppercase tracking-widest text-accent mb-4 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Use Cases
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.08] mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          See how FOEG{" "}
          <span className="italic text-muted-foreground">transforms operations</span>{" "}
          across industries.
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI agents, blockchain verification, and enterprise automation — deployed as production-ready systems that solve real business problems.
        </motion.p>
      </div>
    </section>
  );
};

export default UseCaseHero;
