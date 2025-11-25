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
    <footer className="bg-gradient-to-r from-[#6818A5] to-[#8B2FC9] text-white pt-10 pb-4 mt-8">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Top: 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Get in touch */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              GET IN TOUCH
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="mt-1 flex-shrink-0" />
                <span>
                  St George&apos;s Hub<br />
                  Great Hampton Row<br />
                  Birmingham, B19 3JG
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="flex-shrink-0" />
                <span>0121 679 6452</span>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="flex-shrink-0" />
                <span>info@livingglorysocialcare.com</span>
              </li>
            </ul>

            <div className="mt-4 text-xs text-purple-100/90 leading-relaxed">
              <p>
                <span className="font-semibold">CQC Provider ID:</span>{" "}
                1-232412428
              </p>
              <p>
                <span className="font-semibold">CQC Location ID:</span>{" "}
                1-494758312
              </p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">LINKS</h3>
            <nav>
              <ul className="space-y-2 text-sm">
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
            </nav>
          </div>

          {/* Column 3: Connect with us */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              CONNECT WITH US
            </h3>
            <p className="text-sm mb-3">
              Stay up to date with our latest news, opportunities and updates.
            </p>
            <div className="flex items-center gap-3 text-lg">
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Living Glory Social Care on Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Living Glory Social Care on Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="Living Glory Social Care on LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Column 4: Regulated By */}
          <div>
            <h3 className="text-lg font-semibold mb-4 tracking-wide">
              REGULATED BY
            </h3>
            <div className="flex flex-col items-start gap-4">
              <div className="bg-white/10 rounded-md px-3 py-2">
                <Image
                  src="/cqc-logo.jpg"
                  alt="Care Quality Commission"
                  width={90}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="bg-white/10 rounded-md px-3 py-2">
                <Image
                  src="/HomeCare.png"
                  alt="Homecare Association"
                  width={90}
                  height={40}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white border-opacity-20 pt-4 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm gap-3">
          <p className="text-center md:text-left">
            &copy; 2025 Living Glory Social Care. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-3">
            <Link href="/policies" className="hover:underline">
              Privacy Policy
            </Link>
            <span className="hidden sm:inline-block opacity-60">•</span>
            <Link href="/terms" className="hover:underline">
              Terms &amp; Conditions
            </Link>
            <span className="hidden sm:inline-block opacity-60">•</span>
            <Link href="/compliances" className="hover:underline">
              Compliances
            </Link>
            <span className="hidden sm:inline-block opacity-60">•</span>
            <Link href="/faqs" className="hover:underline">
              FAQs
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
