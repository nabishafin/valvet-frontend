import Link from "next/link";
import Image from "next/image";
import GenesisSection from "@/components/about/GenesisSection";
import BookingSection from "@/components/home/BookingSection";

export const metadata = {
  title: "Meet the Founder | Velvet Rouge Salon Suites",
  description: "Learn the story behind Velvet Rouge Salon Suites and the visionary who built it.",
};

export default function MeetTheFounderPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1E1E1E]">
        <div className="absolute inset-0 opacity-20">
          <Image src="/Vector.png" alt="Vector Pattern" fill className="object-cover" />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-4xl md:text-6xl text-white tracking-widest uppercase mb-4">
            MEET THE FOUNDER
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest">
            <Link href="/" className="text-white hover:text-[#BA8C43] transition-colors uppercase">HOME</Link>
            <span className="text-gray-500">/</span>
            <Link href="/about" className="text-white hover:text-[#BA8C43] transition-colors uppercase">ABOUT</Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#BA8C43] uppercase">MEET THE FOUNDER</span>
          </div>
        </div>
      </section>

      <GenesisSection />
      <BookingSection bgColor="bg-[#F4F1EC]" />
    </div>
  );
}
