import "./globals.css";

export const metadata = {
  title: "Avanza Capital — Mamás que Inspiran, Mamás que Triunfan",
  description:
    "Este Mayo, conviértete en agente de seguros GNP y construye la libertad financiera que tú y tu familia merecen.",
  openGraph: {
    title: "Avanza Capital — Mamás que Inspiran, Mamás que Triunfan",
    description:
      "Únete a la red de agentes GNP más poderosa de Tijuana y Ensenada.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
