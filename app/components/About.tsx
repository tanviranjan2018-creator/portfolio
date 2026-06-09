export default function About() {
  return (
    <section
      id="about"
      style={{
        background: "var(--forest)",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: -20, left: "5%",
        fontFamily: "'Playfair Display', serif",
        fontSize: "20rem", color: "rgba(255,255,255,0.03)",
        lineHeight: 1, pointerEvents: "none", userSelect: "none",
      }}>
        "
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1.6fr",
          gap: "5rem",
          alignItems: "center",
        }} className="about-grid">

          {/* Left: Real Photo */}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ position: "relative", width: "100%", maxWidth: 340 }}>
              <div style={{
                width: "100%",
                aspectRatio: "3/4",
                borderRadius: 20,
                overflow: "hidden",
                border: "3px solid rgba(200,151,62,0.3)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
                position: "relative",
              }}>
                <img
                  src="/images/tanvi.jpg"
                  alt="Tanvi Ranjan — Overall Sports Day Champion"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }}
                />
              </div>
              {/* Caption badge */}
              <div style={{
                position: "absolute",
                bottom: -16, right: -16,
                background: "var(--gold)",
                color: "#fff",
                borderRadius: 12,
                padding: "0.6rem 1rem",
                fontSize: "0.78rem",
                fontWeight: 700,
                boxShadow: "0 4px 16px rgba(200,151,62,0.4)",
                whiteSpace: "nowrap",
              }}>
                🏆 Overall Sports Champion
              </div>
            </div>
          </div>

          {/* Right: Story */}
          <div>
            <p style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "0.75rem", letterSpacing: "0.15em",
              textTransform: "uppercase", color: "var(--gold-light)",
              marginBottom: "1.25rem",
            }}>
              My Story
            </p>

            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600, color: "#fff",
              lineHeight: 1.2, marginBottom: "2rem",
            }}>
              More than the sum
              <br />
              <em>of my achievements</em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "Hi, I'm Tanvi — a final-year secondary school student from Malaysia with a passion for learning that goes far beyond the classroom. Whether I'm on the sports field, on stage, in the lab, or volunteering in my community, I bring the same energy: curiosity, commitment, and a drive to make things better.",
                "My journey has taken me from representing my school in state-level competitions to leading teams and creating spaces where others can thrive. I believe that character is built in the moments between trophies — in the early morning practices, the late-night study sessions, and the quiet acts of service that nobody films.",
                "I'm looking forward to bringing this same spirit into university — ready to contribute, to grow, and to keep discovering what I'm capable of.",
              ].map((para, i) => (
                <p key={i} style={{
                  color: "rgba(255,255,255,0.75)",
                  fontSize: "1rem", lineHeight: 1.8, fontWeight: 300,
                }}>
                  {para}
                </p>
              ))}
            </div>

            {/* Quick facts */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
              {["📍 Malaysia", "🎓 Final Year Secondary", "🏅 School & State Level", "🏆 Overall Sports Champion", "🌱 Always Learning"].map((tag) => (
                <span key={tag} style={{
                  background: "rgba(200,151,62,0.12)",
                  border: "1px solid rgba(200,151,62,0.25)",
                  borderRadius: 20, padding: "0.4rem 1rem",
                  fontSize: "0.82rem", color: "rgba(255,255,255,0.8)",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
    </section>
  );
}
