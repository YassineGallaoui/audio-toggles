import FEHelpers from "@/components/FEHelpers";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import 'next-fe-helpers/dist/style.css';
import { Inter } from "next/font/google";
import '../../node_modules/msccss/dist/main.min.css';
import "../styles/general.scss";
import "../styles/globals.css";

//font-1: Inter
const InterFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Audio Toggles",
  description: "This is a free collection of animated audio icons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  /* const isProd = process.env.NODE_ENV === 'production'; */

  return (
    <html lang="en">
      <head>
        {/* <script
          crossOrigin="anonymous"
          src="//unpkg.com/react-scan/dist/auto.global.js"
        /> */}
        {/* rest of your scripts go under */}
        <script defer data-domain="audio-toggles.vercel.app" src="https://plausible.io/js/script.js"></script>
      </head>
      <body className={`${InterFont.variable}`}>
        <FEHelpers />
        {/* {!isProd && < FEHelpers />} */}
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
