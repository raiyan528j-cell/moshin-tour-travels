import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Star,
  Youtube,
} from "lucide-react";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white" data-ocid="footer">
      {/* Main footer */}
      <div className="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-700 flex items-center justify-center shadow-md">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div className="leading-tight">
              <span className="block font-display font-bold text-white text-[1rem] tracking-tight">
                Moshin Tour &amp; Travels
              </span>
              <span className="block text-[11px] text-white/40 tracking-wider uppercase">
                Agra, India
              </span>
            </div>
          </div>
          <p className="text-sm text-white/55 leading-relaxed mb-6 max-w-sm">
            Premium taxi and tour services across India, based in Agra. Trusted
            by 500+ happy travellers since 2010. Your comfort is our commitment.
          </p>
          {/* Social */}
          <div className="flex gap-3 mb-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-blue-600 transition-all duration-200"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-pink-600 transition-all duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full bg-white/10 hover:bg-red-600 transition-all duration-200"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4" />
            </a>
          </div>
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 text-xs text-white/60">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Trusted by 500+ customers
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-[1.0625rem] font-display font-semibold text-white mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "#hero" },
              { label: "Services", href: "#services" },
              { label: "Pricing", href: "#pricing" },
              { label: "Contact", href: "#contact" },
            ].map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-white/55 hover:text-white transition-all duration-200 flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 group-hover:bg-white transition-all duration-200 shrink-0" />
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-[1.0625rem] font-display font-semibold text-white mb-5">
            Contact Us
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <div className="p-1.5 rounded-lg bg-blue-500/20 mt-0.5 shrink-0">
                <MapPin className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <span className="text-sm text-white/55 leading-relaxed">
                Sanjay Palace, Office No. 322/4,
                <br />
                Agra, Uttar Pradesh, India
              </span>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-blue-500/20 shrink-0">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <a
                href="tel:+917060535667"
                className="text-sm text-white/55 hover:text-white transition-all duration-200"
              >
                +91 70605 35667
              </a>
            </li>
            <li className="flex items-center gap-3">
              <div className="p-1.5 rounded-lg bg-blue-500/20 shrink-0">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
              </div>
              <a
                href="mailto:moshintourandtravels@gmail.com"
                className="text-sm text-white/55 hover:text-white transition-all duration-200 break-all"
              >
                moshintourandtravels@gmail.com
              </a>
            </li>
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white text-sm font-semibold px-5 py-3 rounded-full shadow-[0_4px_14px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-200"
            data-ocid="footer.whatsapp_cta_button"
          >
            <MessageCircle className="w-4 h-4" />
            Book Your Ride
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/10" />

      {/* Bottom bar */}
      <div className="container mx-auto px-4 py-5 flex items-center justify-center text-xs text-white/35">
        <span>© {year} Moshin Tour and Travels. All rights reserved.</span>
      </div>
    </footer>
  );
}
