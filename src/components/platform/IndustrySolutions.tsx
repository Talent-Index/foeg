import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Banknote, Truck, Car, Landmark, Rocket, ArrowRight } from "lucide-react";

const solutions = [
  {
    icon: Banknote,
    title: "Financial Services",
    problem: "Legacy systems can't process real-time payments or tokenized assets.",
    solution: "FOEG deploys AI-driven risk analysis, stablecoin rails, and lending automation.",
    outcome: "Faster settlements, automated compliance, new revenue channels.",
    href: "/case-studies",
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    problem: "Fragmented tracking across multi-party supply chains.",
    solution: "Blockchain traceability, AI route optimization, and fleet analytics.",
    outcome: "End-to-end visibility, reduced costs, faster delivery.",
    href: "/case-studies",
  },
  {
    icon: Car,
    title: "Mobility & AutoPay",
    problem: "Car wash and mobility operators run on spreadsheets and guesswork.",
    solution: "AutoFlow: revenue tracking, performance dashboards, AI-powered operations.",
    outcome: "Automated revenue tracking across all locations in real time.",
    href: "/case-studies",
  },
  {
    icon: Landmark,
    title: "Government & Public Infra",
    problem: "Public services lack transparency and digital infrastructure.",
    solution: "Blockchain-verified records, AI-assisted service delivery, digital identity.",
    outcome: "Transparent governance, faster service delivery, citizen trust.",
    href: "/case-studies",
  },
  {
    icon: Rocket,
    title: "Startups & Scaleups",
    problem: "Early-stage teams lack the infra to build AI and Web3 products.",
    solution: "FOEG platform access: developer tools, talent matching, ecosystem distribution.",
    outcome: "Ship faster, access capital, reach enterprise customers.",
    href: "/case-studies",
  },
];

const IndustrySolutions = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-sans uppercase tracking-widest text-accent mb-3 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Industry Solutions
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-4 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Infrastructure for{" "}
          <span className="italic text-muted-foreground">real industries.</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-16 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Every industry has a version of the same problem: outdated systems, fragmented data, manual processes. FOEG solves each one differently.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
                className="group block p-7 rounded-2xl border border-border bg-card/50 hover:border-accent/30 hover:bg-card hover:shadow-lg transition-all h-full hover:-translate-y-1 duration-300"
              >
                <s.icon className="h-8 w-8 text-accent mb-5" />
                <h3 className="text-lg font-display text-foreground mb-3">{s.title}</h3>
                <div className="space-y-2 mb-5">
                  <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Problem:</span> {s.problem}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Solution:</span> {s.solution}</p>
                  <p className="text-xs text-muted-foreground"><span className="font-medium text-foreground/70">Outcome:</span> {s.outcome}</p>
                </div>
                <span className="inline-flex items-center text-xs font-sans text-accent opacity-0 group-hover:opacity-100 transition-opacity font-medium">
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
