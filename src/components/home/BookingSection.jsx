"use client";

import { useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { useInstantBookingMutation } from "@/redux/features/bookingApi";
import toast from "react-hot-toast";
import { useSiteConfig } from "@/hooks/useSiteConfig";

const TIME_SLOTS = [
  "8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM",
  "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM",
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM",
  "6:00 PM", "6:30 PM", "7:00 PM",
];

export default function BookingSection({ bgColor = "bg-[#F4F1EC]" }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const { config } = useSiteConfig();

  const [instantBooking, { isLoading: isBooking }] = useInstantBookingMutation();

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!name || !date || !time) {
      toast.error("Please fill in your name, date, and time.");
      return;
    }

    try {
      const response = await instantBooking({ name, email, phone, date, time, message }).unwrap();
      if (response.success) {
        toast.success(response.message || "Booking request sent! Check your email for confirmation.");
        setDate("");
        setTime("");
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
    <section className={`w-full ${bgColor} py-24`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                AVAILABLE SLOTS FOR NEXT 48 HOURS: 12
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-[68px] text-gray-900 leading-[1.1] tracking-tight">
                Tour our <br className="hidden md:block" />
                <span className="italic">suites.</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Be the first to experience our Velvet Rouge Salon Suites!
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#650A33]/20 flex items-center justify-center text-[#650A33]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#650A33] font-bold">CALL OR TEXT</p>
                  <p className="text-xl font-bold text-gray-900">{config.contact.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#650A33]/20 flex items-center justify-center text-[#650A33]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#650A33] font-bold">EMAIL INQUIRY</p>
                  <p className="text-xl font-bold text-gray-900 uppercase">{config.contact.email}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side — Booking Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[550px] bg-white rounded-2xl p-10 md:p-14 shadow-2xl shadow-gray-200/50">
              <h3 className="font-playfair text-4xl text-gray-900 mb-10">Instant Booking</h3>

              <form onSubmit={handleBooking} className="space-y-6">
                {/* Name and Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">FULL NAME *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
                      required
                      className="w-full bg-transparent border-b border-gray-100 py-3 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">PHONE NUMBER</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(000) 000-0000"
                      className="w-full bg-transparent border-b border-gray-100 py-3 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full bg-transparent border-b border-gray-100 py-3 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">DATE *</label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      required
                      className="w-full bg-transparent border-b border-gray-100 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">TIME *</label>
                    <div className="relative">
                      <select
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                        className="w-full bg-transparent border-b border-gray-100 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer"
                      >
                        <option value="">Select time</option>
                        {TIME_SLOTS.map((slot) => (
                          <option key={slot} value={slot}>{slot}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900 pointer-events-none" size={16} />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">MESSAGE (OPTIONAL)</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Share your requirements..."
                    rows={2}
                    className="w-full bg-transparent border-b border-gray-100 py-3 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isBooking}
                  className="w-full bg-[#BA8C43] text-white py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#a17a39] transition-all mt-4 shadow-lg shadow-[#BA8C43]/20 disabled:opacity-50"
                >
                  {isBooking ? "SENDING..." : "BOOK NOW"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
