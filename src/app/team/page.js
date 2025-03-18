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
      role: "Owner | Director & CQC Registered Manager",
      photo: "/documents/team/Mary.jpg",
      bio: "Dr Mary leads the overall vision, strategy, and growth of Living Glory Social Care.",
    },
    {
      name: "Mr Pius Alile",
      role: "Owner | Care Consultant",
      photo: "/documents/team/pius.jpg",
    
    },
    {
      name: "Olivia Lonngren",
      role: "Junior Director of Compliance | Operation | Pharmacist",
      photo: "/documents/team/olivia.jpg",
     
    },
    {
      name: "Jessica Idele",
      role: "Quality Improvement Manager | Field Care Supervisor | Social Worker",
      photo: "/documents/team/jessica.jpg",
      
    },
    {
      name: "Osaretin Alile",
      role: "HR | Training Coordinator",
      photo: "/documents/team/osas.jpg",
      
    },
    {
      name: "Doyin Ogunmeru",
      role: "Care Coordinator | Payroll Manager",
      photo: "/documents/team/Doyin.png",
      
    },
    {
      name: "Jennifer Odighibor",
      role: "Care Monitoring | Invoicing Officer",
      photo: "/documents/team/jennifer.jpg",
      
    },
    {
      name: "Samuel Ekun",
      role: "Staffing Coordinator | Invoicing Officer",
      photo: "/documents/team/sam.jpg", // Provide the correct image path or leave blank if unavailable
      
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
                    {member.photo ? (
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full grayscale hover:grayscale-0 transition duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gray-200 rounded-full">
                        <span className="text-gray-500 text-sm">
                          No Photo
                        </span>
                      </div>
                    )}
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
