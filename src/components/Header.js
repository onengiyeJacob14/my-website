"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top bar */}
      <div className="flex items-center justify-between w-full px-4 h-14 md:h-16">
        {/* Logo */}
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/livingglory-logo-c.png"
            alt="Living Glory Social Care Logo"
            width={90}
            height={70}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 font-medium text-gray-700">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-3 py-1 rounded-full transition-colors duration-300 hover:bg-[#6818A5] hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-800 p-2 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-200 bg-white">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 text-gray-800 hover:bg-[#6818A5] hover:text-white transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
