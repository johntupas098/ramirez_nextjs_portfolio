import "./globals.css";
import Navbar from "./component/Navbar";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "John Wayne T. Ramirez | Portfolio",
  description:
    "Portfolio of John Wayne T. Ramirez, BS Information Technology student and database developer.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="light">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}

