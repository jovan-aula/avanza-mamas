"use client";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import Profiles from "@/components/Profiles";
import Testimonials from "@/components/Testimonials";
import Form from "@/components/Form";
import Footer from "@/components/Footer";

const Particles = dynamic(() => import("@/components/Particles"), { ssr: false });

export default function Home() {
  return (
    <main style={{ position: "relative", minHeight: "100vh" }}>
      <Particles />
      <Navbar />
      <Hero />
      <Stats />
      <Benefits />
      <Profiles />
      <Testimonials />
      <Form />
      <Footer />
    </main>
  );
}
