"use client";

import { useRef } from "react";
import ServiceCard from "../shared/ServiceCard";
import { services } from "@/data/services";

export default function ExploreStudio() {
  const suites = services;

  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const firstCard = scrollRef.current.children[0];
      const scrollAmount = firstCard ? firstCard.offsetWidth + 32 : 400; // 32 is gap-8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full bg-white py-16 overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16">
          <div className="flex flex-col gap-2">
            <span className="text-[#C5A059] uppercase tracking-widest text-sm font-bold mb-2">
              EXPLORE YOUR STUDIO.
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Explore Your Studio.
            </h2>
          </div>
          <div className="flex flex-col gap-3 max-w-md">
            <p className="text-[#161616B2] text-sm md:text-base leading-relaxed">
              Every suite is a blank canvas designed with premium essentials,
              allowing you to focus on what matters: your artistry.
            </p>
            <div className="flex items-center gap-3 mt-1">
              <span className="w-3.5 h-3.5 rounded-full bg-red-600 animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.6)]"></span>
              <span className="text-red-600 font-bold text-[13px] tracking-wide">
                ONLY 3 SUITES REMAINING
              </span>
            </div>
          </div>
        </div>

        {/* Carousel / Cards */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden lg:flex absolute -left-6 top-[30%] -translate-y-1/2 w-12 h-12 bg-[#E1DDD7] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] items-center justify-center z-10 border border-transparent text-black hover:bg-[#d0ccc6] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden lg:flex absolute -right-6 top-[30%] -translate-y-1/2 w-12 h-12 bg-[#E1DDD7] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] items-center justify-center z-10 border border-transparent text-black hover:bg-[#d0ccc6] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-4"
          >
            {suites.map((suite, idx) => (
              <div key={idx} className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] shrink-0 snap-start">
                <ServiceCard {...suite} />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="flex justify-center mt-16">
          <button className="bg-[#BA8C43] text-white px-10 py-3.5 rounded-full font-bold text-[13px] tracking-widest transition-colors hover:bg-[#a17a39] shadow-md hover:shadow-lg">
            Become A Owner
          </button>
        </div>

      </div>
    </section>
  );
}
