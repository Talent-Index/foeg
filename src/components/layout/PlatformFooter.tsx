import { Link } from "react-router-dom";
import foegLogo from "@/assets/foeg-logo.png";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz?mode=gi_t";
const TALENT_URL = "https://talent-index-ke.vercel.app/";
const CONTACT_EMAIL = "foeglabslimited@gmail.com";

const footerSections = [
  {
    title: "Platform",
    links: [
      { label: "FOEG Enterprise", href: "/enterprise" },
      { label: "Infrastructure", href: "/developers" },
      { label: "Talent Index", href: TALENT_URL, external: true },
      { label: "Ecosystem", href: "/ecosystem" },
      { label: "Use Cases", href: "/use-cases" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Research", href: "/research" },
      { label: "Events", href: "/events" },
      { label: "Why FOEG", href: "/why-foeg" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Join WhatsApp", href: WHATSAPP_URL, external: true },
      { label: "Builder Pathways", href: "/#pathways" },
      { label: "Talent Network", href: TALENT_URL, external: true },
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
              <span className="font-display text-foreground">FOEG Labs</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              The infrastructure layer for AI-native businesses.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-accent hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <p className="text-xs font-sans uppercase tracking-widest text-muted-foreground mb-4 font-medium">
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
          <p className="text-xs text-muted-foreground italic font-display">
            Infrastructure for AI-Native Businesses
          </p>
        </div>
      </div>
    </footer>
  );
};

export default PlatformFooter;
