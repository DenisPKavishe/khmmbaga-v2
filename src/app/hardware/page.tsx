"use client";

import HardwareHero from '../components/hardware/HardwareHero';
import ToolsGrid from '../components/hardware/ToolsGrid';
import DeliveryBanner from '../components/hardware/DeliveryBanner';

export default function HardwarePage() {
  return (
    <>
      <HardwareHero />
      <ToolsGrid />
      <DeliveryBanner />
    </>
  );
}