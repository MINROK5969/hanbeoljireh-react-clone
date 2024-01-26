import type { Metadata } from "next";
import { Inter, Roboto_Mono, Noto_Sans_KR } from "next/font/google";
import "../index.css";
import Header from "@components/compound/Header";
import Footer from "@components/compound/Footer";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const roboto = Roboto_Mono({ subsets: ["latin"], display: "swap" });
const noto_sans_kr = Noto_Sans_KR({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "한별이레 클론 프로젝트",
  description: "Web page clone with next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" href="/assets/favicon.png" sizes="any" />
      <body className={noto_sans_kr.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
