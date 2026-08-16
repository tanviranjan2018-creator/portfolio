"use client";

import { motion } from "framer-motion";

/*
 * ── Colour & font tokens (kept in sync with the site palette) ──
 * Forest green: #1a2e1a
 * Gold:         #c9a84c
 * Rust:         #b85c38
 * Cream bg:     #f5f1eb
 * Playfair Display (headings), DM Sans (body)
 */

/* ── AS-Level results ── */
const asResults = [
  { subject: "Mathematics", code: "9709", grade: "A", score: 85 },
  { subject: "Physics", code: "9702", grade: "A", score: 81 },
  { subject: "Chemistry", code: "9701", grade: "A", score: 83 },
];

/* ── Highlight cards — STEM / Astrophysics direction leads ── */
const highlights = [
  {
    category: "Science & Research",
    icon: "🔬",
    accent: "#b85c38",
    items: [
      "Cambridge AS-Level Triple A — Maths (85), Physics (81), Chemistry (83)",
      "Malaysian Brain Bee Competition — Finalist (Form 5)",
      "Science Fair: Biology (Cells) — Bronze Award (Form 4)",
      "IGCSE O-Level High Achiever Award (Form 5)",
    ],
  },
  {
    category: "Mathematics & Quantitative",
    icon: "📐",
    accent: "#c9a84c",
    items: [
      "Kumon Maths — ranked 217th out of 2,114 nationally (Primary 5)",
      "Kumon Maths — ranked in top cohort nationally (Primary 6)",
      "UCMAS Mental Arithmetic — Distinction (Primary 3)",
      "Academic Excellence awards across Primary and Secondary",
    ],
  },
  {
    category: "Languages & Communication",
    icon: "🗣️",
    accent: "#1a2e1a",
    items: [
      "Highest mark in Hindi (native language) — Form 4",
      "Spelling Bee Competition — 2nd Place (Primary 3)",
      "Emcee for inter-college event at College level",
    ],
  },
  {
    category: "Academic Awards",
    icon: "🏆",
    accent: "#c9a84c",
    items: [
      "Academic Excellence — 3rd Place (Primary 2 & 4)",
      "Academic Excellence — 5th Place (Primary 6)",
      "KMC Mathematics — Certificate of Participation (Primary 2)",
      "KMC Mathematics — Honourable Mention (Primary 4)",
    ],
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: "#f5f1eb" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-6"
        >
          <p
            className="text-sm tracking-[0.25em] uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}
          >
            Academic Profile
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a2e1a",
            }}
          >
            Building the Foundation for Astrophysics
          </h2>
        </motion.div>

        {/* Curriculum context note for international readers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 p-5 rounded-xl border-l-4"
          style={{
            borderColor: "#c9a84c",
            backgroundColor: "#faf8f3",
            fontFamily: "'DM Sans', sans-serif",
            color: "#5a5a5a",
            fontSize: "0.9rem",
            lineHeight: 1.7,
          }}
        >
          <strong style={{ color: "#1a2e1a" }}>
            A note on the Malaysian education system:
          </strong>{" "}
          Malaysia follows a Primary 1–6 (ages 7–12), Form 1–5 (ages 13–17),
          and College/Pre-University (ages 17–19) structure. Tanvi completed her
          IGCSE O-Levels at Form 5 and is currently pursuing{" "}
          <strong style={{ color: "#1a2e1a" }}>
            Cambridge GCE AS &amp; A-Levels at Methodist College Kuala Lumpur
          </strong>
          , sitting her AS examinations in June 2026 and preparing for A2.
        </motion.div>

        {/* ── AS-Level Results — prominent display ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mb-14 p-8 rounded-2xl"
          style={{ backgroundColor: "#1a2e1a" }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-2 text-center"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f1eb",
            }}
          >
            Cambridge GCE AS-Level Results — June 2026
          </h3>
          <p
            className="text-center mb-8 text-sm"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#a09a90",
            }}
          >
            Methodist College Kuala Lumpur · Candidate No. 2221
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {asResults.map((result, index) => (
              <motion.div
                key={result.code}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="text-center p-6 rounded-xl"
                style={{ backgroundColor: "rgba(201,168,76,0.1)" }}
              >
                <p
                  className="text-4xl md:text-5xl font-bold mb-1"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: "#c9a84c",
                  }}
                >
                  {result.grade}
                </p>
                <p
                  className="text-2xl font-semibold mb-2"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#f5f1eb",
                  }}
                >
                  {result.score}
                </p>
                <p
                  className="text-sm tracking-wider uppercase"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "#a09a90",
                  }}
                >
                  {result.subject}
                </p>
                <p
                  className="text-xs mt-1"
                  style={{ color: "#6b6b6b" }}
                >
                  ({result.code})
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Why Astrophysics — narrative card ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14 p-8 rounded-2xl border"
          style={{
            borderColor: "#b85c38",
            backgroundColor: "#fff",
          }}
        >
          <div className="flex items-start gap-4">
            <span className="text-3xl flex-shrink-0">🔭</span>
            <div>
              <h3
                className="text-xl font-bold mb-3"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1a2e1a",
                }}
              >
                Why Astrophysics
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#3a3a3a",
                  lineHeight: 1.8,
                }}
              >
                My early scientific curiosity showed itself in a Science Fair
                investigation into cell biology and a place in the Malaysian
                Brain Bee finals. But the questions that stay with me longest
                are the ones about the universe at its largest scales — how
                stars forge heavy elements in their cores, how spacetime bends
                around massive objects, and what the cosmic microwave background
                tells us about the first moments after the Big Bang. My
                strongest AS-Level score came in Mathematics, the language
                astrophysics is written in. I want to spend the next stage of my
                education learning to speak that language fluently, and to
                contribute to our understanding of the physical universe.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Highlight cards grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((card, cardIndex) => (
            <motion.div
              key={card.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * cardIndex }}
              className="p-6 rounded-2xl border transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e0d8",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{card.icon}</span>
                <h3
                  className="text-lg font-semibold"
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    color: card.accent,
                  }}
                >
                  {card.category}
                </h3>
              </div>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li
                    key={i}
                    className="text-sm flex items-start gap-2"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "#4a4a4a",
                      lineHeight: 1.6,
                    }}
                  >
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: card.accent }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}