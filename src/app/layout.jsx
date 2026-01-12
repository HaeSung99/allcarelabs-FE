import "./globals.css";

export const metadata = {
  title: "AllCareLabs",
  description: "AllCareLabs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}

