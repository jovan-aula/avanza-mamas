"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const strips = [
  { val: "Horarios flexibles", icon: "◎" },
  { val: "$60,000+ MXN / mes", icon: "◎" },
  { val: "Capacitación incluida", icon: "◎" },
  { val: "Mentoría personalizada", icon: "◎" },
  { val: "Sin experiencia previa", icon: "◎" },
  { val: "Red de +200 agentes", icon: "◎" },
];

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
    <section className="section-dark" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative", zIndex: 1, overflow: "hidden" }}>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "110px 28px 48px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>

          {/* LEFT */}
          <div ref={leftRef} style={{ flex: "1 1 420px", minWidth: 0 }}>
            <div style={{
              display: "inline-block",
              background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: 50, padding: "6px 18px", marginBottom: 24,
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#F9A8D4",
            }}>
              #PowerfulMoms
            </div>

            <h1 style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 900,
              fontSize: "clamp(2.2rem, 5.5vw, 4.2rem)", lineHeight: 1.08,
              marginBottom: 22, color: "white",
            }}>
              Se escribe{" "}
              <em style={{ color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>mamá,</em>
              <br />pero se pronuncia
              <br /><span className="gradient-text-light">Powerful Mom.</span>
            </h1>

            <p style={{
              fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
              color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 10, maxWidth: 500,
            }}>
              Eres mamá, eres profesionista y quieres generar ingresos{" "}
              <strong style={{ color: "white" }}>sin descuidar a tu familia.</strong>
            </p>
            <p style={{
              fontFamily: "Inter, sans-serif", fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
              color: "rgba(255,255,255,0.48)", lineHeight: 1.75, marginBottom: 32, maxWidth: 480,
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
                  borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 7,
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

          {/* RIGHT — Circular image perfectly contained */}
          <div style={{
            flex: "1 1 300px", display: "flex",
            alignItems: "center", justifyContent: "center",
          }}>
            {/* Outer wrapper that contains ALL rings + image */}
            <div style={{
              position: "relative",
              width: 380, height: 380,
              flexShrink: 0,
            }}>
              {/* Rotating gradient ring — sized to fit within wrapper */}
              <svg
                style={{
                  position: "absolute", top: 0, left: 0,
                  width: "100%", height: "100%",
                  animation: "rotate-ring 7s linear infinite",
                  willChange: "transform",
                }}
                viewBox="0 0 380 380"
              >
                <defs>
                  <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#7C3AED" />
                    <stop offset="33%"  stopColor="#A21CAF" />
                    <stop offset="66%"  stopColor="#DB2777" />
                    <stop offset="100%" stopColor="#EC4899" />
                  </linearGradient>
                </defs>
                <circle cx="190" cy="190" r="182" fill="none"
                  stroke="url(#ringGrad)" strokeWidth="3.5"
                  strokeLinecap="round" strokeDasharray="240 960" />
              </svg>

              {/* Counter-rotating dashed ring */}
              <svg
                style={{
                  position: "absolute", top: -16, left: -16,
                  width: "calc(100% + 32px)", height: "calc(100% + 32px)",
                  animation: "rotate-ring-r 14s linear infinite",
                  willChange: "transform",
                }}
                viewBox="0 0 412 412"
              >
                <circle cx="206" cy="206" r="200" fill="none"
                  stroke="rgba(249,168,212,0.18)" strokeWidth="1"
                  strokeDasharray="6 12" strokeLinecap="round" />
              </svg>

              {/* Pulse rings */}
              {[0, 1.2, 2.4].map(delay => (
                <div key={delay} style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "96%", height: "96%",
                  borderRadius: "50%",
                  border: "1px solid rgba(219,39,119,0.22)",
                  animation: `pulse-ring 3.6s ease-out ${delay}s infinite`,
                  pointerEvents: "none",
                }} />
              ))}

              {/* Image — fills the wrapper with circular clip */}
              <div style={{
                position: "absolute",
                top: "8%", left: "8%",
                width: "84%", height: "84%",
                borderRadius: "50%",
                overflow: "hidden",
                background: "linear-gradient(160deg, #6B21A8, #9D174D)",
                animation: "float 6s ease-in-out infinite",
                willChange: "transform",
              }}>
                <Image
                  src="/assets/hero-mujer.png"
                  alt="Powerful Mom"
                  fill
                  sizes="320px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom strip — "pestañas" de valores */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.2)",
        backdropFilter: "blur(10px)",
        padding: "16px 28px",
        overflow: "hidden",
      }}>
        <div style={{
          display: "flex",
          gap: 0,
          animation: "marquee 30s linear infinite",
          whiteSpace: "nowrap",
          width: "max-content",
        }}>
          {[...strips, ...strips].map((s, i) => (
            <div key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "0 32px",
              borderRight: "1px solid rgba(255,255,255,0.1)",
            }}>
              <span style={{ color: "#EC4899", fontSize: 8 }}>◆</span>
              <span style={{
                fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                fontSize: "0.78rem", color: "rgba(255,255,255,0.55)",
                letterSpacing: 1, textTransform: "uppercase",
              }}>
                {s.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
