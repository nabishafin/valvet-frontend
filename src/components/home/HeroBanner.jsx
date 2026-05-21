"use client";

import { useState } from "react";
import Image from "next/image";
import { useGetServicesQuery } from "@/redux/features/serviceApi";
import { useInstantBookingMutation } from "@/redux/features/bookingApi";
import toast from "react-hot-toast";
import { useSiteConfig } from "@/hooks/useSiteConfig";

export default function HeroBanner() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { config } = useSiteConfig();

  const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery();
  const [instantBooking, { isLoading: isBooking }] = useInstantBookingMutation();

  const formatTitle = (text) => {
    if (!text) return "";
    return text
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

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
    <section className="relative w-full h-[600px] md:h-[800px] flex items-center ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/background banner.png')" }}
      />
      {/* Dark overlay to make it blackish */}
      <div className="absolute inset-0 z-0 bg-black/10" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/45 via-black/25 to-transparent" />

      <div className="w-full relative z-10 mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 max-w-[1400px] grid md:grid-cols-2 gap-6 items-center h-full pt-20">
        {/* Left Content */}
        <div className="flex flex-col gap-8 text-white ">
          <h1 className="font-playfair text-5xl md:text-8xl leading-[1.1] tracking-tight">
            Elevate your <br />
            <span className="italic font-light">signature essence</span>
          </h1>

          <p className="text-zinc-300 text-sm md:text-lg leading-relaxed max-w-xl font-medium">
            Step into a world where luxury meets precision. Our bespoke beauty experiences
            are curated for the ambitious professional who demands nothing less than
            excellence in an atmosphere of pure sophistication.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4">
            <a
              href={`tel:${config.contact.phone}`}
              className="flex items-center gap-3 rounded-full border border-white/20 backdrop-blur-sm px-6 py-3 transition-colors bg-white/20 text-white hover:bg-black/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-semibold text-sm">{config.contact.phone}</span>
            </a>

            <a href="/services" className="flex items-center gap-2 text-sm font-semibold transition-opacity hover:opacity-80">
              See Our Services
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Content - Booking Card */}
        <div className="hidden lg:flex justify-end">
          <div className="w-auto min-w-[380px] max-w-[600px] rounded-3xl bg-black/30 backdrop-blur-3xl border border-white/10 p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <h2 className="font-playfair text-2xl text-white mb-6 tracking-wide">
              Instant Booking
            </h2>

            <form onSubmit={handleBooking} className="flex flex-col gap-5">
              {/* Name and Phone Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full bg-transparent text-sm text-white border-b border-zinc-700 pb-1.5 outline-none focus:border-[#BA8C43] transition-colors placeholder:text-zinc-600"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="(000) 000-0000"
                    className="w-full bg-transparent text-sm text-white border-b border-zinc-700 pb-1.5 outline-none focus:border-[#BA8C43] transition-colors placeholder:text-zinc-600"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email@example.com"
                  className="w-full bg-transparent text-sm text-white border-b border-zinc-700 pb-1.5 outline-none focus:border-[#BA8C43] transition-colors placeholder:text-zinc-600"
                />
              </div>

              {/* Studio Selection */}
              <div className="flex flex-col gap-2 relative">
                <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                  I am looking for
                </label>
                <div
                  className="relative border-b border-zinc-700 pb-2 cursor-pointer group"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <div className="text-sm text-white font-medium flex justify-between items-center pr-2">
                    {service ? formatTitle(service) : (servicesLoading ? "Loading..." : "Select a Studio")}
                    <svg
                      className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} text-zinc-500 group-hover:text-[#BA8C43]`}
                      xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>

                  {/* Custom Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 w-full mt-1 bg-[#1A1A1A] border border-white/10 rounded-xl overflow-hidden z-50 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-200">
                      <div className="max-h-[180px] overflow-y-auto custom-scrollbar py-1">
                        {servicesData?.data?.map((item) => (
                          <div
                            key={item._id}
                            className="px-5 py-2.5 text-sm text-zinc-300 hover:bg-[#BA8C43] hover:text-white transition-colors cursor-pointer"
                            onClick={(e) => {
                              e.stopPropagation();
                              setService(item.title);
                              setIsDropdownOpen(false);
                            }}
                          >
                            {formatTitle(item.title)}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Date Selection */}
              <div className="flex flex-col gap-2">
                <label className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-bold">
                  On the date
                </label>
                <div className="relative border-b border-zinc-700 pb-2">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-transparent text-sm text-white outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50 font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isBooking}
                className="mt-2 w-full rounded-full bg-[#BA8C43] py-3.5 text-[10px] font-bold tracking-[0.2em] text-white transition-all hover:bg-[#a6773a] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#BA8C43]/20 disabled:opacity-50 disabled:cursor-not-allowed uppercase"
              >
                {isBooking ? "BOOKING..." : "BOOK NOW"}
              </button>
            </form>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-10 w-10 rounded-full border-2 border-[#1A1A1A] bg-zinc-800 flex items-center justify-center overflow-hidden ring-2 ring-white/5 relative">
                    <Image src={`/happy client ${i}.png`} alt="Client" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-bold leading-tight text-white/60 tracking-wider uppercase">
                JOINED BY 1,200+ <br /> <span className="text-[#BA8C43]">HAPPY CLIENTS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
