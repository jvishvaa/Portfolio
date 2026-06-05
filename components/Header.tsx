"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    const link = document.createElement("a");
    link.href = "/resume/Jayavishvaa_SDE1.pdf";
    link.download = "Jayavishvaa_SDE1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Variants for staggered mobile navigation items
  const menuContainerVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.05,
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
    exit: {
      opacity: 0,
      y: -15,
      transition: {
        staggerChildren: 0.03,
        staggerDirection: -1,
        duration: 0.2,
      },
    },
  };

  const menuItemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -10 },
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-10 h-10 bg-gradient-to-br from-accent to-purple-600 rounded-lg flex items-center justify-center relative overflow-hidden"
            >
              <span className="absolute text-white/30 group-hover:text-white/80 font-display font-bold text-2xl -rotate-12 transition-all duration-300">
                Y
              </span>
              <span className="text-white font-display font-bold text-2xl relative z-10">
                J
              </span>
            </motion.div>
            <span className="font-display font-bold text-xl text-primary hidden sm:block">
              Jayavishvaa J
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["about", "experience", "portfolio", "contact"].map((item) => (
              <motion.div key={item} whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
                <Link href={`#${item}`} className="nav-link capitalize">
                  {item}
                </Link>
              </motion.div>
            ))}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-50"
            aria-label="Toggle menu"
          >
            {/* Smooth transition for the hamburger icon lines */}
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

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="md:hidden mt-4 absolute top-full left-4 right-4 z-40"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-gray-100 p-6 space-y-4">
                {["about", "experience", "portfolio", "contact"].map((item) => (
                  <motion.div key={item} variants={menuItemVariants}>
                    <Link
                      href={`#${item}`}
                      className="block nav-link py-2 px-3 rounded-lg hover:bg-gray-50 transition capitalized"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </Link>
                  </motion.div>
                ))}

                <motion.div variants={menuItemVariants} className="pt-2">
                  <button
                    onClick={() => {
                      handleDownloadResume();
                      setIsMobileMenuOpen(false);
                    }}
                    className="btn-primary w-full flex items-center justify-center space-x-2"
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
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
