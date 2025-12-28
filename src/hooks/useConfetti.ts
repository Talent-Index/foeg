import { useEffect, useState } from "react";
import confetti from "canvas-confetti";

const STORAGE_KEY = "foeg_ny2026_confetti_shown";

// FOEG theme colors
const CONFETTI_COLORS = [
  "#7C3AED", // FOEG purple
  "#A78BFA", // soft lavender
  "#EDE9FE", // light lavender/cream
  "#F5F3FF", // very light purple
  "#D4AF37", // subtle gold
];

export const useConfetti = () => {
  const [hasShown, setHasShown] = useState(true);

  useEffect(() => {
    // Check if already shown
    const wasShown = localStorage.getItem(STORAGE_KEY) === "true";
    
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (wasShown || prefersReducedMotion) {
      setHasShown(true);
      return;
    }

    setHasShown(false);

    // Delay slightly for page load
    const timeout = setTimeout(() => {
      // Create a gentle confetti burst from top center
      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 3,
          angle: 90,
          spread: 55,
          origin: { x: 0.5, y: 0 },
          colors: CONFETTI_COLORS,
          ticks: 200,
          gravity: 0.8,
          scalar: 1.2,
          drift: 0,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();

      // Mark as shown
      localStorage.setItem(STORAGE_KEY, "true");
      setHasShown(true);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return { hasShown };
};
