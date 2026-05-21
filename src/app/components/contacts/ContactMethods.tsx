"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function ContactMethods() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-method');
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('visible');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/255766689136?text=Hello%20KH%20MMBAGA%2C%20I%27m%20interested%20in%20your%20construction%20and%20supply%20services.%20Please%20share%20more%20information.', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:khmmbagacompanyltd@gmail.com?subject=Project%20Inquiry%20-%20KH%20MMBAGA&body=Hello%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20construction%20and%20supply%20services%20in%20Arusha%2FMoshi.%0A%0AThank%20you.';
  };

  const handleCall = () => {
    window.location.href = 'tel:+255755689137';
  };

  return (
    <section className="contact-split-bg w-full py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-method transition-all duration-700">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 inline-block pb-1">
              <i className="fas fa-comments mr-1"></i> Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-5">
              Reach Out <span className="text-orange-500">Anytime</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">Our team responds within 24 hours. Choose your preferred way to connect.</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center card-hover reveal-method transition-all duration-700" style={{ transitionDelay: '100ms' }}>
            <div className="whatsapp-ripple relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="fab fa-whatsapp text-white text-5xl relative z-10"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">WhatsApp Chat</h3>
            <p className="text-gray-500 mb-4">Instant support & quick quotes</p>
            <p className="text-green-600 font-semibold mb-5">+255 766 689 136</p>
            <button
              onClick={handleWhatsApp}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2 group"
            >
              <i className="fab fa-whatsapp text-xl"></i> Chat on WhatsApp
              <i className="fas fa-arrow-right"></i>
            </button>
            <p className="text-xs text-gray-400 mt-4">Response within 1 hour during business hours</p>
          </div>

          {/* Email Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center card-hover reveal-method transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <i className="fas fa-envelope text-white text-5xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Email Us</h3>
            <p className="text-gray-500 mb-4">For detailed inquiries & proposals</p>
            <p className="text-blue-600 font-semibold mb-5">khmmbagacompanyltd@gmail.com</p>
            <button
              onClick={handleEmail}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2 group"
            >
              <i className="fas fa-paper-plane"></i> Send Email
              <i className="fas fa-arrow-right"></i>
            </button>
            <p className="text-xs text-gray-400 mt-4">We'll respond within 24 hours</p>
          </div>

          {/* Phone Call Card */}
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center card-hover reveal-method transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse-slow">
              <i className="fas fa-phone-alt text-white text-5xl"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Call Us Directly</h3>
            <p className="text-gray-500 mb-4">Speak with our project team</p>
            <p className="text-orange-600 font-semibold mb-5">+255 755 689 137</p>
            <button
              onClick={handleCall}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-md flex items-center justify-center gap-2 group"
            >
              <i className="fas fa-phone"></i> Call Now
              <i className="fas fa-arrow-right"></i>
            </button>
            <p className="text-xs text-gray-400 mt-4">Mon-Fri, 8am - 6pm EAT</p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md reveal-method transition-all duration-700" style={{ transitionDelay: '400ms' }}>
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-building text-orange-500"></i> Office Locations
            </h4>
            <div className="space-y-3 text-gray-600">
              <p><i className="fas fa-map-pin text-orange-400 w-5"></i> <strong>Arusha HQ:</strong> P.O. Box 999, Arusha, Tanzania</p>
              <p><i className="fas fa-map-pin text-orange-400 w-5"></i> <strong>Moshi Branch:</strong> Kilimanjaro Road, Moshi Urban, Kilimanjaro Region</p>
              <p><i className="fas fa-clock text-orange-400 w-5"></i> <strong>Emergency Support:</strong> 24/7 via WhatsApp</p>
            </div>
          </div>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-md reveal-method transition-all duration-700" style={{ transitionDelay: '500ms' }}>
            <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center gap-2">
              <i className="fas fa-clock text-orange-500"></i> Business Hours
            </h4>
            <div className="space-y-2 text-gray-600">
              <p><i className="far fa-calendar-alt text-orange-400 w-5"></i> Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p><i className="far fa-calendar-alt text-orange-400 w-5"></i> Saturday: 9:00 AM - 1:00 PM</p>
              <p><i className="far fa-calendar-check text-orange-400 w-5"></i> Sunday & Public Holidays: Closed (Emergency support via WhatsApp)</p>
            </div>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden shadow-2xl map-container reveal-method transition-all duration-700" style={{ transitionDelay: '600ms' }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15876.248602510297!2d36.6802778!3d-3.3666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18365d6b3b6f3d5d%3A0x5b8e9f5d7a3f2e1c!2sArusha%2C%20Tanzania!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <style jsx>{`
        .contact-split-bg {
          position: relative;
          background: linear-gradient(135deg, #fff7ed 0%, #ffffff 100%);
        }
        .contact-split-bg::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0.1;
        }
        .contact-split-bg > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 35px -12px rgba(0, 0, 0, 0.25);
        }
        
        .whatsapp-ripple {
          position: relative;
        }
        .whatsapp-ripple::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: rgba(37, 211, 102, 0.4);
          border-radius: 50%;
          transform: translate(-50%, -50%) scale(1);
          animation: ripple 1.5s ease-out infinite;
        }
        
        @keyframes ripple {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
          100% { transform: translate(-50%, -50%) scale(1.5); opacity: 0; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .map-container iframe {
          filter: grayscale(0.1) brightness(0.98);
          transition: filter 0.3s;
        }
        .map-container iframe:hover {
          filter: grayscale(0);
        }
        
        .reveal-method {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-method.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}