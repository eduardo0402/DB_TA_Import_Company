import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const barlowCondensed = localFont({
  src: [
    {
      path: "../fonts/BarlowCondensed-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/BarlowCondensed-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/BarlowCondensed-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/BarlowCondensed-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/BarlowCondensed-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../fonts/BarlowCondensed-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../fonts/BarlowCondensed-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    {
      path: "../fonts/BarlowCondensed-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-barlow-condensed",
  display: "swap",
});

export const metadata: Metadata = {
  title: "APEX Global Logistics | Portal de Clientes",
  description: "Ingresa a tu cuenta y toma el control de tus envíos, documentos y cotizaciones.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={barlowCondensed.variable}>
      <body className={`${barlowCondensed.className} min-h-screen bg-white text-apex-dark antialiased`}>
        {children}
      </body>
    </html>
  );
}
