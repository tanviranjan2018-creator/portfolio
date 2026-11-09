"use client";

import { motion } from "framer-motion";

/*
 * Projects & Research — supercurricular engagement evidence
 * Shows computational physics work, independent essays, and book reviews
 * to demonstrate genuine astrophysics interest beyond the classroom.
 */

const projects = [
  {
    title: "Stellar Light-Curve Analysis",
    type: "Computational Project",
    status: "In Progress",
    statusColor: "#c9a84c",
    icon: "⭐",
    description:
      "Using Python and the Astropy library to analyse publicly available photometric data from variable stars, identifying periodicity and classifying light-curve shapes — a first step into observational astrophysics through data science.",
    tools: ["Python", "Astropy", "Matplotlib", "NumPy"],
    relevance: "Demonstrates computational skills essential for modern astrophysics research.",
  },
  {
    title: "Nucleosynthesis: How Stars Forge the Elements",
    type: "Independent Essay",
    status: "Planned",
    statusColor: "#b85c38",
    icon: "\u{1F4DD}",
    description:
      "A self-directed essay exploring stellar nucleosynthesis — the process by which hydrogen and helium are fused into heavier elements inside stars, and the role of supernovae in dispersing those elements across the universe.",
    tools: ["Academic Writing", "Physics Research", "Critical Analysis"],
    relevance: "Connects AS-Level chemistry and physics to a core astrophysics topic.",
  },
  {
    title: "Science Reading & Book Reviews",
    type: "Ongoing Reading",
    status: "Ongoing",
    statusColor: "#1a6b4a",
    icon: "\u{1F4DA}",
    description:
      "Building a reading list of popular science and introductory astrophysics texts, with written reflections. Current focus includes works on cosmology, quantum mechanics, and the philosophy of scientific discovery.",
    tools: ["Critical Reading", "Scientific Literacy", "Reflective Writing"],
    relevance: "Shows sustained intellectual curiosity and self-directed learning beyond the syllabus.",
  },
];

export default function Projects() {
  return (
    <section
      id="research"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: "#1a2e1a" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p
            className="text-sm tracking-[0.25em] uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}
          >
            Projects & Research
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#f5f1eb",
            }}
          >
            Beyond the Syllabus
          </h2>
          <p
            className="text-base md:text-lg max-w-2xl"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "#a09a90",
              lineHeight: 1.8,
            }}
          >
            Independent work that shows where curiosity leads when it isn&apos;t
            confined to a mark scheme — computational projects, research writing,
            and a growing reading habit in the sciences.
          </p>
        </motion.div>

        {/* Project cards */}
        <div className="grid grid-cols-1 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <div className="p-6 md:p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div>
                      <h3
                        className="text-lg md:text-xl font-bold"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          color: "#f5f1eb",
                        }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-sm mt-0.5"
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          color: "#a09a90",
                        }}
                      >
                        {project.type}
                      </p>
                    </div>
                  </div>
                  {/* Status badge */}
                  <span
                    className="text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full flex-shrink-0"
                    style={{
                      backgroundColor: project.statusColor + "20",
                      color: project.statusColor,
                      border: `1px solid ${project.statusColor}50`,
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Description */}
                <p
                  className="text-sm md:text-base mb-5"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    color: "rgba(255,255,255,0.65)",
                    lineHeight: 1.8,
                  }}
                >
                  {project.description}
                </p>

                {/* Tools / skills tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: "rgba(201,168,76,0.1)",
                        color: "#c9a84c",
                        border: "1px solid rgba(201,168,76,0.25)",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Relevance note */}
                <div
                  className="flex items-start gap-2 pt-4"
                  style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <span className="text-sm mt-0.5">{"\u{1F52D}"}</span>
                  <p
                    className="text-xs italic"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.6,
                    }}
                  >
                    {project.relevance}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about ongoing development */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center p-5 rounded-xl"
          style={{
            border: "1px solid rgba(201,168,76,0.2)",
          }}
        >
          <p
            className="text-sm"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              color: "rgba(255,255,255,0.4)",
            }}
          >
            This section grows as new projects begin — check back for updates as A2 progresses.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
