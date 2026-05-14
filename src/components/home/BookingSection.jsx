import { Phone, Mail, ChevronDown } from "lucide-react";

export default function BookingSection({ bgColor = "bg-[#F4F1EC]" }) {
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
              <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight">
                <span className="md:whitespace-nowrap">Your transformation</span> <br className="hidden md:block" />
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
                  <p className="text-xl font-bold text-gray-900">(808) 555-0111</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-[#650A33]/20 flex items-center justify-center text-[#650A33]">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#650A33] font-bold">EMAIL INQUIRY</p>
                  <p className="text-xl font-bold text-gray-900">INFO@COMPANYNAME.COM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Booking Card */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="w-full max-w-[550px] bg-white rounded-2xl p-10 md:p-14 shadow-2xl shadow-gray-200/50">
              <h3 className="font-playfair text-4xl text-gray-900 mb-10">Instant Booking</h3>

              <div className="space-y-8">
                {/* Field 1 */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">I AM LOOKING FOR</label>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-b border-gray-100 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900">
                      <option>Select an option</option>
                      <option>Hair Styling</option>
                      <option>Barbering</option>
                      <option>Skin Care</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900" size={16} />
                  </div>
                </div>

                {/* Field 2 */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">ON THE DATE</label>
                  <div className="relative">
                    <select className="w-full bg-transparent border-b border-gray-100 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900">
                      <option>Select Date</option>
                      <option>Today</option>
                      <option>Tomorrow</option>
                    </select>
                    <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900" size={16} />
                  </div>
                </div>

                <button className="w-full bg-[#BA8C43] text-white py-5 rounded-full font-bold text-sm tracking-widest hover:bg-[#a17a39] transition-all mt-6 shadow-lg shadow-[#BA8C43]/20">
                  CHECK AVAILABILITY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
