"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaClock, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

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

      // If success
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
      {/* LEFT COLUMN code remains unchanged... */}
      
      {/* RIGHT COLUMN: Metallic Gradient Form */}
      <motion.div /* ...existing motion props... */
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
    </section>
  );
}
