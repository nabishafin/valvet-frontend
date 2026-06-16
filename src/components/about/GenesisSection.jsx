"use client";

import Image from "next/image";
import { useSiteConfig } from "@/hooks/useSiteConfig";

export default function GenesisSection() {
  const { config } = useSiteConfig();

  return (
    <section className="w-full bg-white py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <div className="space-y-8 relative z-10">
              <div>
                <span className="text-[#650A33] uppercase tracking-[0.2em] text-[10px] font-extrabold mb-4 block">
                  THE GENESIS
                </span>
                <h2 className="font-playfair text-5xl md:text-6xl lg:text-[64px] text-gray-900 leading-[1.1] tracking-tight">
                  Meet the <span className="italic">Founder</span>
                </h2>
              </div>

              <div className="space-y-6 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-xl">
                <p>
                  Aura was born from a simple yet profound realization: the modern salon
                  experience was missing its soul. We envisioned a sanctuary where technique
                  meets intuition, and where every client is treated as a masterpiece in
                  progress.
                </p>
                <p>
                  Our philosophy transcends traditional beauty standards. We believe that true
                  radiance comes from within, nourished by an atmosphere of calm, warmth,
                  and absolute artisan expertise.
                </p>
                <p className="font-bold text-gray-900 italic text-lg border-l-2 border-[#BA8C43] pl-6 py-1">
                  "We don't just transform your hair; we restore your sense of self."
                </p>
              </div>

              <div className="pt-8 border-t border-gray-100 flex items-center gap-4 mt-12">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                  <Image
                    src={config.founder.image}
                    alt={config.founder.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-playfair text-xl font-bold text-gray-900 leading-tight">{config.founder.name}</h4>
                  <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                    {config.founder.role}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content - Image Section */}
            <div className="relative flex justify-end">
              <div className="relative w-full lg:w-[90%] aspect-[4/5] rounded-lg overflow-hidden shadow-sm">
                <Image
                  src="/gelllary 1.jpg"
                  alt="Styling session"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Overlapping Smaller Image with thick frame */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 w-[55%] aspect-square p-3 bg-[#EAE7E2] rounded-lg shadow-xl z-20">
                <div className="relative w-full h-full rounded-md overflow-hidden bg-white">
                  <Image
                    src="/genispic.jpg"
                    alt="Founder Portrait"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
