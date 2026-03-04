import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";
import { Shield, Cpu, Database, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const capabilities = [
  { icon: Cpu, title: "AI Agent Orchestration", desc: "Deploy and manage autonomous AI agents across your enterprise with built-in monitoring and governance." },
  { icon: Database, title: "Blockchain Infrastructure", desc: "EVM-compatible smart contract deployment, indexing, and cross-chain data pipelines." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC 2 compliance-ready architecture with encrypted data pipelines and role-based access." },
];

const Enterprise = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Enterprise Solutions</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              Enterprise-grade AI &{" "}
              <span className="text-muted-foreground">blockchain infrastructure.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Deploy AI agents, smart contracts, and data pipelines with the security and compliance your enterprise demands.
            </p>
            <div className="mt-8 flex gap-3">
              <Button className="rounded-full px-6 bg-primary text-primary-foreground hover:bg-primary/90">
                Request Demo <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="rounded-full px-6 border-border">
                View Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                className="p-8 rounded-2xl border border-border bg-card/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <cap.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-display font-medium text-foreground mb-2">{cap.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default Enterprise;
