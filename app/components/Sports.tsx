const sports = [
  {
    sport: "Sport 1",
    icon: "🏃‍♀️",
    role: "Add your position / event",
    level: "School & State",
    achievements: [
      "Add achievement — e.g. Gold Medal, District Championships 2023",
      "Add achievement — e.g. Captain of the School Team",
      "Add achievement — e.g. Best Player Award",
    ],
  },
  {
    sport: "Sport 2",
    icon: "🏊‍♀️",
    role: "Add your position / event",
    level: "School Level",
    achievements: [
      "Add achievement here",
      "Add achievement here",
    ],
  },
  {
    sport: "Sport 3",
    icon: "🎯",
    role: "Add your position / event",
    level: "State Level",
    achievements: [
      "Add achievement here",
      "Add achievement here",
    ],
  },
];

const levelColor: Record<string, string> = {
  "School & State": "var(--gold)",
  "School Level": "var(--forest-mid)",
  "State Level": "var(--rust)",
};

export default function Sports() {
  return (
    <section
      id="sports"
      style={{
        padding: "6rem 2rem",
        background: "var(--warm-white)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.75rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--rust)",
                marginBottom: "0.75rem",
              }}
            >
              02 — Sports & Athletics
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 600,
                color: "var(--text-dark)",
                lineHeight: 1.2,
              }}
            >
              Competing at
              <br />
              <em style={{ color: "var(--rust)" }}>every level</em>
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.92rem",
              color: "var(--text-soft)",
              maxWidth: 320,
              lineHeight: 1.7,
            }}
          >
            Representing her school at district, state, and national competitions — and always pushing further.
          </p>
        </div>

        {/* Sport cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="sports-grid"
        >
          {sports.map((s) => (
            <div
              key={s.sport}
              style={{
                background: "var(--cream)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
            >
              {/* Card header */}
              <div
                style={{
                  background: "var(--forest)",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <span style={{ fontSize: "2.5rem" }}>{s.icon}</span>
                <div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#fff",
                    }}
                  >
                    {s.sport}
                  </h3>
                  <p style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.6)", marginTop: 2 }}>
                    {s.role}
                  </p>
                </div>
              </div>

              {/* Level badge */}
              <div style={{ padding: "1rem 1.5rem 0" }}>
                <span
                  style={{
                    background: levelColor[s.level] + "20",
                    color: levelColor[s.level],
                    border: `1px solid ${levelColor[s.level]}50`,
                    borderRadius: 20,
                    padding: "0.3rem 0.85rem",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    fontFamily: "'DM Mono', monospace",
                    letterSpacing: "0.05em",
                  }}
                >
                  {s.level}
                </span>
              </div>

              {/* Achievements */}
              <div style={{ padding: "1rem 1.5rem 1.5rem" }}>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                  {s.achievements.map((a, i) => (
                    <li
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.5rem",
                        fontSize: "0.85rem",
                        color: "var(--text-mid)",
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          width: 5,
                          height: 5,
                          borderRadius: "50%",
                          background: "var(--gold)",
                          marginTop: 6,
                          flexShrink: 0,
                        }}
                      />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Add more sports placeholder */}
        <div
          style={{
            marginTop: "1.5rem",
            border: "2px dashed var(--border)",
            borderRadius: 16,
            padding: "2rem",
            textAlign: "center",
            color: "var(--text-soft)",
            fontSize: "0.82rem",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          + ADD MORE SPORTS · TOURNAMENTS · PHOTOS · CERTIFICATES
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .sports-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .sports-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
