"use client";

import { useEffect } from 'react';

const reasons = [
  {
    icon: 'fas fa-medal',
    title: '15+ Years Expertise',
    description: 'Proven track record in Tanzania',
    delay: 100,
    animationDelay: '0s',
  },
  {
    icon: 'fas fa-users',
    title: 'Expert Team',
    description: 'Certified engineers & specialists',
    delay: 200,
    animationDelay: '0.2s',
  },
  {
    icon: 'fas fa-clock',
    title: 'On-Time Delivery',
    description: '98% on-time project completion',
    delay: 300,
    animationDelay: '0.4s',
  },
  {
    icon: 'fas fa-handshake',
    title: '100% Satisfaction',
    description: 'Long-term client partnerships',
    delay: 400,
    animationDelay: '0.6s',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-why');
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
    <section className="why-choose-bg py-20 relative">
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="reveal-why transition-all duration-700">
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              Why Choose <span className="text-orange-400">KH MMBAGA?</span>
            </h3>
            <div className="w-20 h-1 bg-orange-400 mx-auto rounded-full mt-4 mb-6"></div>
            <p className="text-gray-200 max-w-2xl mx-auto">
              We combine international standards with local expertise to deliver unmatched quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className={`reveal-why transition-all duration-700 text-center p-6 rounded-xl bg-white/90 backdrop-blur-sm hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg`}
              style={{ transitionDelay: `${reason.delay}ms` }}
            >
              <div
                className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-float"
                style={{ animationDelay: reason.animationDelay }}
              >
                <i className={`${reason.icon} text-white text-2xl`}></i>
              </div>
              <h4 className="font-bold text-gray-800 text-lg">{reason.title}</h4>
              <p className="text-sm text-gray-600">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="reveal-why transition-all duration-700" style={{ transitionDelay: '500ms' }}>
            <p className="text-gray-200 max-w-2xl mx-auto text-sm bg-black/30 inline-block px-6 py-2 rounded-full backdrop-blur-sm">
              <i className="fas fa-check-circle text-orange-400 mr-2"></i>
              Trusted by breweries, industries, and commercial developers across Tanzania
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .why-choose-bg {
          position: relative;
          background: linear-gradient(135deg, rgba(0,0,0,0.75), rgba(0,0,0,0.85));
        }
        .why-choose-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          z-index: -1;
          opacity: 0.35;
        }
        .why-choose-bg > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
        
        .reveal-why {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-why.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}