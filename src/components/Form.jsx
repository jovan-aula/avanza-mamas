"use client";
import { useEffect, useRef } from "react";

export default function Form() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="formulario" className="section-white" style={{ padding: "80px 20px 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 680, margin: "0 auto" }} ref={ref}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: 40 }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            borderRadius: 50, padding: "6px 20px", marginBottom: 14,
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
          <p style={{ color: "rgba(26,0,48,0.45)", fontFamily: "Inter, sans-serif", fontSize: "0.95rem" }}>
            Un asesor te contactará en menos de 24 horas.
          </p>
        </div>

        {/* CRM Form — iframe nativo */}
        <div className="reveal" style={{
          borderRadius: 20, overflow: "hidden",
          boxShadow: "0 4px 40px rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.12)",
          background: "#fff",
          minHeight: 900,
        }}>
          <iframe
            src="https://crm.avanzacapital.mx/widget/form/dFyEin2X1LiYDQMJHrgJ"
            id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="RECLUTAMIENTO MAYO 2026 MOM"
            data-height="896"
            data-layout-iframe-id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-form-id="dFyEin2X1LiYDQMJHrgJ"
            title="RECLUTAMIENTO MAYO 2026 MOM"
            style={{ width: "100%", height: "896px", border: "none", display: "block" }}
          />
        </div>
      </div>
    </section>
  );
}
