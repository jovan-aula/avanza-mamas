export default function Footer() {
  return (
    <footer
      style={{
        padding: "40px 20px",
        borderTop: "1px solid rgba(168,85,247,0.15)",
        textAlign: "center",
        position: "relative",
        zIndex: 1,
      }}
    >
      <div
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 900,
          fontSize: "1.4rem",
          color: "white",
          marginBottom: 8,
        }}
      >
        <span className="gradient-text">Avanza</span>{" "}
        <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>Capital</span>
      </div>
      <p
        style={{
          color: "rgba(255,255,255,0.3)",
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          marginBottom: 12,
        }}
      >
        Agencia GNP · Tijuana & Ensenada, Baja California
      </p>
      <p
        style={{
          color: "rgba(255,255,255,0.2)",
          fontFamily: "Inter, sans-serif",
          fontSize: 12,
        }}
      >
        © {new Date().getFullYear()} Avanza Capital. Todos los derechos reservados.
      </p>
    </footer>
  );
}
