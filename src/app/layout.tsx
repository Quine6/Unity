import type { Metadata } from "next";
import { Atkinson_Hyperlegible } from "next/font/google";
import "./globals.css";

const atkinson = Atkinson_Hyperlegible({ 
  subsets: ["latin"], 
  weight: ["400", "700"],
  variable: "--font-sans" 
});

export const metadata: Metadata = {
  title: "Nexus Game Lab",
  description: "Plataforma de aprendizaje dinámica para Unity y Unreal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${atkinson.variable} font-sans antialiased selection:bg-[var(--color-brand-blue)] selection:text-black`}>
        {children}
      </body>
    </html>
  );
}
