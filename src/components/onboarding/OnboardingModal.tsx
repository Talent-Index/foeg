import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import StepWelcome from "./steps/StepWelcome";
import StepIdentity from "./steps/StepIdentity";
import StepMotivation from "./steps/StepMotivation";
import StepExperience from "./steps/StepExperience";
import StepEcosystem from "./steps/StepEcosystem";
import StepRecommendation from "./steps/StepRecommendation";
import StepConfirmation from "./steps/StepConfirmation";
import StepCompletion from "./steps/StepCompletion";

interface OnboardingModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentStep: number;
  onNext: () => void;
  onPrev: () => void;
  data: {
    identity: string | null;
    motivations: string[];
    experience: string | null;
    recommendedPath: string | null;
  };
  onSaveData: (data: Partial<{
    identity: string | null;
    motivations: string[];
    experience: string | null;
    recommendedPath: string | null;
    completed: boolean;
  }>) => void;
  getRecommendedPath: () => string;
}

const TOTAL_STEPS = 8;

const OnboardingModal = ({
  isOpen,
  onClose,
  currentStep,
  onNext,
  onPrev,
  data,
  onSaveData,
  getRecommendedPath,
}: OnboardingModalProps) => {
  const progress = (currentStep / TOTAL_STEPS) * 100;

  const canContinue = () => {
    switch (currentStep) {
      case 1:
        return true;
      case 2:
        return data.identity !== null;
      case 3:
        return data.motivations.length > 0;
      case 4:
        return data.experience !== null;
      case 5:
      case 6:
      case 7:
      case 8:
        return true;
      default:
        return true;
    }
  };

  const handleNext = () => {
    if (currentStep === 5) {
      // Set recommended path when moving to step 6
      const recommended = getRecommendedPath();
      onSaveData({ recommendedPath: recommended });
    }
    onNext();
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <StepWelcome />;
      case 2:
        return (
          <StepIdentity
            selected={data.identity}
            onSelect={(identity) => onSaveData({ identity })}
          />
        );
      case 3:
        return (
          <StepMotivation
            selected={data.motivations}
            onSelect={(motivations) => onSaveData({ motivations })}
          />
        );
      case 4:
        return (
          <StepExperience
            selected={data.experience}
            onSelect={(experience) => onSaveData({ experience })}
          />
        );
      case 5:
        return <StepEcosystem />;
      case 6:
        return (
          <StepRecommendation
            recommendedPath={data.recommendedPath || getRecommendedPath()}
            onSelectPath={(path) => onSaveData({ recommendedPath: path })}
          />
        );
      case 7:
        return <StepConfirmation pathId={data.recommendedPath || 'ai-agents'} />;
      case 8:
        return (
          <StepCompletion
            pathId={data.recommendedPath || 'ai-agents'}
            onComplete={() => {
              onSaveData({ completed: true });
              onClose();
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-background border-border">
        {/* Header with progress */}
        <div className="sticky top-0 z-10 bg-background border-b border-border p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-muted-foreground font-medium">
              Step {currentStep} of {TOTAL_STEPS}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 min-h-[400px]">{renderStep()}</div>

        {/* Navigation */}
        {currentStep < 8 && (
          <div className="sticky bottom-0 bg-background border-t border-border p-4 flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onPrev}
              disabled={currentStep === 1}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <Button
              onClick={handleNext}
              disabled={!canContinue()}
              className="gap-2 hover-lift"
            >
              {currentStep === 1 ? "Begin" : "Continue"}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OnboardingModal;
