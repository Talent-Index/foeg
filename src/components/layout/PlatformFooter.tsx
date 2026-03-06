import { Link } from "react-router-dom";
import foegLogo from "@/assets/foeg-logo.png";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "FOEG Enterprise", href: "/enterprise" },
      { label: "Infrastructure", href: "/developers" },
      { label: "Talent Index", href: "/talent" },
      { label: "Ecosystem", href: "/ecosystem" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/developers" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Research", href: "/research" },
      { label: "Events", href: "/events" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join WhatsApp", href: WHATSAPP_URL, external: true },
      { label: "Builder Pathways", href: "/#pathways" },
      { label: "Talent Network", href: "/talent" },
    ],
  },
];

const PlatformFooter = () => {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src={foegLogo} alt="FOEG Labs" className="h-8 w-auto" />
              <span className="font-display font-semibold text-foreground">FOEG Labs</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The infrastructure layer connecting enterprises with AI agents, blockchain systems, and elite builders.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
                {section.title}
              </p>
              <ul className="space-y-2.5">
                {section.links.map((link) =>
                  link.external ? (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ) : (
                    <li key={link.label}>
                      <Link
                        to={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FOEG Labs. Frontier of Ecosystem Growth.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Infrastructure for AI-Native Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PlatformFooter;
