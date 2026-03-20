import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

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
          Production Use Cases
        </motion.p>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-display tracking-tight leading-[1.08] mb-6 max-w-3xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Real infrastructure,{" "}
          <span className="italic text-muted-foreground">deployed in production.</span>
        </motion.h1>
        <motion.p
          className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          AI agents, blockchain verification, and ERP middleware — solving real enterprise problems across finance, procurement, payments, and compliance.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-3"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base hover-lift">
            <Link to="/enterprise">
              Deploy With FOEG <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-border">
            <a href="mailto:foeglabslimited@gmail.com">Talk to Our Team</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseHero;
