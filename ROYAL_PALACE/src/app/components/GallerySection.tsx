import { motion } from "motion/react";
import { Expand } from "lucide-react";
import { useState } from "react";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    alt: "Luxury Pool",
    span: "lg:col-span-2 lg:row-span-2",
    height: "h-64 lg:h-full",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=600&q=80",
    alt: "Hotel Room",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    alt: "Hotel Exterior",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80",
    alt: "Spa Area",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=600&q=80",
    alt: "Restaurant",
    span: "",
    height: "h-64",
  },
  {
    src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
    alt: "Lobby",
    span: "lg:col-span-2",
    height: "h-64",
  },
];

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5]">
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
              Visual Tour
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#2D2520] mb-6 font-playfair">
              Photo Gallery
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-px bg-[#C9A66B]/40" />
              <div className="w-2 h-2 rotate-45 border border-[#C9A66B]" />
              <div className="w-12 h-px bg-[#C9A66B]/40" />
            </div>
            <p className="text-[#8B7355] text-lg max-w-2xl mx-auto font-poppins font-light leading-relaxed">
              Explore our stunning spaces designed for your perfect retreat
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className={`relative group overflow-hidden rounded-xl cursor-pointer ${image.span} ${image.height}`}
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 scale-50 group-hover:scale-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                      <Expand size={20} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                  <p className="text-white text-sm font-poppins tracking-wider">
                    {image.alt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            src={selectedImage}
            alt="Gallery"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl font-light transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            &times;
          </button>
        </motion.div>
      )}
    </>
  );
}
