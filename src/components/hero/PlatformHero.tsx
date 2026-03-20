import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ActivityTicker from "./ActivityTicker";

import heroComm from "@/assets/hero-community.jpeg";
import eventVenue from "@/assets/event-venue.jpeg";
import workshopSession from "@/assets/workshop-session.jpeg";
import girlsOnchain from "@/assets/girls-onchain.jpeg";
import hackathonAudience from "@/assets/hackathon-audience.jpeg";
import studentsWorkshop from "@/assets/students-workshop.jpeg";
import womenConnectGroup from "@/assets/women-connect-group.jpeg";
import awardWinners from "@/assets/awards-winners.jpeg";

const ROTATING_WORDS = ["AI systems", "blockchain infrastructure", "business automation", "global ecosystems"];

const ImageCard = ({ src, alt, className, delay }: { src: string; alt: string; className?: string; delay: number }) => (
  <motion.div
    className={`rounded-2xl overflow-hidden shadow-lg ${className || ""}`}
    initial={{ opacity: 0, scale: 0.92 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.7, delay }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" />
  </motion.div>
);

const PlatformHero = () => {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden hero-gradient">

      {/* Center content */}
      <div className="relative z-10 container mx-auto px-4 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-background/60 text-xs font-sans font-medium uppercase tracking-widest text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Enterprise Infrastructure Platform
          </span>
        </motion.div>

        <motion.h1
          className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-normal tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
        >
          The infrastructure layer
          <br />
          for{" "}
          <span className="relative inline-block italic text-accent">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(4px)" }}
                transition={{ duration: 0.35 }}
                className="inline-block"
              >
                {ROTATING_WORDS[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 md:mt-8 text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Deploy AI systems. Integrate blockchain. Access elite talent.
          <br className="hidden sm:block" />
          All from one unified platform.
        </motion.p>

        <motion.p
          className="mt-3 text-sm text-muted-foreground/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
        >
          From infrastructure to application — FOEG powers every layer of your business.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <Button asChild size="lg" className="rounded-full px-8 py-6 text-base hover-lift">
            <Link to="/enterprise">
              Deploy With FOEG
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full px-8 py-6 text-base border-foreground/20 hover:bg-foreground/5"
          >
            <Link to="/use-cases">Explore Use Cases</Link>
          </Button>
        </motion.div>

        {/* Activity ticker */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          <ActivityTicker />
        </motion.div>

        {/* Trust line */}
        <motion.p
          className="mt-8 text-xs font-sans uppercase tracking-widest text-muted-foreground/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
        >
          Backed by leading ecosystems, protocols & enterprise partners
        </motion.p>

        {/* Proof bar */}
        <motion.div
          className="mt-10 md:mt-14 flex flex-wrap justify-center gap-8 md:gap-14"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.7 }}
        >
          {[
            { value: "1,200+", label: "Builders" },
            { value: "40+", label: "Partners" },
            { value: "15", label: "Ecosystems" },
            { value: "50+", label: "Events" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl md:text-3xl font-display text-foreground">{stat.value}</p>
              <p className="text-xs font-sans uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Mobile image strip */}
      <div className="absolute bottom-0 left-0 right-0 xl:hidden">
        <div className="flex gap-2 px-4 pb-4 overflow-hidden">
          {[womenConnectGroup, awardWinners, hackathonAudience].map((img, i) => (
            <motion.div
              key={i}
              className="w-1/3 h-20 rounded-xl overflow-hidden opacity-40"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.4, y: 0 }}
              transition={{ delay: 1.2 + i * 0.1 }}
            >
              <img src={img} alt="FOEG community" className="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformHero;
