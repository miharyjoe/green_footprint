import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar1 from "./home/components/navBar1";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar1/>
        </div>
        {children}</body>
    </html>
  );
}
