import { motion } from "motion/react";
import { Bed, Users, Maximize, Wifi, ArrowRight } from "lucide-react";

interface Room {
  title: string;
  description: string;
  price: string;
  image: string;
  size: string;
  guests: string;
}

interface RoomsShowcaseProps {
  rooms: Room[];
}

export function RoomsShowcase({ rooms }: RoomsShowcaseProps) {
  return (
    <section id="rooms" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
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
            Accommodations
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#2D2520] mb-6 font-playfair">
            Luxury Rooms & Suites
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C9A66B]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A66B]" />
            <div className="w-12 h-px bg-[#C9A66B]/40" />
          </div>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Discover our collection of thoughtfully designed accommodations,
            each offering a unique blend of comfort and elegance
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden">
                <motion.img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-[#C9A66B] px-4 py-2 rounded-full shadow-md">
                  <span className="font-poppins font-semibold text-sm">
                    {room.price}
                  </span>
                </div>

                {/* Hover CTA */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <a
                    href="#"
                    className="flex items-center justify-center gap-2 w-full bg-white text-[#2D2520] py-3 rounded-xl font-poppins text-sm tracking-wider hover:bg-[#C9A66B] hover:text-white transition-all duration-300"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl text-[#2D2520] mb-3 font-playfair">
                  {room.title}
                </h3>
                <p className="text-[#8B7355] mb-5 font-poppins text-sm leading-relaxed line-clamp-2">
                  {room.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-[#E8DED0] mb-5" />

                {/* Room Features */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1.5 text-[#8B7355]">
                    <Maximize size={15} className="text-[#C9A66B]" />
                    <span className="text-xs font-poppins">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8B7355]">
                    <Users size={15} className="text-[#C9A66B]" />
                    <span className="text-xs font-poppins">{room.guests}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8B7355]">
                    <Wifi size={15} className="text-[#C9A66B]" />
                    <span className="text-xs font-poppins">Free WiFi</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8B7355]">
                    <Bed size={15} className="text-[#C9A66B]" />
                    <span className="text-xs font-poppins">King Bed</span>
                  </div>
                </div>

                {/* Book Button */}
                <button className="w-full bg-[#2D2520] text-white py-3.5 rounded-xl hover:bg-[#C9A66B] transition-all duration-300 font-poppins text-sm tracking-wider shadow-md hover:shadow-lg">
                  BOOK NOW
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Rooms Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[#C9A66B] hover:text-[#B8956A] font-poppins text-sm tracking-wider uppercase group transition-colors duration-300"
          >
            View All Rooms
            <ArrowRight
              size={16}
              className="group-hover:translate-x-1 transition-transform duration-300"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
