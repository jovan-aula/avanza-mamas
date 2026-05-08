"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const strips = [
  "Horarios 100% flexibles",
  "$60,000+ MXN al mes",
  "Capacitación incluida",
  "Mentoría personalizada",
  "Sin experiencia previa",
  "Red de +200 agentes",
];

export default function Hero() {
  const leftRef = useRef(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="section-dark" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", overflow: "hidden" }}>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "100px 40px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="hero-main" style={{ alignItems: "center" }}>

            {/* LEFT — Copy */}
            <div className="hero-left" ref={leftRef}>
              <div style={{
                display: "inline-block",
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 50, padding: "6px 16px", marginBottom: 24,
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
                <em style={{ color: "rgba(255,255,255,0.38)", fontStyle: "italic" }}>mamá,</em>
                <br />pero se pronuncia
                <br /><span className="gradient-text-light">Powerful Mom.</span>
              </h1>

              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                color: "rgba(255,255,255,0.65)", lineHeight: 1.8, marginBottom: 12,
              }}>
                Eres mamá, eres profesionista y quieres generar ingresos{" "}
                <strong style={{ color: "white" }}>sin descuidar a tu familia.</strong>
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
                color: "rgba(255,255,255,0.48)", lineHeight: 1.75, marginBottom: 32,
              }}>
                Conviértete en agente GNP —{" "}
                <span style={{ color: "#F9A8D4", fontWeight: 600 }}>la 2ª carrera mejor pagada de México</span>{" "}
                — con horarios flexibles y sin límite de ingresos.
              </p>

              {/* Stat pills */}
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 32 }}>
                {[
                  { val: "$60K+", label: "al mes" },
                  { val: "3 de 5", label: "seguros GNP" },
                  { val: "#2", label: "mejor pagada" },
                ].map(s => (
                  <div key={s.val} style={{
                    background: "rgba(255,255,255,0.09)", border: "1px solid rgba(255,255,255,0.15)",
                    borderRadius: 10, padding: "8px 14px", display: "flex", alignItems: "center", gap: 6,
                  }}>
                    <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "0.9rem", color: "#F9A8D4" }}>{s.val}</span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "rgba(255,255,255,0.38)" }}>{s.label}</span>
                  </div>
                ))}
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button onClick={scrollToForm} className="btn-cta" style={{
                  padding: "15px 30px", borderRadius: 50, border: "none", cursor: "pointer",
                  fontFamily: "Montserrat, sans-serif", fontWeight: 800,
                  fontSize: "clamp(12px, 1.4vw, 14px)",
                  color: "white", letterSpacing: 0.5, textTransform: "uppercase",
                }}>
                  Quiero ser Powerful Mom
                </button>
                <button onClick={scrollToForm} className="btn-outline">
                  Conocer más
                </button>
              </div>
            </div>

            {/* RIGHT — Imagen rectangular con anillo animado */}
            <div className="hero-right">
              <div style={{ position: "relative", width: "100%", maxWidth: 460 }}>

                {/* Anillo gradiente giratorio — detrás de la imagen */}
                <div style={{
                  position: "absolute",
                  inset: -6,
                  borderRadius: 28,
                  background: "conic-gradient(from 0deg, #7C3AED, #A21CAF, #DB2777, #EC4899, #DB2777, #A21CAF, #7C3AED)",
                  animation: "rotate-ring 6s linear infinite",
                  willChange: "transform",
                  zIndex: 0,
                }} />

                {/* Anillo difuminado exterior */}
                <div style={{
                  position: "absolute",
                  inset: -16,
                  borderRadius: 34,
                  border: "1.5px dashed rgba(249,168,212,0.2)",
                  animation: "rotate-ring-r 12s linear infinite",
                  willChange: "transform",
                  zIndex: 0,
                }} />

                {/* Imagen rectangular */}
                <div style={{
                  position: "relative",
                  borderRadius: 22,
                  overflow: "hidden",
                  zIndex: 1,
                  lineHeight: 0,
                  animation: "float 6s ease-in-out infinite",
                  willChange: "transform",
                  boxShadow: "0 24px 60px rgba(0,0,0,0.3)",
                }}>
                  <Image
                    src="/assets/cabecera.png"
                    alt="Powerful Mom"
                    width={460}
                    height={520}
                    sizes="(max-width:640px) 90vw, (max-width:768px) 45vw, 460px"
                    style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "auto", display: "block" }}
                    priority
                  />
                  {/* Glow overlay sutil */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 60%, rgba(59,7,100,0.4) 100%)",
                    pointerEvents: "none",
                  }} />
                </div>

                {/* Pulsos */}
                {[0, 1.5].map(delay => (
                  <div key={delay} style={{
                    position: "absolute", inset: -24, borderRadius: 36,
                    border: "1px solid rgba(219,39,119,0.18)",
                    animation: `pulse-ring 4s ease-out ${delay}s infinite`,
                    zIndex: 0, pointerEvents: "none",
                  }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.2)", backdropFilter: "blur(10px)",
        padding: "14px 0", overflow: "hidden",
      }}>
        <div style={{
          display: "flex", animation: "marquee 28s linear infinite",
          whiteSpace: "nowrap", width: "max-content",
        }}>
          {[...strips, ...strips].map((s, i) => (
            <div key={i} style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "0 28px", borderRight: "1px solid rgba(255,255,255,0.08)",
            }}>
              <span style={{ color: "#EC4899", fontSize: 7 }}>◆</span>
              <span style={{
                fontFamily: "Montserrat, sans-serif", fontWeight: 600,
                fontSize: "0.72rem", color: "rgba(255,255,255,0.5)",
                letterSpacing: 1, textTransform: "uppercase",
              }}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @media (max-width:640px) {
          .hero-main { padding: 0 !important; gap: 32px !important; }
          .hero-left  { order: 2; }
          .hero-right { order: 1; width: 100% !important; max-width: 300px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
