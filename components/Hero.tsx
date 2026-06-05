"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  // Handle Resume Download
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/resume/Jayavishvaa_SDE1.pdf";
    link.download = "Jayavishvaa_SDE1.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Parent animation variants for staggered elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.2,
      },
    },
  };

  // Individual item transitions
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 90, damping: 14 },
    },
  };

  return (
    <section className="hero-section relative overflow-hidden">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0 z-0">
        {/* Left Side - Light Gray */}
        <div className="absolute inset-0 bg-gray-100"></div>

        {/* Right Side - Dark with Diagonal Cut */}
        <motion.div
          initial={{
            opacity: 0,
            clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
          }}
          animate={{
            opacity: 1,
            clipPath: "polygon(100% 0, 35% 0, 65% 100%, 100% 100%)",
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="diagonal-split absolute inset-0 bg-primary"
        ></motion.div>
      </div>

      <div className="container-custom relative z-10 h-full">
        <div className="hero-grid grid md:grid-cols-2 items-center h-full gap-8 py-20">
          {/* Left Column - Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="hero-content flex flex-col justify-center"
          >
            {/* Small Intro */}
            <motion.p
              variants={itemVariants}
              className="hero-intro text-accent font-semibold tracking-wide"
            >
              Hi, I am
            </motion.p>

            {/* Name - Large */}
            <motion.h1
              variants={itemVariants}
              className="hero-name font-display font-bold text-4xl md:text-6xl text-primary mb-2"
            >
              Jayavishvaa J
            </motion.h1>

            {/* Role */}
            <motion.h2
              variants={itemVariants}
              className="hero-role text-xl md:text-2xl text-gray-600 font-medium mb-4"
            >
              Software Development Engineer - 1
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="hero-description text-gray-500 max-w-md mb-6 leading-relaxed"
            >
              Full-stack developer with 2+ years of experience specializing in
              React, React Native, Django & PostgreSQL.
            </motion.p>

            {/* Location & Experience */}
            <motion.div
              variants={itemVariants}
              className="hero-badges flex flex-wrap gap-4 mb-8"
            >
              <div className="hero-badge flex items-center space-x-2 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-2 rounded-full">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-600 font-medium text-sm md:text-base">
                  Bangalore, India
                </span>
              </div>
              <div className="hero-badge flex items-center space-x-2 bg-white/80 backdrop-blur-sm shadow-sm px-4 py-2 rounded-full">
                <svg
                  className="w-5 h-5 text-accent flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span className="text-gray-600 font-medium text-sm md:text-base">
                  2+ years Exp
                </span>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="hero-social flex items-center space-x-4 mb-8"
            >
              {[
                {
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=jvishvaa03@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Jayavishvaa,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...",
                  label: "Email",
                  icon: (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  ),
                },
                {
                  href: "https://github.com/jvishvaa",
                  label: "GitHub",
                  icon: (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      />
                    </svg>
                  ),
                },
                {
                  href: "https://www.linkedin.com/in/jayavishvaa-j-b342b51a3/",
                  label: "LinkedIn",
                  icon: (
                    <svg
                      className="w-5 h-5 md:w-6 md:h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  ),
                },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-hero text-gray-600 hover:text-accent transition-colors"
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="hero-cta flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 shadow-lg"
                onClick={handleDownloadResume}
              >
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3 bg-white/50 backdrop-blur-sm"
              >
                <Link href="#portfolio">View Projects</Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Photo */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            className="hero-image-column flex justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="hero-image-container relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-sm md:max-w-md"
            >
              <img
                src="/Portifolio_cover.png"
                alt="Jayavishvaa J"
                className="hero-profile-image w-full h-auto object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="hero-scroll-indicator hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.svg
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-6 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </motion.svg>
      </motion.div>
    </section>
  );
}
