"use client";
import Script from "next/script";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function Entrevista() {
  return (
    <main style={{
      minHeight: "100vh",
      background: "linear-gradient(150deg, #3B0764 0%, #6B21A8 45%, #9D174D 80%, #831843 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "60px 20px 80px",
      position: "relative", overflow: "hidden",
    }}>

      {/* Fondo decorativo sutil */}
      <div style={{
        position: "absolute", top: -120, right: -120,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(249,168,212,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -80, left: -80,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Logo / marca */}
      <div style={{ marginBottom: 40, textAlign: "center" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: 50, padding: "8px 20px",
        }}>
          <span style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "0.9rem", color: "white", letterSpacing: 0.5,
          }}>
            Avanza Capital
          </span>
          <span style={{ color: "rgba(255,255,255,0.25)", fontSize: 12 }}>·</span>
          <span style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 600,
            fontSize: "0.75rem", color: "#F9A8D4", letterSpacing: 1,
            textTransform: "uppercase",
          }}>
            #PowerfulMoms
          </span>
        </div>
      </div>

      {/* Header */}
      <div style={{ textAlign: "center", maxWidth: 560, marginBottom: 48 }}>

        {/* Badges */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 50, padding: "6px 16px",
          }}>
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "0.7rem", letterSpacing: 2, textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
            }}>
              Último paso
            </span>
          </div>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 7,
            background: "rgba(249,168,212,0.12)", border: "1px solid rgba(249,168,212,0.25)",
            borderRadius: 50, padding: "6px 16px",
          }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#F9A8D4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
            <span style={{
              fontFamily: "Montserrat, sans-serif", fontWeight: 700,
              fontSize: "0.7rem", letterSpacing: 2, textTransform: "uppercase", color: "#F9A8D4",
            }}>
              ¡Felicidades, calificas!
            </span>
          </div>
        </div>

        <h1 style={{
          fontFamily: "Montserrat, sans-serif", fontWeight: 900,
          fontSize: "clamp(1.8rem, 4.5vw, 3rem)", lineHeight: 1.15,
          color: "white", marginBottom: 16,
        }}>
          Un paso más hacia
          <br />
          <span style={{
            background: "linear-gradient(135deg, #fff 0%, #F9A8D4 40%, #EC4899 70%, #fff 100%)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}>
            tu nueva vida.
          </span>
        </h1>

        <p style={{
          fontFamily: "Inter, sans-serif", fontSize: "clamp(0.9rem, 1.5vw, 1rem)",
          color: "rgba(255,255,255,0.6)", lineHeight: 1.75,
        }}>
          Agenda tu videollamada con nuestro equipo.
          Es una conversación breve —{" "}
          <span style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>
            sin compromiso
          </span>
          {" "}— para conocerte y contarte todo sobre el programa.
        </p>
      </div>

      {/* Calendario */}
      <div style={{
        width: "100%", maxWidth: 720,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: 20, overflow: "hidden",
      }}>
        <iframe
          src="https://crm.avanzacapital.mx/widget/booking/VVbuahuUue9CU9MvtlyT"
          style={{ width: "100%", minHeight: 600, border: "none", display: "block" }}
          id="VVbuahuUue9CU9MvtlyT_1778376167507"
          scrolling="no"
          title="Agenda tu videollamada — Avanza Capital"
          loading="eager"
        />
        <Script
          src="https://crm.avanzacapital.mx/js/form_embed.js"
          strategy="afterInteractive"
        />
      </div>

    </main>
    <Footer />
  );
}
