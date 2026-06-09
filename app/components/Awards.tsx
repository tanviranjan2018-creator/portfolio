const categories = ["All", "Academic", "Sports", "Leadership", "Arts", "Community"];

const awards = [
  {
    title: "Add Award Title",
    category: "Sports",
    year: "2024",
    issuer: "Issuing Body / School",
    level: "State",
    desc: "Describe what you achieved and why this award matters to you.",
    color: "var(--rust)",
  },
  {
    title: "Add Award Title",
    category: "Academic",
    year: "2023",
    issuer: "School / Ministry",
    level: "School",
    desc: "Describe the academic achievement — exam, competition, recognition.",
    color: "var(--forest)",
  },
  {
    title: "Add Award Title",
    category: "Leadership",
    year: "2024",
    issuer: "School / Organisation",
    level: "School",
    desc: "Describe the leadership award or recognition received.",
    color: "var(--gold)",
  },
  {
    title: "Add Award Title",
    category: "Sports",
    year: "2023",
    issuer: "District / State Board",
    level: "District",
    desc: "Another sports achievement — tournament, championship, selection.",
    color: "var(--rust)",
  },
  {
    title: "Add Award Title",
    category: "Arts",
    year: "2023",
    issuer: "School / Competition",
    level: "School",
    desc: "Performing arts, music, or cultural arts recognition.",
    color: "var(--gold-light)",
  },
  {
    title: "Add Award Title",
    category: "Community",
    year: "2024",
    issuer: "NGO / School",
    level: "School",
    desc: "Recognition for community service or volunteering impact.",
    color: "var(--forest-mid)",
  },
];

const levelBadge: Record<string, string> = {
  State: "var(--rust)",
  District: "var(--gold)",
  School: "var(--forest-mid)",
  National: "#8B2FC9",
};

export default function Awards() {
  return (
    <section
      id="awards"
      style={{
        padding: "6rem 2rem",
        background: "var(--warm-white)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
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
            06 — Awards & Recognition
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.5rem)",
              fontWeight: 600,
              color: "var(--text-dark)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            A record of
            <br />
            <em style={{ color: "var(--gold)" }}>hard-won moments</em>
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-soft)",
              maxWidth: 480,
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            Every award here represents something larger — the early mornings, the extra effort, and the belief that it would be worth it.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "0.5rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
          }}
        >
          {categories.map((cat) => (
            <span
              key={cat}
              style={{
                padding: "0.4rem 1.1rem",
                borderRadius: 20,
                fontSize: "0.8rem",
                fontWeight: 500,
                border: "1.5px solid var(--border)",
                color: cat === "All" ? "#fff" : "var(--text-mid)",
                background: cat === "All" ? "var(--forest)" : "transparent",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Awards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="awards-grid"
        >
          {awards.map((award, i) => (
            <div
              key={i}
              style={{
                background: "var(--cream)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                overflow: "hidden",
                position: "relative",
              }}
            >
              {/* Top accent bar */}
              <div
                style={{
                  height: 4,
                  background: award.color,
                }}
              />

              <div style={{ padding: "1.5rem" }}>
                {/* Meta row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      background: (levelBadge[award.level] || "var(--text-soft)") + "18",
                      color: levelBadge[award.level] || "var(--text-soft)",
                      border: `1px solid ${(levelBadge[award.level] || "var(--text-soft)")}40`,
                      borderRadius: 20,
                      padding: "0.2rem 0.7rem",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                      fontFamily: "'DM Mono', monospace",
                    }}
                  >
                    {award.level}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Mono', monospace",
                      fontSize: "0.72rem",
                      color: "var(--text-soft)",
                    }}
                  >
                    {award.year}
                  </span>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.1rem",
                    fontWeight: 600,
                    color: "var(--text-dark)",
                    lineHeight: 1.3,
                    marginBottom: "0.4rem",
                  }}
                >
                  {award.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.8rem",
                    color: award.color,
                    fontWeight: 500,
                    marginBottom: "0.75rem",
                  }}
                >
                  {award.issuer}
                </p>
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-soft)",
                    lineHeight: 1.6,
                  }}
                >
                  {award.desc}
                </p>

                {/* Certificate placeholder */}
                <div
                  style={{
                    marginTop: "1rem",
                    border: "1.5px dashed var(--border)",
                    borderRadius: 8,
                    padding: "0.6rem 1rem",
                    fontSize: "0.72rem",
                    fontFamily: "'DM Mono', monospace",
                    color: "var(--text-soft)",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  📎 ATTACH CERTIFICATE / PHOTO
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add more */}
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
          + ADD MORE AWARDS · WRITEUPS · MEDIA FEATURES · CERTIFICATES
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .awards-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .awards-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
