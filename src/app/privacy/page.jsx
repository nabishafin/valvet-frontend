import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy | Velvet",
  description: "Privacy policy for Velvet luxury studio.",
};

export default function PrivacyPage() {
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
            PRIVACY POLICY
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest">
            <Link href="/" className="text-white hover:text-[#BA8C43] transition-colors uppercase">HOME</Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#BA8C43] uppercase">PRIVACY</span>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">1. Information We Collect</h2>
            <p>
              At Velvet, we collect information that you provide directly to us when you book a service, contact us, or sign up for our newsletter. This may include your name, email address, phone number, and any other details you share.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to process your bookings, respond to your inquiries, and provide you with updates about our services. We do not sell or share your personal information with third parties for their marketing purposes.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">3. Data Security</h2>
            <p>
              We take reasonable measures to protect the information we collect from unauthorized access, disclosure, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </div>

          <div className="space-y-6 text-gray-600 leading-relaxed">
            <h2 className="font-playfair text-3xl text-gray-900 uppercase tracking-wide">4. Your Choices</h2>
            <p>
              You can opt-out of receiving promotional emails from us by following the instructions in those emails. If you opt-out, we may still send you non-promotional emails, such as those about your bookings.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
