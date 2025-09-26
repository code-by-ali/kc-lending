import { Geist, Geist_Mono } from "next/font/google";
import { Figtree, DM_Sans } from "next/font/google"; // ✅ Import fonts
import "./globals.css";
import Header from "./components/common/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "KC Lending",
  description: "KC Lending Webapp",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
