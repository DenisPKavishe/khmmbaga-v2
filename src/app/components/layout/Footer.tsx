"use client";

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer style={{ background: '#1a1a1a' }} className="pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1: Brand with Logo */}
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white/10 p-1">
                <Image 
                  src="/images/logo.png" 
                  alt="KH MMBAGA Logo" 
                  width={48} 
                  height={48}
                  className="object-contain w-full h-full"
                />
              </div>
              <span className="font-heading font-bold text-2xl text-white">KH MMBAGA</span>
            </div>
            <p className="text-orange-400 text-[10px] tracking-[0.15em] font-medium mb-4">
              CONSTRUCTION &amp; SUPPLIER
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Building greatness since 2026. KH MMBAGA is Tanzania's trusted partner for construction, renovation, industrial services, and premium material supply.
            </p>
            <div className="flex gap-3">
              {/* <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fab fa-twitter"></i>
              </a> */}
              <a href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://wa.me/255766689136" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all text-sm">
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h5 className="font-heading text-white font-bold text-lg mb-5">Quick Links</h5>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-400 text-sm hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 text-sm hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="text-gray-400 text-sm hover:text-primary transition-colors">Gallery</Link></li>
              <li><Link href="/hardware" className="text-gray-400 text-sm hover:text-primary transition-colors">Hardware</Link></li>
              <li><Link href="/contact" className="text-gray-400 text-sm hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h5 className="font-heading text-white font-bold text-lg mb-5">Our Services</h5>
            <ul className="space-y-3">
              <li><Link href="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">Architecture & Design</Link></li>
              <li><Link href="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">General Construction</Link></li>
              <li><Link href="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">Renovation & Remodeling</Link></li>
              <li><Link href="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">Industrial Services</Link></li>
              <li><Link href="/services" className="text-gray-400 text-sm hover:text-primary transition-colors">Material Supply</Link></li>
              <li><Link href="/hardware" className="text-gray-400 text-sm hover:text-primary transition-colors">Hardware Store</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h5 className="font-heading text-white font-bold text-lg mb-5">Contact Info</h5>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fas fa-map-marker-alt text-primary mt-0.5 w-4 flex-shrink-0"></i>
                P.O.Box 999, Arusha, Tanzania
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fas fa-phone text-primary mt-0.5 w-4 flex-shrink-0"></i>
                +255 766 689 136
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fas fa-envelope text-primary mt-0.5 w-4 flex-shrink-0"></i>
                <a href="mailto:khmmbagacompanyltd@gmail.com">khmmbagacompanyltd@gmail.com</a>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <i className="fas fa-clock text-primary mt-0.5 w-4 flex-shrink-0"></i>
                Mon – Sat: 8:00 AM – 6:00 PM
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-xs">
          <p>© 2026 KH MMBAGA Construction and Supplier. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}