import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "致我最心爱的人",
  description: "一段真心话，送给特别的你",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  );
}