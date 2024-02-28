import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import React from "react";


export const metadata: Metadata = {
  title: ">sudo encrypt_",
  description: "Cybersecurity, cloud and software & web development services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {



  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
