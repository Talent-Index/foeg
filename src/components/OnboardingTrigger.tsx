import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useOnboarding } from "@/hooks/useOnboarding";
import OnboardingModal from "./onboarding/OnboardingModal";

const OnboardingTrigger = () => {
  const {
    data,
    isOpen,
    currentStep,
    saveData,
    openOnboarding,
    closeOnboarding,
    nextStep,
    prevStep,
    getRecommendedPath,
  } = useOnboarding();

  return (
    <>
      <Button
        onClick={openOnboarding}
        size="lg"
        className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium hover-lift gap-2 group"
      >
        <Sparkles className="h-4 w-4 group-hover:animate-pulse" />
        Start Your Journey
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </Button>

      <OnboardingModal
        isOpen={isOpen}
        onClose={closeOnboarding}
        currentStep={currentStep}
        onNext={nextStep}
        onPrev={prevStep}
        data={data}
        onSaveData={saveData}
        getRecommendedPath={getRecommendedPath}
      />
    </>
  );
};

export default OnboardingTrigger;
