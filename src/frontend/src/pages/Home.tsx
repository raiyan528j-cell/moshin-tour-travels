import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Car,
  CheckCircle2,
  Clock,
  Globe,
  Heart,
  IndianRupee,
  Luggage,
  MapPin,
  MessageCircle,
  Phone,
  Plane,
  Shield,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef } from "react";
import { Badge } from "../components/ui/badge";
import { Card, CardContent } from "../components/ui/card";

// ── WhatsApp Helpers ─────────────────────────────────────────────────────────
const WA_BASE =
  "https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi";

function waLink(extra = "") {
  return extra
    ? `https://wa.me/917060535667?text=${encodeURIComponent(`Hello I want to book a taxi ${extra}`)}`
    : WA_BASE;
}

// ── Data ──────────────────────────────────────────────────────────────────────
const stats = [
  { value: "500+", label: "Happy Travelers" },
  { value: "4.9★", label: "Average Rating" },
  { value: "10+", label: "Years Experience" },
  { value: "24/7", label: "Always Available" },
];

const pricingTiers = [
  {
    tier: "Economy",
    vehicle: "Dzire / Swift / WagonR",
    rate: "₹12",
    unit: "/km",
    features: ["AC Sedan", "4 Passengers", "1 Large Bag", "Local & Outstation"],
    highlight: false,
    tag: null,
    icon: Car,
    minFare: "₹500",
  },
  {
    tier: "Premium",
    vehicle: "Innova Crysta / Ertiga",
    rate: "₹18",
    unit: "/km",
    features: [
      "AC Premium MPV",
      "6–7 Passengers",
      "2 Large Bags",
      "Extra Comfort",
    ],
    highlight: true,
    tag: "Most Popular",
    icon: Star,
    minFare: "₹800",
  },
  {
    tier: "SUV / Luxury",
    vehicle: "XUV / Fortuner / Crysta",
    rate: "₹22",
    unit: "/km",
    features: [
      "Luxury SUV",
      "6–7 Passengers",
      "3 Large Bags",
      "VIP Experience",
    ],
    highlight: false,
    tag: "Premium",
    icon: Shield,
    minFare: "₹1,000",
  },
];

const services = [
  {
    icon: MapPin,
    title: "Local City Tours",
    desc: "Taj Mahal, Agra Fort, Fatehpur Sikri and beyond. Expert guided city sightseeing.",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    icon: ArrowRight,
    title: "Outstation Trips",
    desc: "Safe, punctual outstation travel to Delhi, Jaipur, Mathura, and across India.",
    gradient: "from-indigo-500 to-indigo-700",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "On-time airport pickups and drops. We track your flight so you never miss a beat.",
    gradient: "from-violet-500 to-violet-700",
  },
  {
    icon: Globe,
    title: "Tour Packages",
    desc: "Crafted packages to Manali, Kashmir, Ladakh, Kerala and iconic destinations.",
    gradient: "from-sky-500 to-sky-700",
  },
  {
    icon: Briefcase,
    title: "Corporate Travel",
    desc: "Reliable, punctual executive transport for business meetings and corporate events.",
    gradient: "from-slate-600 to-slate-800",
  },
  {
    icon: Heart,
    title: "Wedding Car Rental",
    desc: "Make your special day perfect with decorated, well-maintained luxury vehicles.",
    gradient: "from-rose-500 to-rose-700",
  },
];

