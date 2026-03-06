import PlatformNav from "@/components/layout/PlatformNav";
import PlatformHero from "@/components/hero/PlatformHero";
import PlatformAudience from "@/components/platform/PlatformAudience";
import InfrastructureStack from "@/components/platform/InfrastructureStack";
import ProductPillars from "@/components/platform/ProductPillars";
import IndustrySolutions from "@/components/platform/IndustrySolutions";
import HomepageCaseStudies from "@/components/platform/HomepageCaseStudies";
import HomepageTalent from "@/components/platform/HomepageTalent";
import TrustedEcosystem from "@/components/platform/TrustedEcosystem";
import PlatformFlywheel from "@/components/platform/PlatformFlywheel";
import EnterpriseCTA from "@/components/platform/EnterpriseCTA";
import PlatformFooter from "@/components/layout/PlatformFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <PlatformHero />
      <PlatformAudience />
      <InfrastructureStack />
      <ProductPillars />
      <IndustrySolutions />
      <HomepageCaseStudies />
      <HomepageTalent />
      <TrustedEcosystem />
      <PlatformFlywheel />
      <EnterpriseCTA />
      <PlatformFooter />
    </div>
  );
};

export default Index;
