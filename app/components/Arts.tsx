const artsForms = [
  {
    title: "Cultural Dance",
    icon: "\u{1F3AD}",
    color: "var(--rust)",
    items: [
      "Performed in numerous cultural dance productions from Form 3 onward",
      "Earned multiple awards across these performances",
      "One performance recognised in the Malaysia Book of Records",
      "Indian classical dance, Form 3",
    ],
  },
  {
    title: "Music",
    icon: "\u{1F3B5}",
    color: "var(--gold)",
    items: [
      "Piano — Grade 9, Merit",
      "Piano — Grade 8, Merit",
      "Trained from Primary 1 through Primary 5",
    ],
  },
  {
    title: "National Record",
    icon: "\u{1F3C5}",
    color: "var(--forest)",
    items: [
      "Malaysian Record — Cultural Dance performance",
      "Verified and listed in the Malaysia Book of Records",
      "Achieved during a college-level performance",
    ],
  },
  {
    title: "Cultural Heritage",
    icon: "\u{1F33A}",
    color: "var(--rust-light)",
    items: [
      "Active performer across multiple cultural dance traditions",
      "Fluent in English, Hindi, Bahasa Malaysia and basic Tamil",
    ],
  },
];

export default function Arts() {
  return (
    <section
      id="arts"
      style={{
        padding: "6rem 2rem",
        background: "var(--forest)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative */}
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background: "rgba(200,151,62,0.05)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <p
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold-light)",
            marginBottom: "0.75rem",
          }}
        >
          04 — Arts & Culture
        </p>
        <h2
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 600,
            color: "#fff",
            lineHeight: 1.2,
            marginBottom: "1rem",
          }}
        >
          The artist
          <br />
          <em>within the athlete</em>
        </h2>
        <p
          style={{
            fontSize: "0.95rem",
            color: "rgba(255,255,255,0.6)",
            maxWidth: 480,
            lineHeight: 1.7,
            marginBottom: "3.5rem",
          }}
        >
          A record-setting performance, two Merit-grade piano qualifications, and a stage history that started in Form 3 and hasn&apos;t stopped since.
        </p>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.5rem",
          }}
          className="arts-grid"
        >
          {artsForms.map((a) => (
            <div
              key={a.title}
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 16,
                padding: "1.75rem",
                backdropFilter: "blur(8px)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <span style={{ fontSize: "2rem" }}>{a.icon}</span>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.15rem",
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {a.title}
                </h3>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
                {a.items.map((item, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontSize: "0.85rem",
                      color: "rgba(255,255,255,0.65)",
                      lineHeight: 1.6,
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: a.color,
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Photo / media placeholder */}
        <div
          style={{
            marginTop: "2rem",
            border: "1px solid rgba(200,151,62,0.3)",
            borderRadius: 16,
            padding: "2.5rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.8rem",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.1em",
            }}
          >
            {"\u{1F4F8}"} PERFORMANCE PHOTOS & RECORD CERTIFICATE AVAILABLE ON REQUEST
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .arts-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}