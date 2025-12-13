import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Send, User, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }

    const whatsappMessage = `*New Contact Form Submission*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Subject:* ${formData.subject}%0A%0A` +
      `*Message:*%0A${formData.message}`;

    const whatsappNumber = '919945586527';
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 9945586527",
      subInfo: "Available 24/7",
      link: "tel:+919945586527"
    },
    {
      icon: Phone,
      title: "Alternate Phone",
      info: "+91 9538595685",
      subInfo: "Mon-Sat 9AM-6PM",
      link: "tel:+919538595685"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "svdevelopers.construct@gmail.com",
      subInfo: "We'll respond within 24hrs",
      link: "mailto:svdevelopers.construct@gmail.com"
    },
    {
      icon: MapPin,
      title: "Visit Our Office",
      info: "116, 10th Cross Rd, Binnamangala",
      subInfo: "Indiranagar, Bengaluru - 560038",
      link: "https://maps.google.com/?q=116,10th+Cross+Rd,Binnamangala,Indiranagar,Bengaluru,Karnataka+560038"
    }
  ];

  return (
    <section id="contact" className="relative pb-16 sm:pb-20 md:pb-24 lg:pb-32 overflow-hidden font-sans">
      {/* Background */}
      <div className="absolute inset-0 bg-[#E8DCC8]/95" />

      {/* Curved Cut Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0,64 C240,100 480,120 720,100 C960,80 1200,40 1440,64 L1440,120 L0,120 Z" fill="white"/>
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className={`inline-block text-[#473727] text-xs sm:text-sm tracking-[0.2em] uppercase mb-3 sm:mb-4 font-medium transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Get In Touch
          </span>
          <h2 className={`font-bold text-3xl sm:text-4xl md:text-5xl text-[#473727] mb-3 sm:mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
            Contact Us
          </h2>
          <div className={`w-16 sm:w-20 h-px bg-[#473727] mx-auto mb-4 sm:mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
         <p className={`text-[#473727]/90 text-base sm:text-lg max-w-2xl mx-auto font-serif transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
  Have a project in mind? Let's discuss how we can bring your vision to life.
</p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 max-w-7xl mx-auto">
          {/* Contact Cards */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((item, idx) => (
              <a
                key={item.title}
                href={item.link}
                target={item.icon === MapPin || item.icon === Mail ? "_blank" : "_self"}
                rel={item.icon === MapPin || item.icon === Mail ? "noopener noreferrer" : ""}
                className={`block bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${400 + idx * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#473727] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[#473727] text-lg mb-1">{item.title}</h3>
                    <p className="text-[#473727]/90 font-medium text-sm sm:text-base break-words">{item.info}</p>
                    <p className="text-[#473727]/60 text-xs sm:text-sm mt-1">{item.subInfo}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-[#473727] mb-6">Send us a Message</h3>

              <div className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium text-[#473727] mb-2">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#473727]/60 pointer-events-none" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-[#473727]/30 rounded-xl focus:border-[#473727] focus:ring-2 focus:ring-[#473727]/30 outline-none transition-all duration-300 text-[#473727]"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium text-[#473727] mb-2">Email Address *</label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#473727]/60 pointer-events-none" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-[#473727]/30 rounded-xl focus:border-[#473727] focus:ring-2 focus:ring-[#473727]/30 outline-none transition-all duration-300 text-[#473727]"
                        placeholder="name@example.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  {/* Phone */}
                  <div className="relative">
                    <label htmlFor="phone" className="block text-sm font-medium text-[#473727] mb-2">Phone Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#473727]/60 pointer-events-none" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-[#473727]/30 rounded-xl focus:border-[#473727] focus:ring-2 focus:ring-[#473727]/30 outline-none transition-all duration-300 text-[#473727]"
                        placeholder="+91 98********"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-medium text-[#473727] mb-2">Subject *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#473727]/60 pointer-events-none" />
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-[#473727]/30 rounded-xl focus:border-[#473727] focus:ring-2 focus:ring-[#473727]/30 outline-none transition-all duration-300 text-[#473727]"
                        placeholder="Project Inquiry"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-[#473727] mb-2">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 border-2 border-[#473727]/30 rounded-xl focus:border-[#473727] focus:ring-2 focus:ring-[#473727]/30 outline-none transition-all duration-300 resize-none text-[#473727]"
                    placeholder="Tell us about your project requirements..."
                  />
                </div>

                {/* Submit Button */}
                <button
                //   onClick={handleSubmit}
                  className="w-full bg-[#473727] text-white font-bold py-4 px-8 rounded-xl hover:bg-[#5a3f2e] transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
