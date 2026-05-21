"use client";

import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 180, suffix: '+', label: 'Projects Completed', delay: 100 },
  { value: 45, suffix: '+', label: 'Brewery Projects', delay: 200 },
  { value: 200, suffix: 'k+', label: 'Sq Meters Completed', delay: 300 },
  { value: 35, suffix: '+', label: 'Corporate Clients', delay: 400 },
];

export default function ServicesStats() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (!hasStarted) {
              setHasStarted(true);
              stats.forEach((stat, idx) => {
                let start = 0;
                const end = stat.value;
                const duration = 1500;
                const stepTime = 20;
                const steps = duration / stepTime;
                const increment = end / steps;

                const timer = setInterval(() => {
                  start += increment;
                  if (start >= end) {
                    setCounts(prev => {
                      const newCounts = [...prev];
                      newCounts[idx] = end;
                      return newCounts;
                    });
                    clearInterval(timer);
                  } else {
                    setCounts(prev => {
                      const newCounts = [...prev];
                      newCounts[idx] = Math.floor(start);
                      return newCounts;
                    });
                  }
                }, stepTime);
              });
            }
          } else {
            setIsVisible(false);
            if (hasStarted) {
              setCounts([0, 0, 0, 0]);
              setHasStarted(false);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasStarted]);

  return (
    <section className="stats-bg py-20 relative overflow-hidden" ref={sectionRef}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Our Impact in <span className="text-yellow-300">Numbers</span>
            </h3>
            <div className="w-20 h-1 bg-yellow-300 mx-auto rounded-full mt-4"></div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="text-5xl md:text-6xl font-black text-white mb-2 counter-number">
                {counts[index]}{stat.suffix}
              </div>
              <p className="text-orange-100 font-semibold text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-bg {
          background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
        }
        
        .counter-number {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </section>
  );
}