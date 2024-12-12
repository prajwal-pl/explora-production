import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import { motion, AnimatePresence } from "framer-motion";
import { ClerkProvider } from "@clerk/nextjs";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Explora - Discover Games, Movies, Music, and Books",
  description:
    "Search, filter, and explore a vast collection of entertainment content.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${poppins.variable} font-sans`}>
        <body className="bg-gray-50">
          <AnimatePresence>
            <main>{children}</main>
          </AnimatePresence>
        </body>
      </html>
    </ClerkProvider>
  );
}
