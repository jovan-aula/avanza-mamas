"use client";
import { useEffect, useRef } from "react";

export default function Particles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const symbols = ["✦", "✿", "❀", "♡", "✨", "⋆", "·"];
    const colors = ["#FF4B7C", "#A855F7", "#F9A8D4", "#FFD700", "#ffffff"];

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 14 + 6;
        this.speedY = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 1;
        this.opacity = Math.random() * 0.6 + 0.2;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.symbol = symbols[Math.floor(Math.random() * symbols.length)];
        this.rotation = Math.random() * Math.PI * 2;
        this.rotationSpeed = (Math.random() - 0.5) * 0.02;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 200;
      }
      update() {
        this.y -= this.speedY;
        this.x += this.speedX;
        this.rotation += this.rotationSpeed;
        this.life++;
        if (this.life > this.maxLife || this.y < -20) this.reset();
      }
      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity * (1 - this.life / this.maxLife);
        ctx.fillStyle = this.color;
        ctx.font = `${this.size}px serif`;
        ctx.translate(this.x, this.y);
        ctx.rotate(this.rotation);
        ctx.fillText(this.symbol, -this.size / 2, this.size / 2);
        ctx.restore();
      }
    }

    for (let i = 0; i < 60; i++) {
      const p = new Particle();
      p.y = Math.random() * canvas.height;
      p.life = Math.random() * p.maxLife;
      particles.push(p);
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particles-bg"
      style={{ pointerEvents: "none" }}
    />
  );
}
