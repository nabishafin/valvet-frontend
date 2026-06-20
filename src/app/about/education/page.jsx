import Link from "next/link";
import BookingSection from "@/components/home/BookingSection";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Education & Business Support | Velvet Rouge Salon Suites",
  description: "Resources and support to help beauty professionals build thriving businesses.",
};

const resources = [
  {
    icon: "💼",
    title: "Business Formation Guidance",
    description:
      "Not sure whether to form an LLC or sole proprietorship? We connect our suite owners with local business advisors to help you start on the right legal footing.",
  },
  {
    icon: "📊",
    title: "Pricing & Profitability Workshops",
    description:
      "Learn how to price your services for profitability — covering cost of goods, time, retail markup, and how to benchmark against your local market.",
  },
  {
    icon: "📱",
    title: "Social Media & Branding Sessions",
    description:
      "Monthly group sessions on building your Instagram presence, growing a loyal following, and converting followers into booked clients.",
  },
  {
    icon: "🌐",
    title: "Website & Online Booking Setup",
    description:
      "We help you get set up with a professional online booking system so clients can book you 24/7 without a back-and-forth text chain.",
  },
  {
    icon: "📚",
    title: "Continuing Education Access",
    description:
      "Discounted access to industry CE classes, manufacturer training days, and advanced technique workshops hosted right here at Velvet Rouge.",
  },
  {
    icon: "🤝",
    title: "Peer Mentorship Network",
    description:
      "New to the suite life? Get paired with an experienced Velvet Rouge suite owner who has been where you are and can guide you through the transition.",
  },
];

export default function EducationPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Education & Business Support"
        subtitle="GROW WITH US"
        bgImage="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Education" },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="text-center mb-16 max-w-3xl mx-auto space-y-4">
            <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold block">GROW WITH US</span>
            <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 tracking-tight">
              We Invest in <span className="italic">Your Success</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Renting a suite is just the beginning. Velvet Rouge is committed to providing the
              education, resources, and community support you need to build a business that thrives long-term.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((item, idx) => (
              <div key={idx} className="bg-[#F4F1EC] rounded-2xl p-8 space-y-4 hover:shadow-md transition-all duration-300">
                <span className="text-4xl">{item.icon}</span>
                <h3 className="font-playfair text-xl font-bold text-gray-900">{item.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="bg-[#650A33] py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 text-center">
          <p className="font-playfair text-2xl md:text-4xl text-white/90 italic leading-relaxed max-w-4xl mx-auto">
            &ldquo;When beauty professionals are educated and empowered, the entire industry rises.
            That is the Velvet Rouge commitment.&rdquo;
          </p>
        </div>
      </section>

      <BookingSection bgColor="bg-white" />
    </div>
  );
}
