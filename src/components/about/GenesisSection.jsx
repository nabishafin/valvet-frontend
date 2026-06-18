"use client";

import Image from "next/image";
import { useSiteConfig } from "@/hooks/useSiteConfig";

function AvatarPlaceholder({ size = 48 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#9ca3af"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  );
}

export default function GenesisSection() {
  const { config } = useSiteConfig();
  const { name, role, image, backgroundImage, bio = [], quote } = config.founder;

  const bgSrc = backgroundImage || "/gelllary 1.jpg";

  return (
    <section className="w-full bg-white py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ─── LEFT SIDE ─── */}
          <div className="space-y-8 relative z-10">
            <div>
              <span className="text-[#650A33] uppercase tracking-[0.2em] text-[10px] font-extrabold mb-4 block">
                THE GENESIS
              </span>
              <h2 className="font-playfair text-5xl md:text-6xl lg:text-[64px] text-gray-900 leading-[1.1] tracking-tight">
                Meet the <span className="italic">Founder</span>
              </h2>
            </div>

            {/* Bio paragraphs */}
            <div className="space-y-6 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-xl">
              {bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}

              {/* Quote */}
              {quote && (
                <blockquote className="font-bold text-gray-900 italic text-lg border-l-2 border-[#BA8C43] pl-6 py-1">
                  &ldquo;{quote}&rdquo;
                </blockquote>
              )}
            </div>

            {/* Founder avatar + name */}
            <div className="pt-8 border-t border-gray-100 flex items-center gap-4 mt-12">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 bg-gray-100 flex items-center justify-center">
                {image ? (
                  <Image
                    src={image}
                    alt={name || "Founder"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <AvatarPlaceholder size={28} />
                )}
              </div>
              <div>
                <h4 className="font-playfair text-xl font-bold text-gray-900 leading-tight">
                  {name || "Founder"}
                </h4>
                <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                  {role}
                </p>
              </div>
            </div>
          </div>

          {/* ─── RIGHT SIDE — stacked images ─── */}
          <div className="relative flex justify-end pb-6">
            {/* Background (large) image */}
            <div className="relative w-full lg:w-[90%] aspect-[4/5] rounded-lg overflow-hidden shadow-sm bg-gray-100">
              <Image
                src={bgSrc}
                alt="Styling session"
                fill
                className="object-cover"
              />
            </div>

            {/* Foreground (portrait) image — bottom-left overlap */}
            <div className="absolute -bottom-6 -left-6 md:-left-12 w-[55%] aspect-square p-3 bg-[#EAE7E2] rounded-lg shadow-xl z-20">
              <div className="relative w-full h-full rounded-md overflow-hidden bg-gray-200 flex items-center justify-center">
                {image ? (
                  <Image
                    src={image}
                    alt={name ? `${name} — Founder Portrait` : "Founder Portrait"}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <AvatarPlaceholder size={64} />
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
