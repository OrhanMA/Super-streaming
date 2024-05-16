import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Super Streaming",
  description: "A small website to search movies using TheMovieDatabase API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}  bg-stone-950 text-stone-200`}>
        <Navbar />
        <main className="flex flex-col justify-between sm:p-12">
          {children}
        </main>
      </body>
    </html>
  );
}
