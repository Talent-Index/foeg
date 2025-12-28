import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  title: string;
  description: string;
  primaryLink: {
    label: string;
    url: string;
  };
  secondaryLink?: {
    label: string;
    url: string;
  };
  gradientVariant?: 1 | 2 | 3 | 4;
}

const ProductCard = ({
  title,
  description,
  primaryLink,
  secondaryLink,
  gradientVariant = 1,
}: ProductCardProps) => {
  const gradients = {
    1: "bg-gradient-to-br from-background via-primary/20 to-primary/40",
    2: "bg-gradient-to-br from-primary/30 via-background to-primary/20",
    3: "bg-gradient-to-br from-background via-accent/20 to-primary/30",
    4: "bg-gradient-to-br from-primary/40 via-accent/30 to-background",
  };

  return (
    <div
      className={cn(
        "group relative border border-border rounded-xl overflow-hidden bg-card flex flex-col h-full",
        "transition-all duration-300 ease-out",
        "hover:border-primary/60 hover:shadow-xl hover:shadow-primary/10",
        "hover:-translate-y-1"
      )}
    >
      {/* Gradient Header Strip with animated overlay */}
      <div className={cn("h-24 relative overflow-hidden", gradients[gradientVariant])}>
        {/* Shimmer effect on hover */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-100",
            "bg-gradient-to-r from-transparent via-white/10 to-transparent",
            "translate-x-[-100%] group-hover:translate-x-[100%]",
            "transition-all duration-700 ease-out"
          )}
        />
        {/* Subtle glow pulse */}
        <div
          className={cn(
            "absolute inset-0 opacity-0 group-hover:opacity-30",
            "bg-gradient-to-t from-primary/20 to-transparent",
            "transition-opacity duration-300"
          )}
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className={cn(
            "font-display font-bold text-lg uppercase tracking-wide text-foreground mb-3",
            "transition-colors duration-200",
            "group-hover:text-primary"
          )}
        >
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
          {description}
        </p>

        {/* Links */}
        <div className="space-y-2 mt-auto">
          <a
            href={primaryLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center text-primary font-medium text-sm",
              "transition-all duration-200",
              "hover:text-primary/80 hover:gap-1"
            )}
          >
            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 group-hover:after:w-full">
              {primaryLink.label}
            </span>
            <ArrowRight
              className={cn(
                "ml-1 h-4 w-4",
                "transition-transform duration-300 ease-out",
                "group-hover:translate-x-1"
              )}
            />
          </a>

          {secondaryLink && (
            <a
              href={secondaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "block text-muted-foreground text-xs",
                "transition-all duration-200",
                "hover:text-foreground hover:translate-x-0.5"
              )}
            >
              {secondaryLink.label} →
            </a>
          )}
        </div>
      </div>

      {/* Corner accent on hover */}
      <div
        className={cn(
          "absolute top-0 right-0 w-12 h-12",
          "bg-gradient-to-bl from-primary/20 to-transparent",
          "opacity-0 group-hover:opacity-100",
          "transition-opacity duration-300 ease-out",
          "rounded-bl-xl"
        )}
      />
    </div>
  );
};

export default ProductCard;
