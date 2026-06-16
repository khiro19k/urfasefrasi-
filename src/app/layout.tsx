import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Urfa Sofrası | Grill & Steak",
  description: "Upplev äkta turkiska smaker och förstklassig grill i en lyxig atmosfär.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

