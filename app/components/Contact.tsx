export default function Contact() {
  return (
    <>
      <section
        id="contact"
        style={{
          padding: "6rem 2rem",
          background: "var(--cream)",
        }}
      >
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          {/* Header */}
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
            07 — Contact
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 600,
              color: "var(--text-dark)",
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            Let's connect
          </h2>
          <p
            style={{
              fontSize: "0.95rem",
              color: "var(--text-soft)",
              lineHeight: 1.8,
              marginBottom: "2.5rem",
            }}
          >
            Whether you're a university admissions officer, scholarship committee, or someone who just wants to say hello — I'd love to hear from you.
          </p>

          {/* Contact card */}
          <div
            style={{
              background: "var(--warm-white)",
              border: "1px solid var(--border)",
              borderRadius: 20,
              padding: "2.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
            }}
          >
            {[
              {
                icon: "📧",
                label: "Email",
                value: "your@email.com",
                href: "mailto:your@email.com",
              },
              {
                icon: "🌐",
                label: "Website",
                value: "tanviranjan.com",
                href: "https://tanviranjan.com",
              },
              {
                icon: "📍",
                label: "Location",
                value: "Malaysia",
                href: null,
              },
            ].map((c) => (
              <div
                key={c.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "1rem 1.25rem",
                  background: "var(--cream)",
                  borderRadius: 12,
                  border: "1px solid var(--border)",
                }}
              >
                <span style={{ fontSize: "1.5rem" }}>{c.icon}</span>
                <div style={{ flex: 1, textAlign: "left" }}>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      fontFamily: "'DM Mono', monospace",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: "var(--text-soft)",
                      marginBottom: 2,
                    }}
                  >
                    {c.label}
                  </p>
                  {c.href ? (
                    <a
                      href={c.href}
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 500,
                        color: "var(--forest)",
                        textDecoration: "none",
                      }}
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p style={{ fontSize: "0.95rem", fontWeight: 500, color: "var(--text-dark)" }}>
                      {c.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Download CV placeholder */}
          <div style={{ marginTop: "2rem" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "var(--forest)",
                color: "#fff",
                padding: "0.9rem 2rem",
                borderRadius: 10,
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
              }}
            >
              📄 Download Full CV / Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "var(--text-dark)",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#fff",
            marginBottom: "0.5rem",
          }}
        >
          Tanvi<span style={{ color: "var(--gold)" }}>.</span>
        </p>
        <p
          style={{
            fontSize: "0.78rem",
            color: "rgba(255,255,255,0.3)",
            fontFamily: "'DM Mono', monospace",
            letterSpacing: "0.06em",
          }}
        >
          tanviranjan.com · Built with care
        </p>
      </footer>
    </>
  );
}
