import { Rocket, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface StepCompletionProps {
  pathId: string;
  onComplete: () => void;
}

const sideQuests = [
  { emoji: "🤖", title: "AI & Agentic Systems" },
  { emoji: "💰", title: "DeFi & Stablecoins" },
  { emoji: "🧱", title: "Infrastructure" },
  { emoji: "🎮", title: "Gaming & Creators" },
];

const StepCompletion = ({ pathId, onComplete }: StepCompletionProps) => {
  return (
    <div className="animate-fade-up text-center">
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Rocket className="h-10 w-10 text-primary" />
      </div>

      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">
        You're on your way 🚀
      </h2>
      
      <p className="text-muted-foreground mb-8 max-w-md mx-auto">
        Complete your Core Path to unlock Side Quests across AI, DeFi, Infrastructure, Gaming, and more.
      </p>

      {/* Side Quests Preview (Locked) */}
      <div className="mb-8">
        <p className="text-sm text-muted-foreground mb-4 flex items-center justify-center gap-2">
          <Lock className="h-4 w-4" />
          Side Quests (Unlock after Core Path)
        </p>
        <div className="grid grid-cols-2 gap-3">
          {sideQuests.map((quest, index) => (
            <div
              key={index}
              className="p-4 rounded-xl bg-muted/30 border border-border/50 opacity-60 relative"
            >
              <Lock className="absolute top-2 right-2 h-3 w-3 text-muted-foreground" />
              <span className="text-2xl mb-2 block">{quest.emoji}</span>
              <p className="text-sm text-muted-foreground">{quest.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <Link to={`/pathway/${pathId}`} onClick={onComplete}>
        <Button size="lg" className="hover-lift gap-2">
          Go to My Pathway
          <ArrowRight className="h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
};

export default StepCompletion;
