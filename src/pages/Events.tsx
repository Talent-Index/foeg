import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Users, ExternalLink } from "lucide-react";
import miniHackCover from "@/assets/events/mini-hack-cover.png";
import gameJamCover from "@/assets/events/game-jam-cover.jpg";
import agiTrackCover from "@/assets/events/agi-track-cover.jpg";
import starknetCover from "@/assets/events/starknet-basecamp-cover.jpg";


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
    host: "Frontier Of Ecosystem Growth",
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
    title: "Nairobi Blockchain Week AGI Track",
    coverImage: agiTrackCover,
    host: "Frontier Of Ecosystem Growth",
    attendance: "110 Went",
    lumaUrl: "https://luma.com/yjzecwnk",
    type: "virtual",
  },
  {
    id: "4",
    title: "Starknet Basecamp | Africa",
    coverImage: starknetCover,
    host: "Frontier Of Ecosystem Growth",
    attendance: "445 Went",
    lumaUrl: "https://luma.com/yok34k4o",
    type: "virtual",
  },
];

const EventCard = ({ event }: { event: Event }) => {
  return (
    <div className="bg-card rounded-3xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 group">
      {/* Cover Image */}
      <div className="aspect-video overflow-hidden">
        <img 
          src={event.coverImage} 
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      {/* Content */}
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-display font-semibold text-foreground leading-tight">
          {event.title}
        </h3>
        
        <p className="text-sm text-muted-foreground">
          Hosted by {event.host}
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
        
        <div className="flex gap-3 pt-3">
          <Button 
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full flex-1 hover-lift"
          >
            <a href={event.lumaUrl} target="_blank" rel="noopener noreferrer">
              View on Luma
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Button>
          <Button 
            asChild
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 rounded-full"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Join Community
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
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium mb-6">
            Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Workshops, hack nights, tracks, and community meetups.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
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

          {/* See all events link */}
          <div className="text-center mt-12">
            <a
              href="https://lu.ma/foeg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
            >
              More events on Luma
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
