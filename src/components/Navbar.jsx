"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Beneficios", href: "#beneficios" },
  { label: "Por qué GNP", href: "#gnp" },
  { label: "Testimonios", href: "#testimonios" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    setTimeout(() => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        padding: "12px 28px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(59,7,100,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
        transition: "all 0.4s ease",
      }}>
        {/* Logo */}
        <Image
          src="/assets/logo-blanco.png"
          alt="Avanza Capital"
          width={180}
          height={56}
          style={{ objectFit: "contain", flexShrink: 0 }}
        />

        {/* Desktop nav links */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }} className="nav-desktop">
          {navLinks.map(l => (
            <button key={l.label} onClick={() => go(l.href)} style={{
              background: "transparent", border: "none", cursor: "pointer",
              fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 13,
              color: "rgba(255,255,255,0.6)", padding: "8px 14px", borderRadius: 8,
              transition: "color 0.2s, background 0.2s",
              letterSpacing: 0.3,
            }}
              onMouseEnter={e => { e.currentTarget.style.color = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.6)"; e.currentTarget.style.background = "transparent"; }}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go("#formulario")}
            className="btn-cta"
            style={{
              padding: "10px 22px", borderRadius: 50, border: "none",
              cursor: "pointer", fontFamily: "Montserrat, sans-serif",
              fontWeight: 700, fontSize: 13, color: "white",
              letterSpacing: 0.5, textTransform: "uppercase", marginLeft: 8,
            }}
          >
            Únete
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="nav-mobile"
          style={{
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 8, padding: "8px 10px", cursor: "pointer",
            display: "flex", flexDirection: "column", gap: 4, width: 38, height: 36,
            alignItems: "center", justifyContent: "center",
          }}
        >
          {[0,1,2].map(i => (
            <div key={i} style={{ width: 18, height: 1.5, background: "white", borderRadius: 2, transition: "all 0.3s" }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: 68, left: 0, right: 0, zIndex: 99,
          background: "rgba(59,7,100,0.97)", backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          display: "flex", flexDirection: "column", padding: "16px 24px 24px",
          gap: 4,
        }}>
          {navLinks.map(l => (
            <button key={l.label} onClick={() => go(l.href)} style={{
              background: "transparent", border: "none", cursor: "pointer",
              fontFamily: "Montserrat, sans-serif", fontWeight: 600, fontSize: 15,
              color: "rgba(255,255,255,0.75)", padding: "12px 0",
              textAlign: "left", borderBottom: "1px solid rgba(255,255,255,0.06)",
              transition: "color 0.2s",
            }}
              onMouseEnter={e => e.currentTarget.style.color = "white"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.75)"}
            >
              {l.label}
            </button>
          ))}
          <button onClick={() => go("#formulario")} className="btn-cta" style={{
            padding: "14px", borderRadius: 50, border: "none", cursor: "pointer",
            fontFamily: "Montserrat, sans-serif", fontWeight: 800, fontSize: 14,
            color: "white", textTransform: "uppercase", marginTop: 12,
          }}>
            Quiero unirme
          </button>
        </div>
      )}

      <style>{`
        @media (min-width: 641px) { .nav-mobile { display: none !important; } }
        @media (max-width: 640px) { .nav-desktop { display: none !important; } }
      `}</style>
    </>
  );
}
