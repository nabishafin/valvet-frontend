"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { useSiteConfig } from "@/hooks/useSiteConfig";
import { useSubscribeMutation } from "@/redux/features/subscribeApi";

export default function Footer() {
  const { config } = useSiteConfig();
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState(null); // { text, type: "success"|"error" }
  const [subscribe, { isLoading }] = useSubscribeMutation();
  const timerRef = useRef(null);

  const showFeedback = (text, type) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setFeedback({ text, type });
    timerRef.current = setTimeout(() => setFeedback(null), 3000);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) {
      showFeedback("Please enter your email address.", "error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      showFeedback("Please enter a valid email address.", "error");
      return;
    }

    try {
      const res = await subscribe(trimmed).unwrap();
      const status = res?.statusCode;
      if (status === 200) {
        showFeedback("Welcome back! You are subscribed again.", "success");
      } else {
        showFeedback("Subscribed successfully!", "success");
      }
      setEmail("");
    } catch (err) {
      if (err?.status === 409) {
        showFeedback("This email is already subscribed.", "error");
      } else {
        showFeedback(err?.data?.message || "Something went wrong. Please try again.", "error");
      }
    }
  };

  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-24 pb-12">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

          {/* Column 1: Logo & Social */}
          <div className="space-y-8">
            <Image
              src="/footer logo.png"
              alt="Velvet Rouge Logo"
              width={180}
              height={60}
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Schedule a private tour today and see why top beauty professionals are
              choosing Velvet Rouge as their primary business sanctuary.
            </p>
            <div className="flex gap-4">
              <a
                href={`tel:${config.contact.phone}`}
                aria-label="Call us"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Phone size={18} />
              </a>
              <a
                href={`mailto:${config.contact.email}`}
                aria-label="Email us"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <Mail size={18} />
              </a>
              <a
                href={config.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-12 h-12 rounded-full border border-gray-700 flex items-center justify-center hover:bg-white hover:text-black transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Contact */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest uppercase">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex gap-4 items-start text-gray-400">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <a
                  href={config.contact.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm hover:text-white transition-colors"
                >
                  {config.contact.address}
                </a>
              </li>
              <li className="flex gap-4 items-start text-gray-400">
                <Mail size={20} className="mt-1 flex-shrink-0" />
                <a href={`mailto:${config.contact.email}`} className="text-sm hover:text-white transition-colors">
                  {config.contact.email}
                </a>
              </li>
              <li className="flex gap-4 items-start text-gray-400">
                <Phone size={20} className="mt-1 flex-shrink-0" />
                <a href={`tel:${config.contact.phone}`} className="text-sm hover:text-white transition-colors">
                  {config.contact.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Atelier Hours */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest uppercase">Atelier Hours</h4>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Mon — Fri</span>
                <span>{config.openingHours.weekdays}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Saturday</span>
                <span>{config.openingHours.saturday}</span>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>Sunday</span>
                <span>{config.openingHours.sunday}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Maison Letters */}
          <div className="space-y-8">
            <h4 className="text-sm font-bold tracking-widest uppercase">Maison Letters</h4>
            <div className="space-y-6">
              <p className="text-gray-400 text-sm leading-relaxed">
                Join our list for exclusive invitations and beauty insights.
              </p>
              <form onSubmit={handleSubscribe} className="relative flex items-center">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  disabled={isLoading}
                  className="w-full bg-[#2A2A2A] border-none py-4 px-6 pr-16 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-[#BA8C43] placeholder:text-gray-500 disabled:opacity-50 transition-all"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  aria-label="Subscribe"
                  className="absolute right-0 top-0 bottom-0 aspect-square bg-[#BA8C43] flex items-center justify-center hover:bg-[#a17a39] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <ArrowRight size={20} />
                  )}
                </button>
              </form>

              {/* Inline feedback message */}
              {feedback && (
                <p
                  className={`text-xs mt-2 transition-all ${
                    feedback.type === "success" ? "text-[#BA8C43]" : "text-red-400"
                  }`}
                >
                  {feedback.text}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-widest text-gray-500 uppercase">
            © 2026 Velvet Rouge. Built for the ambitious beauty professional.
          </p>
          <div className="flex gap-8 text-[10px] tracking-widest text-gray-500 uppercase">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link href="/career" className="hover:text-white transition-colors">Career</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
