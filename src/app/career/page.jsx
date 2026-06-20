import Link from "next/link";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Careers | Velvet",
  description: "Join the Velvet team of luxury beauty professionals.",
};

export default function CareerPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Join Our Team"
        subtitle="CAREERS AT VELVET"
        bgImage="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Careers" },
        ]}
      />

      {/* Content Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900">Elevate Your Career</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              At Velvet, we are always looking for passionate, talented, and ambitious beauty professionals to join our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F3F0EC] p-10 rounded-2xl space-y-6">
              <h3 className="font-playfair text-2xl text-gray-900">Why Work With Us?</h3>
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3 items-start">
                  <span className="text-[#BA8C43] mt-1">•</span>
                  <span>Access to premium studio essentials and lighting.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#BA8C43] mt-1">•</span>
                  <span>A community of like-minded luxury professionals.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#BA8C43] mt-1">•</span>
                  <span>Marketing support and brand visibility.</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-[#BA8C43] mt-1">•</span>
                  <span>Flexible schedules and creative freedom.</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#1E1E1E] text-white p-10 rounded-2xl space-y-6">
              <h3 className="font-playfair text-2xl">Ready to Begin?</h3>
              <p className="text-zinc-400">
                Send your portfolio and resume to our management team for review. We'd love to hear about your artistry.
              </p>
              <div className="pt-4">
                <a href="mailto:careers@velvet.com" className="inline-block bg-[#BA8C43] text-white px-8 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-[#a17a39] transition-all">
                  Apply Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
