const subjects = [
  { subject: "Mathematics", grade: "A+", note: "Add your grade" },
  { subject: "Science", grade: "A+", note: "Add your grade" },
  { subject: "English", grade: "A+", note: "Add your grade" },
  { subject: "Bahasa Malaysia", grade: "A+", note: "Add your grade" },
  { subject: "History", grade: "A", note: "Add your grade" },
  { subject: "Add Subject", grade: "--", note: "Edit this" },
];

const highlights = [
  {
    icon: "🏆",
    title: "Academic Achievement",
    desc: "Add your top academic award, exam result, or recognition here — e.g. Top Student Award, Straight A's, Dean's List equivalent.",
  },
  {
    icon: "🔬",
    title: "Science & Research",
    desc: "Share a project, experiment, competition, or science fair achievement. What did you explore?",
  },
  {
    icon: "📖",
    title: "Reading & Writing",
    desc: "Any essays, debates, or creative writing competitions won? Add your literary accomplishments here.",
  },
];

export default function Academics() {
  return (
    <section
      id="academics"
      style={{
        padding: "6rem 2rem",
        background: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Section header */}
        <div style={{ marginBottom: "3.5rem" }}>
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "var(--gold)",
              marginBottom: "0.75rem",
            }}
          >
            01 — Academics
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              color: "var(--text-dark)",
              lineHeight: 1.2,
              maxWidth: 520,
            }}
          >
            Excellence
            <br />
            <em style={{ color: "var(--forest)" }}>in the classroom</em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.2fr 1fr",
            gap: "4rem",
            alignItems: "start",
          }}
          className="academics-grid"
        >
          {/* Left: Highlights */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {highlights.map((h) => (
              <div
                key={h.title}
                style={{
                  background: "var(--warm-white)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  transition: "box-shadow 0.2s",
                }}
              >
                <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>{h.icon}</span>
                <div>
                  <h3
                    style={{
                      fontWeight: 600,
                      fontSize: "1rem",
                      color: "var(--text-dark)",
                      marginBottom: 4,
                    }}
                  >
                    {h.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--text-soft)",
                      lineHeight: 1.6,
                    }}
                  >
                    {h.desc}
                  </p>
                </div>
              </div>
            ))}

            {/* Placeholder for writeup */}
            <div
              style={{
                borderRadius: 14,
                border: "2px dashed var(--border)",
                padding: "1.5rem",
                textAlign: "center",
                color: "var(--text-soft)",
                fontSize: "0.82rem",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              + ADD EXAM RESULTS / CERTIFICATES
              <br />
              <span style={{ opacity: 0.6 }}>Upload image or writeup here</span>
            </div>
          </div>

          {/* Right: Grades table */}
          <div>
            <h3
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.25rem",
                fontWeight: 600,
                color: "var(--text-dark)",
                marginBottom: "1.25rem",
              }}
            >
              Subject Results
            </h3>
            <div
              style={{
                background: "var(--warm-white)",
                border: "1px solid var(--border)",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {subjects.map((s, i) => (
                <div
                  key={s.subject}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "1rem 1.5rem",
                    borderBottom: i < subjects.length - 1 ? "1px solid var(--border)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(0,0,0,0.015)",
                  }}
                >
                  <div>
                    <span style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--text-dark)" }}>
                      {s.subject}
                    </span>
                    <br />
                    <span style={{ fontSize: "0.72rem", color: "var(--text-soft)", fontFamily: "'DM Mono', monospace" }}>
                      {s.note}
                    </span>
                  </div>
                  <span
                    style={{
                      background: s.grade !== "--" ? "var(--forest)" : "transparent",
                      border: s.grade === "--" ? "1.5px dashed var(--border)" : "none",
                      color: s.grade !== "--" ? "#fff" : "var(--text-soft)",
                      padding: "0.3rem 0.85rem",
                      borderRadius: 20,
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {s.grade}
                  </span>
                </div>
              ))}
            </div>

            <p
              style={{
                marginTop: "1rem",
                fontSize: "0.78rem",
                color: "var(--text-soft)",
                fontFamily: "'DM Mono', monospace",
                letterSpacing: "0.04em",
              }}
            >
              * Replace grades with actual SPM / trial results
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .academics-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
