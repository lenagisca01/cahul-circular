import type { ReactNode } from "react";
import Header from "@/components/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ro">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        <Header />
        {children}
      </body>
    </html>
  );
}