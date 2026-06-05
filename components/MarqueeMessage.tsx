"use client";

import { motion } from "framer-motion";

export default function MarqueeMessage() {
  // Array of items to keep the markup clean and DRY
  const marqueeItems = [
    "🚀 Available for new opportunities • Full-stack developer with 2+ years experience",
    "💼 Specialized in React, Next.js, Django & PostgreSQL",
    "⭐ Serving 12k+ daily users • Built enterprise solutions",
    "📧 jvishvaa03@gmail.com • Open to work",
  ];

  // Reusable component for the inner content track
  const MarqueeTrack = () => (
    <div className="flex whitespace-nowrap gap-16 pr-16 items-center">
      {marqueeItems.map((item, index) => (
        <span
          key={index}
          className="text-white font-medium text-sm md:text-base tracking-wide flex items-center select-none"
        >
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-black py-3 border-y border-white/10 overflow-hidden relative cursor-pointer group">
      {/* Dynamic continuous track wrapper */}
      <motion.div
        className="flex w-max"
        animate={{ x: [0, "-50%"] }}
        transition={{
          ease: "linear",
          duration: 25, // Lower for faster speed, higher for slower
          repeat: Infinity,
        }}
        // UX feature: dynamic pausing on hover/interaction
        whileHover={{ animationPlayState: "paused" }}
      >
        {/* Track 1 */}
        <MarqueeTrack />
        {/* Track 2 (Duplicate for a completely seamless transition hook) */}
        <MarqueeTrack />
      </motion.div>
    </div>
  );
}
