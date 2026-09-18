import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CAÇA - Plataforma",
  description: "Desenvolvimento de sites, aplicativos, sistemas e automações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen bg-background antialiased selection:bg-primary/20 selection:text-primary">
        {children}
      </body>
    </html>
  );
}
