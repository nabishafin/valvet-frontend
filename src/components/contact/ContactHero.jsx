import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden bg-[#1E1E1E]">
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
        <h1 className="font-playfair text-5xl md:text-7xl text-white">
          Contact us
        </h1>
      </div>
    </section>
  );
}
