import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Noto_Sans } from "next/font/google";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata = {
  title: "올케어랩스 | AllCareLabs - 스포츠 현장 의무지원",
  description: "스포츠 현장 의무지원 · 컨디셔닝 · 교육 파견 전문 서비스",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={notoSans.variable}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

