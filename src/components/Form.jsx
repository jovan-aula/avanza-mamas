"use client";

export default function Form() {
  return (
    <section id="formulario" className="section-white" style={{ padding: "80px 20px 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 560, margin: "0 auto", textAlign: "center" }}>

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

        <p style={{ color: "rgba(26,0,48,0.45)", fontFamily: "Inter, sans-serif", fontSize: "0.95rem", marginBottom: 40 }}>
          Nuestro equipo de reclutamiento te contactará pronto.
        </p>

        {/* Placeholder formulario */}
        <div style={{
          background: "rgba(124,58,237,0.04)",
          border: "2px dashed rgba(124,58,237,0.2)",
          borderRadius: 20, padding: "60px 40px",
          display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
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

      </div>
    </section>
  );
}
