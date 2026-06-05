"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // High-performance scroll tracking tied natively to Framer Motion
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Maps scroll progress smoothly from 0% to 100% height
  const scaleY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const highlights = [
    {
      title: "Full-Stack Development",
      description:
        "Specialized in building end-to-end solutions using React, Next.js for frontend and Django, PostgreSQL for backend. Creating scalable applications that serve thousands of users daily.",
    },
    {
      title: "Enterprise Solutions",
      description:
        "Experienced in developing ERP systems and enterprise applications for educational institutions. Built features serving 150,000+ users with focus on performance and reliability.",
    },
    {
      title: "Mobile Development",
      description:
        "Proficient in React Native for cross-platform mobile applications. Created seller-side apps with seamless API integration and responsive UI for optimal user experience.",
    },
    {
      title: "Performance Optimization",
      description:
        "Track record of improving system efficiency by 40% and reducing API response times by 33%. Passionate about writing clean, optimized code that scales.",
    },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Sticky content containing summary */}
          <div className="lg:sticky lg:top-32 lg:self-start relative">
            {/* Dynamic Scroll Progress Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-100 rounded-full hidden lg:block">
              <motion.div
                className="bg-gradient-to-b from-accent to-purple-600 rounded-full origin-top h-full"
                style={{ scaleY }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-6 ml-0 lg:ml-10"
            >
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Who I Am
                </span>
                <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mt-4 mb-6">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 rounded-full"></div>
              </div>

              <p className="text-lg text-gray-700 leading-relaxed">
                Software Development Engineer with over 2+ years of experience
                in full-stack development. I specialize in building responsive
                and intuitive UIs with React for websites, React Native for
                mobile applications, creating models & APIs using Django for
                back-end, and managing databases with PostgreSQL.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Having worked with{" "}
                <span className="font-semibold text-accent">
                  K12 Techno Services
                </span>
                ,{" "}
                <span className="font-semibold text-accent">
                  Ylurn Technology
                </span>
                , and{" "}
                <span className="font-semibold text-accent">Eduvisory</span>, I
                have a strong record in designing and optimizing software
                systems for platforms serving{" "}
                <span className="font-semibold text-accent">
                  12k+ daily users
                </span>
                .
              </p>
            </motion.div>
          </div>

          {/* Right Side - Cascading Scrolling Experience Cards */}
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="bg-gray-50 rounded-3xl p-8 md:p-10 border border-transparent hover:border-accent/10 hover:bg-white hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <h3 className="font-display text-3xl font-bold text-[#016493] mb-4 transition-colors group-hover:text-accent">
                  {highlight.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}

            {/* Bottom CTA Highlight Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
              className="bg-gradient-to-br from-accent to-purple-600 rounded-3xl p-8 md:p-10 text-white shadow-lg"
            >
              <h3 className="font-display text-3xl font-bold mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                I'm passionate about creating software that makes a difference.
                Whether it's optimizing performance, building new features, or
                solving complex problems, I'm always ready for the next
                challenge.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-accent px-8 py-3 rounded-lg font-semibold shadow-md transition-shadow hover:shadow-xl"
              >
                <Link href="#contact">Get In Touch</Link>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
