import React, { useState, useEffect } from 'react';
import { Award, MapPin, ShieldCheck, Sparkles, Users, CheckCircle2 } from 'lucide-react';

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const reasons = [
    {
      icon: Award,
      title: "12+ Years of Trusted Delivery",
      description: "Delivering consistent and reliable projects for over a decade."
    },
    {
      icon: MapPin,
      title: "Strong Presence Across AP & Karnataka",
      description: "Growing footprint with successful developments across key regions."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Documentation & Approvals",
      description: "All projects follow clear and verified legal documentation."
    },
    {
      icon: Sparkles,
      title: "Modern Designs with Quality Materials",
      description: "We use durable materials and innovative design practices."
    },
    {
      icon: Users,
      title: "Customer-First Approach",
      description: "Ensuring satisfaction through dedicated service and on-time delivery."
    }
  ];

  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-900/90 to-slate-800/95" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wMyIvPjwvZz48L3N2Zz4=')] opacity-40" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <span className={`inline-block text-[#473727] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-semibold transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              Our Commitment
            </span>

            <h2 className={`font-heading text-3xl sm:text-4xl md:text-5xl text-white mb-3 sm:mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              Why Choose Us
            </h2>

            <div className={`w-16 sm:w-20 h-px bg-[#473727] mx-auto mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

            <p className={`text-slate-300 text-base sm:text-lg max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
              We deliver reliability, quality, and customer-focused development backed by years of proven success.
            </p>
          </div>

          {/* Reasons List */}
          <div className="space-y-8 sm:space-y-10">
            {reasons.map((reason, idx) => (
              <div
                key={reason.title}
                className={`flex items-start space-x-4 sm:space-x-6 group transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${400 + idx * 150}ms` }}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-[#473727] to-[#5a402b] rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:shadow-[#473727]/50 transition-all duration-500">
                    <reason.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <h3 className="font-heading text-xl sm:text-2xl text-white mb-2 group-hover:text-[#473727] transition-colors duration-300">
                    {reason.title}
                  </h3>

                  {/* UPDATED FONT HERE */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-libre">
                    {reason.description}
                  </p>

                  <div className="mt-4 h-px bg-gradient-to-r from-[#473727]/50 via-[#473727]/20 to-transparent max-w-md" />
                </div>

                <div className="flex-shrink-0 hidden md:block">
                  <CheckCircle2 className="w-6 h-6 text-[#473727] opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
