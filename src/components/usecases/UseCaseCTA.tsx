import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const UseCaseCTA = () => {
  return (
    <section className="py-24 md:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-sans uppercase tracking-widest text-accent mb-4 font-medium">
            Ready to Deploy
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tight mb-6 leading-[1.1]">
            Your use case is{" "}
            <span className="italic opacity-60">next.</span>
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you're automating invoices, tracking supply chains, or tokenizing assets — FOEG deploys production-ready infrastructure tailored to your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full px-8 py-6 text-base bg-background text-foreground hover:bg-background/90"
            >
              <Link to="/enterprise">
                Book an AI Audit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-6 text-base border-background/30 text-background hover:bg-background/10"
            >
              <Link to="/enterprise">Talk to Our Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default UseCaseCTA;
