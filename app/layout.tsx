import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Сервіс з пошуку і бронювання відпочинку в Карпатах",
  description: "Велика база готелів і приватного сектору для гармонійого відпочинку в Карпатах на будь-який смак та ціну.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
    <p>hell</p>
  )
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="pt-28">
        {children}
        </div>
        
        </body>
    </html>
  );
}
