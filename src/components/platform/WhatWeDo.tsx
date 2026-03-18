import { motion } from "framer-motion";
import { Bot, Blocks, Cog, BarChart3, Users, Rocket } from "lucide-react";

const offerings = [
  {
    icon: Bot,
    title: "AI Transformation",
    description: "AI copilots, automation systems, and enterprise workflows that turn operational complexity into competitive advantage.",
  },
  {
    icon: Blocks,
    title: "Blockchain Infrastructure",
    description: "Smart contracts, tokenization (RWAs), and protocol integrations that unlock new business models.",
  },
  {
    icon: Cog,
    title: "Enterprise Automation",
    description: "Internal tooling, workflow optimization, and system integrations that eliminate manual overhead.",
  },
  {
    icon: BarChart3,
    title: "Data + Intelligence",
    description: "Real-time dashboards, predictive analytics, and decision systems built on your operational data.",
  },
  {
    icon: Users,
    title: "Talent-as-a-Service",
    description: "Vetted AI and blockchain engineers deployed as embedded teams into your operations.",
  },
  {
    icon: Rocket,
    title: "Venture + Ecosystem",
    description: "Startup pipelines, strategic partnerships, and innovation programs that create market gravity.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhatWeDo = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-2xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-sans uppercase tracking-widest text-accent mb-3 font-medium">
            What We Do
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight leading-[1.1]">
            Six capabilities.{" "}
            <span className="italic text-muted-foreground">One platform.</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-xl">
            From AI transformation to ecosystem access — every capability your business needs to operate at the frontier.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {offerings.map((offer) => (
            <motion.div
              key={offer.title}
              variants={item}
              className="group p-8 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-accent/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/15 transition-colors">
                <offer.icon className="h-5 w-5 text-accent" />
              </div>
              <h3 className="text-lg font-display text-foreground mb-2">
                {offer.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {offer.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDo;
