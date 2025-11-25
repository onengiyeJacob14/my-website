"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaUsers,
  FaRegStar,
} from "react-icons/fa";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr Mary Alile-Idele",
      role: "Owner | Director & CQC Registered Manager",
      photo: "/documents/team/Mary.jpg",
      bio: "Dr Mary leads the overall vision, strategy and regulatory excellence of Living Glory Social Care.",
    },
    {
      name: "Mr Pius Alile",
      role: "Owner | Care Consultant",
      photo: "/documents/team/pius.jpg",
      bio: "Pius supports key service decisions, guiding care delivery and operational quality.",
    },
    {
      name: "Olivia Lonngren",
      role: "Junior Director | Compliance & Operations",
      photo: "/documents/team/olivia.jpg",
      bio: "Olivia ensures adherence to care standards, compliance frameworks, and operational harmony.",
    },
    {
      name: "Jessica Idele",
      role: "Quality Improvement Manager | Field Care Supervisor",
      photo: "/documents/team/jessica.jpg",
      bio: "Jessica oversees quality assurance and supports staff and clients in the field.",
    },
    {
      name: "Osaretin Alile",
      role: "HR & Training Coordinator",
      photo: "/documents/team/osas.jpg",
      bio: "Osaretin coordinates staff development, training delivery, and HR processes.",
    },
    {
      name: "Doyin Ogunmeru",
      role: "Care Coordinator | Payroll Manager",
      photo: "/documents/team/Doyin.png",
      bio: "Doyin ensures smooth staff coordination, rota management and payroll accuracy.",
    },
    {
      name: "Jennifer Odighibor",
      role: "Care Monitoring & Invoicing Officer",
      photo: "/documents/team/jennifer.jpg",
      bio: "Jennifer oversees invoicing, client monitoring and service admin functions.",
    },
    {
      name: "Samuel Ekun",
      role: "Staffing Coordinator | Invoicing Officer",
      photo: "/documents/team/sam.jpg",
      bio: "Samuel supports workforce planning and invoicing administrative duties.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">

        {/* HERO */}
        <section className="w-full bg-gradient-to-b from-[#FDEBFF] to-white py-14 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto text-center">
            
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#6818A5] text-xs font-semibold shadow">
                <FaUsers /> Our Community
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6818A5] mt-4">
                The Team Behind Our Care
              </h1>

              <p className="max-w-2xl mx-auto mt-3 text-gray-700 text-sm md:text-lg leading-relaxed">
                Meet the dedicated professionals who uphold our commitment to quality,
                dignity, safety and compassion across every aspect of our care services.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TEAM GRID */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
                >
                  
                  <div className="relative w-28 h-28 mx-auto mb-4">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="rounded-full object-cover border-2 border-purple-200 shadow-sm"
                    />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 text-center">
                    {member.name}
                  </h3>

                  <p className="text-purple-700 text-center text-sm mb-3">
                    {member.role}
                  </p>

                  {member.bio && (
                    <p className="text-gray-700 text-sm text-center leading-relaxed">
                      {member.bio}
                    </p>
                  )}
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-gray-900"
            >
              Want to join our incredible team?
            </motion.h2>

            <p className="text-gray-700 mt-3 text-sm md:text-base max-w-2xl mx-auto">
              We’re always looking for passionate, committed people who want to make a
              positive impact in their community.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-6"
            >
              <a
                href="/careers"
                className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition text-sm md:text-base"
              >
                Explore Opportunities
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
