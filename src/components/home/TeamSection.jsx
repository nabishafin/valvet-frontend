"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useGetTeamsQuery } from "@/redux/features/teamApi";
import { useInstantBookingMutation } from "@/redux/features/bookingApi";
import toast from "react-hot-toast";

export default function TeamSection({ bgColor = "bg-white" }) {
  const scrollRef = useRef(null);
  const { data: teamData, isLoading } = useGetTeamsQuery();
  const [instantBooking, { isLoading: isBooking }] = useInstantBookingMutation();
  const team = teamData?.data || [];

  const [selectedMember, setSelectedMember] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: ""
  });

  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.children[0].offsetWidth + 32;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth"
      });
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.date) {
      toast.error("Please fill in all required fields.");
      return;
    }

    try {
      const response = await instantBooking({
        teamMemberId: selectedMember._id || selectedMember.id,
        ...formData
      }).unwrap();

      if (response.success) {
        toast.success(`Booking request sent to ${selectedMember.name}!`);
        setSelectedMember(null);
        setFormData({ name: "", email: "", phone: "", date: "", message: "" });
      }
    } catch (err) {
      toast.error(err?.data?.message || "Failed to send booking request.");
    }
  };

  return (
    <section className={`w-full ${bgColor} py-24 overflow-hidden`}>
      <div className="w-full mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#650A33] uppercase tracking-[0.2em] text-[10px] font-bold mb-4 block">
            OUR EXPERT TEAM
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
            Our Experience <span className="italic">Specialists</span>
          </h2>
        </div>

        {/* Carousel / Team Cards */}
        <div className="relative">
          {/* Arrows - Positioned like the image */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 md:-left-8 top-[40%] -translate-y-1/2 w-10 h-10 bg-gray-50/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center z-10 border border-gray-100 text-gray-800 hover:bg-gray-100 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 md:-right-8 top-[40%] -translate-y-1/2 w-10 h-10 bg-gray-50/80 backdrop-blur-sm rounded-full shadow-sm flex items-center justify-center z-10 border border-gray-100 text-gray-800 hover:bg-gray-100 transition-all"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6 6-6" /></svg>
          </button>

          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pb-10 px-2 min-h-[400px]"
          >
            {isLoading ? (
              <div className="w-full flex justify-center items-center h-64">
                <div className="w-10 h-10 border-4 border-[#BA8C43] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : (
              team.map((member, idx) => (
                <div
                  key={idx}
                  className="min-w-[85%] md:min-w-[calc(50%-1rem)] lg:min-w-[calc(33.333%-1.33rem)] shrink-0 snap-start"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative w-full aspect-square rounded-lg overflow-hidden mb-6 bg-gray-50">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Info */}
                    <div className="space-y-3">
                      <span className="text-[#650A33] text-[9px] font-bold tracking-widest uppercase block">
                        {member.role}
                      </span>
                      
                      <div className="flex justify-between items-center">
                        <h3 className="font-playfair text-xl md:text-2xl font-bold text-gray-900">
                          {member.name}
                        </h3>
                        <div className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="#650A33" stroke="none">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                          </svg>
                          <span className="text-xs font-bold text-gray-900">{member.rating}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-start pt-1">
                        <p className="text-gray-400 text-[11px] leading-relaxed max-w-[70%] line-clamp-1">{member.description}</p>
                        <span className="text-gray-400 text-[11px] font-medium whitespace-nowrap">{member.experience} Years</span>
                      </div>

                      {/* Actions */}
                      <div className="flex gap-2 pt-4">
                        <button 
                          onClick={() => setSelectedMember(member)}
                          className="flex-1 bg-[#BA8C43] text-white py-3 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#a17a39] transition-colors shadow-sm"
                        >
                          Book {member.name.split(' ')[0]}
                        </button>
                        <a 
                          href={member.instagram ? (member.instagram.startsWith("http") ? member.instagram : `https://instagram.com/${member.instagram}`) : "#"}
                          target={member.instagram ? "_blank" : "_self"}
                          rel="noopener noreferrer"
                          className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors"
                          onClick={(e) => !member.instagram && e.preventDefault()}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {selectedMember && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setSelectedMember(null)}
          ></div>
          <div className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="p-8 md:p-10">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="font-playfair text-3xl text-gray-900">Book Session</h3>
                  <p className="text-gray-500 text-sm mt-1">With {selectedMember.name}</p>
                </div>
                <button 
                  onClick={() => setSelectedMember(null)}
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                </button>
              </div>

              <form onSubmit={handleBookingSubmit} className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-gray-50 border-b border-gray-200 py-2.5 px-1 focus:outline-none focus:border-[#BA8C43] transition-colors text-sm"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone</label>
                    <input 
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full bg-gray-50 border-b border-gray-200 py-2.5 px-1 focus:outline-none focus:border-[#BA8C43] transition-colors text-sm"
                      placeholder="017..."
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    type="email" 
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-gray-50 border-b border-gray-200 py-2.5 px-1 focus:outline-none focus:border-[#BA8C43] transition-colors text-sm"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Preferred Date</label>
                  <input 
                    type="date" 
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className="w-full bg-gray-50 border-b border-gray-200 py-2.5 px-1 focus:outline-none focus:border-[#BA8C43] transition-colors text-sm"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Message (Optional)</label>
                  <textarea 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows="2"
                    className="w-full bg-gray-50 border-b border-gray-200 py-2.5 px-1 focus:outline-none focus:border-[#BA8C43] transition-colors text-sm resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isBooking}
                  className="w-full bg-[#BA8C43] text-white py-4 rounded-full font-bold text-sm tracking-widest hover:bg-[#a17a39] transition-all mt-4 shadow-lg shadow-[#BA8C43]/20 disabled:opacity-50"
                >
                  {isBooking ? "SENDING..." : "CONFIRM BOOKING"}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
