"use client";
import { IconBook, IconStar, IconTrendingUp, IconUsers, IconCar, IconCalendar } from "./Icons";

const requisitos = [
  { Icon: IconBook, label: "Carrera trunca o terminada" },
  { Icon: IconCar,  label: "Vehículo propio" },
  { Icon: IconStar, label: "Excelente actitud" },
];

const plus = [
  { Icon: IconTrendingUp, label: "Experiencia en ventas" },
  { Icon: IconUsers,      label: "Servicio al cliente" },
];

export default function Form() {
  return (
    <section id="formulario" className="section-white" style={{ padding: "80px 20px 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 580, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
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
            fontSize: "clamp(1.7rem, 4vw, 2.6rem)", color: "#1a0030", marginBottom: 14,
          }}>
            Empieza tu historia{" "}
            <span className="gradient-text">Powerful Mom</span>
          </h2>

          <p style={{
            color: "rgba(26,0,48,0.45)", fontFamily: "Inter, sans-serif",
            fontSize: "clamp(0.88rem, 1.4vw, 0.98rem)", lineHeight: 1.75,
          }}>
            Solo te toma unos minutos llenar el formulario —
            y puede ser el inicio de algo que cambie tu vida.
          </p>
        </div>

        {/* Requisitos */}
        <div style={{ marginBottom: 44 }}>
          <p style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: "0.72rem", letterSpacing: 3, textTransform: "uppercase",
            color: "rgba(26,0,48,0.28)", marginBottom: 20,
          }}>
            Requisitos
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
            {requisitos.map(({ Icon, label }, i) => (
              <div key={label} style={{
                display: "flex", alignItems: "center", gap: 14,
                padding: "14px 0",
                borderBottom: i < requisitos.length - 1 ? "1px solid rgba(26,0,48,0.06)" : "none",
              }}>
                <Icon size={17} color="#7C3AED" />
                <span style={{
                  fontFamily: "Inter, sans-serif", fontSize: "0.92rem",
                  color: "#1a0030", fontWeight: 500, flex: 1,
                }}>
                  {label}
                </span>
                {/* Check minimalista */}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7l3 3 6-6" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5"/>
                </svg>
              </div>
            ))}
          </div>

          {/* Plus */}
          <div style={{ marginTop: 20, display: "flex", alignItems: "flex-start", gap: 10, flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "Inter, sans-serif", fontSize: "0.78rem",
              color: "rgba(26,0,48,0.3)", fontWeight: 500, paddingTop: 2, whiteSpace: "nowrap",
            }}>
              Suma puntos:
            </span>
            {plus.map(({ Icon, label }) => (
              <div key={label} style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                padding: "4px 12px", borderRadius: 50,
                border: "1px solid rgba(26,0,48,0.1)",
              }}>
                <Icon size={13} color="rgba(26,0,48,0.35)" />
                <span style={{
                  fontFamily: "Inter, sans-serif", fontSize: "0.78rem",
                  color: "rgba(26,0,48,0.4)", fontWeight: 400,
                }}>
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Formulario placeholder */}
        <div style={{
          background: "rgba(124,58,237,0.04)",
          border: "2px dashed rgba(124,58,237,0.18)",
          borderRadius: 20, padding: "60px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 12,
          marginBottom: 28,
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 13,
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 13h6M9 17h4"/>
            </svg>
          </div>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: "0.95rem", color: "#1a0030", margin: 0 }}>
            Formulario pendiente
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "rgba(26,0,48,0.35)", margin: 0 }}>
            Próximamente disponible aquí.
          </p>
        </div>

        {/* Separador */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
          <div style={{ flex: 1, height: 1, background: "rgba(26,0,48,0.08)" }} />
          <span style={{
            fontFamily: "Inter, sans-serif", fontSize: "0.75rem",
            color: "rgba(26,0,48,0.28)", letterSpacing: 1,
          }}>
            o si prefieres
          </span>
          <div style={{ flex: 1, height: 1, background: "rgba(26,0,48,0.08)" }} />
        </div>

        {/* CTA agenda entrevista */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              padding: "14px 28px", borderRadius: 50,
              border: "1.5px solid rgba(124,58,237,0.25)",
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "0.85rem", color: "#7C3AED",
              textDecoration: "none", letterSpacing: 0.3,
              transition: "all 0.25s ease",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = "linear-gradient(135deg, #7C3AED, #DB2777)";
              e.currentTarget.style.color = "white";
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(124,58,237,0.25)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#7C3AED";
              e.currentTarget.style.borderColor = "rgba(124,58,237,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <IconCalendar size={16} color="currentColor" />
            Agenda una entrevista
          </a>
          <p style={{
            fontFamily: "Inter, sans-serif", fontSize: "0.75rem",
            color: "rgba(26,0,48,0.28)", marginTop: 10,
          }}>
            Habla directamente con nuestro equipo
          </p>
        </div>

      </div>
    </section>
  );
}
