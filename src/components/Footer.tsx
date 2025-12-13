import React from 'react';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Twitter, Youtube, ArrowRight, Clock } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    'Construction',
    'Apartments',
    'Townships',
    'Layouts',
    'Villas',
    'Real Estate Marketing'
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#work' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-[#473727] text-[#E8DCC8] relative overflow-hidden font-serif">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 " />
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-5">
            <div className="w-24 h-24 flex items-center justify-center">
            <img 
                src="https://i.ibb.co/Z6CBvxYn/SVLOGO.png" 
                alt="SV Developers Logo"
                className="w-full h-full object-contain"
            />
            </div>

              <h3 className="text-xl font-bold text-[#E8DCC8]">SV Developers</h3>
            </div>
            <p className="text-[#E8DCC8]/80 mb-5 leading-relaxed text-sm">
              Building dreams, creating landmarks, and delivering excellence in every square foot. Your trusted partner in real estate development.
            </p>
            
            {/* Social Links */}
            {/* <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#473727]/70 hover:bg-[#E8DCC8] rounded-lg flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
                >
                  <social.icon className="w-5 h-5 text-[#E8DCC8] group-hover:text-[#473727] transition-colors" />
                </a>
              ))}
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#E8DCC8] font-bold text-base mb-5 relative inline-block">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#E8DCC8]/70 -mb-2" />
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-[#E8DCC8]/80 hover:text-[#E8DCC8] transition-colors duration-300 group text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[#E8DCC8] font-bold text-base mb-5 relative inline-block">
              Our Services
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#E8DCC8]/70 -mb-2" />
            </h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="flex items-center space-x-2 text-[#E8DCC8]/80 hover:text-[#E8DCC8] transition-colors duration-300 group text-sm"
                  >
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    <span>{service}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[#E8DCC8] font-bold text-base mb-5 relative inline-block">
              Get In Touch
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-[#E8DCC8]/70 -mb-2" />
            </h4>
            <ul className="space-y-3.5">
              <li>
                <a
                  href="tel:+919945586527"
                  className="flex items-start space-x-3 text-[#E8DCC8]/80 hover:text-[#E8DCC8] transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-[#E8DCC8] text-sm">+91 9945586527</p>
                    <p className="text-xs">Primary Contact</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="tel:+919538595685"
                  className="flex items-start space-x-3 text-[#E8DCC8]/80 hover:text-[#E8DCC8] transition-colors duration-300 group"
                >
                  <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-[#E8DCC8] text-sm">+91 9538595685</p>
                    <p className="text-xs">Alternate Number</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:svdeveloperblr@gmail.com"
                  className="flex items-start space-x-3 text-[#E8DCC8]/80 hover:text-[#E8DCC8] transition-colors duration-300 group"
                >
                  <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-[#E8DCC8] break-all text-sm">svdeveloperblr@gmail.com</p>
                    <p className="text-xs">Email Us Anytime</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=116,10th+Cross+Rd,Binnamangala,Indiranagar,Bengaluru,Karnataka+560038"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start space-x-3 text-[#E8DCC8]/80 hover:text-[#E8DCC8] transition-colors duration-300 group"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="font-medium text-[#E8DCC8] text-sm">116, 10th Cross Rd</p>
                    <p className="text-xs">Binnamangala, Indiranagar</p>
                    <p className="text-xs">Bengaluru - 560038</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#473727]/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-[#E8DCC8]/70 text-sm text-center md:text-left">
              © {currentYear} <span className="text-[#E8DCC8] font-semibold">SV Developers</span>. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="#privacy" className="text-[#E8DCC8]/70 hover:text-[#E8DCC8] transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-[#E8DCC8]/70 hover:text-[#E8DCC8] transition-colors">
                Terms of Service
              </a>
              <a href="#sitemap" className="text-[#E8DCC8]/70 hover:text-[#E8DCC8] transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Line */}
      <div className="h-1 bg-[#E8DCC8]" />
    </footer>
  );
}
