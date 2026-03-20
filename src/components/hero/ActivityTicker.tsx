import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EVENTS = [
  "Invoice verified via AI agent",
  "M-Pesa payment reconciled to Odoo",
  "Smart contract deployed on Avalanche",
  "Procurement cycle completed autonomously",
  "Compliance report auto-generated",
  "Vendor risk score updated",
  "Fraud pattern flagged and blocked",
  "Audit trail anchored on-chain",
];

const ActivityTicker = () => {
  const [index, setIndex] = useState(0);
  const [elapsed, setElapsed] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % EVENTS.length);
      setElapsed(Math.floor(Math.random() * 8) + 1);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/60 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          className="text-xs font-sans text-muted-foreground"
        >
          {EVENTS[index]} • {elapsed}s ago
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default ActivityTicker;
