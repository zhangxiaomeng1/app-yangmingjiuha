/* eslint-disable @next/next/no-html-link-for-pages */
import { SiteChrome, Eyebrow } from "../components/site-chrome";
import { benchmarkAccount, ipPlan } from "../lib/content";

export default function PlanPage() {
  return <SiteChrome>
    <section className="page-intro section-frame"><Eyebrow number="01">LONG-TERM PERSONAL IP SYSTEM</Eyebrow><h1>{ipPlan.title}<br /><em>{ipPlan.subtitle}</em></h1><p>{ipPlan.identity}</p><p className="data-source">数据标记：{ipPlan.source}</p></section>
    <section className="ip-pillars section-frame"><div className="section-heading"><Eyebrow number="02">THREE PILLARS</Eyebrow><h2>先让别人记住<br /><em>你在解决什么。</em></h2></div><div className="pillar-grid">{ipPlan.pillars.map((pillar, index) => <article key={pillar.title}><span>0{index + 1}</span><h3>{pillar.title}</h3><p>{pillar.text}</p></article>)}</div></section>
    <section className="plan-list section-frame"><Eyebrow number="03">IMPLEMENTATION ROADMAP</Eyebrow>{ipPlan.phases.map(([number, title, text]) => <article className="plan-row" key={number}><span className="plan-number">{number}</span><div><h2>{title}</h2><p>{text}</p></div></article>)}</section>
    <section className="benchmark-summary section-frame"><div><Eyebrow number="04">BENCHMARK ACCOUNT</Eyebrow><h2>{benchmarkAccount.name}<br /><em>账号量级只作背景。</em></h2><a className="button button-quiet" href={benchmarkAccount.profileHref} target="_blank" rel="noreferrer">打开抖音主页搜索 ↗</a></div><div className="metric-grid"><div><strong>{benchmarkAccount.followers}</strong><span>粉丝总量 · 2026年7月记录</span></div><div><strong>{benchmarkAccount.works}</strong><span>历史作品数</span></div><div><strong>{benchmarkAccount.likes}</strong><span>累计点赞</span></div><div><strong>{benchmarkAccount.aiAvgLikes}</strong><span>AI 系列平均点赞</span></div></div></section>
    <section className="plan-map section-frame"><div><Eyebrow number="05">THE LOOP</Eyebrow><h2>经历 → 口播 → 教程<br /><em>→ 作品 → 商业化</em></h2></div><div className="plan-links"><a href="/story"><span>起点</span><strong>人生档案 ↗</strong></a><a href="/media"><span>传播</span><strong>自媒体 IP ↗</strong></a><a href="/courses"><span>交付</span><strong>课程方向 ↗</strong></a><a href="/works"><span>证据</span><strong>9 款作品 ↗</strong></a></div></section>
    <section className="note-band section-frame">当前阶段先做真实口播和需求验证，不承诺粉丝数或收入目标；DeepSeek API 继续保留给未来服务端接口。</section>
  </SiteChrome>;
}
