import type { Metadata } from "next";
import { Maven_Pro } from "next/font/google";
import "./globals.css";

const mavenPro = Maven_Pro({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "Nexus Game Lab",
  description: "Plataforma de aprendizaje dinámica para Godot 4 y GDScript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning className={`${mavenPro.variable} font-sans antialiased selection:bg-[var(--color-brand-blue)] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
