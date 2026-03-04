import PlatformNav from "@/components/layout/PlatformNav";
import PlatformFooter from "@/components/layout/PlatformFooter";
import ProductPillars from "@/components/platform/ProductPillars";
import { motion } from "framer-motion";

const Platform = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlatformNav />
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">Platform Overview</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-tight">
              The complete infrastructure for{" "}
              <span className="text-muted-foreground">building the future.</span>
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
              FOEG Labs provides the tools, talent, and ecosystem access enterprises and builders need to ship AI and Web3 systems at scale.
            </p>
          </motion.div>
        </div>
      </section>
      <ProductPillars />
      <PlatformFooter />
    </div>
  );
};

export default Platform;
