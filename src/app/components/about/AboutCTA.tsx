"use client";

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutCTA() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-cta');
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
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <div className="reveal-cta transition-all duration-700">
          <i className="fas fa-folder-open text-white text-5xl mb-4 opacity-80"></i>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Explore Our Project Portfolio</h3>
          <p className="text-orange-100 text-lg max-w-2xl mx-auto mb-8">
            From large-scale brewery constructions to high-end industrial projects see how we transform visions into reality.
          </p>
          <Link href="/projects">
            <button className="bg-white text-orange-600 font-bold py-3 px-10 rounded-full text-xl shadow-2xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 inline-flex items-center gap-3 group">
              <i className="fas fa-folder-open group-hover:animate-bounce-subtle"></i> View Full Project Folder
              <i className="fas fa-external-link-alt text-sm"></i>
            </button>
          </Link>
          <p className="text-orange-100 text-sm mt-6 flex items-center justify-center gap-1">
            <i className="fas fa-map-marker-alt"></i> Arusha | Moshi | Tanzania Wide
          </p>
        </div>
      </div>

      <style jsx>{`
        .reveal-cta {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-cta.visible {
          opacity: 1;
          transform: scale(1);
        }
        
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .group:hover .group-hover\\:animate-bounce-subtle {
          animation: bounce-subtle 2s infinite;
        }
      `}</style>
    </section>
  );
}