import { Check, X } from "lucide-react";

export default function PricingSection() {
  const plans = [
    {
      name: "Basic",
      price: "12",
      features: [
        { text: "Personal Attention", included: true },
        { text: "Outstanding Support", included: true },
        { text: "Service Categories:", included: true },
        { text: "Best Hosting", included: false },
        { text: "Max Hosting", included: false },
        { text: "Free Custom Domain", included: false }
      ],
      highlighted: false
    },
    {
      name: "Standard",
      price: "25",
      features: [
        { text: "Personal Attention", included: true },
        { text: "Outstanding Support", included: true },
        { text: "Service Categories:", included: true },
        { text: "Best Hosting", included: true },
        { text: "Max Hosting", included: false },
        { text: "Free Custom Domain", included: false }
      ],
      highlighted: true
    },
    {
      name: "Mega",
      price: "36",
      features: [
        { text: "Personal Attention", included: true },
        { text: "Outstanding Support", included: true },
        { text: "Service Categories:", included: true },
        { text: "Best Hosting", included: true },
        { text: "Max Make up", included: true },
        { text: "Free Custom Domain", included: true }
      ],
      highlighted: false
    }
  ];

  return (
    <section className="w-full bg-white py-24">
      <div className="w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-16 2xl:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#650A33] uppercase tracking-[0.2em] text-xs font-bold mb-4 block">
            PRICING PLAN
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl text-gray-900 tracking-tight">
            The <span className="italic">Membership</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`border border-gray-100 rounded-2xl p-8 flex flex-col h-full transition-all duration-300 hover:shadow-xl ${plan.highlighted ? "shadow-lg border-transparent" : "shadow-sm"
                }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-start">
                  <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-2xl font-bold text-gray-900 mt-1">$</span>
                </div>
                <h3 className="font-playfair text-3xl font-bold text-gray-900">
                  {plan.name}
                </h3>
              </div>
              <p className="text-gray-400 text-sm mb-8">Every Month</p>

              <div className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <div
                    key={fIdx}
                    className={`flex justify-between items-center ${feature.included ? "text-gray-900" : "text-gray-300"
                      }`}
                  >
                    <span className="text-sm font-medium">{feature.text}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${feature.included
                        ? "bg-gray-100 text-gray-900"
                        : "bg-gray-50 text-gray-200"
                        }`}
                    >
                      {feature.included ? (
                        <Check size={12} strokeWidth={3} />
                      ) : (
                        <X size={12} strokeWidth={3} />
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-4 rounded-full font-bold text-sm tracking-widest transition-all ${plan.highlighted
                  ? "bg-[#BA8C43] text-white hover:bg-[#a17a39]"
                  : "bg-[#F3F0EC] text-gray-900 hover:bg-[#e6e2da]"
                  }`}
              >
                Join Experience
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
