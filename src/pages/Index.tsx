import PlatformNav from "@/components/layout/PlatformNav";
import PlatformHero from "@/components/hero/PlatformHero";
import ProductPillars from "@/components/platform/ProductPillars";
import PlatformFooter from "@/components/layout/PlatformFooter";
import PartnerLogoWall from "@/components/PartnerLogoWall";
import TestimonialsShefiStyle from "@/components/TestimonialsShefiStyle";
import BuilderPathways from "@/components/BuilderPathways";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <PlatformHero />
      <ProductPillars />
      <BuilderPathways />
      <PartnerLogoWall />
      <TestimonialsShefiStyle />
      <PlatformFooter />
    </div>
  );
};

export default Index;
