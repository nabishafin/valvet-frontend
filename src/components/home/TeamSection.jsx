"use client";

import { useRef } from "react";
import Image from "next/image";

export default function TeamSection() {
  const scrollRef = useRef(null);

  const team = [
    {
      name: "Elara Vane",
      role: "CREATIVE DIRECTOR",
      description: "Editorial Cuts & Balayage",
      experience: "12+ Years",
      rating: 5,
      image: "/team 1.jpg"
    },
    {
      name: "Julian Ross",
      role: "SENIOR STYLIST",
      description: "Men's Grooming & Precision Cuts",
      experience: "8 Years",
      rating: 5,
      image: "/team 2.jpg"
    },
    {
      name: "Sofia Blanc",
      role: "SKIN SPECIALIST",
      description: "Advanced Esthetics",
      experience: "6 Years",
      rating: 5,
      image: "/team 3.png"
    }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 32;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            OUR EXPERT TEAM
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Our Experience <span className="italic">Specialists</span>
          </h2>
        </div>

        {/* Carousel / Team Cards */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-6 top-[38%] -translate-y-1/2 w-12 h-12 bg-[#E1DDD7] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 border border-transparent text-black hover:bg-[#d0ccc6] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-6 top-[38%] -translate-y-1/2 w-12 h-12 bg-[#E1DDD7] rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-center z-10 border border-transparent text-black hover:bg-[#d0ccc6] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-10 px-2"
          >
            {team.map((member, idx) => (
              <div
                key={idx}
                className="min-w-[100%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] shrink-0 snap-start group"
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow">
                  {/* Image Container */}
                  <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Info */}
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[#650A33] text-[10px] font-bold tracking-widest uppercase">
                        {member.role}
                      </span>
                      <div className="flex justify-between items-center">
                        <h3 className="font-playfair text-2xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#650A33" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span className="text-sm font-bold text-gray-900">{member.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between items-end pb-4 border-b border-gray-50">
                      <p className="text-gray-500 text-sm">{member.description}</p>
                      <span className="text-gray-400 text-xs font-medium">{member.experience}</span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3 pt-2">
                      <button className="flex-1 bg-[#BA8C43] text-white py-3 rounded-full font-bold text-sm hover:bg-[#a17a39] transition-colors shadow-sm">
                        Book {member.name.split(' ')[0]}
                      </button>
                      <button className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 hover:bg-gray-100 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
