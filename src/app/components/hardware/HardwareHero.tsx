"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function HardwareHero() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageHeight, setImageHeight] = useState(null);
  const [showCertificate, setShowCertificate] = useState(false);

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const reveals = document.querySelectorAll(".reveal-hero");

      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppContact = () => {
    window.open(
      "https://wa.me/255766689136?text=Hello%20KH%20MMBAGA%2C%20I%27m%20interested%20in%20your%20hardware%20tools%20and%20equipment.%20Please%20share%20more%20information.",
      "_blank"
    );
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-orange-50">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full z-10">
          <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-16 items-start">

            {/* Left Content */}
            <div className="flex-1 space-y-5 md:space-y-6">

              {/* Badge */}
              <div
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="inline-flex items-center gap-2 bg-orange-500/10 backdrop-blur-sm border border-orange-200 rounded-full px-3 py-1.5 md:px-4 md:py-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                  </span>

                  <span className="text-orange-600 text-xs md:text-sm font-semibold">
                    Authorized Hardware Supplier
                  </span>
                </div>
              </div>

              {/* Heading */}
              <div
                className={`transition-all duration-700 delay-100 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
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
              <div
                className={`transition-all duration-700 delay-200 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Your one-stop destination for premium construction tools,
                  equipment, and hardware supplies. Trusted by leading
                  construction companies across Arusha, Moshi, and all Tanzania.
                </p>
              </div>

              {/* Features Grid */}
              <div
                className={`grid grid-cols-2 gap-2 sm:gap-3 transition-all duration-700 delay-300 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-truck-fast text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                      Fast Delivery
                    </p>

                    <p className="text-gray-500 text-xs hidden sm:block">
                      Nationwide
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-shield-alt text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                      Genuine Quality
                    </p>

                    <p className="text-gray-500 text-xs hidden sm:block">
                      100% authentic
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-tag text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                      Best Prices
                    </p>

                    <p className="text-gray-500 text-xs hidden sm:block">
                      Competitive
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-3 bg-white/80 backdrop-blur-sm rounded-xl px-2 sm:px-3 py-2 shadow-sm border border-gray-100">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-headset text-orange-500 text-xs sm:text-sm md:text-lg"></i>
                  </div>

                  <div>
                    <p className="font-semibold text-gray-800 text-xs sm:text-sm">
                      24/7 Support
                    </p>

                    <p className="text-gray-500 text-xs hidden sm:block">
                      Expert help
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-wrap gap-3 sm:gap-4 pt-2 sm:pt-4 transition-all duration-700 delay-400 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >

                {/* WhatsApp Button */}
                <button
                  onClick={handleWhatsAppContact}
                  className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white border-2 border-orange-500 rounded-full text-orange-600 font-semibold text-sm sm:text-base hover:bg-orange-500 hover:text-white transition-all duration-300 flex items-center gap-2"
                >
                  <i className="fab fa-whatsapp"></i>
                  WhatsApp Inquiry
                </button>
              </div>
            </div>

            {/* Right Image - Now matches exact image height */}
            <div
              className={`flex-1 w-full transition-all duration-700 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative w-full">

                {/* Main Image - Auto height based on image */}
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                  {/* Remove fixed padding, use auto height */}
                  <div className="relative w-full">
                    <Image
                      src="/images/hardwarePoster.png"
                      alt="Hardware tools and equipment"
                      width={800}
                      height={900}
                      className="w-full h-auto rounded-2xl"
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      style={{ objectFit: 'contain' }}
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none rounded-2xl"></div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 md:p-6">
                    <div className="flex flex-row justify-between gap-2 sm:gap-3">

                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 md:-bottom-4 md:-right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full px-2 py-1 sm:px-3 sm:py-1.5 md:px-5 md:py-2.5 shadow-xl flex items-center gap-1 sm:gap-1 md:gap-2">
                  <i className="fas fa-rocket text-xs sm:text-sm"></i>

                  <span className="font-bold text-[10px] sm:text-xs md:text-sm">
                    +255 766 689 136
                  </span>
                </div>

              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes ping {
            75%,
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          .animate-ping {
            animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
          }
        `}</style>
      </section>
    </>
  );
}