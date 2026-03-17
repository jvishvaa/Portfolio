"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function About() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const section = sectionRef.current;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        const scrollStart = sectionTop - windowHeight / 2;
        const scrollEnd = sectionTop + sectionHeight - windowHeight / 2;

        if (scrollY > scrollStart && scrollY < scrollEnd) {
          const progress =
            ((scrollY - scrollStart) / (scrollEnd - scrollStart)) * 100;
          setScrollProgress(Math.min(Math.max(progress, 0), 100));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <section id="about" ref={sectionRef} className="py-20 bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Side - Sticky */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            {/* Progress Line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gray-200 rounded-full hidden lg:block">
              <div
                className="bg-gradient-to-b from-accent to-purple-600 rounded-full transition-all duration-300"
                style={{ height: `${scrollProgress}%` }}
              ></div>
            </div>
            <div className="space-y-6 animate-slide-up ml-10">
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
                Software Development Engineer with over 14 months of experience
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
            </div>
          </div>

          {/* Right Side - Scrolling Content */}
          <div className="space-y-12">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="scroll-highlight-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-gray-50 rounded-3xl p-8 md:p-10 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-accent/20">
                  <h3 className="font-display text-3xl font-bold text-[#016493] mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Bottom CTA Card */}
            <div className="bg-gradient-to-br from-accent to-purple-600 rounded-3xl p-8 md:p-10 text-white">
              <h3 className="font-display text-3xl font-bold mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                I'm passionate about creating software that makes a difference.
                Whether it's optimizing performance, building new features, or
                solving complex problems, I'm always ready for the next
                challenge.
              </p>
              <button className="bg-white text-accent px-8 py-3 rounded-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Link
                  href="#contact"
                  // className="block nav-link py-2"
                >
                  Get In Touch
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
