"use client";
import { useEffect, useRef } from "react";

export default function Form() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Carga el script del CRM una sola vez
  useEffect(() => {
    if (document.querySelector('script[src="https://crm.avanzacapital.mx/js/form_embed.js"]')) return;
    const script = document.createElement("script");
    script.src = "https://crm.avanzacapital.mx/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section
      id="formulario"
      style={{
        padding: "100px 20px",
        position: "relative",
        zIndex: 1,
        background:
          "radial-gradient(ellipse at 30% 50%, rgba(168,85,247,0.1) 0%, transparent 70%)",
      }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }} ref={ref}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }} className="reveal">
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
            Da el primer paso
          </div>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Empieza tu historia{" "}
            <span className="gradient-text">Powerful Mom</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.5)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
            }}
          >
            Déjanos tus datos y un asesor te contactará en menos de 24 horas.
          </p>
        </div>

        {/* CRM Form wrapper */}
        <div
          className="reveal glass-dark"
          style={{
            borderRadius: 28,
            overflow: "hidden",
            padding: "8px",
          }}
        >
          <iframe
            src="https://crm.avanzacapital.mx/widget/form/dFyEin2X1LiYDQMJHrgJ"
            style={{
              width: "100%",
              height: "896px",
              border: "none",
              borderRadius: "20px",
              display: "block",
            }}
            id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-layout='{"id":"INLINE"}'
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
          />
        </div>
      </div>
    </section>
  );
}
