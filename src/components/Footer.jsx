"use client";
import Image from "next/image";
import { IconMapPin, IconPhone, IconMail, IconShield } from "./Icons";

const social = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/avanzacapitalseguros/",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/AvanzaCapitalBrokers",
    icon: (
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

const contact = [
  { Icon: IconMapPin, text: "Tijuana & Ensenada, BC" },
  { Icon: IconPhone,  text: "+52 1 664 315 1820" },
  { Icon: IconMail,   text: "rh@avanzacapital.mx" },
];

const maps = [
  {
    city: "Tijuana",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.1317914270057!2d-117.0145857!3d32.5226269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9499aa377659f%3A0x22692277fd2e71ae!2sAvanza%20Capital!5e0!3m2!1ses-419!2smx!4v1778213170006!5m2!1ses-419!2smx",
  },
  {
    city: "Ensenada",
    src: "https://www.google.com/maps/embed?pb=!3m2!1ses-419!2smx!4v1778213253150!5m2!1ses-419!2smx!6m8!1m7!1s9byuBR8fCr5ZEsUaeMEMWg!2m2!1d31.86183843721941!2d-116.6265572333769!3f189.5998172605789!4f2.0113731222942874!5f0.7820865974627469",
  },
];

export default function Footer() {
  return (
    <footer className="section-dark" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div style={{ height: 2, background: "linear-gradient(90deg, #7C3AED, #A21CAF, #DB2777, #EC4899)" }} />

      <div style={{ maxWidth: 700, margin: "0 auto", padding: "56px 24px 36px", textAlign: "center" }}>

        {/* Logo */}
        <div style={{ marginBottom: 16, display: "flex", justifyContent: "center" }}>
          <Image src="/assets/logo-blanco.png" alt="Avanza Capital" width={160} height={50} style={{ objectFit: "contain" }} />
        </div>

        {/* Tagline */}
        <p style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif", fontSize: "0.82rem", lineHeight: 1.75, marginBottom: 24, maxWidth: 380, margin: "0 auto 24px" }}>
          La agencia GNP más poderosa de Tijuana y Ensenada.<br />
          Formando a las <span style={{ color: "#F9A8D4" }}>Powerful Moms</span> del sector asegurador.
        </p>

        {/* Redes sociales */}
        <div style={{ display: "flex", justifyContent: "center", gap: 10, marginBottom: 28 }}>
          {social.map(s => (
            <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
              style={{
                width: 38, height: 38, borderRadius: "50%",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.38)", textDecoration: "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#EC4899"; e.currentTarget.style.color = "#EC4899"; e.currentTarget.style.background = "rgba(236,72,153,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.color = "rgba(255,255,255,0.38)"; e.currentTarget.style.background = "rgba(255,255,255,0.06)"; }}
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Separador */}
        <div style={{ width: 40, height: 1, background: "rgba(255,255,255,0.1)", margin: "0 auto 24px" }} />

        {/* Contacto centrado */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10, marginBottom: 32 }}>
          {contact.map(({ Icon, text }) => (
            <div key={text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon size={12} color="rgba(162,28,175,0.6)" />
              <span style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Inter, sans-serif", fontSize: "0.8rem" }}>{text}</span>
            </div>
          ))}
        </div>

        {/* Respaldo GNP */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 50, padding: "8px 18px", marginBottom: 36,
        }}>
          <IconShield size={13} color="rgba(162,28,175,0.55)" />
          <span style={{ color: "rgba(255,255,255,0.35)", fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.72rem" }}>Respaldados por GNP · Aseguradora #1 de México</span>
        </div>

        {/* Mapas — solo desktop */}
        <div className="footer-hide-mobile" style={{ marginBottom: 32 }}>
          <div style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 700, fontSize: "0.65rem", color: "rgba(255,255,255,0.25)", letterSpacing: 3, textTransform: "uppercase", marginBottom: 14 }}>
            Encuéntranos
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
            {maps.map(({ city, src }) => (
              <div key={city}>
                <div style={{ color: "rgba(255,255,255,0.3)", fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: "0.72rem", marginBottom: 8 }}>{city}</div>
                <div style={{ borderRadius: 10, overflow: "hidden", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <iframe src={src} width="100%" height="140" style={{ border: 0, display: "block" }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`Mapa ${city}`} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <p style={{ color: "rgba(255,255,255,0.12)", fontFamily: "Inter, sans-serif", fontSize: "0.7rem" }}>
          © {new Date().getFullYear()} Avanza Capital · Agencia GNP · Todos los derechos reservados.
        </p>

      </div>
    </footer>
  );
}
