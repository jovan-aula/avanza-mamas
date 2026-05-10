"use client";
import Script from "next/script";
import { IconBook, IconStar, IconTrendingUp, IconUsers, IconCar } from "./Icons";

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

        {/* Formulario CRM */}
        <div style={{ width: "100%", minHeight: 953, marginBottom: 28 }}>
          <iframe
            src="https://crm.avanzacapital.mx/widget/form/dFyEin2X1LiYDQMJHrgJ"
            style={{ width: "100%", height: 953, border: "none", borderRadius: 12, display: "block" }}
            id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="RECLUTAMIENTO MAYO 2026 MOM"
            data-height="953"
            data-layout-iframe-id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-form-id="dFyEin2X1LiYDQMJHrgJ"
            title="RECLUTAMIENTO MAYO 2026 MOM"
            loading="eager"
          />
          <Script
            src="https://crm.avanzacapital.mx/js/form_embed.js"
            strategy="afterInteractive"
          />
        </div>


      </div>
    </section>
  );
}
