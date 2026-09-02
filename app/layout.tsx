import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "张晓檬｜人生实践与9款作品",
  description: "用 AI、产品和持续行动，主动设计自己的人生。张晓檬的个人实践与9款作品档案。",
  metadataBase: new URL("https://app.yangmingjiuha.xyz"),
  openGraph: {
    title: "张晓檬｜人生实践与9款作品",
    description: "用 AI、产品和持续行动，主动设计自己的人生。",
    type: "website",
    url: "https://app.yangmingjiuha.xyz",
  },
  twitter: {
    card: "summary",
    title: "张晓檬｜人生实践与9款作品",
    description: "用 AI、产品和持续行动，主动设计自己的人生。",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
