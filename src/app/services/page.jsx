import BookingSection from "@/components/home/BookingSection";
import ServiceCard from "@/components/shared/ServiceCard";
import { services } from "@/data/services";
import Image from "next/image";

export default function ServicesPage() {
  const suites = services;
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1E1E1E]">
        {/* Vector Background */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Vector.png"
            alt="Vector Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-5xl md:text-7xl text-white tracking-widest uppercase">
            SERVICES
          </h1>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="bg-white py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-20 space-y-4">
            <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold block">
              OUR SERVICES
            </span>
            <h2 className="font-playfair text-5xl md:text-6xl text-gray-900 tracking-tight">
              Explore Your <span className="italic">Studio.</span>
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {suites.map((suite, idx) => (
              <ServiceCard key={idx} {...suite} />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <BookingSection />
    </div>
  );
}
