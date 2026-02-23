import { motion } from "motion/react";
import {
  Wifi,
  Coffee,
  Dumbbell,
  Utensils,
  Waves,
  Car,
  Sparkles,
  Shield,
} from "lucide-react";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description:
      "Complimentary high-speed internet throughout the entire property",
  },
  {
    icon: Coffee,
    title: "Room Service",
    description: "24/7 in-room dining with gourmet chef-prepared selections",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description:
      "State-of-the-art gym equipment with personal trainers available",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description:
      "Award-winning restaurants and exclusive cocktail bars on-site",
  },
  {
    icon: Waves,
    title: "Spa & Pool",
    description:
      "Rejuvenating spa treatments and a breathtaking infinity pool",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description:
      "Complimentary valet parking and luxury concierge services",
  },
  {
    icon: Sparkles,
    title: "Housekeeping",
    description:
      "Daily housekeeping with premium turndown service every evening",
  },
  {
    icon: Shield,
    title: "24/7 Security",
    description:
      "Round-the-clock security and state-of-the-art surveillance",
  },
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#C9A66B] text-sm tracking-[0.4em] uppercase font-poppins block mb-4">
            Our Services
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#2D2520] mb-6 font-playfair">
            Premium Amenities
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C9A66B]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A66B]" />
            <div className="w-12 h-px bg-[#C9A66B]/40" />
          </div>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Everything you need for an exceptional and unforgettable stay
          </p>
        </motion.div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="group relative text-center p-8 rounded-2xl bg-[#FAF8F5] hover:bg-white border border-transparent hover:border-[#C9A66B]/20 hover:shadow-xl transition-all duration-500 cursor-pointer"
              >
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden rounded-tr-2xl">
                  <div className="absolute top-0 right-0 w-px h-10 bg-[#C9A66B]/0 group-hover:bg-[#C9A66B]/30 transition-all duration-500" />
                  <div className="absolute top-0 right-0 w-10 h-px bg-[#C9A66B]/0 group-hover:bg-[#C9A66B]/30 transition-all duration-500" />
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-18 h-18 rounded-2xl bg-[#C9A66B]/10 mb-6 group-hover:bg-[#C9A66B] group-hover:shadow-lg group-hover:shadow-[#C9A66B]/20 transition-all duration-500 group-hover:-translate-y-1">
                  <Icon
                    className="text-[#C9A66B] group-hover:text-white transition-all duration-500"
                    size={30}
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg text-[#2D2520] mb-3 font-playfair group-hover:text-[#C9A66B] transition-colors duration-300">
                  {amenity.title}
                </h3>

                {/* Description */}
                <p className="text-[#8B7355] text-sm font-poppins leading-relaxed">
                  {amenity.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
