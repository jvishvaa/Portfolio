"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle Resume Download
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement("a");
    link.href = "/resume/Jayavishvaa.pdf"; // Path to your resume in public folder
    link.download = "Jayavishvaa_J_Resume.pdf"; // Downloaded file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-accent to-purple-600 rounded-lg flex items-center justify-center relative overflow-hidden group">
              {/* Hidden Y - becomes more visible on hover */}
              <span className="absolute text-white/30 group-hover:text-white/80 font-display font-bold text-2xl -rotate-12 transition-all duration-300">
                Y
              </span>
              {/* Dominant J */}
              <span className="text-white font-display font-bold text-2xl relative z-10">
                J
              </span>
            </div>
            <span className="font-display font-bold text-xl text-primary hidden sm:block">
              Jayavishvaa J
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#experience" className="nav-link">
              Experience
            </Link>
            <Link href="#portfolio" className="nav-link">
              Portfolio
            </Link>
            <Link href="#contact" className="nav-link">
              Contact
            </Link>
            <button
              onClick={handleDownloadResume}
              className="btn-primary flex items-center space-x-2"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 animate-slide-up">
            <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-xl border border-gray-200 p-6 space-y-4">
              <Link
                href="#about"
                className="block nav-link py-2 px-3 rounded-lg hover:bg-gray-100 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>

              <Link
                href="#experience"
                className="block nav-link py-2 px-3 rounded-lg hover:bg-gray-100 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Experience
              </Link>

              <Link
                href="#portfolio"
                className="block nav-link py-2 px-3 rounded-lg hover:bg-gray-100 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfolio
              </Link>

              <Link
                href="#contact"
                className="block nav-link py-2 px-3 rounded-lg hover:bg-gray-100 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>

              <button
                onClick={() => {
                  handleDownloadResume();
                  setIsMobileMenuOpen(false);
                }}
                className="btn-primary w-full flex items-center justify-center space-x-2 mt-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Download Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
