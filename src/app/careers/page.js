"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaHeart, FaHandsHelping, FaLightbulb } from "react-icons/fa";

export default function CareersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* SECTION 1: HERO */}
        <section className="relative w-full max-w-5xl mx-auto h-[60vh] bg-pink-200 overflow-hidden rounded-2xl mt-8">
          {/* Background Image in front of Pink */}
          <div className="absolute inset-0">
            <Image
              src="/hero_plain_careers.webp"
              alt="Hero Background"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Hero Content on top */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold text-[#6818A5] mb-4"
            >
              Join Living Glory
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold text-[#6818A5] mb-6"
            >
              Your first or forever care job
            </motion.p>

            {/* Search Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full max-w-md flex items-center bg-white rounded shadow px-4 py-2"
            >
              <input
                type="text"
                placeholder="Find a job by title, town or postcode"
                className="flex-grow focus:outline-none text-gray-700"
              />
              {/* Wrap the 'Search' button in a Link to /contact */}
              <Link href="/contact">
                <button className="text-white font-semibold bg-[#6818A5] hover:bg-[#8B2FC9] transition px-4 py-2 rounded ml-2">
                  <span role="img" aria-label="Search">
                    🔍
                  </span>
                </button>
              </Link>
            </motion.div>

            {/* "Find a job near me" button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-4"
            >
              <Link href="/contact">
                <button className="bg-[#6818A5] hover:bg-[#8B2FC9] transition text-white font-semibold py-2 px-6 rounded">
                  FIND A JOB NEAR ME
                </button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: WHY WORK HERE */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 text-[#6818A5]"
          >
            Why Work at Living Glory?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto text-gray-700 mb-12"
          >
            We truly value you and the work you do! Our Care teams are at the core
            of Living Glory&apos;s vision of empowering people to live longer,
            healthier lives in their own homes, and you are our greatest asset.
          </motion.p>

          {/* 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center p-4"
            >
              <FaHandsHelping size={50} className="text-[#6818A5] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                Care at Living Glory is a career, not just a job
              </h3>
              <p className="text-gray-700">
                We want our carers to see their profession as one with meaning,
                where their skills and compassion truly make a difference.
              </p>
            </motion.div>

            {/* Column 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex flex-col items-center p-4"
            >
              <FaHeart size={50} className="text-[#6818A5] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                We support you and your wellbeing
              </h3>
              <p className="text-gray-700">
                We take the burden of daily challenges through training, flexible
                hours, and a great work/life balance so you can focus on what you
                do best—caring for others.
              </p>
            </motion.div>

            {/* Column 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center p-4"
            >
              <FaLightbulb size={50} className="text-[#6818A5] mb-4" />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                We make it easier for you to care
              </h3>
              <p className="text-gray-700">
                By bringing care into the 21st century, we reduce administrative
                tasks using technology, enabling you to spend more quality time
                with those who need it most.
              </p>
            </motion.div>
          </div>

          {/* CTA button below columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8"
          >
            <Link href="/contact">
              <button className="bg-[#6818A5] hover:bg-[#8B2FC9] transition text-white font-semibold py-2 px-6 rounded">
                WHY LIVING GLORY?
              </button>
            </Link>
          </motion.div>
        </section>

        {/* SECTION 3: How to Get Started */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-8 text-[#6818A5]"
          >
            How to get started at Living Glory
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-[#dbe7ff] rounded-2xl p-6 text-left shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-[#9f6bdd] text-white rounded-full font-bold mr-3">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Apply</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                - Search for a role by location, or use our filters.<br />
                - Hit apply &amp; complete your details.<br />
                - We&apos;ll let you know if you&apos;re suitable to progress &amp; arrange an interview.
              </p>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-[#dbe7ff] rounded-2xl p-6 text-left shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-[#9f6bdd] text-white rounded-full font-bold mr=3">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Interview</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                - Your interview will usually take place over video call.<br />
                - We&apos;ll ask value-based questions about a role in care.<br />
                - You have the chance to ask any questions you have.
              </p>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-[#dbe7ff] rounded-2xl p-6 text-left shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-[#9f6bdd] text-white rounded-full font-bold mr-3">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Onboarding</h3>
              </div>
              <p className="text-gray-700 leading-relaxed">
                - All care and branch-based roles require an in-person Care Induction.<br />
                - In the meantime, carry out necessary background checks.<br />
                - Begin shadowing experienced colleagues in your role before lone shifts.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Special Bond & CTA */}
        <section className="py-12 px-4 text-center bg-white">
          {/* Top Text & Squiggles */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto mb-8"
          >
            <p className="text-lg md:text-xl text-[#6818A5] font-semibold mb-2">
              You build a special bond.
            </p>
            <div className="flex items-center justify-center mb-2">
              {/* Simple squiggle */}
              <span className="text-pink-400 mx-2">~ ~ ~</span>
            </div>
            <p className="text-2xl md:text-3xl font-bold text-[#6818A5]">
              It makes you realise what&apos;s important in life.
            </p>
            <div className="flex items-center justify-center mt-2">
              {/* Another squiggle */}
              <span className="text-pink-400 mx-2">~ ~ ~</span>
            </div>
          </motion.div>

          {/* Gradient Box with CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] rounded-xl shadow-lg text-white"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Interested in working in care?
            </h3>
            <Link href="/contact">
              <button className="bg-white text-[#6818A5] font-semibold py-2 px-6 rounded hover:opacity-90 transition">
                FIND A CARER JOB
              </button>
            </Link>
          </motion.div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
