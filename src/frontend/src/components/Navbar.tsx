import { Link, useRouterState } from "@tanstack/react-router";
import { MapPin, Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Contact", to: "/contact" },
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/98 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.10)] border-b border-slate-100"
          : "bg-transparent"
      }`}
      data-ocid="navbar"
    >
      <div
        className="container mx-auto px-4 h-18 flex items-center justify-between"
        style={{ height: "72px" }}
      >
        {/* Logo */}
        <Link
          to={"/" as any}
          className="flex items-center gap-3 group"
          data-ocid="navbar.logo_link"
          aria-label="Moshin Tour and Travels – Home"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-200">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div className="leading-tight">
            <span
              className={`block font-display font-bold text-[1rem] tracking-tight transition-colors duration-300 ${
                scrolled ? "text-slate-900" : "text-white"
              }`}
            >
              Moshin Tour
            </span>
            <span
              className={`block text-[0.6875rem] tracking-widest uppercase font-display transition-colors duration-300 ${
                scrolled ? "text-slate-400" : "text-white/60"
              }`}
            >
              &amp; Travels
            </span>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-2"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to as any}
              className={`relative px-4 py-2 text-[0.9375rem] font-medium tracking-wide transition-all duration-200 rounded-lg ${
                currentPath === link.to
                  ? scrolled
                    ? "text-blue-600"
                    : "text-white"
                  : scrolled
                    ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
              data-ocid={`navbar.${link.label.toLowerCase()}_link`}
            >
              {link.label}
              {currentPath === link.to && (
                <span className="absolute bottom-0.5 left-4 right-4 h-0.5 rounded-full bg-blue-600" />
              )}
            </Link>
          ))}

          <a
            href="https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-[0.9375rem] tracking-wide px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.55)] hover:scale-105 transition-all duration-200"
            data-ocid="navbar.book_button"
          >
            <MessageCircle className="w-4 h-4" />
            Book Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={`md:hidden p-2 rounded-lg transition-all duration-200 ${
            scrolled
              ? "text-slate-700 hover:bg-slate-100"
              : "text-white hover:bg-white/10"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          data-ocid="navbar.hamburger_button"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden bg-white border-b border-slate-100 shadow-lg"
          data-ocid="navbar.mobile_menu"
        >
          <nav
            className="container mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to as any}
                onClick={() => setMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-[0.9375rem] font-medium tracking-wide transition-all duration-200 ${
                  currentPath === link.to
                    ? "text-blue-600 bg-blue-50"
                    : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                }`}
                data-ocid={`navbar.mobile_${link.label.toLowerCase()}_link`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold text-[0.9375rem] tracking-wide px-5 py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              data-ocid="navbar.mobile_book_button"
              onClick={() => setMenuOpen(false)}
            >
              <MessageCircle className="w-4 h-4" />
              Book Now on WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
