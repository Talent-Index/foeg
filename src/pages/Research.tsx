import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";

const articles = [
  { title: "The Rise of Agentic Infrastructure in Enterprise", category: "AI", date: "Feb 2026" },
  { title: "Why Builder Reputation Systems Will Replace Resumes", category: "Talent", date: "Jan 2026" },
  { title: "Cross-Chain Data Pipelines: Architecture Patterns", category: "Infrastructure", date: "Dec 2025" },
  { title: "Ecosystem-Led Growth: Lessons from 15 Activations", category: "Ecosystem", date: "Nov 2025" },
];

const Research = () => {
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
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Research & Insights</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              Frontier thinking on{" "}
              <span className="text-muted-foreground">AI, Web3, and builders.</span>
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-4 max-w-3xl">
            {articles.map((article, i) => (
              <motion.article
                key={article.title}
                className="group flex items-start justify-between gap-6 p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 transition-all cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-primary">{article.category}</span>
                  <h3 className="mt-1 text-lg font-display font-medium text-foreground group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
                <span className="text-xs font-mono text-muted-foreground whitespace-nowrap mt-1">{article.date}</span>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default Research;
