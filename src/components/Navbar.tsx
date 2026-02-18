import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/admissions", label: "Admissions" },
  { path: "/beyond-academics", label: "Beyond Academics" },
  { path: "/curriculum", label: "Curriculum" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80 border-b border-border shadow-sm transition-all duration-300">
      <div className="section-container">
        <div className="flex h-14 sm:h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <img
              src="assets/srmavericks-logo.png"
              alt="SR Mavericks Logo"
              className="h-9 w-9 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-lg object-cover transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
            />
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-base md:text-lg text-foreground transition-colors duration-300 group-hover:text-primary">
                SR MAVERICKS
              </span>
              <span className="font-bold text-sm md:text-base text-foreground transition-colors duration-300 group-hover:text-primary">
                <small>International School</small>
              </span>
            </div>
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <div key={link.path} className="flex items-center">
                <Link
                  to={link.path}
                  className={`relative px-3 py-2 text-sm font-medium rounded-md transition-all duration-300 overflow-hidden group ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  <span className="relative z-10">{link.label}</span>
                  <span
                    className={`absolute inset-0 bg-primary/5 transform transition-transform duration-300 ${
                      isActive(link.path)
                        ? "scale-100"
                        : "scale-0 group-hover:scale-100"
                    } rounded-md`}
                  />
                  <span
                    className={`absolute bottom-0 left-1/2 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 ${
                      isActive(link.path) ? "w-3/4" : "w-0 group-hover:w-3/4"
                    }`}
                  />
                </Link>
                {index < navLinks.length - 1 && (
                  <span className="mx-1 text-border">|</span>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button + Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link to="/contact">
              <Button className="hidden sm:flex bg-primary hover:bg-primary/90 text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-0.5">
                Enquire
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-1.5 sm:p-2 rounded-md hover:bg-muted transition-all duration-300 transform hover:scale-105"
              aria-label="Toggle menu"
            >
              <span className="block transition-transform duration-300">
                {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="lg:hidden py-3 sm:py-4 border-t border-border animate-fadeInUp">
            <div className="flex flex-col gap-0.5 sm:gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium rounded-md transition-all duration-300 transform hover:translate-x-2 ${
                    isActive(link.path)
                      ? "text-primary bg-primary/10"
                      : "text-foreground/80 hover:text-primary hover:bg-primary/5"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" onClick={() => setIsOpen(false)} className="mt-2 px-3 sm:px-0">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-xs sm:text-sm py-2 sm:py-2.5 transition-all duration-300 hover:shadow-lg">
                  Enquire Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
