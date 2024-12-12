import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import "./globals.css";

const vt323 = VT323({
  variable: "--font-VT323",
  subsets: ["latin"],
  weight: ["400"],

});

export const metadata: Metadata = {
  title: "Boris Mwanga - Portfolio",
  description: "Portfolio of Boris Mwanga",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${vt323.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
