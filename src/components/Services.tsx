import { useState } from "react";
import { ArrowUpRight, X, CheckCircle2 } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Construction",
    description:
      "End-to-end construction services with quality craftsmanship and timely delivery for residential and commercial projects.",
    fullDescription:
      "Our comprehensive construction services deliver excellence from blueprint to completion. With decades of experience and a team of skilled professionals, we ensure every project meets the highest standards of quality, safety, and sustainability.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop",
    keyPoints: [
      "Expert project management from start to finish",
      "Quality materials and superior craftsmanship",
      "On-time delivery with transparent communication",
      "Compliance with all safety and building regulations",
      "Cost-effective solutions without compromising quality",
      "Experienced workforce with modern equipment",
    ],
  },
  {
    id: 2,
    title: "Apartments",
    description:
      "Premium apartment complexes designed for modern living with world-class amenities and sustainable features.",
    fullDescription:
      "Experience elevated urban living in our thoughtfully designed apartment complexes. Each property combines contemporary architecture with sustainable practices, offering residents a perfect blend of comfort, convenience, and community.",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    keyPoints: [
      "Modern architectural design with premium finishes",
      "World-class amenities including gym, pool, and clubhouse",
      "Smart home integration and energy-efficient systems",
      "24/7 security with gated community access",
      "Ample parking and green spaces",
      "Prime locations with excellent connectivity",
    ],
  },
  {
    id: 3,
    title: "Townships",
    description:
      "Integrated township development with residential, commercial, and recreational spaces for complete urban living.",
    fullDescription:
      "Our integrated townships redefine community living by creating self-sustained ecosystems that combine residential, commercial, and recreational facilities. These developments are designed to provide everything you need within walking distance.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    keyPoints: [
      "Mixed-use development with residential and commercial zones",
      "Schools, hospitals, and shopping centers within premises",
      "Parks, playgrounds, and recreational facilities",
      "Sustainable infrastructure with waste management systems",
      "Wide roads, street lighting, and landscaped boulevards",
      "Community centers and social gathering spaces",
    ],
  },
  {
    id: 4,
    title: "Layouts",
    description:
      "Well-planned residential and commercial layouts with proper infrastructure, utilities, and legal approvals.",
    fullDescription:
      "Invest in perfectly planned plots with complete infrastructure and legal documentation. Our layouts are designed with attention to detail, ensuring optimal land utilization and future appreciation potential.",
    image:
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop",
    keyPoints: [
      "RERA approved with clear legal documentation",
      "Well-designed plot layouts with proper road access",
      "Underground drainage and water supply systems",
      "Electricity connections and street lighting",
      "Compound walls and entrance gates",
      "Parks and community spaces within layout",
    ],
  },
  {
    id: 5,
    title: "Villas",
    description:
      "Luxurious independent villas with contemporary architecture, private gardens, and premium finishes.",
    fullDescription:
      "Live the life of luxury in our exclusive villas that offer privacy, space, and elegance. Each villa is a masterpiece of architectural design, featuring premium amenities and finishes that cater to discerning homeowners.",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    keyPoints: [
      "Spacious independent villas with private gardens",
      "Contemporary architecture with premium interiors",
      "High-end fixtures and branded fittings",
      "Private parking and security systems",
      "Customization options available",
      "Gated community with exclusive amenities",
    ],
  },
  {
    id: 6,
    title: "Real Estate Marketing",
    description:
      "Strategic property marketing solutions to maximize visibility and accelerate sales for your real estate projects.",
    fullDescription:
      "Elevate your real estate projects with our comprehensive marketing solutions. We combine digital innovation with traditional strategies to create compelling campaigns that drive results and maximize ROI.",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop",
    keyPoints: [
      "Digital marketing campaigns across all platforms",
      "Professional photography and virtual tours",
      "Strategic branding and positioning",
      "Lead generation and CRM management",
      "Event management and property launches",
      "Performance analytics and reporting",
    ],
  },
];

