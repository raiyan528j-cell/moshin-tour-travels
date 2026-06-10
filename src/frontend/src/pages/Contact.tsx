import {
  CheckCircle2,
  Clock,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import MetaTags from "../components/MetaTags";
import { Card, CardContent } from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Textarea } from "../components/ui/textarea";

const contactInfo = [
  {
    icon: MapPin,
    title: "Office Address",
    lines: ["Sanjay Palace, Office No. 322/4,", "Agra, Uttar Pradesh, India"],
    href: undefined as string | undefined,
    color: "bg-blue-500/15",
    iconColor: "text-blue-500",
  },
  {
    icon: Phone,
    title: "Phone / WhatsApp",
    lines: ["+91 70605 35667"],
    href: "tel:+917060535667",
    color: "bg-[#25D366]/15",
    iconColor: "text-[#25D366]",
  },
  {
    icon: Mail,
    title: "Email Address",
    lines: ["moshintourandtravels@gmail.com"],
    href: "mailto:moshintourandtravels@gmail.com",
    color: "bg-primary/15",
    iconColor: "text-primary",
  },
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Available 24/7", "For urgent bookings: WhatsApp"],
    href: undefined as string | undefined,
    color: "bg-amber-500/15",
    iconColor: "text-amber-500",
  },
];

