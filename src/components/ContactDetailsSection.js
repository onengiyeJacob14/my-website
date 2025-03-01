import { motion } from "framer-motion";
import Image from "next/image";
// Import Font Awesome icons (assuming you've installed @fortawesome packages)
import { FaClock, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

export default function ContactDetailsSection() {
  return (
    <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-6"
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Empathy Is At The Heart Of Our Care
          </h2>
          <p className="text-gray-700">
            For more information and enquiries, kindly contact us using the
            information provided below.
          </p>

          {/* Opening Hours */}
          <div className="flex items-center text-gray-700">
            <FaClock className="mr-2 text-purple-700" />
            <p>Monday – Saturday: 09:00am – 05:30pm</p>
          </div>

          {/* Address */}
          <div className="flex items-center text-gray-700">
            <FaMapMarkerAlt className="mr-2 text-purple-700" />
            <p>St George&apos;s Hub Great Hampton Row, B19 3JG</p>
          </div>

          {/* Email */}
          <div className="flex items-center text-gray-700">
            <FaEnvelope className="mr-2 text-purple-700" />
            <p>info@livingglorysocialcare.com</p>
          </div>

          {/* Phone */}
          <div className="flex items-center text-gray-700">
            <FaPhone className="mr-2 text-purple-700" />
            <p>0121 679 6452</p>
          </div>

          {/* Map (clickable) */}
          <div className="mt-4">
            <a
              href="https://maps.google.com?q=St%20George%27s%20Hub%20Great%20Hampton%20Row%20B19%203JG"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/map-preview.jpg"  // Replace with an actual map preview image in public/
                alt="Map to St George's Hub"
                width={600}
                height={400}
                className="rounded shadow hover:opacity-90 transition"
              />
            </a>
          </div>
        </motion.div>

         {/* RIGHT COLUMN: Metallic Gradient Form */}
         <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-6 rounded-md bg-gradient-to-b from-[#6818A5] to-[#8B2FC9] text-white flex flex-col"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Fill The Form</h3>
          {/* Reduced vertical spacing (space-y-2 instead of space-y-4) */}
          <form>
  <div className="mb-1">
    <label className="block mb-1 font-semibold">Name</label>
    <input
      type="text"
      className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
      placeholder="Enter Your Name"
    />
  </div>

  <div className="mb-1">
    <label className="block mb-1 font-semibold">Email</label>
    <input
      type="email"
      className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
      placeholder="Enter Your Email"
    />
  </div>

  <div className="mb-1">
    <label className="block mb-1 font-semibold">Mobile</label>
    <input
      type="tel"
      className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
      placeholder="Enter Your Mobile"
    />
  </div>

  <div className="mb-2">
    <label className="block mb-1 font-semibold">Message</label>
    <textarea
      className="w-full p-2 rounded focus:outline-none bg-white text-gray-800"
      rows={4}
      placeholder="Write Your Message..."
    ></textarea>
  </div>

  <button
    type="submit"
    className="bg-purple-800 hover:bg-purple-900 transition text-white font-semibold py-2 px-4 rounded"
  >
    Send Message
  </button>
</form>
        </motion.div>
      </div>
    </section>
  );
}
