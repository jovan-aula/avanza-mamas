"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const leftRef = useRef(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    requestAnimationFrame(() => {
      setTimeout(() => {
        el.style.transition = "opacity 0.85s ease, transform 0.85s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 150);
    });
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-dark" style={{ minHeight: "100vh", padding: "100px 24px 64px", position: "relative", zIndex: 1, overflow: "hidden" }}>

      <div style={{ maxWidth: 1160, margin: "0 auto", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }} className="hero-grid">

        {/* LEFT */}
        <div ref={leftRef} style={{ flex: "1 1 420px", minWidth: 0 }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
            borderRadius: 50, padding: "6px 18px", marginBottom: 24,
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#F9A8D4",
          }}>
            #PowerfulMoms
          </div>

          <h1 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(2rem, 5.5vw, 4rem)", lineHeight: 1.1,
            marginBottom: 20, color: "white",
          }}>
            Se escribe{" "}
            <em style={{ color: "rgba(255,255,255,0.4)", fontStyle: "italic" }}>mamá,</em>
            <br />
            pero se pronuncia
            <br />
            <span className="gradient-text-light">Powerful Mom.</span>
          </h1>

          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.12rem)",
            color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 12, maxWidth: 500,
          }}>
            Eres mamá, eres profesionista y quieres generar ingresos{" "}
            <strong style={{ color: "white" }}>sin descuidar a tu familia.</strong>
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(0.88rem, 1.5vw, 1rem)",
            color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480,
          }}>
            Conviértete en agente GNP —{" "}
            <span style={{ color: "#F9A8D4", fontWeight: 600 }}>la 2ª carrera mejor pagada de México</span>{" "}
            — con horarios flexibles y sin límite de ingresos.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 36 }}>
            {[
              { val: "$60K+", label: "al mes" },
              { val: "3 de 5", label: "seguros GNP" },
              { val: "#2", label: "mejor pagada" },
            ].map(s => (
              <div key={s.val} style={{
                background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 10, padding: "8px 14px",
                display: "flex", alignItems: "center", gap: 7,
              }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "0.95rem", color: "#F9A8D4" }}>{s.val}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.38)" }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <button onClick={scrollToForm} className="btn-cta" style={{
              padding: "16px 32px", borderRadius: 50, border: "none", cursor: "pointer",
              fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 14,
              color: "white", letterSpacing: 0.5, textTransform: "uppercase",
            }}>
              Quiero ser Powerful Mom
            </button>
            <button onClick={scrollToForm} className="btn-outline">
              Conocer más
            </button>
          </div>
        </div>

        {/* RIGHT — Circular image with animated ring */}
        <div style={{
          flex: "1 1 320px", display: "flex",
          alignItems: "center", justifyContent: "center",
          position: "relative", minHeight: 380,
        }}>
          {/* Rotating gradient ring — SVG approach for better perf */}
          <svg
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 420, height: 420,
              animation: "rotate-ring 7s linear infinite",
              willChange: "transform",
            }}
            viewBox="0 0 420 420"
          >
            <defs>
              <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%"   stopColor="#7C3AED" />
                <stop offset="33%"  stopColor="#A21CAF" />
                <stop offset="66%"  stopColor="#DB2777" />
                <stop offset="100%" stopColor="#EC4899" />
              </linearGradient>
            </defs>
            <circle cx="210" cy="210" r="200" fill="none" stroke="url(#ringGrad)" strokeWidth="4" strokeLinecap="round"
              strokeDasharray="300 1000" />
          </svg>

          {/* Counter-rotating dashed ring */}
          <svg
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 450, height: 450,
              animation: "rotate-ring-r 12s linear infinite",
              willChange: "transform",
            }}
            viewBox="0 0 450 450"
          >
            <circle cx="225" cy="225" r="218" fill="none"
              stroke="rgba(249,168,212,0.2)" strokeWidth="1"
              strokeDasharray="8 14" strokeLinecap="round" />
          </svg>

          {/* Pulse rings */}
          {[0, 1, 2].map(i => (
            <div key={i} style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: 380, height: 380, borderRadius: "50%",
              border: "1px solid rgba(219,39,119,0.2)",
              animation: `pulse-ring 3s ease-out ${i * 1}s infinite`,
            }} />
          ))}

          {/* Circular image */}
          <div style={{
            width: 340, height: 340, borderRadius: "50%",
            overflow: "hidden", position: "relative", zIndex: 2,
            animation: "float 6s ease-in-out infinite",
            willChange: "transform",
            background: "linear-gradient(160deg, #6B21A8, #9D174D)",
            flexShrink: 0,
          }}>
            <Image
              src="/assets/hero-mujer.png"
              alt="Powerful Mom"
              fill
              sizes="340px"
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hide-mobile" style={{
        position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 4,
        color: "rgba(255,255,255,0.18)", fontSize: 10,
        fontFamily: "Inter, sans-serif", letterSpacing: 2, textTransform: "uppercase",
        animation: "float 2.5s ease-in-out infinite",
      }}>
        scroll
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  );
}
