"use client";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AccessibilityWidget from "../../components/AccessibilityWidget";
import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow py-12 px-4 md:px-8 lg:px-16 text-gray-700">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {/* Page Heading */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#6818A5] mb-4">
            Terms and Conditions
          </h1>
          <p className="text-sm text-gray-500">
            Last Updated: March 2025
          </p>

          <p>
            Welcome to the website of Living Glory Social Care. By accessing and using our
            website, you agree to comply with the following Terms and Conditions. If you do not
            agree, please do not use this website.
          </p>

          {/* 1. About Us */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              1. About Us
            </h2>
            <p>
              Living Glory Social Care is a domiciliary care agency providing high-quality care
              services to individuals in need of personal support and assistance at home within
              the West Midlands.
            </p>
          </section>

          {/* 2. Use of the Website */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              2. Use of the Website
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                This website is for informational purposes only and does not constitute
                professional advice.
              </li>
              <li>
                You agree to use this website only for lawful purposes and in a way that does not
                infringe the rights of others or restrict their use of the site.
              </li>
              <li>
                We reserve the right to modify or remove any part of this website without prior
                notice.
              </li>
            </ul>
          </section>

          {/* 3. Privacy and Data Protection */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              3. Privacy and Data Protection
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                We are committed to protecting your privacy and handling your personal data
                responsibly. Please refer to our Privacy Policy for details on how we collect,
                use, and protect your information.
              </li>
              <li>
                By using this website, you consent to the collection and use of your data as
                outlined in our Privacy Policy.
              </li>
            </ul>
          </section>

          {/* 4. Services Disclaimer */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              4. Services Disclaimer
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                The information on this website is intended for general guidance and does not
                replace professional health or social care advice.
              </li>
              <li>
                Living Glory Social Care does not guarantee that the services described on this
                site will be suitable for every individual. We recommend discussing your specific
                care needs with our team.
              </li>
            </ul>
          </section>

          {/* 5. Intellectual Property */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              5. Intellectual Property
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                All content on this website, including text, images, logos, and graphics, is the
                property of Living Glory Social Care unless otherwise stated.
              </li>
              <li>
                You may not copy, distribute, or use any content from this website without our
                prior written permission.
              </li>
            </ul>
          </section>

          {/* 6. External Links */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              6. External Links
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                This website may contain links to external sites. We are not responsible for the
                content or privacy policies of those sites.
              </li>
              <li>
                The inclusion of any external link does not imply our endorsement of the website
                or its content.
              </li>
            </ul>
          </section>

          {/* 7. Limitation of Liability */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              7. Limitation of Liability
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Living Glory Social Care is not liable for any direct, indirect, incidental, or
                consequential damages resulting from the use or inability to use this website.
              </li>
              <li>
                We do not warrant that the website will always be available, error-free, or free
                of viruses.
              </li>
            </ul>
          </section>

          {/* 8. Changes to Terms and Conditions */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              8. Changes to Terms and Conditions
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                We reserve the right to update or modify these Terms and Conditions at any time
                without prior notice.
              </li>
              <li>
                Your continued use of the website after changes are made constitutes acceptance of
                the updated terms.
              </li>
            </ul>
          </section>

          {/* 9. Governing Law */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              9. Governing Law
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                These Terms and Conditions are governed by and construed in accordance with the
                laws of England and Wales.
              </li>
              <li>
                Any disputes arising from the use of this website shall be subject to the exclusive
                jurisdiction of the courts of England and Wales.
              </li>
            </ul>
          </section>

          {/* 10. Contact Us */}
          <section className="space-y-2">
            <h2 className="text-xl font-semibold text-[#6818A5]">
              10. Contact Us
            </h2>
            <p>
              If you have any questions about these Terms and Conditions, please contact us at:
            </p>
            <address className="not-italic">
              <strong>Living Glory Social Care</strong> <br />
              St George&apos;s Community Hub, Great Hampton Row, Birmingham, B19 3JG <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@livingglorysocialcare.com"
                className="underline text-[#6818A5] hover:text-[#8B2FC9]"
              >
                info@livingglorysocialcare.com
              </a>
              <br />
              <strong>Phone:</strong> 0121 679 6452
            </address>
          </section>

          <p>
            By using this website, you acknowledge that you have read, understood, and agreed to
            these Terms and Conditions.
          </p>
        </motion.div>
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
}
