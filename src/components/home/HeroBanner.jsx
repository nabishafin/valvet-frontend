export default function HeroBanner() {
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

      <div className="container relative z-10 mx-auto px-6 md:px-12 lg:px-16 2xl:px-6 max-w-[1400px] grid md:grid-cols-2 gap-6 items-center h-full pt-20">
        {/* Left Content */}
        <div className="flex flex-col gap-6 text-white ">
          <h1 className="font-playfair text-5xl md:text-7xl leading-tight">
            Own your style <br />
            <span className="italic">embrace your power</span>
          </h1>

          <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-lg">
            Luxury hair and beauty experiences designed around your unique soul.
            Immerse yourself in an environment where precision meets passion.
          </p>

          <div className="flex flex-wrap items-center gap-6 mt-4">
            <a
              href="tel:8085550111"
              className="flex items-center gap-3 rounded-full border border-white/20  backdrop-blur-sm px-6 py-3 transition-colors bg-white/20 text-white hover:bg-black/40"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-semibold text-sm">(808) 555-0111</span>
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
        <div className="flex justify-end mx-w-md">
          <div className="w-full  rounded-2xl bg-black/20 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">
            <h2 className="font-playfair text-2xl text-white mb-8">
              Instant Booking
            </h2>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                  I am looking for
                </label>
                <div className="relative border-b border-zinc-600 pb-2">
                  <select className="w-full appearance-none bg-transparent text-sm text-white outline-none cursor-pointer">
                    <option className="text-black" value="">Select an option</option>
                    <option className="text-black" value="haircut">Haircut</option>
                    <option className="text-black" value="styling">Styling</option>
                  </select>
                  <svg className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold">
                  On the date
                </label>
                <div className="relative border-b border-zinc-600 pb-2">
                  <input type="date" className="w-full bg-transparent text-sm text-white outline-none cursor-pointer [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-50" />
                </div>
              </div>

              <button
                type="button"
                className="mt-4 w-full rounded-full bg-[#BA8C43] py-3.5 text-[11px] font-bold tracking-widest text-white transition-colors hover:bg-[#a6773a]"
              >
                CHECK AVAILABILITY
              </button>
            </form>

            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-[#2a2320] bg-zinc-700 flex items-center justify-center overflow-hidden">
                    <svg className="w-4 h-4 text-zinc-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-bold leading-tight text-white">
                JOINED BY 1,200+ <br /> HAPPY CLIENTS
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
