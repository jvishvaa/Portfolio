"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsCircles() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      number: "2+",
      label: "Years of Experience",
      delay: "0s",
    },
    {
      number: "12k+",
      label: "Daily Users Served",
      delay: "0.2s",
    },
    {
      number: "10+",
      label: "Projects Completed",
      delay: "0.4s",
    },
    {
      number: "3",
      label: "Companies Worked",
      delay: "0.6s",
    },
    {
      number: "100%",
      label: "Client Satisfaction",
      delay: "0.8s",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="container-custom">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="section-title">Impact & Achievements</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Circles Container */}
        <div className="stats-circles-grid">
          {stats.map((stat, index) => (
            <div key={index} className="stat-circle-wrapper">
              <div
                className={`stat-circle ${isVisible ? "stat-circle-visible stat-circle-bounce" : ""}`}
              >
                <div className="stat-circle-inner">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
