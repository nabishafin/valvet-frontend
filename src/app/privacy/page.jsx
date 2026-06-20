import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Privacy Policy | Velvet",
  description: "Privacy policy for Velvet luxury studio.",
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Privacy Policy"
        bgImage="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&q=80&auto=format&fit=crop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy" },
        ]}
      />

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
