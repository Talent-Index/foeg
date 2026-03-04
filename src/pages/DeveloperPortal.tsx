import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import { motion } from "framer-motion";
import { Terminal, BookOpen, Package, ArrowRight } from "lucide-react";

const resources = [
  { icon: Terminal, title: "API Reference", desc: "RESTful APIs for agent orchestration, talent matching, and ecosystem data.", href: "#" },
  { icon: Package, title: "SDKs & Libraries", desc: "JavaScript and Python SDKs to integrate FOEG infrastructure into your stack.", href: "#" },
  { icon: BookOpen, title: "Guides & Tutorials", desc: "Step-by-step guides to deploy your first AI agent or connect to the builder network.", href: "#" },
];

const codeSnippet = `import { FOEG } from '@foeg/sdk'

const client = new FOEG({ apiKey: 'your-key' })

// Deploy an AI agent
const agent = await client.agents.create({
  model: 'gpt-5',
  tools: ['web-search', 'code-exec'],
  name: 'Research Assistant'
})

// Search verified builders
const builders = await client.talent.search({
  skills: ['solidity', 'rust'],
  tier: 'architect'
})`;

const DeveloperPortal = () => {
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
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Developer Portal</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              Build with{" "}
              <span className="text-muted-foreground">FOEG infrastructure.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              APIs, SDKs, and developer tools for building AI-native and Web3 applications at scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Code preview */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              className="rounded-2xl border border-border bg-card overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-muted-foreground/30" />
                  <div className="w-3 h-3 rounded-full bg-primary/30" />
                </div>
                <span className="text-xs font-mono text-muted-foreground ml-2">quickstart.ts</span>
              </div>
              <pre className="p-6 text-sm font-mono text-foreground/90 overflow-x-auto leading-relaxed">
                <code>{codeSnippet}</code>
              </pre>
            </motion.div>

            <div className="space-y-4">
              {resources.map((res, i) => (
                <motion.a
                  key={res.title}
                  href={res.href}
                  className="group flex items-start gap-4 p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <res.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-medium text-foreground mb-1">{res.title}</h3>
                    <p className="text-sm text-muted-foreground">{res.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </section>
      <PlatformFooter />
    </div>
  );
};

export default DeveloperPortal;
