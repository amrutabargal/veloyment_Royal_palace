import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { RoomsShowcase } from "./components/RoomsShowcase";
import { DiningSection } from "./components/DiningSection";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { GallerySection } from "./components/GallerySection";
import { ReviewsSlider } from "./components/ReviewsSlider";
import { CtaBanner } from "./components/CtaBanner";
import { Footer } from "./components/Footer";

export default function App() {
  const rooms = [
    {
      title: "Deluxe Room",
      description:
        "Elegant and spacious room with modern amenities, perfect for couples or solo travelers seeking comfort and style.",
      price: "$299/night",
      image:
        "https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzcwNzYyODkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
      size: "35 m\u00B2",
      guests: "2 Guests",
    },
    {
      title: "Executive Suite",
      description:
        "Luxurious suite featuring a separate living area, stunning city views, and premium furnishings for an elevated stay.",
      price: "$499/night",
      image:
        "https://images.unsplash.com/photo-1759223607861-f0ef3e617739?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHN1aXRlJTIwYmF0aHJvb218ZW58MXx8fHwxNzcwODgxMTU1fDA&ixlib=rb-4.1.0&q=80&w=1080",
      size: "55 m\u00B2",
      guests: "3 Guests",
    },
    {
      title: "Presidential Suite",
      description:
        "The ultimate in luxury living with panoramic views, private terrace, and exclusive concierge service.",
      price: "$999/night",
      image:
        "https://images.unsplash.com/photo-1729717949712-1c51422693d1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHBvb2wlMjByZXNvcnR8ZW58MXx8fHwxNzcwNzk4MDA3fDA&ixlib=rb-4.1.0&q=80&w=1080",
      size: "120 m\u00B2",
      guests: "4 Guests",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <Header />
      <HeroSection imageUrl="https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcwNzcxMDUyfDA&ixlib=rb-4.1.0&q=80&w=1080" />
      <RoomsShowcase rooms={rooms} />
      <DiningSection />
      <AmenitiesSection />
      <GallerySection />
      <ReviewsSlider />
      <CtaBanner />
      <Footer />
    </div>
  );
}
