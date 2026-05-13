import { Clock, Shield, Wifi, Palette, Heart, Sparkles } from "lucide-react";

export default function ValuesSection() {
  const values = [
    {
      title: "Personalized Care",
      description: "Every treatment is a bespoke ritual, tailored precisely to your unique needs and aspirations.",
      icon: <Clock size={20} />
    },
    {
      title: "Premium Quality",
      description: "We use only the world's most exclusive, organic-adjacent formulations for lasting radiance.",
      icon: <Shield size={20} />
    },
    {
      title: "Hygiene & Comfort",
      description: "Your well-being is our mandate. We maintain hospital-grade standards in a spa-like environment.",
      icon: <Wifi size={20} />
    },
    {
      title: "Creativity & Artistry",
      description: "Our stylists are artisans who blend vision with technical mastery to create timeless looks.",
      icon: <Palette size={20} />
    },
    {
      title: "Empowerment",
      description: "We believe beauty is a feeling. Our goal is to leave you feeling powerful, seen, and luminous.",
      icon: <Heart size={20} />
    },
    {
      title: "Luxury Experience",
      description: "From champagne greetings to silk robes, every detail is designed for absolute escapism.",
      icon: <Sparkles size={20} />
    }
  ];

  return (
    <section className="w-full bg-[#F4F1EC] py-24">
      <div className="container mx-auto px-6 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-[#650A33] uppercase tracking-[0.3em] text-[11px] font-bold block">
            OUR PHILOSOPHY
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-[56px] text-gray-900 tracking-tight">
            Built on Values
          </h2>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div 
              key={idx} 
              className="bg-white p-7 md:p-8 rounded-2xl flex flex-col items-start text-left space-y-5 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#F4F1EC] flex items-center justify-center text-[#650A33]">
                {value.icon}
              </div>
              <div className="space-y-3">
                <h3 className="font-playfair text-2xl font-bold text-gray-900 leading-tight">
                  {value.title}
                </h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

