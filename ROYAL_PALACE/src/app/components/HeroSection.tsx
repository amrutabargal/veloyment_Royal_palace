import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, Users, Search, ChevronDown } from "lucide-react";

interface HeroSectionProps {
  imageUrl: string;
}

export function HeroSection({ imageUrl }: HeroSectionProps) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Zoom Animation */}
      <motion.div
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundAttachment: "fixed",
          }}
        />
        {/* Multi-layer gradient overlay for cinematic feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-px h-32 bg-gradient-to-b from-transparent via-[#C9A66B] to-transparent"
        />
      </div>
      <div className="absolute top-1/4 right-8 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.3, x: 0 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-px h-32 bg-gradient-to-b from-transparent via-[#C9A66B] to-transparent"
        />
      </div>

      {/* Hero Content */}
      <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Top Accent Line */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "4rem" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-0.5 bg-[#C9A66B] mb-6"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[#C9A66B] text-sm sm:text-base tracking-[0.4em] uppercase font-poppins mb-4"
        >
          Welcome to Royal Palace
        </motion.p>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center mb-6"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-playfair leading-[1.1] tracking-wide">
            Experience
            <br />
            <span className="text-[#D4AF76] italic">Luxury</span>{" "}
            Redefined
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto font-poppins font-light text-center mb-12 leading-relaxed"
        >
          Indulge in world-class hospitality where every detail is
          crafted for your comfort and every moment becomes a cherished memory
        </motion.p>

        {/* Glassmorphism Booking Bar */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="w-full max-w-5xl"
        >
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/15">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {/* Check-in */}
              <div className="relative group">
                <label className="block text-[#C9A66B] text-xs tracking-wider uppercase mb-1.5 font-poppins px-1">
                  Check-in
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A66B]"
                    size={18}
                  />
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full bg-white/95 rounded-xl pl-11 pr-4 py-3.5 text-[#2D2520] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/50 font-poppins transition-all duration-300 placeholder:text-[#8B7355]"
                  />
                </div>
              </div>

              {/* Check-out */}
              <div className="relative group">
                <label className="block text-[#C9A66B] text-xs tracking-wider uppercase mb-1.5 font-poppins px-1">
                  Check-out
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A66B]"
                    size={18}
                  />
                  <input
                    type="date"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full bg-white/95 rounded-xl pl-11 pr-4 py-3.5 text-[#2D2520] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/50 font-poppins transition-all duration-300 placeholder:text-[#8B7355]"
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="relative group">
                <label className="block text-[#C9A66B] text-xs tracking-wider uppercase mb-1.5 font-poppins px-1">
                  Guests
                </label>
                <div className="relative">
                  <Users
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-[#C9A66B]"
                    size={18}
                  />
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-white/95 rounded-xl pl-11 pr-10 py-3.5 text-[#2D2520] text-sm focus:outline-none focus:ring-2 focus:ring-[#C9A66B]/50 font-poppins appearance-none transition-all duration-300"
                  >
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7355] pointer-events-none"
                    size={16}
                  />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-end">
                <button className="w-full bg-[#C9A66B] hover:bg-[#B8956A] text-white rounded-xl py-3.5 px-6 transition-all duration-300 shadow-lg shadow-[#C9A66B]/25 hover:shadow-[#C9A66B]/40 hover:-translate-y-0.5 font-poppins text-sm tracking-wider uppercase flex items-center justify-center gap-2">
                  <Search size={18} />
                  Check Availability
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-white/50 text-xs tracking-[0.3em] uppercase font-poppins">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-5 h-9 border-2 border-white/30 rounded-full flex justify-center pt-2"
          >
            <div className="w-1 h-2.5 bg-[#C9A66B] rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
