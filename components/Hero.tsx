"use client";

import Link from "next/link";

export default function Hero() {
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
    <section className="hero-section">
      {/* Diagonal Split Background */}
      <div className="absolute inset-0">
        {/* Left Side - Light Gray */}
        <div className="absolute inset-0 bg-gray-100"></div>

        {/* Right Side - Dark with Diagonal Cut */}
        <div className="diagonal-split absolute inset-0 bg-primary"></div>
      </div>

      <div className="container-custom relative z-10 h-full">
        <div className="hero-grid">
          {/* Left Column - Text Content */}
          <div className="hero-content">
            {/* Small Intro */}
            <p className="hero-intro">Hi, I am</p>

            {/* Name - Large */}
            <h1 className="hero-name">Jayavishvaa J</h1>

            {/* Role */}
            <h2 className="hero-role">Software Development Engineer - 1</h2>

            {/* Description - Mobile Only */}
            <p className="hero-description">
              Full-stack developer with 14+ months of experience specializing in
              React, React Native, Django & PostgreSQL.
            </p>

            {/* Location & Experience */}
            <div className="hero-badges">
              <div className="hero-badge">
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
              <div className="hero-badge">
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
                  14+ Months Exp
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="hero-social">
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jvishvaa03@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Jayavishvaa,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss..."
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-hero"
                aria-label="Email"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>

              <a
                href="https://github.com/jvishvaa"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-hero"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/jayavishvaa-j-b342b51a3/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-hero"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5 md:w-6 md:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta">
              <button
                className="btn-primary text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3"
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>
              <button className="btn-outline text-sm md:text-base px-5 md:px-6 py-2.5 md:py-3">
                <Link
                  href="#portfolio"
                  // className="block nav-link py-2"
                >
                  View Projects
                </Link>
              </button>
            </div>
          </div>

          {/* Right Column - Profile Photo */}
          <div className="hero-image-column">
            <div className="hero-image-container">
              <img
                src="/Portifolio_cover.png"
                alt="Jayavishvaa J"
                className="hero-profile-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on Mobile */}
      <div className="hero-scroll-indicator">
        <svg
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
        </svg>
      </div>
    </section>
  );
}
