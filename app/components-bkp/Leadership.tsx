const roles = [
  {
    title: "Head Prefect",
    org: "School — Highest Student Leadership Role",
    period: "Form 5",
    icon: "👑",
    desc: "Selected to hold the school's highest student leadership position — the culmination of years of smaller leadership roles building toward it.",
    skills: ["Team Leadership", "Public Speaking", "Responsibility"],
  },
  {
    title: "Assistant Head of Logistics",
    org: "College Sports Carnival",
    period: "College",
    icon: "🎪",
    desc: "Co-led logistics planning and execution for a college-wide sports carnival — coordinating behind the scenes so the event ran smoothly for every participant.",
    skills: ["Project Management", "Organisation", "Teamwork"],
  },
  {
    title: "Emcee",
    org: "Inter-College Hosting",
    period: "College",
    icon: "🎤",
    desc: "Hosted an event on behalf of the college at a partner institution — representing the college on stage and keeping the program running.",
    skills: ["Public Speaking", "Confidence", "Representation"],
  },
];

export default function Leadership() {
  return (
    <section
      id="leadership"
      style={{
        padding: "6rem 2rem",
        background: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--forest)",
            marginBottom: "0.75rem",
          }}
        >
          03 — Leadership
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "var(--text-dark)",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          Leading from the
          <br />
          <em style={{ color: "var(--forest)" }}>front</em>
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--text-soft)",
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: "3.5rem",
          }}
        >
          Leadership isn't a title — it's a responsibility. From organising logistics behind the scenes to standing on stage as Head Prefect, here's where I've served, guided, and grown.
        </p>

        {/* Timeline-style layout */}
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {roles.map((r, i) => (
            <div
              key={r.title}
              style={{
                display: "grid",
                gridTemplateColumns: "60px 1fr",
                gap: "1.5rem",
                alignItems: "flex-start",
              }}
            >
              {/* Icon column */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: i === 0 ? "var(--forest)" : "var(--warm-white)",
                    border: i === 0 ? "none" : "2px solid var(--border)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.4rem",
                    flexShrink: 0,
                  }}
                >
                  {r.icon}
                </div>
                {i < roles.length - 1 && (
                  <div
                    style={{
                      width: 2,
                      flex: 1,
                      minHeight: 40,
                      background: "var(--border)",
                      marginTop: 8,
                    }}
                  />
                )}
              </div>

              {/* Content */}
              <div
                style={{
                  background: "var(--warm-white)",
                  border: "1px solid var(--border)",
                  borderRadius: 14,
                  padding: "1.5rem",
                  marginBottom: "0.5rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                    gap: "0.5rem",
                    marginBottom: "0.5rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontWeight: 600,
                        fontSize: "1.05rem",
                        color: "var(--text-dark)",
                      }}
                    >
                      {r.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--forest-mid)", fontWeight: 500 }}>
                      {r.org}
                    </p>
                  </div>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.75rem",
                      color: "var(--text-soft)",
                      background: "var(--cream)",
                      border: "1px solid var(--border)",
                      borderRadius: 6,
                      padding: "0.2rem 0.6rem",
                    }}
                  >
                    {r.period}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--text-mid)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  {r.desc}
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {r.skills.map((sk) => (
                    <span
                      key={sk}
                      style={{
                        background: "rgba(45,74,62,0.08)",
                        color: "var(--forest)",
                        border: "1px solid rgba(45,74,62,0.15)",
                        borderRadius: 20,
                        padding: "0.2rem 0.75rem",
                        fontSize: "0.75rem",
                        fontWeight: 500,
                      }}
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}