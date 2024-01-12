import type { Metadata } from "next";
import { Inter, Roboto_Mono, Noto_Sans_KR } from "next/font/google";
import "../index.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const roboto = Roboto_Mono({ subsets: ["latin"], display: "swap" });
const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans_kr.className}>{children}</body>
    </html>
  );
}
