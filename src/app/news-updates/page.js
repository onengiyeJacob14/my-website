"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaMoneyBillWave,
  FaUserClock,
  FaClipboardCheck,
  FaUserShield,
  FaTools,
  FaHeartbeat,
  FaAddressBook,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

export default function NewsUpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* SECTION 1: Company Updates (Playful) */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff8eb]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Company Updates
            </motion.h2>

            {/* Content Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border-l-4 border-pink-300 shadow p-4 rounded-md space-y-3 text-base md:text-lg text-gray-800 leading-relaxed"
            >
              <div className="flex items-center space-x-2">
                <FaMoneyBillWave className="text-pink-500" />
                <p className="font-semibold">
                  <strong>NMW Increase &amp; Annual Leave Requests:</strong>
                </p>
              </div>
              <p className="ml-7">
                Employees should be aware of the upcoming NMW increase. From
                1st April 2025, there will also be changes to the annual leave
                processing system. Please stay updated via the WhatsApp groups
                for details.
              </p>

              <div className="flex items-center space-x-2">
                <FaClipboardCheck className="text-pink-500" />
                <p className="font-semibold">
                  <strong>Spot Checks:</strong>
                </p>
              </div>
              <p className="ml-7">
                Office staff will be conducting spot checks over the coming
                weeks to maintain quality standards. We appreciate your
                cooperation.
              </p>

              <div className="flex items-center space-x-2">
                <FaUserClock className="text-pink-500" />
                <p className="font-semibold">
                  <strong>Supervisions — March 2025:</strong>
                </p>
              </div>
              <p className="ml-7">
                Staff supervisions are scheduled for March 2025. Dates will be
                shared soon.
              </p>

              <div className="flex items-center space-x-2">
                <FaHeartbeat className="text-pink-500" />
                <p className="font-semibold">
                  <strong>Client Feedback:</strong>
                </p>
              </div>
              <p className="ml-7">
                The latest feedback review (Feb – Jul 2025) was generally
                positive, reflecting well on the quality of care provided. Thank
                you for your dedication!
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: Training & Health & Safety */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#f0faff]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Training &amp; Health &amp; Safety Updates
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg text-gray-800 leading-relaxed">
              {/* Left Column: Training Completion */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white shadow p-4 rounded-md"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2 text-gray-800">
                  <FaTools className="text-blue-500" />
                  <span>Training Completion</span>
                </h3>
                <p className="mb-2">
                  Well done to all staff for successfully completing their
                  training! This will be an annual requirement to maintain
                  compliance and service quality.
                </p>
                <p className="mb-2">
                  <strong>Training Compensation:</strong> The £50 training
                  compensation will be reflected in your March 2025 or April
                  2025 payslip if not yet received.
                </p>
                <p>
                  <strong>E-MAR Implementation:</strong> The electronic
                  medication and administration record system has been fully
                  implemented. Please ensure all protocols are followed for
                  proper usage.
                </p>
              </motion.div>

              {/* Right Column: Health & Safety */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white shadow p-4 rounded-md"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2 text-gray-800">
                  <FaUserShield className="text-blue-500" />
                  <span>Health &amp; Safety: PPE Use &amp; Uniform Guidelines</span>
                </h3>
                <p className="mb-2">
                  <strong>PPE Usage:</strong> Wear appropriate PPE—gloves,
                  aprons, masks—for tasks that require them.
                </p>
                <p className="mb-2">
                  <strong>Uniform Standards:</strong> Keep uniforms clean and
                  professional; no open-toe shoes or dangling jewelry.
                </p>
                <p className="mb-2">
                  <strong>General Safety:</strong> By following guidelines, we
                  maintain a safe and professional environment.
                </p>
                <div className="bg-[#e8f7ff] border-l-4 border-blue-300 p-3 mt-4 rounded">
                  <strong>PPE Delivery Reminder:</strong> PPE is delivered every
                  Friday. If you need to be on the drop-off list, contact
                  Osaretin.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: New Website, Wellbeing, Employee Recognition */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff9fa]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Latest Announcements
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-base md:text-lg text-gray-800 leading-relaxed">
              {/* Left Column */}
              <div className="space-y-6">
                {/* New Website Coming Soon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="bg-white p-4 shadow rounded-md"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    New Website Launched!
                  </h3>
                  <p>
                    We are excited to announce that Living Glory Social Care has
                    a new website!
                  </p>
                </motion.div>

                {/* Health & Wellbeing Corner */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="bg-white p-4 shadow rounded-md"
                >
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Health &amp; Wellbeing Corner
                  </h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      <strong>Stay Active:</strong> As the weather improves,
                      consider short walks or breaks to boost energy.
                    </li>
                    <li>
                      <strong>Hydration Reminder:</strong> Warmer weather means
                      staying hydrated is crucial!
                    </li>
                    <li>
                      <strong>Mental Health Support:</strong> Reach out to
                      management or use our EAP (Wisdom App) if you need help.
                    </li>
                  </ul>
                </motion.div>
              </div>

              {/* Right Column: Employee Recognition */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="bg-white p-4 shadow rounded-md"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Employee Recognition
                </h3>
                <p className="mb-4">
                  We want to recognise the following staff members for their
                  outstanding contributions this quarter. Your efforts do not go
                  unnoticed!
                </p>
                {/* Staff Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Ortis */}
                  <div className="flex flex-col items-center">
                    <Image
                      src="/documents/team/ortis.png"
                      alt="Ortiz"
                      width={100}
                      height={100}
                      className="rounded-full object-cover mb-2"
                    />
                    <p className="font-semibold text-gray-800">
                      EJIROGHENE MUDIAGA-ORTIS
                    </p>
                    <p className="text-sm text-center">
                      Above &amp; beyond in ensuring person-centered&nbsp;care.
                    </p>
                  </div>
                  {/* Nora */}
                  <div className="flex flex-col items-center">
                    <Image
                      src="/documents/team/nora.png"
                      alt="Nora"
                      width={100}
                      height={100}
                      className="rounded-full object-cover mb-2"
                    />
                    <p className="font-semibold text-gray-800">
                      NORA ANYOBUEKE
                    </p>
                    <p className="text-sm text-center">
                      Consistently providing empathy &amp; compassion.
                    </p>
                  </div>
                  {/* Kingsley */}
                  <div className="flex flex-col items-center">
                    <Image
                      src="/documents/team/kingsley.png"
                      alt="Kingsley"
                      width={100}
                      height={100}
                      className="rounded-full object-cover mb-2"
                    />
                    <p className="font-semibold text-gray-800">
                      KINGSLEY NWAGBO
                    </p>
                    <p className="text-sm text-center">
                      Exceptional teamwork &amp; high standards.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 4: Upcoming Event & Engagement */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff8eb]">
          <div className="max-w-6xl mx-auto text-base md:text-lg text-gray-800 leading-relaxed">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Upcoming Event &amp; Engagement
            </motion.h2>

            <div className="border-2 border-gray-300 p-6 rounded-md space-y-4">
              <h3 className="text-xl font-semibold">Away Days</h3>
              <p>
                We are introducing <strong>Away Days</strong> as an opportunity
                for staff to unwind, connect, and recharge outside of the usual
                work environment. These non-compulsory events are designed to
                promote well-being, team bonding, and personal development—
                offering a chance to step away from daily routines and engage in
                enjoyable activities.
              </p>
              <p>
                Further details will be shared this spring, so keep an eye out
                for updates!
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Updated Management Roles, Contact, Final Notes */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto text-base md:text-lg text-gray-800 leading-relaxed">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Updated Management Job Roles &amp; Contact Details
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column: Enquiries, Roles */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-[#f7f7f7] p-4 rounded shadow"
              >
                <div className="flex items-center mb-4 space-x-2">
                  <FaEnvelope className="text-purple-700 bg-white p-1 rounded" />
                  <p className="font-semibold text-gray-800">General Enquiries:</p>
                </div>
                <p className="ml-7 mb-6">info@livingglorysocialcare.com</p>

                <p className="font-semibold mb-2">Management Contacts:</p>
                <ul className="space-y-2">
                  <li>
                    Jessica Idele (Quality Improvement Manager / Field Care Supervisor)
                    &mdash; jessica@livingglorysocialcare.com
                  </li>
                  <li>
                    Pius Alile (Director of Strategy &amp; Operation)
                    &mdash; pius@livingglorysocialcare.com
                  </li>
                  <li>
                    Doyin Ogunmeru (Senior Care Staff)
                    &mdash; doyin.ogunmeru@livingglorysocialcare.com
                  </li>
                  <li>
                    Jennifer Odighibor (Senior Care Staff)
                    &mdash; jennifer@livingglorysocialcare.com
                  </li>
                  <li>
                    Samuel Ekun (Staffing Coordinator &amp; Services Officer)
                    &mdash; samuel.ekun@livingglorysocialcare.com
                  </li>
                </ul>
              </motion.div>

              {/* Right Column: Final Notes */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[#f7f7f7] p-4 rounded shadow"
              >
                <h3 className="text-xl font-semibold mb-2 text-gray-800">
                  Final Notes
                </h3>
                <p className="mb-4">
                  As we embrace the new season, let&apos;s continue working together
                  to provide the best care for our clients! On behalf of the
                  team at Living Glory Social Care, we appreciate everything
                  that you do. If you have any questions or need assistance,
                  don&apos;t hesitate to reach out. Wishing you all a wonderful and
                  productive Spring!
                </p>
                <div className="border-t border-gray-300 pt-4">
                  <p className="font-semibold">
                    Best Regards,
                    <br />
                    Living Glory Social Care
                  </p>
                  <address className="not-italic mt-2 text-sm text-gray-700">
                    <strong>Address:</strong> St George&apos;s Hub, Great Hampton
                    Row, Birmingham, B19 3JG <br />
                    <strong>Telephone:</strong> 0121 679 6452 | <strong>Email:</strong>{" "}
                    info@livingglorysocialcare.com
                  </address>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
