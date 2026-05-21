import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service | Velvet",
  description: "Terms of service for Velvet luxury studio.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden bg-[#1E1E1E]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Vector.png"
            alt="Vector Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-4xl md:text-5xl text-white tracking-widest uppercase mb-4">
            TERMS OF SERVICE
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest">
            <Link href="/" className="text-white hover:text-[#BA8C43] transition-colors uppercase">HOME</Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#BA8C43] uppercase">TERMS</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the services provided by Velvet, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">2. Bookings and Cancellations</h2>
            <p>
              All bookings are subject to availability. We require at least 24 hours' notice for cancellations. Failure to provide notice may result in a cancellation fee.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">3. Conduct</h2>
            <p>
              We reserve the right to refuse service to anyone for any reason. We expect all clients to conduct themselves in a respectful manner while at our studio.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">4. Limitation of Liability</h2>
            <p>
              Velvet shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or your presence at our studio.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
