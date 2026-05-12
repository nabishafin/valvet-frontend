import HeroBanner from "@/components/home/HeroBanner";
import InfoSection from "@/components/home/InfoSection";
import ExploreStudio from "@/components/home/ExploreStudio";
import TestimonialSection from "@/components/home/TestimonialSection";
import TeamSection from "@/components/home/TeamSection";
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
    </div>
  );
}
