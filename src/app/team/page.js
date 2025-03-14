"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import Image from "next/image";
import { motion } from "framer-motion";

export default function TeamPage() {
  // Example team data array
  const teamMembers = [
    {
      name: "Dr Mary Alile-Idele",
      role: "Director & CQC Registered Manager",
      photo: "/documents/team/Mary.jpg",
      bio: "Dr Mary leads the overall vision, strategy, and growth of Living Glory Social Care.",
    },
    {
      name: "Mr Pius Alile",
      role: "Director of Strategy & Operation",
      photo: "/documents/team/pius.jpg",
      bio: "Mr Pius drives strategic partnerships and expansion initiatives across the UK.",
    },
    {
      name: "Olivia Lonngren",
      role: "Company Director | Pharmacist",
      photo: "/documents/team/olivia.jpg",
      bio: "Olivia manages our care services, maintaining high-quality standards.",
    },
    {
      name: "Jessica Idele",
      role: "Senior Care Staff",
      photo: "/documents/team/jessica.jpg",
      bio: "Patricia spearheads innovation and technology solutions for better care delivery.",
    },
    {
      name: "Osaretin Alile",
      role: "Vice President, Growth",
      photo: "/documents/team/osas.jpg",
      bio: "Osaretin drives strategic partnerships and expansion initiatives across the UK.",
    },
    {
      name: "Doyin Ogunmeru",
      role: "Senior Care Staff",
      photo: "/Doyin.png",
      bio: "Doyin leads HR and talent development, nurturing a culture of compassion.",
    },
    {
        name: "Jennifer Odighibor",
        role: "Senior Care Staff",
        photo: "/documents/team/jennifer.jpg",
        bio: "Jennifer leads HR and talent development, nurturing a culture of compassion.",
      },
      {
        name: "Samuel Ekun",
        role: "Senior Care Staff",
        photo: "",
        bio: "Sam leads HR and talent development, nurturing a culture of compassion.",
      },
    // Add more team members as needed
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Metallic Gradient Background */}
        <section className="w-full bg-gradient-to-b from-[#6818A5] to-[#8B2FC9] py-12 px-4 md:px-8 lg:px-16 text-white">
          <div className="max-w-6xl mx-auto">
            {/* Page Heading (Centered) */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
            >
              Our Community
            </motion.h1>

            {/* Subheading (Centered) */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-center max-w-2xl mx-auto mb-10"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.5)" }}
            >
              Meet the dedicated professionals who bring compassion, expertise,
              and a personal touch to every aspect of Living Glory Social Care.
            </motion.p>

            {/* Team Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="p-6 bg-white bg-opacity-90 rounded-lg shadow-md flex flex-col items-center text-center"
                >
                  {/* Member Photo */}
                  <div className="relative w-32 h-32 mb-4">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover rounded-full grayscale hover:grayscale-0 transition duration-300"
                    />
                  </div>
                  {/* Member Info */}
                  <h3
                    className="text-xl font-semibold mb-1 text-gray-800"
                    style={{ textShadow: "0 1px 2px rgba(255,255,255,0.3)" }}
                  >
                    {member.name}
                  </h3>
                  <p className="text-purple-700 mb-2">{member.role}</p>
                  <p className="text-gray-800 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
