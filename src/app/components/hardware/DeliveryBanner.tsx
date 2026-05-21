"use client";

import { useEffect } from 'react';

export default function DeliveryBanner() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-banner');
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

  return (
    <section className="py-10 bg-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="reveal-banner transition-all duration-700 flex items-center gap-3">
          <i className="fas fa-truck-fast text-2xl animate-pulse-slow"></i>
          <span className="font-semibold">Safe & Secure Delivery Across Tanzania</span>
        </div>
        <div className="reveal-banner transition-all duration-700" style={{ transitionDelay: '100ms' }}>
          <div className="flex items-center gap-3">
            <i className="fas fa-shield-alt text-2xl"></i>
            <span className="font-semibold">100% Genuine Tools Guarantee</span>
          </div>
        </div>
        <div className="reveal-banner transition-all duration-700" style={{ transitionDelay: '200ms' }}>
          <div className="flex items-center gap-3">
            <i className="fas fa-headset text-2xl"></i>
            <span className="font-semibold">24/7 WhatsApp Support: +255 784 567 890</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .reveal-banner {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-banner.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}