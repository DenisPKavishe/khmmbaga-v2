"use client";

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

export default function ServicesBanner() {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <section className="relative py-20 overflow-hidden" style={{ background: '#264653' }}>
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')" }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2
            className={`font-heading text-white text-3xl lg:text-4xl font-black leading-snug mb-4 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}
          >
            Providing Personalized &amp; High Quality Construction and Supply Services
          </h2>
          <p
            className={`text-gray-300 text-base leading-relaxed mb-6 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            We manage your dream building from concept to completion with transparency,
            precision, and a team that genuinely cares about your outcome.
          </p>
          <Link
            href="/contact"
            className={`btn-primary inline-block px-7 py-3 rounded-full font-semibold text-sm transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Contact Us →
          </Link>
        </div>
        <div className="text-right">
          <p
            className={`text-primary uppercase tracking-[5px] text-xs font-bold mb-2 transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            What We Do
          </p>
          <h3
            className={`font-heading text-white text-5xl lg:text-7xl font-black opacity-20 leading-none transition-all duration-700 delay-200 ${
              inView ? 'opacity-20 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            Our<br />Services
          </h3>
        </div>
      </div>
    </section>
  );
}