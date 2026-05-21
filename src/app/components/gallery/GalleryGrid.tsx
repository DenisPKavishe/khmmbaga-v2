"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const galleryItems = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1563166423-a78566af3dbe?q=80&w=1170&auto=format&fit=crop',
    title: 'Kilimanjaro Brewery Expansion',
    description: 'Complete structural reinforcement and industrial painting for Kilimanjaro Breweries. Increased production capacity by 40%.',
    date: 'Mar 2024',
    tags: ['Construction', 'Painting'],
    tagColors: ['bg-orange-100 text-orange-600', 'bg-blue-100 text-blue-600'],
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1532562145520-b8cce2486cd2?q=80&w=1074&auto=format&fit=crop',
    title: 'Moshi Logistics Hub Coatings',
    description: 'High-durability epoxy floor coating and fireproofing for 15,000 sqm logistics hub in Moshi.',
    date: 'Jan 2024',
    tags: ['Fireproofing', 'Epoxy Floors'],
    tagColors: ['bg-green-100 text-green-600', 'bg-purple-100 text-purple-600'],
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1614127938540-a1139bee1841?q=80&w=1332&auto=format&fit=crop',
    title: 'Serengeti Breweries Coating',
    description: 'Anti-corrosive industrial painting for processing units and storage tanks, extending equipment lifecycle by 8+ years.',
    date: 'Sep 2023',
    tags: ['Anti-Corrosive', 'Processing'],
    tagColors: ['bg-amber-100 text-amber-600', 'bg-indigo-100 text-indigo-600'],
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    title: 'Arusha Central Business Hub',
    description: 'Full construction, modern facade painting, and supply chain management for 25,000 sqm mixed-use development.',
    date: 'Jun 2024',
    tags: ['Commercial', 'Premium Finish'],
    tagColors: ['bg-cyan-100 text-cyan-600', 'bg-pink-100 text-pink-600'],
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    title: 'Tanzania Distilleries Upgrade',
    description: 'High-temperature resistant coatings and structural refurbishment for distillation columns.',
    date: 'Feb 2024',
    tags: ['Heat Resistant', 'Safety Upgrade'],
    tagColors: ['bg-red-100 text-red-600', 'bg-emerald-100 text-emerald-600'],
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=800&q=80',
    title: 'Moshi Green Valley Estate',
    description: 'Eco-friendly construction and premium supply for 50+ luxury villas with complete supply chain.',
    date: 'Apr 2024',
    tags: ['Eco-Friendly', 'Supply Chain'],
    tagColors: ['bg-lime-100 text-lime-600', 'bg-sky-100 text-sky-600'],
  },
  {
    id: 7,
    image: 'https://plus.unsplash.com/premium_photo-1682724602925-f0264b85953f?q=80&w=1171&auto=format&fit=crop',
    title: 'Hardware Warehouse - Arusha',
    description: 'Our 5,000 sqm hardware warehouse stocked with premium construction tools and equipment.',
    date: 'Ongoing',
    tags: ['Tools Supply', 'Fast Delivery'],
    tagColors: ['bg-stone-100 text-stone-600', 'bg-amber-100 text-amber-600'],
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1712711649566-16c7cfcf341c?q=80&w=1074&auto=format&fit=crop',
    title: 'Industrial Painting - Arusha',
    description: 'Heavy-duty industrial coating application for manufacturing facility in Arusha.',
    date: 'Aug 2024',
    tags: ['Industrial Grade', 'Quality Assured'],
    tagColors: ['bg-blue-100 text-blue-600', 'bg-orange-100 text-orange-600'],
  },
  {
    id: 9,
    image: 'https://plus.unsplash.com/premium_photo-1682617326998-776d7443f02c?q=80&w=1333&auto=format&fit=crop',
    title: 'Scaffolding & Safety Equipment',
    description: 'Complete scaffolding setup and safety equipment supply for high-rise construction.',
    date: 'Ongoing',
    tags: ['Safety Gear', 'Scaffolding'],
    tagColors: ['bg-gray-100 text-gray-600', 'bg-purple-100 text-purple-600'],
  },
];

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryItems[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal-item');
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

  const openLightbox = (item: typeof galleryItems[0]) => {
    setSelectedImage(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isModalOpen) {
        closeLightbox();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  return (
    <>
      <section className="gallery-split-bg w-full py-20 md:py-28 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="reveal-item transition-all duration-700">
              <span className="text-orange-500 font-bold tracking-widest uppercase text-xs border-b-2 border-orange-500 inline-block pb-1">
                <i className="fas fa-camera mr-1"></i> Recent Work
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mt-4 mb-5">
                Our <span className="text-orange-500">Construction & Supply</span> Portfolio
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 text-lg">Every image tells a story of quality, dedication, and Tanzanian craftsmanship.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="gallery-card bg-white rounded-xl overflow-hidden shadow-md cursor-pointer reveal-item transition-all duration-700"
                style={{ transitionDelay: `${(index % 9) * 100 + 100}ms` }}
                onClick={() => openLightbox(item)}
              >
                <div className="gallery-img-wrapper relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="gallery-img object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-sm font-semibold">
                      <i className="fas fa-expand-alt mr-1"></i> Click to view
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-lg">{item.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {item.tags[0]} & {item.tags[1]} • {item.date}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`text-xs ${item.tagColors[tagIndex]} px-2 py-1 rounded-full`}
                      >
                        <i className={`fas ${tagIndex === 0 ? 'fa-hard-hat' : tag === 'Epoxy Floors' ? 'fa-layer-group' : tag === 'Fireproofing' ? 'fa-fire-extinguisher' : tag === 'Anti-Corrosive' ? 'fa-tint' : tag === 'Processing' ? 'fa-industry' : tag === 'Commercial' ? 'fa-building' : tag === 'Premium Finish' ? 'fa-brush' : tag === 'Heat Resistant' ? 'fa-thermometer-high' : tag === 'Safety Upgrade' ? 'fa-shield-alt' : tag === 'Eco-Friendly' ? 'fa-leaf' : tag === 'Supply Chain' ? 'fa-truck' : tag === 'Tools Supply' ? 'fa-tools' : tag === 'Fast Delivery' ? 'fa-truck-fast' : tag === 'Industrial Grade' ? 'fa-paint-roller' : tag === 'Quality Assured' ? 'fa-check-circle' : tag === 'Safety Gear' ? 'fa-hard-hat' : 'fa-chart-line'} mr-1`}></i>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="reveal-item transition-all duration-700" style={{ transitionDelay: '700ms' }}>
              <Link
                href="/contact"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center gap-2"
              >
                <i className="fas fa-phone-alt"></i> Contact Us
                <i className="fas fa-arrow-right"></i>
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                Contact us to see more project case studies and detailed references
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg transition-all duration-300"
          onClick={closeLightbox}
        >
          <div className="relative max-w-6xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeLightbox}
              className="absolute -top-12 right-0 text-white hover:text-orange-500 transition-colors duration-300 text-4xl"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="relative w-full h-[70vh]">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-contain rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-white text-xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm">{selectedImage.description}</p>
              <div className="flex gap-2 mt-3">
                {selectedImage.tags.map((tag, idx) => (
                  <span key={idx} className={`text-xs ${selectedImage.tagColors[idx]} px-2 py-1 rounded-full`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={closeLightbox}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md hover:bg-orange-500 text-white px-6 py-2 rounded-full transition-all duration-300 text-sm"
            >
              Close <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .gallery-split-bg {
          position: relative;
          background: white;
        }
        .gallery-split-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: url('https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80');
          background-size: cover;
          background-position: center;
          z-index: 0;
          opacity: 0.1;
        }
        .gallery-split-bg > :not(style) {
          position: relative;
          z-index: 2;
        }
        
        .gallery-card {
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.4, 1.1);
          transform-origin: center;
        }
        .gallery-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 25px 35px -12px rgba(0, 0, 0, 0.25);
        }
        
        .gallery-img-wrapper {
          overflow: hidden;
        }
        .gallery-img {
          transition: transform 0.5s ease;
        }
        .gallery-card:hover .gallery-img {
          transform: scale(1.08);
        }
        
        .reveal-item {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.7s ease, transform 0.7s ease;
        }
        .reveal-item.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </>
  );
}