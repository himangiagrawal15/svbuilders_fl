import { useState, useEffect } from "react";
import { Check } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Raise a Request",
    active: true
  },
  {
    id: 2,
    title: "Meet our Expert",
    active: true
  },
  {
    id: 3,
    title: "Book with Us",
    active: true
  },
  {
    id: 4,
    title: "Receive Designs",
    active: false
  },
  {
    id: 5,
    title: "Track & Transact",
    active: false
  },
  {
    id: 6,
    title: "Settle In",
    active: false
  }
];

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="work" className="py-16 sm:py-20 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
            <span className="inline-block text-[#473727] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Process
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-4xl mx-auto mb-12 sm:mb-16 font-serif">
  Our house construction steps are simple and easy to understand: Plan – Build – Track – Settle in.
</p>


          {/* Steps Timeline */}
          <div className="max-w-5xl mx-auto mb-16 sm:mb-20">
            {/* Desktop Timeline */}
            <div className="hidden md:block relative">
              {/* Dashed Line */}
              <div className="absolute top-6 left-0 right-0 border-t-2 border-dashed border-gray-300" 
                   style={{ left: '8.33%', right: '8.33%' }} />
              
              {/* Steps */}
              {/* Steps */}
<div className="grid grid-cols-6 gap-4">
  {steps.map((step, index) => (
    <div 
      key={step.id} 
      className={`flex flex-col items-center relative transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${300 + index * 150}ms` }}
    >
      {/* Circle */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold mb-4 relative z-10 transition-all duration-500 ${
        step.active 
          ? 'bg-gray-900 text-white' // active steps
          : 'bg-white border-2 border-gray-300 text-gray-400' // inactive steps (4,5,6)
      } ${isVisible ? 'scale-100' : 'scale-0'}`}
      style={{ transitionDelay: `${400 + index * 150}ms` }}>
        {step.id}
      </div>
      
      {/* Title */}
      <h3 className={`font-semibold text-center text-sm ${
        step.active ? 'text-gray-900' : 'text-gray-400'
      }`}>
        {step.title}
      </h3>
    </div>
  ))}
</div>

            </div>

            {/* Mobile Timeline */}
          
<div className="md:hidden space-y-6">
  {steps.map((step, index) => (
    <div 
      key={step.id} 
      className={`flex items-center gap-4 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
      }`}
      style={{ transitionDelay: `${300 + index * 100}ms` }}
    >
      {/* Circle */}
      <div
        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all duration-500 ${
          step.active
            ? "bg-gray-900 text-white"
            : "bg-white border-2 border-gray-300 text-gray-400"
        } ${isVisible ? "scale-100" : "scale-0"}`}
        style={{ transitionDelay: `${400 + index * 100}ms` }}
      >
        {step.id}
      </div>

      {/* Title */}
      <h3
        className={`font-semibold text-sm ${
          step.active ? "text-gray-900" : "text-gray-400"
        }`}
      >
        {step.title}
      </h3>
    </div>
  ))}
</div>

          </div>
        </div>

        {/* 3D House Image */}
        <div className={`max-w-4xl mx-auto perspective-1000 transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}
        style={{ transitionDelay: '1200ms' }}>
          <div className="relative">
            <img
              src="https://i.ibb.co/SD7FR8C3/cc-removebg-preview.png"
              alt="3D House Model"
              className="w-full h-auto transform-style-3d"
              style={{
                filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))'
              }}
            />
            
            {/* Green Checkmark */}
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100 rotate-12' : 'opacity-0 scale-0 rotate-0'
            }`}
            style={{ transitionDelay: '1500ms' }}>
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-green-500 rounded-lg flex items-center justify-center shadow-2xl">
                <Check className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 text-white stroke-[3]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;