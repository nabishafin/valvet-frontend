"use client";

import { useState } from "react";
import { useSendContactMutation } from "@/redux/features/contactApi";
import toast from "react-hot-toast";
import { useSiteConfig } from "@/hooks/useSiteConfig";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const { config } = useSiteConfig();
  const [sendContact, { isLoading }] = useSendContactMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill in Name, Email, and Message.");
      return;
    }
    if (message.length < 1) {
      toast.error("Please enter a message.");
      return;
    }

    try {
      const response = await sendContact({ name, email, phone, message }).unwrap();
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
      {/* Header */}
      <div className="mb-12">
        <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-[#1E1E1E] leading-tight mb-10">
          Velvet Rouge Salon Suites
        </h2>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-10">
          <a
            href={`mailto:${config.contact.email}`}
            className="flex items-center gap-3 text-gray-600 hover:text-[#650A33] transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#650A33] transition-colors shrink-0">
              <Mail size={16} />
            </div>
            <span className="text-sm font-medium">{config.contact.email}</span>
          </a>

          <a
            href={`tel:${config.contact.phone}`}
            className="flex items-center gap-3 text-gray-600 hover:text-[#650A33] transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#650A33] transition-colors shrink-0">
              <Phone size={16} />
            </div>
            <span className="text-sm font-medium">{config.contact.phone}</span>
          </a>

          <a
            href={config.contact.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-600 hover:text-[#650A33] transition-colors group"
          >
            <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:border-[#650A33] transition-colors shrink-0">
              <MapPin size={16} />
            </div>
            <span className="text-sm font-medium">{config.contact.address}</span>
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-3 mb-12">
          <a
            href={config.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#650A33] hover:text-[#650A33] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
          </a>
          <a
            href={config.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#650A33] hover:text-[#650A33] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          </a>
          <a
            href={config.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter / X"
            className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#650A33] hover:text-[#650A33] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
          </a>
          {config.socials.whatsapp && (
            <a
              href={config.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#650A33] hover:text-[#650A33] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
            </a>
          )}
        </div>

        <h3 className="font-playfair text-2xl md:text-3xl text-[#1E1E1E] mb-2">
          Leave us a message!
        </h3>
        <div className="w-16 h-0.5 bg-[#BA8C43] mb-8" />
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12">
          <input
            type="text"
            placeholder="Your Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-500"
          />
          <input
            type="email"
            placeholder="Email Address *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-500"
          />
          <input
            type="tel"
            placeholder="Phone Number (optional)"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="border-b border-gray-200 pb-4 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-500"
          />
        </div>

        <div className="pt-4">
          <textarea
            placeholder="Message *"
            rows={1}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="border-b border-gray-200 pb-24 bg-transparent outline-none focus:border-gray-600 w-full text-gray-800 placeholder:text-gray-500 resize-none"
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#C29759] text-white px-8 py-3 rounded-full text-xs font-bold tracking-wider uppercase hover:bg-[#a67a36] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </section>
  );
}
