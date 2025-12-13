import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop",
    title: "Building Dreams",
    subtitle: "Into Reality",
    description: "Crafting exceptional spaces that inspire and endure",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
    title: "Modern Architecture",
    subtitle: "Timeless Design",
    description: "Where innovation meets craftsmanship",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2071&auto=format&fit=crop",
    title: "Luxury Living",
    subtitle: "Premium Spaces",
    description: "Creating homes that reflect your vision",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
    title: "Excellence",
    subtitle: "In Every Detail",
    description: "12+ years of construction expertise",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 1000);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    goToSlide((currentSlide + 1) % slides.length);
  }, [currentSlide, goToSlide]);

  const prevSlide = useCallback(() => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  }, [currentSlide, goToSlide]);

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[100dvh] min-h-[500px] w-full overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`hero-slide ${index === currentSlide ? "active" : ""}`}
        >
          {/* Background Image */}
          <div
            className={`absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out ${
              index === currentSlide ? "scale-100" : "scale-110"
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-4xl mx-auto text-center">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 transition-all duration-700 ${
                index === currentSlide
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8 pointer-events-none"
              }`}
            >
              <span
                className="inline-block text-gold text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 opacity-0 animate-fade-in"
                style={{ animationDelay: "200ms" }}
              >
                SV Developers
              </span>
              
              <h2
                className="font-heading text-cream text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-1 sm:mb-2 opacity-0 animate-fade-in leading-tight"
                style={{ animationDelay: "400ms" }}
              >
                {slide.title}
              </h2>
              
              <h2
                className="font-heading text-cream/90 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl italic font-normal mb-4 sm:mb-6 opacity-0 animate-fade-in leading-tight"
                style={{ animationDelay: "600ms" }}
              >
                {slide.subtitle}
              </h2>
              
              <div
                className="w-12 sm:w-16 h-px bg-gold mb-4 sm:mb-6 opacity-0 animate-fade-in"
                style={{ animationDelay: "800ms" }}
              />
              
              <p
                className="text-cream/70 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md mb-6 sm:mb-8 md:mb-10 opacity-0 animate-fade-in px-4"
                style={{ animationDelay: "1000ms" }}
              >
                {slide.description}
              </p>
              
              <div
                className="flex flex-col sm:flex-row gap-3 sm:gap-4 opacity-0 animate-fade-in w-full sm:w-auto px-4 sm:px-0"
                style={{ animationDelay: "1200ms" }}
              >
                <a
  href="#work"
  className="px-6 sm:px-8 py-3 sm:py-3.5 
             bg-[#473727] text-white font-medium text-sm sm:text-base 
             hover:bg-[#6b4f33] 
             transition-all duration-300 
             hover:shadow-lg hover:shadow-gold/25 
             text-center"
>
  View Our Work
</a>

                <a
                  href="#contact"
                  className="px-6 sm:px-8 py-3 sm:py-3.5 border border-cream/30 text-cream hover:bg-cream/10 transition-all duration-300 text-sm sm:text-base text-center"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/50 hover:bg-cream/10 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-cream/20 flex items-center justify-center text-cream/70 hover:text-cream hover:border-cream/50 hover:bg-cream/10 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`carousel-dot ${index === currentSlide ? "active" : ""}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <div className="absolute bottom-8 right-8 hidden lg:flex flex-col items-center gap-2 text-cream/50">
        <span className="text-xs tracking-widest uppercase rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-cream/50 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
