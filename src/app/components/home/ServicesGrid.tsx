"use client";

import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: 'fas fa-drafting-compass',
    title: 'Architecture & Design',
    description:
      'Our architects blend functionality and aesthetics to create spaces that inspire from initial sketches to final blueprints.',
    link: '/contact',
  },
  {
    icon: 'fas fa-building',
    title: 'General Construction',
    description:
      'Full cycle construction management for residential, commercial, and mixed-use developments delivered on time and within budget.',
    link: '/contact',
  },
  {
    icon: 'fas fa-wrench',
    title: 'Renovation & Remodeling',
    description:
      'Breathing new life into existing structures from complete gut renovations to targeted upgrades that add real value.',
    link: '/contact',
  },
  {
    icon: 'fas fa-industry',
    title: 'Industrial Services',
    description:
      'Factories, warehouses, power plants our industrial division handles the most demanding construction challenges with ease.',
    link: '/contact',
  },
  {
    icon: 'fas fa-truck',
    title: 'Material Supply',
    description:
      'Premium construction materials, tools, safety equipment reliable supply chain for projects of any scale.',
    link: '/hardware',
  },
  {
    icon: 'fas fa-tools',
    title: 'Maintenance & Repair',
    description:
      'Preventive maintenance, rapid response repairs, and long term facility management keeping your assets performing at their best.',
    link: '/contact',
  },
];

export default function ServicesGrid() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section
      id="services"
      className="section-bg-alt py-28"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1600&q=80')",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className={`text-primary uppercase tracking-[4px] text-xs font-bold mb-3 transition-all duration-700 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            ref={ref}
          >
            What We Offer
          </p>
          <h2
            className={`font-heading text-dark text-4xl lg:text-5xl font-black mb-4 orange-line-center transition-all duration-700 delay-100 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Our Core Services
          </h2>
          <p
            className={`text-gray-500 max-w-xl mx-auto text-base leading-relaxed transition-all duration-700 delay-200 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            End to end construction and supply services crafted with precision, delivered with
            integrity.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card bg-white rounded-2xl p-8 shadow-sm border border-gray-100 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="service-icon w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <i className={`${service.icon} text-primary text-2xl`}></i>
              </div>
              <h3 className="font-heading text-dark text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
              <Link href={service.link} className="text-primary font-semibold text-sm hover:text-secondary transition-colors">
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .service-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
        }
        .service-icon {
          transition: transform 0.4s ease;
        }
        .service-card:hover .service-icon {
          transform: scale(1.15) rotate(-5deg);
        }
      `}</style>
    </section>
  );
}