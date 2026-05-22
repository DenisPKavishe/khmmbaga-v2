"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    // Add animation class when component mounts
    const elements = document.querySelectorAll('.animate-on-load');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animated');
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 py-20">
      <div className="max-w-2xl mx-auto text-center">
        {/* Logo */}
        <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 mb-8">
          <div className="flex justify-center mb-6">
            <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-primary/10 p-2 flex items-center justify-center">
              <Image 
                src="/images/logo.png" 
                alt="KH MMBAGA Logo" 
                width={96} 
                height={96}
                className="object-contain w-full h-full"
                priority
              />
            </div>
          </div>
          
          {/* Company Name */}
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            KH MMBAGA
          </h1>
          <p className="text-orange-500 text-sm tracking-wider font-semibold">
            CONSTRUCTION &amp; SUPPLIER
          </p>
        </div>

        {/* 404 Error Code */}
        <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-100 mb-6">
          <div className="relative inline-block">
            <div className="text-8xl md:text-9xl font-black text-gray-200 select-none">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-5xl md:text-6xl font-black text-orange-500">
                Oops!
              </div>
            </div>
          </div>
        </div>

        {/* Error Message */}
        <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-200 mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Page Not Found
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 text-lg mb-4">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <p className="text-gray-500">
            Don't worry, we're here to help you get back on track.
          </p>
        </div>

        {/* Company Description */}
        <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-300 mb-8 p-6 bg-orange-50 rounded-2xl">
          <p className="text-gray-700 text-sm leading-relaxed">
            <i className="fas fa-quote-left text-orange-400 mr-2"></i>
            KH MMBAGA is Tanzania's trusted partner for quality construction, 
            industrial painting, and premium material supply services. 
            With strategic hubs in Arusha and Moshi, we've been building 
            excellence since 2026.
            <i className="fas fa-quote-right text-orange-400 ml-2"></i>
          </p>
        </div>

        {/* Quick Links */}
        <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-400 mb-8">
          <p className="text-gray-500 text-sm mb-4">You might want to try:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full text-sm font-semibold transition-all duration-300 hover:scale-105"
            >
              <i className="fas fa-home"></i>
              Back to Home
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-semibold transition-all duration-300"
            >
              <i className="fas fa-info-circle"></i>
              About Us
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full text-sm font-semibold transition-all duration-300"
            >
              <i className="fas fa-envelope"></i>
              Contact Support
            </Link>
          </div>
        </div>

        {/* Contact Info */}
        <div className="animate-on-load opacity-0 translate-y-8 transition-all duration-700 delay-500 pt-6 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row justify-center gap-4 text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2">
              <i className="fas fa-phone-alt text-orange-500"></i>
              <span>+255 766 689 136</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i className="fas fa-envelope text-orange-500"></i>
              <span>khmmbagacompanyltd@gmail.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i className="fas fa-map-marker-alt text-orange-500"></i>
              <span>Arusha, Tanzania</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animate-on-load {
          opacity: 0;
          transform: translateY(30px);
        }
        .animate-on-load.animated {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
}