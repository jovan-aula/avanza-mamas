"use client";
import Script from "next/script";
import Image from "next/image";
import Footer from "@/components/Footer";

const petalD = "M 0,0 C -9,-13 -7,-31 0,-43 C 7,-31 9,-13 0,0";
const singlePetalD = "M 0,0 C -10,-10 -9,-28 0,-40 C 9,-28 10,-10 0,0";

function FlowerSVG({ size, color, opacity, petals, style }) {
  const step = Math.round(360 / petals);
  const angles = Array.from({ length: petals }, (_, i) => i * step);
  return (
    <svg width={size} height={size} viewBox="-60 -60 120 120" fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}>
      <g stroke={color} strokeWidth="1.4" strokeLinecap="round" opacity={opacity}>
        {angles.map((a) => <path key={a} d={petalD} transform={`rotate(${a})`} />)}
        <circle cx="0" cy="0" r="5" strokeWidth="1.2" />
      </g>
    </svg>
  );
}

function PetalSVG({ size, color, opacity, rotate = 0, style }) {
  return (
    <svg width={size} height={size} viewBox="-20 -45 40 50" fill="none"
      style={{ position: "absolute", pointerEvents: "none", ...style }}>
      <path d={singlePetalD} stroke={color} strokeWidth="1.3" strokeLinecap="round"
        opacity={opacity} transform={`rotate(${rotate})`} />
    </svg>
  );
}

export default function Entrevista() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(150deg, #3B0764 0%, #6B21A8 45%, #9D174D 80%, #831843 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "60px 20px 80px",
      position: "relative", overflow: "hidden",
    }}>

      {/* Fondo decorativo sutil */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,168,212,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* ── Flores decorativas — fondo de toda la página ── */}

      {/* Top izquierda */}
      <div style={{ position: "absolute", top: 60, left: -30, animation: "flowerFloat1 6s ease-in-out infinite", zIndex: 0 }}>
        <FlowerSVG size={170} color="#F9A8D4" opacity={0.2} petals={6} style={{}} />
      </div>
      {/* Top derecha */}
      <div style={{ position: "absolute", top: 100, right: -40, animation: "flowerFloat2 8s ease-in-out infinite", zIndex: 0 }}>
        <FlowerSVG size={130} color="#EC4899" opacity={0.16} petals={5} style={{}} />
      </div>
      {/* Pétalo top derecha */}
      <div style={{ position: "absolute", top: 260, right: 60, animation: "flowerFloat3 5s ease-in-out infinite 0.8s", zIndex: 0 }}>
        <PetalSVG size={44} color="#DDD6FE" opacity={0.2} rotate={-20} style={{}} />
      </div>
      {/* Centro izquierda — detrás del calendario */}
      <div style={{ position: "absolute", top: "38%", left: -50, animation: "flowerFloat2 7s ease-in-out infinite 0.5s", zIndex: 0 }}>
        <FlowerSVG size={150} color="#DDD6FE" opacity={0.15} petals={5} style={{}} />
      </div>
      {/* Centro derecha — detrás del calendario */}
      <div style={{ position: "absolute", top: "45%", right: -35, animation: "flowerFloat1 6.5s ease-in-out infinite 1.2s", zIndex: 0 }}>
        <FlowerSVG size={110} color="#F9A8D4" opacity={0.17} petals={6} style={{}} />
      </div>
      {/* Centro pétalo izquierda */}
      <div style={{ position: "absolute", top: "55%", left: 40, animation: "flowerFloat3 5.5s ease-in-out infinite 2s", zIndex: 0 }}>
        <PetalSVG size={38} color="#EC4899" opacity={0.18} rotate={15} style={{}} />
      </div>
      {/* Bottom izquierda */}
      <div style={{ position: "absolute", bottom: 220, left: -20, animation: "flowerFloat1 7.5s ease-in-out infinite 0.3s", zIndex: 0 }}>
        <FlowerSVG size={120} color="#EC4899" opacity={0.14} petals={4} style={{}} />
      </div>
      {/* Bottom derecha */}
      <div style={{ position: "absolute", bottom: 180, right: -30, animation: "flowerFloat2 6s ease-in-out infinite 1.5s", zIndex: 0 }}>
        <FlowerSVG size={90} color="#F9A8D4" opacity={0.16} petals={5} style={{}} />
      </div>
      {/* Bottom pétalo */}
      <div style={{ position: "absolute", bottom: 120, left: 80, animation: "flowerFloat3 4.8s ease-in-out infinite 1s", zIndex: 0 }}>
        <PetalSVG size={32} color="#DDD6FE" opacity={0.18} rotate={-35} style={{}} />
      </div>

      <style>{`
        @keyframes flowerFloat1 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          30%      { transform: translateY(-20px) rotate(4deg); }
          60%      { transform: translateY(-8px) rotate(-3deg); }
        }
        @keyframes flowerFloat2 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          40%      { transform: translateY(-16px) rotate(-5deg); }
          70%      { transform: translateY(-5px) rotate(3deg); }
        }
        @keyframes flowerFloat3 {
          0%,100% { transform: translateY(0px) rotate(0deg); }
          25%      { transform: translateY(-24px) rotate(6deg); }
          55%      { transform: translateY(-10px) rotate(-4deg); }
        }
      `}</style>

      {/* Logo / marca */}
      <div style={{ marginBottom: 40, textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 50, padding: "8px 20px",
        }}>
          <span style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "0.9rem", color: "white", letterSpacing: 0.5,
          }}>
            Avanza Capital
          </span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>·</span>
          <span style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 600,
            fontSize: "0.75rem", color: "#F9A8D4", letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            #PowerfulMoms
          </span>
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", maxWidth: 560, marginBottom: 48, position: "relative", zIndex: 1 }}>

        {/* Badges */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 50, padding: "6px 16px",
          }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "0.7rem", letterSpacing: 2, textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}>
              Último paso
            </span>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(249,168,212,0.12)", border: "1px solid rgba(249,168,212,0.25)",
            borderRadius: 50, padding: "6px 16px",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "0.7rem", letterSpacing: 2, textTransform: "uppercase", color: "#F9A8D4",
            }}>
              ¡Felicidades, calificas!
            </span>
          </div>
        </div>

        <h1 style={{
          fontFamily: "Montserrat, sans-serif", fontWeight: 900,
          fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.15,
          color: "white", marginBottom: 16,
        }}>
          Un paso más hacia
          <br />
          <span style={{
            background: "linear-gradient(135deg, #fff 0%, #F9A8D4 40%, #EC4899 70%, #fff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            tu nueva vida.
          </span>
        </h1>

        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
        }}>
          Agenda tu videollamada con nuestro equipo.
          Es una conversación breve —{" "}
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            sin compromiso
          </span>
          {" "}— para conocerte y contarte todo sobre el programa.
        </p>
      </div>

      {/* Calendario */}
      <div style={{
        width: "100%", maxWidth: 720,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20, overflow: "hidden",
        position: "relative", zIndex: 1,
      }}>
        <iframe
          src="https://crm.avanzacapital.mx/widget/booking/VVbuahuUue9CU9MvtlyT"
          style={{ width: "100%", minHeight: 600, border: "none", display: "block" }}
          id="VVbuahuUue9CU9MvtlyT_1778376167507"
          scrolling="no"
          title="Agenda tu videollamada — Avanza Capital"
          loading="eager"
        />
        <Script
          src="https://crm.avanzacapital.mx/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>

    </main>
    <Footer />
  );
}
