import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { MainText } from "@/components/Main";
import { Navbar } from "@/components/NavBar";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const UbuntuL = localFont({
  src: "./fonts/Ubuntu-L.ttf",
  variable: "--font-Ubuntu-L",
  weight: "100 900",
});

const Comfortaa = localFont({
  src: "./fonts/Comfortaa-VariableFont_wght.ttf",
  variable: "--font-Comfortaa",
  weight: "100 900",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${UbuntuL.variable} antialiased`}
      >
        {children}
        <Navbar />
      </body>
    </html>
  );
}
