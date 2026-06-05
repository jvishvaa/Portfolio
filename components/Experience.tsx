"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const experiences = [
    {
      id: "k12",
      company: "K12 Techno Services",
      role: "Software Development Engineer - 1",
      period: "Jun 2023 – Aug 2024",
      description:
        "Led full-stack development for an ERP system serving 150,000+ users with 12k+ daily active users, focusing on React, Django, PostgreSQL, and enterprise-scale solutions.",
      achievements: [
        "Built responsive auto-assessment module with React & Bloom's-taxonomy-based evaluations, improving efficiency by 40%",
        "Implemented branch-wise content versioning, improving content management by 20% for multiple school branches",
        "Developed domain management dashboard with real-time status tracking & monitoring APIs for 100+ domains",
        "Enhanced user management system with multi-designation support, streamlining workflows for 150,000+ users",
        "Refactored legacy CRM backend models, cutting API response time by 33% (from ~60s to ~40s)",
      ],
      logo: "🏫",
    },
    {
      id: "ylurn",
      company: "Ylurn Technology",
      role: "Mobile App Developer (Intern)",
      period: "Feb 2021 – Apr 2021",
      description:
        "Developed seller-side mobile application for a shopping platform using React Native, Express JS, and modern mobile development practices.",
      achievements: [
        "Built seller app with React Native and JavaScript for seamless shopping platform experience",
        "Designed interactive, responsive UI with one-way data flow architecture",
        "Integrated REST APIs with Axios for efficient data management and HTTP requests",
      ],
      logo: "📱",
    },
    {
      id: "eduvisory",
      company: "Eduvisory",
      role: "Web Developer (Intern)",
      period: "Jun 2020 – Dec 2020",
      description:
        "Created web platform to assist students in 20+ countries with responsive design and full-stack implementation using React JS, Express JS, and MongoDB.",
      achievements: [
        "Built Eduvisory website with React JS, serving students across 20+ countries",
        "Implemented responsive UI using Ant Design and Material UI for seamless navigation",
        "Developed login authentication with Express JS and MongoDB",
        "Created forum system to manage user queries and responses efficiently",
      ],
      logo: "🎓",
    },
  ];

  // Initialize with the most recent experience item open by default
  const [expandedId, setExpandedId] = useState<string | null>("k12");

  return (
    <section
      id="experience"
      className="py-20 bg-gray-50/50 relative overflow-hidden"
    >
      <div className="container-custom max-w-5xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through engineering teams, delivering enterprise features
            and high-scale user architectures.
          </p>
        </motion.div>

        {/* Timeline Core Track */}
        <div className="relative max-w-4xl mx-auto pl-4 md:pl-8 border-l-2 border-gray-200/80 space-y-10">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative group"
              >
                {/* Custom Dynamic Bullet Tracker Node */}
                <div className="absolute -left-[25px] md:-left-[41px] top-6 z-10 transition-transform duration-300 group-hover:scale-110">
                  <div
                    className={`w-4 h-4 md:w-5 md:h-5 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? "bg-accent border-accent shadow-md shadow-accent/40 scale-110"
                        : "bg-white border-gray-300 group-hover:border-accent"
                    }`}
                  />
                </div>

                {/* Experience Accordion Wrapper Card */}
                <div
                  onClick={() => setExpandedId(isExpanded ? null : exp.id)}
                  className={`bg-white rounded-2xl border transition-all duration-300 cursor-pointer p-6 md:p-8 select-none ${
                    isExpanded
                      ? "shadow-xl shadow-gray-200/50 border-accent/20 ring-1 ring-accent/5"
                      : "shadow-sm border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-gray-50 border border-gray-100 rounded-xl flex items-center justify-center text-2.5xl flex-shrink-0 shadow-sm">
                        {exp.logo}
                      </div>
                      <div>
                        <h3 className="font-display text-xl md:text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold text-sm md:text-base mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between md:justify-end gap-3 border-t md:border-0 pt-3 md:pt-0 border-gray-50">
                      <span className="text-xs md:text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-lg">
                        {exp.period}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 200,
                          damping: 20,
                        }}
                        className="text-gray-400 w-8 h-8 rounded-full bg-gray-50 md:flex items-center justify-center hidden"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </motion.div>
                    </div>
                  </div>

                  {/* Primary Summary block visibility */}
                  {!isExpanded && (
                    <p className="text-gray-500 text-sm mt-4 line-clamp-1 transition-all">
                      {exp.description}
                    </p>
                  )}

                  {/* Expandable Structural Container */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 mt-6 border-t border-gray-100 space-y-5">
                          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="text-xs font-bold text-gray-400 tracking-wider uppercase">
                              Key Outcomes & Metrics
                            </h4>
                            <ul className="space-y-3">
                              {exp.achievements.map((achievement, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm md:text-base text-gray-700"
                                >
                                  <svg
                                    className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2.5}
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                  <span>{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
