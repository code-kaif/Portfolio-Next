import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kaif - Portfolio",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit} antialiased`}>{children}</body>
    </html>
  );
}
