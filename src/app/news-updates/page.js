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
  FaCalendarAlt,
  FaTshirt,
  FaHandsHelping,
  FaGift,
} from "react-icons/fa";

export default function NewsUpdatesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
        {/* SECTION 1: News in Brief */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff8eb]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              News in Brief
            </motion.h2>

            {/* Content Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border-l-4 border-pink-300 shadow p-4 rounded-md space-y-3 text-base md:text-lg text-gray-800 leading-relaxed"
            >
              {/* New Company Jumpers */}
              <div className="flex items-center space-x-2">
                <FaTshirt className="text-pink-500" />
                <p className="font-semibold">
                  <strong>New Company Jumpers:</strong>
                </p>
              </div>
              <p className="ml-7">
                Great news! The new company jumpers are now ready for
                collection. Please visit the office and see Jennifer for
                details.
              </p>

              {/* Referral Incentive */}
              <div className="flex items-center space-x-2">
                <FaGift className="text-pink-500" />
                <p className="font-semibold">
                  <strong>Referral Incentive:</strong>
                </p>
              </div>
              <p className="ml-7">
                Don&apos;t forget—our referral incentive is still ongoing! Refer a
                new client and receive a £50 reward as a token of appreciation.
              </p>

              {/* Winter Supervision */}
              <div className="flex items-center space-x-2">
                <FaCalendarAlt className="text-pink-500" />
                <p className="font-semibold">
                  <strong>Winter Supervision:</strong>
                </p>
              </div>
              <p className="ml-7">
                Staff winter supervision sessions will take place on the 19th,
                20th, and 21st of November 2025. Please make yourselves
                available.
              </p>

              {/* Staff Support & Escalation */}
              <div className="flex items-center space-x-2">
                <FaHandsHelping className="text-pink-500" />
                <p className="font-semibold">
                  <strong>Staff Support &amp; Escalation:</strong>
                </p>
              </div>
              <p className="ml-7">
                For general queries, please use the office line or email. If you
                have any concerns that need to be discussed with the Registered
                Manager or Senior Management, please escalate directly to the
                office or through the WhatsApp group. For quality-related
                issues, contact the Quality Improvement Manager.
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 2: Christmas Raffle & Hygiene */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#f0faff]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Christmas Raffle &amp; Winter Reminders
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-base md:text-lg text-gray-800 leading-relaxed">
              {/* Left Column: Christmas Hamper Raffle */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="bg-white shadow p-4 rounded-md"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2 text-gray-800">
                  <FaTools className="text-blue-500" />
                  <span>Win A Christmas Hamper!</span>
                </h3>
                <p className="mb-2">
                  Includes: 2 bottles of wine, £20 Amazon gift card,
                  smartwatch, sweet treats, chocolates, candles, mugs, kitchen
                  utensils and a cosy blanket!
                </p>
                <p className="mb-2">
                  <strong>Raffle tickets:</strong> £1 each — all proceeds go to
                  Make-A-Wish, helping grant wishes for children with
                  life-threatening illnesses.
                </p>
                <p className="mb-2">
                  <strong>Prizes:</strong>
                  <br />
                  1st Prize: Xmas Hamper worth £100
                  <br />
                  2nd Prize: £50
                  <br />
                  3rd Prize: £25
                </p>
                <p className="mb-2">
                  See Jessica to buy your tickets (no limit!).
                </p>
                <p>
                  <strong>Start Date:</strong> Monday 1st December 2025
                  <br />
                  <strong>Deadline:</strong> Friday 19th December 2025
                  <br />
                  Merry Christmas!
                </p>
              </motion.div>

              {/* Right Column: Carers' Hygiene Reminder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white shadow p-4 rounded-md"
              >
                <h3 className="text-xl font-semibold mb-2 flex items-center space-x-2 text-gray-800">
                  <FaUserShield className="text-blue-500" />
                  <span>Carers&apos; Hygiene Reminder</span>
                </h3>
                <p className="mb-2">
                  A clean uniform, fresh breath, and a pleasant scent make a big
                  difference. Staying fresh and well-presented helps you feel
                  confident and ensures those you support feel comfortable.
                </p>
                <p className="mb-2">
                  Let&apos;s always show our dedication through good hygiene and
                  professionalism!
                </p>
                <div className="bg-[#e8f7ff] border-l-4 border-blue-300 p-3 mt-4 rounded">
                  Thank you for continuing to represent Living Glory Social Care
                  with pride and professionalism in everything you do.
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SECTION 3: Recognition – Carers of the Quarter */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff9fa]">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Recognition – Carers of the Quarter
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border-l-4 border-pink-300 shadow p-6 rounded-md text-base md:text-lg text-gray-800 leading-relaxed"
            >
              <p className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#fff8eb] text-[#6818A5] mb-4">
                A big, warm thank you to our shining stars 🌟
              </p>
              <p className="mb-4">
                Congratulations to our{" "}
                <strong>Carers of the Quarter</strong>! Your kindness, patience
                and dedication shine through in everything you do. You go the
                extra mile for the people you support and for your colleagues,
                and it does not go unnoticed. Thank you for bringing warmth,
                joy, and excellence to Living Glory Social Care.
              </p>

              {/* Staff Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Farida */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/documents/team/ortis.png"
                    alt="Farida Parvin-Choudbury"
                    width={100}
                    height={100}
                    className="rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold text-gray-800">
                    FARIDA PARVIN-CHOUDBURY
                  </p>
                  <p className="text-sm">
                    For consistently delivering compassionate, person-centred
                    care.
                  </p>
                </div>
                {/* Hemalidevi */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/documents/team/nora.png"
                    alt="Hemalidevi Shah"
                    width={100}
                    height={100}
                    className="rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold text-gray-800">
                    HEMALIDEVI SHAH
                  </p>
                  <p className="text-sm">
                    For her calm, reassuring presence and professional
                    approach.
                  </p>
                </div>
                {/* Simon */}
                <div className="flex flex-col items-center text-center">
                  <Image
                    src="/documents/team/kingsley.png"
                    alt="Simon Osemuwehi"
                    width={100}
                    height={100}
                    className="rounded-full object-cover mb-2"
                  />
                  <p className="font-semibold text-gray-800">
                    SIMON OSEMUWEHI
                  </p>
                  <p className="text-sm">
                    For going above and beyond to support both clients and
                    colleagues.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                We are so proud of you all — thank you for being such an
                important part of the Living Glory family. 💜
              </p>
            </motion.div>
          </div>
        </section>

        {/* NEW SECTION: Quiz Time */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#f0faff]">
          <div className="max-w-6xl mx-auto text-base md:text-lg text-gray-800 leading-relaxed">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-4"
            >
              Quiz Time! 🧠✨
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="bg-white border-l-4 border-pink-300 shadow p-6 rounded-md space-y-4"
            >
              <p className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-[#fff8eb] text-[#6818A5] mb-2">
                Your chance to learn, reflect &amp; win!
              </p>
              <h3 className="text-xl font-semibold text-gray-800">
                Quiz Question
              </h3>
              <p className="mb-2">
                Why is whistleblowing important in a care environment, and how
                does it benefit both Carers and those they care for or support?
              </p>
              <p className="mb-2">
                Please answer in not more than <strong>100 words</strong> and
                send your response to{" "}
                <strong>osaretin.alile@livingglorysocialcare.com</strong> on or
                before <strong>30th November 2025</strong> for a prize.
              </p>
              <p className="mb-1 font-semibold">How to take part:</p>
              <ul className="list-disc list-inside space-y-1">
                <li>Think about your answer.</li>
                <li>Write it in 100 words or less.</li>
                <li>
                  Email it to{" "}
                  <strong>osaretin.alile@livingglorysocialcare.com</strong>.
                </li>
              </ul>
              <p className="mt-2">
                Good luck, and thank you for taking part! 🎉
              </p>
            </motion.div>
          </div>
        </section>

        {/* SECTION 4: Winter Coffee Morning */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#fff8eb]">
          <div className="max-w-6xl mx-auto text-base md:text-lg text-gray-800 leading-relaxed">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Warm Up For Our Winter Coffee Morning
            </motion.h2>

            <div className="border-2 border-gray-300 p-6 rounded-md space-y-4">
              <h3 className="text-xl font-semibold">Winter Coffee Morning</h3>
              <p>
                After the huge success of our last gathering, we&apos;re back
                with a cosy <strong>Winter Coffee Morning</strong> on{" "}
                <strong>November 24th, 2025</strong>.
              </p>
              <p>
                Join us for hot drinks, sweet treats, and plenty of seasonal fun
                with your colleagues. There will be great vibes, music, and even
                some exciting games and quizzes to keep everyone energised!
              </p>
              <p>
                Further details will be shared soon — we can&apos;t wait to see
                you there.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Management Roles, Contact, Final Notes */}
        <section className="py-12 px-4 md:px-8 lg:px-16 bg-white">
          <div className="max-w-6xl mx-auto text-base md:text-lg text-gray-800 leading-relaxed">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-[#6818A5] mb-6"
            >
              Management Job Roles &amp; Contact Details
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
                  <p className="font-semibold text-gray-800">
                    General Enquiries:
                  </p>
                </div>
                <p className="ml-7 mb-4">
                  info@livingglorysocialcare.com
                </p>

                <p className="font-semibold mb-2">Reference Enquiries:</p>
                <p className="mb-6">referencing@livingglorysocialcare.com</p>

                <p className="font-semibold mb-2">Management Contacts:</p>
                <ul className="space-y-2">
                  <li>
                    Jessica Idele (Quality Improvement Manager / Field Care
                    Supervisor) &mdash; jessica.idele@livingglorysocialcare.com
                  </li>
                  <li>
                    Doyin Ogunmeru (Care Co-ordinator / Payroll Manager)
                    &mdash; doyin.ogmeru@livingglorysocialcare.com
                  </li>
                  <li>
                    Osaretin Alile (HR and Training Co-ordinator) &mdash;
                    osaretin.alile@livingglorysocialcare.com
                  </li>
                  <li>
                    Jennifer Odighbor (Care Monitoring and Invoicing Officer)
                    &mdash; jennifer.odighbor@livingglorysocialcare.com
                  </li>
                  <li>
                    Samuel Ekun (Staffing Co-Ordinator and Invoicing Officer)
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
                  Thank you for your continued hard work and commitment during
                  this winter season. Your dedication ensures that our clients
                  receive safe, compassionate, and high-quality care all year
                  round.
                </p>
                <p className="mb-4">
                  Remember, if you have any concerns or quality-related issues,
                  please contact the office or speak to the Quality Improvement
                  Manager. We are here to support you.
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
                    <strong>Telephone:</strong> 0121 679 6452 |{" "}
                    <strong>Email:</strong> info@livingglorysocialcare.com
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
