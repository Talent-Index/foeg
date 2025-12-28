import { cn } from "@/lib/utils";
import { Sprout, Leaf, TreeDeciduous, Brain } from "lucide-react";

interface StepExperienceProps {
  selected: string | null;
  onSelect: (experience: string) => void;
}

const experiences = [
  {
    id: "new",
    icon: Sprout,
    emoji: "🌱",
    label: "Brand new",
    description: "No Web3 / AI background",
  },
  {
    id: "some",
    icon: Leaf,
    emoji: "🌿",
    label: "Some exposure",
    description: "Courses, videos, Twitter",
  },
  {
    id: "handson",
    icon: TreeDeciduous,
    emoji: "🌳",
    label: "Hands-on",
    description: "Built something before",
  },
  {
    id: "advanced",
    icon: Brain,
    emoji: "🧠",
    label: "Advanced",
    description: "Shipping regularly",
  },
];

const StepExperience = ({ selected, onSelect }: StepExperienceProps) => {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
        What's your current experience level?
      </h2>
      
      <p className="text-muted-foreground text-center mb-8">
        We'll pace things so you don't feel lost or bored.
      </p>

      <div className="grid grid-cols-2 gap-4">
        {experiences.map((exp) => {
          const isSelected = selected === exp.id;
          
          return (
            <button
              key={exp.id}
              onClick={() => onSelect(exp.id)}
              className={cn(
                "flex flex-col items-center gap-3 p-6 rounded-xl border-2 transition-all duration-200 text-center",
                "hover:border-primary/50 hover:bg-primary/5",
                isSelected
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card"
              )}
            >
              <span className="text-4xl">{exp.emoji}</span>
              <div>
                <p
                  className={cn(
                    "font-semibold text-base mb-1",
                    isSelected ? "text-foreground" : "text-foreground/80"
                  )}
                >
                  {exp.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
              {isSelected && (
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
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

export default StepExperience;
