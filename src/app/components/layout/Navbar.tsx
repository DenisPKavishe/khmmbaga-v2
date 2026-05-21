"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/hardware', label: 'Hardware' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-4 px-6 md:px-12 flex justify-between items-center ${
          scrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-transparent py-5'
        }`}
      >
        <Link 
          href="/" 
          className="flex items-center gap-3 group"
        >
          <div className="relative w-12 h-12 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
            <Image 
              src="/images/logo.png" 
              alt="KH MMBAGA Logo" 
              width={48} 
              height={48}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`font-bold text-xl tracking-wide transition-all duration-300 leading-tight ${
              scrolled ? 'text-gray-800' : 'text-white'
            } group-hover:tracking-wider`}>
              KH MMBAGA
            </span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.15em] font-medium transition-all duration-300 ${
              scrolled ? 'text-gray-500' : 'text-gray-300/90'
            }`}>
              CONSTRUCTION &amp; SUPPLIER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.href)}
              onMouseLeave={() => setHoveredLink(null)}
              className={`relative font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                pathname === link.href
                  ? 'text-primary bg-primary/10'
                  : scrolled 
                    ? 'text-gray-600 hover:text-primary hover:bg-primary/5' 
                    : 'text-white/90 hover:text-white hover:bg-white/10'
              } ${hoveredLink === link.href ? 'scale-105' : 'scale-100'}`}
            >
              <span>{link.label}</span>
              <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 ${
                pathname === link.href ? 'w-6' : hoveredLink === link.href ? 'w-4' : 'w-0'
              }`}></span>
            </Link>
          ))}
          
          <Link
            href="/contact"
            className="group relative ml-4 overflow-hidden rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></span>
            <button className="relative px-6 py-2.5 rounded-full text-white font-semibold text-sm flex items-center gap-2 z-10">
              <i className="fas fa-envelope group-hover:scale-110 transition-transform duration-300"></i>
              <span>Contact Us</span>
              <i className="fas fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button - Hamburger Icon */}
        <button 
          onClick={() => setMobileMenuOpen(true)}
          className="md:hidden relative z-20 p-2 rounded-full transition-all duration-300 hover:bg-white/10"
          aria-label="Open menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-gray-800' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-gray-800' : 'bg-white'
            }`}></span>
            <span className={`w-6 h-0.5 rounded-full transition-all duration-300 ${
              scrolled ? 'bg-gray-800' : 'bg-white'
            }`}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-gray-900 to-gray-800 z-[100] p-8 flex flex-col gap-6 transition-all duration-500 transform shadow-2xl ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <button 
          onClick={() => setMobileMenuOpen(false)}
          className="self-end text-white text-3xl w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/10 transition-all duration-300 hover:rotate-90"
          aria-label="Close menu"
        >
          <i className="fas fa-times"></i>
        </button>
        
        {/* Mobile Logo */}
        <div className="flex flex-col items-center justify-center gap-2 mb-4">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden bg-white/10 p-2 flex items-center justify-center">
            <Image 
              src="/images/logo.png" 
              alt="KH MMBAGA Logo" 
              width={80} 
              height={80}
              className="object-contain w-full h-full"
              priority
            />
          </div>
          <div className="text-center">
            <span className="font-bold text-2xl text-white block">KH MMBAGA</span>
            <span className="text-[10px] tracking-[0.15em] text-gray-400 block mt-1">
              CONSTRUCTION &amp; SUPPLIER
            </span>
          </div>
        </div>
        
        {/* Mobile Navigation Links */}
        <div className="flex flex-col gap-2 mt-2">
          {navLinks.map((link, index) => {
            const iconMap: Record<string, string> = {
              '/': 'fas fa-home',
              '/about': 'fas fa-info-circle',
              '/services': 'fas fa-cogs',
              '/gallery': 'fas fa-images',
              '/hardware': 'fas fa-tools',
            };
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  pathname === link.href
                    ? 'bg-primary/20 text-primary'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white hover:translate-x-2'
                }`}
                style={{
                  animation: `slideInLeft 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  transform: 'translateX(-20px)'
                }}
              >
                <i className={`${iconMap[link.href]} w-5 transition-all duration-300 group-hover:scale-110`}></i>
                <span className="font-medium text-base">{link.label}</span>
                {pathname === link.href && (
                  <i className="fas fa-check-circle text-primary ml-auto text-sm"></i>
                )}
              </Link>
            );
          })}
        </div>
        
        {/* Mobile Contact Button */}
        <Link
          href="/contact"
          onClick={() => setMobileMenuOpen(false)}
          className="group relative mt-4 overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 active:scale-95"
          style={{
            animation: 'fadeInScale 0.5s ease-out 0.4s forwards',
            opacity: 0,
            transform: 'scale(0.9)'
          }}
        >
          <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"></span>
          <span className="absolute -inset-full -top-1/2 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
          <button className="relative w-full px-6 py-4 rounded-xl text-white font-semibold text-base flex items-center justify-center gap-3 z-10">
            <i className="fas fa-envelope group-hover:scale-110 transition-transform duration-300"></i>
            <span>Contact Us</span>
            <i className="fas fa-arrow-right opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"></i>
          </button>
        </Link>

        {/* Mobile Contact Info */}
        <div className="mt-auto pt-6 border-t border-white/10 text-center">
          <p className="text-gray-400 text-xs flex items-center justify-center gap-2">
            <i className="fas fa-phone-alt text-primary text-xs"></i>
            <span>+255 766 689 136</span>
          </p>
          <p className="text-gray-400 text-xs flex items-center justify-center gap-2 mt-2">
            <i className="fas fa-envelope text-primary text-xs"></i>
            <span>info@khmmbaga.co.tz</span>
          </p>
        </div>
      </div>

      {/* Backdrop overlay */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/60 z-[99] backdrop-blur-sm animate-fade-in"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInScale {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </>
  );
}