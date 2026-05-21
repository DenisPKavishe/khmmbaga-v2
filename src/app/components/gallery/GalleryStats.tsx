"use client";

import { useEffect } from 'react';

export default function GalleryStats() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-stat');
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

  const stats = [
    { value: '180+', label: 'Projects Completed', delay: 100 },
    { value: '45+', label: 'Brewery Projects', delay: 200 },
    { value: '200k+', label: 'Sq Meters Completed', delay: 300 },
    { value: '35+', label: 'Corporate Clients', delay: 400 },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-orange-700">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`reveal-stat transition-all duration-700`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="text-4xl md:text-5xl font-black text-white mb-2">{stat.value}</div>
              <p className="text-orange-100 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .reveal-stat {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-stat.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>
    </section>
  );
}