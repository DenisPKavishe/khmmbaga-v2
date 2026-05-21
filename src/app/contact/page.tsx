"use client";

import ContactHero from "../components/contacts/ContactHero";
import ContactMethods from "../components/contacts/ContactMethods";
import DirectorSection from "../components/contacts/DirectorSection";
import MembersList from "../components/contacts/MembersList";



export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <DirectorSection />
      <ContactMethods />
      <MembersList />
      
    </>
  );
}