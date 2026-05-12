import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function TestimonialSection() {
  return (
    <section className="w-full bg-[#F4F1EC] py-24">
      <div className="w-full px-6">
        <div className="relative">


          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 ">
            {/* Left: Image with Frame */}
            <div className="w-full md:w-[40%] flex justify-center md:justify-end">
              <div className="relative w-full max-w-[450px] aspect-square p-3 bg-white shadow-xl rounded-sm">
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/testomonial 1.jpg"
                    alt="Client Testimonial"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="w-full md:w-[60%] space-y-6">
              <div>
                <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold mb-3 block">
                  TESTIMONIALS
                </span>
                <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
                  What Our Client Say
                </h2>
              </div>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl italic">
                "I recently visited Velvet for a hair styling session, and I can&apos;t express how thrilled I am with the results. From the moment I walked in, the warm and welcoming atmosphere put me at ease. The stylists were attentive, taking the time to listen to my preferences and offering expert advice on what would suit me best."
              </p>

              <div className="flex flex-col gap-6">
                {/* Stars */}
                <div className="flex gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#F59E0B"
                      stroke="none"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>

                {/* Author */}
                <h4 className="text-gray-900 font-bold text-3xl md:text-4xl tracking-tight">Michelle Jager</h4>

                {/* Navigation Arrows */}
                <div className="flex gap-8 pt-6">
                  <button className="text-gray-400 hover:text-gray-900 transition-colors p-1">
                    <ArrowLeft size={28} strokeWidth={1.5} />
                  </button>
                  <button className="text-gray-900 hover:text-gray-400 transition-colors p-1">
                    <ArrowRight size={28} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
