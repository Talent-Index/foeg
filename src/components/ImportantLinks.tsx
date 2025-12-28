import { useState } from "react";
import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const ImportantLinks = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke("send-partnership-email", {
        body: {
          name: formData.name,
          organization: formData.organization,
          email: formData.email,
          message: formData.message,
        },
      });

      if (error) throw error;

      toast({
        title: "Thank you!",
        description: "We've received your message and will get back to you.",
      });

      setFormData({ name: "", organization: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Something went wrong",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto bg-card rounded-2xl border border-border/50 shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Important Links */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
                Important Links
              </h2>
              <div className="space-y-6">
                <a
                  href="mailto:foeglabslimited@gmail.com"
                  className="flex items-center gap-4 group transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="text-foreground font-medium group-hover:text-primary group-hover:underline transition-colors">
                      foeglabslimited@gmail.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Join the Community</p>
                    <p className="text-foreground font-medium group-hover:text-primary group-hover:underline transition-colors">
                      Join FOEG Labs Community
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column - Partnership Form */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  Partner with FOEG Labs
                </h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Interested in collaborating, sponsoring, or building with us? Tell us a bit about you.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization / Company</Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Your organization (optional)"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">How would you like to partner with FOEG Labs? *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us about your partnership ideas..."
                    className="bg-background min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? "Sending..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportantLinks;
