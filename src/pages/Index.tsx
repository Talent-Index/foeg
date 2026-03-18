import PlatformNav from "@/components/layout/PlatformNav";
import PlatformHero from "@/components/hero/PlatformHero";
import WhatWeDo from "@/components/platform/WhatWeDo";
import PlatformPositioning from "@/components/platform/PlatformPositioning";
import InfrastructureStack from "@/components/platform/InfrastructureStack";
import IndustrySolutions from "@/components/platform/IndustrySolutions";
import HomepageCaseStudies from "@/components/platform/HomepageCaseStudies";
import CommunityProof from "@/components/platform/CommunityProof";
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
      <WhatWeDo />
      <PlatformPositioning />
      <InfrastructureStack />
      <IndustrySolutions />
      <HomepageCaseStudies />
      <CommunityProof />
      <HomepageTalent />
      <TrustedEcosystem />
      <PlatformFlywheel />
      <EnterpriseCTA />
      <PlatformFooter />
    </div>
  );
};

export default Index;
