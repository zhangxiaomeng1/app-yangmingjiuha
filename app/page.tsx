const links = [
  {
    label: "主域名",
    value: "yangmingjiuha.xyz",
    note: "GitHub Pages · 现有主页",
    href: "https://yangmingjiuha.xyz",
    tone: "violet",
  },
  {
    label: "源码仓库",
    value: "github.com/zhangxiaomeng1",
    note: "GitHub · 版本与内容",
    href: "https://github.com/zhangxiaomeng1",
    tone: "slate",
  },
  {
    label: "托管平台",
    value: "Cloudflare Worker",
    note: "边缘网络 · HTTPS · CDN",
    href: "https://www.cloudflare.com",
    tone: "orange",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="https://yangmingjiuha.xyz">
          <span className="brand-mark" aria-hidden="true">A</span>
          <span>YANGMING</span>
        </a>
        <span className="topbar-status"><span className="status-dot" /> APP 子域名</span>
      </nav>

      <section className="hero section-frame">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> DIGITAL HOME · APP NODE</p>
          <h1>把主站的秩序，<br /><em>延伸到 APP。</em></h1>
          <p className="hero-lede">
            这是 <strong>app.yangmingjiuha.xyz</strong> 的独立页面。
            主域名继续留在 GitHub Pages，APP 子域名由 Cloudflare Worker 独立托管。
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="https://yangmingjiuha.xyz">访问主站 <span>↗</span></a>
            <a className="button button-quiet" href="#relationship">查看关联关系 <span>↓</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="APP 子域名结构示意图">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="art-core"><span>app</span><small>yangmingjiuha.xyz</small></div>
          <span className="art-label art-label-top">CLOUDFLARE<br /><b>EDGE</b></span>
          <span className="art-label art-label-bottom">STATIC<br /><b>PAGE</b></span>
        </div>
      </section>

      <section className="signal-strip section-frame" aria-label="页面状态">
        <div><span className="strip-label">当前节点</span><strong>app.yangmingjiuha.xyz</strong></div>
        <div><span className="strip-label">内容形态</span><strong>独立静态页</strong></div>
        <div><span className="strip-label">连接状态</span><strong className="live"><span className="status-dot" /> READY</strong></div>
      </section>

      <section className="relationship section-frame" id="relationship">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> ONE DOMAIN · THREE LAYERS</p>
          <h2>三个层次，<br /><em>彼此独立又互相指向。</em></h2>
        </div>
        <div className="link-grid">
          {links.map((link) => (
            <a className={`link-card ${link.tone}`} href={link.href} key={link.label}>
              <div className="card-top"><span>{link.label}</span><span className="arrow">↗</span></div>
              <h3>{link.value}</h3>
              <p>{link.note}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="flow section-frame" aria-label="域名关系">
        <div className="flow-node"><span className="node-index">A</span><div><small>主域名</small><strong>yangmingjiuha.xyz</strong></div></div>
        <span className="flow-line" aria-hidden="true">→</span>
        <div className="flow-node active"><span className="node-index">⌁</span><div><small>Cloudflare Worker</small><strong>app.yangmingjiuha.xyz</strong></div></div>
        <span className="flow-line" aria-hidden="true">→</span>
        <div className="flow-node"><span className="node-index">G</span><div><small>源码参考</small><strong>GitHub</strong></div></div>
      </section>

      <footer className="footer section-frame">
        <span>© 2026 YANGMING TECHNOLOGY</span>
        <span>Built for a quieter web · <a href="https://yangmingjiuha.xyz">Return home ↗</a></span>
      </footer>
    </main>
  );
}
