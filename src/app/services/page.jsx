"use client";

import BookingSection from "@/components/home/BookingSection";
import ServiceCard from "@/components/shared/ServiceCard";
import { useGetStudiosQuery } from "@/redux/features/serviceApi";
import PageHero from "@/components/shared/PageHero";

export default function ServicesPage() {
  const { data: studiosData, isLoading, isError } = useGetStudiosQuery();
  const suites = studiosData?.data || [];

  return (
    <div className="flex flex-col">
      <PageHero
        title="Services"
        subtitle="EXPLORE YOUR STUDIO"
        bgImage="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80&auto=format&fit=crop"
        position="center top"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services" },
        ]}
      />

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
