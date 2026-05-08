import "./globals.css";
import Script from "next/script";

export const metadata = {
  title: "Avanza Capital — #PowerfulMoms",
  description: "Conviértete en agente de seguros GNP y construye la libertad financiera que tú y tu familia merecen.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <meta name="theme-color" content="#3B0764" />
      </head>
      <body>
        {children}
        <Script
          src="https://crm.avanzacapital.mx/js/form_embed.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
