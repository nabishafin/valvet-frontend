"use client";

import { use, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import ServiceCard from "@/components/shared/ServiceCard";
import { notFound } from "next/navigation";
import { useGetStudioBySlugQuery, useGetStudiosQuery, useGetServicesQuery } from "@/redux/features/serviceApi";
import { useInstantBookingMutation } from "@/redux/features/bookingApi";
import toast from "react-hot-toast";

export default function ServiceDetailsPage({ params }) {
  const { slug } = use(params);
  const [date, setDate] = useState("");
  const [selectedService, setSelectedService] = useState("");

  const { data: studioResponse, isLoading, isError } = useGetStudioBySlugQuery(slug);
  const { data: allStudiosResponse } = useGetStudiosQuery();
  const { data: servicesData, isLoading: servicesLoading } = useGetServicesQuery();
  const [instantBooking, { isLoading: isBooking }] = useInstantBookingMutation();

  const studio = studioResponse?.data;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (studio?.title) {
      setSelectedService(studio.title);
    }
  }, [studio]);

  const otherServices = allStudiosResponse?.data?.filter((s) => s.slug !== slug).slice(0, 3) || [];

  const handleBooking = async (e) => {
    e.preventDefault();
    if (!date) {
      toast.error("Please select a date.");
      return;
    }

    try {
      const response = await instantBooking({
        service: studio.title,
        date,
        name,
        email,
        phone,
        message
      }).unwrap();

      if (response.success) {
        toast.success(response.message || "Booking request sent successfully!");
        setDate("");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (err) {
      toast.error(err?.data?.message || "Something went wrong. Please try again.");
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#BA8C43]"></div>
      </div>
    );
  }

  if (isError || !studio) {
    notFound();
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden bg-[#1E1E1E]">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/Vector.png"
            alt="Vector Pattern"
            fill
            className="object-cover"
          />
        </div>

        <div className="relative z-10 text-center px-6">
          <h1 className="font-playfair text-4xl md:text-5xl text-white tracking-widest uppercase mb-4">
            SERVICES
          </h1>
          <div className="flex items-center justify-center gap-2 text-xs font-bold tracking-widest">
            <Link href="/" className="text-white hover:text-[#BA8C43] transition-colors uppercase">HOME</Link>
            <span className="text-gray-500">/</span>
            <span className="text-[#BA8C43] uppercase">SERVICE DETAILS</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-20">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Left Column: Details */}
            <div className="w-full lg:w-2/3 space-y-12">
              <div>
                <h1 className="font-playfair text-5xl md:text-6xl text-gray-900 mb-6 tracking-tight">
                  {studio.title}
                </h1>
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden relative bg-gray-200">
                        <Image src={`/team ${i > 2 ? 1 : i}.jpg`} alt="Client" fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                    JOINED BY 1,200+ <br /> HAPPY CLIENTS
                  </span>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gray-100 shadow-xl shadow-gray-200/50">
                <Image
                  src={studio.image}
                  alt={studio.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Sections */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="font-playfair text-3xl text-gray-900 underline decoration-[#BA8C43]/20 underline-offset-8 decoration-2">The Aura Experience</h2>
                  <p className="text-gray-500 leading-relaxed">
                    {studio.auraExperience}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {studio.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-playfair text-3xl text-gray-900 underline decoration-[#BA8C43]/20 underline-offset-8 decoration-2">Services Include:</h2>
                  <p className="text-gray-500 leading-relaxed">
                    {studio.inclusions}
                  </p>

                  {/* Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {studio.gallery?.map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg group">
                        <Image src={img} alt={`${studio.title} Gallery ${i + 1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="font-playfair text-3xl text-gray-900 underline decoration-[#BA8C43]/20 underline-offset-8 decoration-2">Services Benefits:</h2>
                  <ul className="space-y-4 text-gray-500">
                    {studio.benefits?.map((benefit, i) => (
                      <li key={i} className="flex gap-4 group">
                        <span className="text-[#BA8C43] mt-1.5 flex-shrink-0 transition-transform group-hover:scale-150">•</span>
                        <span className="transition-colors group-hover:text-gray-900">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column: Booking Card */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-32 bg-[#F3F0EC] rounded-2xl p-10 md:p-12 space-y-10 shadow-2xl shadow-gray-200/50 max-h-[90vh] overflow-y-auto custom-scrollbar">
                <div className="space-y-1">
                  <h3 className="font-playfair text-3xl text-gray-900">{studio.title}</h3>
                  <p className="text-[#650A33] font-bold text-lg">{studio.price}</p>
                </div>

                <form onSubmit={handleBooking} className="space-y-6">
                  {/* Form fields */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">STUDIO</label>
                    <div className="relative">
                      <select
                        disabled
                        className="w-full bg-transparent border-b border-gray-300 py-2 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-not-allowed text-sm"
                      >
                        <option>{studio.title}</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900 pointer-events-none" size={14} />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">DATE</label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 py-2 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">NAME</label>
                      <input
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 text-sm placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">EMAIL</label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 text-sm placeholder:text-gray-400"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">PHONE</label>
                      <input
                        type="tel"
                        placeholder="Your Phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 text-sm placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">DETAILS / MESSAGE</label>
                    <textarea
                      placeholder="Share your requirements..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={2}
                      className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 text-sm placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isBooking}
                    className="w-full bg-[#BA8C43] text-white py-4 rounded-full font-bold text-xs tracking-widest hover:bg-[#a17a39] transition-all shadow-lg shadow-[#BA8C43]/20 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {isBooking ? "BOOKING..." : "BOOK NOW"}
                  </button>


                  <div className="flex items-center gap-3 pt-6 justify-center md:justify-start">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F3F0EC] overflow-hidden relative bg-gray-200 shadow-sm">
                          <Image src={`/happy client ${i}.png`} alt="Client" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                      JOINED BY 1,200+ <br /> HAPPY CLIENTS
                    </span>
                  </div>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* You May Also Like */}
      <section className="bg-white py-24 border-t border-gray-100">
        <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
          <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-16">
            You may also like
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherServices.map((item, idx) => (
              <ServiceCard key={item._id || idx} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
