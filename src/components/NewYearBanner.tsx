import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, Sparkles } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";
const STORAGE_KEY = "foeg_ny2026_dismissed";

const NewYearBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check if already dismissed
    const isDismissed = localStorage.getItem(STORAGE_KEY) === "true";
    if (!isDismissed) {
      setIsVisible(true);
    }

    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, "true");
  };

  if (!isVisible) return null;

  return (
    <div 
      className={`relative mx-4 mt-20 mb-4 md:mx-8 lg:mx-auto lg:max-w-4xl ${
        prefersReducedMotion ? "" : "animate-fade-up"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-primary/20 bg-card/80 backdrop-blur-sm shadow-lg p-6 md:p-8">
        {/* Subtle shimmer effect */}
        {!prefersReducedMotion && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent animate-shimmer pointer-events-none" />
        )}
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted/50 transition-colors text-muted-foreground hover:text-foreground"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex flex-col items-center text-center space-y-3">
          {/* Title with sparkle */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <h2 className="text-xl md:text-2xl font-display font-medium text-foreground">
              Happy New Year 2026 ✨
            </h2>
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          {/* Subtitle */}
          <p className="text-muted-foreground text-sm md:text-base max-w-lg">
            Welcome to a year of building, community, and bold new beginnings at FOEG Labs.
          </p>

          {/* Small note */}
          <p className="text-xs text-muted-foreground/70 italic">
            Let's make it count.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Join FOEG in 2026
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewYearBanner;
