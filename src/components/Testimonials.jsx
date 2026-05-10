"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Faby Cárdenas",
    role: "Agente Avanza Capital",
    text: "Gracias a Avanza Capital, encontré la estabilidad que buscaba sin renunciar a mi tiempo con mi familia. Hoy manejo mi propio negocio y mis ingresos han superado mis expectativas.",
    image: "/Testimonios/Faby C%C3%A1rdenas.png",
    color: "#7C3AED",
  },
  {
    name: "Marcia Raphael",
    role: "Agente Avanza Capital",
    text: "Formar parte de Avanza Capital ha sido una de las mejores decisiones de mi carrera como agente de seguros. Desde el primer día sentí un ambiente de trabajo positivo, colaborativo y lleno de energía.",
    image: "/Testimonios/Marcia Raphael.png",
    color: "#DB2777",
  },
  {
    name: "Palmira Cubillas",
    role: "Agente Avanza Capital",
    text: "Ser agente de seguros no solo es asesorar para proteger un patrimonio; es también conectar con las personas, identificar sus necesidades y brindar seguridad y confianza. Debes ser parte de su círculo de personas favoritas... ¡SIEMPRE!",
    image: "/Testimonios/Palmira Cubilla.png",
    color: "#A21CAF",
  },
];

const QuoteIcon = ({ color }) => (
  <svg width="26" height="20" viewBox="0 0 32 24" fill={color} fillOpacity="0.28">
    <path d="M0 24V14.4C0 10.4 0.933 7.067 2.8 4.4 4.667 1.6 7.467 0 11.2 0L12.8 2.4C10.267 3.067 8.4 4.467 7.2 6.6 6.133 8.6 5.6 10.667 5.6 12.8H11.2V24H0ZM19.2 24V14.4C19.2 10.4 20.133 7.067 22 4.4 23.867 1.6 26.667 0 30.4 0L32 2.4C29.467 3.067 27.6 4.467 26.4 6.6 25.333 8.6 24.8 10.667 24.8 12.8H30.4V24H19.2Z" />
  </svg>
);

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && sectionRef.current?.classList.add("visible"),
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo((active + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, [active]);

  const goTo = (index) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => { setActive(index); setAnimating(false); }, 280);
  };

  const t = testimonials[active];

  return (
    <section id="testimonios" className="section-dark sec-pad">
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)", marginBottom: 14,
          }}>
            Agentes de Seguros GNP · Historias reales
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 4vw, 3rem)", color: "white",
          }}>
            Mamás que eligieron{" "}
            <span className="gradient-text-light">también ser agentes</span>
          </h2>
        </div>

        {/* Card */}
        <div ref={sectionRef} className="reveal">
          <div style={{
            borderRadius: 20, overflow: "hidden",
            background: "rgba(255,255,255,0.06)",
            border: "1px solid rgba(255,255,255,0.1)",
            opacity: animating ? 0 : 1,
            transform: animating ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.28s ease, transform 0.28s ease",
          }}>
            <div className="test-grid">
              {/* Photo */}
              <div className="test-photo" style={{
                background: `linear-gradient(180deg, ${t.color}22, rgba(0,0,0,0.3))`,
              }}>
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 3,
                  background: `linear-gradient(90deg, ${t.color}, transparent)`,
                }} />
                <Image
                  src={t.image} alt={t.name} fill
                  sizes="(max-width:640px) 100vw, 260px"
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                />
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                  background: "linear-gradient(to top, rgba(20,0,40,0.75), transparent)",
                }} />
              </div>

              {/* Text */}
              <div className="test-body">
                <QuoteIcon color={t.color} />
                <p style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.9rem, 1.6vw, 1.05rem)",
                  color: "rgba(255,255,255,0.82)", lineHeight: 1.82, fontStyle: "italic",
                }}>
                  {t.text}
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12, paddingTop: 14, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                  <div style={{ width: 22, height: 2, background: t.color, borderRadius: 2, flexShrink: 0 }} />
                  <div>
                    <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 800, color: "white", fontSize: "0.9rem" }}>{t.name}</div>
                    <div style={{ fontFamily: "Inter, sans-serif", color: "rgba(255,255,255,0.3)", fontSize: "0.74rem", marginTop: 2 }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 24 }}>
          {testimonials.map((item, i) => (
            <button key={i} onClick={() => goTo(i)} style={{
              width: i === active ? 28 : 8, height: 8, borderRadius: 4,
              background: i === active ? item.color : "rgba(255,255,255,0.15)",
              border: "none", cursor: "pointer", padding: 0,
              transition: "all 0.35s ease",
            }} />
          ))}
        </div>
      </div>
    </section>
  );
}
