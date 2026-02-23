import { motion } from "motion/react";
import { Clock, Star, ArrowRight } from "lucide-react";

const diningOptions = [
  {
    title: "The Grand Restaurant",
    description:
      "An exquisite fine dining experience featuring seasonal menus crafted by our Michelin-starred chef, with locally sourced ingredients and global inspiration.",
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
    hours: "6:00 PM - 11:00 PM",
    rating: "Michelin Starred",
  },
  {
    title: "Sky Lounge Bar",
    description:
      "Elevated cocktails and panoramic city views from our rooftop bar. Enjoy hand-crafted drinks, light bites, and live jazz every weekend.",
    image:
      "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
    hours: "4:00 PM - 1:00 AM",
    rating: "Signature Cocktails",
  },
  {
    title: "Breakfast Terrace",
    description:
      "Start your morning with a lavish buffet featuring international cuisine, fresh pastries, and organic juices served on our sunlit terrace.",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    hours: "6:30 AM - 11:00 AM",
    rating: "Buffet & A La Carte",
  },
];

export function DiningSection() {
  return (
    <section id="dining" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#2D2520]">
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
            Culinary Excellence
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-white mb-6 font-playfair">
            Dining Experience
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C9A66B]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A66B]" />
            <div className="w-12 h-px bg-[#C9A66B]/40" />
          </div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Savor extraordinary flavors across our world-class restaurants and
            bars
          </p>
        </motion.div>

        {/* Dining Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {diningOptions.map((option, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Image */}
              <div className="relative h-96 overflow-hidden">
                <img
                  src={option.image}
                  alt={option.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  {/* Badge */}
                  <div className="flex items-center gap-1.5 mb-3">
                    <Star size={14} className="text-[#C9A66B] fill-[#C9A66B]" />
                    <span className="text-[#C9A66B] text-xs tracking-wider uppercase font-poppins">
                      {option.rating}
                    </span>
                  </div>

                  <h3 className="text-2xl text-white mb-3 font-playfair">
                    {option.title}
                  </h3>

                  <p className="text-white/70 text-sm font-poppins mb-4 leading-relaxed line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
                    {option.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-white/60 text-xs font-poppins">
                      <Clock size={14} className="text-[#C9A66B]" />
                      {option.hours}
                    </span>

                    <a
                      href="#"
                      className="flex items-center gap-1 text-[#C9A66B] text-xs font-poppins tracking-wider uppercase opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-300"
                    >
                      Reserve
                      <ArrowRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
