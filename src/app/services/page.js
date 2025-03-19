"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import ServicesTabs from "../../components/ServicesTabs"; // if you place the code above in a separate file
import { motion } from "framer-motion";
// Example Font Awesome or React Icons
import { FaHandsHelping, FaUserNurse, FaHome, FaHeartbeat } from "react-icons/fa";

export default function ServicesPage() {
  // Example data array for services
  const services = [
    {
      title: "Domiciliary Care",
      icon: <FaUserNurse size={40} />,
      description:
        "Personal care, medication management, and companionship to support independent living in your own home.",
    },
    {
      title: "Specialist Care",
      icon: <FaHeartbeat size={40} />,
      description:
        "Expertise in dementia care, complex needs, and learning disabilities, ensuring specialized support for every individual.",
    },
    {
      title: "Supported Living",
      icon: <FaHome size={40} />,
      description:
        "Assistance with daily tasks, fostering independence, and offering a safe, comfortable living environment.",
    },
    {
      title: "Respite & Overnight Care",
      icon: <FaHandsHelping size={40} />,
      description:
        "Short-term relief for primary caregivers, overnight monitoring, and comprehensive support when needed.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Metallic Gradient */}
        <section className="relative w-full bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] py-16 px-4 md:px-8 lg:px-16 text-white overflow-hidden">
          {/* Removed max-w-6xl to allow full width, but kept mx-auto for clean layout if needed */}
          <div className="mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-lg md:text-xl max-w-3xl"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Discover how Living Glory Social Care supports individuals with
              compassionate, high-quality care tailored to their unique needs.
            </motion.p>
          </div>
        </section>

        {/* NEW Showcase Section */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          {/* Removed max-w-6xl; content now extends more fully to the right */}
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* (If you have an image collage or something else on the left, you can put it here) */}

            {/* Right: Text & Branding */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                Our team of{" "}
                <span className="text-purple-700">dedicated</span> and{" "}
                <span className="text-purple-700">compassionate</span> specialists
                delivers exceptional care to communities throughout the&nbsp;West
                &nbsp;Midlands..
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We believe that from one individual need to a more detailed task,
                no job is too small. Our approach is focused on delivering
                holistic, person-centered care that respects each client&apos;s
                independence and preferences.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As a trusted part of our local community, we aim to provide
                compassionate, high-quality care, just as we would expect for
                our own families. Explore our range of services below.
              </p>
            </motion.div>
          </div>
        </section>

        {/* New Tabbed Services Section */}
        <ServicesTabs />

        {/* CTA Section (Reference-style) */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-lg md:text-xl mb-6">
              For more details on the services that we can support you with,
              click the button below.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] text-white font-semibold py-2 px-6 rounded hover:opacity-90 transition"
            >
              Get In Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
