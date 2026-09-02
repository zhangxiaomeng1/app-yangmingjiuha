import { SiteChrome, Eyebrow } from "../components/site-chrome";
import { works } from "../lib/content";

export default function WorksPage() {
  return <SiteChrome>
    <section className="page-intro section-frame"><Eyebrow number="01">WORKS ARCHIVE · 9 PRODUCTS</Eyebrow><h1>每个作品，<br /><em>都从一个具体问题开始。</em></h1><p>这是独立开发、产品判断和长期复盘的公开档案。点击每张卡片，可以进入 App Store 或代码仓库。</p></section>
    <section className="works section-frame"><div className="works-grid">{works.map((work) => <a className={`work-card ${work.accent}`} href={work.href} target="_blank" rel="noopener noreferrer" key={work.name}><div className="work-top"><span>{work.index}</span><span className="work-arrow">↗</span></div><div className="work-copy"><span className="work-type">{work.type}</span><h3>{work.name}</h3><p>{work.description}</p></div><span className="work-link">打开作品 ↗</span></a>)}</div></section>
    <section className="note-band section-frame">FocusLock 源码保持不变；这里记录的是产品问题、表达方式和实践结果。</section>
  </SiteChrome>;
}
