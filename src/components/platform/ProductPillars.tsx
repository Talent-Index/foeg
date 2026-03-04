import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Blocks, Users, Globe } from "lucide-react";

const pillars = [
  {
    icon: Bot,
    title: "FOEG Enterprise",
    description: "Deploy AI agents and blockchain infrastructure with enterprise-grade security, compliance, and scale.",
    tags: ["AI Agents", "Smart Contracts", "Data Pipelines"],
    href: "/enterprise",
    accent: "from-primary/10 to-primary/5",
  },
  {
    icon: Blocks,
    title: "FOEG Infrastructure",
    description: "APIs, SDKs, and developer tooling for building AI-native and Web3 applications at scale.",
    tags: ["APIs", "Agent Framework", "Dev Tools"],
    href: "/developers",
    accent: "from-secondary/30 to-secondary/10",
  },
  {
    icon: Users,
    title: "Talent Index",
    description: "Access verified builders with on-chain reputation, matched to enterprise projects by skill and track record.",
    tags: ["Builder Profiles", "Reputation", "Matching"],
    href: "/talent",
    accent: "from-primary/8 to-secondary/10",
  },
  {
    icon: Globe,
    title: "Ecosystem Programs",
    description: "Protocol partnerships, venture programs, and ecosystem activations that scale builder communities globally.",
    tags: ["Partnerships", "Grants", "Activations"],
    href: "/ecosystem",
    accent: "from-secondary/20 to-primary/5",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProductPillars = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">
            The Platform
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight">
            Four systems.{" "}
            <span className="text-muted-foreground">One infrastructure.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl">
            Everything enterprises, developers, and builders need to ship AI and Web3 systems — from tooling to talent to go-to-market.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar) => (
            <motion.div key={pillar.title} variants={item}>
              <Link
                to={pillar.href}
                className={`group block relative p-8 md:p-10 rounded-2xl border border-border bg-gradient-to-br ${pillar.accent} hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <pillar.icon className="h-5 w-5 text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-3">
                  {pillar.title}
                </h3>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                  {pillar.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {pillar.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-full border border-border bg-background/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 gap-1 transition-all">
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductPillars;
