import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ExternalLink } from "lucide-react";
import miniHackCover from "@/assets/events/mini-hack-cover.png";
import gameJamCover from "@/assets/events/game-jam-cover.jpg";
import agiTrackCover from "@/assets/events/agi-track-cover.jpg";


const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

interface Event {
  id: string;
  title: string;
  coverImage: string;
  host: string;
  location?: string;
  attendance: string;
  lumaUrl: string;
  type: "in-person" | "virtual";
}

const events: Event[] = [
  {
    id: "1",
    title: "Mini Hack",
    coverImage: miniHackCover,
    host: "Curvegrid & Frontier Of Ecosystem Growth",
    location: "Nairobi",
    attendance: "261 Went",
    lumaUrl: "https://luma.com/caihohrb",
    type: "in-person",
  },
  {
    id: "2",
    title: "Game Jam VII | Dojo",
    coverImage: gameJamCover,
    host: "Frontier Of Ecosystem Growth",
    location: "Antler East Africa, ABC Place, Nairobi",
    attendance: "66 Going",
    lumaUrl: "https://luma.com/bhky36dq",
    type: "in-person",
  },
  {
    id: "3",
    title: "Nairobi Blockchain Week: AGI Track",
    coverImage: agiTrackCover,
    host: "Frontier Of Ecosystem Growth",
    attendance: "110 Went",
    lumaUrl: "https://luma.com/yjzecwnk",
    type: "virtual",
  },
];

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-200 group">
      {/* Cover Image */}
      <div className="aspect-square overflow-hidden">
        <img 
          src={event.coverImage} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-display font-semibold text-foreground leading-tight">
          {event.title}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          Presented by {event.host}
        </p>
        
        <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
          {event.location && (
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {event.location}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {event.attendance}
          </span>
        </div>
        
        <div className="flex gap-3 pt-2">
          <Button 
            asChild
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full flex-1"
          >
            <a href={event.lumaUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Luma
            </a>
          </Button>
          <Button 
            asChild
            size="sm"
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 rounded-full"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Join
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const Events = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
              Events
            </h1>
            <p className="text-lg text-muted-foreground">
              Community-led meetups, hack nights, workshops, and tracks.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {events.map((event, index) => (
              <div 
                key={event.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
