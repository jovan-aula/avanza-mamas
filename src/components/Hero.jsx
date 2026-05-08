"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const leftRef = useRef(null);

  useEffect(() => {
    const el = leftRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(-30px)";
    setTimeout(() => {
      el.style.transition = "opacity 0.9s ease, transform 0.9s ease";
      el.style.opacity = "1";
      el.style.transform = "translateX(0)";
    }, 200);
  }, []);

  const scrollToForm = () =>
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="section-dark"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "110px 40px 70px",
        zIndex: 1,
      }}
    >
      {/* Subtle noise texture overlay */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E\")",
        opacity: 0.4,
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", display: "flex", alignItems: "center", gap: 60, flexWrap: "wrap", position: "relative", zIndex: 2 }}>

        {/* LEFT — Copy */}
        <div ref={leftRef} style={{ flex: "1 1 460px" }}>
          {/* Badge */}
          <div style={{
            display: "inline-block",
            background: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: 50, padding: "7px 20px", marginBottom: 28,
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 12, letterSpacing: 3, textTransform: "uppercase", color: "#F9A8D4",
          }}>
            #PowerfulMoms
          </div>

          <h1 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(2rem, 5.5vw, 4.2rem)", lineHeight: 1.08,
            marginBottom: 24, color: "white",
          }}>
            Se escribe{" "}
            <span style={{ color: "rgba(255,255,255,0.45)", fontStyle: "italic" }}>mamá,</span>
            <br />
            pero se pronuncia
            <br />
            <span className="gradient-text-light">Powerful Mom.</span>
          </h1>

          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 1.8vw, 1.15rem)",
            color: "rgba(255,255,255,0.7)", lineHeight: 1.8,
            marginBottom: 14, maxWidth: 520,
          }}>
            Eres mamá, eres profesionista y quieres generar ingresos{" "}
            <strong style={{ color: "white" }}>sin descuidar a tu familia.</strong>
          </p>
          <p style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
            color: "rgba(255,255,255,0.55)", lineHeight: 1.75,
            marginBottom: 36, maxWidth: 500,
          }}>
            Conviértete en agente de seguros GNP —{" "}
            <span style={{ color: "#F9A8D4", fontWeight: 600 }}>
              la 2ª carrera mejor pagada de México
            </span>{" "}
            — con horarios flexibles y sin límite de ingresos.
          </p>

          {/* Stats pills */}
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 40 }}>
            {[
              { val: "$60K+", label: "al mes posible" },
              { val: "3 de 5", label: "seguros son GNP" },
              { val: "#2", label: "carrera mejor pagada" },
            ].map(s => (
              <div key={s.val} style={{
                background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.18)",
                borderRadius: 10, padding: "9px 16px",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1rem", color: "#F9A8D4" }}>{s.val}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.4)" }}>{s.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <button onClick={scrollToForm} className="btn-cta" style={{
              padding: "17px 38px", borderRadius: 50, border: "none", cursor: "pointer",
              fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 15,
              color: "white", letterSpacing: 0.5, textTransform: "uppercase",
            }}>
              <span>Quiero ser Powerful Mom</span>
            </button>
            <button onClick={scrollToForm} style={{
              padding: "17px 32px", borderRadius: 50,
              border: "2px solid rgba(255,255,255,0.25)",
              background: "transparent", cursor: "pointer",
              fontFamily: "Montserrat, sans-serif", fontWeight: 600,
              fontSize: 14, color: "rgba(255,255,255,0.7)", transition: "all 0.25s",
            }}
              onMouseEnter={e => { e.target.style.borderColor = "white"; e.target.style.color = "white"; }}
              onMouseLeave={e => { e.target.style.borderColor = "rgba(255,255,255,0.25)"; e.target.style.color = "rgba(255,255,255,0.7)"; }}
            >
              Conocer más
            </button>
          </div>
        </div>

        {/* RIGHT — Circular image */}
        <div style={{
          flex: "1 1 360px", display: "flex",
          alignItems: "center", justifyContent: "center",
          minHeight: 480, position: "relative",
        }}>
          {/* Outer rotating gradient ring */}
          <div style={{
            position: "absolute",
            width: 420, height: 420,
            borderRadius: "50%",
            background: "conic-gradient(from 0deg, #7C3AED, #DB2777, #EC4899, #A21CAF, #7C3AED)",
            animation: "rotate-ring 6s linear infinite",
            padding: 4,
          }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "linear-gradient(160deg, #3B0764, #6B21A8)" }} />
          </div>

          {/* Inner counter-rotating dashed ring */}
          <div style={{
            position: "absolute",
            width: 450, height: 450,
            borderRadius: "50%",
            border: "1.5px dashed rgba(249,168,212,0.3)",
            animation: "rotate-ring-r 10s linear infinite",
          }} />
          <div style={{
            position: "absolute",
            width: 480, height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(236,72,153,0.15)",
            animation: "rotate-ring 18s linear infinite",
          }} />

          {/* Pulse rings */}
          {[0, 0.8, 1.6].map(delay => (
            <div key={delay} style={{
              position: "absolute",
              width: 430, height: 430, borderRadius: "50%",
              border: "1px solid rgba(219,39,119,0.25)",
              animation: `pulse-ring 3s ease-out ${delay}s infinite`,
            }} />
          ))}

          {/* Image circle */}
          <div style={{
            width: 400, height: 400, borderRadius: "50%",
            overflow: "hidden",
            position: "relative", zIndex: 2,
            animation: "float 6s ease-in-out infinite",
            flexShrink: 0,
          }}>
            {/* Glow fill */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              background: "radial-gradient(circle at 40% 30%, rgba(219,39,119,0.2), rgba(59,7,100,0.6))",
              zIndex: 1,
            }} />
            <Image
              src="/assets/hero-mujer.png"
              alt="Powerful Mom"
              fill
              style={{ objectFit: "cover", objectPosition: "center top" }}
              priority
            />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div style={{
        position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 5,
        color: "rgba(255,255,255,0.2)", fontSize: 10,
        fontFamily: "Inter, sans-serif", letterSpacing: 2, textTransform: "uppercase",
        animation: "float 2.5s ease-in-out infinite",
      }}>
        scroll
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
      </div>
    </section>
  );
}
