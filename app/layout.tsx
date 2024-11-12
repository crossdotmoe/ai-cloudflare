import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToasterProvider } from '@/components/toaster-provider'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cross AI",
  description: "Cross Ai is a platform that can generate images, code, translation and chat with open models.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ToasterProvider />
        {children}</body>
    </html>
  );
}
