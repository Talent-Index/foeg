const partners = [
  { name: "BuidlGuidl", url: "https://buidlguidl.com" },
  { name: "Sui", url: "https://sui.io" },
  { name: "Scaffold-ETH", url: "https://scaffoldeth.io" },
  { name: "Curvegrid", url: "https://www.curvegrid.com" },
  { name: "CloudPlexo", url: "https://www.cloudplexo.com" },
  { name: "HackQuest", url: "https://hackquest.io" },
  { name: "Adamur", url: "#" },
  { name: "Project Mocha", url: "#" },
  { name: "Girl Code", url: "#" },
  { name: "Girls On-Chain", url: "#" },
  { name: "SSI", url: "#" },
];

const PartnerLogoWall = () => {
  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        {/* Title with serif styling like SheFi */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-center mb-16">
          Partner Ecosystem
        </h2>

        {/* Logo wall grid */}
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 max-w-5xl mx-auto mb-12">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-lg transition-all duration-300 hover:bg-foreground/5"
            >
              <span className="text-lg md:text-xl font-medium text-foreground/50 group-hover:text-foreground transition-colors duration-300">
                {partner.name}
              </span>
            </a>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto">
          Logos shown represent collaborations, venues, community partners, and ecosystem support.
        </p>
      </div>
    </section>
  );
};

export default PartnerLogoWall;