"use client";
import { useEffect, useRef, useState } from "react";
import { IconAward, IconShield, IconDollar, IconUsers } from "./Icons";

function useCountUp(target, duration = 1800, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

const stats = [
  { Icon: IconAward,  prefix: "#", value: 2,   suffix: "",      label: "Carrera mejor pagada en México",  desc: "Solo por debajo de medicina especializada",  color: "#7C3AED" },
  { Icon: IconShield, prefix: "",  value: 3,    suffix: " de 5", label: "Seguros en México son GNP",       desc: "La aseguradora líder del país te respalda",  color: "#A21CAF" },
  { Icon: IconDollar, prefix: "$", value: 60,   suffix: "K+",    label: "Ingreso mensual posible",         desc: "Desde el primer año como agente activa",     color: "#DB2777" },
  { Icon: IconUsers,  prefix: "+", value: 200,  suffix: "",      label: "Mujeres en nuestra red",          desc: "Agentes activas en Tijuana y Ensenada",      color: "#EC4899" },
];

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); ref.current?.classList.add("visible"); } },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-white sec-pad">
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #7C3AED, #DB2777)",
            borderRadius: 50, padding: "6px 20px", marginBottom: 14,
            fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "white",
          }}>
            Por qué ser agente de seguros
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "#1a0030",
          }}>
            Los números que{" "}
            <span className="gradient-text">lo dicen todo</span>
          </h2>
        </div>

        <div ref={ref} className="reveal stat-grid">
          {stats.map((s, i) => (
            <StatCard key={i} {...s} started={started} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ Icon, prefix, value, suffix, label, desc, color, started }) {
  const count = useCountUp(value, 1800, started);
  return (
    <div className="glass-white" style={{
      borderRadius: 18, padding: "clamp(20px,3vw,36px) clamp(16px,2vw,24px)",
      textAlign: "center", transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "default",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-5px)"; e.currentTarget.style.boxShadow = `0 20px 48px ${color}22`; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 32px rgba(124,58,237,0.08)"; }}
    >
      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: `${color}12`, border: `1px solid ${color}28`,
        display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px",
      }}>
        <Icon size={20} color={color} />
      </div>
      <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 3vw, 2.8rem)", color, lineHeight: 1, marginBottom: 10 }}>
        {prefix}{count}{suffix}
      </div>
      <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "clamp(0.75rem, 1.2vw, 0.88rem)", color: "#1a0030", marginBottom: 6 }}>
        {label}
      </div>
      <div style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.7rem, 1vw, 0.76rem)", color: "rgba(26,0,48,0.4)", lineHeight: 1.5 }}>
        {desc}
      </div>
    </div>
  );
}
