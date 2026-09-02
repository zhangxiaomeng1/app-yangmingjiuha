import type { ReactNode } from "react";
import Link from "next/link";

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <main className="site-shell">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="张晓檬个人实践首页">
          <span className="brand-mark" aria-hidden="true">张</span>
          <span>张晓檬 / YANGMING</span>
        </Link>
        <nav className="nav-links" aria-label="主导航">
          <Link href="/courses">课程</Link>
          <a href="/media">自媒体 IP</a>
          <Link href="/story">人生档案</Link>
          <Link href="/#works">作品</Link>
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
