"use client";

import "./globals.css";
import Nav from "@/app/components/navigation";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  const isProduction = process.env.NODE_ENV === 'production';
  
  useEffect(() => {
    if (isProduction) {
      document.documentElement.setAttribute('data-environment', 'production');
    }
  }, []);

  return (
    <html lang="en" className="overflow-auto">
      <body className="relative bg-cover bg-center bg-fixed bg-no-repeat overflow-auto">

        <Nav />

        <main className="w-full mx-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
}
