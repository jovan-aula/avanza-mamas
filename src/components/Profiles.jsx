"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";

const profiles = [
  {
    image: "/assets/mujer-1.png",
    title: "Mamá en casa",
    desc: "Tienes talento, tiempo y energía. Conviértelos en ingresos propios sin sacrificar ni un minuto con tus hijos.",
    tag: "Horario 100% flexible",
    color: "#FF4B7C",
  },
  {
    image: "/assets/mujer-2.png",
    title: "Profesionista",
    desc: "Ya tienes la disciplina y el perfil. Ahora ponlo a trabajar para ti. Sin jefe, sin techo salarial.",
    tag: "Ingresos ilimitados",
    color: "#A855F7",
  },
  {
    image: "/assets/mujer-3.png",
    title: "Emprendedora",
    desc: "Sabes lo que es construir algo propio. Súmate a GNP con el respaldo de un equipo que ya tiene el camino trazado.",
    tag: "Negocio con respaldo #1",
    color: "#F1952A",
  },
];

export default function Profiles() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.15 }
    );
    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section style={{
      padding: "100px 20px", position: "relative", zIndex: 1,
      background: "radial-gradient(ellipse at 50% 100%, rgba(168,85,247,0.08) 0%, transparent 60%)",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            color: "#A855F7", fontFamily: "Montserrat, sans-serif", fontWeight: 700,
            fontSize: 13, letterSpacing: 4, textTransform: "uppercase", marginBottom: 16,
          }}>
            ¿Eres tú?
          </div>
          <h2 style={{
            fontFamily: "Montserrat, sans-serif", fontWeight: 900,
            fontSize: "clamp(1.8rem, 4vw, 3rem)", color: "white", marginBottom: 16,
          }}>
            Hecho para mujeres que{" "}
            <span className="gradient-text">ya lo tienen todo</span>
          </h2>
          <p style={{
            color: "rgba(255,255,255,0.45)", fontFamily: "Inter, sans-serif",
            fontSize: "1rem", maxWidth: 480, margin: "0 auto",
          }}>
            Solo falta el vehículo correcto para que tus capacidades generen lo que mereces.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28,
        }}>
          {profiles.map((p, i) => (
            <div
              key={p.title}
              ref={el => (refs.current[i] = el)}
              className="reveal glass-dark"
              style={{
                borderRadius: 24, overflow: "hidden",
                transition: `all 0.3s ease`,
                transitionDelay: `${i * 0.1}s`,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.borderColor = `${p.color}55`;
                e.currentTarget.style.boxShadow = `0 24px 60px ${p.color}22`;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(168,85,247,0.2)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Image */}
              <div style={{ position: "relative", height: 260, overflow: "hidden", background: `${p.color}10` }}>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover", objectPosition: "top" }}
                />
                {/* Gradient overlay */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: `linear-gradient(to bottom, transparent 40%, rgba(10,0,16,0.8) 100%)`,
                }} />
                {/* Tag */}
                <div style={{
                  position: "absolute", bottom: 16, left: 16,
                  background: `${p.color}cc`, borderRadius: 50,
                  padding: "5px 14px", fontFamily: "Montserrat, sans-serif",
                  fontWeight: 700, fontSize: 11, color: "white", letterSpacing: 1,
                }}>
                  {p.tag}
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: "24px 28px" }}>
                <h3 style={{
                  fontFamily: "Montserrat, sans-serif", fontWeight: 800,
                  fontSize: "1.2rem", color: "white", marginBottom: 10,
                }}>
                  {p.title}
                </h3>
                <p style={{
                  color: "rgba(255,255,255,0.5)", fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem", lineHeight: 1.65,
                }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
