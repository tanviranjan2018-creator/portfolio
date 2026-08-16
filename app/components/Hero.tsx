"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#1a2e1a" }}
    >
      {/* Subtle star-field background */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 1,
              height: Math.random() * 3 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-sm tracking-[0.3em] uppercase mb-6"
          style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}
        >
          From Kuala Lumpur to the Cosmos
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{
            fontFamily: "'Playfair Display', serif",
            color: "#f5f1eb",
          }}
        >
          Tanvi Ranjan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#d4cfc7",
          }}
        >
          Aspiring Astrophysicist · Scientist · Leader · Athlete
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg mb-10 max-w-xl mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#a09a90",
          }}
        >
          Triple-A AS-Level student in Mathematics, Physics &amp; Chemistry,
          pursuing a deep fascination with the physics of the universe.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#academics"
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: "#c9a84c",
              color: "#1a2e1a",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Explore My Journey
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full text-sm font-medium tracking-wider uppercase transition-all duration-300 hover:scale-105 border"
            style={{
              borderColor: "#c9a84c",
              color: "#c9a84c",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#c9a84c"
          strokeWidth="2"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </section>
  );
}