import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe,
  IndianRupee,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Star,
} from "lucide-react";
import { motion } from "motion/react";
import { Card, CardContent } from "../components/ui/card";

const packages = [
  {
    title: "Agra City Sightseeing",
    duration: "1 Day",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    img: "/assets/generated/route-agra-delhi.dim_800x500.jpg",
    price: "₹2,500+",
    tag: "Best Seller",
    tagColor: "bg-amber-500",
  },
  {
    title: "Manali Himalayan Retreat",
    duration: "6–8 Days",
    highlights: [
      "Rohtang Pass",
      "Solang Valley",
      "Old Manali",
      "Hadimba Temple",
    ],
    img: "/assets/generated/route-manali.dim_800x500.jpg",
    price: "₹18,000+",
    tag: "Popular",
    tagColor: "bg-blue-500",
  },
  {
    title: "Kashmir Paradise Tour",
    duration: "7–10 Days",
    highlights: ["Dal Lake Shikara", "Gulmarg", "Pahalgam", "Sonamarg"],
    img: "/assets/generated/route-kashmir.dim_800x500.jpg",
    price: "₹28,000+",
    tag: "Premium",
    tagColor: "bg-purple-600",
  },
  {
    title: "Ladakh Adventure Circuit",
    duration: "10–12 Days",
    highlights: ["Pangong Tso", "Nubra Valley", "Leh Palace", "Zanskar"],
    img: "/assets/generated/route-ladakh.dim_800x500.jpg",
    price: "₹35,000+",
    tag: "Adventure",
    tagColor: "bg-orange-500",
  },
  {
    title: "Kerala Backwaters Escape",
    duration: "8–10 Days",
    highlights: [
      "Alleppey Houseboat",
      "Munnar Tea Gardens",
      "Kochi Fort",
      "Thekkady",
    ],
    img: "/assets/generated/route-kerala.dim_800x500.jpg",
    price: "₹45,000+",
    tag: "Luxury",
    tagColor: "bg-emerald-600",
  },
];

const customSteps = [
  {
    icon: MapPin,
    step: "01",
    title: "Choose Your Destination",
    desc: "Tell us where you want to go — any city, any state in India.",
  },
  {
    icon: Clock,
    step: "02",
    title: "Set Your Schedule",
    desc: "Pick your travel dates and duration. We adapt to your calendar.",
  },
  {
    icon: Shield,
    step: "03",
    title: "We Plan Everything",
    desc: "Route, stops, vehicle type, and driver assigned just for you.",
  },
  {
    icon: Phone,
    step: "04",
    title: "Confirm on WhatsApp",
    desc: "Review the plan and confirm with a simple WhatsApp message.",
  },
];

const features = [
  {
    icon: Globe,
    title: "All-India Coverage",
    desc: "We operate in every major state and destination across India.",
  },
  {
    icon: Shield,
    title: "Safety First",
    desc: "GPS-tracked vehicles, verified drivers, and 24/7 support.",
  },
  {
    icon: IndianRupee,
    title: "No Hidden Costs",
    desc: "Inclusive pricing with tolls and driver charges made clear upfront.",
  },
  {
    icon: Star,
    title: "Premium Fleet",
    desc: "Well-maintained Dzire, Innova Crysta, XUV, and Ertiga available.",
  },
];

