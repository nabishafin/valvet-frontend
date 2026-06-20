import Link from "next/link";
import BookingSection from "@/components/home/BookingSection";
import PageHero from "@/components/shared/PageHero";

export const metadata = {
  title: "Amenities & Benefits | Velvet Rouge Salon Suites",
  description: "Discover the premium amenities included with every Velvet Rouge Salon Suite.",
};

const amenities = [
  {
    title: "Private Luxury Suites",
    description:
      "Each suite is your own private sanctuary — fully enclosed, soundproofed, and designed for an intimate, professional client experience.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Premium Lighting",
    description:
      "Dimmable, color-accurate lighting throughout every suite ensures your work looks its best and your clients feel relaxed.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
      </svg>
    ),
  },
  {
    title: "High-Speed Fiber WiFi",
    description:
      "Stay connected with blazing-fast internet for both you and your clients — stream, process payments, and run your business seamlessly.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>
      </svg>
    ),
  },
  {
    title: "Private Shampoo Bowl / Backbar",
    description:
      "Your own dedicated wash station in-suite. No sharing, no waiting — a seamless, luxury experience for every appointment.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/><path d="M2 12h20"/>
      </svg>
    ),
  },
  {
    title: "Climate Control",
    description:
      "Individual climate control in every suite so you and your clients are always perfectly comfortable year-round.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07"/>
      </svg>
    ),
  },
  {
    title: "24 / 7 Secure Access",
    description:
      "Key-fob entry gives you around-the-clock access to your suite. Work on your schedule, not ours.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    title: "Reception & Waiting Area",
    description:
      "A beautifully appointed shared reception area greets your clients with the luxury atmosphere they expect from the very first step inside.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    title: "Professional Break Room",
    description:
      "Recharge between appointments in our dedicated professional break room, stocked with refreshments and comfortable seating.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
      </svg>
    ),
  },
  {
    title: "Ample Storage",
    description:
      "Custom built-in storage in every suite keeps your tools, products, and supplies organized and within reach.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="21 8 21 21 3 21 3 8"/><rect x="1" y="3" width="22" height="5"/><line x1="10" y1="12" x2="14" y2="12"/>
      </svg>
    ),
  },
  {
    title: "Free Parking",
    description:
      "Convenient, free on-site parking for you and all of your clients — no meters, no stress.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: "Marketing Support",
    description:
      "Get featured on our website, social media, and local listings. We help you grow your brand from day one.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    title: "Utilities Included",
    description:
      "Water, electricity, and basic utilities are all included in your suite rental — one flat rate, zero surprise bills.",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
];

export default function AmenitiesPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Amenities"
        subtitle="EVERYTHING YOU NEED"
        bgImage="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Amenities & Benefits" },
        ]}
      />

      {/* Intro */}
      <section className="bg-white py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="text-center mb-16 space-y-4 max-w-3xl mx-auto">
            <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold block">
              EVERYTHING YOU NEED
            </span>
            <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
              Built for the <span className="italic">Modern Professional</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              Every Velvet Rouge Salon Suite comes fully loaded with the essentials you need to run
              a thriving, professional beauty business — so you can focus entirely on your craft and your clients.
            </p>
          </div>

          {/* Amenities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#F4F1EC] p-8 rounded-2xl flex flex-col gap-5 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-white flex items-center justify-center text-[#650A33] shadow-sm">
                  {item.icon}
                </div>
                <div className="space-y-2">
                  <h3 className="font-playfair text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#650A33] py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 text-center space-y-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-white tracking-tight">
            Ready to See It in <span className="italic">Person?</span>
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            Schedule a private tour and experience Velvet Rouge Salon Suites for yourself.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#BA8C43] text-white px-10 py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#a17a39] transition-all shadow-lg mt-4"
          >
            BOOK A TOUR
          </Link>
        </div>
      </section>

      <BookingSection bgColor="bg-white" />
    </div>
  );
}
