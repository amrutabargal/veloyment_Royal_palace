import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Phone, Mail, Clock } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Rooms", href: "#rooms" },
    { label: "Dining", href: "#dining" },
    { label: "Amenities", href: "#amenities" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "h-0 opacity-0 overflow-hidden"
            : "h-10 opacity-100 bg-[#2D2520]"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 h-full flex items-center justify-between text-white/80 text-xs font-poppins tracking-wide">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Phone size={12} className="text-[#C9A66B]" />
              +1 (555) 123-4567
            </span>
            <span className="flex items-center gap-1.5">
              <Mail size={12} className="text-[#C9A66B]" />
              info@royalpalace.com
            </span>
          </div>
          <span className="flex items-center gap-1.5">
            <Clock size={12} className="text-[#C9A66B]" />
            24/7 Concierge Service
          </span>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "top-0 bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5"
            : "top-0 lg:top-10 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <span className="font-playfair text-2xl sm:text-3xl tracking-[0.3em] leading-none">
                <span className={`transition-colors duration-300 ${isScrolled ? "text-[#C9A66B]" : "text-[#C9A66B]"}`}>
                  ROYAL
                </span>
                <span className={`transition-colors duration-300 ${isScrolled ? "text-[#2D2520]" : "text-white"}`}>
                  {" "}PALACE
                </span>
              </span>
              <span
                className={`text-[10px] tracking-[0.5em] uppercase font-poppins mt-0.5 transition-colors duration-300 ${
                  isScrolled ? "text-[#8B7355]" : "text-white/70"
                }`}
              >
                Hotel & Resort
              </span>
            </motion.a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={`relative px-4 py-2 text-sm tracking-wider font-poppins transition-colors duration-300 group ${
                    isScrolled
                      ? "text-[#2D2520] hover:text-[#C9A66B]"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#C9A66B] group-hover:w-6 transition-all duration-300" />
                </motion.a>
              ))}
            </nav>

            {/* Book Now Button - Desktop */}
            <motion.a
              href="#rooms"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="hidden lg:inline-flex items-center gap-2 bg-[#C9A66B] text-white px-7 py-2.5 text-sm tracking-wider font-poppins hover:bg-[#B8956A] transition-all duration-300 shadow-lg shadow-[#C9A66B]/20 hover:shadow-[#C9A66B]/40 hover:-translate-y-0.5"
            >
              BOOK NOW
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              className={`lg:hidden p-2 transition-colors duration-300 ${
                isScrolled ? "text-[#2D2520]" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-[#E8DED0]"
            >
              <div className="px-6 py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="block py-3 text-[#2D2520] hover:text-[#C9A66B] transition-colors duration-300 font-poppins text-base border-b border-[#F5F1EC] last:border-0"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <a
                  href="#rooms"
                  className="block w-full mt-4 bg-[#C9A66B] text-white text-center px-6 py-3 font-poppins tracking-wider hover:bg-[#B8956A] transition-all duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
