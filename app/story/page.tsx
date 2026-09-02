import { SiteChrome, Eyebrow } from "../components/site-chrome";

const values = [['自主与时间自由','先决定时间如何被使用，再决定做什么生意。'],['技术成长与职业尊严','把复杂问题做成可以运行、可以交付的作品。'],['健康与长期主义','不拿短期流量交换长期失控。'],['财富与选择权','商业化是为了更多选择，不是唯一身份。'],['名声','有用的声誉来自持续交付，不来自包装。']];
const timeline = [['1991','河北唐山出生'],['2014','开始工作，进入客户端与 iOS 开发'],['之后','经历金融科技、百度与大型项目，积累工程与交付能力'],['独立实践','做独立 App、内部工具、记录与自动化，把人生当作自己的项目'],['现在','用 AI、产品、内容和公司，持续验证一人公司与个人 IP']];
const sources = [['思想','王阳明、孔子、《道德经》《孙子兵法》'],['书','《明朝那些事儿》《富爸爸》《思考致富》《世界尽头的咖啡馆》《遥远的救世主》《天幕红尘》《围城》'],['影像','《海上钢琴师》、头文字D、灌篮高手、《哪吒》《繁花》'],['反复出现的母题','自主、精神独立、财富与选择、不按默认轨道生活、用行动减少内耗']];

export default function StoryPage() {
  return <SiteChrome>
    <section className="page-intro section-frame"><Eyebrow number="01">STORY · LIFE AS A PROJECT</Eyebrow><h1>不是人设，<br /><em>是一份持续更新的实践档案。</em></h1><p>这里整理的是公开表达需要的经历、价值与审美来源。它们用来解释我为什么做这些产品和课程，不代表一份完整的私人传记。</p></section>
    <section className="values-section section-frame"><div><Eyebrow number="02">VALUE ORDER</Eyebrow><h2>做选择时，<br /><em>什么排在前面。</em></h2></div><div className="value-list">{values.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><div><strong>{title}</strong><p>{text}</p></div></div>)}</div></section>
    <section className="timeline-section section-frame"><Eyebrow number="03">TIMELINE</Eyebrow><h2>从工程师到<br /><em>人生实践记录者。</em></h2><div className="timeline-list">{timeline.map(([year, text]) => <div key={year}><span>{year}</span><strong>{text}</strong></div>)}</div></section>
    <section className="sources-section section-frame"><div><Eyebrow number="04">KNOWLEDGE & AESTHETIC</Eyebrow><h2>喜欢的东西，<br /><em>会留下做事的痕迹。</em></h2></div><div className="source-grid">{sources.map(([title, text]) => <article key={title}><span>{title}</span><p>{text}</p></article>)}</div></section>
    <section className="note-band section-frame">公开边界：精选真实经历，不公开家庭、隐私和无法核验的细节；计划与事实分开写。</section>
  </SiteChrome>;
}
