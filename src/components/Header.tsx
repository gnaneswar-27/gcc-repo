import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isTransparent?: boolean;
}

const Header = ({ isTransparent = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExpanded((prev) => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: "Rooms & Suites", href: "/rooms-and-suites" },
    { label: "Restaurant & Bar", href: "/dining" },
    { label: "Golf", href: "/golf-course" },
    { label: "Spa & Wellness", href: "/spa-wellness" },
    { label: "Weddings", href: "/weddings" },
    { label: "Meetings & Events", href: "/meetings-and-events" },
    { label: "Special Offers", href: "/special-offers" },
    { label: "Gift Vouchers", href: "/gift-vouchers" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="announcement-bar fixed top-0 left-0 right-0 z-50 h-10 flex items-center justify-center bg-primary text-primary-foreground">
        <a
          href="/special-offers"
          className="hover:underline text-[11px] tracking-widest uppercase"
        >
          Life Is Suite — 10% Off Suite Stays | View Offer
        </a>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed left-0 right-0 z-40 transition-all duration-700 ease-in-out",
          "top-10",
          isScrolled || !isTransparent
            ? "bg-background/95 backdrop-blur-md shadow-elegant py-6"
            : "bg-transparent py-10",
        )}
      >
        <div className="flex items-center justify-between px-6 lg:px-16 max-w-[1800px] mx-auto">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "flex items-center gap-4 transition-colors duration-300",
              isScrolled || !isTransparent
                ? "text-foreground"
                : "text-primary-foreground",
            )}
          >
            <Menu className="w-6 h-6" />
            <span className="text-[11px] tracking-[0.3em] uppercase font-medium hidden md:inline">
              Menu
            </span>
          </button>

          {/* Auto-Animated Logo - Fixed Spacing */}
          <a
            href="/"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 text-center transition-all duration-500",
              isScrolled || !isTransparent
                ? "text-foreground"
                : "text-primary-foreground",
            )}
          >
            <div
              className={cn(
                "text-[10px] uppercase mb-2 opacity-80 transition-all duration-1000 ease-in-out",
                isExpanded ? "tracking-[0.7em]" : "tracking-[0.4em]",
              )}
            >
              ✦
            </div>

            <h1 className="font-serif text-2xl md:text-4xl flex items-center justify-center tracking-tight">
              {/* Word: Garstang */}
              <div
                className={cn(
                  "grid transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
                  isExpanded ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_0fr]",
                )}
              >
                <span className="relative">G</span>
                <span
                  className={cn(
                    "overflow-hidden transition-all duration-1000 ease-in-out whitespace-nowrap",
                    isExpanded ? "opacity-100 pr-4" : "opacity-0 pr-0",
                  )}
                >
                  arstang
                </span>
              </div>

              {/* Word: Country */}
              <div
                className={cn(
                  "grid transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
                  isExpanded ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_0fr]",
                )}
              >
                <span className="relative">C</span>
                <span
                  className={cn(
                    "overflow-hidden transition-all duration-1000 ease-in-out delay-75 whitespace-nowrap",
                    isExpanded ? "opacity-100 pr-4" : "opacity-0 pr-0",
                  )}
                >
                  ountry
                </span>
              </div>

              {/* Word: Club */}
              <div
                className={cn(
                  "grid transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden",
                  isExpanded ? "grid-cols-[auto_1fr]" : "grid-cols-[auto_0fr]",
                )}
              >
                <span className="relative">C</span>
                <span
                  className={cn(
                    "overflow-hidden transition-all duration-1000 ease-in-out delay-150 whitespace-nowrap",
                    isExpanded ? "opacity-100" : "opacity-0",
                  )}
                >
                  lub
                </span>
              </div>
            </h1>
          </a>

          {/* Book Button */}
          <a
            href="#book"
            className={cn(
              "flex items-center gap-3 px-6 py-3 text-[11px] tracking-[0.2em] uppercase font-medium transition-all duration-500 border",
              isScrolled || !isTransparent
                ? "bg-primary text-primary-foreground border-primary hover:bg-transparent hover:text-primary"
                : "bg-transparent text-primary-foreground border-primary-foreground/40 hover:bg-primary-foreground hover:text-foreground",
            )}
          >
            <span className="hidden sm:inline">Book Your Stay</span>
            <Calendar className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Side Menu & Overlay (Unchanged) */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full md:w-1/2 z-50 bg-background shadow-2xl transition-transform duration-500 ease-out",
          isMenuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between px-6 lg:px-12 py-8 border-b border-border">
            <div className="text-center">
              <div className="text-xs tracking-[0.3em] uppercase mb-1">✦</div>
              <h1 className="font-serif text-2xl tracking-wide">GCC</h1>
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="flex items-center gap-3 text-foreground"
            >
              <span className="text-xs tracking-[0.2em] uppercase font-medium">
                Close
              </span>
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex-1 px-8 lg:px-20 py-12 overflow-y-auto">
            <ul className="space-y-8">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-3xl font-light tracking-wide text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
