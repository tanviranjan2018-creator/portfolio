const subjects = [
  { subject: "IGCSE O-Levels", grade: "High Achiever", note: "Recognised across O-Level examinations" },
  { subject: "Hindi (Native Language)", grade: "Top Mark", note: "Highest mark in cohort, Form 4" },
  { subject: "Kumon Mathematics", grade: "145 / 1,299", note: "Up from 217 / 2,114 — Primary 5 to Primary 6" },
  { subject: "UCMAS Mental Arithmetic", grade: "Distinction", note: "Primary 3" },
  { subject: "Academic Excellence", grade: "3rd · 3rd · 5th", note: "Primary 2, Primary 4, Primary 6" },
  { subject: "Malaysian Brain Bee", grade: "Finalist", note: "National neuroscience competition" },
];

const highlights = [
  {
    icon: "🏆",
    title: "Academic Excellence, Year After Year",
    desc: "Three separate Academic Excellence awards across primary school (Primary 2, 4, and 6), followed by High Achiever status at IGCSE O-Levels — a steady climb rather than a single peak.",
  },
  {
    icon: "🔬",
    title: "Science & Research",
    desc: "Bronze Award at the Form 4 Science Fair for an independent research project on cell biology — and a place as a national finalist in the Malaysian Brain Bee Competition, a competitive neuroscience challenge.",
  },
  {
    icon: "🧮",
    title: "Numbers & Languages",
    desc: "Climbed from the top 11% to the top 12th percentile nationally in Kumon Mathematics between Primary 5 and 6, earned Distinction in UCMAS mental arithmetic, and scored the highest mark in Hindi as a native-language student.",
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
                border: "1px solid var(--border)",
                padding: "1.5rem",
                textAlign: "center",
                color: "var(--text-soft)",
                fontSize: "0.82rem",
                fontFamily: "'DM Mono', monospace",
              }}
            >
              📎 EXAM RESULTS & CERTIFICATES
              <br />
              <span style={{ opacity: 0.6 }}>Available on request</span>
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
              * Full certificates available on request
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