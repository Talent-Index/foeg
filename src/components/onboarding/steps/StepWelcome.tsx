import { Sparkles } from "lucide-react";

const StepWelcome = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-8 animate-fade-up">
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      
      <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
        Welcome to FOEG Labs
      </h1>
      
      <p className="text-lg text-muted-foreground max-w-md leading-relaxed mb-6">
        You don't need to know Web3, AI, or blockchain to start.
        We'll help you find the right path — step by step.
      </p>
      
      <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        This takes about 2 minutes
      </div>
    </div>
  );
};

export default StepWelcome;
