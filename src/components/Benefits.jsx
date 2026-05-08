"use client";
import { useEffect, useRef } from "react";
import { IconClock, IconTrendingUp, IconBook, IconUsers, IconAward, IconGrow } from "./Icons";

const benefits = [
  { Icon: IconClock,      title: "Horarios que se adaptan a ti",  desc: "Tú decides cuándo trabajar. Tu familia primero, siempre." },
  { Icon: IconTrendingUp, title: "Ingresos sin techo",            desc: "Comisiones crecientes. Tu cartera genera aunque no estés trabajando." },
  { Icon: IconBook,       title: "Capacitación completa",         desc: "Te formamos desde cero. No necesitas experiencia previa en seguros." },
  { Icon: IconUsers,      title: "Mentoría personalizada",        desc: "Mike y su equipo te acompañan en cada paso. No caminas sola." },
  { Icon: IconAward,      title: "Respaldo GNP",                  desc: "La aseguradora #1 de México. 3 de cada 5 seguros son GNP." },
  { Icon: IconGrow,       title: "Crecimiento real",              desc: "Construye tu propio equipo y escala tus ingresos sin límite." },
];

export default function Benefits() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.08 }
    );
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="beneficios" className="section-pink sec-pad" style={{ overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", marginBottom: 52 }}>
          <div style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 4, textTransform: "uppercase",
            color: "rgba(255,255,255,0.55)", marginBottom: 14,
          }}>
            Un modelo diseñado para ti
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.7rem, 4vw, 3rem)", color: "white", marginBottom: 12,
          }}>
            Sin jefe. Sin horario fijo.
            <br />
            <span className="gradient-text-light">Sin límite de ingresos.</span>
          </h2>
        </div>

        <div className="benefits-grid">
          {benefits.map(({ Icon, title, desc }, i) => (
            <div
              key={title}
              ref={el => (refs.current[i] = el)}
              className="reveal"
              style={{
                background: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRadius: 18, padding: "clamp(20px,3vw,30px) clamp(18px,2.5vw,26px)",
                display: "flex", gap: 16, alignItems: "flex-start",
                transition: `all 0.3s ease ${i * 0.05}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.18)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              <div style={{
                flexShrink: 0, width: 44, height: 44, borderRadius: 12,
                background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <Icon size={20} color="white" />
              </div>
              <div>
                <h3 style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "clamp(0.88rem, 1.4vw, 1rem)", color: "white", marginBottom: 7 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.8rem, 1.2vw, 0.88rem)", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
