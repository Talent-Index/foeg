import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const programs = [
  { name: "Avalanche Partnership", desc: "Builder programs, grants, and activations across the Avalanche ecosystem.", status: "Active" },
  { name: "Starknet Basecamp", desc: "Training and onboarding developers into the Starknet ecosystem.", status: "Active" },
  { name: "Hackquest Collaboration", desc: "Collaborative learning paths and builder challenges.", status: "Active" },
  { name: "The Graph Integration", desc: "Indexing and data infrastructure programs for builders.", status: "Coming Soon" },
];

const Ecosystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Ecosystem</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              Integrated with the ecosystems{" "}
              <span className="text-muted-foreground">that matter.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Protocol partnerships, venture programs, and ecosystem activations that scale builder communities globally.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {programs.map((prog, i) => (
              <motion.div
                key={prog.name}
                className="group p-8 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-display font-medium text-foreground">{prog.name}</h3>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${
                    prog.status === "Active" ? "border-primary/30 text-primary" : "border-border text-muted-foreground"
                  }`}>
                    {prog.status}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{prog.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="rounded-full px-6 border-border">
              Become a Partner <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default Ecosystem;
