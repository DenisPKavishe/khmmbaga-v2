"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const tools = [
  {
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=200&q=80',
    name: 'Heavy Duty Drill',
    description: 'Professional cordless drill with hammer function',
    price: 'TZS 85,000',
    delay: 100,
  },
  {
    image: 'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=200&q=80',
    name: 'Angle Grinder',
    description: '900W angle grinder for metal and stone cutting',
    price: 'TZS 65,000',
    delay: 200,
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80',
    name: 'Safety Helmet',
    description: 'EN397 certified hard hat for full site protection',
    price: 'TZS 18,000',
    delay: 300,
  },
  {
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&q=80',
    name: 'Laser Level Kit',
    description: '360° self-leveling laser for perfect alignment',
    price: 'TZS 120,000',
    delay: 400,
  },
];

export default function HardwareStore() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="store"
      className="section-bg py-28"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1600&q=80')",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p
            className={`text-primary uppercase tracking-[4px] text-xs font-bold mb-3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}
          >
            Hardware &amp; Tools
          </p>
          <h2
            className={`font-heading text-dark text-4xl lg:text-5xl font-black mb-4 orange-line-center transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Hardware Store
          </h2>
          <p
            className={`text-gray-500 max-w-xl mx-auto text-base leading-relaxed transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Professional-grade tools and construction materials available for purchase or hire
            sourced from trusted global brands.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`tool-card bg-gray-50 rounded-2xl p-6 border border-gray-100 text-center transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${tool.delay}ms` }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4 rounded-2xl overflow-hidden bg-white shadow-sm">
                <Image src={tool.image} alt={tool.name} fill className="object-cover" />
              </div>
              <h4 className="font-heading text-dark text-base font-bold mb-1">{tool.name}</h4>
              <p className="text-gray-500 text-xs mb-3">{tool.description}</p>
              <span className="text-primary font-bold text-sm">{tool.price}</span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/hardware" className="btn-primary px-8 py-3.5 rounded-full font-semibold text-sm inline-block">
            View Full Store →
          </Link>
        </div>
      </div>

      <style jsx>{`
        .tool-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .tool-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
}