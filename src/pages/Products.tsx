import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import foegLogo from "@/assets/foeg-logo.png";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const products = [
  {
    title: "Knowledge Sharing Sessions",
    description:
      "Hands-on learning sessions that take builders from fundamentals to building and shipping. Community-led, practical, and consistent.",
    primaryLink: {
      label: "Learn More",
      url: "https://futuristic-dog-9aa.notion.site/Knowldge-Sharing-Sessions-2a61447232f181d182fec1d63817b3bd?pvs=149",
    },
    secondaryLink: {
      label: "Join Chat",
      url: "https://chat.whatsapp.com/DJig1JM2ZPiDTq5nvT0twT",
    },
    gradientVariant: 1 as const,
  },
  {
    title: "Mini Hacks",
    description:
      "Short, high-intensity build sprints that help teams ship prototypes, win bounties, and build momentum in public.",
    primaryLink: {
      label: "Learn More",
      url: "https://futuristic-dog-9aa.notion.site/Hackers-Handbook-2761447232f18031b177e8d834ea5b9a?pvs=149",
    },
    gradientVariant: 2 as const,
  },
  {
    title: "Startup Founders Spotlight",
    description:
      "A visibility layer for builders becoming founders — featuring early-stage projects, demos, and ecosystem discovery.",
    primaryLink: {
      label: "Learn More",
      url: "https://futuristic-dog-9aa.notion.site/2a11447232f1807cb668e8c93fda9336?pvs=149",
    },
    gradientVariant: 3 as const,
  },
  {
    title: "Girls On Chain",
    description:
      "A community and support space for girls and women to learn, build confidence, and grow in web3 and tech.",
    primaryLink: {
      label: "Join Community",
      url: "https://chat.whatsapp.com/GwHKpJQboXaE8ppKCe205W",
    },
    gradientVariant: 4 as const,
  },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-24">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="flex items-start gap-6 mb-8">
            <img
              src={foegLogo}
              alt="FOEG Labs"
              className="h-16 w-auto hidden md:block"
            />
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-foreground">
                Build with FOEG Labs
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Programs designed for builders, founders, and community-led growth.
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-16" />

          {/* Intro Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Intro Text */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-2xl font-display font-semibold text-foreground">
                FOEG Labs Products
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                FOEG Labs is a community-led ecosystem growth platform. Explore
                programs built to help builders learn, ship, and gain visibility —
                while helping founders and communities grow together.
              </p>
              <Button
                asChild
                className="rounded-full px-6 hover-lift"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Join FOEG Labs Community
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>

            {/* Right Column - Product Cards Grid */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product, index) => (
                  <ProductCard
                    key={index}
                    title={product.title}
                    description={product.description}
                    primaryLink={product.primaryLink}
                    secondaryLink={product.secondaryLink}
                    gradientVariant={product.gradientVariant}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* More from FOEG Labs - Events Section */}
          <div className="mt-24">
            <div className="border border-border rounded-xl p-8 md:p-12 bg-card hover:border-primary/50 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-wide text-foreground mb-3">
                    Events
                  </h3>
                  <p className="text-muted-foreground max-w-xl">
                    See upcoming and past FOEG Labs events, workshops, and
                    community activations.
                  </p>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 hover-lift shrink-0"
                >
                  <Link to="/events">
                    View Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Products;
