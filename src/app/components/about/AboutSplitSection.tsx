"use client";

import { useEffect } from 'react';
import Image from 'next/image';

export default function AboutSplitSection() {
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-split');
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
    <section className="split-bg-about w-full py-20 md:py-28 relative overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="reveal-split transition-all duration-700">
            <span className="text-orange-500 font-semibold tracking-wide uppercase text-sm bg-white/80 px-3 py-1 rounded-full">
              <i className="fas fa-tools mr-1"></i> Who We Are
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3 mb-5">
              Your Trusted <span className="text-orange-500">Construction & Supply Partner</span>
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-600 text-lg leading-relaxed bg-white/70 backdrop-blur-sm p-4 rounded-2xl inline-block">
              Established in the heart of Tanzania, KH MMBAGA brings unparalleled experience in construction, industrial projects, and premium material supply.
              With strategic hubs in <strong className="text-gray-800">Arusha</strong> and <strong className="text-gray-800">Moshi</strong>, we've partnered with major manufacturing giants, and commercial developers.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div className="reveal-split transition-all duration-700 delay-100">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm p-1 h-80">
                <Image
                  src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80"
                  alt="Construction team Tanzania"
                  fill
                  className="object-cover rounded-xl transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="reveal-split transition-all duration-700 delay-200">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl border-l-8 border-orange-500 shadow-md">
                <i className="fas fa-quote-left text-orange-300 text-2xl mr-2"></i>
                <p className="text-gray-700 italic text-lg">
                  "From structural framing to anti-corrosive painting for your dream project, we deliver world-class standards with local reliability. Our supply chain ensures premium materials from trusted global brands always available on site."
                </p>
                <p className="font-bold text-gray-800 mt-3">— Kaniki Athumani, Managing Director</p>
              </div>
            </div>
            
            <div className="reveal-split transition-all duration-700 delay-300">
              <p className="text-gray-700 leading-relaxed bg-white/80 backdrop-blur-sm p-4 rounded-xl">
                We don't just build; we create lasting infrastructure. Our team of engineers, certified specialists, and supply experts have executed complex industrial projects, including <strong className="text-orange-600">factory flooring, heavy-duty coating systems, and commercial complexes</strong>. Whether you need structural steel, construction materials, or turnkey project management we're your single-point solution.
              </p>
            </div>
          </div>

          <div className="bg-white shadow-xl rounded-2xl p-6 md:p-8 border border-gray-100 reveal-split transition-all duration-700 delay-400">
            <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <i className="fas fa-beer text-orange-500"></i> Trusted by Logistic & Top Enterprises
            </h3>
            <div className="h-1 w-20 bg-orange-500 my-3 rounded"></div>
            <p className="text-gray-600 mb-6">
              Partnering with leading names in Arusha, Moshi, and the wider Kilimanjaro region we've delivered construction and supply excellence across the beverage, logistics, and manufacturing sectors.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <i className="fas fa-factory text-orange-500 text-2xl"></i>
                <span className="font-semibold text-gray-700">Kilimanjaro Breweries Ltd</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <i className="fas fa-wine-bottle text-orange-500 text-2xl"></i>
                <span className="font-semibold text-gray-700">Tanzania Distilleries</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <i className="fas fa-hard-hat text-orange-500 text-2xl"></i>
                <span className="font-semibold text-gray-700">Serengeti Breweries</span>
              </div>
              <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
                <i className="fas fa-building text-orange-500 text-2xl"></i>
                <span className="font-semibold text-gray-700">Moshi Cooperative Union</span>
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6 mt-2">
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                  <p className="text-gray-800 font-bold text-lg">
                    <i className="fas fa-paint-brush text-orange-500 mr-1"></i> Specialized Services
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li><i className="fas fa-check-circle text-green-500 text-xs mr-2"></i> Structural construction</li>
                    <li><i className="fas fa-check-circle text-green-500 text-xs mr-2"></i> Industrial painting & coating</li>
                    <li><i className="fas fa-check-circle text-green-500 text-xs mr-2"></i> Complete project management</li>
                  </ul>
                </div>
                <div>
                  <p className="text-gray-800 font-bold text-lg">
                    <i className="fas fa-truck-moving text-orange-500 mr-1"></i> Supply Chain Power
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1 mt-2">
                    <li><i className="fas fa-check-circle text-green-500 text-xs mr-2"></i> Cement, steel, aggregates</li>
                    <li><i className="fas fa-check-circle text-green-500 text-xs mr-2"></i> Premium paints & sealants</li>
                    <li><i className="fas fa-check-circle text-green-500 text-xs mr-2"></i> Safety & scaffolding equipment</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recognition Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-6 items-center border-y py-10 border-gray-200 reveal-split transition-all duration-700 delay-500">
          <div className="text-center bg-white px-5 py-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <i className="fas fa-medal text-orange-400 text-2xl"></i>
            <p className="text-xs font-semibold text-gray-600 mt-2">Certified Processes</p>
          </div>
          <div className="text-center bg-white px-5 py-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <i className="fas fa-hand-sparkles text-orange-400 text-2xl"></i>
            <p className="text-xs font-semibold text-gray-600 mt-2">Premium Quality Supplies</p>
          </div>
          <div className="text-center bg-white px-5 py-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <i className="fas fa-chart-line text-orange-400 text-2xl"></i>
            <p className="text-xs font-semibold text-gray-600 mt-2">On-Time Deliveries</p>
          </div>
          <div className="text-center bg-white px-5 py-5 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <i className="fas fa-people-arrows text-orange-400 text-2xl"></i>
            <p className="text-xs font-semibold text-gray-600 mt-2">Local Expert Teams</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .split-bg-about {
          position: relative;
          background: white;
        }
        .split-bg-about::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          opacity: 0.4;
          z-index: 0;
        }
        .split-bg-about::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.6);
          z-index: 1;
        }
        @media (max-width: 1024px) {
          .split-bg-about::before {
            opacity: 0.15;
          }
        }
        .split-bg-about > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .reveal-split {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-split.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
      `}</style>
    </section>
  );
}