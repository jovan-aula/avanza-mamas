"use client";
import { useEffect, useRef } from "react";
import { IconShield, IconAward, IconTrendingUp, IconUsers } from "./Icons";

const reasons = [
  {
    Icon: IconShield,
    title: "Aseguradora #1 de México",
    desc: "GNP lleva más de 100 años protegiendo familias mexicanas. Es la marca de mayor confianza en el sector asegurador.",
    color: "#7C3AED",
  },
  {
    Icon: IconAward,
    title: "3 de cada 5 seguros son GNP",
    desc: "Cuando alguien piensa en seguros en México, piensa en GNP. Vender GNP es vender el producto que el mercado ya quiere.",
    color: "#A21CAF",
  },
  {
    Icon: IconTrendingUp,
    title: "Comisiones de las más altas del mercado",
    desc: "El esquema de compensación de GNP está diseñado para que mientras más construyes, más ganas — sin techo.",
    color: "#DB2777",
  },
  {
    Icon: IconUsers,
    title: "Respaldo y capacitación constante",
    desc: "GNP te certifica, te capacita y te mantiene actualizada. Tienes la empresa detrás de ti y el equipo Avanza Capital a tu lado.",
    color: "#EC4899",
  },
];

export default function GNP() {
  const refs = useRef([]);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.12 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="section-white"
      style={{ padding: "100px 20px", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        {/* Header */}
        <div ref={titleRef} className="reveal" style={{ textAlign: "center", marginBottom: 70 }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            borderRadius: 50, padding: "6px 20px", marginBottom: 16,
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "white",
          }}>
            Tu respaldo
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "#1a0030", marginBottom: 16,
          }}>
            ¿Por qué{" "}
            <span className="gradient-text">GNP Seguros?</span>
          </h2>
          <p style={{
            color: "rgba(26,0,48,0.5)", fontFamily: "Inter, sans-serif",
            fontSize: "1rem", maxWidth: 520, margin: "0 auto", lineHeight: 1.75,
          }}>
            No todas las aseguradoras son iguales. GNP es la que te da las mejores herramientas
            para construir un negocio real y duradero.
          </p>
        </div>

        {/* Split layout */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(460px, 1fr))", gap: 20 }}>
          {reasons.map(({ Icon, title, desc, color }, i) => (
            <div
              key={title}
              ref={el => (refs.current[i] = el)}
              className="reveal"
              style={{
                display: "flex", gap: 20, padding: "28px 32px",
                borderRadius: 18,
                background: "rgba(124,58,237,0.03)",
                border: "1px solid rgba(124,58,237,0.1)",
                transition: `all 0.3s ease ${i * 0.08}s`,
                alignItems: "flex-start",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = `${color}08`;
                e.currentTarget.style.borderColor = `${color}30`;
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = `0 16px 40px ${color}12`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "rgba(124,58,237,0.03)";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.1)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{
                flexShrink: 0, width: 50, height: 50, borderRadius: 14,
                background: `${color}12`, border: `1px solid ${color}25`,
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={24} color={color} />
              </div>
              <div>
                <h3 style={{
                  fontFamily: "Montserrat, sans-serif", fontWeight: 800,
                  fontSize: "1.05rem", color: "#1a0030", marginBottom: 8,
                }}>
                  {title}
                </h3>
                <p style={{
                  fontFamily: "Inter, sans-serif", fontSize: "0.88rem",
                  color: "rgba(26,0,48,0.55)", lineHeight: 1.7,
                }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div style={{
          marginTop: 48,
          background: "linear-gradient(135deg, #7C3AED 0%, #A21CAF 40%, #DB2777 80%, #EC4899 100%)",
          borderRadius: 20, padding: "36px 40px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.3rem", color: "white", marginBottom: 6 }}>
              Avanza Capital + GNP
            </div>
            <p style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.75)", fontSize: "0.9rem" }}>
              La combinación perfecta: la aseguradora #1 de México y el mejor equipo de mentoría en Baja California.
            </p>
          </div>
          <button
            onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-white"
            style={{ flexShrink: 0 }}
          >
            Quiero unirme
          </button>
        </div>
      </div>
    </section>
  );
}
