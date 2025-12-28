import { useState } from "react";

interface Partner {
  name: string;
  logoSrc: string | null; // Path relative to /logos/partners/ in public folder
  website: string;
}

// Data-driven partner list - add logos to /public/logos/partners/
const partners: Partner[] = [
  {
    name: "Avalanche",
    logoSrc: "/logos/partners/avalanche.png",
    website: "https://www.avax.network/",
  },
  {
    name: "BuidlGuidl",
    logoSrc: "/logos/partners/buidlguidl.png",
    website: "https://buidlguidl.com/",
  },
  {
    name: "Genesys",
    logoSrc: "/logos/partners/genesys.jpeg",
    website: "https://genesys.network/",
  },
  {
    name: "Fantom",
    logoSrc: "/logos/partners/fantom.jpeg",
    website: "https://fantom.foundation/",
  },
  {
    name: "Cartridge",
    logoSrc: null, // Add logo: /public/logos/partners/cartridge.svg
    website: "https://cartridge.gg/",
  },
  {
    name: "CloudPlexo",
    logoSrc: null, // Add logo: /public/logos/partners/cloudplexo.svg
    website: "https://www.cloudplexo.com/",
  },
];

const PartnerLogo = ({ partner }: { partner: Partner }) => {
  const [imgError, setImgError] = useState(false);

  if (!partner.logoSrc || imgError) {
    return (
      <span className="text-lg font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
        {partner.name}
      </span>
    );
  }

  return (
    <img
      src={partner.logoSrc}
      alt={`${partner.name} logo`}
      className="max-h-10 w-auto object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
      onError={() => setImgError(true)}
    />
  );
};

const PartnerEcosystem = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-display font-bold">Partner Ecosystem</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Trusted by leading organizations across Web3, gaming, fintech, and beyond
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.website}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center h-16 min-w-[120px] px-6 py-4 rounded-xl bg-background border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              aria-label={`Visit ${partner.name} website`}
            >
              <PartnerLogo partner={partner} />
            </a>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          Want to partner with FOEG Labs?{" "}
          <a 
            href="mailto:hello@foeglabs.com" 
            className="text-primary hover:underline"
          >
            Get in touch
          </a>
        </p>
      </div>
    </section>
  );
};

export default PartnerEcosystem;
