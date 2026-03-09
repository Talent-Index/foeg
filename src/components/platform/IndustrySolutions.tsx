import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Car, Truck, Store, Briefcase, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Car,
    title: "AutoFlow",
    description: "Revenue tracking, performance dashboards, and operational analytics — all automated for car wash and automotive services.",
    href: "/case-studies",
  },
  {
    icon: Truck,
    title: "Logistics Intelligence",
    description: "Route optimization, driver analytics, and cost modeling powered by real operational data for fleet companies.",
    href: "/case-studies",
  },
  {
    icon: Store,
    title: "Retail Intelligence",
    description: "Inventory intelligence, sales performance, and branch-level analytics in a single system for multi-location retail.",
    href: "/case-studies",
  },
  {
    icon: Briefcase,
    title: "Service Business Systems",
    description: "Revenue tracking, scheduling automation, and client management for service providers scaling beyond spreadsheets.",
    href: "/case-studies",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-mono uppercase tracking-widest text-primary mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Industry Solutions
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Infrastructure for{" "}
          <span className="text-muted-foreground">real industries.</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link
                to={s.href}
                className="group block p-6 rounded-2xl border border-border bg-card/50 hover:border-primary/30 hover:bg-card transition-all h-full"
              >
                <s.icon className="h-8 w-8 text-primary mb-5" />
                <h3 className="text-lg font-display font-medium text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{s.description}</p>
                <span className="inline-flex items-center text-xs font-mono text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                  View Case Study <ArrowRight className="ml-1 h-3 w-3" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;
