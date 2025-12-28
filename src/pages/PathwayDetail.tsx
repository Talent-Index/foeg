import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Bot, Boxes, Coins, Gamepad2, LineChart, Wrench, Users, Mic, CheckCircle, BookOpen, Zap, Target } from "lucide-react";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const pathwaysData: Record<string, {
  icon: typeof Bot;
  title: string;
  description: string;
  subtext: string;
  whoItsFor: string[];
  skills: string[];
  tools: string[];
  programs: { name: string; description: string }[];
}> = {
  "ai-agentic-systems": {
    icon: Bot,
    title: "AI & Agentic Systems",
    description: "Build LLM-powered products, autonomous agents, and AI-native workflows that are transforming how we interact with technology.",
    subtext: "LLMs · Agentic AI · AI × Web3 · Automation",
    whoItsFor: [
      "Developers building AI-first applications",
      "Founders creating autonomous agent products",
      "Engineers integrating LLMs into Web3 protocols",
      "Builders exploring AI × crypto intersections",
    ],
    skills: [
      "Prompt engineering & LLM orchestration",
      "Agent architecture design",
      "RAG systems & vector databases",
      "AI model fine-tuning",
      "Multi-agent coordination",
    ],
    tools: [
      "OpenAI, Anthropic, Gemini APIs",
      "LangChain, LlamaIndex",
      "Pinecone, Weaviate",
      "CrewAI, AutoGen",
      "Hugging Face Transformers",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "Weekly deep-dives into AI architectures and agent patterns" },
      { name: "Mini Hacks", description: "48-hour AI agent build sprints with bounties" },
      { name: "Startup Founder Spotlights", description: "Demo days for AI-native startups" },
      { name: "Talent Index", description: "Get discovered by AI companies and protocols" },
    ],
  },
  "infrastructure-protocols": {
    icon: Boxes,
    title: "Infrastructure & Protocols",
    description: "Design and deploy the foundational rails powering Web3 applications and decentralized networks.",
    subtext: "L1s · AppChains · Indexing · Oracles",
    whoItsFor: [
      "Protocol engineers building L1s/L2s",
      "Infrastructure developers",
      "Indexing and data specialists",
      "Oracle and bridge builders",
    ],
    skills: [
      "Consensus mechanism design",
      "Smart contract optimization",
      "Cross-chain communication",
      "Data indexing & querying",
      "Node operation & DevOps",
    ],
    tools: [
      "Substrate, Cosmos SDK",
      "The Graph, Goldsky",
      "Chainlink, Pyth",
      "Foundry, Hardhat",
      "Docker, Kubernetes",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "Deep protocol architecture workshops" },
      { name: "Mini Hacks", description: "Infrastructure hackathons with protocol partners" },
      { name: "Startup Founder Spotlights", description: "Visibility for infra startups" },
      { name: "Talent Index", description: "Connect with protocol teams hiring" },
    ],
  },
  "defi-stablecoins": {
    icon: Coins,
    title: "DeFi & Stablecoins",
    description: "Build financial primitives, payment rails, and on-chain economic systems that power the new financial stack.",
    subtext: "DeFi · Stablecoins · RWAs · Payments",
    whoItsFor: [
      "DeFi protocol developers",
      "Financial engineers",
      "Stablecoin architects",
      "Payment infrastructure builders",
    ],
    skills: [
      "AMM & liquidity pool design",
      "Lending protocol mechanics",
      "Stablecoin architecture",
      "RWA tokenization",
      "MEV protection strategies",
    ],
    tools: [
      "Uniswap, Aave, Compound",
      "Circle, Tether APIs",
      "Chainlink Price Feeds",
      "OpenZeppelin Contracts",
      "DeFi Llama Analytics",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "DeFi mechanism design workshops" },
      { name: "Mini Hacks", description: "Build DeFi primitives in 48 hours" },
      { name: "Startup Founder Spotlights", description: "DeFi startup demo days" },
      { name: "Talent Index", description: "Get hired by top DeFi protocols" },
    ],
  },
  "gaming-creator-economies": {
    icon: Gamepad2,
    title: "Gaming & Creator Economies",
    description: "Create immersive on-chain games and creator monetization platforms that redefine digital ownership.",
    subtext: "GameFi · NFTs · Creator Tools",
    whoItsFor: [
      "Game developers going on-chain",
      "NFT and digital collectible creators",
      "Creator economy builders",
      "Metaverse architects",
    ],
    skills: [
      "On-chain game mechanics",
      "NFT smart contracts",
      "Token-gated experiences",
      "Creator monetization models",
      "Unity/Unreal blockchain integration",
    ],
    tools: [
      "Unity, Unreal Engine",
      "Dojo, MUD frameworks",
      "OpenSea, Blur APIs",
      "IPFS, Arweave",
      "Starknet, Immutable X",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "GameFi design pattern workshops" },
      { name: "Mini Hacks", description: "Game jam hackathons" },
      { name: "Startup Founder Spotlights", description: "Gaming startup showcases" },
      { name: "Talent Index", description: "Connect with gaming studios" },
    ],
  },
  "trading-quant-systems": {
    icon: LineChart,
    title: "Trading & Quant Systems",
    description: "Build analytics, trading bots, and portfolio intelligence tools for crypto and traditional markets.",
    subtext: "Crypto · Stocks · Signals · Risk Models",
    whoItsFor: [
      "Quantitative traders and analysts",
      "Trading bot developers",
      "Risk model engineers",
      "Data scientists in finance",
    ],
    skills: [
      "Algorithmic trading strategies",
      "Market microstructure analysis",
      "Risk modeling & backtesting",
      "Real-time data processing",
      "Portfolio optimization",
    ],
    tools: [
      "Python, pandas, numpy",
      "ccxt, alpaca-trade-api",
      "TradingView, Dune Analytics",
      "Binance, FTX APIs",
      "QuantConnect, Zipline",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "Quant strategy workshops" },
      { name: "Mini Hacks", description: "Trading bot competitions" },
      { name: "Startup Founder Spotlights", description: "Fintech startup demos" },
      { name: "Talent Index", description: "Get hired by trading firms" },
    ],
  },
  "tools-dev-experience": {
    icon: Wrench,
    title: "Tools & Dev Experience",
    description: "Build tools for builders — SDKs, APIs, dashboards, and platforms that make developers more productive.",
    subtext: "DX · APIs · Analytics · Open Source",
    whoItsFor: [
      "Developer tools engineers",
      "Open source maintainers",
      "API and SDK builders",
      "DevRel professionals",
    ],
    skills: [
      "API design & documentation",
      "SDK development",
      "CLI tool building",
      "Developer analytics",
      "Open source community management",
    ],
    tools: [
      "TypeScript, Rust",
      "GraphQL, REST",
      "Swagger, Postman",
      "GitHub Actions, Vercel",
      "Mintlify, ReadMe",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "DevTools architecture sessions" },
      { name: "Mini Hacks", description: "Build developer tools in public" },
      { name: "Startup Founder Spotlights", description: "DevTools startup showcases" },
      { name: "Talent Index", description: "Connect with DevTools companies" },
    ],
  },
  "operators-community-leads": {
    icon: Users,
    title: "Operators & Community Leads",
    description: "Run ecosystems, DAOs, communities, and on-ground programs that grow and sustain Web3 networks.",
    subtext: "Community Ops · DAO Ops · Growth",
    whoItsFor: [
      "Community managers and leads",
      "DAO operators and coordinators",
      "Ecosystem growth managers",
      "Event organizers and activators",
    ],
    skills: [
      "Community building strategies",
      "DAO governance frameworks",
      "Ambassador program design",
      "Ecosystem metrics & KPIs",
      "Cross-community partnerships",
    ],
    tools: [
      "Discord, Telegram bots",
      "Snapshot, Tally",
      "Notion, Coordinape",
      "Dework, Wonderverse",
      "Guild.xyz, Collab.Land",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "Community ops masterclasses" },
      { name: "Mini Hacks", description: "DAO tooling sprints" },
      { name: "Startup Founder Spotlights", description: "Community-led project showcases" },
      { name: "Talent Index", description: "Get hired as community lead" },
    ],
  },
  "events-media-storytellers": {
    icon: Mic,
    title: "Events, Media & Ecosystem Storytellers",
    description: "Produce events, media platforms, and ecosystem narratives that amplify Web3 and AI stories.",
    subtext: "Events · Content · Partnerships",
    whoItsFor: [
      "Event producers and organizers",
      "Content creators and journalists",
      "Podcast and video producers",
      "Partnership and BD professionals",
    ],
    skills: [
      "Event production & logistics",
      "Content strategy & creation",
      "Podcast/video production",
      "Ecosystem storytelling",
      "Partnership development",
    ],
    tools: [
      "Luma, Lu.ma",
      "Substack, Mirror",
      "Riverside, Descript",
      "Figma, Canva",
      "Notion, Airtable",
    ],
    programs: [
      { name: "Knowledge Sharing Sessions", description: "Media and storytelling workshops" },
      { name: "Mini Hacks", description: "Content creation sprints" },
      { name: "Startup Founder Spotlights", description: "Media startup showcases" },
      { name: "Talent Index", description: "Connect with media companies" },
    ],
  },
};

