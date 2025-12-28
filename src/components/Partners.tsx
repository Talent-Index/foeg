const partners = [
  { name: "Curvegrid", url: "https://curvegrid.com" },
  { name: "Sui", url: "https://sui.io" },
  { name: "BuidlGuidl", url: "https://buidlguidl.com" },
  { name: "Antler", url: "https://antler.co" },
  { name: "Dojo", url: "https://www.dojoengine.org" },
  { name: "Cartridge", url: "https://cartridge.gg" },
  { name: "CloudPlexo", url: "https://www.cloudplexo.com" },
  { name: "Avalanche", url: "https://www.avax.network" },
  { name: "Team1", url: "https://www.team1.network" },
];

const Partners = () => {
  return (
    <section id="partners" className="py-24 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            In partnership with
          </h2>
          <p className="text-muted-foreground">
            Building alongside leading ecosystems and communities.
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 max-w-4xl mx-auto">
          {partners.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-lg border border-border bg-card hover:bg-muted transition-all duration-200"
            >
              <span className="text-muted-foreground group-hover:text-foreground font-medium transition-colors">
                {partner.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
