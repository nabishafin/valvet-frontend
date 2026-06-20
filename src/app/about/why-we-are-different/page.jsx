import Link from "next/link";
import BookingSection from "@/components/home/BookingSection";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Why We Are Different | Velvet Rouge Salon Suites",
  description: "Discover what sets Velvet Rouge apart from traditional salon environments.",
};

const differences = [
  {
    number: "01",
    title: "You Own Your Business",
    description:
      "At Velvet Rouge, you are the CEO. There are no commission splits, no booth-rental politics, and no one else dictating your pricing, your schedule, or your clientele. Your suite is your business.",
  },
  {
    number: "02",
    title: "A Luxury Environment That Matches Your Brand",
    description:
      "We built Velvet Rouge to look, feel, and smell like a luxury destination — because your clients deserve that, and so do you. Every detail of our building reflects the caliber of professional we attract.",
  },
  {
    number: "03",
    title: "Community Without the Drama",
    description:
      "Our suites are private, but our community is powerful. Velvet Rouge professionals support each other, refer clients, and grow together — without the competitive toxicity common in traditional salon environments.",
  },
  {
    number: "04",
    title: "All-In Pricing, Zero Surprises",
    description:
      "Your suite rental covers utilities, WiFi, water, parking, and access to all shared amenities. One transparent weekly rate — no hidden fees, no nickel-and-diming.",
  },
  {
    number: "05",
    title: "Built-In Marketing Support",
    description:
      "From day one, you're featured on the Velvet Rouge website, social media, and local listings. We actively market the building — which markets you.",
  },
  {
    number: "06",
    title: "Flexibility That Works for Your Life",
    description:
      "Month-to-month leasing options mean you're never locked in. Scale up to a larger suite or adjust your footprint as your business evolves — we grow with you.",
  },
];

export default function WhyWeAreDifferentPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Why We Are Different"
        subtitle="THE VELVET DIFFERENCE"
        bgImage="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Why We Are Different" },
        ]}
      />

      {/* Content */}
      <section className="bg-white py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto space-y-4">
            <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold block">THE VELVET DIFFERENCE</span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Not Just a Rental. <span className="italic">A Movement.</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Velvet Rouge was built specifically for the beauty professional who is ready to step
              fully into ownership. Here is what makes us genuinely different.
            </p>
          </div>

          <div className="space-y-0 divide-y divide-gray-100">
            {differences.map((item, idx) => (
              <div key={idx} className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 group hover:bg-[#FAFAF8] transition-colors rounded-2xl px-4">
                <div className="shrink-0">
                  <span className="font-playfair text-5xl text-[#BA8C43]/30 font-bold">{item.number}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-playfair text-2xl md:text-3xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-base leading-relaxed max-w-2xl">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
}
