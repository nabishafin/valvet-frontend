"use client";

import BookingSection from "@/components/home/BookingSection";
import ServiceCard from "@/components/shared/ServiceCard";
import { useGetStudiosQuery } from "@/redux/features/serviceApi";
import Image from "next/image";

export default function ServicesPage() {
  const { data: studiosData, isLoading, isError } = useGetStudiosQuery();
  const suites = studiosData?.data || [];

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
      <section className="bg-white py-24 min-h-[600px]">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
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
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#BA8C43]"></div>
            </div>
          ) : isError ? (
            <div className="text-center py-20 text-red-500">
              Failed to load services. Please try again later.
            </div>
          ) : suites.length === 0 ? (
            <div className="text-center py-20 text-gray-500 italic">
              No studios available at the moment.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {suites.map((suite, idx) => (
                <ServiceCard key={suite._id || idx} {...suite} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA Section */}
      <BookingSection />
    </div>
  );
}