const whyContact = [
  "Instant confirmation on WhatsApp",
  "No hidden charges or booking fees",
  "Experienced, professional drivers",
  "24/7 customer support",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleWhatsApp = () => {
    const text = `Hello, my name is ${name}. Phone: ${phone}. ${message}`;
    window.open(
      `https://wa.me/917060535667?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <MetaTags
        title="Contact Us | Moshin Tour & Travels | Taxi Service in Agra"
        description="Contact Moshin Tour & Travels (MK Travels) for Taxi Service in Agra, Cab Booking Agra, Agra Tour Packages, and Outstation Taxi Service. Call +91 7060535667 or WhatsApp now!"
      />
      {/* Page Header */}
      <section
        className="relative pt-36 pb-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 overflow-hidden"
        data-ocid="contact.header_section"
      >
        <div
          className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3b82f6, transparent)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-60 h-60 rounded-full opacity-10 blur-2xl"
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
              Get In Touch
            </span>
            <h1 className="font-display font-extrabold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] text-white mb-6 leading-tight">
              Contact Moshin Tour &amp; Travels
            </h1>
            <p className="text-white/70 max-w-xl mx-auto text-[0.9375rem] md:text-[1rem] leading-relaxed">
              Reach out for bookings, package enquiries, or any travel question.
              We respond fast on WhatsApp.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section
        className="bg-white py-16 md:py-20 lg:py-24"
        data-ocid="contact.info_section"
      >
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="mb-8">
              <h2 className="font-display font-bold text-[1.75rem] md:text-[2.25rem] text-foreground mb-3 leading-snug">
                We'd Love to Hear From You
              </h2>
              <p className="text-muted-foreground">
                Have a question or ready to book? Reach us via any channel
                below.
              </p>
            </div>

            {/* Contact Cards */}
            {contactInfo.map((info, i) => (
              <Card
                key={info.title}
                className="border-border hover:shadow-lg hover:-translate-y-0.5 transition-smooth"
                data-ocid={`contact.info_card.${i + 1}`}
              >
                <CardContent className="p-5 flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-2xl ${info.color} flex items-center justify-center shrink-0`}
                  >
                    <info.icon className={`w-5 h-5 ${info.iconColor}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground text-[1rem] mb-1.5">
                      {info.title}
                    </h3>
                    {info.href
                      ? info.lines.map((line) => (
                          <a
                            key={line}
                            href={info.href}
                            className="block text-[0.9375rem] text-muted-foreground hover:text-primary transition-smooth"
                          >
                            {line}
                          </a>
                        ))
                      : info.lines.map((line) => (
                          <p
                            key={line}
                            className="text-[0.9375rem] text-muted-foreground"
                          >
                            {line}
                          </p>
                        ))}
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Why list */}
            <div className="bg-muted/40 rounded-2xl p-6">
              <h3 className="font-display font-semibold text-foreground text-[1.125rem] mb-4">
                Why Book With Us?
              </h3>
              <ul className="space-y-2.5">
                {whyContact.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-[0.9375rem] text-muted-foreground"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#25D366] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Big WhatsApp CTA */}
            <a
              href="https://wa.me/917060535667?text=Hello%20I%20want%20to%20book%20a%20taxi"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 w-full justify-center text-base py-4 rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.4)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.55)]"
              data-ocid="contact.whatsapp_direct_button"
              aria-label="Chat on WhatsApp with Moshin Tour and Travels"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              Chat Directly on WhatsApp
            </a>

            {/* Call Now CTA */}
            <a
              href="tel:+917060535667"
              className="inline-flex items-center gap-2 w-full justify-center text-base py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
              data-ocid="contact.call_now_button"
              aria-label="Call Moshin Tour and Travels now"
            >
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Now
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card
              className="border-border shadow-lg"
              data-ocid="contact.form_card"
            >
              <CardContent className="p-8">
                <div className="mb-7">
                  <h2 className="font-display font-bold text-[1.5rem] md:text-[1.75rem] text-foreground">
                    Send Us a Message
                  </h2>
                  <p className="text-muted-foreground text-[0.9375rem] mt-1 leading-relaxed">
                    Fill in the details below and we'll respond via WhatsApp.
                  </p>
                </div>
                <div className="space-y-5">
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-name"
                      className="text-sm font-semibold"
                    >
                      Your Name *
                    </Label>
                    <Input
                      id="contact-name"
                      name="name"
                      placeholder="Enter your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 rounded-xl"
                      data-ocid="contact.name_input"
                      aria-required="true"
                      autoComplete="name"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-phone"
                      className="text-sm font-semibold"
                    >
                      Phone Number *
                    </Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-11 rounded-xl"
                      data-ocid="contact.phone_input"
                      aria-required="true"
                      autoComplete="tel"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label
                      htmlFor="contact-message"
                      className="text-sm font-semibold"
                    >
                      Your Message
                    </Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      placeholder="Tell us about your travel needs — destination, dates, group size…"
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-xl resize-none"
                      data-ocid="contact.message_textarea"
                      aria-describedby="contact-message-help"
                    />
                    <p
                      id="contact-message-help"
                      className="text-xs text-muted-foreground"
                    >
                      Include destination, dates, and number of travelers for a
                      faster response.
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    disabled={!name || !phone}
                    className="btn-whatsapp w-full inline-flex items-center justify-center gap-2 text-base py-4 rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.5)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none"
                    data-ocid="contact.form_submit_button"
                    aria-label="Send inquiry via WhatsApp"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    Send via WhatsApp
                  </button>
                  <p className="text-xs text-muted-foreground text-center">
                    This will open WhatsApp with your message pre-filled.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Google Maps */}
      <section
        className="bg-slate-50 py-16 md:py-20 lg:py-24"
        data-ocid="contact.map_section"
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="font-display font-bold text-[1.75rem] md:text-[2.25rem] text-foreground leading-snug">
              Find Our Office
            </h2>
            <p className="text-muted-foreground text-[0.9375rem] mt-2">
              Sanjay Palace, Office No. 322/4, Agra, Uttar Pradesh
            </p>
          </motion.div>
          <div className="rounded-3xl overflow-hidden shadow-[0_8px_30px_rgba(74,90,188,0.15)] border border-slate-200">
            <iframe
              title="Moshin Tour and Travels – Office Location in Agra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3549.4099285455!2d78.00879687542155!3d27.19597364835234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974791d2c5a5b4f%3A0xf2a6fe36f5e4c59e!2sSanjay%20Palace%2C%20Agra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
              width="100%"
              height="420"
              className="w-full block"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
