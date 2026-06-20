import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Terms of Service | Velvet",
  description: "Terms of service for Velvet luxury studio.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Terms of Service"
        bgImage="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=1920&q=80&auto=format&fit=crop"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms" },
        ]}
      />

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
