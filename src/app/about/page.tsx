"use client";

import AboutCTA from "../components/about/AboutCTA";
import AboutHero from "../components/about/AboutHero";
import AboutSplitSection from "../components/about/AboutSplitSection";
import AboutStats from "../components/about/AboutStats";



export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutSplitSection />
      <AboutStats />
      <AboutCTA />
    </>
  );
}