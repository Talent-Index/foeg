import Navigation from "@/components/Navigation";
import HeroShefiStyle from "@/components/HeroShefiStyle";
import WhoItsFor from "@/components/WhoItsFor";
import ByTheNumbers from "@/components/ByTheNumbers";
import PartnerLogoWall from "@/components/PartnerLogoWall";
import TestimonialsShefiStyle from "@/components/TestimonialsShefiStyle";
import FinalCTAShefi from "@/components/FinalCTAShefi";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroShefiStyle />
      <WhoItsFor />
      <ByTheNumbers />
      <PartnerLogoWall />
      <TestimonialsShefiStyle />
      <FinalCTAShefi />
      <Footer />
    </div>
  );
};

export default Index;