import { SiteChrome, Eyebrow } from "../components/site-chrome";
import { mediaTracks } from "../lib/content";

export default function MediaPage() {
  return <SiteChrome>
    <section className="page-intro section-frame"><Eyebrow number="01">PERSONAL IP · CONTENT LAB</Eyebrow><h1>把经历讲出来，<br /><em>让内容成为长期资产。</em></h1><p>个人 IP 的核心不是“看起来很懂”，而是持续把真实项目、选择和复盘讲清楚。产品和课程只在真正相关时承接。</p></section>
    <section className="track-section section-frame"><div className="section-heading"><Eyebrow number="02">THREE MEDIA TRACKS</Eyebrow><h2>三条内容线，<br /><em>共同指向实践。</em></h2></div><div className="track-grid">{mediaTracks.map((track) => <a className="track-card" id={track.slug} href={`#${track.slug}`} key={track.slug}><span className="media-index">{track.number}</span><span className="track-format">{track.format}</span><h3>{track.title}</h3><p>{track.text}</p><span className="track-mark">● 真实记录 · 查看定位</span></a>)}</div></section>
    <section className="format-section section-frame"><div><Eyebrow number="03">SPOKEN FORMAT</Eyebrow><h2>每条口播都按<br /><em>六个动作展开。</em></h2></div><div className="format-flow">{['场景','冲突','动作','证据','复盘','下一步'].map((item, index) => <div key={item}><span>0{index + 1}</span><strong>{item}</strong></div>)}</div></section>
    <section className="tool-section section-frame"><Eyebrow number="04">TOOL ROLES</Eyebrow><h2>不做工具搬运，<br /><em>讲清楚分工。</em></h2><div className="tool-matrix"><div><strong>WorkBuddy</strong><span>文件、资料与任务执行</span></div><div><strong>Codex</strong><span>代码库、修改、测试与审查</span></div><div><strong>豆包</strong><span>中文表达、提纲与口播打磨</span></div><div><strong>剪映 / 即梦</strong><span>剪辑、字幕与视觉包装</span></div><div><strong>ChatGPT</strong><span>结构化、研究与复盘</span></div></div></section>
    <section className="episode-section section-frame"><div className="section-heading"><Eyebrow number="05">EPISODE SEEDS</Eyebrow><h2>可以从这些问题<br /><em>开始说。</em></h2></div><div className="episode-list">{['我为什么不再把 AI 当聊天工具','我如何用 Codex 修改一个真实项目','不会写代码的人应该先学什么','FocusLock 这个产品为什么存在'].map((item, index) => <a href={`/media#episode-${index + 1}`} id={`episode-${index + 1}`} key={item}><span>0{index + 1}</span><strong>{item}</strong><span>待录制 →</span></a>)}</div></section>
  </SiteChrome>;
}
