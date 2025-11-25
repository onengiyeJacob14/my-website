"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import ServicesTabs from "../../components/ServicesTabs";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaUserNurse,
  FaHome,
  FaHeartbeat,
} from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    {
      title: "Domiciliary Care",
      icon: <FaUserNurse size={32} />,
      description:
        "Personal care, medication support and companionship to help you stay safe, comfortable and independent at home.",
    },
    {
      title: "Specialist Care",
      icon: <FaHeartbeat size={32} />,
      description:
        "Skilled support for dementia, complex needs and learning disabilities, tailored to each individual’s health and wellbeing.",
    },
    {
      title: "Supported Living",
      icon: <FaHome size={32} />,
      description:
        "Support with daily living, from routines and personal care to accessing the community, in a safe and familiar environment.",
    },
    {
      title: "Respite & Overnight Care",
      icon: <FaHandsHelping size={32} />,
      description:
        "Flexible short-term and overnight care that gives families and carers peace of mind and a chance to rest.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* HERO */}
        <section className="relative w-full bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] text-white py-14 md:py-16 px-4 md:px-8 lg:px-16 overflow-hidden">
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.35)" }}
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed"
              style={{ textShadow: "0 1px 3px rgba(0,0,0,0.4)" }}
            >
              Living Glory Social Care provides flexible, person-centred support
              that helps people live safely, comfortably and with dignity in
              their own homes and communities across the West Midlands.
            </motion.p>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-10 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                Support that fits around{" "}
                <span className="text-purple-700">you</span> and{" "}
                <span className="text-purple-700">your life</span>.
              </h2>
              <p className="text-gray-700 mb-4 text-sm md:text-base leading-relaxed">
                From a little help with everyday tasks to complex, specialist
                care, our services are designed around each person’s needs,
                preferences and goals. We work closely with individuals, families
                and professionals to make sure care is safe, dignified and truly
                person-centred.
              </p>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                No request is too small. Whether it’s a morning visit,
                round-the-clock support or a short break for family carers, we
                are here to provide compassionate, reliable care you can trust.
              </p>
            </motion.div>

            {/* Simple highlight list */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-700 mb-1">
                  PERSON-CENTRED
                </p>
                <p className="text-sm text-gray-800">
                  Care plans built around each person’s wishes, routines and
                  independence.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-700 mb-1">
                  FLEXIBLE SUPPORT
                </p>
                <p className="text-sm text-gray-800">
                  From a few hours a week to 24/7 care – we adapt as needs change.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-700 mb-1">
                  TRAINED STAFF
                </p>
                <p className="text-sm text-gray-800">
                  Skilled, vetted carers with ongoing training and supervision.
                </p>
              </div>
              <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 shadow-sm">
                <p className="text-xs font-semibold text-purple-700 mb-1">
                  LOCAL &amp; RELIABLE
                </p>
                <p className="text-sm text-gray-800">
                  A trusted provider within our local communities in the West
                  Midlands.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="py-10 md:py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-6"
            >
              Key ways we can support you
            </motion.h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.08 }}
                  className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-3 text-purple-700">{service.icon}</div>
                  <h3 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* TABBED SERVICES DETAIL */}
        <section className="py-10 md:py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center md:text-left"
            >
              Explore our services in more detail
            </motion.h2>
            <p className="text-gray-700 mb-6 text-sm md:text-base max-w-3xl">
              Use the tabs below to learn more about each type of care we
              provide, what&apos;s included and how we can tailor support to meet
              your specific needs.
            </p>

            <div className="bg-gray-50 border border-gray-100 rounded-xl p-4 md:p-6 shadow-sm">
              <ServicesTabs />
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white text-center">
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 text-sm md:text-lg mb-6 leading-relaxed">
              If you&apos;d like to discuss your situation or find out which
              services might be right for you or a loved one, our friendly team
              is here to help.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] text-white font-semibold py-2 px-6 rounded-full hover:opacity-90 transition text-sm md:text-base"
            >
              Get in touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
