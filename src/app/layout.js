import "./globals.css";

export const metadata = {
  title: "Avanza Capital — #PowerfulMoms",
  description: "Conviértete en agente de seguros GNP y construye la libertad financiera que tú y tu familia merecen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#3B0764" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
