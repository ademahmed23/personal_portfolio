import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import "./styles/custom.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ReturnButton from "./components/ReturnButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adem's Portfolio",
  description: "Welcome to Eng Adem's portfolio",
  icons: {
    icon: "favicon_io/favicon.ico",
    shortcut: "favicon_io/favicon-32x32.png",
    apple: "favicon_io/apple-touch-icon.png",
  },
  manifest: "favicon_io/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1 pt-10">{children}</main>
        <Footer />
        <ReturnButton />
      </body>
    </html>
  );
}
