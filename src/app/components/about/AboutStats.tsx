"use client";

import { useEffect, useState, useRef } from 'react';

const stats = [
  {
    icon: 'fas fa-building',
    value: 15,
    suffix: '+',
    label: 'Years of Excellence',
    sublabel: 'Serving Arusha & Moshi region',
    delay: 100,
  },
  {
    icon: 'fas fa-industry',
    value: 45,
    suffix: '+',
    label: 'Brewery & Industrial Projects',
    sublabel: 'Major east african brands',
    delay: 200,
  },
  {
    icon: 'fas fa-paint-roller',
    value: 200,
    suffix: 'k+',
    label: 'Sq Meters Completed',
    sublabel: 'Industrial & commercial projects',
    delay: 300,
  },
  {
    icon: 'fas fa-handshake',
    value: 100,
    suffix: '%',
    label: 'Client Satisfaction',
    sublabel: 'Long-term partnerships',
    delay: 400,
  },
];

export default function AboutStats() {
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
    <div className="stats-bg-section w-full py-16 relative overflow-hidden" ref={sectionRef}>
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200 text-center transition-all duration-500 hover:shadow-2xl card-hover counter-card transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className={`${stat.icon} text-orange-600 text-3xl`}></i>
              </div>
              <div className="text-4xl font-extrabold text-gray-800 counter-number">
                {counts[index]}{stat.suffix}
              </div>
              <p className="text-gray-500 font-medium mt-2">{stat.label}</p>
              <p className="text-sm text-gray-400 mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .stats-bg-section {
          position: relative;
          background: white;
        }
        .stats-bg-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          z-index: 0;
        }
        .stats-bg-section::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.85);
          z-index: 1;
        }
        .stats-bg-section > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .card-hover {
          transition: all 0.3s ease;
        }
        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 25px -12px rgba(0, 0, 0, 0.25);
        }
        .counter-number {
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </div>
  );
}