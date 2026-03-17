"use client";

export default function SkillsMarquee() {
  const skills = [
    { name: "React JS", logo: "/logos/react.png" },
    { name: "Next JS", logo: "/logos/Nextjs.png" },
    { name: "Django", logo: "/logos/django.png" },
    { name: "PostgreSQL", logo: "/logos/postgresql.png" },
    { name: "Python", logo: "/logos/python.png" },
    { name: "JavaScript", logo: "/logos/javascript.png" },
    { name: "TypeScript", logo: "/logos/typescript.png" },
    { name: "Node JS", logo: "/logos/nodejs.png" },
    { name: "REST APIs", logo: "/logos/restapi.png" },
    { name: "Bootstrap", logo: "/logos/bootstrap.png" },
    { name: "Material UI", logo: "/logos/materialui.jpg" },
    { name: "MySQL", logo: "/logos/mysql.png" },
    { name: "Tailwind CSS", logo: "/logos/tailwind.png" },
    { name: "Github", logo: "/logos/github.png" },
    { name: "Gitlab", logo: "/logos/gitlab.jpg" },
  ];

  return (
    <section
      className="py-16 overflow-hidden"
      style={{ backgroundColor: "#ffffff" }}
    >
      {/* Marquee Container */}
      <div className="relative" style={{ backgroundColor: "#ffffff" }}>
        {/* Gradient Overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling Logos */}
        <div
          className="skills-marquee-wrapper"
          style={{ backgroundColor: "#ffffff" }}
        >
          <div
            className="skills-marquee-content"
            style={{ backgroundColor: "#ffffff" }}
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="skill-logo-only"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="logo-image"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            ))}
          </div>

          {/* Duplicate for seamless loop */}
          <div
            className="skills-marquee-content"
            aria-hidden="true"
            style={{ backgroundColor: "#ffffff" }}
          >
            {skills.map((skill, index) => (
              <div
                key={`dup-${index}`}
                className="skill-logo-only"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  className="logo-image"
                  style={{ backgroundColor: "transparent" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
