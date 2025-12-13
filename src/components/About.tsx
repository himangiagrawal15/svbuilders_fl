import React, { useState, useEffect } from 'react';
import { Building2, Users, Trophy, TrendingUp } from 'lucide-react';

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Building2, value: "7", label: "Apartment Projects" },
    { icon: Users, value: "6", label: "Residential Layouts" },
    { icon: Trophy, value: "12+", label: "Years Experience" },
    { icon: TrendingUp, value: "2013", label: "Established" }
  ];

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span
            className="inline-block text-[#473727] text-xs sm:text-sm tracking-[0.2em] 
                        uppercase mb-3 sm:mb-4 font-semibold"
            >
            Who We Are
            </span>

          <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl text-slate-900 mb-3 sm:mb-4">
            About SV Developers & Constructions
          </h2>
        <div className="w-16 sm:w-20 h-px bg-[#473727] mx-auto mb-4 sm:mb-6" />

        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center font-libre">
  {/* Left Content */}
  <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
      <span className="font-semibold text-slate-900">Established in 2013</span>, SV Developers & Constructions has grown into a respected name in the real estate and construction sectors across Andhra Pradesh and Karnataka. We specialize in residential development, land layouts, and premium construction solutions.
    </p>
    
    <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
      Starting with small but quality-focused residential projects, we have successfully completed <span className="font-semibold text-slate-900">7 apartment projects</span> and <span className="font-semibold text-slate-900">6 residential layouts</span>. Each project reflects our core values: quality, transparency, trust, and timely delivery.
    </p>

    {/* Completed Projects */}
    <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-lg">
      <h4 className="text-slate-900 font-bold mb-3 text-lg">Our Completed Apartment Projects:</h4>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {['DS Paradise', 'GS Exotica', 'SV Aralia', 'SLV Greens', 'Gopala Grand Residency', 'VC Royale', 'Sree Lakshmi Nilayam'].map((project, idx) => (
          <div 
            key={project}
            className="flex items-center space-x-2 text-slate-700 transition-opacity duration-500"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transitionDelay: `${600 + idx * 100}ms` 
            }}
          >
            <div className="w-1.5 h-1.5 bg-amber-600 rounded-full flex-shrink-0" />
            <span className="text-sm">{project}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Core Values */}
    <div className="pt-4">
      <h3 className="text-xl font-bold text-slate-900 mb-4">Our Core Values</h3>
      <div className="grid grid-cols-2 gap-3">
        {['Quality Construction', 'Transparency', 'Trust & Integrity', 'Timely Delivery', 'Customer Focus', 'Innovation'].map((service, idx) => (
          <div 
            key={service}
            className="flex items-center space-x-2 text-slate-700 transition-all duration-300 hover:text-amber-600"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(10px)',
              transitionDelay: `${800 + idx * 100}ms` 
            }}
          >
            <div className="w-2 h-2 bg-amber-600 rounded-full" />
            <span className="text-sm sm:text-base">{service}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Stats Badges */}
    <div className={`flex flex-wrap gap-3 pt-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {stats.map((stat, idx) => (
        <div 
          key={stat.label}
          className="bg-white rounded-lg px-4 py-2.5 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 border border-slate-200 flex items-center gap-3"
          style={{ transitionDelay: `${1400 + idx * 100}ms` }}
        >
          <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
            <stat.icon className="w-4 h-4 text-amber-600" />
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-bold text-slate-900 leading-none">{stat.value}</span>
            <span className="text-xs text-slate-600 leading-none mt-0.5">{stat.label}</span>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Right Image */}
  <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
        alt="Modern architecture and construction"
        className="w-full h-[400px] sm:h-[500px] lg:h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
      
      {/* Floating Badge */}
      <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm rounded-lg p-4 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center">
            <Trophy className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-slate-900 font-bold text-lg">Excellence</p>
            <p className="text-slate-600 text-sm">Since 2013</p>
          </div>
        </div>
      </div>
    </div>

    {/* Decorative Elements */}
    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-amber-600/10 rounded-2xl -z-10 hidden lg:block" />
    <div className="absolute -top-6 -left-6 w-24 h-24 bg-amber-600/10 rounded-2xl -z-10 hidden lg:block" />
  </div>
</div>

      </div>
    </section>
  );
}