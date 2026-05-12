import Image from "next/image";
import Link from "next/link";

export default function ServiceCard({ title, price, badge, image, features, slug }) {
  return (
    <div className="flex flex-col group cursor-pointer h-full">
      {/* Image */}
      <div className="relative w-full h-[400px] md:h-[460px] bg-gray-100 rounded-2xl mb-6 overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/5 transition-opacity duration-500 group-hover:opacity-0" />
        {/* Badge */}
        <div className="absolute bottom-6 left-6 px-5 py-2 bg-white/60 backdrop-blur-md rounded-full text-[10px] font-bold text-black tracking-wider shadow-sm">
          {badge}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 px-2">
        <div className="flex justify-between items-center">
          <h3 className="font-playfair text-[22px] font-bold text-gray-900">
            {title}
          </h3>
          <span className="text-[#650A33] font-bold text-sm tracking-wide whitespace-nowrap ml-4">
            {price}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-y-4 gap-x-4 border-b border-gray-100 pb-6 mt-1">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-[#a68a64] text-xs mt-0.5">•</span>
              <span className="text-[10px] uppercase text-[#8B7D6B] font-bold tracking-[0.08em] leading-tight">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <Link 
          href={`/services/${slug || "prime-corner-suite"}`}
          className="inline-flex items-center gap-2 text-[13px] font-bold text-gray-900 mt-2 transition-colors group-hover:text-[#650A33] uppercase tracking-widest"
        >
          VIEW STUDIO DETAILS
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform duration-300 group-hover:translate-x-1.5">
            <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
