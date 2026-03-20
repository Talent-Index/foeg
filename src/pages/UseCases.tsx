import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import UseCaseHero from "@/components/usecases/UseCaseHero";
import UseCaseGrid from "@/components/usecases/UseCaseGrid";
import UseCaseDetailSection from "@/components/usecases/UseCaseDetailSection";
import UseCaseCTA from "@/components/usecases/UseCaseCTA";

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <UseCaseHero />
      <UseCaseGrid />
      <UseCaseDetailSection />
      <UseCaseCTA />
      <PlatformFooter />
    </div>
  );
};

export default UseCases;
