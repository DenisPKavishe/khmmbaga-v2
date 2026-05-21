"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function ContactHero() {
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

  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-20 pb-3">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1563166423-482a8c14b2d6?q=80&w=1170&auto=format&fit=crop"
          alt="Tanzania construction background"
          fill
          className="object-cover object-center brightness-50"
          priority
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <div className="reveal-hero transition-all duration-700">
          <span className="inline-block bg-orange-500/90 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full shadow-lg animate-pulse-slow mb-4">
            <i className="fas fa-heart mr-2"></i> We'd Love to Hear From You
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl mb-4">
            Let's Build <span className="shine-text">Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-2xl mx-auto font-light leading-relaxed bg-black/30 p-4 rounded-2xl backdrop-blur-sm">
            Whether you have a project in mind, need expert consultation, or want to discuss supply solutions our team in Arusha & Moshi is ready to assist.
          </p>
        </div>
      </div>

      <style jsx>{`
        .shine-text {
          background: linear-gradient(120deg, #f97316, #facc15, #f97316, #ea580c);
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
          animation: shine 2.5s linear infinite;
        }
        
        @keyframes shine {
          0% { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
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