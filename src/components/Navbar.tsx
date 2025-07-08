import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate the point where navbar should become solid
      const triggerPoint = window.innerHeight * 0.8; // 80% of viewport height
      setIsScrolled(window.scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Accueil", href: "#hero", icon: null },
    { label: "Objectifs", href: "#objectives", icon: null },
    { label: "Thèmes", href: "#themes", icon: null },
    { label: "Soumission", href: "#submission", icon: null },
    { label: "Comité", href: "#committee", icon: null },
    { label: "Contact", href: "#contact", icon: null },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-sm border-b border-gray-200"
          : "bg-transparent backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <h1
              className={`text-xl font-bold ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              EDD3E
            </h1>
            <p
              className={`text-xs hidden sm:block ${
                isScrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              Colloque International
            </p>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`flex items-center gap-2 text-sm font-medium ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white/90 hover:text-white"
                } transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              className={isScrolled ? "" : "text-white hover:bg-white/10"}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div
            className={`md:hidden ${
              isScrolled
                ? "bg-white border-t border-gray-200"
                : "bg-black/30 backdrop-blur-lg border-t border-white/10"
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`flex items-center px-3 py-2 text-sm font-medium ${
                    isScrolled
                      ? "text-foreground hover:bg-accent"
                      : "text-white hover:bg-white/10"
                  } rounded-md transition-colors`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
