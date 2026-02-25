import { useState, useEffect } from "react";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeaderProps {
  isTransparent?: boolean;
}

const Header = ({ isTransparent = true }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <div className="announcement-bar fixed top-0 left-0 right-0 z-50">
        <a href="/special-offers" className="hover:underline">
          Life Is Suite — 10% Off Suite Stays | View Offer
        </a>
      </div>

      {/* Main Header */}
      <header
        className={cn(
          "fixed top-10 left-0 right-0 z-40 transition-all duration-500",
          isScrolled || !isTransparent
            ? "bg-background/95 backdrop-blur-sm shadow-elegant"
            : "bg-transparent"
        )}
      >
        <div className="flex items-center justify-between px-6 lg:px-12 py-4">
          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className={cn(
              "flex items-center gap-3 transition-colors duration-300",
              isScrolled || !isTransparent
                ? "text-foreground"
                : "text-primary-foreground"
            )}
          >
            <Menu className="w-6 h-6" />
            <span className="text-xs tracking-[0.2em] uppercase font-medium hidden md:inline">
              Menu
            </span>
          </button>

          {/* Logo */}
          <a
            href="/"
            className={cn(
              "absolute left-1/2 -translate-x-1/2 text-center transition-colors duration-300",
              isScrolled || !isTransparent
                ? "text-foreground"
                : "text-primary-foreground"
            )}
          >
            <div className="text-xs tracking-[0.3em] uppercase mb-1 font-sans">
              ✦
            </div>
            <h1 className="font-serif text-2xl md:text-3xl tracking-wide" title="Golf Country Club">
              GCC
            </h1>
          </a>

          {/* Book Button */}
          <a
            href="#book"
            className={cn(
              "flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 text-[10px] md:text-xs tracking-[0.15em] uppercase font-medium transition-all duration-300",
              isScrolled || !isTransparent
                ? "bg-primary text-primary-foreground hover:bg-primary/90"
                : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground hover:text-foreground"
            )}
          >
            <span className="hidden sm:inline">Book</span>
            <Calendar className="w-4 h-4" />
          </a>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-500",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Side Menu - 50% width */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full w-full md:w-1/2 z-50 bg-background shadow-2xl transition-transform duration-500 ease-out",
          isMenuOpen
            ? "translate-x-0"
            : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 lg:px-12 py-6 border-b border-border">
            <a href="/" className="text-center">
              <div className="text-xs tracking-[0.3em] uppercase mb-1">✦</div>
              <h1 className="font-serif text-2xl tracking-wide" title="Golf Country Club">GCC</h1>
            </a>
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

          {/* Menu Content */}
          <nav className="flex-1 flex items-center px-6 lg:px-12 overflow-y-auto">
            <ul className="space-y-6 md:space-y-5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="font-serif text-3xl md:text-3xl lg:text-4xl font-light tracking-wide text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Menu Footer */}
          <div className="px-6 lg:px-12 py-6 border-t border-border">
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+442074995400" className="hover:text-primary transition-colors">
                +44 (0)20 7499 5400
              </a>
              <a href="mailto:info@gcc.com" className="hover:text-primary transition-colors">
                info@gcc.com
              </a>
              <p className="text-xs mt-2 opacity-70">16 Mount Street, London W1K 2AT</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
