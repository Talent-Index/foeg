import { Code2, Brain, Palette, Users, Rocket, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface StepIdentityProps {
  selected: string | null;
  onSelect: (identity: string) => void;
}

const identities = [
  {
    id: "developer",
    icon: Code2,
    label: "Developer / Technical Builder",
    emoji: "👩🏾‍💻",
  },
  {
    id: "learner",
    icon: Brain,
    label: "Curious Learner (Non-technical)",
    emoji: "🧠",
  },
  {
    id: "creative",
    icon: Palette,
    label: "Creative / Media / Community",
    emoji: "🎨",
  },
  {
    id: "operator",
    icon: Users,
    label: "Operator / Event / Ecosystem Builder",
    emoji: "🧑🏾‍💼",
  },
  {
    id: "founder",
    icon: Rocket,
    label: "Founder / Business Explorer",
    emoji: "🚀",
  },
  {
    id: "unsure",
    icon: HelpCircle,
    label: "Not sure yet",
    emoji: "🤔",
  },
];

const StepIdentity = ({ selected, onSelect }: StepIdentityProps) => {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
        How do you see yourself right now?
      </h2>
      
      <p className="text-muted-foreground text-center mb-8">
        There's no wrong answer. This helps us guide you better.
      </p>

      <div className="grid gap-3">
        {identities.map((identity) => {
          const Icon = identity.icon;
          const isSelected = selected === identity.id;
          
          return (
            <button
              key={identity.id}
              onClick={() => onSelect(identity.id)}
              className={cn(
                "flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 text-left",
                "hover:border-primary/50 hover:bg-primary/5",
                isSelected
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card"
              )}
            >
              <div
                className={cn(
                  "w-12 h-12 rounded-lg flex items-center justify-center text-2xl shrink-0",
                  isSelected ? "bg-primary/20" : "bg-muted"
                )}
              >
                {identity.emoji}
              </div>
              <span
                className={cn(
                  "font-medium text-base",
                  isSelected ? "text-foreground" : "text-foreground/80"
                )}
              >
                {identity.label}
              </span>
              {isSelected && (
                <div className="ml-auto w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="w-3 h-3 text-primary-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default StepIdentity;
