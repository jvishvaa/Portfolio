"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = ["all", "Web", "Mobile", "Full Stack"];

  const projects = [
    {
      id: 1,
      title: "Enterprise CRM System",
      category: "Full Stack",
      date: "AUG 2024",
      description:
        "Complete CRM solution with lead management, activity tracking, and advanced filtering for educational institutions serving 150K+ users.",
      image: "/CRM/crm3.png",
      tags: ["React", "Django", "PostgreSQL", "Tailwind CSS"],
    },
    {
      id: 2,
      title: "ERP System",
      category: "Web",
      date: "JUL 2023",
      description:
        "Responsive assessment module for enterprise B2B clients with dynamic UI and Bloom's taxonomy evaluation, improving efficiency by 40%.",
      image: "/ERP/erp.png",
      tags: ["React", "JavaScript", "Django", "Bootstrap"],
    },
    {
      id: 3,
      title: "Real-time Stock Dashboard",
      category: "Full Stack",
      date: "JAN 2025",
      description:
        "End-to-end portfolio dashboard tracking live CMP, P/L, and sector-wise performance for 20+ stocks with auto-refresh and caching.",
      image: "/stock_update/stock_update.png",
      tags: ["React", "Next JS", "TypeScript", "Node JS"],
    },
    {
      id: 4,
      title: "Shopping Seller App",
      category: "Mobile",
      date: "APR 2021",
      description:
        "React Native seller-side app with interactive UI and seamless REST API integration for shopping platform.",
      image: "/OSA/OSA5.jpg",
      tags: ["React Native", "Express JS", "Android studio", "Start-up"],
    },
    {
      id: 5,
      title: "Crowdsourced transportation App",
      category: "Mobile",
      date: "FEB 2021",
      description:
        "Public transportation platform built with React featuring Google Directions API for route optimization and Google Places autocomplete. Integrated with Google Cloud Platform for comprehensive Maps and Search functionality across all device sizes.",
      image: "/whenbus/Whenbus1.jpg",
      tags: ["React", "Google Maps API", "GCP", "Figma"],
    },
    {
      id: 6,
      title: "Driver assistance application",
      category: "Mobile",
      date: "JAN 2021",
      description:
        "Logistics routing application with real-time vehicle tracking and driver location monitoring. Developed secure authentication system with dynamic data flow and interactive map views for fleet management.",
      image: "/Fleet/Fleet6.png",
      tags: ["React", "Authentication", "Real-time Maps", "Fleet Tracking"],
    },
    {
      id: 7,
      title: "Eduvisory",
      category: "Web",
      date: "NOV 2020",
      description:
        "Educational assistance platform serving students in 20+ countries. Built with React JS using Ant Design and Material UI for responsive navigation. Implemented secure authentication with Express JS and MongoDB, plus interactive forum for managing queries and responses.",
      image: "/eduvisory/edu1.png",
      tags: [
        "React JS",
        "Express JS",
        "MongoDB",
        "Material UI",
        "Start-up",
        "Ant Design",
      ],
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden"
    >
      <div className="container-custom max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of impactful engineering projects shaping web ecosystem
            frameworks.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 ${
                activeFilter === filter
                  ? "bg-accent text-white shadow-md shadow-accent/20"
                  : "bg-white border border-gray-100 text-gray-600 hover:bg-gray-50 hover:border-gray-200"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        {/* Projects Grid with AnimatePresence */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 350, damping: 28 }}
                key={project.id}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-gray-200/80 transition-all duration-300 flex flex-col h-full"
              >
                {/* Media Wrapper */}
                <div className="relative aspect-video w-full overflow-hidden bg-gray-50 border-b border-gray-50">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Subtle Top Category Badge Overlay */}
                  <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md border border-gray-100 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm">
                    {project.category}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    <div className="text-xs font-bold text-accent tracking-wider uppercase mb-1.5 opacity-80">
                      {project.date}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 tracking-tight mb-2.5 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>
                  </div>

                  {/* Built-with tags stack */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-semibold text-gray-500 bg-gray-50 border border-gray-100/60 px-2 py-1 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
