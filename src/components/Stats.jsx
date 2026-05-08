"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, started = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, target, duration]);
  return count;
}

const stats = [
  { prefix: "#", value: 2, suffix: "", label: "Carrera mejor pagada en México", desc: "Solo por debajo de medicina especializada", color: "#FF4B7C", icon: "🏆" },
  { prefix: "", value: 3, suffix: " de 5", label: "Seguros en México son GNP", desc: "La aseguradora líder del país te respalda", color: "#A855F7", icon: "🛡️" },
  { prefix: "$", value: 60, suffix: "K+", label: "Ingreso mensual posible", desc: "Desde el primer año como agente activa", color: "#F1952A", icon: "💰" },
  { prefix: "+", value: 200, suffix: "", label: "Mujeres en nuestra red", desc: "Agentes activas en Tijuana y Ensenada", color: "#FF4B7C", icon: "👩‍💼" },
];

export default function Stats() {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); ref.current?.classList.add("visible"); } },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      padding: "80px 20px", position: "relative", zIndex: 1,
      background: "linear-gradient(180deg, transparent 0%, rgba(66,15,93,0.15) 50%, transparent 100%)",
    }}>
      {/* Top divider */}
      <div style={{
        maxWidth: 200, height: 1, margin: "0 auto 60px",
        background: "linear-gradient(90deg, transparent, #FF4B7C, #A855F7, transparent)",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", color: "white",
          }}>
            Los números que te van a{" "}
            <span className="gradient-text">convencer</span>
          </h2>
        </div>

        <div ref={ref} className="reveal" style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20,
        }}>
          {stats.map((s, i) => (
            <StatCard key={i} {...s} started={started} delay={i * 150} />
          ))}
        </div>
      </div>

      <div style={{
        maxWidth: 200, height: 1, margin: "60px auto 0",
        background: "linear-gradient(90deg, transparent, #A855F7, #FF4B7C, transparent)",
      }} />
    </section>
  );
}

function StatCard({ prefix, value, suffix, label, desc, color, icon, started, delay }) {
  const count = useCountUp(value, 1800, started);
  const ref = useRef(null);

  return (
    <div
      ref={ref}
      className="glass-dark"
      style={{
        borderRadius: 20, padding: "36px 24px", textAlign: "center",
        transition: `transform 0.3s ease, box-shadow 0.3s ease`,
        transitionDelay: `${delay}ms`,
        cursor: "default",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = `0 20px 50px ${color}22`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: 36, marginBottom: 12 }}>{icon}</div>
      <div style={{
        fontFamily: "Montserrat, sans-serif", fontWeight: 900,
        fontSize: "clamp(2.2rem, 4vw, 3rem)", color,
        textShadow: `0 0 30px ${color}66`,
        lineHeight: 1,
        marginBottom: 10,
      }}>
        {prefix}{count}{suffix}
      </div>
      <div style={{
        fontFamily: "Montserrat, sans-serif", fontWeight: 700,
        fontSize: "0.9rem", color: "white", marginBottom: 6,
      }}>
        {label}
      </div>
      <div style={{
        fontFamily: "Inter, sans-serif", fontSize: "0.78rem",
        color: "rgba(255,255,255,0.35)", lineHeight: 1.5,
      }}>
        {desc}
      </div>
    </div>
  );
}
