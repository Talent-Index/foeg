import Navigation from "@/components/Navigation";
import HeroShefiStyle from "@/components/HeroShefiStyle";
import WhoItsFor from "@/components/WhoItsFor";
import BuilderPathways from "@/components/BuilderPathways";
import ByTheNumbers from "@/components/ByTheNumbers";
import PartnerLogoWall from "@/components/PartnerLogoWall";
import TestimonialsShefiStyle from "@/components/TestimonialsShefiStyle";
import FinalCTAShefi from "@/components/FinalCTAShefi";
import ImportantLinks from "@/components/ImportantLinks";
import Footer from "@/components/Footer";
import NewYearBanner from "@/components/NewYearBanner";
import { useConfetti } from "@/hooks/useConfetti";

const Index = () => {
  // Trigger confetti on first visit
  useConfetti();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <NewYearBanner />
      <HeroShefiStyle />
      <WhoItsFor />
      <BuilderPathways />
      <ByTheNumbers />
      <PartnerLogoWall />
      <TestimonialsShefiStyle />
      <FinalCTAShefi />
      <ImportantLinks />
      <Footer />
    </div>
  );
};

export default Index;