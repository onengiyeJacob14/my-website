// src/components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    // Sticky header, fixed height, more visible border
    <header className="sticky top-0 z-50 bg-white border-b-2 border-gray-500 shadow-sm h-12 p-0 flex items-center">
      {/* Main container for logo & nav */}
      <div className="flex items-center justify-between w-full px-4">
        {/* Smaller logo to reduce overall header height */}
        <Link href="/">
          <Image
            src="/livingglory-logo-c.png"
            alt="Living Glory Social Care Logo"
            width={80}  // Reduced width
            height={30} // Reduced height
            priority
          />
        </Link>

        {/* Navigation Menu */}
        <nav>
          <ul className="flex space-x-6 font-medium text-gray-700">
            <li>
              <Link
                href="/"
                className="px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#6818A5] hover:text-white"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#6818A5] hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#6818A5] hover:text-white"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/careers"
                className="px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#6818A5] hover:text-white"
              >
                Careers
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#6818A5] hover:text-white"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
