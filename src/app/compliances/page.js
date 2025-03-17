"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import { motion } from "framer-motion";

export default function CompliancesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-4xl mx-auto">
            {/* Metallic Gradient Heading */}
            <motion.h1
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-bold mb-6"
              style={{
                background: "linear-gradient(to right, #6818A5, #8B2FC9)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Compliances
            </motion.h1>

            {/* Intro Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 text-lg leading-relaxed mb-6"
            >
              We are committed to transparency, compliance, and best practices in
              all our services. Below, you can find key policies and guidelines
              governing our operations.
            </motion.p>

            {/* Documents Links */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-gray-700"
            >
              <li>
                To view our <strong>Safeguarding Policy</strong>,{" "}
                <a
                  href="/documents/AR01-Safeguarding Children and Child Protection Policy and Procedure (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  click here
                </a>
              </li>
              <li>
                To view our <strong>Safeguarding Adults Policy</strong>,{" "}
                <a
                  href="/documents/CR74-Safeguarding Adults Policy and Procedure (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  click here
                </a>
              </li>
              <li>
                To view our <strong>CQC Standards &amp; Compliance</strong>,{" "}
                <a
                  href="/documents/QQ03-Complaints, Suggestions and Compliments Policy and Procedure (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  click here
                </a>
              </li>
              <li>
                To view our <strong>Complaints Procedure</strong>,{" "}
                <a
                  href="/documents/QQ03-Complaints, Suggestions and Compliments Policy and Procedure (1).pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  click here
                </a>
              </li>
              <li>
                To view our <strong>LGSC Service User Guide</strong>,{" "}
                <a
                  href="/documents/LGSC SERVICE USER GUIDE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  click here
                </a>
              </li>
              <li>
                To view our <strong>Privacy Statement and GDPR Compliance</strong>,{" "}
                <a
                  href="/documents/Privacy Notice.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  click here
                </a>
              </li>
            </motion.ul>

            {/* Closing Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-gray-700 mt-6 leading-relaxed"
            >
              We encourage you to review these documents to understand our
              policies. If you need further clarification, please{" "}
              <a
                href="/contact"
                className="text-purple-700 underline"
              >
                Contact us
              </a>
              .
            </motion.p>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
