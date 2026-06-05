"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.send(
        "service_fygv7wb",
        "template_nfplc0o",
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "KJvXLKneFUB4ZBJTs",
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 6000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      url: "https://www.linkedin.com/in/jayavishvaa-j-b342b51a3/",
      bgHover: "hover:bg-[#0077B5] hover:text-white",
    },
    {
      name: "Email",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      url: "https://mail.google.com/mail/?view=cm&fs=1&to=jvishvaa03@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Jayavishvaa,%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20like%20to%20discuss...",
      bgHover: "hover:bg-[#EA4C89] hover:text-white",
    },
    {
      name: "Github",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
      url: "https://github.com/jvishvaa",
      bgHover: "hover:bg-[#070707] hover:text-white",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50/30 relative overflow-hidden"
    >
      {/* Structural Minimal Backdrop Orbits */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent/10 rounded-full filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container-custom max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Let's Work Together
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 max-w-xl mx-auto">
            Have an open requirement or a project scaling up? Let's talk system
            solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          {/* Native Interaction Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-sm font-medium text-gray-900"
                    placeholder="Jayavishvaa"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-sm font-medium text-gray-900"
                    placeholder="jvishvaa03@gmail.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-sm font-medium text-gray-900"
                  placeholder="System Architecture Consultation"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold text-gray-500 uppercase tracking-wide mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50/50 border border-gray-100 rounded-xl focus:bg-white focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-all text-sm font-medium text-gray-900 resize-none"
                  placeholder="Tell me about your tech stack and requirements..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-accent to-purple-600 text-white font-semibold rounded-xl text-sm shadow-md shadow-accent/10 hover:shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Dispatching Message...
                  </span>
                ) : (
                  <>
                    <span>Send Message</span>
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
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </>
                )}
              </motion.button>

              {/* Status Notifications via AnimatePresence */}
              <AnimatePresence>
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center gap-3 text-emerald-800 text-sm font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-emerald-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Message routed successfully! I'll connect with you
                      shortly.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 bg-rose-50 border border-rose-100 rounded-xl flex items-center gap-3 text-rose-800 text-sm font-medium"
                  >
                    <svg
                      className="w-5 h-5 text-rose-600 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>
                      Network timeout. Please try again or reach out directly.
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Core Info & Networks Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Minimal Parameter Cards */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 bg-accent/5 text-accent rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Direct Mail
                </h4>
                <p className="text-gray-800 font-semibold text-sm md:text-base selection:bg-accent/10">
                  jvishvaa03@gmail.com
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 bg-accent/5 text-accent rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Base Location
                </h4>
                <p className="text-gray-800 font-semibold text-sm md:text-base">
                  Bangalore, India
                </p>
              </div>
            </div>

            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm flex items-center gap-4">
              <div className="w-11 h-11 bg-accent/5 text-accent rounded-xl flex items-center justify-center flex-shrink-0 border border-accent/10">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide">
                  Availability
                </h4>
                <p className="text-emerald-600 font-bold text-sm md:text-base flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block animate-ping" />
                  Active / Open to Offers
                </p>
              </div>
            </div>

            {/* Premium Social Connection Cluster */}
            <div className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-4">
                Secure Channels
              </h4>
              <div className="grid grid-cols-3 gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`h-12 bg-gray-50 border border-gray-100/70 text-gray-500 rounded-xl flex items-center justify-center transition-all duration-200 group ${social.bgHover}`}
                    aria-label={social.name}
                  >
                    <div className="group-hover:scale-105 transition-transform">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
