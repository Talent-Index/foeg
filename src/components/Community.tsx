import { Button } from "@/components/ui/button";
import communityGroup from "@/assets/community-group.jpeg";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const Community = () => {
  return (
    <section id="community" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Community is the foundation
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              FOEG Labs is built with the community, not around it. We prioritize long-term participation, trust, and shared growth.
            </p>
            <Button 
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8"
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Join FOEG Labs
              </a>
            </Button>
          </div>

          {/* Community group photo */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src={communityGroup} 
              alt="FOEG Labs community group photo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;
