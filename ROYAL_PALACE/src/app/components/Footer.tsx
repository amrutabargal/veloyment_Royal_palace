import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Send,
  ArrowUp,
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="bg-[#1E1A17]">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-[#C9A66B] to-[#D4AF76] py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h3 className="text-2xl sm:text-3xl text-white mb-2 font-playfair">
                Subscribe to Our Newsletter
              </h3>
              <p className="text-white/85 font-poppins text-sm">
                Get exclusive offers, seasonal packages, and travel inspiration
                delivered to your inbox
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleNewsletterSubmit}
              className="w-full lg:w-auto"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative">
                  <Mail
                    size={18}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7355]"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-11 pr-6 py-3.5 rounded-xl text-[#2D2520] focus:outline-none focus:ring-2 focus:ring-white/50 w-full sm:w-80 font-poppins text-sm"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#2D2520] text-white rounded-xl hover:bg-[#3D3530] transition-all duration-300 font-poppins text-sm tracking-wider whitespace-nowrap"
                >
                  <Send size={16} />
                  Subscribe
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* About */}
            <div className="lg:pr-8">
              <div className="mb-6">
                <span className="font-playfair text-2xl tracking-[0.2em]">
                  <span className="text-[#C9A66B]">ROYAL</span>
                  <span className="text-white"> PALACE</span>
                </span>
                <p className="text-[10px] text-white/40 tracking-[0.5em] uppercase font-poppins mt-1">
                  Hotel & Resort
                </p>
              </div>
              <p className="text-white/60 mb-8 leading-relaxed font-poppins text-sm">
                Experience unparalleled luxury and elegance at Royal Palace
                Hotel. Where every moment is crafted to perfection and every
                guest is treated like royalty.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                ].map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center hover:bg-[#C9A66B] text-white/60 hover:text-white transition-all duration-300 border border-white/5 hover:border-[#C9A66B]"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-base text-white mb-6 font-poppins tracking-wider uppercase relative">
                Quick Links
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#C9A66B]" />
              </h4>
              <ul className="space-y-3 mt-4">
                {[
                  { label: "Home", href: "#home" },
                  { label: "Rooms & Suites", href: "#rooms" },
                  { label: "Dining", href: "#dining" },
                  { label: "Amenities", href: "#amenities" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact Us", href: "#contact" },
                ].map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-[#C9A66B] transition-colors duration-300 font-poppins text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A66B] transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-base text-white mb-6 font-poppins tracking-wider uppercase relative">
                Services
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#C9A66B]" />
              </h4>
              <ul className="space-y-3 mt-4">
                {[
                  "Spa & Wellness",
                  "Conference Rooms",
                  "Wedding Events",
                  "Concierge Service",
                  "Airport Transfer",
                  "Private Tours",
                ].map((service, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/50 hover:text-[#C9A66B] transition-colors duration-300 font-poppins text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-[#C9A66B] transition-all duration-300" />
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-base text-white mb-6 font-poppins tracking-wider uppercase relative">
                Contact Us
                <span className="absolute -bottom-2 left-0 w-8 h-0.5 bg-[#C9A66B]" />
              </h4>
              <ul className="space-y-5 mt-4">
                <li className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A66B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <MapPin className="text-[#C9A66B]" size={16} />
                  </div>
                  <span className="text-white/50 font-poppins text-sm leading-relaxed">
                    123 Luxury Avenue,
                    <br />
                    Beverly Hills, CA 90210
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A66B]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[#C9A66B]" size={16} />
                  </div>
                  <a
                    href="tel:+15551234567"
                    className="text-white/50 hover:text-[#C9A66B] font-poppins text-sm transition-colors duration-300"
                  >
                    +1 (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#C9A66B]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[#C9A66B]" size={16} />
                  </div>
                  <a
                    href="mailto:info@royalpalace.com"
                    className="text-white/50 hover:text-[#C9A66B] font-poppins text-sm transition-colors duration-300"
                  >
                    info@royalpalace.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-xs font-poppins">
              &copy; 2026 Royal Palace Hotel. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-white/30 hover:text-white/60 text-xs font-poppins transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-white/30 hover:text-white/60 text-xs font-poppins transition-colors duration-300"
              >
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-lg bg-[#C9A66B]/10 hover:bg-[#C9A66B] flex items-center justify-center text-[#C9A66B] hover:text-white transition-all duration-300 border border-[#C9A66B]/20 hover:border-[#C9A66B]"
              >
                <ArrowUp size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
