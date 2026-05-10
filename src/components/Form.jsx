"use client";

const requisitos = [
  { emoji: "🎓", label: "Carrera trunca o terminada" },
  { emoji: "🚗", label: "Vehículo propio" },
  { emoji: "⭐", label: "Excelente actitud" },
];

const plusReq = [
  { emoji: "💼", label: "Experiencia en ventas" },
  { emoji: "🤝", label: "Servicio al cliente" },
];

export default function Form() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <section id="formulario" className="section-white" style={{ padding: "80px 20px 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 44 }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            borderRadius: 50, padding: "6px 20px", marginBottom: 20,
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "white",
          }}>
            Da el primer paso
          </div>

          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)", color: "#1a0030", marginBottom: 12,
          }}>
            Empieza tu historia{" "}
            <span className="gradient-text">Powerful Mom</span>
          </h2>

          <p style={{
            color: "rgba(26,0,48,0.5)", fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.9rem, 1.5vw, 1rem)", lineHeight: 1.7, marginBottom: 0,
          }}>
            Solo te toma <strong style={{ color: "#7C3AED" }}>unos minutos</strong> llenar el formulario —
            y puede ser el inicio de algo que{" "}
            <strong style={{ color: "#DB2777" }}>cambie tu vida.</strong>
          </p>
        </div>

        {/* Requisitos */}
        <div style={{
          background: "rgba(124,58,237,0.04)",
          border: "1px solid rgba(124,58,237,0.12)",
          borderRadius: 20, padding: "28px 32px", marginBottom: 32,
        }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 800,
            fontSize: "0.8rem", letterSpacing: 2, textTransform: "uppercase",
            color: "#7C3AED", marginBottom: 18,
          }}>
            Requisitos
          </p>

          {/* Obligatorios */}
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 20 }}>
            {requisitos.map(({ emoji, label }) => (
              <div key={label} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 10, flexShrink: 0,
                  background: "linear-gradient(135deg, rgba(124,58,237,0.12), rgba(219,39,119,0.1))",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 15,
                }}>
                  {emoji}
                </div>
                <span style={{
                  fontFamily: "Inter, sans-serif", fontSize: "0.92rem",
                  color: "#1a0030", fontWeight: 500,
                }}>
                  {label}
                </span>
                <div style={{
                  marginLeft: "auto", width: 18, height: 18, borderRadius: "50%",
                  background: "linear-gradient(135deg, #7C3AED, #DB2777)",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path d="M1 4l2.5 2.5L9 1" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            ))}
          </div>

          {/* Divisor */}
          <div style={{
            borderTop: "1px dashed rgba(124,58,237,0.15)",
            paddingTop: 16, marginTop: 4,
          }}>
            <p style={{
              fontFamily: "Inter, sans-serif", fontSize: "0.74rem",
              color: "rgba(26,0,48,0.38)", marginBottom: 12,
              letterSpacing: 0.5, textTransform: "uppercase", fontWeight: 600,
            }}>
              Es un plus (no obligatorio)
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {plusReq.map(({ emoji, label }) => (
                <div key={label} style={{
                  display: "inline-flex", alignItems: "center", gap: 7,
                  background: "rgba(219,39,119,0.07)", border: "1px solid rgba(219,39,119,0.15)",
                  borderRadius: 50, padding: "6px 14px",
                }}>
                  <span style={{ fontSize: 13 }}>{emoji}</span>
                  <span style={{
                    fontFamily: "Inter, sans-serif", fontSize: "0.82rem",
                    color: "rgba(26,0,48,0.65)", fontWeight: 500,
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Formulario placeholder */}
        <div style={{
          background: "rgba(124,58,237,0.04)",
          border: "2px dashed rgba(124,58,237,0.2)",
          borderRadius: 20, padding: "60px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
          marginBottom: 28,
        }}>
          <div style={{
            width: 52, height: 52, borderRadius: 14,
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 13h6M9 17h4"/>
            </svg>
          </div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "1rem", color: "#1a0030", margin: 0 }}>
            Formulario pendiente
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "rgba(26,0,48,0.4)", margin: 0 }}>
            Próximamente disponible aquí.
          </p>
        </div>

        {/* Separador "o" */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 28 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(26,0,48,0.1)" }} />
          <span style={{
            fontFamily: "Inter, sans-serif", fontSize: "0.8rem",
            color: "rgba(26,0,48,0.3)", fontWeight: 500, letterSpacing: 1,
          }}>
            o si prefieres
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(26,0,48,0.1)" }} />
        </div>

        {/* Botón agenda entrevista */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              padding: "16px 32px", borderRadius: 50,
              border: "2px solid rgba(124,58,237,0.3)",
              background: "rgba(124,58,237,0.05)",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "0.9rem", color: "#7C3AED",
              textDecoration: "none", letterSpacing: 0.3,
              transition: "all 0.25s ease", cursor: "pointer",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #7C3AED, #DB2777)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.border = "2px solid transparent";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(124,58,237,0.3)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "rgba(124,58,237,0.05)";
              e.currentTarget.style.color = "#7C3AED";
              e.currentTarget.style.border = "2px solid rgba(124,58,237,0.3)";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>
              <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01"/>
            </svg>
            Agenda una entrevista
          </a>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "0.78rem",
            color: "rgba(26,0,48,0.35)", marginTop: 10,
          }}>
            Habla directamente con nuestro equipo de reclutamiento
          </p>
        </div>

      </div>
    </section>
  );
}
