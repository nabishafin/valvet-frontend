import AboutHero from "@/components/about/AboutHero";
import GenesisSection from "@/components/about/GenesisSection";
import ValuesSection from "@/components/about/ValuesSection";
import TeamSection from "@/components/home/TeamSection";
import BookingSection from "@/components/home/BookingSection";
import GallerySection from "@/components/home/GallerySection";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <GenesisSection />
      <ValuesSection />
      <GallerySection bgColor="bg-white" />
      <TeamSection bgColor="bg-[#F4F1EC]" />
      <BookingSection />
    </div>
  );
}
