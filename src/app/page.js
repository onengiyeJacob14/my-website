"use client"
import Header from '../components/Header';
import Footer from '../components/Footer';
import AccessibilityWidget from '../components/AccessibilityWidget';
import { motion } from 'framer-motion';
import Link from 'next/link';


console.log('Header:', Header);
console.log('Footer:', Footer);
console.log('AccessibilityWidget:', AccessibilityWidget);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          {/* Blurred Background */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/homepage2.jpg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(2px) brightness(0.9)', 
            }}
          />
          {/* Text Container */}
          <div className="relative z-10 pl-6 pr-4 text-left text-white max-w-xl">
            {/* Main Heading with Purple Underline on 'Excellence' */}

            <motion.h1
  initial={{ y: -50, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ delay: 0.5, duration: 0.8 }}
  className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white"
  style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
>
  Compassion in Action{' '}
  <span className="relative inline-block">
    Excellence
    {/* SVG Gradient Underline */}
    <span className="absolute left-0 bottom-[0.15em] w-full h-[0.5em]">
      <svg
        viewBox="0 0 300 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Define a linear gradient for the stroke */}
        <defs>
          <linearGradient id="gradientStroke" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#6818A5" />
            <stop offset="100%" stopColor="#8B2FC9" />
          </linearGradient>
        </defs>
        {/* Wavy path across the entire width */}
        <path
          d="M 0 10 C 50 0, 150 0, 200 10 C 250 20, 280 20, 300 10"
          stroke="url(#gradientStroke)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  </span>{' '}
  in Care. Since 2012
</motion.h1>

            {/* Subheading Text */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base md:text-lg mb-8 leading-normal"
              style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}
            >
              Every hour, Living Glory Social Care delivers compassionate, 
              professional care to those who need it most. Through millions 
              of moments of care each year, we transform thousands of lives 
              every day in their own homes and communities across the UK.
            </motion.p>

            {/* CTA Button (unchanged) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <Link href="/contact">
              <button className="bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition">
                Get in Touch
              </button>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}