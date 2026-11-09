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
        &ldquo;
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
                  alt="Tanvi Ranjan — Aspiring Astrophysicist"
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
                {"\u{1F52D}"} Aspiring Astrophysicist
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
              Curiosity that reaches
              <br />
              <em>beyond the atmosphere</em>
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {[
                "I’ve always been drawn to questions that don’t have easy answers. That instinct led me to a Biology Science Fair bronze medal in Form 4, then to the Malaysian Brain Bee Competition as a finalist in Form 5 — and eventually to the realisation that the questions I find most compelling are about the universe itself: how stars form, how gravity shapes spacetime, and what the large-scale structure of the cosmos tells us about the laws of physics.",
                "My path here hasn’t been a straight line. I’ve trained as a Taekwondo Black Belt, performed cultural dances that set a Malaysian Record, served as Head Prefect, earned a Piano Grade 9 with Merit, and tutored refugee children at a community centre. Each of these taught me something I’ll carry into physics: the discipline to persist through difficulty, the creativity to see patterns others miss, and the responsibility to use knowledge in service of others.",
                "At Methodist College Kuala Lumpur, I scored triple A grades in my Cambridge AS-Level examinations in Mathematics, Physics, and Chemistry. I’m now preparing for my A2 exams with my sights set on studying astrophysics at university — ready to turn a lifetime of curiosity into rigorous scientific inquiry.",
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
              {[
                "\u{1F52D} Astrophysics-Bound",
                "\u{1F3C6} Triple A — AS-Level",
                "\u{1F451} Head Prefect",
                "\u{1F94B} Black Belt",
                "\u{1F3C5} Malaysian Record",
                "\u{1F4DA} Refugee Tutor",
              ].map((tag) => (
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