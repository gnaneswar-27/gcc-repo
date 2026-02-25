import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    hotel: [
      { label: "About", href: "/#about" },
      { label: "Rooms & Suites", href: "/rooms-and-suites" },
      { label: "Dining", href: "/dining" },
      { label: "Spa & Wellness", href: "/spa-wellness" },
    ],
    discover: [
      { label: "Special Offers", href: "/special-offers" },
      { label: "Golf Course", href: "/golf-course" },
      { label: "Events", href: "#events" },
      { label: "Gift Cards", href: "#gifts" },
    ],
    info: [
      { label: "Contact Us", href: "#contact" },
      { label: "Careers", href: "#careers" },
      { label: "Press", href: "#press" },
      { label: "Privacy Policy", href: "#privacy" },
    ],
  };

  return (
    <footer className="bg-foreground text-cream">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="text-xs tracking-[0.3em] uppercase mb-1 opacity-60">
                ✦
              </div>
              <h2 className="font-serif text-2xl tracking-wide" title="Golf Country Club">Our GCC</h2>
            </div>
            <address className="not-italic text-sm leading-relaxed opacity-80 mb-6">
              16 Mount Street<br />
              Mayfair, London<br />
              W1K 2AT, United Kingdom
            </address>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+442074995400"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                +44 (0)20 7499 5400
              </a>
              <a
                href="mailto:info@gcc.com"
                className="block opacity-80 hover:opacity-100 transition-opacity"
              >
                info@gcc.com
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 opacity-60">
              The Hotel
            </h3>
            <ul className="space-y-3">
              {footerLinks.hotel.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 opacity-60">
              Discover
            </h3>
            <ul className="space-y-3">
              {footerLinks.discover.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs tracking-[0.2em] uppercase mb-6 opacity-60">
              Information
            </h3>
            <ul className="space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-cream/10">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs opacity-60">
              © {currentYear} Our GCC. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#instagram"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#facebook"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#twitter"
                className="opacity-60 hover:opacity-100 transition-opacity"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
