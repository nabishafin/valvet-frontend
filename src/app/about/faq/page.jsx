"use client";

import { useState } from "react";
import Link from "next/link";
import BookingSection from "@/components/home/BookingSection";
import { ChevronDown } from "lucide-react";
import PageHero from "@/components/shared/PageHero";

const faqs = [
  {
    q: "What is included in my suite rental?",
    a: "Every suite includes your private space, a shampoo bowl/backbar, built-in storage, dimmable lighting, climate control, high-speed WiFi, utilities (water, electricity), free parking, and access to all shared amenities including the reception area and break room. One flat weekly rate — no hidden fees.",
  },
  {
    q: "Do I need a cosmetology license to rent a suite?",
    a: "Yes. All suite renters must hold a valid, active cosmetology or esthetics license (or the applicable license for your specialty) in our state. We'll verify your license during the application process.",
  },
  {
    q: "Is there a long-term lease requirement?",
    a: "We offer flexible month-to-month leasing options so you are never locked in. We also offer discounted rates for professionals who prefer a longer commitment. Ask us about our 3- and 6-month pricing during your tour.",
  },
  {
    q: "Can I decorate and customize my suite?",
    a: "Absolutely. Your suite is your brand — make it yours. You can add décor, retail shelving, signage, and personal touches. We only ask that you avoid permanent structural alterations and restore the space to its original condition upon move-out.",
  },
  {
    q: "Do you provide any salon equipment?",
    a: "Suites come with a shampoo bowl and standard styling chair hookups. Styling chairs, tools, and product inventory are yours to bring. We recommend scheduling a walkthrough so you know exactly what you're working with before move-in day.",
  },
  {
    q: "How does the booking / scheduling system work?",
    a: "You are fully in control of your own booking system. We do not manage your appointments. Most of our suite owners use platforms like GlossGenius, Vagaro, or Square. We can help you get set up during onboarding.",
  },
  {
    q: "Are there shared areas for clients to wait?",
    a: "Yes. We have a beautifully appointed shared reception and waiting area at the building entrance. Your clients will be greeted by our lobby environment before being directed to your suite.",
  },
  {
    q: "What are the building hours?",
    a: "You have 24/7 key-fob access to your suite. The shared areas (reception, break room) are accessible during standard building hours. There are no restrictions on when you can see clients within your own suite.",
  },
  {
    q: "How do I apply for a suite?",
    a: "Simply reach out through our contact page or call us directly to schedule a private tour. After your tour, we'll walk you through the application, licensing verification, and move-in process. Suites fill quickly — we recommend reaching out as soon as possible.",
  },
  {
    q: "What happens if I need to leave my suite early?",
    a: "We understand that life and business circumstances change. Our month-to-month leases require 30 days' written notice before vacating. Longer-term lease terms have specific early-exit provisions which we will explain clearly before you sign.",
  },
];

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        className="w-full flex justify-between items-center py-6 text-left gap-6 group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-playfair text-lg md:text-xl text-gray-900 group-hover:text-[#650A33] transition-colors leading-snug">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-[#650A33] transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-gray-500 text-[15px] leading-relaxed pb-6 pr-10">
          {a}
        </p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="FAQ"
        subtitle="GOT QUESTIONS?"
        bgImage="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=80&auto=format&fit=crop"
        position="center center"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "FAQ" },
        ]}
      />

      {/* FAQ List */}
      <section className="bg-white py-24">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Left: Header */}
            <div className="w-full lg:w-1/3 space-y-6">
              <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold block">GOT QUESTIONS?</span>
              <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 tracking-tight leading-tight">
                Frequently <span className="italic">Asked</span>
              </h2>
              <p className="text-gray-500 leading-relaxed">
                Everything you need to know about renting a suite at Velvet Rouge. Can&apos;t find
                your answer below? Reach out — we&apos;re happy to help.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#650A33] text-white px-8 py-3.5 rounded-full font-bold text-xs tracking-widest hover:bg-[#4d0826] transition-all"
              >
                CONTACT US
              </Link>
            </div>

            {/* Right: Accordion */}
            <div className="w-full lg:w-2/3">
              {faqs.map((item, idx) => (
                <FaqItem key={idx} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <BookingSection bgColor="bg-[#F4F1EC]" />
    </div>
  );
}