export default function Services() {
  return (
    <>
      {/* Page Header */}
      <section
        className="relative pt-36 pb-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
        data-ocid="services.header_section"
      >
        {/* Decorative orbs */}
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/3 w-64 h-64 rounded-full opacity-10 blur-2xl"
          style={{
            background: "radial-gradient(circle, #818cf8, transparent)",
          }}
          aria-hidden="true"
        />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-blue-300 text-sm font-semibold uppercase tracking-widest mb-4">
              Our Services &amp; Packages
            </span>
            <h1 className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
              Tour Packages &amp; Taxi Services
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
              From local Agra sightseeing to cross-India adventures, we offer
              curated packages and reliable taxi services for every journey.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold px-8 py-4 rounded-full shadow-[0_4px_20px_rgba(37,211,102,0.5)] hover:scale-105 transition-all duration-200">
              <MessageCircle className="w-5 h-5" />
              Book Any Package on WhatsApp
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tour Packages */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24"
        data-ocid="services.packages_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Explore India With Us
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Our Tour Packages
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base">
              Carefully curated itineraries to India's most iconic destinations.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {packages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                data-ocid={`services.package_card.${i + 1}`}
              >
                <Card className="overflow-hidden group card-premium h-full flex flex-col">
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={pkg.img}
                      alt={pkg.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
                      aria-hidden="true"
                    />
                    <div className="absolute top-3 right-3">
                      <span
                        className={`${pkg.tagColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-md`}
                      >
                        {pkg.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                      <Clock className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-medium">
                        {pkg.duration}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-5 flex flex-col gap-4 flex-1">
                    <h3 className="font-display font-bold text-foreground text-lg">
                      {pkg.title}
                    </h3>
                    <ul className="space-y-1.5 flex-1">
                      {pkg.highlights.map((h) => (
                        <li
                          key={h}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div>
                        <p className="text-xs text-muted-foreground">
                          Starting from
                        </p>
                        <span className="font-display font-bold text-primary text-2xl">
                          {pkg.price}
                        </span>
                      </div>
                      <a
                        href={`https://wa.me/917060535667?text=Hello%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.title)}%20package`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-whatsapp inline-flex items-center gap-1.5 text-sm px-4 py-2.5"
                        data-ocid={`services.package_book_button.${i + 1}`}
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Book Now
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Travel Process */}
      <section
        className="bg-slate-50 py-20 md:py-28 lg:py-32"
        data-ocid="services.custom_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <span className="inline-block text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              How It Works
            </span>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
              Custom Travel Plans
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Not finding the perfect package? We'll build one just for you.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                data-ocid={`services.custom_step.${i + 1}`}
              >
                <div className="bg-white rounded-3xl p-7 h-full flex flex-col gap-4 border border-slate-100 shadow-[0_4px_16px_rgba(74,90,188,0.08)] hover:shadow-[0_20px_40px_rgba(74,90,188,0.18)] hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-md">
                      <step.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <span className="text-4xl font-display font-black text-border">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-foreground text-base">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="https://wa.me/917060535667?text=Hello%20I%20want%20a%20custom%20travel%20plan"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 text-base px-8 py-4 rounded-xl"
              data-ocid="services.custom_plan_button"
            >
              <MessageCircle className="w-5 h-5" />
              Plan My Custom Trip on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24"
        data-ocid="services.features_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-3">
              Why Choose Moshin Tours?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              What sets us apart from the rest.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_4px_16px_rgba(74,90,188,0.08)] hover:shadow-[0_20px_40px_rgba(74,90,188,0.18)] hover:-translate-y-2 transition-all duration-300"
                data-ocid={`services.feature_card.${i + 1}`}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 shadow-md">
                  <f.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2 text-base">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20 md:py-24 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700"
        data-ocid="services.cta_section"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display font-black text-4xl md:text-5xl text-white mb-4 leading-tight">
              Ready to Start Your Journey?
            </h2>
            <p className="text-white/75 mb-10 max-w-xl mx-auto text-lg leading-relaxed">
              Book any package or plan a custom trip via WhatsApp. Confirmed in
              under 5 minutes.
            </p>
            <div className="flex flex-wrap gap-5 justify-center">
              <a
                href="https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-green-600 hover:bg-green-50 font-semibold text-base px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
                data-ocid="services.cta_whatsapp_button"
              >
                <MessageCircle className="w-5 h-5" />
                Book on WhatsApp
              </a>
              <Link
                to={"/contact" as any}
                className="border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 hover:border-white transition-all duration-200 inline-flex items-center gap-2"
                data-ocid="services.cta_contact_button"
              >
                <ArrowRight className="w-4 h-4" />
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
