"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = lineRef.current;
    if (!el) return;
    setTimeout(() => {
      el.style.width = "100%";
    }, 400);
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "6rem 2rem 4rem",
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {/* Decorative background circle */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(200,151,62,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Eyebrow */}
      <p
        style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: "0.78rem",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "var(--gold)",
          marginBottom: "1.5rem",
        }}
      >
        Final Year Student · Malaysia
      </p>

      {/* Name */}
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 700,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--text-dark)",
          marginBottom: "0.5rem",
        }}
      >
        Tanvi
      </h1>
      <h1
        style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: "italic",
          fontSize: "clamp(3rem, 8vw, 7rem)",
          fontWeight: 400,
          lineHeight: 1.05,
          letterSpacing: "-0.02em",
          color: "var(--forest)",
          marginBottom: "2rem",
        }}
      >
        Ranjan
      </h1>

      {/* Animated line */}
      <div
        ref={lineRef}
        style={{
          height: 3,
          width: 0,
          background: "linear-gradient(90deg, var(--gold), var(--rust-light))",
          borderRadius: 2,
          marginBottom: "2rem",
          maxWidth: 500,
          transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
        }}
      />

      {/* Tagline */}
      <p
        style={{
          fontSize: "clamp(1.1rem, 2.5vw, 1.4rem)",
          fontWeight: 300,
          color: "var(--text-mid)",
          maxWidth: 540,
          lineHeight: 1.7,
          marginBottom: "3rem",
        }}
      >
        A curious student who excels in everything she tries — athlete, scholar, leader, and community heart.
      </p>

      {/* Stat pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "3rem",
        }}
      >
        {[
          { num: "5+", label: "Sports" },
          { num: "School", label: "Representation" },
          { num: "State", label: "Level Awards" },
          { num: "Multi", label: "Arts & Culture" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              background: "var(--warm-white)",
              border: "1px solid var(--border)",
              borderRadius: 12,
              padding: "0.75rem 1.25rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: 90,
            }}
          >
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--gold)",
              }}
            >
              {s.num}
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "var(--text-soft)",
                marginTop: 2,
              }}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <a
          href="#about"
          style={{
            background: "var(--forest)",
            color: "#fff",
            padding: "0.85rem 2rem",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            transition: "background 0.2s",
          }}
        >
          Discover My Story
        </a>
        <a
          href="#awards"
          style={{
            background: "transparent",
            color: "var(--forest)",
            padding: "0.85rem 2rem",
            borderRadius: 8,
            textDecoration: "none",
            fontSize: "0.9rem",
            fontWeight: 500,
            letterSpacing: "0.02em",
            border: "1.5px solid var(--forest)",
            transition: "all 0.2s",
          }}
        >
          View Awards
        </a>
      </div>

      {/* Scroll hint */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 6,
          opacity: 0.4,
        }}
      >
        <span style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "var(--text-mid)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.3; transform: scaleY(0.6); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </section>
  );
}
