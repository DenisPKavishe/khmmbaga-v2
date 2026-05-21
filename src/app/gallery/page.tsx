"use client";

import GalleryHero from '../components/gallery/GalleryHero';
import GalleryGrid from '../components/gallery/GalleryGrid';
import GalleryStats from '../components/gallery/GalleryStats';

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryGrid />
      <GalleryStats />
    </>
  );
}