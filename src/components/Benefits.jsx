"use client";
import { useEffect, useRef } from "react";

const benefits = [
  {
    icon: "⏰",
    title: "Horarios que se adaptan a ti",
    desc: "Tú decides cuándo trabajar. Tu familia primero, siempre.",
    color: "#FF4B7C",
  },
  {
    icon: "💰",
    title: "Ingresos sin techo",
    desc: "Comisiones crecientes y cartera de clientes que genera mientras vives tu vida.",
    color: "#A855F7",
  },
  {
    icon: "📚",
    title: "Capacitación completa",
    desc: "Te formamos desde cero. No necesitas experiencia previa en seguros.",
    color: "#F1952A",
  },
  {
    icon: "🤝",
    title: "Mentoría personalizada",
    desc: "Mike y su equipo te acompañan en cada paso. No caminas sola.",
    color: "#FF4B7C",
  },
  {
    icon: "🏆",
    title: "Respaldo GNP",
    desc: "La aseguradora #1 de México. 3 de cada 5 seguros son GNP.",
    color: "#A855F7",
  },
  {
    icon: "🌱",
    title: "Crecimiento real",
    desc: "Construye tu propio equipo y escala tus ingresos sin límite.",
    color: "#F1952A",
  },
];

export default function Benefits() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      style={{
        padding: "100px 20px",
        position: "relative",
        zIndex: 1,
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(168,85,247,0.08) 0%, transparent 70%)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 70 }}>
          <div
            style={{
              color: "#FF4B7C",
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 4,
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            Por qué Avanza Capital
          </div>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Diseñado para mamás{" "}
            <span className="gradient-text">que quieren más</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1.1rem",
              maxWidth: 500,
              margin: "0 auto",
            }}
          >
            Un modelo de negocio pensado en tu realidad. Sin jefe, sin horario
            fijo, sin límite de ingresos.
          </p>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
          {benefits.map((b, i) => (
            <div
              key={b.title}
              ref={(el) => (refs.current[i] = el)}
              className="reveal glass-dark"
              style={{
                borderRadius: 20,
                padding: "36px 30px",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s ease ${i * 0.1}s`,
                cursor: "default",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = `${b.color}66`;
                e.currentTarget.style.boxShadow = `0 20px 50px ${b.color}22`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 16,
                  background: `${b.color}22`,
                  border: `1px solid ${b.color}44`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 30,
                  marginBottom: 20,
                }}
              >
                {b.icon}
              </div>
              <h3
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  color: "white",
                  marginBottom: 10,
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.55)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
