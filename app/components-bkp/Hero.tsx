"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => { el.style.width = "100%"; }, 400);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "6rem 2rem 4rem",
        position: "relative",
        overflow: "hidden",
        background: "var(--cream)",
      }}
    >
      {/* Decorative background blobs */}
      <div style={{
        position: "absolute", top: "5%", right: "30%",
        width: 600, height: 600, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,151,62,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "10%",
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(184,92,56,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 1200, margin: "0 auto", width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "4rem",
        alignItems: "center",
      }}
        className="hero-grid"
      >
        {/* LEFT: Text content */}
        <div>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.78rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "var(--gold)",
            marginBottom: "1.5rem",
          }}>
            Final Year Student · Malaysia
          </p>

          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(3rem, 6vw, 6rem)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--text-dark)",
            marginBottom: "0.3rem",
          }}>
            Tanvi
          </h1>
          <h1 style={{
            fontFamily: "'Playfair Display', serif",
            fontStyle: "italic",
            fontSize: "clamp(3rem, 6vw, 6rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            color: "var(--forest)",
            marginBottom: "2rem",
          }}>
            Ranjan
          </h1>

          {/* Animated line */}
          <div ref={lineRef} style={{
            height: 3, width: 0,
            background: "linear-gradient(90deg, var(--gold), var(--rust-light))",
            borderRadius: 2, marginBottom: "2rem", maxWidth: 400,
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          }} />

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            fontWeight: 300, color: "var(--text-mid)",
            maxWidth: 460, lineHeight: 1.8, marginBottom: "2.5rem",
          }}>
            A curious student who excels in everything she tries — athlete, scholar, leader, and community heart.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginBottom: "2.5rem" }}>
            {[
              { num: "5+", label: "Sports" },
              { num: "🥇", label: "Sports Day Champion" },
              { num: "State", label: "Level Awards" },
              { num: "Multi", label: "Arts & Culture" },
            ].map((s) => (
              <div key={s.label} style={{
                background: "var(--warm-white)",
                border: "1px solid var(--border)",
                borderRadius: 12, padding: "0.65rem 1.1rem",
                display: "flex", flexDirection: "column", alignItems: "center", minWidth: 80,
              }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.3rem", fontWeight: 700, color: "var(--gold)" }}>
                  {s.num}
                </span>
                <span style={{ fontSize: "0.68rem", letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--text-soft)", marginTop: 2, textAlign: "center" }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="#about" style={{
              background: "var(--forest)", color: "#fff",
              padding: "0.85rem 2rem", borderRadius: 8,
              textDecoration: "none", fontSize: "0.9rem", fontWeight: 500,
            }}>
              Discover My Story
            </a>
            <a href="#awards" style={{
              background: "transparent", color: "var(--forest)",
              padding: "0.85rem 2rem", borderRadius: 8,
              textDecoration: "none", fontSize: "0.9rem", fontWeight: 500,
              border: "1.5px solid var(--forest)",
            }}>
              View Awards
            </a>
          </div>
        </div>

        {/* RIGHT: Photo */}
        <div style={{ display: "flex", justifyContent: "center", position: "relative" }}>
          {/* Decorative ring behind photo */}
          <div style={{
            position: "absolute",
            width: "90%", height: "90%",
            borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
            background: "linear-gradient(135deg, rgba(200,151,62,0.15), rgba(45,74,62,0.1))",
            top: "5%", left: "5%",
          }} />

          <div style={{
            position: "relative",
            width: "100%",
            maxWidth: 440,
            borderRadius: "40% 60% 55% 45% / 45% 40% 60% 55%",
            overflow: "hidden",
            aspectRatio: "1/1",
            boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
            border: "4px solid rgba(200,151,62,0.2)",
          }}>
            <Image
              src="/images/tanvi.jpg"
              alt="Tanvi Ranjan — Overall Sports Day Champion"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>

          {/* Floating badge */}
          <div style={{
            position: "absolute",
            bottom: "8%", left: "-5%",
            background: "var(--forest)",
            color: "#fff",
            borderRadius: 14,
            padding: "0.75rem 1.1rem",
            boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
          }}>
            <span style={{ fontSize: "1.5rem" }}>🏆</span>
            <div>
              <p style={{ fontSize: "0.78rem", fontWeight: 700, lineHeight: 1.2 }}>Overall Champion</p>
              <p style={{ fontSize: "0.68rem", opacity: 0.7, lineHeight: 1.2 }}>Sports Day</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 30, left: "50%",
        transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6, opacity: 0.35,
      }}>
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Scroll</span>
        <div style={{ width: 1, height: 36, background: "var(--text-mid)", animation: "scrollPulse 2s ease-in-out infinite" }} />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
        }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
