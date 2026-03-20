import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import foegLogo from "@/assets/foeg-logo.png";
import ThemeToggle from "@/components/ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const WHATSAPP_URL = "https://chat.whatsapp.com/FphprlAP6S6LqrwOIc1nXz?mode=gi_t";
const TALENT_URL = "https://talent-index-ke.vercel.app/";

const platformDropdown = [
  { label: "FOEG Enterprise", desc: "AI + blockchain enterprise systems", href: "/enterprise" },
  { label: "FOEG Infrastructure", desc: "Developer APIs, agents & tooling", href: "/developers" },
  { label: "Talent Index", desc: "Global builder network", href: TALENT_URL, external: true },
  { label: "Ecosystem Programs", desc: "Protocol & venture partnerships", href: "/ecosystem" },
];

const navLinks = [
  { label: "Platform", href: "/platform", hasDropdown: true },
  { label: "Use Cases", href: "/use-cases" },
  { label: "Solutions", href: "/enterprise" },
  { label: "Developers", href: "/developers" },
  { label: "Talent", href: TALENT_URL, external: true },
  { label: "Research", href: "/research" },
];

const PlatformNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass border-b border-border/50 py-3" : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={foegLogo} alt="FOEG Labs Logo" className="h-9 w-auto" />
            <span className="font-display text-lg text-foreground">FOEG Labs</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} ref={dropdownRef} className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                      location.pathname === link.href
                        ? "text-foreground bg-muted/50"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.96 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-80 bg-card border border-border rounded-xl shadow-xl p-2"
                      >
                        {platformDropdown.map((item) =>
                          item.external ? (
                            <a
                              key={item.label}
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <span className="text-sm font-medium text-foreground">{item.label}</span>
                              <span className="text-xs text-muted-foreground">{item.desc}</span>
                            </a>
                          ) : (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="flex flex-col gap-0.5 px-4 py-3 rounded-lg hover:bg-muted/50 transition-colors"
                            >
                              <span className="text-sm font-medium text-foreground">{item.label}</span>
                              <span className="text-xs text-muted-foreground">{item.desc}</span>
                            </Link>
                          )
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-medium rounded-full transition-colors text-muted-foreground hover:text-foreground hover:bg-muted/30"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    location.pathname === link.href
                      ? "text-foreground bg-muted/50"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/30"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild variant="outline" size="sm" className="rounded-full text-sm border-border">
              <Link to="/developers">Docs</Link>
            </Button>
            <Button asChild size="sm" className="rounded-full text-sm">
              <Link to="/enterprise">Deploy With FOEG</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="mt-4 bg-card border border-border rounded-xl p-4 space-y-1">
                <p className="px-3 py-2 text-xs font-sans uppercase tracking-wider text-muted-foreground">Platform</p>
                {platformDropdown.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      {item.label}
                    </Link>
                  )
                )}
                <div className="border-t border-border my-2" />
                {navLinks.filter((l) => !l.hasDropdown).map((link) =>
                  link.external ? (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="block px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted/30 transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                )}
                <div className="border-t border-border my-2" />
                <div className="flex gap-2 pt-1">
                  <Button asChild variant="outline" size="sm" className="flex-1 rounded-full">
                    <Link to="/developers">Docs</Link>
                  </Button>
                  <Button asChild size="sm" className="flex-1 rounded-full">
                    <Link to="/enterprise">Deploy With FOEG</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default PlatformNav;
