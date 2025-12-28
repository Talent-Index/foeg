import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import miniHackCover from "@/assets/events/mini-hack-cover.png";
import gameJamCover from "@/assets/events/game-jam-cover.jpg";
import agiTrackCover from "@/assets/events/agi-track-cover.jpg";
import womenConnectDuo from "@/assets/women-connect-duo.jpeg";
import awardsWinners from "@/assets/awards-winners.jpeg";
import womenConnectGroup from "@/assets/women-connect-group.jpeg";
import hackathonAudience from "@/assets/hackathon-audience.jpeg";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const HeroShefiStyle = () => {
  return (
    <section className="relative min-h-screen hero-gradient overflow-hidden">
      {/* Subtle floating shimmer effect in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-float-slow-delayed" />
      </div>

      {/* Left side images */}
      <div className="absolute left-0 top-0 h-full w-1/4 hidden lg:block pointer-events-none">
        <div className="absolute top-24 left-4 w-40 h-52 transform -rotate-6">
          <img 
            src={miniHackCover} 
            alt="Mini Hack event"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="absolute top-1/3 left-8 w-44 h-56 transform rotate-3">
          <img 
            src={gameJamCover} 
            alt="Game Jam event"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="absolute bottom-32 left-2 w-36 h-48 transform -rotate-3">
          <img 
            src={agiTrackCover} 
            alt="AGI Track event"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Right side images */}
      <div className="absolute right-0 top-0 h-full w-1/4 hidden lg:block pointer-events-none">
        <div className="absolute top-28 right-4 w-44 h-56 transform rotate-6">
          <img 
            src={womenConnectDuo} 
            alt="Women Connect event"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="absolute top-1/3 right-12 w-40 h-52 transform -rotate-3">
          <img 
            src={awardsWinners} 
            alt="Community awards winners"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="absolute bottom-36 right-6 w-36 h-48 transform rotate-2">
          <img 
            src={womenConnectGroup} 
            alt="Community group"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
        <div className="absolute bottom-16 right-20 w-48 h-32 transform -rotate-2">
          <img 
            src={hackathonAudience} 
            alt="Hackathon audience"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>

      {/* Center content */}
      <div className="relative z-10 container mx-auto px-4 pt-32 pb-32 min-h-screen flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-medium leading-[1.1] mb-8 max-w-4xl animate-fade-up">
          FOEG Labs is the <span className="italic">frontier</span> of ecosystem growth.
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          We support builders, founders, and communities to grow ideas into real products, teams, and opportunities.
        </p>

        <p className="text-sm md:text-base text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          Community-led programs • Events • Founder support • Partner activations
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Button 
            asChild
            size="lg" 
            className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-8 py-6 text-base font-medium hover-lift"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Join the FOEG Labs Community
            </a>
          </Button>
          <Button 
            asChild
            size="lg" 
            variant="outline"
            className="border-primary/30 text-foreground hover:bg-primary/5 hover:border-primary/50 rounded-full px-8 py-6 text-base"
          >
            <Link to="/events">
              Explore Events
            </Link>
          </Button>
        </div>
      </div>

      {/* Scrolling text marquee at bottom */}
      <div className="absolute bottom-0 left-0 right-0 py-6 overflow-hidden bg-gradient-to-t from-background/50 to-transparent">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="text-foreground/60 font-display italic text-xl md:text-2xl mx-8 uppercase tracking-widest">
              the frontier of ecosystem growth •
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroShefiStyle;