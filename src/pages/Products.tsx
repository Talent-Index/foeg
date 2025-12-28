import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

// Product cover images
import kssCover from "@/assets/products/kss-cover.jpeg";
import miniHackCover from "@/assets/products/mini-hack-cover.jpeg";
import spotlightCover from "@/assets/products/spotlight-cover.jpeg";
import gocCover from "@/assets/products/goc-cover.png";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const products = [
  {
    title: "Knowledge Sharing Sessions",
    description:
      "Hands-on learning sessions that take builders from fundamentals to building and shipping. Community-led, practical, and consistent.",
    badge: "Learning",
    coverImage: kssCover,
    primaryLink: {
      label: "Learn More",
      url: "https://futuristic-dog-9aa.notion.site/Knowldge-Sharing-Sessions-2a61447232f181d182fec1d63817b3bd?pvs=149",
    },
    secondaryLink: {
      label: "Join Chat",
      url: "https://chat.whatsapp.com/DJig1JM2ZPiDTq5nvT0twT",
    },
    gradientVariant: 1 as const,
    featured: true,
  },
  {
    title: "Mini Hacks",
    description:
      "Short, high-intensity build sprints that help teams ship prototypes, win bounties, and build momentum in public.",
    badge: "Hackathons",
    coverImage: miniHackCover,
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
    badge: "Spotlight",
    coverImage: spotlightCover,
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
    badge: "Community",
    coverImage: gocCover,
    primaryLink: {
      label: "Join Community",
      url: "https://chat.whatsapp.com/GwHKpJQboXaE8ppKCe205W",
    },
    gradientVariant: 4 as const,
  },
];

const Products = () => {
  // Featured product (first one) and remaining products
  const [featuredProduct, ...remainingProducts] = products;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6">
            Build with FOEG Labs
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our programs for builders, founders, and community-led growth.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4">
        <div className="h-px bg-border" />
      </div>

      {/* Intro + Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column - Intro Text */}
            <div className="lg:col-span-4 space-y-6">
              <h2 className="text-2xl font-serif font-semibold text-foreground">
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
                {/* Featured Product - Spans 2 columns */}
                <div className="md:col-span-2 animate-fade-up">
                  <ProductCard
                    title={featuredProduct.title}
                    description={featuredProduct.description}
                    badge={featuredProduct.badge}
                    coverImage={featuredProduct.coverImage}
                    primaryLink={featuredProduct.primaryLink}
                    secondaryLink={featuredProduct.secondaryLink}
                    gradientVariant={featuredProduct.gradientVariant}
                    featured={true}
                  />
                </div>

                {/* Remaining Products */}
                {remainingProducts.map((product, index) => (
                  <div
                    key={index}
                    className="animate-fade-up"
                    style={{ animationDelay: `${(index + 1) * 0.1}s` }}
                  >
                    <ProductCard
                      title={product.title}
                      description={product.description}
                      badge={product.badge}
                      coverImage={product.coverImage}
                      primaryLink={product.primaryLink}
                      secondaryLink={product.secondaryLink}
                      gradientVariant={product.gradientVariant}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card rounded-3xl border border-border p-8 md:p-12 hover:border-primary/40 transition-all duration-300 hover:shadow-lg">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wide bg-primary/10 text-primary mb-4">
                  Events
                </span>
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  Workshops, Hacks & Community Activations
                </h3>
                <p className="text-muted-foreground max-w-xl">
                  See upcoming and past FOEG Labs events, workshops, and
                  community activations across Africa.
                </p>
              </div>
              <div className="flex gap-3">
                <Button
                  asChild
                  className="rounded-full px-6 hover-lift"
                >
                  <Link to="/events">
                    View Events
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full px-6 border-foreground/20"
                >
                  <a
                    href="https://lu.ma/foeg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Luma
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
