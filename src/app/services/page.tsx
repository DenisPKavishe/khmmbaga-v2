"use client";

import ServicesHero from '../components/services/ServicesHero';
import ServicesGrid from '../components/services/ServicesGrid';
import ServicesStats from '../components/services/ServicesStats';
import WhyChooseUs from '../components/services/WhyChooseUs';

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesStats />
      <WhyChooseUs />
    </>
  );
}