const routes = [
  {
    from: "Agra",
    to: "Delhi",
    price: "₹4,500+",
    duration: "4 hrs",
    distance: "210 km",
    img: "/assets/generated/route-agra-delhi.dim_800x500.jpg",
    alt: "Taxi Service in Agra – Outstation cab from Agra to Delhi – Moshin Tour & Travels",
  },
  {
    from: "Agra",
    to: "Jaipur",
    price: "₹5,000+",
    duration: "5 hrs",
    distance: "240 km",
    img: "/assets/generated/route-agra-delhi.dim_800x500.jpg",
    alt: "Cab Booking Agra – Agra to Jaipur taxi route – MK Travels",
  },
  {
    from: "Agra",
    to: "Manali",
    price: "₹18,000+",
    duration: "12 hrs",
    distance: "600 km",
    img: "/assets/generated/route-manali.dim_800x500.jpg",
    alt: "Agra Tour Packages – Manali Himalayan tour by taxi – Moshin Tour & Travels",
  },
  {
    from: "Agra",
    to: "Kashmir",
    price: "₹28,000+",
    duration: "16 hrs",
    distance: "900 km",
    img: "/assets/generated/route-kashmir.dim_800x500.jpg",
    alt: "Outstation Taxi Service Agra – Kashmir tour package – MK Travels",
  },
  {
    from: "Agra",
    to: "Kerala",
    price: "₹45,000+",
    duration: "30 hrs",
    distance: "2,100 km",
    img: "/assets/generated/route-kerala.dim_800x500.jpg",
    alt: "Travel Agency in Agra – Kerala backwaters tour package – Moshin Tour & Travels",
  },
  {
    from: "Agra",
    to: "Ladakh",
    price: "₹35,000+",
    duration: "20 hrs",
    distance: "1,200 km",
    img: "/assets/generated/route-ladakh.dim_800x500.jpg",
    alt: "Same Day Agra Tour – Ladakh adventure taxi package – MK Travels",
  },
];

const whyFeatures = [
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "Round-the-clock service — early morning flights or late-night arrivals, we're always ready.",
  },
  {
    icon: BadgeCheck,
    title: "Professional Drivers",
    desc: "Verified, licensed, trained drivers fluent in Hindi and English.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "No hidden charges. The price you see is exactly what you pay.",
  },
  {
    icon: Car,
    title: "Premium Fleet",
    desc: "Clean, AC, well-maintained vehicles — from sedans to premium SUVs.",
  },
  {
    icon: Globe,
    title: "All India Travel",
    desc: "Hill stations, beaches, pilgrimages, cities. One call covers all of India.",
  },
  {
    icon: Zap,
    title: "Instant Booking",
    desc: "Skip the apps. WhatsApp us — booking confirmed in under 5 minutes.",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    loc: "Delhi",
    review:
      "Booked an Agra to Delhi cab last minute via WhatsApp. Driver was on time, car was spotless. Highly recommend Moshin Tour!",
    stars: 5,
  },
  {
    name: "Priya Mehta",
    loc: "Mumbai",
    review:
      "Went on a 10-day Manali trip with family. The Innova was comfortable throughout, and the driver knew every road perfectly.",
    stars: 5,
  },
  {
    name: "Ahmed Khan",
    loc: "Agra",
    review:
      "Best taxi service in Agra, period. Transparent pricing, no hidden charges. Booked them three times this year!",
    stars: 5,
  },
  {
    name: "Sunita Patel",
    loc: "Jaipur",
    review:
      "Kashmir trip was a dream come true. Moshin Tour handled all bookings and the driver was like a knowledgeable local guide.",
    stars: 5,
  },
];

