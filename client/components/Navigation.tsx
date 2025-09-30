import { Button } from "./ui/button";
import { Phone, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = () => {
      setIsMobileMenuOpen(false);
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Career", path: "/career" },
    { name: "Contact", path: "/contact" },
    { name: "Spare Parts", path: "/parts" },
  ];

  const phoneNumber = "+918349180078";
  const handleGetQuote = () => {
    const text = encodeURIComponent(
      "Hello CBG Team, I’d like an inspection quote. Name:  Phone/WhatsApp:  Vehicle Make/Model/Year:  Preferred Date: "
    );
    const waUrl = `https://wa.me/${phoneNumber.replace("+", "")}?text=${text}`;
    window.open(waUrl, "_blank");
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
        <div className="container flex h-16 items-center justify-between px-4">
          {/* Logo - Optimized for Mobile */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="flex h-8 w-8 sm:h-10 sm:w-10 aspect-square items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fbd3eb5f66ce348d78b8b8fc379cafda2%2Fc14688899dc24257bfabd1bc46784cc6?format=webp&width=800"
                alt="CBG logo"
                className="h-full w-full object-contain"
              />
            </div>
            <div className="hidden xs:block sm:block">
              <h1 className="text-lg sm:text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                Check Before Go
              </h1>
              <p className="text-xs text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">
                Pre-Delivery Inspection • Spare Parts Experts
              </p>
            </div>
            {/* Mobile-only full name (smaller) */}
            <div className="block xs:hidden leading-tight">
              <h1 className="text-base font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
                Check Before Go
              </h1>
              <p className="text-[10px] text-muted-foreground transition-colors duration-300 group-hover:text-primary/70">
                PDI • Spare Parts Experts
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-all duration-300 hover:text-primary hover:scale-105 transform relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full ${
                  location.pathname === item.path
                    ? "text-primary after:w-full"
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* Get Quote - Hidden on small screens */}
            <Button
              size="sm"
              className="hidden lg:flex transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              onClick={handleGetQuote}
            >
              <Phone className="h-4 w-4 mr-2 transition-transform duration-300 hover:rotate-12" />
              Get Quote
            </Button>

            {/* Mobile Get Quote */}
            <Button
              size="sm"
              className="hidden sm:flex lg:hidden transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
              onClick={handleGetQuote}
            >
              <Phone className="h-4 w-4" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              size="sm"
              variant="ghost"
              className="lg:hidden transition-all duration-300 hover:scale-105 hover:shadow-md transform"
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t bg-background/98 backdrop-blur-md animate-in slide-in-from-top-2 duration-300">
            <div className="container px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`text-base font-medium py-3 px-4 rounded-lg transition-all duration-300 hover:bg-primary/10 hover:text-primary transform hover:translate-x-2 ${
                      location.pathname === item.path
                        ? "text-primary bg-primary/5 border-l-4 border-primary"
                        : "text-muted-foreground"
                    }`}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: 'fadeInUp 0.3s ease-out forwards'
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Mobile Get Quote Button */}
                <div className="pt-4 border-t border-border/50">
                  <Button
                    className="w-full transition-all duration-300 hover:scale-105 hover:shadow-lg transform"
                    onClick={() => {
                      handleGetQuote();
                      setIsMobileMenuOpen(false);
                    }}
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    Get Quote Now
                  </Button>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
