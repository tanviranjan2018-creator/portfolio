"use client";

import { motion } from "framer-motion";

/*
 * ImpactHighlights — a compact strip between About and Academics
 * Six key impact metrics that give admissions officers a quick snapshot
 * of breadth and depth before they scroll into the detailed sections.
 */

const highlights = [
  {
    metric: "Head Prefect",
    detail: "Highest student leadership role",
    icon: "\u{1F451}",
  },
  {
    metric: "Black Belt",
    detail: "Taekwondo — 6 years, 6 belts",
    icon: "\u{1F94B}",
  },
  {
    metric: "Malaysian Record",
    detail: "Cultural dance — Book of Records",
    icon: "\u{1F3C5}",
  },
  {
    metric: "15–20 Children",
    detail: "Refugee centre tutoring",
    icon: "\u{1F4DA}",
  },
  {
    metric: "Badminton Champion",
    detail: "Academy & College 1st Place",
    icon: "\u{1F3F8}",
  },
  {
    metric: "~200 Students",
    detail: "Sports carnival logistics",
    icon: "\u{1F3AA}",
  },
];

export default function ImpactHighlights() {
  return (
    <section
      className="py-12 md:py-16 px-6"
      style={{ backgroundColor: "#1a2e1a" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-xs tracking-[0.2em] uppercase mb-8"
          style={{
            color: "#c9a84c",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          At a Glance
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {highlights.map((item, index) => (
            <motion.div
              key={item.metric}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.08 * index }}
              className="text-center p-4 rounded-xl"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-2xl block mb-2">{item.icon}</span>
              <p
                className="text-sm font-semibold mb-1"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#f5f1eb",
                }}
              >
                {item.metric}
              </p>
              <p
                className="text-xs"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#a09a90",
                  lineHeight: 1.4,
                }}
              >
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
