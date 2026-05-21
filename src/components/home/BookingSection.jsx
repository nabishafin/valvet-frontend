"use client";

import { useState } from "react";
import { Phone, Mail, ChevronDown } from "lucide-react";
import { useGetServicesQuery } from "@/redux/features/serviceApi";
import { useInstantBookingMutation } from "@/redux/features/bookingApi";
import toast from "react-hot-toast";
import { useSiteConfig } from "@/hooks/useSiteConfig";

export default function BookingSection({ bgColor = "bg-[#F4F1EC]" }) {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { config } = useSiteConfig();

  const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery();
  const [instantBooking, { isLoading: isBooking }] = useInstantBookingMutation();

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!service || !date || !name || !email || !phone) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await instantBooking({ 
        service, 
        date,
        name,
        email,
        phone
      }).unwrap();

      if (response.success) {
        toast.success(response.message || "Booking request sent successfully!");
        setService("");
        setDate("");
        setName("");
        setEmail("");
        setPhone("");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className={`w-full ${bgColor} py-24`}>
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Text & Info */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
                AVAILABLE SLOTS FOR NEXT 48 HOURS: 12
              </span>
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-[68px] text-gray-900 leading-[1.1] tracking-tight">
                Your transformation <br className="hidden md:block" />
                <span className="italic">Begins here.</span>
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
              Schedule a private tour today and see why top beauty professionals are
              choosing Aura as their primary business sanctuary.
            </p>

            <div className="space-y-6 pt-4">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#650A33]/20 flex items-center justify-center text-[#650A33]">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#650A33] font-bold">CALL OR TEXT</p>
                  <p className="text-xl font-bold text-gray-900">{config.contact.phone}</p>
                </div>
              </div>

              {/* Email */}
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

          {/* Right Side: Booking Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[550px] bg-white rounded-2xl p-10 md:p-14 shadow-2xl shadow-gray-200/50">
              <h3 className="font-playfair text-4xl text-gray-900 mb-10">Instant Booking</h3>

              <form onSubmit={handleBooking} className="space-y-6">
                {/* Name and Phone Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">FULL NAME</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your Name"
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

                {/* Email Field */}
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

                {/* Studio Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">I AM LOOKING FOR</label>
                  <div className="relative group">
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-100 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer"
                    >
                      <option value="">{servicesLoading ? "Loading..." : "Select an option"}</option>
                      {servicesData?.data?.map((item) => (
                        <option key={item._id} value={item.title}>
                          {item.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900" size={16} />
                  </div>
                </div>

                {/* Date Selection */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">ON THE DATE</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-transparent border-b border-gray-100 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isBooking}
                  className="w-full bg-[#BA8C43] text-white py-4.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#a17a39] transition-all mt-4 shadow-lg shadow-[#BA8C43]/20 disabled:opacity-50"
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
