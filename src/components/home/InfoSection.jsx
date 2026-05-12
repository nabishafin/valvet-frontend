export default function InfoSection() {
  return (
    <section className="w-full bg-[#F4F1EC] py-16">
      <div className="container mx-auto px-6 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[#660032]/15">

          {/* Locations */}
          <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#660032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <h3 className="text-xl font-semibold text-[#660032] mb-3">Locations</h3>
            <p className="text-sm text-gray-600 mb-4 max-w-xs">
              4517 Washington Ave. Manchester, Kentucky 39495
            </p>
            <a href="#" className="text-sm font-bold text-black flex items-center gap-1 hover:underline">
              See On Map
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </a>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#660032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <h3 className="text-xl font-semibold text-[#660032] mb-3">Contact</h3>
            <p className="text-sm text-gray-600 mb-2">(808) 555-0111</p>
            <a href="mailto:Info@Companyname.Com" className="text-sm text-gray-600 underline hover:text-[#660032]">
              Info@Companyname.Com
            </a>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center text-center px-4 py-6 md:py-0">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#660032" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h3 className="text-xl font-semibold text-[#660032] mb-3">Opening Hours</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Mon To Fri: 9.00am - 8.30pm<br />
              Sat: 10.00am - 6.30pm<br />
              Sun: Closed
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
