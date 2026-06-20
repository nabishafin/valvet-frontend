import GenesisSection from "@/components/about/GenesisSection";
import BookingSection from "@/components/home/BookingSection";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Meet the Founder | Velvet Rouge Salon Suites",
  description: "Learn the story behind Velvet Rouge Salon Suites and the visionary who built it.",
};

export default function MeetTheFounderPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Meet the Founder"
        subtitle="THE GENESIS"
        bgImage="https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&q=80&auto=format&fit=crop"
        position="center top"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Meet the Founder" },
        ]}
      />

      <GenesisSection />
      <BookingSection bgColor="bg-[#F4F1EC]" />
    </div>
  );
}
