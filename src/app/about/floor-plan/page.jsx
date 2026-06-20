import Link from "next/link";
import BookingSection from "@/components/home/BookingSection";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Our Floor Plan | Velvet Rouge Salon Suites",
  description: "Explore the layout of Velvet Rouge Salon Suites and find the perfect space for your business.",
};

const suiteTypes = [
  {
    name: "Standard Suite",
    size: "Approx. 120 sq ft",
    ideal: "Solo stylist, esthetician, lash artist",
    features: ["1 styling station", "Private shampoo bowl", "Built-in storage", "Dimmable lighting"],
    price: "From $275 / wk",
    color: "bg-[#F4F1EC]",
  },
  {
    name: "Executive Suite",
    size: "Approx. 180 sq ft",
    ideal: "Established stylist, dual-service provider",
    features: ["2 styling stations", "Floor-to-ceiling windows", "Private sink", "Premium layout"],
    price: "From $325 / wk",
    color: "bg-[#1E1E1E] text-white",
    highlight: true,
  },
  {
    name: "Corner Suite",
    size: "Approx. 220 sq ft",
    ideal: "High-volume artist, educator, dual technician",
    features: ["Wrap-around windows", "Exclusive corner location", "Extra storage", "Premium fixtures"],
    price: "From $350 / wk",
    color: "bg-[#F4F1EC]",
  },
];

export default function FloorPlanPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Our Floor Plan"
        subtitle="THE SPACES"
        bgImage="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Floor Plan" },
        ]}
      />

      {/* Suite Types */}
      <section className="bg-white py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold block">THE SPACES</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 tracking-tight">
              Choose Your <span className="italic">Perfect Suite</span>
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Velvet Rouge offers three suite configurations to match every stage of your business journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {suiteTypes.map((suite, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-10 space-y-6 ${suite.highlight ? "bg-[#1E1E1E] text-white shadow-2xl scale-[1.02]" : "bg-[#F4F1EC]"}`}
              >
                {suite.highlight && (
                  <span className="inline-block text-[10px] font-bold uppercase tracking-widest bg-[#BA8C43] text-white px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                )}
                <div>
                  <h3 className={`font-playfair text-2xl font-bold mb-1 ${suite.highlight ? "text-white" : "text-gray-900"}`}>{suite.name}</h3>
                  <p className={`text-[12px] uppercase tracking-widest font-bold ${suite.highlight ? "text-[#BA8C43]" : "text-[#650A33]"}`}>{suite.size}</p>
                </div>
                <p className={`text-sm ${suite.highlight ? "text-white/60" : "text-gray-500"}`}>Ideal for: {suite.ideal}</p>
                <ul className="space-y-3">
                  {suite.features.map((f, i) => (
                    <li key={i} className={`flex items-center gap-3 text-sm ${suite.highlight ? "text-white/80" : "text-gray-600"}`}>
                      <span className="text-[#BA8C43]">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <div className={`pt-4 border-t ${suite.highlight ? "border-white/10" : "border-gray-200"}`}>
                  <p className={`font-playfair text-2xl font-bold ${suite.highlight ? "text-white" : "text-gray-900"}`}>{suite.price}</p>
                </div>
                <Link
                  href="/contact"
                  className={`block text-center py-3 rounded-full font-bold text-xs tracking-widest transition-all ${suite.highlight ? "bg-[#BA8C43] text-white hover:bg-[#a17a39]" : "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200"}`}
                >
                  INQUIRE NOW
                </Link>
              </div>
            ))}
          </div>

          {/* Floor Plan Placeholder */}
          <div className="bg-[#F4F1EC] rounded-3xl p-12 md:p-20 text-center space-y-6">
            <h3 className="font-playfair text-3xl text-gray-900">Interactive Floor Plan</h3>
            <p className="text-gray-500 max-w-xl mx-auto">
              Our detailed floor plan is available during your private tour. Schedule a visit to walk through
              the building and choose the exact suite that feels right for your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-[#650A33] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#4d0826] transition-all"
            >
              SCHEDULE A TOUR
            </Link>
          </div>
        </div>
      </section>

      <BookingSection />
    </div>
  );
}
