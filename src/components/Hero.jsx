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

const petalD = "M 0,0 C -9,-13 -7,-31 0,-43 C 7,-31 9,-13 0,0";
const singlePetalD = "M 0,0 C -10,-10 -9,-28 0,-40 C 9,-28 10,-10 0,0";

function FlowerSVG({ size, color, opacity, petals, style }) {
  const step = Math.round(360 / petals);
  const angles = Array.from({ length: petals }, (_, i) => i * step);
  return (
    <svg
      width={size}
      height={size}
      viewBox="-60 -60 120 120"
      fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    >
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity={opacity}>
        {angles.map((a) => (
          <path key={a} d={petalD} transform={`rotate(${a})`} />
        ))}
        <circle cx="0" cy="0" r="5" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

function PetalSVG({ size, color, opacity, rotate = 0, style }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="-20 -45 40 50"
      fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}
    >
      <path
        d={singlePetalD}
        stroke={color}
        strokeWidth="1.3"
        strokeLinecap="round"
        opacity={opacity}
        transform={`rotate(${rotate})`}
      />
    </svg>
  );
}

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
      <div className="hero-content-pad" style={{ flex: 1, display: "flex", alignItems: "center", padding: "100px 40px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%" }}>
          <div className="hero-main" style={{ alignItems: "center" }}>

            {/* LEFT — Copy */}
            <div className="hero-left" ref={leftRef}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: 50, padding: "6px 16px", marginBottom: 24,
                fontFamily: "Montserrat, sans-serif", fontWeight: 700,
                fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "#F9A8D4",
              }}>
                <span style={{ opacity: 0.6 }}>Para Mamás</span>
                <span style={{ color: "rgba(255,255,255,0.25)" }}>·</span>
                <span>Agente de Seguros GNP</span>
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
                Buscamos mamás que quieran convertirse en{" "}
                <strong style={{ color: "white" }}>agentes de seguros GNP</strong>{" "}
                — la 2ª carrera mejor pagada de México.
              </p>
              <p style={{
                fontFamily: "Inter, sans-serif", fontSize: "clamp(0.88rem, 1.4vw, 1rem)",
                color: "rgba(255,255,255,0.48)", lineHeight: 1.75, marginBottom: 32,
              }}>
                Genera{" "}
                <span style={{ color: "#F9A8D4", fontWeight: 600 }}>$60,000+ MXN al mes</span>{" "}
                con horarios flexibles, sin experiencia previa y sin descuidar a tu familia.
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
                  Quiero ser Agente GNP
                </button>
                <button onClick={scrollToForm} className="btn-outline">
                  Conocer más
                </button>
              </div>
            </div>

            {/* RIGHT — Imagen con flores decorativas */}
            <div className="hero-right">
              <div style={{ position: "relative", width: "100%", maxWidth: 460 }}>

                {/* ── Flores decorativas SVG ── */}

                {/* Flor grande — arriba a la derecha */}
                <div style={{ position: "absolute", top: -55, right: -35, animation: "flowerFloat1 7s ease-in-out infinite", zIndex: 0 }}>
                  <FlowerSVG size={128} color="#F9A8D4" opacity={0.55} petals={6} style={{}} />
                </div>

                {/* Flor mediana — abajo izquierda */}
                <div style={{ position: "absolute", bottom: -30, left: -35, animation: "flowerFloat2 9s ease-in-out infinite", zIndex: 0 }}>
                  <FlowerSVG size={88} color="#EC4899" opacity={0.38} petals={5} style={{}} />
                </div>

                {/* Flor pequeña — arriba izquierda */}
                <div style={{ position: "absolute", top: 50, left: -45, animation: "flowerFloat3 6s ease-in-out infinite", zIndex: 0 }}>
                  <FlowerSVG size={54} color="#DDD6FE" opacity={0.48} petals={5} style={{}} />
                </div>

                {/* Flor mini — abajo derecha */}
                <div style={{ position: "absolute", bottom: 90, right: -28, animation: "flowerFloat2 8s ease-in-out infinite 1.5s", zIndex: 0 }}>
                  <FlowerSVG size={40} color="#F9A8D4" opacity={0.4} petals={4} style={{}} />
                </div>

                {/* Pétalo suelto — parte superior */}
                <div style={{ position: "absolute", top: 8, right: 55, animation: "flowerFloat1 5s ease-in-out infinite 0.8s", zIndex: 0 }}>
                  <PetalSVG size={30} color="#F9A8D4" opacity={0.32} rotate={25} style={{}} />
                </div>

                {/* Pétalo suelto — parte inferior izquierda */}
                <div style={{ position: "absolute", bottom: 38, left: 18, animation: "flowerFloat3 6.5s ease-in-out infinite 2s", zIndex: 0 }}>
                  <PetalSVG size={24} color="#DDD6FE" opacity={0.28} rotate={-20} style={{}} />
                </div>

                {/* Imagen rectangular */}
                <div style={{
                  position: "relative",
                  borderRadius: 22,
                  overflow: "hidden",
                  zIndex: 1,
                  lineHeight: 0,
                  boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
                }}>
                  <Image
                    src="/assets/cabecera.png"
                    alt="Powerful Mom"
                    width={460}
                    height={520}
                    sizes="(max-width:640px) 80vw, (max-width:768px) 45vw, 460px"
                    style={{ objectFit: "cover", objectPosition: "center top", width: "100%", height: "auto", display: "block" }}
                    priority
                  />
                  {/* Glow overlay sutil */}
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 60%, rgba(59,7,100,0.35) 100%)",
                    pointerEvents: "none",
                  }} />
                </div>
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
        @keyframes marquee     { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes flowerFloat1 { 0%, 100% { transform: translateY(0px);   } 50% { transform: translateY(-13px); } }
        @keyframes flowerFloat2 { 0%, 100% { transform: translateY(0px);   } 50% { transform: translateY(-8px);  } }
        @keyframes flowerFloat3 { 0%, 100% { transform: translateY(0px);   } 50% { transform: translateY(-17px); } }
        @media (max-width:640px) {
          .hero-main  { padding: 0 !important; gap: 28px !important; }
          .hero-left  { order: 1; }
          .hero-right { order: 2; width: 100% !important; max-width: 240px; margin: 0 auto; }
        }
      `}</style>
    </section>
  );
}
