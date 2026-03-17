"use client";

export default function Experience() {
  const experiences = [
    {
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

  return (
    <section id="experience" className="py-20 gradient-mesh">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="section-title">Work Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A journey through innovative companies, creating impactful user
            experiences
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className="card p-8 md:p-10 hover-lift animate-slide-up relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Timeline Line */}
                {index !== experiences.length - 1 && (
                  <div className="hidden md:block absolute left-16 top-full w-0.5 h-8 bg-gradient-to-b from-accent to-purple-600 opacity-30"></div>
                )}

                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-accent/10 to-purple-600/10 rounded-2xl flex items-center justify-center text-4xl hover:scale-110 transition-transform">
                      {exp.logo}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-bold text-primary mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-accent font-semibold text-lg">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0">
                        <span className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <p className="font-semibold text-gray-700 text-sm uppercase tracking-wide">
                        Key Achievements
                      </p>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <svg
                              className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
