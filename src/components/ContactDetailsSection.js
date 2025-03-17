"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,

} from "react-icons/fa";

export default function ContactDetailsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const response = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to send email");

      setSuccessMsg("Message sent successfully!");
      setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      setErrorMsg("Error sending message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT COLUMN: Info + Map */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-800 flex flex-col justify-center"
        >
          <h2 className="text-3xl font-bold text-[#6818A5] mb-2">
            Contact Information
          </h2>
          <p className="text-gray-700 mb-4">
            We&apos;d love to hear from you! Reach out by phone, email, or visit us
            at our main office.
          </p>

          {/* Address */}
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-[#6818A5] mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Location</h4>
              <p className="text-sm">
                <a
                  href="https://maps.google.com?q=St.%20Georges%20Community%20Hub%20Great%20Hampton%20Row%20Birmingham%20B19%203JG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-[#6818A5] hover:text-[#8B2FC9]"
                >
                  St. Georges Community Hub, Great Hampton Row, Birmingham B19 3JG
                </a>
              </p>
            </div>
          </div>

           {/* Opening Hours */}
           <div className="flex items-start space-x-3">
            <FaClock className="text-[#6818A5] mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Opening Hours</h4>
              <p className="text-sm">Monday - Friday : 9:00am - 17:00</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start space-x-3">
            <FaPhone className="text-[#6818A5] mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-sm">0121 679 6452</p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-[#6818A5] mt-1" size={24} />
            <div>
              <h4 className="font-semibold text-lg">Email Us</h4>
              <p className="text-sm">
                <a
                  href="mailto:info@livingglorysocialcare.com"
                  className="underline text-[#6818A5] hover:text-[#8B2FC9]"
                >
                  info@livingglorysocialcare.com
                </a>
              </p>
            </div>
          </div>

          {/* Map Preview (clickable) */}
          <div className="mt-4">
            <h4 className="font-semibold mb-2">Our Location on Map</h4>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden shadow">
              <iframe
                title="St. Georges Community Hub Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2429.2512351993185!2d-1.90775!3d52.49045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870bc8f8658cb67%3A0xa72c207b995b7f6f!2sSt.%20Georges%20Community%20Hub%2C%20Great%20Hampton%20Row%2C%20Birmingham%20B19%203JG!5e0!3m2!1sen!2suk!4v1234567890"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Metallic Gradient Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-md bg-gradient-to-b from-[#6818A5] to-[#8B2FC9] text-white flex flex-col"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Fill The Form</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-1">
              <label className="block mb-1 font-semibold">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
                placeholder="Enter Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-1">
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-1">
              <label className="block mb-1 font-semibold">Mobile</label>
              <input
                type="tel"
                name="mobile"
                className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
                placeholder="Enter Your Mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </div>

            <div className="mb-1">
              <label className="block mb-1 font-semibold">Subject</label>
              <input
                type="text"
                name="subject"
                className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className="mb-2">
              <label className="block mb-1 font-semibold">Message</label>
              <textarea
                name="message"
                className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
                rows={4}
                placeholder="Write Your Message..."
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            {/* Feedback Messages */}
            {successMsg && <p className="text-green-300 mb-2">{successMsg}</p>}
            {errorMsg && <p className="text-red-300 mb-2">{errorMsg}</p>}

            <button
              type="submit"
              className="bg-purple-800 hover:bg-purple-900 transition text-white font-semibold py-2 px-4 rounded"
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
