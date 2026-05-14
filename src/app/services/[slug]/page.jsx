import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { services } from "@/data/services";
import ServiceCard from "@/components/shared/ServiceCard";
import { notFound } from "next/navigation";

export default async function ServiceDetailsPage({ params }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  // Get other services for "You may also like"
  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3);

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
                  {service.title}
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
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Description Sections */}
              <div className="space-y-10">
                <div className="space-y-4">
                  <h2 className="font-playfair text-3xl text-gray-900 underline decoration-[#BA8C43]/20 underline-offset-8 decoration-2">The Aura Experience</h2>
                  <p className="text-gray-500 leading-relaxed">
                    {service.auraExperience}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="font-playfair text-3xl text-gray-900 underline decoration-[#BA8C43]/20 underline-offset-8 decoration-2">Services Include:</h2>
                  <p className="text-gray-500 leading-relaxed">
                    {service.inclusions}
                  </p>
                  
                  {/* Gallery */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {service.gallery.map((img, i) => (
                      <div key={i} className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-lg group">
                        <Image src={img} alt={`${service.title} Gallery ${i+1}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h2 className="font-playfair text-3xl text-gray-900 underline decoration-[#BA8C43]/20 underline-offset-8 decoration-2">Services Benefits:</h2>
                  <ul className="space-y-4 text-gray-500">
                    {service.benefits.map((benefit, i) => (
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
              <div className="sticky top-32 bg-[#F3F0EC] rounded-2xl p-10 md:p-12 space-y-10 shadow-2xl shadow-gray-200/50">
                <div className="space-y-1">
                  <h3 className="font-playfair text-3xl text-gray-900">{service.title}</h3>
                  <p className="text-[#650A33] font-bold text-lg">{service.price}</p>
                </div>

                <div className="space-y-8">
                  {/* Form fields */}
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">I AM LOOKING FOR</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-gray-300 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer">
                        <option>{service.title}</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">ON THE DATE</label>
                    <div className="relative">
                      <select className="w-full bg-transparent border-b border-gray-300 py-3 appearance-none focus:outline-none focus:border-[#BA8C43] transition-colors text-gray-900 cursor-pointer">
                        <option>Select Date</option>
                      </select>
                      <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-900 pointer-events-none" size={16} />
                    </div>
                  </div>

                  <button className="w-full bg-[#BA8C43] text-white py-5 rounded-full font-bold text-xs tracking-widest hover:bg-[#a17a39] transition-all shadow-lg shadow-[#BA8C43]/20 hover:scale-[1.02] active:scale-[0.98]">
                    BOOK NOW
                  </button>

                  <div className="flex items-center gap-3 pt-4 justify-center md:justify-start">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-[#F3F0EC] overflow-hidden relative bg-gray-200">
                          <Image src={`/team ${i}.jpg`} alt="Client" fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest leading-tight">
                      JOINED BY 1,200+ <br /> HAPPY CLIENTS
                    </span>
                  </div>
                </div>
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
              <ServiceCard key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
