"use client";

import { useEffect } from 'react';
import Link from 'next/link';

const services = [
  {
    id: 1,
    icon: 'fas fa-building',
    title: 'Industrial Construction',
    description: 'Full-scale industrial buildings, factory expansions, structural steel works, and warehouse construction tailored to your operational needs.',
    tags: ['Steel Structures', 'Factory Builds', 'Warehouse'],
    tagColors: 'bg-orange-100 text-orange-600',
    gradient: 'from-orange-400 to-orange-600',
    delay: 100,
  },
  {
    id: 2,
    icon: 'fas fa-paint-roller',
    title: 'Industrial Painting',
    description: 'High-performance coatings, anti-corrosion protection, epoxy flooring, and heat-resistant paints for industrial environments.',
    tags: ['Epoxy Flooring', 'Anti-Corrosion', 'Heat Resistant'],
    tagColors: 'bg-blue-100 text-blue-600',
    gradient: 'from-blue-500 to-blue-600',
    delay: 200,
  },
  {
    id: 3,
    icon: 'fas fa-truck',
    title: 'Material Supply',
    description: 'Premium construction materials: cement, steel, aggregates, paints, sealants, safety equipment delivered to your site.',
    tags: ['Cement & Steel', 'Premium Paints', 'Safety Gear'],
    tagColors: 'bg-green-100 text-green-600',
    gradient: 'from-green-500 to-green-600',
    delay: 300,
  },
  {
    id: 5,
    icon: 'fas fa-home',
    title: 'Commercial & Residential',
    description: 'Office complexes, shopping centers, apartment buildings, and luxury villas complete construction and finishing.',
    tags: ['Commercial Buildings', 'Luxury Villas'],
    tagColors: 'bg-purple-100 text-purple-600',
    gradient: 'from-purple-500 to-purple-600',
    delay: 500,
  },
  {
    id: 6,
    icon: 'fas fa-chart-line',
    title: 'Project Management',
    description: 'End-to-end project oversight, cost estimation, quality control, and timeline management for complex industrial projects.',
    tags: ['Cost Control', 'Quality Assurance', 'Timeline Mgmt'],
    tagColors: 'bg-red-100 text-red-600',
    gradient: 'from-red-500 to-red-600',
    delay: 600,
  },
];

export default function ServicesGrid() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-service');
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
    <section className="services-split-bg w-full py-24 md:py-32 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-service transition-all duration-700">
            <span className="text-orange-500 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 inline-block pb-1">
              <i className="fas fa-star mr-1"></i> Comprehensive Solutions
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-5">
              Expert <span className="text-orange-500">Construction & Supply</span> Services
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg">
              Tailored solutions for breweries, industrial facilities, commercial buildings, and residential projects in Arusha, Moshi, and across Tanzania.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className={`service-card gradient-border bg-white rounded-2xl p-8 shadow-lg transition-all duration-500 reveal-service`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className={`service-icon w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-all`}>
                <i className={`${service.icon} text-white text-3xl`}></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-500 mb-4 leading-relaxed">{service.description}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {service.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs ${service.tagColors} px-2 py-1 rounded-full`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="reveal-service transition-all duration-700" style={{ transitionDelay: '300ms' }}>
            <Link
              href="/contact"
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold py-4 px-10 rounded-full text-lg shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-3 animate-glow-pulse"
            >
              <i className="fas fa-calendar-alt"></i> Request a Free Consultation
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </Link>
            <p className="text-gray-500 text-sm mt-4">
              Get a quality outcome for your project in Arusha, Moshi, or anywhere in Tanzania
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .services-split-bg {
          position: relative;
          background: white;
        }
        .services-split-bg::before {
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
        .services-split-bg > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .service-card {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          transform-origin: center;
        }
        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 40px -20px rgba(0, 0, 0, 0.3);
        }
        
        .service-icon {
          transition: all 0.3s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.1) rotate(5deg);
        }
        
        .reveal-service {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-service.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .animate-glow-pulse {
          animation: glowPulse 2s ease-in-out infinite;
        }
        
        @keyframes glowPulse {
          0% { box-shadow: 0 0 0 0 rgba(234, 88, 12, 0.4); }
          70% { box-shadow: 0 0 0 15px rgba(234, 88, 12, 0); }
          100% { box-shadow: 0 0 0 0 rgba(234, 88, 12, 0); }
        }
      `}</style>
    </section>
  );
}