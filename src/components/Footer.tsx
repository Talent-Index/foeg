import { Link, useLocation } from "react-router-dom";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz";

const Footer = () => {
  const location = useLocation();

const footerLinks = [
    { label: "Home", href: "/" },
    { label: "Events", href: "/events" },
    { label: "Partners", href: "/#partners" },
    { label: "Testimonials", href: "/#testimonials" },
    { label: "Community", href: WHATSAPP_URL, external: true },
  ];

  const handleClick = (href: string) => {
    if (href.startsWith("/#") && location.pathname === "/") {
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <span className="font-display font-bold text-lg text-foreground">
              FOEG Labs
            </span>
            <p className="text-sm text-muted-foreground mt-1">
              Frontier of Ecosystem Growth
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : link.href.startsWith("/#") ? (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    if (location.pathname === "/") {
                      e.preventDefault();
                      handleClick(link.href);
                    }
                  }}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FOEG Labs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
