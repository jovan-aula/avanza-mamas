"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const leftRef = useRef(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(-40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 300);
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 10% 60%, rgba(168,85,247,0.18) 0%, transparent 55%), radial-gradient(ellipse at 90% 20%, rgba(255,75,124,0.14) 0%, transparent 55%), #0a0010",
        padding: "100px 40px 60px",
        zIndex: 1,
      }}
    >
      {/* Background orbs */}
      <div className="orb" style={{ width: 600, height: 600, background: "rgba(168,85,247,0.1)", top: "-150px", left: "-200px" }} />
      <div className="orb" style={{ width: 400, height: 400, background: "rgba(255,75,124,0.08)", bottom: "-100px", right: "30%" }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 40, flexWrap: "wrap" }}>

        {/* LEFT — Copy */}
        <div ref={leftRef} style={{ flex: "1 1 480px", position: "relative", zIndex: 2 }}>

          {/* Hashtag badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(255,75,124,0.12)", border: "1px solid rgba(255,75,124,0.35)",
            borderRadius: 50, padding: "8px 20px", marginBottom: 28,
            color: "#FF4B7C", fontSize: 13, fontFamily: "Montserrat, sans-serif",
            fontWeight: 800, letterSpacing: 2, textTransform: "uppercase",
          }}>
            # P o w e r f u l M o m s
          </div>

          {/* Main headline */}
          <h1 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(2rem, 5.5vw, 4.2rem)", lineHeight: 1.08, marginBottom: 20, color: "white",
          }}>
            Se escribe{" "}
            <span style={{ color: "rgba(255,255,255,0.5)", fontStyle: "italic" }}>mamá,</span>
            <br />
            pero se pronuncia
            <br />
            <span className="gradient-text">Powerful Mom.</span>
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: "rgba(255,255,255,0.65)", lineHeight: 1.75, marginBottom: 16, maxWidth: 540,
          }}>
            Eres mamá, eres profesionista y quieres generar ingresos{" "}
            <strong style={{ color: "white" }}>sin descuidar a tu familia.</strong>
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
            color: "rgba(255,255,255,0.55)", lineHeight: 1.7, marginBottom: 36, maxWidth: 520,
          }}>
            Desarróllate como agente de seguros GNP — la{" "}
            <span style={{ color: "#F1952A", fontWeight: 700 }}>2ª carrera mejor pagada de México</span>{" "}
            — con horarios flexibles, mentoría real y sin límite de ingresos.
          </p>

          {/* Stat pills */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
            {[
              { val: "$60K+", label: "al mes posible" },
              { val: "3 de 5", label: "seguros son GNP" },
              { val: "#2", label: "carrera mejor pagada" },
            ].map((s) => (
              <div key={s.val} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(168,85,247,0.25)",
                borderRadius: 12, padding: "10px 18px", display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.1rem", color: "#FF4B7C" }}>{s.val}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={scrollToForm} className="btn-cta glow-pink" style={{
              padding: "18px 38px", borderRadius: 50, border: "none", cursor: "pointer",
              fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 15,
              color: "white", letterSpacing: 1, textTransform: "uppercase",
            }}>
              <span>Quiero ser Powerful Mom 💜</span>
            </button>
            <button onClick={scrollToForm} style={{
              padding: "18px 32px", borderRadius: 50, border: "2px solid rgba(168,85,247,0.4)",
              background: "transparent", cursor: "pointer", fontFamily: "Montserrat, sans-serif",
              fontWeight: 600, fontSize: 14, color: "rgba(255,255,255,0.7)", transition: "all 0.3s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "#A855F7"; e.target.style.color = "white"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(168,85,247,0.4)"; e.target.style.color = "rgba(255,255,255,0.7)"; }}
            >
              Conocer más
            </button>
          </div>
        </div>

        {/* RIGHT — Hero image */}
        <div style={{
          flex: "1 1 380px", position: "relative", display: "flex",
          justifyContent: "center", alignItems: "flex-end", minHeight: 500,
        }}>
          {/* Glow behind image */}
          <div style={{
            position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
            width: 340, height: 340, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,75,124,0.25) 0%, rgba(168,85,247,0.15) 50%, transparent 70%)",
            filter: "blur(30px)",
          }} />
          {/* Rotating ring */}
          <div style={{
            position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
            width: 380, height: 380, borderRadius: "50%",
            border: "1px solid rgba(168,85,247,0.2)",
            animation: "spin 20s linear infinite",
          }} />
          <div style={{
            position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
            width: 320, height: 320, borderRadius: "50%",
            border: "1px dashed rgba(255,75,124,0.15)",
            animation: "spin 15s linear infinite reverse",
          }} />

          <Image
            src="/assets/hero-mujer.png"
            alt="Powerful Mom"
            width={460}
            height={560}
            style={{
              objectFit: "contain",
              position: "relative", zIndex: 2,
              animation: "float 6s ease-in-out infinite",
              filter: "drop-shadow(0 0 40px rgba(255,75,124,0.3))",
            }}
            priority
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
        color: "rgba(255,255,255,0.25)", fontSize: 11, fontFamily: "Inter, sans-serif",
        animation: "float 2.5s ease-in-out infinite",
      }}>
        <span>Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>

      <style>{`@keyframes spin { from { transform: translateX(-50%) rotate(0deg); } to { transform: translateX(-50%) rotate(360deg); } }`}</style>
    </section>
  );
}
