"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function HardwareHero() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-hero');
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

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactWarehouse = () => {
    alert("📞 Contact our warehouse directly:\n📱 Phone: +255 756 000 123\n💬 WhatsApp: +255 784 567 890\n📍 Arusha Hardware Hub, Nyerere Road");
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6">
            <div className="reveal-hero transition-all duration-700">
              <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
                <i className="fas fa-warehouse mr-2"></i> Authorized Hardware Supplier
              </span>
            </div>
            <div className="reveal-hero transition-all duration-700" style={{ transitionDelay: '100ms' }}>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 leading-tight">
                Quality <span className="text-orange-500">Hardware Tools</span><br />
                Delivered <span className="text-orange-500">Safe & Fast</span>
              </h1>
            </div>
            <div className="reveal-hero transition-all duration-700" style={{ transitionDelay: '200ms' }}>
              <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
                Your trusted partner for premium construction tools, equipment, and hardware supplies in Arusha, Moshi, and across Tanzania. Reliable delivery, competitive prices, and genuine quality guaranteed.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2 reveal-hero transition-all duration-700" style={{ transitionDelay: '300ms' }}>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-truck-fast text-orange-500 text-xl"></i> <span>Safe Delivery</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-shield-alt text-orange-500 text-xl"></i> <span>Genuine Quality</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-tag text-orange-500 text-xl"></i> <span>Best Prices</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <i className="fas fa-headset text-orange-500 text-xl"></i> <span>24/7 Support</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-5 pt-4 reveal-hero transition-all duration-700" style={{ transitionDelay: '400ms' }}>
              <button
                onClick={scrollToTools}
                className="hero-btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 flex items-center gap-3 group"
              >
                <span>Explore Tools</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>
              <button
                onClick={handleContactWarehouse}
                className="hero-btn-outline bg-white/80 backdrop-blur-sm border-2 border-orange-500 text-orange-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-3 hover:bg-orange-500 hover:text-white"
              >
                <span>Contact Warehouse</span>
                <i className="fas fa-phone-alt"></i>
              </button>
            </div>

            <div className="flex items-center gap-2 pt-4 text-sm text-gray-500 reveal-hero transition-all duration-700" style={{ transitionDelay: '500ms' }}>
              <i className="fas fa-check-circle text-green-500"></i>
              <span>Trusted by 180+ construction companies in Tanzania</span>
            </div>
          </div>

          <div className="flex-1 reveal-hero transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            <div className="relative -mt-10">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60"></div>
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
                  <Image
                    src="/images/khan.png"
                    alt="Hardware tools and equipment"
                    fill
                    className="object-fill"
                    priority
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-sm flex justify-between items-center">
                  <span><i className="fas fa-tools"></i> 500+ Tools Available</span>
                  <span><i className="fas fa-truck"></i> Nationwide Delivery</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2 animate-pulse-slow">
                <i className="fas fa-rocket"></i>
                <span className="font-bold text-sm">Express Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          z-index: 1;
        }
        .hero-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255,255,255,0.3);
          transform: translate(-50%, -50%);
          transition: width 0.5s ease, height 0.5s ease;
          z-index: -1;
        }
        .hero-btn:hover::before {
          width: 300px;
          height: 300px;
        }
        .hero-btn i {
          transition: transform 0.3s ease;
        }
        .hero-btn:hover i {
          transform: translateX(6px) scale(1.1);
        }
        
        .hero-btn-outline {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .hero-btn-outline:hover {
          background: rgba(255,255,255,0.2);
          transform: translateY(-3px);
        }
        .hero-btn-outline i {
          transition: transform 0.3s ease;
        }
        .hero-btn-outline:hover i {
          transform: translateX(4px);
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .reveal-hero {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-hero.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}