const PathwayDetail = () => {
  const { pathwayId } = useParams<{ pathwayId: string }>();
  const pathway = pathwayId ? pathwaysData[pathwayId] : null;

  if (!pathway) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="text-3xl font-display font-bold mb-4">Pathway Not Found</h1>
          <p className="text-muted-foreground mb-8">The pathway you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/#pathways">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Pathways
            </Link>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = pathway.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <Link 
            to="/#pathways" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Pathways
          </Link>

          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
              <Icon className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-3">
                {pathway.title}
              </h1>
              <p className="text-sm text-foreground/50 font-medium tracking-wide">
                {pathway.subtext}
              </p>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-3xl mb-8">
            {pathway.description}
          </p>

          <Button 
            asChild
            size="lg"
            className="rounded-full px-8 hover-lift"
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              Start This Pathway
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Button>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Who It's For */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Target className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Who This Pathway Is For
                </h2>
              </div>
              <ul className="space-y-3">
                {pathway.whoItsFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills You'll Gain */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Zap className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Skills You'll Gain
                </h2>
              </div>
              <ul className="space-y-3">
                {pathway.skills.map((skill, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools & Resources */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  Tools & Resources
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {pathway.tools.map((tool, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-secondary/50 text-secondary-foreground text-sm rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Connected Programs */}
            <div className="bg-card border border-border rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <BookOpen className="w-5 h-5 text-secondary-foreground" />
                </div>
                <h2 className="text-xl font-display font-semibold text-foreground">
                  FOEG Programs
                </h2>
              </div>
              <div className="space-y-4">
                {pathway.programs.map((program, index) => (
                  <div key={index} className="border-l-2 border-primary/30 pl-4">
                    <h3 className="font-semibold text-foreground">{program.name}</h3>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-primary-foreground mb-4">
              Ready to Start Building?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Join the FOEG Labs community and connect with builders, operators, and creators on the same pathway.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full px-8"
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  Join Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button 
                asChild
                size="lg"
                variant="outline"
                className="rounded-full px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/events">
                  View Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PathwayDetail;
