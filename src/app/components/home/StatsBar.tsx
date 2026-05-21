"use client";

import { useEffect, useState, useRef } from 'react';

const stats = [
  { value: 5, suffix: '+', label: 'Projects Completed' },
  { value: 20, suffix: '+', label: 'Expert Workers' },
  { value: 2, suffix: '+', label: 'Business Certificates' },
  { value: 2, suffix: '+', label: 'Corporate Clients' },
];

export default function StatsBar() {
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const animateNumbers = () => {
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
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateNumbers();
          } else if (!entry.isIntersecting && hasAnimated) {
            setHasAnimated(false);
            setCounts([0, 0, 0, 0]);
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
  }, [hasAnimated]);

  return (
    <div id="stats-bar" ref={sectionRef} className="relative z-20 max-w-5xl mx-auto px-4" style={{ marginTop: '-60px' }}>
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center py-8 px-4 ${
                index < stats.length - 1 ? 'border-r border-gray-100' : ''
              }`}
            >
              <div className="flex items-baseline justify-center">
                <span className="font-heading text-4xl font-black text-dark">
                  {counts[index]}
                </span>
                <span className="font-heading text-4xl font-black text-primary">
                  {stat.suffix}
                </span>
              </div>
              <span className="text-sm text-gray-500 font-medium mt-2 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}