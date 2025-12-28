import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const stats = [
  { value: "778+", label: "Community Members" },
  { value: "522+", label: "Builders Supported" },
  { value: "10+", label: "Events Hosted" },
  { value: "5+", label: "Cities Reached" },
];

const ByTheNumbers = () => {
  return (
    <section id="numbers" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title with serif italic styling like SheFi */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-center mb-16">
          FOEG Labs <span className="italic">by the Numbers</span>
        </h2>

        {/* 8-card grid with pastel gradients */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="card-gradient rounded-3xl p-6 md:p-8 text-center"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-foreground/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-sm text-muted-foreground mb-8 max-w-xl mx-auto">
          Numbers updated periodically. Want to partner? Join the community.
        </p>

        {/* CTA */}
        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium hover-lift border border-primary/20"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Join the Community
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ByTheNumbers;