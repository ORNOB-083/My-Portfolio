import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shalehin Ahmed Ornob | Full Stack Web Developer",
  description: "Portfolio showcasing the work and skills of Shalehin Ahmed Ornob.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-[#f5e6ff] dark:bg-[#0f0a1a] text-[#3b0764] dark:text-[#e9d5ff] overflow-x-hidden transition-colors duration-300`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}