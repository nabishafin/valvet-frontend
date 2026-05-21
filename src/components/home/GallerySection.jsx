"use client";

import Image from "next/image";
import { useSiteConfig } from "@/hooks/useSiteConfig";

export default function GallerySection({ bgColor = "bg-[#F4F1EC]" }) {
  const { config } = useSiteConfig();

  // Helper to get handle from URL or username
  const getInstagramHandle = (input) => {
    if (!input) return "VELVET.ROUGE";
    if (input.includes("instagram.com/")) {
      const parts = input.split("instagram.com/").pop().split("/")[0].split("?")[0];
      return parts.toUpperCase() || "VELVET.ROUGE";
    }
    return input.toUpperCase();
  };

  const handle = getInstagramHandle(config.socials.instagram);

  return (
    <section className={`w-full ${bgColor} py-20 overflow-hidden`}>
      {/* Header - Kept in container for alignment */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 mb-16 text-center">
        <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
          OUR GALLERY
        </span>
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
          Seeing is <span className="italic">Believing</span>
        </h2>
      </div>

      {/* Full Width Grid */}
      <div className="flex flex-col gap-5 w-full">
        {/* Top Row: 30% and 70% */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-[30%] relative aspect-[3/4] md:h-[600px] overflow-hidden">
            <Image
              src="/gelllary 1.jpg"
              alt="Gallery 1"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-[70%] relative aspect-video md:h-[600px] overflow-hidden">
            <Image
              src="/gellary 2.jpg"
              alt="Gallery 2"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Bottom Row: 50% and 50% */}
        <div className="flex flex-col md:flex-row gap-5">
          <div className="w-full md:w-1/2 relative aspect-video md:h-[450px] overflow-hidden">
            <Image
              src="/gelllary 3.jpg"
              alt="Gallery 3"
              fill
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 relative aspect-video md:h-[450px] overflow-hidden">
            <Image
              src="/gellary 4.jpg"
              alt="Gallery 4"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Footer Button - Kept in container for alignment */}
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 mt-16 flex justify-center">
        <a
          href={config.socials.instagram.startsWith("http") ? config.socials.instagram : `https://instagram.com/${config.socials.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#EAE4D9] text-[#650A33] px-8 py-4 rounded-full font-bold text-xs tracking-widest transition-all hover:bg-[#dfd8ca] shadow-sm"
        >
          FOLLOW @{handle}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
