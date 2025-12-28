import { ArrowRight } from "lucide-react";

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
    <div className="group border border-border rounded-xl overflow-hidden bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-[var(--shadow-hover)] flex flex-col h-full">
      {/* Gradient Header Strip */}
      <div className={`h-24 ${gradients[gradientVariant]}`} />

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-bold text-lg uppercase tracking-wide text-foreground mb-3">
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
            className="inline-flex items-center text-primary font-medium text-sm hover:underline group/link"
          >
            {primaryLink.label}
            <ArrowRight className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </a>

          {secondaryLink && (
            <a
              href={secondaryLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              {secondaryLink.label} →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
