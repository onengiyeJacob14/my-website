"use client";
import Link from "next/link";
import Image from "next/image";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] text-white pt-8 pb-4">
      <div className="max-w-6xl mx-auto px-4">
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Column 1: Get In Touch */}
          <div>
            <h3 className="text-xl font-semibold mb-4">GET IN TOUCH</h3>
            <div className="flex items-start mb-2">
              <FaMapMarkerAlt className="text-white mr-2 mt-1" />
              {/* Clickable address linking to Google Maps */}
              <a
                href="https://maps.google.com?q=St%20George%27s%20Hub%20Great%20Hampton%20Row%20B19%203JG"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                St George&apos;s Hub Great Hampton Row, B19 3JG
              </a>
            </div>
            <div className="flex items-center mb-2">
              <FaPhone className="text-white mr-2" />
              <p>0121 679 6452</p>
            </div>
            <div className="flex items-center">
              <FaEnvelope className="text-white mr-2" />
              <p>info@livingglorysocialcare.com</p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">LINKS</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:underline">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:underline">
                  Join Us
                </Link>
              </li>
              <li>
                <Link href="/partnerships" className="hover:underline">
                  Partnerships
                </Link>
              </li>
              <li>
                <Link href="/news-updates" className="hover:underline">
                  News
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:underline">
                  Our People
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Connect With Us */}
          <div>
            <h3 className="text-xl font-semibold mb-4">CONNECT WITH US</h3>
            <div className="flex items-center mb-2">
              <FaPhone className="text-white mr-2" />
              <p>Call: 0121 679 6452</p>
            </div>
            <div className="flex items-center mb-2">
              <FaEnvelope className="text-white mr-2" />
              <p>info@livingglorysocialcare.com</p>
            </div>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-75"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 4: Regulated By */}
          <div>
            <h3 className="text-xl font-semibold mb-4">REGULATED BY</h3>
            <div className="flex items-center space-x-4 mb-2">
              {/* Example CQC Logo */}
              <Image
                src="/cqc-logo.jpg"
                alt="Care Quality Commission"
                width={80}
                height={100}
                className="object-cover"
              />
              {/* Another Example Logo */}
              <Image
                src="/ciw-logo.png"
                alt="Home Care Assosiation"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Bottom Section: Privacy Policy, etc. */}
        <div className="border-t border-white border-opacity-20 pt-4 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="mb-2 md:mb-0">
            &copy; 2025 Living Glory Social Care. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <Link href="/policies" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:underline">
              Terms &amp; Conditions
            </Link>
            <Link href="/compliances" className="hover:underline">
              Compliances
            </Link>
            <Link href="/faqs" className="hover:underline">
              Faqs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
