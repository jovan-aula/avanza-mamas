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
      className="section-white"
      style={{ padding: "100px 20px", position: "relative", zIndex: 1 }}
    >
      <div style={{ maxWidth: 700, margin: "0 auto" }} ref={ref}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 50 }} className="reveal">
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            borderRadius: 50, padding: "6px 20px", marginBottom: 16,
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "white",
          }}>
            Da el primer paso
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "#1a0030", marginBottom: 14,
          }}>
            Empieza tu historia{" "}
            <span className="gradient-text">Powerful Mom</span>
          </h2>
          <p style={{ color: "rgba(26,0,48,0.5)", fontFamily: "Inter, sans-serif", fontSize: "1rem" }}>
            Un asesor te contactará en menos de 24 horas.
          </p>
        </div>

        {/* CRM iframe wrapper */}
        <div className="reveal glass-white" style={{ borderRadius: 24, overflow: "hidden", padding: 6 }}>
          <iframe
            src="https://crm.avanzacapital.mx/widget/form/dFyEin2X1LiYDQMJHrgJ"
            style={{ width: "100%", height: "896px", border: "none", borderRadius: "18px", display: "block" }}
            id="inline-dFyEin2X1LiYDQMJHrgJ"
            data-layout='{"id":"INLINE"}'
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
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
