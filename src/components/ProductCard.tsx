import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  description: string;
  badge?: string;
  coverImage?: string;
  primaryLink: {
    label: string;
    url: string;
  };
  secondaryLink?: {
    label: string;
    url: string;
  };
  gradientVariant?: 1 | 2 | 3 | 4;
  featured?: boolean;
}

const ProductCard = ({
  title,
  description,
  badge,
  coverImage,
  primaryLink,
  secondaryLink,
  gradientVariant = 1,
  featured = false,
}: ProductCardProps) => {
  const gradients = {
    1: "bg-gradient-to-br from-background via-primary/30 to-primary/50",
    2: "bg-gradient-to-br from-primary/40 via-background to-accent/30",
    3: "bg-gradient-to-br from-accent/30 via-primary/20 to-background",
    4: "bg-gradient-to-br from-primary/50 via-accent/40 to-background",
  };

  const badgeColors: Record<string, string> = {
    Learning: "bg-primary/90 text-primary-foreground",
    Hackathons: "bg-accent/90 text-accent-foreground",
    Spotlight: "bg-foreground/90 text-background",
    Community: "bg-primary/80 text-primary-foreground",
  };

  return (
    <div
      className={cn(
        "group bg-card rounded-3xl overflow-hidden border border-border",
        "transition-all duration-300 ease-out",
        "hover:shadow-xl hover:shadow-primary/10 hover:border-primary/40",
        "hover:-translate-y-1",
        featured && "md:col-span-2"
      )}
    >
      {/* Cover Image or Gradient */}
      <div className={cn(
        "relative overflow-hidden",
        featured ? "aspect-[21/9]" : "aspect-video"
      )}>
        {coverImage ? (
          <img
            src={coverImage}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={cn("w-full h-full", gradients[gradientVariant])}>
            {/* Gradient pattern overlay */}
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px]" />
          </div>
        )}
        
        {/* Badge */}
        {badge && (
          <span
            className={cn(
              "absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide",
              badgeColors[badge] || "bg-muted text-muted-foreground"
            )}
          >
            {badge}
          </span>
        )}

        {/* Hover overlay */}
        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent",
            "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          )}
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <h3
          className={cn(
            "font-serif text-xl font-semibold text-foreground leading-tight",
            "transition-colors duration-200",
            "group-hover:text-primary"
          )}
        >
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 pt-3">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full flex-1 hover-lift border border-primary/20"
          >
            <a
              href={primaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {primaryLink.label}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>

          {secondaryLink && (
            <Button
              asChild
              variant="outline"
              className="border-foreground/20 text-foreground hover:bg-foreground/5 rounded-full"
            >
              <a
                href={secondaryLink.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {secondaryLink.label}
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
