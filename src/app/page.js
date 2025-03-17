"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AccessibilityWidget from "../components/AccessibilityWidget";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  // Simulated dynamic fetch of news snippets from "news-updates"
  // In a real app, you might fetch from an API, e.g.:
  // useEffect(() => {
  //   fetch("/api/news-snippets")
  //     .then((res) => res.json())
  //     .then((data) => setCarouselData(data));
  // }, []);
  const [carouselData, setCarouselData] = useState([
    {
      title: "Office Spot Checks",
      text: "Office staff will conduct spot checks to maintain quality. Thanks for your cooperation!",
    },
    {
      title: "Training Completion",
      text: "Congrats to everyone for completing training! E-MAR implementation is fully live.",
    },
    {
      title: "New Website Coming Soon",
      text: "We\'re launching a new website by March 2025. Stay tuned for more updates!",
    },
    {
      title: "Away Days",
      text: "We\'re introducing Away Days to help staff unwind, connect, and recharge outside work.",
    },
  ]);

  // Current snippet index
  const [carouselIndex, setCarouselIndex] = useState(0);

  // Rotate snippet automatically every 20 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % carouselData.length);
    }, 20000);

    return () => clearInterval(interval); // cleanup on unmount
  }, [carouselData.length]);

  // Manual "Prev" and "Next" handlers
  const handleNext = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselData.length);
  };
  const handlePrev = () => {
    setCarouselIndex((prev) =>
      prev === 0 ? carouselData.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow relative">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/homepage2.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(2px) brightness(0.9)",
            }}
          />
          <div className="relative z-10 pl-6 pr-4 text-left text-white max-w-xl">
            {/* Main Heading */}
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight text-white"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
            >
              Compassion in Action{" "}
              <span className="relative inline-block">
                Excellence
                <span className="absolute left-0 bottom-[0.15em] w-full h-[0.5em]">
                  <svg
                    viewBox="0 0 300 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <defs>
                      <linearGradient
                        id="gradientStroke"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#6818A5" />
                        <stop offset="100%" stopColor="#8B2FC9" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 10 C 50 0, 150 0, 200 10 C 250 20, 280 20, 300 10"
                      stroke="url(#gradientStroke)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>{" "}
              in Care. Since 2012
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="text-base md:text-lg mb-8 leading-normal"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
            >
              Every hour, Living Glory Social Care delivers compassionate,
              professional care to those who need it most. Through millions
              of moments of care each year, we transform thousands of lives
              every day in their own homes and communities across the UK.
            </motion.p>

            {/* CTA Button */}
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

        {/* NEW SECTION: Newsletter / News */}
        <Link href="/news-updates" className="block">
          <section className="relative bg-[#ffe6f2] py-12 px-4 md:px-8 lg:px-16 text-gray-800">
            <div className="max-w-6xl mx-auto rounded-md shadow-lg p-6 md:p-10 hover:shadow-2xl transition">
              {/* Title */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold text-[#6818A5] mb-2 text-center"
              >
                Living Glory Social Care Newsletter — Spring 2025 Edition
              </motion.h2>
              <p className="text-center mb-8 italic">
                Supporting Independence, Enriching Lives
              </p>

              {/* Directors Greeting */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-4">
                  Greetings from Our Directors
                </h3>
                <p>
                  Dear Team, As we step into a new season, we want to take a
                  moment to thank each and every one of you for your hard work,
                  dedication and impact in providing high-quality care. Your
                  efforts do not go unnoticed, and we truly appreciate the
                  positive impact you make in the lives of our clients every
                  day.
                </p>
              </div>

              {/* Directors Photos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Mary */}
                <div className="flex flex-col items-center">
                  <Image
                    src="/documents/team/mary.jpg"
                    alt="Dr Mary"
                    width={150}
                    height={150}
                    className="rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold">Dr Mary Alile-Idele</p>
                </div>
                {/* Pius */}
                <div className="flex flex-col items-center">
                  <Image
                    src="/documents/team/pius.jpg"
                    alt="Mr Pius"
                    width={150}
                    height={150}
                    className="rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold">Mr Pius Alile</p>
                </div>
                {/* Olivia */}
                <div className="flex flex-col items-center">
                  <Image
                    src="/documents/team/olivia.jpg"
                    alt="Olivia"
                    width={150}
                    height={150}
                    className="rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold">Olivia Lonngren</p>
                </div>
              </div>

              {/* Fun Fact (Animated & Playful) */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                className="bg-[#fff3c2] p-4 rounded-md border border-yellow-300 mb-6 text-center"
              >
                <h4 className="text-lg md:text-xl font-bold text-[#d67f0b] mb-2">
                  Fun Fact
                </h4>
                <p className="text-[#b36b00]">
                  Did you know that a single act of kindness can significantly boost
                  mental well-being? Whether it\'s a compliment, a smile, or a helping
                  hand, your support can make a big difference to our clients and your
                  colleagues!
                </p>
              </motion.div>

              {/* Closing Note */}
              <p>
                With exciting updates ahead, including training improvements,
                E-MAR implementation, and enhanced compliance measures, we remain
                committed to providing the highest standards of care. We look
                forward to another season of growth, and we thank you for being
                an essential part of Living Glory Social Care!
              </p>
            </div>
          </section>
        </Link>

        {/* CAROUSEL of Latest News */}
        <section className="py-8 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Latest Updates
            </h3>
            <div className="flex items-center space-x-4">
              {/* Prev Button */}
              <button
                onClick={() =>
                  setCarouselIndex((prev) =>
                    prev === 0 ? carouselData.length - 1 : prev - 1
                  )
                }
                className="bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700 transition"
              >
                Prev
              </button>
              {/* Carousel Content */}
              <motion.div
                key={carouselIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="flex-grow text-center bg-gray-100 rounded p-6 shadow"
              >
                <h4 className="text-xl font-semibold mb-2 text-gray-800">
                  {carouselData[carouselIndex].title}
                </h4>
                <p className="text-gray-700">
                  {carouselData[carouselIndex].text}
                </p>
              </motion.div>
              {/* Next Button */}
              <button
                onClick={() =>
                  setCarouselIndex((prev) => (prev + 1) % carouselData.length)
                }
                className="bg-purple-600 text-white py-1 px-3 rounded hover:bg-purple-700 transition"
              >
                Next
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