// ── Sub-Components ───────────────────────────────────────────────────────────
function SectionHeading({
  label,
  title,
  subtitle,
  light = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-14">
      {label && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-blue-300" : "text-blue-600"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`font-display font-bold text-3xl md:text-4xl lg:text-5xl mb-4 leading-tight ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl mx-auto leading-relaxed ${
            light ? "text-white/70" : "text-slate-500"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 mx-auto h-1 w-16 rounded-full ${
          light
            ? "bg-gradient-to-r from-blue-400 to-indigo-300"
            : "bg-gradient-to-r from-blue-600 to-indigo-500"
        }`}
      />
    </div>
  );
}

function WhatsAppBtn({
  label = "Book on WhatsApp",
  href = WA_BASE,
  size = "md",
  variant = "green",
  className = "",
  ocid,
}: {
  label?: string;
  href?: string;
  size?: "sm" | "md" | "lg";
  variant?: "green" | "white";
  className?: string;
  ocid?: string;
}) {
  const sizeClass =
    size === "lg"
      ? "px-8 py-4 text-base rounded-full"
      : size === "sm"
        ? "px-4 py-2 text-xs rounded-full"
        : "px-6 py-3 text-sm rounded-full";
  const variantClass =
    variant === "white"
      ? "bg-white text-green-600 hover:bg-green-50 shadow-lg hover:shadow-xl"
      : "bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-[0_4px_14px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_20px_rgba(37,211,102,0.6)]";
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 font-semibold hover:scale-105 transition-all duration-200 ${sizeClass} ${variantClass} ${className}`}
      data-ocid={ocid}
    >
      <MessageCircle className={size === "lg" ? "w-5 h-5" : "w-4 h-4"} />
      {label}
    </a>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────
export default function Home() {
  const pricingRef = useRef<HTMLDivElement>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* ── 1. Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        data-ocid="home.hero_section"
      >
        {/* Background Image */}
        <img
          src="/assets/generated/hero-agra-taxi.dim_1600x900.jpg"
          alt="Premium taxi service in Agra – Moshin Tour and Travels"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"
          aria-hidden="true"
        />
        {/* Decorative gradient orb */}
        <div
          className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent)",
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 container mx-auto px-4 pt-24 pb-16 flex flex-col items-center text-center">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <Badge className="bg-white/15 text-white border-white/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm px-4 py-1.5">
              🏆 Agra's Most Trusted Taxi Service
            </Badge>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] text-white mb-6 max-w-5xl"
          >
            Your Premium{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #60a5fa 0%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Travel Partner
            </span>{" "}
            in Agra
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/80 text-xl md:text-2xl leading-relaxed mb-10 max-w-2xl"
          >
            Comfortable. Reliable. Affordable. Book your ride across India —
            city tours, outstation & packages.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4 justify-center mb-14"
          >
            <WhatsAppBtn
              label="Book on WhatsApp"
              size="lg"
              ocid="home.hero_whatsapp_button"
            />
            <a
              href="tel:+917060535667"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-700 font-semibold rounded-full hover:bg-blue-50 transition-all duration-200 text-base shadow-lg hover:shadow-xl hover:scale-105"
              data-ocid="home.hero_call_button"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <button
              type="button"
              onClick={scrollToPricing}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white/80 transition-all duration-200 text-base backdrop-blur-sm"
              data-ocid="home.hero_pricing_button"
            >
              View Pricing
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-2xl w-full"
          >
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-4 py-3 text-center"
                data-ocid={`home.hero_stat.${i + 1}`}
              >
                <p className="font-display font-black text-white text-xl md:text-2xl">
                  {s.value}
                </p>
                <p className="text-white/65 text-xs mt-0.5">{s.label}</p>
              </div>
            ))}
          </motion.div>

          {/* Scroll arrow */}
          <motion.button
            type="button"
            onClick={scrollToPricing}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white transition-colors duration-200 animate-bounce"
            aria-label="Scroll down"
            data-ocid="home.hero_scroll_button"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </div>
      </section>

      {/* ── 2. Taxi Pricing ── */}
      <section
        id="pricing"
        ref={pricingRef}
        className="bg-slate-50 py-16 md:py-20 lg:py-24"
        data-ocid="home.pricing_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="Transparent Fares"
              title="Our Taxi Rates"
              subtitle="No hidden charges. The price you see is the price you pay."
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
            {pricingTiers.map((plan, i) => (
              <motion.div
                key={plan.tier}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                data-ocid={`home.pricing_card.${i + 1}`}
                className="relative"
              >
                {plan.highlight ? (
                  // FEATURED CARD
                  <div className="relative rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(37,99,235,0.40)] -translate-y-4 border-2 border-blue-500/30 z-10">
                    {/* Most Popular badge */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20">
                      <span className="bg-[#25D366] text-white text-xs font-black px-4 py-1.5 rounded-full shadow-lg uppercase tracking-wide">
                        ★ Most Popular
                      </span>
                    </div>
                    <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-8 pt-14">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center">
                          <plan.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display font-black text-white text-xl">
                            {plan.tier}
                          </h3>
                          <p className="text-blue-200 text-xs">
                            {plan.vehicle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="font-display font-black text-5xl text-white">
                          {plan.rate}
                        </span>
                        <span className="text-blue-200 text-lg">
                          {plan.unit}
                        </span>
                      </div>
                      <p className="text-blue-300 text-xs">
                        Min fare {plan.minFare}
                      </p>
                    </div>
                    <div className="bg-white p-7 flex flex-col gap-5">
                      <ul className="space-y-2.5">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                            <span className="text-sm text-slate-700 font-medium">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <WhatsAppBtn
                        label="Book Now"
                        size="md"
                        className="w-full justify-center"
                        ocid={`home.pricing_book_button.${i + 1}`}
                        href={waLink(`for ${plan.tier} category`)}
                      />
                    </div>
                  </div>
                ) : (
                  // REGULAR CARD
                  <div className="bg-white rounded-3xl border border-slate-200 shadow-[0_4px_20px_rgba(74,90,188,0.10)] hover:shadow-[0_16px_40px_rgba(74,90,188,0.22)] hover:-translate-y-2 transition-all duration-300 overflow-hidden">
                    {plan.tag && (
                      <div className="absolute -top-3 left-4 z-10">
                        <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow">
                          {plan.tag}
                        </span>
                      </div>
                    )}
                    <div className="bg-gradient-to-br from-slate-700 to-slate-900 p-7">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center">
                          <plan.icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-display font-bold text-white text-lg">
                            {plan.tier}
                          </h3>
                          <p className="text-slate-300 text-xs">
                            {plan.vehicle}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="font-display font-black text-4xl text-white">
                          {plan.rate}
                        </span>
                        <span className="text-slate-300 text-base">
                          {plan.unit}
                        </span>
                      </div>
                      <p className="text-slate-400 text-xs">
                        Min fare {plan.minFare}
                      </p>
                    </div>
                    <div className="p-7 flex flex-col gap-5">
                      <ul className="space-y-2.5">
                        {plan.features.map((feat) => (
                          <li key={feat} className="flex items-center gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                            <span className="text-sm text-slate-600 font-medium">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <WhatsAppBtn
                        label="Book Now"
                        size="md"
                        className="w-full justify-center"
                        ocid={`home.pricing_book_button.${i + 1}`}
                        href={waLink(`for ${plan.tier} category`)}
                      />
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <p className="text-center text-slate-400 text-sm mt-10">
            All fares include professional driver & AC. Toll charges extra.
          </p>

          {/* Internal link to Services */}
          <div className="text-center mt-6">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
              data-ocid="home.pricing_services_link"
            >
              View all services
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Pricing card images (decorative, keyword-rich alt for SEO) */}
          <div className="sr-only" aria-hidden="false">
            <img
              src="/assets/generated/hero-agra-taxi.dim_1600x900.jpg"
              alt="Taxi Service in Agra – Moshin Tour & Travels premium cab fleet"
              loading="lazy"
            />
            <img
              src="/assets/generated/route-agra-delhi.dim_800x500.jpg"
              alt="Cab Booking Agra – Economy sedan taxi for local and outstation travel – MK Travels"
              loading="lazy"
            />
            <img
              src="/assets/generated/route-manali.dim_800x500.jpg"
              alt="Agra Tour Packages – Premium Innova Crysta for family trips – Moshin Tour & Travels"
              loading="lazy"
            />
            <img
              src="/assets/generated/route-kashmir.dim_800x500.jpg"
              alt="Outstation Taxi Service Agra – Luxury SUV for long-distance travel – MK Travels"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Services ── */}
      <section
        id="services"
        className="bg-white py-16 md:py-20 lg:py-24"
        data-ocid="home.services_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="What We Offer"
              title="Our Services"
              subtitle="From local Agra sightseeing to all-India tours, we have the right vehicle for every journey."
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`home.service_card.${i + 1}`}
              >
                <div className="bg-white rounded-3xl border border-slate-100 shadow-[0_4px_16px_rgba(74,90,188,0.08)] hover:shadow-[0_20px_40px_rgba(74,90,188,0.18)] hover:-translate-y-2 transition-all duration-300 p-7 h-full group">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center shadow-md mb-5 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <svc.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-slate-900 text-lg mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internal link to Services page */}
          <div className="text-center mt-10">
            <a
              href="/services"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors duration-200"
              data-ocid="home.services_explore_link"
            >
              Explore tour packages
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 4. Popular Routes ── */}
      <section
        id="packages"
        className="bg-slate-50 py-16 md:py-20 lg:py-24"
        data-ocid="home.routes_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="Top Destinations"
              title="Popular Routes from Agra"
              subtitle="Our most-booked outstation routes with transparent pricing."
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {routes.map((route, i) => (
              <motion.div
                key={route.to}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`home.route_card.${i + 1}`}
              >
                <div className="bg-white rounded-3xl shadow-[0_4px_16px_rgba(74,90,188,0.08)] hover:shadow-[0_20px_40px_rgba(74,90,188,0.18)] hover:-translate-y-2 transition-all duration-300 overflow-hidden group h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={route.img}
                      alt={route.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white font-display font-bold text-lg leading-tight">
                        {route.from} → {route.to}
                      </p>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-white/70 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {route.duration}
                        </span>
                        <span className="text-white/70 text-xs flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {route.distance}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-medium">
                        Starting from
                      </span>
                      <span className="font-display font-black text-blue-700 text-lg">
                        {route.price}
                      </span>
                    </div>
                    <WhatsAppBtn
                      label="Book This Route"
                      size="sm"
                      className="w-full justify-center"
                      href={waLink(`from ${route.from} to ${route.to}`)}
                      ocid={`home.route_book_button.${i + 1}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Why Choose Us ── */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24"
        data-ocid="home.why_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="Our Promise"
              title="Why Choose Moshin Travels?"
              subtitle="We are not just a taxi service — we are your trusted travel partner across India."
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {whyFeatures.map((feat, i) => (
              <motion.div
                key={feat.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`home.why_card.${i + 1}`}
              >
                <div className="flex gap-5 p-7 bg-white rounded-3xl border border-slate-100 shadow-[0_4px_16px_rgba(74,90,188,0.08)] hover:shadow-[0_20px_40px_rgba(74,90,188,0.18)] hover:-translate-y-2 transition-all duration-300 h-full">
                  <div className="w-13 h-13 min-w-[52px] min-h-[52px] rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-md">
                    <feat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-slate-900 text-base mb-1.5">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Testimonials (DARK section) ── */}
      <section
        className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900"
        data-ocid="home.testimonials_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              label="Customer Reviews"
              title="What Our Travelers Say"
              subtitle="Real reviews from verified travellers who trusted us with their journeys."
              light
            />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`home.testimonial_card.${i + 1}`}
              >
                <div className="h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-6 flex flex-col gap-4 hover:-translate-y-2 hover:bg-white/15 transition-all duration-300">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star
                        key={j}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-white/85 leading-relaxed flex-1">
                    &ldquo;{t.review}&rdquo;
                  </p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/15">
                    <div
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-indigo-500 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="text-white text-sm font-bold">
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {t.name}
                      </p>
                      <p className="text-xs text-white/50">{t.loc}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Internal link from testimonials */}
          <div className="text-center mt-12">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 text-blue-300 hover:text-white font-semibold text-sm transition-colors duration-200"
              data-ocid="home.testimonials_book_link"
            >
              Book your ride
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ── 7. CTA Banner ── */}
      <section
        className="py-16 md:py-20 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700"
        data-ocid="home.cta_section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight">
              Ready to Book Your Ride?
            </h2>
            <p className="text-white/75 text-xl mb-10 leading-relaxed">
              Get an instant quote and confirm your booking in under 5 minutes
              on WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-5">
              <WhatsAppBtn
                label="Book on WhatsApp Now"
                size="lg"
                variant="white"
                ocid="home.cta_whatsapp_button"
              />
              <a
                href="tel:+917060535667"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 text-base"
                data-ocid="home.cta_call_button"
              >
                <Phone className="w-5 h-5" />
                Call +91 7060535667
              </a>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-8 text-white/55 text-sm">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Sanjay Palace, Office No. 322/4,
                Agra
              </span>
              <span className="flex items-center gap-2">
                <Luggage className="w-4 h-4" />
                moshintourandtravels@gmail.com
              </span>
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                Trusted by 500+ travelers
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
