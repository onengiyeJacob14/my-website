"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import { motion } from "framer-motion";

export default function PoliciesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* Hero / Main Heading Section */}
        <section className="py-12 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto">
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
              Privacy Notice
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed"
            >
              This is Living Glory Social Care Privacy Notice. As part of the
              services we offer, we are required to process personal data about
              our staff, our service users, and, in some instances, the friends
              or relatives of our service users and staff.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed mt-4"
            >
              If you have any concerns or questions, please contact us:
              <br />
              <strong>Phone:</strong> 0121 679 6452
              <br />
              <strong>Email:</strong> info@livingglorysocialcare.com
            </motion.p>
          </div>
        </section>

        {/* Section 1: Introduction for Service Users */}
        <section className="py-8 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                1. Introduction (Service Users)
              </h2>
              <p className="text-gray-700 leading-relaxed">
                As part of the services we offer, we are required to process
                personal data about you. &quot;Processing&quot; can mean collecting,
                recording, organising, storing, sharing, or destroying data.
                We&apos;re committed to being transparent about why we need your
                personal data and what we do with it.
              </p>
              <p className="text-gray-700 leading-relaxed">
                If you have any concerns or questions please contact us:
                <strong> 0121 679 6452</strong>, Email:{" "}
                <strong>info@livingglorysocialcare.com</strong>
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>What data do we have?</strong>
                <br />
                So that we can provide a safe and professional service, we need
                to keep certain records about you. We may process the following
                types of data:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Your basic details and contact information (name, address, date
                  of birth, next of kin)
                </li>
                <li>
                  Your financial details (how you pay us or your funding
                  arrangements)
                </li>
                <li>
                  Health and social care data about you (physical and mental
                  health data)
                </li>
                <li>
                  We may also record data about your race, ethnic origin, sexual
                  orientation, or religion
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Why do we have this data?</strong>
                <br />
                We need this data so that we can provide high-quality care and
                support. By law, we need to have a lawful basis for processing
                your personal data, such as legal obligations under the Health
                and Social Care Act 2012 or Mental Capacity Act 2005.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Common law duty of confidentiality:</strong> We satisfy
                this duty because:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  You have provided us with your consent (implicitly for care, or
                  explicitly for other uses)
                </li>
                <li>
                  We have a legal requirement to collect, share, and use the data
                </li>
                <li>
                  The public interest to collect, share, and use the data
                  overrides the public interest served by protecting the duty of
                  confidentiality (e.g., sharing info with the police to detect
                  or prevent serious crime)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Where do we process your data?</strong>
                <br />
                This data is collected from or shared with you, your
                representative(s), or third parties (local hospitals, GP,
                pharmacy, social workers, local authority, etc.). We do this face
                to face, via phone, email, post, apps, etc.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 2: National Data Opt-Out */}
        <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                2. National Data Opt-Out
              </h2>
              <p className="text-gray-700 leading-relaxed">
                We review our data processing on an annual basis to assess if the
                national data opt-out applies. All new processing is assessed to
                see if the national data opt-out applies. If any data processing
                falls within scope, we use MESH to check if any of our service
                users have opted out.
              </p>
              <p className="text-gray-700 leading-relaxed">
                At this time, we do not share any data for planning or research
                purposes to which the national data opt-out would apply. If we
                do, individuals can decide to stop their info from being shared.
                You can find out more at{" "}
                <a
                  href="https://www.nhs.uk/your-nhs-data-matters/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  nhs.uk/your-nhs-data-matters
                </a>
                .
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Staff */}
        <section className="py-8 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800">3. Staff</h2>
              <p className="text-gray-700 leading-relaxed">
                We keep certain records about you as staff to ensure we can
                contact you, pay you, and provide necessary training. This may
                include personal details, financial details, and &ldquo;special
                category&rdquo; data like health information if required.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We process your data because of legal obligations under UK
                employment law, performance of public tasks, or our legitimate
                interests. We may share your data with HMRC, payroll providers,
                CQC, or law enforcement if legally required.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 4: How do we store your personal information? */}
        <section className="py-8 px-4 md:px-8 lg:px-16 bg-gray-50">
          <div className="max-w-5xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800">
                4. How do we store your personal information?
              </h2>
              <p className="text-gray-700 leading-relaxed">
                Your information is securely stored for the time periods
                specified in the Records Management Code of Practice. We then
                securely dispose of or archive your data as recommended (e.g.,
                shredding paper records, wiping hard drives).
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our website is at{" "}
                <a
                  href="https://livingglorysocialcare.co.uk/about-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  livingglorysocialcare.co.uk/about-us/
                </a>
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section 5: Your rights */}
        <section className="py-8 px-4 md:px-8 lg:px-16">
          <div className="max-w-5xl mx-auto space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold text-gray-800">Your rights</h2>
              <p className="text-gray-700 leading-relaxed">
                The data we keep about you is your data. We ensure we keep it
                confidential and use it appropriately. You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  Request a copy of all the data we keep about you (usually free
                  of charge)
                </li>
                <li>
                  Ask us to correct any inaccurate or incomplete data (restrict
                  processing while we consider your request)
                </li>
                <li>
                  Ask us to erase data no longer necessary for the purpose we
                  originally collected it
                </li>
                <li>
                  Withdraw consent at any time if we process data based on
                  consent
                </li>
                <li>
                  Object to processing if we rely on legitimate interests or
                  public tasks
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We may require proof of identity (e.g., passport) to ensure data
                is not inappropriately shared. We respond to requests as soon as
                possible, at the latest within one month.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Complaints:</strong> If you&apos;re unhappy with how we&apos;ve
                handled your request, contact:
              </p>
              <address className="not-italic text-gray-700">
                Information Commissioner&apos;s Office
                <br />
                Wycliffe House, Water Lane
                <br />
                Wilmslow, Cheshire SK9 5AF
                <br />
                <a
                  href="https://ico.org.uk/global/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-700 underline"
                >
                  ico.org.uk/global/contact-us/
                </a>
              </address>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
