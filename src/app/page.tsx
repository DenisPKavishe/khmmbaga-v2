"use client";

import AboutSection from "./components/home/AboutSection";
import ContactSection from "./components/home/ContactSection";
import GallerySection from "./components/home/GallerySection";
import HardwareStore from "./components/home/HardwareStore";
import HeroCarousel from "./components/home/HeroCarousel";
import ProjectsSection from "./components/home/ProjectsSection";
import ServicesBanner from "./components/home/ServicesBanner";
import ServicesGrid from "./components/home/ServicesGrid";
import StatsBar from "./components/home/StatsBar";
import Testimonials from "./components/home/Testimonials";



export default function Home() {
  return (
    <>
      <HeroCarousel />
      <StatsBar />
      <AboutSection />
      <ServicesBanner />
      <ServicesGrid />
      <ProjectsSection />
      <GallerySection />
      <HardwareStore />
      <Testimonials />
      <ContactSection />
    </>
  );
}