"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const slides = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
    tagline: 'Construction and Supplier',
    title: 'Quality\nConstruction.',
    description: 'Decades of craftsmanship, innovation, and trust transforming bold visions into enduring structures that stand the test of time.',
    primaryBtn: { text: 'Our Services', link: '/services' },
    secondaryBtn: { text: 'Book', link: '/contact' },
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1590650153855-d9e808231d41?w=1600&q=80',
    tagline: 'Industrial Excellence',
    title: 'Built to\nLast.',
    description: 'From foundation to finish, our industrial division delivers precision engineering and quality materials on every project we undertake.',
    primaryBtn: { text: 'View Projects', link: '/gallery' },
    secondaryBtn: { text: 'Learn About Us', link: '/about' },
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80',
    tagline: 'Since 2026',
    title: 'Trusted\nPartners.',
    description: 'Building relationships as strong as our structures your vision is safe in the hands of KH MMBAGA\'s expert team.',
    primaryBtn: { text: 'Get In Touch', link: '/contact' },
    secondaryBtn: { text: 'Our Gallery', link: '/gallery' },
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout>();
  const progressIntervalRef = useRef<NodeJS.Timeout>();
  const SLIDE_DURATION = 5000;

  const resetTimer = useCallback(() => {
    if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
    if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    
    setProgress(0);
    
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = (elapsed / SLIDE_DURATION) * 100;
      if (newProgress >= 100) {
        clearInterval(progressIntervalRef.current);
      } else {
        setProgress(newProgress);
      }
    }, 16);
    
    slideTimerRef.current = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      resetTimer();
    }, SLIDE_DURATION);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (slideTimerRef.current) clearTimeout(slideTimerRef.current);
      if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
    };
  }, [resetTimer]);

  return (
    <>
      <section 
        id="home" 
        className="relative w-full h-[80vh] min-h-[500px] md:h-screen md:min-h-[680px] overflow-hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.tagline}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(90deg, rgba(26,26,26,0.78) 0%, rgba(0,0,0,0.35) 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 w-full">
                <p
                  className={`text-primary uppercase tracking-[4px] text-xs sm:text-sm font-semibold mb-3 sm:mb-4 transition-all duration-700 delay-300 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {slide.tagline}
                </p>
                <h1
                  className={`font-heading text-white text-4xl sm:text-5xl lg:text-7xl font-black leading-tight max-w-xl mb-4 sm:mb-6 whitespace-pre-line transition-all duration-700 delay-400 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  {slide.title}
                </h1>
                <p
                  className={`text-gray-300 text-base sm:text-lg max-w-lg leading-relaxed mb-6 sm:mb-8 transition-all duration-700 delay-500 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                >
                  {slide.description}
                </p>
                <div
                  className={`flex flex-wrap gap-3 sm:gap-4 transition-all duration-700 delay-600 ${
                    currentSlide === index
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-5'
                  }`}
                >
                  <Link
                    href={slide.primaryBtn.link}
                    className="btn-primary px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide inline-block"
                  >
                    {slide.primaryBtn.text}
                  </Link>
                  <Link
                    href={slide.secondaryBtn.link}
                    className="btn-outline px-6 sm:px-8 py-2.5 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wide inline-block"
                  >
                    {slide.secondaryBtn.text}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-6 sm:bottom-28 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-300 ${
                currentSlide === index
                  ? 'w-6 sm:w-8 h-2 sm:h-2.5 bg-primary rounded-full'
                  : 'w-2 h-2 sm:w-2.5 sm:h-2.5 bg-white/40 rounded-full hover:bg-white/60'
              }`}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div 
          className="absolute bottom-0 left-0 h-1 z-20 bg-primary transition-all duration-16"
          style={{ width: `${progress}%` }}
        />
      </section>
    </>
  );
}