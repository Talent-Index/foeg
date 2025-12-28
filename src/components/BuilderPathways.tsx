import { ArrowRight, Bot, Boxes, Coins, Gamepad2, LineChart, Wrench, Users, Mic } from "lucide-react";
import { Link } from "react-router-dom";

const pathways = [
  {
    id: "ai-agentic-systems",
    icon: Bot,
    title: "AI & Agentic Systems",
    description: "Build LLM-powered products, autonomous agents, and AI-native workflows.",
    subtext: "LLMs · Agentic AI · AI × Web3 · Automation",
    featured: true,
  },
  {
    id: "infrastructure-protocols",
    icon: Boxes,
    title: "Infrastructure & Protocols",
    description: "Design and deploy the rails powering Web3 applications and networks.",
    subtext: "L1s · AppChains · Indexing · Oracles",
  },
  {
    id: "defi-stablecoins",
    icon: Coins,
    title: "DeFi & Stablecoins",
    description: "Build financial primitives, payment rails, and on-chain economic systems.",
    subtext: "DeFi · Stablecoins · RWAs · Payments",
  },
  {
    id: "gaming-creator-economies",
    icon: Gamepad2,
    title: "Gaming & Creator Economies",
    description: "Create immersive on-chain games and creator monetization platforms.",
    subtext: "GameFi · NFTs · Creator Tools",
  },
  {
    id: "trading-quant-systems",
    icon: LineChart,
    title: "Trading & Quant Systems",
    description: "Build analytics, trading bots, and portfolio intelligence tools.",
    subtext: "Crypto · Stocks · Signals · Risk Models",
  },
  {
    id: "tools-dev-experience",
    icon: Wrench,
    title: "Tools & Dev Experience",
    description: "Build tools for builders — SDKs, APIs, dashboards, and platforms.",
    subtext: "DX · APIs · Analytics · Open Source",
  },
  {
    id: "operators-community-leads",
    icon: Users,
    title: "Operators & Community Leads",
    description: "Run ecosystems, DAOs, communities, and on-ground programs.",
    subtext: "Community Ops · DAO Ops · Growth",
  },
  {
    id: "events-media-storytellers",
    icon: Mic,
    title: "Events, Media & Ecosystem Storytellers",
    description: "Produce events, media platforms, and ecosystem narratives.",
    subtext: "Events · Content · Partnerships",
  },
];

const BuilderPathways = () => {
  return (
    <section id="pathways" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-4">
            BUILD YOUR PATHWAY
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-6">
            Real learning paths for builders, operators, and creators shaping the next generation of Web3 & AI ecosystems.
          </p>
          <p className="text-base text-foreground/70 leading-relaxed">
            FOEG Labs provides structured pathways that guide you from learning to building, shipping, and getting visible — across AI, Web3, and emerging tech ecosystems.
          </p>
        </div>

        {/* Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pathways.map((pathway, index) => {
            const Icon = pathway.icon;
            return (
              <Link
                key={pathway.id}
                to={`/pathways/${pathway.id}`}
                className={`group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 ${
                  pathway.featured 
                    ? "md:col-span-2 lg:col-span-1 ring-2 ring-primary/20" 
                    : ""
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Featured badge */}
                {pathway.featured && (
                  <div className="absolute -top-3 left-6 px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
                    Flagship
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  pathway.featured 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  <Icon className="w-6 h-6" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {pathway.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {pathway.description}
                </p>
                <p className="text-xs text-foreground/50 font-medium tracking-wide mb-4">
                  {pathway.subtext}
                </p>

                {/* CTA */}
                <div className="flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
                  Explore Pathway
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuilderPathways;
