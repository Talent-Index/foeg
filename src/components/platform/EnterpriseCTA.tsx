import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const EnterpriseCTA = () => {
  return (
    <section className="py-24 md:py-32 border-t border-border">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-medium tracking-tight mb-6">
            Build infrastructure{" "}
            <span className="text-muted-foreground">for your business.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            FOEG Labs helps enterprises deploy AI systems, blockchain infrastructure, and automation pipelines tailored to their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="rounded-full px-8 py-6 text-base bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to="/enterprise">
                Request Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full px-8 py-6 text-base border-border hover:bg-muted/50">
              <Link to="/enterprise">Talk to Enterprise Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnterpriseCTA;
