"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaHeart,
  FaHandsHelping,
  FaUserFriends,
} from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* HERO */}
        <section className="relative w-full bg-gradient-to-r from-[#FFE3F1] via-[#FDF7FF] to-[#E3ECFF]">
          <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-16 flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <span className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/80 text-xs md:text-sm font-semibold text-[#6818A5] shadow-sm">
                About Living Glory Social Care
              </span>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#6818A5] leading-tight">
                Compassionate, person-centred care
                <br className="hidden md:block" />
                in the heart of our communities
              </h1>

              <p className="max-w-2xl mx-auto text-sm md:text-lg text-gray-700">
                Since 2012, Living Glory Social Care has been supporting adults
                to live safely, independently and with dignity in their own
                homes – providing professional domiciliary care built on trust,
                respect and genuine human connection.
              </p>
            </motion.div>
          </div>
        </section>

        {/* MISSION + IMAGE */}
        <section className="py-12 px-4 md:px-6 lg:px-10 bg-pink-50">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Left: Mission */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-2xl md:text-3xl font-bold mb-4 text-[#6818A5]"
              >
                Our Mission
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-gray-700 leading-relaxed mb-4 text-sm md:text-base"
              >
                Our mission is to deliver compassionate, person-centred health
                and social care that enhances the well-being, dignity and
                independence of every individual we serve. Through dedicated and
                skilled staff, we provide high-quality, safe and responsive
                support built on trust, respect and collaboration with clients,
                families and professionals.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-gray-700 leading-relaxed mb-6 text-sm md:text-base"
              >
                We strive to create a positive impact in every interaction –
                empowering people to live with purpose and comfort in their own
                homes and communities.
              </motion.p>

              {/* Values mini-cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6"
              >
                <div className="bg-white rounded-lg shadow-sm border border-pink-100 p-3 text-center">
                  <FaHeart className="mx-auto mb-2 text-[#E35BA5]" />
                  <p className="text-xs font-semibold text-gray-800">
                    Compassion
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-pink-100 p-3 text-center">
                  <FaHandsHelping className="mx-auto mb-2 text-[#6818A5]" />
                  <p className="text-xs font-semibold text-gray-800">
                    Partnership
                  </p>
                </div>
                <div className="bg-white rounded-lg shadow-sm border border-pink-100 p-3 text-center">
                  <FaUserFriends className="mx-auto mb-2 text-[#8B2FC9]" />
                  <p className="text-xs font-semibold text-gray-800">
                    Respect
                  </p>
                </div>
              </motion.div>

              {/* Mission PDF Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <a
                  href="/Mission%20Statement%20for%20Living%20Glory%20Social%20Care.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition text-sm md:text-base"
                >
                  Read our full mission statement
                </a>
              </motion.div>
            </div>

            {/* Right: Phone Mockup */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-[260px] h-[520px] sm:w-[300px] sm:h-[600px] md:w-[340px] md:h-[650px] rounded-3xl overflow-hidden shadow-xl bg-white">
                <Image
                  src="/Phone-mock-up.jpg"
                  alt="Living Glory Social Care preview"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* STATS / HIGHLIGHTS */}
        <section className="py-10 px-4 md:px-6 lg:px-10 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 text-center"
            >
              Trusted care, meaningful outcomes
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                  200+
                </h3>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Clients supported
                </p>
                <p className="text-xs text-gray-600">
                  Adults receiving tailored, person-centred support in their
                  homes.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                  250+
                </h3>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Professional carers
                </p>
                <p className="text-xs text-gray-600">
                  A dedicated workforce of trained, vetted and supported staff.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-purple-600 mb-1">
                  3+
                </h3>
                <p className="text-sm font-semibold text-gray-800 mb-1">
                  Local authorities &amp; partners
                </p>
                <p className="text-xs text-gray-600">
                  Working closely with commissioners, NHS teams and other
                  professionals.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TEAM SECTION */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
            >
              Meet our leadership
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-gray-700 leading-relaxed mb-8 text-sm md:text-base max-w-3xl"
            >
              Behind every visit, call and care plan is a team of experienced
              leaders and managers who are passionate about quality, safety and
              person-centred practice. They work closely with our carers,
              commissioners and families to ensure that every service we
              deliver reflects our values.
            </motion.p>

            {/* Team Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Mary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 mb-4 relative">
                  <Image
                    src="/Mary.png"
                    alt="Dr Mary Alile-Idele"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Dr Mary Alile-Idele
                </h3>
                <p className="text-purple-600 text-sm mb-3">
                  CQC Registered Manager &amp; Director
                </p>
                <p className="text-gray-700 text-sm">
                  &quot;Our mission is to provide holistic care that respects each
                  person&apos;s needs, background and preferences. I&apos;m proud to lead
                  a team that genuinely puts people first.&quot;
                </p>
              </motion.div>

              {/* Pius */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm flex flex-col items-center text-center"
              >
                <div className="w-28 h-28 mb-4 relative">
                  <Image
                    src="/pius.jpg"
                    alt="Pius Alile"
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                  Pius Alile
                </h3>
                <p className="text-purple-600 text-sm mb-3">
                  Care Consultant
                </p>
                <p className="text-gray-700 text-sm">
                  &quot;Every day is an opportunity to make a difference. Whether it&apos;s
                  a friendly conversation or specialist support, we aim to bring
                  comfort, reassurance and joy to those we serve.&quot;
                </p>
              </motion.div>
            </div>

            {/* Button to full team */}
            <div className="text-center mt-10">
              <a
                href="/team"
                className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition text-sm md:text-base"
              >
                Meet the wider team
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
            >
              Want to learn more about our care?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 mb-6 text-sm md:text-base"
            >
              Whether you&apos;re exploring support for yourself, a loved one or
              someone you work with, we&apos;re here to help you find the right
              care at the right time.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="/contact"
                className="inline-block bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition text-sm md:text-base"
              >
                Contact our team
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
