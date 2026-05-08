"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Faby Cárdenas",
    text: "Gracias a Avanza Capital, encontré la estabilidad que buscaba sin renunciar a mi tiempo con mi familia. Hoy manejo mi propio negocio y mis ingresos han superado mis expectativas.",
    image: "/Testimonios/Faby.png",
    color: "#FF4B7C",
  },
  {
    name: "Marcia Raphael",
    text: "Formar parte de Avanza Capital ha sido una de las mejores decisiones de mi carrera como agente de seguros. Desde el primer día sentí un ambiente de trabajo positivo, colaborativo y lleno de energía.",
    image: "/Testimonios/Marcia.png",
    color: "#A855F7",
  },
  {
    name: "Palmira Cubillas",
    text: "Ser agente de seguros no solo es asesorar para proteger un patrimonio; es también conectar con las personas identificando sus necesidades mientras brindas seguridad y confianza. Debes ser parte de su círculo de personas favoritas... ¡SIEMPRE!",
    image: "/Testimonios/Palmira.png",
    color: "#F1952A",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((active + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [active]);

  const goTo = (index) => {
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 300);
  };

  const t = testimonials[active];

  return (
    <section
      style={{
        padding: "100px 20px",
        position: "relative",
        zIndex: 1,
        background:
          "radial-gradient(ellipse at 80% 50%, rgba(255,75,124,0.06) 0%, transparent 70%)",
      }}
    >
      <div style={{ maxWidth: 900, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 60 }}>
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
            Historias reales
          </div>
          <h2
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              color: "white",
              marginBottom: 20,
            }}
          >
            Mamás que{" "}
            <span className="gradient-text">ya lo lograron</span>
          </h2>
          {/* Frase filosófica */}
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
              fontStyle: "italic",
            }}
          >
            Ser agente de seguros no solo es asesorar para proteger un patrimonio;
            es conectar con las personas, identificar sus necesidades y brindar
            seguridad y confianza. Debes ser parte de su círculo de personas
            favoritas... <strong style={{ color: "#FF4B7C" }}>¡SIEMPRE!</strong>
          </p>
        </div>

        {/* Testimonial card */}
        <div ref={ref} className="reveal">
          <div
            className="glass-dark"
            style={{
              borderRadius: 28,
              padding: "50px 40px",
              display: "flex",
              gap: 40,
              alignItems: "center",
              flexWrap: "wrap",
              opacity: animating ? 0 : 1,
              transform: animating ? "translateY(10px)" : "translateY(0)",
              transition: "opacity 0.3s ease, transform 0.3s ease",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Glow accent */}
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -60,
                width: 250,
                height: 250,
                borderRadius: "50%",
                background: `${t.color}12`,
                filter: "blur(50px)",
                pointerEvents: "none",
              }}
            />

            {/* Foto */}
            <div style={{ flexShrink: 0, position: "relative" }}>
              <div
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: `3px solid ${t.color}66`,
                  boxShadow: `0 0 30px ${t.color}44`,
                  position: "relative",
                }}
              >
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* Pulse ring */}
              <div
                style={{
                  position: "absolute",
                  inset: -8,
                  borderRadius: "50%",
                  border: `2px solid ${t.color}33`,
                  animation: "pulse-ring 2.5s ease-out infinite",
                }}
              />
            </div>

            {/* Texto */}
            <div style={{ flex: 1, minWidth: 240 }}>
              {/* Quote icon */}
              <div
                style={{
                  fontSize: 50,
                  color: t.color,
                  opacity: 0.35,
                  lineHeight: 1,
                  marginBottom: 12,
                  fontFamily: "serif",
                }}
              >
                "
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "clamp(0.95rem, 1.8vw, 1.1rem)",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                  fontStyle: "italic",
                }}
              >
                {t.text}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 32,
                    height: 2,
                    background: t.color,
                    borderRadius: 2,
                  }}
                />
                <div
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 800,
                    color: "white",
                    fontSize: "1rem",
                  }}
                >
                  {t.name}
                </div>
                <div
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                  }}
                >
                  · Agente Avanza Capital
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 32,
          }}
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                width: i === active ? 36 : 10,
                height: 10,
                borderRadius: 5,
                background:
                  i === active ? testimonials[i].color : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Thumbnails de las tres agentes */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 20,
            marginTop: 40,
          }}
        >
          {testimonials.map((item, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              style={{
                background: "none",
                border: `2px solid ${i === active ? item.color : "rgba(255,255,255,0.1)"}`,
                borderRadius: "50%",
                padding: 3,
                cursor: "pointer",
                transition: "all 0.3s ease",
                opacity: i === active ? 1 : 0.4,
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
