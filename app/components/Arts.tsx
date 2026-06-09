const artsForms = [
  {
    title: "Performing Arts",
    icon: "🎭",
    color: "var(--rust)",
    items: [
      "Add performance — e.g. School Drama Lead, Cultural Night Performance",
      "Add performance — e.g. Dance Troupe, Traditional Dance",
      "Add performance — e.g. School Choir, Solo Performance",
    ],
  },
  {
    title: "Music",
    icon: "🎵",
    color: "var(--gold)",
    items: [
      "Add instrument / performance — e.g. Piano Grade 5",
      "Add music competition entry here",
      "Add band / ensemble membership here",
    ],
  },
  {
    title: "Visual Arts & Design",
    icon: "🎨",
    color: "var(--forest)",
    items: [
      "Add art competition entry — e.g. National Art Competition",
      "Add design work — e.g. School Newsletter Designer",
      "Add gallery / exhibition participation",
    ],
  },
  {
    title: "Cultural Heritage",
    icon: "🌺",
    color: "var(--rust-light)",
    items: [
      "Add cultural activity — e.g. Traditional Dance Representative",
      "Add language skills — e.g. Tamil, Hindi, Bahasa",
      "Add cultural event participation",
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
          Art, music, and culture aren't separate from achievement — they're the soul of it.
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
            border: "2px dashed rgba(200,151,62,0.3)",
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
            📸 ADD PERFORMANCE PHOTOS · ARTWORK · CERTIFICATES · MEDIA COVERAGE
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
