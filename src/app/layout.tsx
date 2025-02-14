import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/general.scss";
import FEHelpers from "@/components/FEHelpers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

//font-1: Inter
const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "nextjs boilerplate",
  description: "This is a generic next.js boilerplate, with grid system and custom routing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* const isProd = process.env.NEXT_PUBLIC_ENV === 'prod'; */

  return (
    <html lang="en">
      <body className={`${InterFont.variable}`}>
        {/* !isProd &&  */< FEHelpers />}
        <Navbar></Navbar>
        <main
          className={'relative wp-100'}>
          {children}
        </main>
        <Footer></Footer>
      </body>
    </html>
  );
}
