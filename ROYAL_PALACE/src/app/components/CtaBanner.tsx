import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1920&q=80)",
          }}
        />
        <div className="absolute inset-0 bg-[#2D2520]/85" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-16 h-px bg-[#C9A66B]/50" />
          <div className="w-3 h-3 rotate-45 border border-[#C9A66B]" />
          <div className="w-16 h-px bg-[#C9A66B]/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 font-playfair leading-tight"
        >
          Ready for an{" "}
          <span className="text-[#C9A66B] italic">Unforgettable</span>
          <br />
          Experience?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-white/70 text-lg max-w-xl mx-auto mb-10 font-poppins font-light leading-relaxed"
        >
          Book your stay today and discover why Royal Palace is the preferred
          choice for discerning travelers worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#rooms"
            className="inline-flex items-center gap-2 bg-[#C9A66B] text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-poppins hover:bg-[#B8956A] transition-all duration-300 shadow-xl shadow-[#C9A66B]/20 hover:shadow-[#C9A66B]/40 hover:-translate-y-0.5"
          >
            Book Your Stay
            <ArrowRight size={16} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/30 text-white px-10 py-4 text-sm tracking-[0.2em] uppercase font-poppins hover:bg-white/10 hover:border-white/50 transition-all duration-300"
          >
            Contact Us
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "15+", label: "Years of Excellence" },
            { number: "200+", label: "Luxury Rooms" },
            { number: "50K+", label: "Happy Guests" },
            { number: "4.9", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl text-[#C9A66B] font-playfair mb-1">
                {stat.number}
              </div>
              <div className="text-white/60 text-xs font-poppins tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
