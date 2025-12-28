import { Button } from "@/components/ui/button";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const FinalCTAShefi = () => {
  return (
    <section className="py-24 md:py-32 border-y border-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium mb-6">
          Build with the community.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
          Join FOEG Labs to learn, collaborate, and ship.
        </p>
        <Button 
          asChild
          size="lg" 
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-10 py-6 text-base font-medium hover-lift"
        >
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Join FOEG Labs on WhatsApp
          </a>
        </Button>
      </div>
    </section>
  );
};

export default FinalCTAShefi;