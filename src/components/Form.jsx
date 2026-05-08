"use client";
import { useEffect, useRef } from "react";

export default function Form() {
  const ref = useRef(null);
  const scriptLoaded = useRef(false);

  useEffect(() => {
    // Reveal animation
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);

    // Cargar el script del CRM una sola vez, después del iframe
    if (!scriptLoaded.current) {
      scriptLoaded.current = true;
      const existing = document.getElementById("crm-embed-script");
      if (!existing) {
        const script = document.createElement("script");
        script.id = "crm-embed-script";
        script.src = "https://crm.avanzacapital.mx/js/form_embed.js";
        script.type = "text/javascript";
        document.body.appendChild(script);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="formulario" className="section-white" style={{ padding: "80px 20px 100px", position: "relative", zIndex: 1 }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }} ref={ref}>

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

        {/* CRM iframe — exactamente como el cliente lo provee */}
        <div className="reveal" style={{
          borderRadius: 20, overflow: "hidden",
          boxShadow: "0 4px 40px rgba(124,58,237,0.1)",
          border: "1px solid rgba(124,58,237,0.12)",
          background: "#fff",
        }}>
          <iframe
            src="https://crm.avanzacapital.mx/widget/form/dFyEin2X1LiYDQMJHrgJ"
            style={{ width: "100%", height: "956px", border: "none", borderRadius: "3px", display: "block" }}
            id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="RECLUTAMIENTO MAYO 2026 MOM"
            data-height="956"
            data-layout-iframe-id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-form-id="dFyEin2X1LiYDQMJHrgJ"
            title="RECLUTAMIENTO MAYO 2026 MOM"
          />
        </div>
      </div>
    </section>
  );
}
