"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

export default function AboutSection() {
  const [ref, inView] = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section
      id="about"
      className="section-bg py-28 bg-white"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left text */}
        <div>
          <p
            className={`text-primary uppercase tracking-[4px] text-xs font-bold mb-3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}
          >
            Welcome to KH MMBAGA
          </p>
          <h2
            className={`font-heading text-dark text-4xl lg:text-5xl font-black leading-tight mb-6 orange-line transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Building Excellence<br />Since Day One.
          </h2>
          <p
            className={`text-gray-500 text-base leading-relaxed mb-5 transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            KH MMBAGA Construction and Supplier was founded on a singular belief that every
            structure tells a story. We have delivered transformative
            construction, renovation, and supply projects with an unwavering commitment to quality,
            safety, and client satisfaction.
          </p>
          <p
            className={`text-gray-500 text-base leading-relaxed mb-8 transition-all duration-700 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            From groundbreaking commercial developments to reliable material supply, our
            multidisciplinary team of engineers, architects, and craftspeople brings precision and
            passion to every square meter we build. We don't just erect buildings we create
            lasting legacies.
          </p>

          {/* Mini feature list */}
          <ul className="space-y-3 mb-8">
            {[
              'Certified construction management practices',
              'Full service from design and planning to handover',
              'Premium construction material supply chain',
            ].map((item, index) => (
              <li
                key={index}
                className={`flex items-center gap-3 text-gray-600 text-sm transition-all duration-700 ${
                  inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <span className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <i className="fas fa-check text-primary text-xs"></i>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            className={`transition-all duration-700 delay-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Link href="/ourservice">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i className="fas fa-play text-primary text-sm"></i>
                  </div>
                  <span className="absolute inset-0 rounded-full border-2 border-primary pulse-ring"></span>
                </div>
                <span className="text-sm text-gray-500 font-medium group-hover:text-primary transition-colors duration-300">
                  Learn More About Us
                </span>
              </div>
            </Link>
          </div>
        </div>

        {/* Right image collage */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}
        >
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 lg:h-[480px]">
            <Image
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80"
              alt="Construction workers"
              fill
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(to top, rgba(26,26,26,0.4) 0%, transparent 60%)',
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}