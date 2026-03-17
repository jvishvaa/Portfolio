"use client";

export default function MarqueeMessage() {
  return (
    <div className="w-full bg-black py-2 overflow-hidden">
      <div className="marquee-container">
        <div className="marquee-content">
          <span className="marquee-item">
            🚀 Available for new opportunities • Full-stack developer with 14+
            months experience
          </span>
          <span className="marquee-item">
            💼 Specialized in React, Next.js, Django & PostgreSQL
          </span>
          <span className="marquee-item">
            ⭐ Serving 12k+ daily users • Built enterprise solutions
          </span>
          <span className="marquee-item">
            📧 jvishvaa03@gmail.com • Open to work
          </span>
        </div>
        {/* Duplicate for seamless loop */}
        <div className="marquee-content" aria-hidden="true">
          <span className="marquee-item">
            🚀 Available for new opportunities • Full-stack developer with 14+
            months experience
          </span>
          <span className="marquee-item">
            💼 Specialized in React, Next.js, Django & PostgreSQL
          </span>
          <span className="marquee-item">
            ⭐ Serving 12k+ daily users • Built enterprise solutions
          </span>
          <span className="marquee-item">
            📧 jvishvaa03@gmail.com • Open to work
          </span>
        </div>
      </div>
    </div>
  );
}
