import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shalehin Ahmed Ornob | Web Developer Portfolio",
  description: "Portfolio showcasing the work and skills of Shalehin Ahmed Ornob.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#34353A] text-[#C9C9C9] overflow-x-hidden`}>
        <Providers>
          <Navbar></Navbar>
          {children}
          <Hero></Hero>
          <About></About>
        </Providers>
      </body>
    </html>
  );
}