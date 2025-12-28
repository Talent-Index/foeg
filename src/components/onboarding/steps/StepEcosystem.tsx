import { Bot, Blocks, Coins, Gamepad2, Wrench, Globe } from "lucide-react";

const ecosystemAreas = [
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI & Agents",
    description: "Automation, intelligence, products",
    color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    icon: Blocks,
    emoji: "🧱",
    title: "Blockchains & Protocols",
    description: "Infrastructure & rails",
    color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    icon: Coins,
    emoji: "💰",
    title: "Finance & Payments",
    description: "DeFi, stablecoins, RWAs",
    color: "bg-green-500/10 text-green-600 dark:text-green-400",
  },
  {
    icon: Gamepad2,
    emoji: "🎮",
    title: "Gaming & Creators",
    description: "Experiences & economies",
    color: "bg-pink-500/10 text-pink-600 dark:text-pink-400",
  },
  {
    icon: Wrench,
    emoji: "🛠️",
    title: "Tools & Dev Experience",
    description: "Building for builders",
    color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
  },
  {
    icon: Globe,
    emoji: "🌍",
    title: "Communities & Ops",
    description: "People, growth, coordination",
    color: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
  },
];

const StepEcosystem = () => {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
        How the ecosystem fits together
      </h2>
      
      <p className="text-muted-foreground text-center mb-8">
        You don't need to choose everything. We'll recommend a starting point.
      </p>

      <div className="space-y-3 max-h-[320px] overflow-y-auto pr-2">
        {ecosystemAreas.map((area, index) => {
          const Icon = area.icon;
          
          return (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0 ${area.color}`}
              >
                {area.emoji}
              </div>
              <div>
                <p className="font-semibold text-foreground">{area.title}</p>
                <p className="text-sm text-muted-foreground">
                  {area.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-muted/50 text-center">
        <p className="text-sm text-muted-foreground">
          💡 These areas overlap — many builders work across multiple domains.
        </p>
      </div>
    </div>
  );
};

export default StepEcosystem;
