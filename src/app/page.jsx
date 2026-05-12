import HeroBanner from "@/components/home/HeroBanner";
import InfoSection from "@/components/home/InfoSection";
import BookingSection from "@/components/home/BookingSection";
import ExploreStudio from "@/components/home/ExploreStudio";
import TestimonialSection from "@/components/home/TestimonialSection";
import TeamSection from "@/components/home/TeamSection";
import PricingSection from "@/components/home/PricingSection";
import GallerySection from "@/components/home/GallerySection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroBanner />
      <InfoSection />
      <ExploreStudio />
      <GallerySection />
      <TeamSection />
      <TestimonialSection />
      <PricingSection />
      <BookingSection />
    </div>
  );
}
