"use client"

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AccessibilityWidget from '../../components/AccessibilityWidget';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section with Pink Background */}
        <section className="relative h-[40vh] w-full bg-gradient-to-r from-pink-300 to-pink-200 rounded-b-xl flex items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center px-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#6818A5] relative">
              {/* White Highlight Behind Text */}
              <span className="absolute inset-0 bg-white bg-opacity-80 rounded-md -z-10 px-2 py-1" />
              <span className="relative text-[#6818A5]">
                About Living Glory Social Care
              </span>
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-[#6818A5] relative">
              {/* White Highlight Behind Subheading */}
              <span className="absolute inset-0 bg-white bg-opacity-80 rounded-md -z-10 px-2 py-1" />
              <span className="relative text-[#6818A5]">
                Delivering compassionate, high-quality domiciliary care since 2012.
              </span>
            </p>
          </motion.div>
        </section>

        {/* Overview / Mission Section */}
        <section className="py-2 px-4 md:px-6 lg:px-10 bg-pink-100">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left Column: Mission Statement */}
            <div>
              <motion.h2
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-4 text-purple-700"
              >
                Our Mission
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-gray-700 leading-relaxed mb-4"
              >
                At Living Glory Social Care, our mission is to deliver compassionate, 
                person-centered health and social care that enhances the well-being, 
                dignity, and independence of every individual we serve. Through 
                dedicated and skilled staff, we are committed to providing the highest 
                standards of care, fostering trust, respect, and collaboration with 
                clients, families, and communities. We strive to create a positive 
                impact on the lives of those we care for, empowering them to live with 
                purpose and comfort in their own homes and communities.
              </motion.p>

              {/* Button to PDF Document */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <a
                  href="/Mission%20Statement%20for%20Living%20Glory%20Social%20Care.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition"
                >
                  Find Out More
                </a>
              </motion.div>
            </div>

            {/* Right Column: Phone Mock-Up Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full h-full flex justify-center"
            >
              <div className="relative w-[300px] h-[600px] md:w-[350px] md:h-[700px]">
                <Image
                  src="/Phone-mock-up.jpg"
                  alt="Living Glory Social Care App Preview"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats / Highlights Section */}
        <section className="py-4 px-4 md:px-6 lg:px-10 bg-white mb-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-6 border rounded-lg shadow-sm"
            >
              <h3 className="text-4xl font-bold text-purple-600 mb-2">200+</h3>
              <p className="text-gray-700">Clients Served</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="p-6 border rounded-lg shadow-sm"
            >
              <h3 className="text-4xl font-bold text-purple-600 mb-2">250+</h3>
              <p className="text-gray-700">Professional Carers</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="p-6 border rounded-lg shadow-sm"
            >
              <h3 className="text-4xl font-bold text-purple-600 mb-2">3+</h3>
              <p className="text-gray-700">Local Authorities & Partners</p>
            </motion.div>
          </div>
        </section>

        {/* Team / Testimonials Section */}
<section className="py-12 px-4 md:px-8 lg:px-16 bg-gray-50">
  <div className="max-w-5xl mx-auto">
    <motion.h2
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold mb-6 text-gray-800"
    >
      Meet Our Team
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-gray-700 leading-relaxed mb-8"
    >
      Our team comprises compassionate care professionals, experienced managers,
      and dedicated support staff who share a common goal: to improve lives
      through exceptional care. We invest in continuous training and development,
      ensuring that each team member upholds our high standards and core values.
    </motion.p>

    {/* Team Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Example Card 1 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-6 bg-white border rounded-lg shadow-sm"
      >
        {/* Team Member Photo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/Mary.png" // Update this path to your actual image
            alt="Mary Idele"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Mary Alile Idele</h3>
        <p className="text-purple-600 mb-2">CQC Registered Manager and Director</p>
        <p className="text-gray-700">
          "Our mission is to provide holistic care that respects each client's
          individual needs and preferences. I'm proud to be part of a team that
          genuinely puts people first."
        </p>
      </motion.div>

      {/* Example Card 2 */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="p-6 bg-white border rounded-lg shadow-sm"
      >
        {/* Team Member Photo */}
        <div className="flex justify-center mb-4">
          <Image
            src="/pius.jpg" // Update this path to your actual image
            alt="Pius Alile"
            width={120}
            height={120}
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Pius Alile</h3>
        <p className="text-purple-600 mb-2">Care Consultant</p>
        <p className="text-gray-700">
          "Every day is an opportunity to make a difference. Whether it's a
          friendly chat or specialized care, we aim to bring comfort and joy
          to those we serve."
        </p>
      </motion.div>
    </div>

    {/* Button to All Team Members */}
    <div className="text-center mt-8">
      <a
        href="/team" // Update to your actual team page route
        className="inline-block bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition"
      >
        Our Community
      </a>
    </div>
  </div>
</section>

        {/* Call to Action */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold mb-4 text-gray-800"
            >
              Want to Learn More?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 mb-6"
            >
              Discover how Living Glory Social Care can help you or your loved ones
              maintain independence and live with dignity.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <a
                href="/contact"
                className="inline-block bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700 transition"
              >
                Contact Us
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
