"use client";

import { motion } from "framer-motion";

const highlights = [
  {
    icon: "🔭",
    title: "Astrophysics-Bound",
    description:
      "Triple A in AS-Level Maths, Physics & Chemistry — building the quantitative foundation to study the physics of the cosmos.",
  },
  {
    icon: "🥋",
    title: "Six Years of Discipline",
    description:
      "Taekwondo Black Belt earned through a six-belt progression from Primary 1 to Primary 6 — the same persistence I bring to every challenge.",
  },
  {
    icon: "🎓",
    title: "Head Prefect",
    description:
      "Elected to lead the student body at secondary level, representing over a thousand students and coordinating school-wide initiatives.",
  },
  {
    icon: "🌏",
    title: "Community-Minded",
    description:
      "Tutored 15–20 refugee children weekly for two months at College level, alongside a Malaysian Record-setting cultural dance performance.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 px-6"
      style={{ backgroundColor: "#f5f1eb" }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            className="text-sm tracking-[0.25em] uppercase mb-3"
            style={{ color: "#c9a84c", fontFamily: "'DM Sans', sans-serif" }}
          >
            About Me
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold mb-8"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#1a2e1a",
            }}
          >
            Curiosity That Reaches Beyond the Atmosphere
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-14 space-y-5"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: "#3a3a3a",
            lineHeight: 1.8,
          }}
        >
          <p className="text-base md:text-lg">
            I've always been drawn to questions that don't have easy answers.
            That instinct led me to a Biology Science Fair bronze medal in Form
            4, then to the Malaysian Brain Bee Competition as a finalist in Form
            5 — and eventually to the realisation that the questions I find most
            compelling are about the universe itself: how stars form, how gravity
            shapes spacetime, and what the large-scale structure of the cosmos
            tells us about the laws of physics.
          </p>
          <p className="text-base md:text-lg">
            My path here hasn't been a straight line. I've trained as a
            Taekwondo Black Belt, performed cultural dances that set a Malaysian
            Record, served as Head Prefect, earned a Piano Grade 8 with Merit,
            and tutored refugee children at a community centre. Each of these
            taught me something I'll carry into physics: the discipline to
            persist through difficulty, the creativity to see patterns others
            miss, and the responsibility to use knowledge in service of others.
          </p>
          <p className="text-base md:text-lg">
            At Methodist College Kuala Lumpur, I scored triple A grades in my
            Cambridge AS-Level examinations in Mathematics, Physics, and
            Chemistry. I'm now preparing for my A2 exams with my sights set on
            studying astrophysics at university — ready to turn a lifetime of
            curiosity into rigorous scientific inquiry.
          </p>
        </motion.div>

        {/* Highlight cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="p-6 rounded-2xl border transition-shadow duration-300 hover:shadow-lg"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#e5e0d8",
              }}
            >
              <span className="text-2xl mb-3 block">{item.icon}</span>
              <h3
                className="text-lg font-semibold mb-2"
                style={{
                  fontFamily: "'Playfair Display', serif",
                  color: "#1a2e1a",
                }}
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  color: "#5a5a5a",
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}