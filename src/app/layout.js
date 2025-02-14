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

        <svg
          className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          fill="white"
        >
          <path
            fillOpacity="1"
            d="M0,64L48,96C96,128,192,192,288,208C384,224,480,192,576,165.3C672,139,768,117,864,128C960,139,1056,181,1152,192C1248,203,1344,181,1392,170.7L1440,160L1440,320L0,320Z"
          ></path>
        </svg>

        <Nav />

        <main className="max-w-5xl mx-auto min-h-screen">{children}</main>
      </body>
    </html>
  );
}
