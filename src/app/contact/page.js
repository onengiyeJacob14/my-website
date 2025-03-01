"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import Image from "next/image";
import { motion } from "framer-motion";
import ContactDetailsSection from "../../components/ContactDetailsSection";


export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[50vh] w-full overflow-hidden">
          {/* Background Image (use the AI-generated image) */}
          <Image
            src="/contact-hero.jpg"  // Replace with your generated image name
            alt="Get in touch"
            fill
            className="object-cover"
          />

          {/* Centered Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white text-4xl md:text-5xl font-bold"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.6)" }}
            >
              Get in touch
            </motion.h1>
          </div>
        </section>

        {/* Below the hero, you can add the rest of your Contact form or details */}
        {/* Newly Added ContactDetailsSection */}
        <ContactDetailsSection />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
