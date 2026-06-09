const initiatives = [
  {
    title: "Community Service Initiative",
    org: "Organisation / School Club",
    hours: "XX hrs",
    impact: "XX people",
    icon: "🤝",
    desc: "Describe your community service here — what cause did you support? What did you do? Who did it help? Share the story behind the work.",
  },
  {
    title: "Environmental / Social Campaign",
    org: "School / NGO",
    hours: "XX hrs",
    impact: "School-wide",
    icon: "🌿",
    desc: "Did you lead or join an environmental drive, food bank, fundraiser, or awareness campaign? Add it here.",
  },
  {
    title: "Tutoring / Mentoring",
    org: "School Programme",
    hours: "XX hrs",
    impact: "XX students",
    icon: "📚",
    desc: "Did you tutor younger students or mentor peers? Describe the programme and your role in it.",
  },
];

export default function Community() {
  return (
    <section
      id="community"
      style={{
        padding: "6rem 2rem",
        background: "var(--cream)",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            alignItems: "flex-end",
            marginBottom: "3.5rem",
          }}
          className="community-header"
        >
          <div>
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
              05 — Community Service
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
              Giving back,
              <br />
              <em style={{ color: "var(--forest)" }}>building forward</em>
            </h2>
          </div>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-soft)",
              lineHeight: 1.8,
            }}
          >
            True growth comes from serving others. These are the initiatives where I've contributed my time, skills, and heart.
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
          }}
          className="community-grid"
        >
          {initiatives.map((item) => (
            <div
              key={item.title}
              style={{
                background: "var(--warm-white)",
                border: "1px solid var(--border)",
                borderRadius: 16,
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div style={{ fontSize: "2.5rem" }}>{item.icon}</div>

              <div>
                <h3
                  style={{
                    fontWeight: 600,
                    fontSize: "1rem",
                    color: "var(--text-dark)",
                    marginBottom: 4,
                  }}
                >
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "var(--forest-mid)", fontWeight: 500 }}>
                  {item.org}
                </p>
              </div>

              {/* Stats */}
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <div
                  style={{
                    background: "rgba(45,74,62,0.07)",
                    borderRadius: 8,
                    padding: "0.4rem 0.75rem",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--forest)",
                    }}
                  >
                    {item.hours}
                  </p>
                  <p style={{ fontSize: "0.68rem", color: "var(--text-soft)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Hours
                  </p>
                </div>
                <div
                  style={{
                    background: "rgba(200,151,62,0.07)",
                    borderRadius: 8,
                    padding: "0.4rem 0.75rem",
                    flex: 1,
                    textAlign: "center",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "var(--gold)",
                    }}
                  >
                    {item.impact}
                  </p>
                  <p style={{ fontSize: "0.68rem", color: "var(--text-soft)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    Impact
                  </p>
                </div>
              </div>

              <p style={{ fontSize: "0.85rem", color: "var(--text-mid)", lineHeight: 1.7 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Add more placeholder */}
        <div
          style={{
            marginTop: "1.5rem",
            border: "2px dashed var(--border)",
            borderRadius: 16,
            padding: "1.75rem",
            textAlign: "center",
            color: "var(--text-soft)",
            fontSize: "0.82rem",
            fontFamily: "'DM Mono', monospace",
          }}
        >
          + ADD MORE COMMUNITY INITIATIVES · PHOTOS · MEDIA FEATURES
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .community-grid { grid-template-columns: 1fr 1fr !important; }
          .community-header { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .community-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
