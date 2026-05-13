import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
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
        <h1 className="font-playfair text-5xl md:text-7xl text-white tracking-widest uppercase mb-4">
          ABOUT US
        </h1>
        <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest">
          <Link href="/" className="text-white hover:text-[#BA8C43] transition-colors uppercase">HOME</Link>
          <span className="text-gray-500">/</span>
          <span className="text-[#BA8C43] uppercase">OUR STORY</span>
        </div>
      </div>
    </section>
  );
}
