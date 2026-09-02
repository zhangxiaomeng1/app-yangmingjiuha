/* eslint-disable @next/next/no-html-link-for-pages */
import type { ReactNode } from "react";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="张晓檬个人实践首页">
          <span className="brand-mark" aria-hidden="true">张</span>
          <span>张晓檬 / YANGMING</span>
        </a>
        <nav className="nav-links" aria-label="主导航">
          <a href="/courses">课程</a>
          <a href="/media">自媒体 IP</a>
          <a href="/story">人生档案</a>
          <a href="/works">作品</a>
          <a href="/plan">实施计划</a>
          <a href="https://yangmingjiuha.xyz" target="_blank" rel="noreferrer">公司主站 ↗</a>
        </nav>
      </header>
      {children}
      <footer className="footer section-frame">
        <span>© 2026 张晓檬 / YANGMING TECHNOLOGY</span>
        <span>Keep making the life you mean to live.</span>
      </footer>
    </main>
  );
}

export function Eyebrow({ number, children }: { number: string; children: ReactNode }) {
  return <p className="eyebrow"><span>{number}</span> {children}</p>;
}
