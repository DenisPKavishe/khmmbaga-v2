// "use client";

// import { useEffect } from 'react';
// import Image from 'next/image';

// export default function HardwareHero() {
//   useEffect(() => {
//     const handleScroll = () => {
//       const reveals = document.querySelectorAll('.reveal-hero');
//       reveals.forEach((reveal) => {
//         const windowHeight = window.innerHeight;
//         const revealTop = reveal.getBoundingClientRect().top;
//         const revealPoint = 150;
//         if (revealTop < windowHeight - revealPoint) {
//           reveal.classList.add('visible');
//         }
//       });
//     };
//     window.addEventListener('scroll', handleScroll);
//     handleScroll();
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const scrollToTools = () => {
//     const toolsSection = document.getElementById('tools-section');
//     if (toolsSection) {
//       toolsSection.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   const handleContactWarehouse = () => {
//     alert("📞 Contact our warehouse directly:\n📱 Phone: +255 756 000 123\n💬 WhatsApp: +255 784 567 890\n📍 Arusha Hardware Hub, Nyerere Road");
//   };

//   return (
//     <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-orange-50 to-white">
//       <div className="absolute inset-0 opacity-5">
//         <div className="absolute top-20 left-10 w-64 h-64 bg-orange-300 rounded-full blur-3xl"></div>
//         <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-200 rounded-full blur-3xl"></div>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 md:px-10 w-full">
//         <div className="flex flex-col lg:flex-row gap-12 items-center">
//           <div className="flex-1 space-y-6">
//             <div className="reveal-hero transition-all duration-700">
//               <span className="inline-block bg-orange-100 text-orange-600 text-sm font-bold px-4 py-2 rounded-full shadow-sm">
//                 <i className="fas fa-warehouse mr-2"></i> Authorized Hardware Supplier
//               </span>
//             </div>
//             <div className="reveal-hero transition-all duration-700" style={{ transitionDelay: '100ms' }}>
//               <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-800 leading-tight">
//                 Quality <span className="text-orange-500">Hardware Tools</span><br />
//                 Delivered <span className="text-orange-500">Safe & Fast</span>
//               </h1>
//             </div>
//             <div className="reveal-hero transition-all duration-700" style={{ transitionDelay: '200ms' }}>
//               <p className="text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed">
//                 Your trusted partner for premium construction tools, equipment, and hardware supplies in Arusha, Moshi, and across Tanzania. Reliable delivery, competitive prices, and genuine quality guaranteed.
//               </p>
//             </div>

//             <div className="flex flex-wrap gap-4 pt-2 reveal-hero transition-all duration-700" style={{ transitionDelay: '300ms' }}>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <i className="fas fa-truck-fast text-orange-500 text-xl"></i> <span>Safe Delivery</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <i className="fas fa-shield-alt text-orange-500 text-xl"></i> <span>Genuine Quality</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <i className="fas fa-tag text-orange-500 text-xl"></i> <span>Best Prices</span>
//               </div>
//               <div className="flex items-center gap-2 text-gray-700">
//                 <i className="fas fa-headset text-orange-500 text-xl"></i> <span>24/7 Support</span>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-5 pt-4 reveal-hero transition-all duration-700" style={{ transitionDelay: '400ms' }}>
//               <button
//                 onClick={scrollToTools}
//                 className="hero-btn bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-xl transition-all duration-300 flex items-center gap-3 group"
//               >
//                 <span>Explore Tools</span>
//                 <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
//               </button>
//               <button
//                 onClick={handleContactWarehouse}
//                 className="hero-btn-outline bg-white/80 backdrop-blur-sm border-2 border-orange-500 text-orange-600 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 flex items-center gap-3 hover:bg-orange-500 hover:text-orange-500"
//               >
//                 <span>Contact Warehouse</span>
//                 <i className="fas fa-phone-alt"></i>
//               </button>
//             </div>

//             <div className="flex items-center gap-2 pt-4 text-sm text-gray-500 reveal-hero transition-all duration-700" style={{ transitionDelay: '500ms' }}>
//               <i className="fas fa-check-circle text-green-500"></i>
//               <span>Trusted by 180+ construction companies in Tanzania</span>
//             </div>
//           </div>

//           <div className="flex-1 reveal-hero transition-all duration-700" style={{ transitionDelay: '300ms' }}>
//             <div className="relative -mt-10">
//               <div className="absolute -top-6 -left-6 w-40 h-40 bg-orange-200 rounded-full blur-3xl opacity-60"></div>
//               <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
//                 <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[500px]">
//                   <Image
//                     src="/images/kb.jpeg"
//                     alt="Hardware tools and equipment"
//                     fill
//                     className="object-fill"
//                     priority
//                   />
//                 </div>
//                 <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-md rounded-xl p-3 text-white text-sm flex justify-between items-center">
//                   <span><i className="fas fa-tools"></i> 500+ Tools Available</span>
//                   <span><i className="fas fa-truck"></i> Nationwide Delivery</span>
//                 </div>
//               </div>
//               <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white rounded-full px-4 py-2 shadow-xl flex items-center gap-2 animate-pulse-slow">
//                 <i className="fas fa-rocket"></i>
//                 <span className="font-bold text-sm">Express Delivery</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .hero-btn {
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s ease;
//           z-index: 1;
//         }
//         .hero-btn::before {
//           content: '';
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           width: 0;
//           height: 0;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.3);
//           transform: translate(-50%, -50%);
//           transition: width 0.5s ease, height 0.5s ease;
//           z-index: -1;
//         }
//         .hero-btn:hover::before {
//           width: 300px;
//           height: 300px;
//         }
//         .hero-btn i {
//           transition: transform 0.3s ease;
//         }
//         .hero-btn:hover i {
//           transform: translateX(6px) scale(1.1);
//         }
        
//         .hero-btn-outline {
//           position: relative;
//           overflow: hidden;
//           transition: all 0.3s ease;
//         }
//         .hero-btn-outline:hover {
//           background: rgba(255,255,255,0.2);
//           transform: translateY(-3px);
//         }
//         .hero-btn-outline i {
//           transition: transform 0.3s ease;
//         }
//         .hero-btn-outline:hover i {
//           transform: translateX(4px);
//         }
        
//         .animate-pulse-slow {
//           animation: pulse-slow 2s ease-in-out infinite;
//         }
        
//         @keyframes pulse-slow {
//           0%, 100% { opacity: 1; }
//           50% { opacity: 0.7; }
//         }
        
//         .reveal-hero {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.7s ease, transform 0.7s ease;
//         }
//         .reveal-hero.visible {
//           opacity: 1;
//           transform: translateY(0);
//         }
//       `}</style>
//     </section>
//   );
// }


"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HardwareHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
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

  const scrollToTools = () => {
    const toolsSection = document.getElementById('tools-section');
    if (toolsSection) {
      toolsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/255766689136?text=Hello%20KH%20MMBAGA%2C%20I%27m%20interested%20in%20your%20hardware%20tools%20and%20equipment.%20Please%20share%20more%20information.', '_blank');
  };

  return (
    <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-center">
          
          {/* Left Content - Shows first on mobile, left on desktop */}
          <div className="flex-1 space-y-5 md:space-y-6">
            {/* Badge */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-200 rounded-full px-3 py-1.5 md:px-4 md:py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span className="text-orange-600 text-xs md:text-sm font-semibold">Authorized Hardware Supplier</span>
              </div>
            </div>

            {/* Heading */}
            <div className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-tight">
                Premium
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700 mt-1 md:mt-2">
                  Hardware Tools
                </span>
                <span className="text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl block mt-1 md:mt-2">
                  Delivered with Excellence
                </span>
              </h1>
            </div>

            {/* Description */}
            <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                Your one-stop destination for premium construction tools, equipment, and hardware supplies. 
                Trusted by leading construction companies across Arusha, Moshi, and all Tanzania.
              </p>
            </div>

            {/* Features Grid */}
            <div className={`grid grid-cols-2 gap-2 sm:gap-3 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-truck-fast text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm">Fast Delivery</p>
                  <p className="text-gray-500 text-xs hidden sm:block">Nationwide</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-shield-alt text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm">Genuine Quality</p>
                  <p className="text-gray-500 text-xs hidden sm:block">100% authentic</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-tag text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm">Best Prices</p>
                  <p className="text-gray-500 text-xs hidden sm:block">Competitive</p>
                </div>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-headset text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-xs sm:text-sm">24/7 Support</p>
                  <p className="text-gray-500 text-xs hidden sm:block">Expert help</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className={`flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <button
                onClick={scrollToTools}
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full text-white font-semibold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Browse Collection
                <i className="fas fa-arrow-right text-xs sm:text-sm"></i>
              </button>
              <button
                onClick={handleWhatsAppContact}
                className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-orange-500 rounded-full text-orange-600 font-semibold text-sm sm:text-base hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                WhatsApp Inquiry
              </button>
            </div>
          </div>  

          {/* Right Image - Shows below content on mobile, right on desktop */}
          <div className={`flex-1 w-full transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-full">
              {/* Main Image Container */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                {/* Fixed aspect ratio for consistent sizing */}
                <div className="relative w-full pt-[75%] sm:pt-[75%] md:pt-[90%] lg:pt-[100%]">
                  <Image
                    src="/images/kb.jpeg"
                    alt="Hardware tools and equipment"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none"></div>
                
                {/* Bottom Stats Buttons - Same on both mobile and desktop */}
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                  <div className="flex flex-row justify-between gap-2 sm:gap-3">
                    <div className="flex-1 bg-black/70 backdrop-blur-md rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3">
                      <p className="text-white text-xs sm:text-sm font-semibold text-center">
                        <i className="fas fa-tools mr-1 sm:mr-2 text-xs sm:text-sm"></i>
                        500+ Tools Available
                      </p>
                    </div>
                    <div className="flex-1 bg-black/70 backdrop-blur-md rounded-xl px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3">
                      <p className="text-white text-xs sm:text-sm font-semibold text-center">
                        <i className="fas fa-truck mr-1 sm:mr-2 text-xs sm:text-sm"></i>
                        Nationwide Delivery
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Responsive */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5 shadow-xl flex items-center gap-1 sm:gap-1 md:gap-2">
                <i className="fas fa-rocket text-xs sm:text-sm"></i>
                <span className="font-bold text-[10px] sm:text-xs md:text-sm">Express Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
        
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </section>
  );
}