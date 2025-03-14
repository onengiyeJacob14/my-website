"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PayingForCarePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Page Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-[#6818A5]"
            >
              Paying for Care
            </motion.h1>

            {/* Main Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 leading-relaxed space-y-4"
            >
              <p>
                <strong>Direct payments</strong><br />
                If you or a family member receives care and support through your local Council, 
                you may be entitled to a ‘direct payment’. This is money, which is paid by the 
                Council to you directly, for you to spend on your care and support. 
              </p>
              <p>
                If you do have a direct payment, you can choose to use this to fully, or partially, 
                cover your home care costs. Depending on the type of support that you want, and the 
                amount paid to you as direct payment, you may need to pay for some of your costs 
                of care yourself.
              </p>
              <p>
                Not everybody is entitled to Direct Payments from their local Council. To find out 
                if you are eligible, or for more information on direct payments and your 
                circumstances, get in touch with your local authority’s Adult Social Care department.
              </p>

              <p>
                <strong>Private funding</strong><br />
                If you are not receiving financial support from your local Council to access care 
                services, you will need to pay for your own care and support.
              </p>
              <p>
                There are many different ways we can help you to access information and advice 
                to decide what the best option is for you in terms of the type, and amount, of 
                care you receive, and how this can fit with your personal circumstances.
              </p>
              <p>
                Get in touch with our team at Living Glory to have a chat through what you think 
                would work for you, and to find out more about different pricing options.
              </p>
            </motion.div>

            {/* Button to Contact Page */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="bg-[#6818A5] hover:bg-[#8B2FC9] transition text-white font-semibold py-2 px-6 rounded"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
