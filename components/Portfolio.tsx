"use client";

import { useState } from "react";

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
    // {
    //   id: 3,
    //   title: "AI Movie Recommendations",
    //   category: "Full Stack",
    //   date: "DEC 2024",
    //   description:
    //     "Movie recommendation engine using semantic embeddings to deliver personalized results from 1K+ movies with FastAPI backend.",
    //   image: "/api/placeholder/600/400",
    //   tags: ["React", "JavaScript", "FastAPI", "Python"],
    // },
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
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Featured Work</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A selection of impactful projects that shaped user experiences
          </p>
        </div>

        {/* Filters */}
        <div
          className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-accent text-white shadow-lg scale-105"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="portfolio-card-container"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              <div className="portfolio-card group">
                {/* Image Container */}
                <div className="portfolio-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="portfolio-image"
                  />

                  {/* Tags Overlay - Top Left */}
                  <div className="portfolio-tags">
                    {project.tags.slice(0, 6).map((tag, idx) => (
                      <span key={idx} className="portfolio-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Info Section */}
                <div className="portfolio-info">
                  {/* Date */}
                  <div className="portfolio-date">{project.date}</div>

                  {/* Title */}
                  <h3 className="portfolio-title">{project.title}</h3>

                  {/* Description - Shows on Hover */}
                  <p className="portfolio-description">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
