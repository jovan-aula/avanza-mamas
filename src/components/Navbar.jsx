"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: "14px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(10,0,16,0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(168,85,247,0.15)" : "none",
        transition: "all 0.4s ease",
      }}
    >
      <Image
        src="/assets/logo-color.png"
        alt="Avanza Capital"
        width={140}
        height={44}
        style={{ objectFit: "contain" }}
      />
      <button
        onClick={() =>
          document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })
        }
        className="btn-cta"
        style={{
          padding: "10px 24px",
          borderRadius: 50,
          border: "none",
          cursor: "pointer",
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 700,
          fontSize: 13,
          color: "white",
          letterSpacing: 1,
          textTransform: "uppercase",
        }}
      >
        <span>Únete ahora</span>
      </button>
    </nav>
  );
}
