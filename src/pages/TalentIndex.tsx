import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const featuredBuilders = [
  { name: "Amara O.", role: "Smart Contract Engineer", skills: ["Solidity", "Rust", "EVM"], tier: "Architect" },
  { name: "Kofi M.", role: "AI/ML Engineer", skills: ["Python", "LLMs", "Agents"], tier: "Principal" },
  { name: "Zara K.", role: "Full-Stack Builder", skills: ["React", "Node.js", "Web3"], tier: "Builder" },
  { name: "Tunde A.", role: "Protocol Researcher", skills: ["DeFi", "Tokenomics", "ZK"], tier: "Architect" },
  { name: "Nia W.", role: "DevRel & Community", skills: ["Content", "Events", "Growth"], tier: "Builder" },
  { name: "Emeka J.", role: "AI Agent Developer", skills: ["LangChain", "GPT", "RAG"], tier: "Architect" },
];

const tierColor: Record<string, string> = {
  Explorer: "border-muted-foreground/30 text-muted-foreground",
  Builder: "border-primary/30 text-primary",
  Architect: "border-primary/50 text-primary",
  Principal: "border-primary text-primary",
};

const TalentIndex = () => {
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
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Talent Index</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              Access verified{" "}
              <span className="text-muted-foreground">builders worldwide.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              Search, match, and deploy elite AI and Web3 builders with verified skills and on-chain reputation.
            </p>
          </motion.div>

          {/* Search bar */}
          <motion.div
            className="mt-10 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="flex items-center gap-3 p-3 rounded-full border border-border bg-card">
              <Search className="h-5 w-5 text-muted-foreground ml-3" />
              <input
                type="text"
                placeholder="Search builders by skill, role, or ecosystem..."
                className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground outline-none"
              />
              <Button size="sm" className="rounded-full px-5 bg-primary text-primary-foreground">
                Search
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Builder grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredBuilders.map((builder, i) => (
              <motion.div
                key={builder.name}
                className="group p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium text-primary">
                    {builder.name.charAt(0)}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border ${tierColor[builder.tier]}`}>
                    {builder.tier}
                  </span>
                </div>
                <h3 className="font-medium text-foreground">{builder.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{builder.role}</p>
                <div className="flex flex-wrap gap-1.5">
                  {builder.skills.map((skill) => (
                    <span key={skill} className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default TalentIndex;
