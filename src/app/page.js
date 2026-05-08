"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import GNP from "@/components/GNP";
import Testimonials from "@/components/Testimonials";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <Particles />
      <Navbar />
      {/* 1. DARK — Hero con imagen circular */}
      <Hero />
      {/* 2. WHITE — Stats con contadores */}
      <Stats />
      {/* 3. PINK/PURPLE — Beneficios */}
      <Benefits />
      {/* 4. WHITE — Por qué GNP */}
      <GNP />
      {/* 5. DARK — Testimonios */}
      <Testimonials />
      {/* 6. WHITE — Formulario CRM */}
      <Form />
      {/* Footer dark */}
      <Footer />
    </main>
  );
}
