import { cn } from "@/lib/utils";
import { ArrowRight, Sparkles } from "lucide-react";

interface StepRecommendationProps {
  recommendedPath: string;
  onSelectPath: (path: string) => void;
}

const pathways = {
  "ai-agents": {
    emoji: "🤖",
    title: "AI & Agentic Systems",
    description: "Build LLM-powered products, autonomous agents, and AI-native workflows.",
    tags: ["LLMs", "Agentic AI", "AI × Web3", "Automation"],
  },
  "infrastructure": {
    emoji: "🧱",
    title: "Infrastructure & Protocols",
    description: "Design and deploy the rails powering Web3 applications and networks.",
    tags: ["L1s", "AppChains", "Indexing", "Oracles"],
  },
  "defi-stablecoins": {
    emoji: "💰",
    title: "DeFi & Stablecoins",
    description: "Build financial primitives, payment rails, and on-chain economic systems.",
    tags: ["DeFi", "Stablecoins", "RWAs", "Payments"],
  },
  "gaming-creators": {
    emoji: "🎮",
    title: "Gaming & Creator Economies",
    description: "Create immersive on-chain games and creator monetization platforms.",
    tags: ["GameFi", "NFTs", "Creator Tools"],
  },
  "trading-quant": {
    emoji: "📊",
    title: "Trading & Quant Systems",
    description: "Build analytics, trading bots, and portfolio intelligence tools.",
    tags: ["Crypto", "Stocks", "Signals", "Risk Models"],
  },
  "tools-dev": {
    emoji: "🛠️",
    title: "Tools & Dev Experience",
    description: "Build tools for builders — SDKs, APIs, dashboards, and platforms.",
    tags: ["DX", "APIs", "Analytics", "Open Source"],
  },
  "operators-community": {
    emoji: "🧑🏾‍💼",
    title: "Operators & Community Leads",
    description: "Run ecosystems, DAOs, communities, and on-ground programs.",
    tags: ["Community Ops", "DAO Ops", "Growth"],
  },
  "events-media": {
    emoji: "🎤",
    title: "Events, Media & Ecosystem Storytellers",
    description: "Produce events, media platforms, and ecosystem narratives.",
    tags: ["Events", "Content", "Partnerships"],
  },
};

const StepRecommendation = ({ recommendedPath, onSelectPath }: StepRecommendationProps) => {
  const primaryPath = pathways[recommendedPath as keyof typeof pathways] || pathways["ai-agents"];
  
  // Get 2 alternative paths
  const alternativeKeys = Object.keys(pathways).filter(
    (key) => key !== recommendedPath
  ).slice(0, 2);

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
        Your recommended starting path
      </h2>
      
      <p className="text-muted-foreground text-center mb-6">
        Based on your interests and goals, this is a strong place to start.
      </p>

      {/* Primary recommendation */}
      <div
        className={cn(
          "p-6 rounded-2xl border-2 border-primary bg-primary/5 mb-6",
          "relative overflow-hidden"
        )}
      >
        <div className="absolute top-3 right-3 flex items-center gap-1 text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
          <Sparkles className="h-3 w-3" />
          Recommended
        </div>
        
        <div className="flex items-start gap-4">
          <span className="text-5xl">{primaryPath.emoji}</span>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {primaryPath.title}
            </h3>
            <p className="text-muted-foreground mb-4">
              {primaryPath.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {primaryPath.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Alternative options */}
      <p className="text-sm text-muted-foreground mb-3 text-center">
        Or choose a different path:
      </p>
      
      <div className="grid grid-cols-2 gap-3">
        {alternativeKeys.map((key) => {
          const path = pathways[key as keyof typeof pathways];
          const isSelected = key === recommendedPath;
          
          return (
            <button
              key={key}
              onClick={() => onSelectPath(key)}
              className={cn(
                "p-4 rounded-xl border-2 text-left transition-all duration-200",
                "hover:border-primary/50 hover:bg-primary/5",
                isSelected
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card"
              )}
            >
              <span className="text-2xl mb-2 block">{path.emoji}</span>
              <p className="font-medium text-sm text-foreground line-clamp-2">
                {path.title}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepRecommendation;
