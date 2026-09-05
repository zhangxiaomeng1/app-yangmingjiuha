import type { Metadata } from "next";
import "./globals.css";
import "./workbench/workbench.css";

export const metadata: Metadata = {
  title: "张晓檬｜个人IP、AI课程与9款作品",
  description: "张晓檬的个人IP、口播教程、AI课程方向、人生实践与9款作品档案。",
  metadataBase: new URL("https://app.yangmingjiuha.xyz"),
  openGraph: {
    title: "张晓檬｜个人IP、AI课程与9款作品",
    description: "用 AI、产品和持续行动，把真实经历整理成口播、课程与作品。",
    type: "website",
    url: "https://app.yangmingjiuha.xyz",
  },
  twitter: {
    card: "summary",
    title: "张晓檬｜个人IP、AI课程与9款作品",
    description: "用 AI、产品和持续行动，把真实经历整理成口播、课程与作品。",
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
