import { motion } from "motion/react";
import Slider from "react-slick";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "An absolutely wonderful experience! The attention to detail and the luxurious ambiance exceeded all my expectations. Every member of the staff went above and beyond to make our stay memorable.",
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "The epitome of luxury and elegance. From the moment we arrived, we were treated like royalty. The rooms are stunning, and the dining experience was world-class. Highly recommended!",
    date: "December 2025",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    name: "Emma Williams",
    location: "London, UK",
    rating: 5,
    text: "A perfect blend of modern luxury and timeless elegance. The spa facilities are incredible, and the concierge service helped us plan the most amazing experiences during our stay.",
    date: "January 2026",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
  },
  {
    name: "David Martinez",
    location: "Madrid, Spain",
    rating: 5,
    text: "Outstanding in every way! The rooms are spacious and beautifully designed. The breakfast buffet was exceptional, and the staff's warm hospitality made us feel at home.",
    date: "November 2025",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
  },
];

export function ReviewsSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
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
            Testimonials
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl text-[#2D2520] mb-6 font-playfair">
            Guest Reviews
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-px bg-[#C9A66B]/40" />
            <div className="w-2 h-2 rotate-45 border border-[#C9A66B]" />
            <div className="w-12 h-px bg-[#C9A66B]/40" />
          </div>
          <p className="text-[#8B7355] text-lg max-w-2xl mx-auto font-poppins font-light leading-relaxed">
            Hear what our guests have to say about their unforgettable experience
          </p>
        </motion.div>

        {/* Reviews Slider */}
        <div className="pb-16">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div key={index} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-[#FAF8F5] rounded-2xl p-8 h-full relative border border-[#E8DED0]/50"
                >
                  {/* Quote Icon */}
                  <div className="absolute -top-4 left-8">
                    <div className="w-10 h-10 rounded-full bg-[#C9A66B] flex items-center justify-center shadow-lg shadow-[#C9A66B]/20">
                      <Quote className="text-white" size={18} />
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-5 mt-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-[#C9A66B] fill-[#C9A66B]"
                        size={16}
                      />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className="text-[#2D2520] mb-8 text-base leading-relaxed font-poppins italic">
                    "{review.text}"
                  </p>

                  {/* Reviewer Info */}
                  <div className="flex items-center gap-4 pt-5 border-t border-[#E8DED0]">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover ring-2 ring-[#C9A66B]/20"
                    />
                    <div>
                      <h4 className="text-base text-[#2D2520] font-playfair font-semibold">
                        {review.name}
                      </h4>
                      <p className="text-[#8B7355] text-xs font-poppins">
                        {review.location} &bull; {review.date}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
