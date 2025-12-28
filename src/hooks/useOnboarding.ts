import { useState, useEffect } from 'react';

export interface OnboardingData {
  identity: string | null;
  motivations: string[];
  experience: string | null;
  recommendedPath: string | null;
  completed: boolean;
}

const STORAGE_KEY = 'foeg-onboarding';

const defaultData: OnboardingData = {
  identity: null,
  motivations: [],
  experience: null,
  recommendedPath: null,
  completed: false,
};

export const useOnboarding = () => {
  const [data, setData] = useState<OnboardingData>(defaultData);
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setData(JSON.parse(stored));
      } catch {
        setData(defaultData);
      }
    }
  }, []);

  const saveData = (newData: Partial<OnboardingData>) => {
    const updated = { ...data, ...newData };
    setData(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  const resetOnboarding = () => {
    setData(defaultData);
    setCurrentStep(1);
    localStorage.removeItem(STORAGE_KEY);
  };

  const openOnboarding = () => {
    if (data.completed) {
      setCurrentStep(1);
    }
    setIsOpen(true);
  };

  const closeOnboarding = () => {
    setIsOpen(false);
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 8));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const getRecommendedPath = () => {
    // Logic to recommend path based on identity and motivations
    const { identity, motivations } = data;
    
    if (identity === 'developer') {
      if (motivations.includes('ai')) return 'ai-agents';
      if (motivations.includes('build')) return 'infrastructure';
      return 'tools-dev';
    }
    
    if (identity === 'creative') {
      return 'gaming-creators';
    }
    
    if (identity === 'operator') {
      return 'operators-community';
    }
    
    if (identity === 'founder') {
      if (motivations.includes('funding')) return 'defi-stablecoins';
      return 'ai-agents';
    }
    
    if (identity === 'learner') {
      if (motivations.includes('ai')) return 'ai-agents';
      return 'operators-community';
    }
    
    // Default to AI pathway
    return 'ai-agents';
  };

  return {
    data,
    isOpen,
    currentStep,
    saveData,
    resetOnboarding,
    openOnboarding,
    closeOnboarding,
    nextStep,
    prevStep,
    getRecommendedPath,
    setCurrentStep,
  };
};
