"use client";

import { motion } from "framer-motion";

export default function SkillsMarquee() {
  const skills = [
    {
      name: "React JS",
      logo: "/logos/react.png",
      brandColor: "rgba(97, 218, 251, 0.15)",
      borderColor: "#61dafb",
    },
    {
      name: "Next JS",
      logo: "/logos/Nextjs.png",
      brandColor: "rgba(0, 0, 0, 0.08)",
      borderColor: "#000000",
    },
    {
      name: "Django",
      logo: "/logos/django.png",
      brandColor: "rgba(9, 46, 32, 0.12)",
      borderColor: "#092e20",
    },
    {
      name: "PostgreSQL",
      logo: "/logos/postgresql.png",
      brandColor: "rgba(51, 103, 145, 0.15)",
      borderColor: "#336791",
    },
    {
      name: "Python",
      logo: "/logos/python.png",
      brandColor: "rgba(55, 115, 166, 0.15)",
      borderColor: "#3773a6",
    },
    {
      name: "JavaScript",
      logo: "/logos/javascript.png",
      brandColor: "rgba(247, 223, 30, 0.15)",
      borderColor: "#f7df1e",
    },
    {
      name: "TypeScript",
      logo: "/logos/typescript.png",
      brandColor: "rgba(49, 120, 198, 0.15)",
      borderColor: "#3178c6",
    },
    {
      name: "Node JS",
      logo: "/logos/nodejs.png",
      brandColor: "rgba(63, 142, 63, 0.15)",
      borderColor: "#3f8e3f",
    },
    {
      name: "REST APIs",
      logo: "/logos/restapi.png",
      brandColor: "rgba(0, 153, 255, 0.12)",
      borderColor: "#0099ff",
    },
    {
      name: "Bootstrap",
      logo: "/logos/bootstrap.png",
      brandColor: "rgba(121, 82, 179, 0.15)",
      borderColor: "#7952b3",
    },
    {
      name: "Material UI",
      logo: "/logos/materialui.jpg",
      brandColor: "rgba(0, 129, 203, 0.12)",
      borderColor: "#0081cb",
    },
    {
      name: "MySQL",
      logo: "/logos/mysql.png",
      brandColor: "rgba(0, 117, 143, 0.12)",
      borderColor: "#00758f",
    },
    {
      name: "Tailwind CSS",
      logo: "/logos/tailwind.png",
      brandColor: "rgba(6, 182, 212, 0.15)",
      borderColor: "#06b6d4",
    },
    {
      name: "Github",
      logo: "/logos/github.png",
      brandColor: "rgba(36, 41, 47, 0.1)",
      borderColor: "#24292f",
    },
    {
      name: "Gitlab",
      logo: "/logos/gitlab.jpg",
      brandColor: "rgba(226, 67, 41, 0.12)",
      borderColor: "#e24329",
    },
  ];

  const MarqueeTrack = ({ idPrefix }: { idPrefix: string }) => (
    <div className="flex items-center space-x-12 px-6 whitespace-nowrap">
      {skills.map((skill, index) => (
        <motion.div
          key={`${idPrefix}-${index}`}
          // High-performance color shift on hover
          whileHover={{
            scale: 1.08,
            y: -4,
            backgroundColor: skill.brandColor,
            borderColor: skill.borderColor,
          }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
          className="flex items-center space-x-3 bg-gray-50 border border-gray-100 rounded-2xl px-5 py-3 shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
        >
          <div className="w-8 h-8 flex items-center justify-center relative">
            <img
              src={skill.logo}
              alt={skill.name}
              className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <span className="text-gray-600 group-hover:text-slate-900 font-semibold text-sm md:text-base tracking-wide transition-colors">
            {skill.name}
          </span>
        </motion.div>
      ))}
    </div>
  );

  return (
    <section className="py-16 bg-white overflow-hidden relative">
      <div className="relative w-full max-w-7xl mx-auto">
        {/* Soft edge masks */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white via-white/70 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white via-white/70 to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex w-max"
          animate={{ x: [0, "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          <MarqueeTrack idPrefix="primary" />
          <MarqueeTrack idPrefix="duplicate" />
        </motion.div>
      </div>
    </section>
  );
}
