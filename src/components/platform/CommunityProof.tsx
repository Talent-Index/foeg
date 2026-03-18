import { motion } from "framer-motion";

import eventSession from "@/assets/event-session.jpeg";
import miniHackSession from "@/assets/mini-hack-session.jpeg";
import workshopTable from "@/assets/workshop-table.jpeg";
import womenConnectTeam from "@/assets/women-connect-team1.jpeg";
import communityGroup from "@/assets/community-group.jpeg";
import dojoGameJam from "@/assets/dojo-game-jam.jpeg";

const images = [
  { src: eventSession, alt: "Event session" },
  { src: miniHackSession, alt: "Mini hack session" },
  { src: workshopTable, alt: "Workshop collaboration" },
  { src: womenConnectTeam, alt: "Women Connect team" },
  { src: communityGroup, alt: "Community group" },
  { src: dojoGameJam, alt: "Dojo game jam" },
];

const stats = [
  { value: "300+", label: "Builders Trained" },
  { value: "50+", label: "Founders Supported" },
  { value: "15", label: "Ecosystem Partners" },
];

const CommunityProof = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.p
          className="text-xs font-sans uppercase tracking-widest text-accent mb-3 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Community
        </motion.p>
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-4 leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Built with operators, founders,{" "}
          <span className="italic text-muted-foreground">and builders.</span>
        </motion.h2>
        <motion.p
          className="text-muted-foreground mb-12 max-w-xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          Infrastructure isn't built in isolation. FOEG is shaped by the founders who use it, the builders who extend it, and the operators who depend on it — every day.
        </motion.p>

        {/* Stats */}
        <motion.div
          className="flex flex-wrap gap-8 md:gap-14 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl md:text-4xl font-display text-foreground">{stat.value}</p>
              <p className="text-xs font-sans uppercase tracking-wider text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`rounded-2xl overflow-hidden ${i === 0 || i === 5 ? "row-span-2" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CommunityProof;
