"use client";
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

// Partículas solo en cliente (canvas)
const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <Particles />
      <Hero />
      <Benefits />
      <Testimonials />
      <Form />
      <Footer />
    </main>
  );
}
