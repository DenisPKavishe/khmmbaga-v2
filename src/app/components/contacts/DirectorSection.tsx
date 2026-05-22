"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function DirectorSection() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-director');
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
    window.open('https://wa.me/255784567890?text=Hello%20KH%20MMBAGA%2C%20I%27m%20interested%20in%20your%20construction%20and%20supply%20services.%20Please%20share%20more%20information.', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:khmmbagacompanyltd@gmail.com?subject=Project%20Inquiry%20-%20KH%20MMBAGA&body=Hello%2C%0A%0AI%20would%20like%20to%20inquire%20about%20your%20construction%20and%20supply%20services%20in%20Arusha%2FMoshi.%0A%0AThank%20you.';
  };

  const handleCall = () => {
    window.location.href = 'tel:+255756000123';
  };

  return (
    <section className="director-split-bg w-full py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-director transition-all duration-700">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 inline-block pb-1">
              <i className="fas fa-crown mr-1"></i> Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-5">
              Meet Our <span className="text-orange-500">Managing Director</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              With over 15 years of experience in East African construction industry, our leadership ensures excellence in every project.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2 director-img-wrapper rounded-3xl shadow-2xl reveal-director transition-all duration-700 relative" style={{ transitionDelay: '100ms' }}>
            <div className="relative w-full h-96 md:h-[500px] lg:h-[550px]">
              <Image
                src="/images/khan.png"
                alt="Managing Director - Tanzania Construction"
                fill
                className="object-cover object-top rounded-3xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
              />
            </div>
            <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg">
              <i className="fas fa-quote-left text-orange-500 text-xl"></i>
              <p className="text-gray-800 font-semibold text-sm">"Quality is our foundation"</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-6 reveal-director transition-all duration-700" style={{ transitionDelay: '200ms' }}>
            <div>
              <h3 className="text-3xl font-bold text-gray-800">
                Kaniki Athumani
              </h3>
              <p className="text-gray-500 text-lg mt-1">Founder & Managing Director</p>
              <div className="flex flex-wrap items-center gap-2 mt-2">
                <span className="bg-orange-100 text-orange-600 text-xs px-3 py-1 rounded-full">
                  <i className="fas fa-trophy"></i> 5+ Years Experience
                </span>
                <span className="bg-green-100 text-green-600 text-xs px-3 py-1 rounded-full">
                  <i className="fas fa-check-circle"></i> 18+ Projects
                </span>
                <span className="bg-blue-100 text-blue-600 text-xs px-3 py-1 rounded-full">
                  <i className="fas fa-building"></i> Arusha & Moshi
                </span>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Kaniki leads our team with an unwavering commitment to excellence. Under his leadership, KH MMBAGA has become the most trusted partner for breweries, industrial facilities, and commercial developers across Arusha, Moshi, and Kilimanjaro region. His hands-on approach ensures every project meets international standards while respecting local expertise and sustainable practices.
            </p>

            <div className="border-t border-gray-200 pt-6 mt-4">
              <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <i className="fas fa-address-card text-orange-500"></i> Direct Contact
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-700 group cursor-pointer" onClick={handleCall}>
                  <i className="fas fa-phone-alt text-orange-500 w-6 text-lg"></i>
                  <span className="group-hover:text-orange-600 transition">+255 766 689 136 (Office)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 group cursor-pointer" onClick={handleWhatsApp}>
                  <i className="fas fa-mobile-alt text-orange-500 w-6 text-lg"></i>
                  <span className="group-hover:text-orange-600 transition">+255 755 689 137 (Mobile)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 group cursor-pointer" onClick={handleEmail}>
                  <i className="fas fa-envelope text-orange-500 w-6 text-lg"></i>
                  <span className="group-hover:text-orange-600 transition">khmmbagacompanyltd@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700 group">
                  <i className="fas fa-map-marker-alt text-orange-500 w-6 text-lg"></i>
                  <span className="group-hover:text-orange-600 transition">Arusha, Tanzania</span>
                </div>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              <a href="https://wa.me/255766689136" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-orange-500 hover:text-white transition-all hover:scale-110">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .director-split-bg {
          position: relative;
          background: white;
        }
        .director-split-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0.12;
        }
        .director-split-bg > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .director-img-wrapper {
          position: relative;
          overflow: hidden;
          border-radius: 2rem;
        }
        .director-img-wrapper img {
          transition: transform 0.6s ease;
        }
        .director-img-wrapper:hover img {
          transform: scale(1.05);
        }
        
        .reveal-director {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-director.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}