"use client";

import Link from 'next/link';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const galleryImages = [
  {
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
    alt: 'Construction site',
    span: 'lg:row-span-2',
    size: 'large',
    delay: 100,
  },
  {
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=800&q=80',
    alt: 'Industrial site',
    span: '',
    size: 'medium',
    delay: 200,
  },
  {
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80',
    alt: 'Warehouse',
    span: '',
    size: 'medium',
    delay: 300,
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    alt: 'Luxury villa',
    span: '',
    size: 'medium',
    delay: 200,
  },
  {
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    alt: 'Condominium',
    span: '',
    size: 'medium',
    delay: 300,
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
    alt: 'Office tower',
    span: 'lg:col-span-2',
    size: 'wide',
    delay: 100,
  },
  {
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80',
    alt: 'Construction team',
    span: '',
    size: 'medium',
    delay: 200,
  },
];

export default function GallerySection() {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentMobileSlide, setCurrentMobileSlide] = useState(0);

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextSlide = () => {
    setCurrentMobileSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentMobileSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        id="gallery"
        className="section-bg-alt py-16 md:py-20 lg:py-32"
        style={
          {
            '--bg-img':
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1600&q=80')",
          } as React.CSSProperties
        }
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Header Section */}
          <div className="text-center mb-10 md:mb-12 lg:mb-20">
            <p
              className={`text-primary uppercase tracking-[4px] text-xs md:text-sm font-bold mb-3 transition-all duration-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              ref={ref}
            >
              Visual Showcase
            </p>
            <h2
              className={`font-heading text-dark text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black mb-4 orange-line-center transition-all duration-700 delay-100 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Our Gallery
            </h2>
            <p
              className={`text-gray-500 max-w-2xl mx-auto text-sm md:text-base lg:text-lg leading-relaxed px-4 transition-all duration-700 delay-200 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              A curated window into our work every image a testament to craftsmanship and
              commitment.
            </p>
          </div>

          {/* MOBILE: Carousel / Slider View */}
          <div className="block md:hidden">
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <div 
                className="relative cursor-pointer h-80"
                onClick={() => openModal(galleryImages[currentMobileSlide].image)}
              >
                <Image
                  src={galleryImages[currentMobileSlide].image}
                  alt={galleryImages[currentMobileSlide].alt}
                  fill
                  className="object-cover"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full">
                  <i className="fas fa-camera mr-1"></i> {currentMobileSlide + 1} / {galleryImages.length}
                </div>
                
                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white w-10 h-10 rounded-full flex items-center justify-center">
                  <i className="fas fa-search-plus text-lg"></i>
                </div>
              </div>
              
              <button
                onClick={prevSlide}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <i className="fas fa-chevron-left"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <i className="fas fa-chevron-right"></i>
              </button>
              
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMobileSlide(index)}
                    className={`transition-all duration-300 ${
                      currentMobileSlide === index
                        ? 'w-6 h-2 bg-primary rounded-full'
                        : 'w-2 h-2 bg-white/50 rounded-full hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <div className="text-center mt-4">
              <p className="text-gray-600 text-sm">
                {galleryImages[currentMobileSlide].alt}
              </p>
            </div>
          </div>

          {/* DESKTOP: Masonry-Style Gallery Grid */}
          <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] md:auto-rows-[280px] lg:auto-rows-[320px] gap-4 md:gap-5 lg:gap-6">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openModal(img.image)}
                className={`group relative gallery-item rounded-xl lg:rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: `${img.delay}ms`,
                  gridRow: img.span === 'lg:row-span-2' ? 'span 2' : 'span 1',
                  gridColumn: img.span === 'lg:col-span-2' ? 'span 2' : 'span 1',
                }}
              >
                <Image
                  src={img.image}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-4 md:p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <i className="fas fa-search-plus text-white text-2xl md:text-3xl mb-2 block"></i>
                    <p className="text-white text-sm md:text-base font-medium">Click to enlarge</p>
                  </div>
                </div>
                
                <div className="absolute top-3 right-3 md:top-4 md:right-4 bg-primary/90 backdrop-blur-sm text-white text-xs px-2 py-1 md:px-3 md:py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 group-hover:translate-x-0">
                  <i className="fas fa-camera mr-1"></i> View
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 md:mt-12 lg:mt-16">
            <Link 
              href="/gallery" 
              className="group btn-primary px-6 md:px-8 lg:px-10 py-2.5 md:py-3 lg:py-4 rounded-full font-semibold text-sm md:text-base inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
            >
              <span>View Full Gallery</span>
              <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-lg transition-all duration-300"
          onClick={closeModal}
        >
          <div className="relative max-w-7xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors duration-300 text-3xl"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="relative w-full h-[85vh]">
              <Image
                src={selectedImage || ''}
                alt="Gallery full view"
                fill
                className="object-contain rounded-2xl shadow-2xl"
              />
            </div>
            <button
              onClick={closeModal}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/20 backdrop-blur-md hover:bg-primary text-white px-6 py-2 rounded-full transition-all duration-300 text-sm"
            >
              Close <i className="fas fa-arrow-right ml-2"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}