import { Check, BookOpen, Hammer, Eye, Users } from "lucide-react";

interface StepConfirmationProps {
  pathId: string;
}

const checklist = [
  {
    icon: BookOpen,
    text: "Understand the space",
    description: "Get mental models and context",
  },
  {
    icon: BookOpen,
    text: "Learn with curated resources",
    description: "Quality over quantity",
  },
  {
    icon: Hammer,
    text: "Build a guided project",
    description: "Ship something real",
  },
  {
    icon: Eye,
    text: "Get visibility through FOEG programs",
    description: "Connect with ecosystem",
  },
];

const programs = [
  { name: "Knowledge Sharing Sessions (KSS)", emoji: "📚" },
  { name: "Builder Nights / Mini Hacks", emoji: "🌙" },
  { name: "Talent Index", emoji: "🎯" },
];

const StepConfirmation = ({ pathId }: StepConfirmationProps) => {
  return (
    <div className="animate-fade-up">
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3 text-center">
        What happens next
      </h2>
      
      <p className="text-muted-foreground text-center mb-8">
        Here's your journey roadmap on this path.
      </p>

      {/* Checklist */}
      <div className="space-y-4 mb-8">
        {checklist.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Check className="h-4 w-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{item.text}</p>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Programs */}
      <div className="p-4 rounded-xl bg-muted/50 border border-border">
        <p className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
          <Users className="h-4 w-4" />
          Programs you'll access:
        </p>
        <div className="flex flex-wrap gap-2">
          {programs.map((program) => (
            <span
              key={program.name}
              className="text-xs px-3 py-1.5 rounded-full bg-background border border-border text-foreground"
            >
              {program.emoji} {program.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepConfirmation;
