import { cn } from "@/lib/utils";

interface StepMotivationProps {
  selected: string[];
  onSelect: (motivations: string[]) => void;
}

const motivations = [
  { id: "skill", label: "Learn a new skill", emoji: "📚" },
  { id: "build", label: "Build something real", emoji: "🛠️" },
  { id: "paid", label: "Get paid opportunities", emoji: "💰" },
  { id: "ai", label: "Explore AI & emerging tech", emoji: "🤖" },
  { id: "community", label: "Join a strong community", emoji: "🤝" },
  { id: "funding", label: "Access grants or funding", emoji: "🎯" },
  { id: "explore", label: "Just exploring", emoji: "👀" },
];

const StepMotivation = ({ selected, onSelect }: StepMotivationProps) => {
  const toggleMotivation = (id: string) => {
    if (selected.includes(id)) {
      onSelect(selected.filter((m) => m !== id));
    } else {
      onSelect([...selected, id]);
    }
  };

  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
        What are you hoping to achieve?
      </h2>
      
      <p className="text-muted-foreground text-center mb-8">
        Select all that apply — you can always change this later.
      </p>

      <div className="flex flex-wrap gap-3 justify-center">
        {motivations.map((motivation) => {
          const isSelected = selected.includes(motivation.id);
          
          return (
            <button
              key={motivation.id}
              onClick={() => toggleMotivation(motivation.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-3 rounded-full border-2 transition-all duration-200",
                "hover:border-primary/50 hover:bg-primary/5",
                isSelected
                  ? "border-primary bg-primary/10 shadow-md"
                  : "border-border bg-card"
              )}
            >
              <span className="text-lg">{motivation.emoji}</span>
              <span
                className={cn(
                  "font-medium text-sm",
                  isSelected ? "text-foreground" : "text-foreground/80"
                )}
              >
                {motivation.label}
              </span>
              {isSelected && (
                <div className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                  <svg
                    className="w-2.5 h-2.5 text-primary-foreground"
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

      {selected.length > 0 && (
        <p className="text-sm text-muted-foreground text-center mt-6">
          {selected.length} selected
        </p>
      )}
    </div>
  );
};

export default StepMotivation;
