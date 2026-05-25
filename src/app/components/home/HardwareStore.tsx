"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const tools = [
  {
    image: 'https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?q=80&w=1470&auto=format&fit=crop',
    name: 'Professional Hammer',
    description: 'Heavy-duty hammer with fiberglass handle, ideal for construction and demolition work.',
    price: 'TZS 20,000',
    category: 'Hand Tools',
    rating: 4.5,
    delay: 100,
  },
  {
    image: '/images/mabati.jpeg',
    name: 'Premium Roof Sheets',
    description: 'High-quality galvanized iron sheets, corrosion-resistant, available in various colors and sizes.',
    price: 'TZS 32,000',
    category: 'Roofing Materials',
    rating: 4.8,
    delay: 200,
  },
  {
    image: 'https://images.unsplash.com/photo-1703756291638-b1774ae3c186?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGFwZSUyMG1lYXN1cmV8ZW58MHx8MHx8fDA%3D',
    name: 'Tape Measure',
    description: 'Professional grade tape measure with metric and imperial units.',
    price: 'TZS 15,000',
    category: 'Safety Gear',
    rating: 4.7,
    delay: 300,
  },
  {
    image: 'https://images.unsplash.com/photo-1632129402289-8a3190ed7a9e?w=800&auto=format&fit=crop&q=60',
    name: 'Steel Reinforcement Bars',
    description: 'High-tensile steel bars for concrete reinforcement, meeting international standards.',
    price: 'TZS 52,000',
    category: 'Steel Materials',
    rating: 4.9,
    delay: 400,
  },
];

export default function HardwareStore() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={i} className="fas fa-star text-yellow-400 text-xs"></i>);
    }
    return stars;
  };

  return (
    <section
      id="store"
      className="section-bg py-28 bg-gradient-to-b from-gray-50 to-white"
      style={
        {
          '--bg-img':
            "url('https://images.unsplash.com/photo-1572981779307-38b8cabb2407?w=1600&q=80')",
        } as React.CSSProperties
      }
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header Section */}
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

        {/* Product Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {tools.map((tool, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${tool.delay}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                  {tool.category}
                </span>
              </div>
              
              {/* Wishlist Button */}
              <button className="absolute top-4 right-4 z-10 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-red-500 transition-all duration-300">
                <i className="far fa-heart"></i>
              </button>

              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={tool.image}
                  alt={tool.name}
                  fill
                  className={`object-cover transition-transform duration-700 ${
                    hoveredCard === index ? 'scale-110' : 'scale-100'
                  }`}
                />
              </div>

              {/* Product Info */}
              <div className="p-5">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-2">
                  {renderStars(tool.rating)}
                  <span className="text-gray-400 text-xs ml-1">({tool.rating})</span>
                </div>

                {/* Title */}
                <h4 className="font-heading text-dark text-lg font-bold mb-2 line-clamp-1">
                  {tool.name}
                </h4>

                {/* Description */}
                <p className="text-gray-500 text-sm mb-3 line-clamp-2 leading-relaxed">
                  {tool.description}
                </p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                  <div>
                    <span className="text-primary font-bold text-lg block">
                      {tool.price}
                    </span>
                  </div>
                </div>
              </div>

              
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Link 
            href="/hardware" 
            className="group btn-primary px-10 py-4 rounded-full font-semibold text-base inline-flex items-center gap-3 hover:gap-4 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View Full Hardware Store</span>
            <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
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
        
        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
}