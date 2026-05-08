"use client";
import { useState, useRef, useEffect } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    ciudad: "",
    situacion: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && ref.current?.classList.add("visible"),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Aquí puedes conectar EmailJS, Formspree, o tu backend
    // Por ahora simula envío y redirige a WhatsApp
    await new Promise((r) => setTimeout(r, 1500));

    const msg = encodeURIComponent(
      `Hola! Me interesa ser agente de seguros Avanza Capital 🌸\n\nNombre: ${formData.nombre}\nTeléfono: ${formData.telefono}\nCiudad: ${formData.ciudad}\nSituación: ${formData.situacion}`
    );
    // REEMPLAZA con el número de WhatsApp del cliente (sin espacios ni +)
    const whatsappNum = "526641234567";
    window.open(`https://wa.me/${whatsappNum}?text=${msg}`, "_blank");

    setLoading(false);
    setSubmitted(true);
  };

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
      <div style={{ maxWidth: 600, margin: "0 auto" }} ref={ref}>
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
            Este mayo,{" "}
            <span className="gradient-text">empieza tu historia</span>
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
            }}
          >
            Déjanos tus datos y un asesor te contactará en menos de 24 horas.
          </p>
        </div>

        {/* Form Card */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="glass-dark reveal"
            style={{
              borderRadius: 28,
              padding: "48px 40px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            <div>
              <label
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  marginBottom: 8,
                  display: "block",
                  fontWeight: 500,
                }}
              >
                Tu nombre completo *
              </label>
              <input
                name="nombre"
                required
                value={formData.nombre}
                onChange={handleChange}
                placeholder="Ej. María García"
                className="form-input"
              />
            </div>

            <div>
              <label
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  marginBottom: 8,
                  display: "block",
                  fontWeight: 500,
                }}
              >
                WhatsApp / Teléfono *
              </label>
              <input
                name="telefono"
                required
                type="tel"
                value={formData.telefono}
                onChange={handleChange}
                placeholder="664 000 0000"
                className="form-input"
              />
            </div>

            <div>
              <label
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  marginBottom: 8,
                  display: "block",
                  fontWeight: 500,
                }}
              >
                Ciudad *
              </label>
              <select
                name="ciudad"
                required
                value={formData.ciudad}
                onChange={handleChange}
                className="form-input"
                style={{ cursor: "pointer" }}
              >
                <option value="" disabled style={{ background: "#1a0025" }}>
                  Selecciona tu ciudad
                </option>
                <option value="Tijuana" style={{ background: "#1a0025" }}>
                  Tijuana
                </option>
                <option value="Ensenada" style={{ background: "#1a0025" }}>
                  Ensenada
                </option>
                <option value="Rosarito" style={{ background: "#1a0025" }}>
                  Rosarito
                </option>
                <option value="Mexicali" style={{ background: "#1a0025" }}>
                  Mexicali
                </option>
                <option value="Otra" style={{ background: "#1a0025" }}>
                  Otra ciudad
                </option>
              </select>
            </div>

            <div>
              <label
                style={{
                  color: "rgba(255,255,255,0.6)",
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  marginBottom: 8,
                  display: "block",
                  fontWeight: 500,
                }}
              >
                ¿Cuál es tu situación actual?
              </label>
              <select
                name="situacion"
                value={formData.situacion}
                onChange={handleChange}
                className="form-input"
                style={{ cursor: "pointer" }}
              >
                <option value="" disabled style={{ background: "#1a0025" }}>
                  Selecciona una opción
                </option>
                <option value="Mamá en casa" style={{ background: "#1a0025" }}>
                  Soy mamá en casa y busco ingresos propios
                </option>
                <option value="Trabajo actual" style={{ background: "#1a0025" }}>
                  Tengo trabajo pero quiero algo mejor
                </option>
                <option value="Emprendedora" style={{ background: "#1a0025" }}>
                  Soy emprendedora buscando nuevo reto
                </option>
                <option value="Ejecutiva" style={{ background: "#1a0025" }}>
                  Soy ejecutiva / profesionista
                </option>
                <option value="Otro" style={{ background: "#1a0025" }}>
                  Otro
                </option>
              </select>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn-cta glow-pink"
              style={{
                padding: "18px",
                borderRadius: 50,
                border: "none",
                cursor: loading ? "wait" : "pointer",
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 800,
                fontSize: 16,
                color: "white",
                letterSpacing: 1,
                textTransform: "uppercase",
                marginTop: 8,
                opacity: loading ? 0.8 : 1,
              }}
            >
              <span>
                {loading ? "Enviando..." : "¡Quiero empezar ahora! 🌸"}
              </span>
            </button>

            <p
              style={{
                color: "rgba(255,255,255,0.3)",
                fontFamily: "Inter, sans-serif",
                fontSize: 12,
                textAlign: "center",
              }}
            >
              Tu información es confidencial. No spam, te lo prometemos.
            </p>
          </form>
        ) : (
          <div
            className="glass-dark"
            style={{
              borderRadius: 28,
              padding: "60px 40px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 60, marginBottom: 20 }}>🌸</div>
            <h3
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 900,
                fontSize: "1.8rem",
                color: "white",
                marginBottom: 16,
              }}
            >
              ¡Gracias, {formData.nombre.split(" ")[0]}!
            </h3>
            <p
              style={{
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Inter, sans-serif",
                lineHeight: 1.7,
              }}
            >
              Te contactamos en menos de 24 horas. Estás a un paso de cambiar
              tu historia. ✨
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
