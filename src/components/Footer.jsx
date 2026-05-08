"use client";
import Image from "next/image";
import { IconMapPin, IconPhone, IconMail, IconShield, IconChevronRight } from "./Icons";

const links = [
  { label: "Inicio", href: "#" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Únete", href: "#formulario" },
];

const social = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/avanzacapitalseguros/",
    icon: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/AvanzaCapitalBrokers",
    icon: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/526641234567",
    icon: (
      <svg width="17" height="17" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

const contact = [
  { Icon: IconMapPin, text: "Tijuana & Ensenada, Baja California" },
  { Icon: IconPhone,  text: "+52 664 123 4567" },
  { Icon: IconMail,   text: "contacto@avanzacapital.mx" },
];

export default function Footer() {
  return (
    <footer style={{ position: "relative", zIndex: 1, background: "rgba(10,0,16,0.6)", borderTop: "1px solid rgba(168,85,247,0.1)" }}>
      {/* Gradient top bar */}
      <div style={{
        height: 2,
        background: "linear-gradient(90deg, #420F5D, #A855F7, #FF4B7C, #A855F7, #420F5D)",
        backgroundSize: "200% auto",
        animation: "shimmer 5s linear infinite",
      }} />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "64px 32px 40px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 48, marginBottom: 48,
        }}>

          {/* Brand */}
          <div>
            <Image src="/assets/logo-blanco.png" alt="Avanza Capital" width={140} height={46} style={{ objectFit: "contain", marginBottom: 18 }} />
            <p style={{
              color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif",
              fontSize: "0.85rem", lineHeight: 1.75, marginBottom: 24,
            }}>
              La agencia GNP más poderosa de Tijuana y Ensenada. Formando a las mujeres más exitosas del sector asegurador.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {social.map(s => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  style={{
                    width: 38, height: 38, borderRadius: "50%",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "rgba(255,255,255,0.4)", textDecoration: "none",
                    transition: "all 0.25s ease",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#FF4B7C"; e.currentTarget.style.color = "#FF4B7C"; e.currentTarget.style.background = "rgba(255,75,124,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.color = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
              Navegación
            </div>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href} style={{
                    color: "rgba(255,255,255,0.4)", fontFamily: "Inter, sans-serif",
                    fontSize: "0.88rem", textDecoration: "none",
                    display: "flex", alignItems: "center", gap: 6, transition: "color 0.2s",
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = "white"}
                    onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.4)"}
                  >
                    <IconChevronRight size={12} color="#A855F7" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 20 }}>
              Contacto
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {contact.map(({ Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <div style={{ flexShrink: 0, marginTop: 1, color: "rgba(168,85,247,0.6)" }}>
                    <Icon size={15} color="rgba(168,85,247,0.6)" />
                  </div>
                  <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", lineHeight: 1.5 }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign + GNP */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 6 }}>
              Campaña
            </div>
            <div style={{
              background: "linear-gradient(135deg, rgba(255,75,124,0.08), rgba(168,85,247,0.08))",
              border: "1px solid rgba(255,75,124,0.15)", borderRadius: 14, padding: "18px 20px",
            }}>
              <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 900, fontSize: "1.1rem", marginBottom: 6 }}>
                <span className="gradient-text">#PowerfulMoms</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif", fontSize: "0.8rem", lineHeight: 1.6, fontStyle: "italic" }}>
                Se escribe mamá, pero se pronuncia Powerful Mom.
              </p>
            </div>
            <div style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: 12, padding: "14px 16px", display: "flex", alignItems: "center", gap: 10,
            }}>
              <IconShield size={18} color="rgba(168,85,247,0.5)" />
              <div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.82rem" }}>Respaldados por GNP</div>
                <div style={{ color: "rgba(255,255,255,0.25)", fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}>Aseguradora #1 de México</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 24,
          display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "space-between", alignItems: "center",
        }}>
          <p style={{ color: "rgba(255,255,255,0.18)", fontFamily: "Inter, sans-serif", fontSize: "0.78rem" }}>
            © {new Date().getFullYear()} Avanza Capital · Agencia GNP · Todos los derechos reservados.
          </p>
          <p style={{ color: "rgba(255,255,255,0.12)", fontFamily: "Inter, sans-serif", fontSize: "0.72rem" }}>
            Tijuana · Ensenada · Baja California, México
          </p>
        </div>
      </div>
    </footer>
  );
}