const Services = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [selectedService, setSelectedService] = useState<typeof services[0] | null>(
    null
  );

  return (
   <section id="services" className="py-16 sm:py-20 md:py-24 lg:py-32 bg-secondary">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    {/* Section Header */}
    <div className="text-center mb-12 sm:mb-16 lg:mb-20">
      <span className="inline-block text-[#473727] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4">
        What We Offer
      </span>

      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 sm:mb-6">
        Our Services
      </h2>
      <div className="w-16 sm:w-20 h-px bg-[#473727] mx-auto mb-4 sm:mb-6" />

      {/* Paragraph updated */}
      <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 font-libre">
        Comprehensive construction and real estate solutions tailored to bring your vision to life
      </p>
    </div>

    {/* Services Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
      {services.map((service, index) => (
        <div
          key={service.id}
          className="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-card shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
          onMouseEnter={() => setHoveredId(service.id)}
          onMouseLeave={() => setHoveredId(null)}
          onClick={() => setSelectedService(service)}
          style={{
            animationDelay: `${index * 100}ms`,
          }}
        >
          {/* Image Container */}
          <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
            <img
              src={service.image}
              alt={service.title}
              className={`w-full h-full object-cover transition-transform duration-700 ${
                hoveredId === service.id ? "scale-110" : "scale-100"
              }`}
            />

            <div
              className={`absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent transition-opacity duration-500 ${
                hoveredId === service.id ? "opacity-100" : "opacity-70"
              }`}
            />

            {/* Number Badge */}
            <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#473727]/20 backdrop-blur-sm border border-[#473727]/30 flex items-center justify-center">
              <span className="text-[#473727] font-heading text-sm sm:text-base font-semibold">
                {String(service.id).padStart(2, "0")}
              </span>
            </div>

            {/* Arrow Icon */}
            <div
              className={`absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#473727] flex items-center justify-center transition-all duration-500 ${
                hoveredId === service.id
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-4"
              }`}
            >
              <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
          </div>

          {/* Content */}
          <div className="p-4 sm:p-5 md:p-6">
            <h3 className="font-heading text-lg sm:text-xl md:text-2xl text-foreground mb-2 sm:mb-3 group-hover:text-[#473727] transition-colors duration-300">
              {service.title}
            </h3>

            {/* Paragraph updated */}
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base leading-relaxed line-clamp-3 font-libre">
              {service.description}
            </p>

            <div
              className={`mt-3 sm:mt-4 flex items-center gap-2 text-[#473727] text-xs sm:text-sm font-medium transition-all duration-500 ${
                hoveredId === service.id
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-2"
              }`}
            >
              <span>Learn More</span>
              <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div className="text-center mt-12 sm:mt-16 lg:mt-20">
      <a
        href="#contact"
        className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 bg-[#473727] text-white font-medium text-sm sm:text-base hover:bg-[#5a402b] transition-all duration-300 hover:shadow-lg hover:shadow-[#473727]/25"
      >
        Discuss Your Project
        <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
      </a>
    </div>
  </div>

  {/* Modal Popup */}
  {selectedService && (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
      onClick={() => setSelectedService(null)}
    >
      <div
        className="bg-card rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setSelectedService(null)}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/80 backdrop-blur-sm hover:bg-primary flex items-center justify-center transition-all duration-300 hover:rotate-90 z-10"
        >
          <X className="w-5 h-5 text-[#473727]" />
        </button>

        {/* Image Section */}
        <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden rounded-t-2xl">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 rounded-full bg-[#473727]/20 backdrop-blur-sm border border-[#473727]/30 flex items-center justify-center">
                <span className="text-[#473727] font-heading text-lg font-semibold">
                  {String(selectedService.id).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading text-3xl sm:text-4xl md:text-5xl text-white">
                {selectedService.title}
              </h3>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 md:p-10">
          {/* Description */}
          <div className="mb-8">
            <h4 className="font-heading text-xl sm:text-2xl text-foreground mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#473727] rounded-full" />
              Overview
            </h4>

            {/* Paragraph updated */}
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-libre">
              {selectedService.fullDescription}
            </p>
          </div>

          {/* Key Points */}
          <div>
            <h4 className="font-heading text-xl sm:text-2xl text-foreground mb-6 flex items-center gap-2">
              <div className="w-1 h-6 bg-[#473727] rounded-full" />
              Key Features
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedService.keyPoints.map((point, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-secondary transition-all duration-300 group"
                  style={{
                    animationDelay: `${index * 50}ms`,
                  }}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#473727]/10 flex items-center justify-center mt-0.5 group-hover:bg-[#473727]/20 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#473727]" />
                  </div>

                  {/* Paragraph updated */}
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed font-libre">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              onClick={() => setSelectedService(null)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#473727] text-white font-medium text-base hover:bg-[#5a402b] transition-all duration-300 hover:shadow-lg hover:shadow-[#473727]/25"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </a>

            <button
              onClick={() => setSelectedService(null)}
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-secondary text-foreground font-medium text-base hover:bg-secondary/80 transition-all duration-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )}
</section>

  );
};

export default Services;
