import Link from "next/link";
import { SiteChrome, Eyebrow } from "../components/site-chrome";

const phases = [
  ["01", "统一定位", "把“人生实践记录者”固定成主身份，明确三条内容线：主动设计人生、AI 做事、独立产品。", "输出：主页介绍、栏目说明、个人故事边界"],
  ["02", "持续口播", "从真实经历和正在做的项目提炼选题，固定用场景—冲突—动作—证据—复盘—下一步讲清楚。", "输出：可连续发布的口播选题与脚本"],
  ["03", "课程验证", "先公开课程方向和小节，不先假设用户愿意付费；用真实问题验证 WorkBuddy、Codex、豆包教程的需求。", "输出：课程大纲、样课、报名意向"],
  ["04", "作品承接", "把9款作品作为能力证据，内容讲问题和过程，产品页面承接下载、订阅或代码体验。", "输出：作品档案、产品入口、反馈记录"],
  ["05", "商业闭环", "当内容、课程和作品都有稳定需求后，再决定订阅、课程、陪跑或服务的组合，不提前堆收费入口。", "输出：一个主变现入口与数据复盘"],
];

export default function PlanPage() {
  return <SiteChrome>
    <section className="page-intro section-frame"><Eyebrow number="01">IMPLEMENTATION PLAN · ONE PERSON SYSTEM</Eyebrow><h1>先形成信任，<br /><em>再形成交易。</em></h1><p>这不是把所有事情一起做，而是让人生档案、自媒体 IP、课程和作品按先后关系连接起来。</p></section>
    <section className="plan-list section-frame">{phases.map(([number, title, text, output]) => <article className="plan-row" key={number}><span className="plan-number">{number}</span><div><h2>{title}</h2><p>{text}</p><strong>{output}</strong></div></article>)}</section>
    <section className="plan-map section-frame"><div><Eyebrow number="02">THE LOOP</Eyebrow><h2>经历 → 口播 → 教程<br /><em>→ 作品 → 商业化</em></h2></div><div className="plan-links"><Link href="/story"><span>起点</span><strong>人生档案 ↗</strong></Link><Link href="/media"><span>传播</span><strong>自媒体 IP ↗</strong></Link><Link href="/courses"><span>交付</span><strong>课程方向 ↗</strong></Link><Link href="/works"><span>证据</span><strong>9 款作品 ↗</strong></Link></div></section>
    <section className="note-band section-frame">当前阶段只做验证，不承诺收入目标；DeepSeek API 继续保留给未来服务端接口，不放进这一版网站。</section>
  </SiteChrome>;
}
