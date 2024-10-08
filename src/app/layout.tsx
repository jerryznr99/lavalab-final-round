import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Be_Vietnam_Pro } from "next/font/google";
import { Manrope } from "next/font/google";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ["400", "500", "700"], // Select the weights you want to use
  subsets: ["latin"], // Latin character set
  display: "swap", // Optional for better font rendering
});

const manrope = Manrope({
  weight: ["400", "500", "600", "700"], // Choose the weights you need
  subsets: ["latin"], // Include the 'latin' subset
  display: "swap", // Optional for better font rendering
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${beVietnamPro.className} ${manrope.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
