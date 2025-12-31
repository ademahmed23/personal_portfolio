"use client"; // Mark this as a Client Component
import Link from "next/link";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";
import { config } from "../constants/footer";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareUpwork } from "react-icons/fa6";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
  FaTelegram,
} from "react-icons/fa";

export default function Navbar() {
  const iconComponents = {
    github: FaGithub,
    linkedin: FaLinkedin,
    twitter: FaXTwitter,
    email: FaEnvelope,
    location: FaMapMarkerAlt,
    phone: FaPhone,
    youtube: FaYoutube,
    telegram: FaTelegram,
    upwork: FaSquareUpwork,
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { socialLinks } = config.footer;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background bg-opacity-90 backdrop-blur-md z-50">
      <div className="w-full bg-background mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo or Brand Name */}
        <Link href="/" className="text-2xl font-bold text-white">
          Adems Portfolio
        </Link>

        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/s"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            />
          </svg>
        </button>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link
                href={`#${link.id}`}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Mobile Menu (Sidebar) */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 transition-opacity duration-700 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu} // Close menu when clicking outside
      >
        <div
          className={`fixed top-0 left-0 h-screen w-3/4 max-w-sm bg-secondary bg-opacity-95 backdrop-blur-md transform transition-transform duration-700 ease-in-out px-3 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent clicks inside the sidebar from closing it
        >
          <div className="absolute top-4 left text-gray-300 text-xl focus:outline-none">
            Adems Portfolio
          </div>
          {/* Close Button */}
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/s"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-1 mt-16">
            {navLinks.map((link) => (
              <li key={link.id} className="border-t border-gray-400 pt-2 pb-1">
                <Link
                  href={`#${link.id}`}
                  className="text-gray-400 hover:text-white transition-colors duration-100 text-lg"
                  onClick={toggleMenu}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          {/* socila links */}
          <div className="mt-9 text-gray-300">
            <p className="text-primary">FIND ME WITH</p>
            <div className="flex mt-3 lg:mt-4 space-x-4">
              {socialLinks.map((link, index) => {
                const Icon =
                  iconComponents[link.icon as keyof typeof iconComponents];
                return (
                  <Link
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-200 bg-gray-700 hover:text-white transition-colors duration-300 rounded-full p-2"
                    aria-label={link.name}
                  >
                    <Icon className="w-4 h-4" />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
