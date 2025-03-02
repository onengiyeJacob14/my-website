"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Icons (React Icons or Font Awesome)
import {
  FaUserNurse,
  FaHandsHelping,
  FaHeart,
  FaUserFriends,
  FaUserShield,
  FaAssistiveListeningSystems,
} from "react-icons/fa";

export default function ServicesTabs() {
  // Each tab has: label, icon, title, image, description, tasks
  const servicesTabs = [
    {
      label: "Personal",
      icon: <FaUserNurse />,
      title: "Personal Care",
      image: "/services-personal.webp",
      description:
        "Our care experts can support you with a range of daily tasks in your home which might include:",
      tasks: [
        "Support with washing, dressing, and personal hygiene",
        "Assistance at mealtimes",
        "Toileting support",
        "Medication reminders",
        "Night-time support or overnight stays",
      ],
    },
    {
      label: "Practical",
      icon: <FaHandsHelping />,
      title: "Practical Support",
      image: "/services-practical.webp",
      description:
        "We help you with day-to-day tasks that ensure a comfortable, safe home environment:",
      tasks: [
        "Shopping for groceries and household items",
        "Light housekeeping and laundry",
        "Meal preparation",
        "Prescription collection",
        "Bill payments and errands",
      ],
    },
    {
      label: "Companionship",
      icon: <FaHeart />,
      title: "Companionship Care",
      image: "/services-hero.jpg",
      description:
        "Staying socially engaged and emotionally supported can be crucial for well-being:",
      tasks: [
        "Friendly conversation and social visits",
        "Accompaniment on walks or appointments",
        "Encouraging hobbies and interests",
        "Assistance with phone calls or emails",
        "Community and social event support",
      ],
    },
    {
      label: "Specialist",
      icon: <FaUserFriends />,
      title: "Specialist Care",
      image: "/services-specialist.webp",
      description:
        "For those with more complex health needs, we offer specialized support:",
      tasks: [
        "Dementia and Alzheimer’s care",
        "Learning disability support",
        "Stroke or Parkinson’s care",
        "Palliative and end-of-life care",
        "Coordination with healthcare professionals",
      ],
    },
    {
      label: "Carer Support",
      icon: <FaUserShield />,
      title: "Carer Support",
      image: "/services-carer-support.webp",
      description:
        "Short-term respite and extra help so primary carers can take a break or receive assistance:",
      tasks: [
        "Overnight care to relieve family members",
        "Live-in care options",
        "Emergency respite arrangements",
        "Support for working caregivers",
        "Flexible scheduling to fit your needs",
      ],
    },
    {
      label: "Advocacy",
      icon: <FaAssistiveListeningSystems />,
      title: "Advocacy & Guidance",
      image: "/services-advocacy.webp",
      description:
        "Navigating health and social care services can be challenging. We provide guidance:",
      tasks: [
        "Liaising with local authorities and healthcare providers",
        "Information on funding and benefits",
        "Support with legal documents or forms",
        "Referrals to community resources",
        "Regular check-ins and follow-up",
      ],
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col">
      
      <main className="flex-grow">
        {/* Wavey Lines at the Top (with on-scroll animation) */}
        <motion.section
          className="relative w-full h-32 overflow-hidden"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/wave-top.svg"
            alt="Wave top"
            className="absolute w-full h-full object-cover object-bottom"
          />
        </motion.section>

        {/* Hero Image with Overlapping Tabs */}
        <motion.section
          className="relative w-full bg-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Hero image */}
          <div className="relative w-full h-60 md:h-80 overflow-hidden">
            <img
              src="/services-hero.jpg"
              alt="Hero"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Tabs Container (overlaps the hero image) */}
          <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16">
            <div
              className="relative bg-white p-2 rounded-md shadow-md -mt-8 md:-mt-10 lg:-mt-12 flex justify-center"
              style={{ minHeight: "4rem" }}
            >
              {/* Tab Buttons (Centered) */}
              <div className="flex flex-wrap gap-4 items-center justify-center">
                {servicesTabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`flex items-center gap-1 px-4 py-2 border-b-4 
                      transition-colors duration-200
                      ${
                        activeTab === index
                          ? "border-purple-700 text-purple-700 font-semibold"
                          : "border-transparent text-gray-600 hover:text-purple-700"
                      }`}
                    // On-click animations
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Icon next to label */}
                    <span className="text-lg">{tab.icon}</span>
                    {tab.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Active Tab Content */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
            >
              {/* Left: Text */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  {servicesTabs[activeTab].title}
                </h2>
                <p className="text-gray-700 mb-4">
                  {servicesTabs[activeTab].description}
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  {servicesTabs[activeTab].tasks.map((task, idx) => (
                    <li key={idx}>{task}</li>
                  ))}
                </ul>
              </div>

              {/* Right: Image pinned to top-right */}
              <div className="relative w-50 h-50 md:h-50 bg-gray-200 rounded overflow-hidden">
                <img
                  src={servicesTabs[activeTab].image}
                  alt={servicesTabs[activeTab].title}
                  className="object-contain w-50 h-50"
                />
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}