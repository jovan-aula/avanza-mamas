"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const titleRef = useRef(null);

  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    setTimeout(() => {
      el.style.transition = "opacity 1s ease, transform 1s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 200);
  }, []);

  const scrollToForm = () => {
    document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(168,85,247,0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(255,75,124,0.12) 0%, transparent 60%), #0a0010",
        padding: "80px 20px",
        zIndex: 1,
      }}
    >
      {/* Orbs de fondo */}
      <div
        className="orb"
        style={{
          width: 500,
          height: 500,
          background: "rgba(168,85,247,0.12)",
          top: "-100px",
          left: "-150px",
        }}
      />
      <div
        className="orb"
        style={{
          width: 400,
          height: 400,
          background: "rgba(255,75,124,0.1)",
          bottom: "-100px",
          right: "-100px",
        }}
      />

      <div
        style={{ maxWidth: 900, width: "100%", textAlign: "center", position: "relative", zIndex: 2 }}
        ref={titleRef}
      >
        {/* Badge mes de mayo */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(255,75,124,0.15)",
            border: "1px solid rgba(255,75,124,0.4)",
            borderRadius: 50,
            padding: "8px 20px",
            marginBottom: 32,
            color: "#F9A8D4",
            fontSize: 14,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          <span style={{ fontSize: 18 }}>🌸</span>
          Mayo · Mes de las Madres
          <span style={{ fontSize: 18 }}>🌸</span>
        </div>

        {/* Headline principal */}
        <h1
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2.2rem, 6vw, 5rem)",
            lineHeight: 1.1,
            marginBottom: 24,
            color: "white",
          }}
        >
          Eres mamá.
          <br />
          <span className="gradient-text">Eres imparable.</span>
          <br />
          <span style={{ color: "rgba(255,255,255,0.85)", fontWeight: 700 }}>
            Ahora, sé libre.
          </span>
        </h1>

        {/* Subheadline */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "clamp(1rem, 2.5vw, 1.3rem)",
            color: "rgba(255,255,255,0.7)",
            maxWidth: 650,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          Conviértete en agente de seguros GNP y construye un negocio propio
          con horarios flexibles, ingresos superiores a{" "}
          <span style={{ color: "#F1952A", fontWeight: 700 }}>$60,000 MXN</span>{" "}
          y el respaldo del equipo más poderoso de Tijuana y Ensenada.
        </p>

        {/* CTAs */}
        <div
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: 60,
          }}
        >
          <button
            onClick={scrollToForm}
            className="btn-cta glow-pink"
            style={{
              padding: "18px 40px",
              borderRadius: 50,
              border: "none",
              cursor: "pointer",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 800,
              fontSize: 16,
              color: "white",
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            <span>Quiero ser agente 🌸</span>
          </button>
          <button
            onClick={scrollToForm}
            style={{
              padding: "18px 40px",
              borderRadius: 50,
              border: "2px solid rgba(168,85,247,0.5)",
              background: "transparent",
              cursor: "pointer",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 16,
              color: "white",
              letterSpacing: 1,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = "#A855F7";
              e.target.style.background = "rgba(168,85,247,0.15)";
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = "rgba(168,85,247,0.5)";
              e.target.style.background = "transparent";
            }}
          >
            Conocer más
          </button>
        </div>

        {/* Social proof strip */}
        <div
          style={{
            display: "flex",
            gap: 40,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {[
            { num: "+200", label: "Agentes activas" },
            { num: "GNP", label: "Respaldo #1 en México" },
            { num: "$60K+", label: "Ingreso mensual posible" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 900,
                  fontSize: "1.8rem",
                  color: "#FF4B7C",
                  textShadow: "0 0 20px rgba(255,75,124,0.5)",
                }}
              >
                {item.num}
              </div>
              <div
                style={{
                  color: "rgba(255,255,255,0.5)",
                  fontSize: "0.8rem",
                  fontFamily: "Inter, sans-serif",
                }}
              >
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          color: "rgba(255,255,255,0.3)",
          fontSize: 12,
          fontFamily: "Inter, sans-serif",
          animation: "float 2s ease-in-out infinite",
        }}
      >
        <span>Descubre más</span>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}
