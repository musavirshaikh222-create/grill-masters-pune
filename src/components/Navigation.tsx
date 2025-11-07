import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const PHONE_NUMBER = "+918805022822";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/menu", label: "Menu" },
    { to: "/book-table", label: "Book Table" },
    { to: "/events", label: "Events & Offers" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  const handleCallNow = async (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>
  ) => {
    // Prevent default navigation so our logic runs first
    e.preventDefault();

    const telUrl = `tel:${PHONE_NUMBER}`;

    // basic mobile detection
    const isMobile =
      /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent || ""
      );

    try {
      if (isMobile) {
        // On mobile, navigate to tel: to open dialer
        window.location.href = telUrl;
        return;
      }

      // On desktop, try window.open first (some desktop setups may handle tel:)
      const newWindow = window.open(telUrl);
      if (newWindow) {
        // opened successfully (or the browser attempted to); done
        return;
      }

      // Fallback: copy to clipboard and inform the user
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PHONE_NUMBER);
        // Small visible fallback — replace with your toast if you have one
        alert(`Phone number copied to clipboard: ${PHONE_NUMBER}`);
      } else {
        // Very old browsers fallback
        alert(`Call: ${PHONE_NUMBER}`);
      }
    } catch (err) {
      // any error -> try clipboard then alert
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          await navigator.clipboard.writeText(PHONE_NUMBER);
          alert(`Phone number copied to clipboard: ${PHONE_NUMBER}`);
        } else {
          alert(`Call: ${PHONE_NUMBER}`);
        }
      } catch {
        alert(`Call: ${PHONE_NUMBER}`);
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt="Barbeque Experts Logo"
              className="h-20 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Call Now - desktop */}
            <a href={`tel:${PHONE_NUMBER}`} onClick={handleCallNow}>
              <Button variant="default" size="sm" className="ml-4">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-foreground" />
            ) : (
              <Menu className="w-6 h-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block py-3 text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === link.to ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Call Now - mobile menu */}
            <a href={`tel:${PHONE_NUMBER}`} onClick={handleCallNow}>
              <Button variant="default" size="sm" className="mt-4 w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
