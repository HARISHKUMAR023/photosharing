import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Aside from './Components/Aside'
import Top from './Components/Top'

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

export const metadata: Metadata = {
  title: "SnapSync",
  description: "Designed & Developed by Team SnapSync",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`flex p-2 h-screen w-screen gap-2 ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Aside />
        <div className="w-full">
          <Top />
          {children}
        </div>
      </body>
    </html>
  );
}
