"use client";

import { useState } from "react";
import { useInstantBookingMutation } from "@/redux/features/bookingApi";
import toast from "react-hot-toast";
import { useSiteConfig } from "@/hooks/useSiteConfig";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { config } = useSiteConfig();
  const [instantBooking, { isLoading }] = useInstantBookingMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in Name, Email, and Message.");
      return;
    }

    try {
      const response = await instantBooking({
        service: "General Contact",
        date: new Date().toISOString().split('T')[0], // Today's date
        name,
        email,
        phone,
        message
      }).unwrap();

      if (response.success) {
        toast.success(response.message || "Message sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      {/* Top Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16">
        <div>
          <span className="text-[#8B3A5A] text-sm font-bold uppercase tracking-widest block mb-6">
            Get Started
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1E1E1E] leading-tight mb-2">
            Get in touch with us.
          </h2>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1E1E1E] leading-tight">
            We're here to assist you.
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex md:flex-col gap-4 mt-8 md:mt-0">
          <a
            href={config.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href={config.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href={config.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
        </div>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-800"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-800"
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-800"
          />
        </div>

        <div className="pt-8">
          <textarea
            placeholder="Message"
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border-b border-gray-200 pb-24 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-800 resize-none"
          ></textarea>
        </div>

        <div className="pt-8">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#C29759] text-white px-8 py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[#a67a36] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Leave us a message"}
          </button>
        </div>
      </form>
    </section>
  );
}
