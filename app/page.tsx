const works = [
  {
    index: "01",
    name: "DeepCleanup",
    type: "iPhone · AI 工具",
    description: "从重复照片、截图和大视频开始，把混乱的相册变成可以重新掌控的空间。",
    href: "https://apps.apple.com/us/app/deepcleanup-photo-cleaner/id6777354576",
    accent: "lavender",
  },
  {
    index: "02",
    name: "DeepCleanup for Mac",
    type: "Mac · AI 工具",
    description: "把同一套清理体验延伸到桌面，继续解决数字生活里的冗余。",
    href: "https://apps.apple.com/us/app/deepcleanup/id6777946333?mt=12",
    accent: "sand",
  },
  {
    index: "03",
    name: "FocusLock",
    type: "iPhone · 注意力实践",
    description: "屏蔽无意识刷手机的入口，为深度工作、休息和真实连接留出空间。",
    href: "https://apps.apple.com/us/app/focuslock-app-blocker/id6781309683",
    accent: "peach",
  },
  {
    index: "04",
    name: "LongShot",
    type: "iPhone · 效率工具",
    description: "把零散截图拼成一张连续、清晰、随时可以分享的长图。",
    href: "https://apps.apple.com/us/app/longshot-screenshot-stitch/id6745420963",
    accent: "blue",
  },
  {
    index: "05",
    name: "LifeLog",
    type: "iPhone · 个人记录",
    description: "倒计时、重要日子和私密记录，让生活留下可以回看的轨迹。",
    href: "https://apps.apple.com/us/app/lifelog-countdown-journal/id1610261169",
    accent: "rose",
  },
  {
    index: "06",
    name: "RatePilot",
    type: "海外 · 开发者工具",
    description: "帮助开发者比较不同市场的 App 与订阅定价策略。",
    href: "https://apps.apple.com/us/app/ratepilot-fx-pricing/id6782362394",
    accent: "mint",
  },
  {
    index: "07",
    name: "Stamp Studio",
    type: "iPhone / iPad · 效率工具",
    description: "导入文档、创建签名与印章，再把处理后的 PDF 带走。",
    href: "https://apps.apple.com/br/app/stamp-studio/id6790093959",
    accent: "yellow",
  },
  {
    index: "08",
    name: "X Autonomy Countdown",
    type: "Mac · 专注工具",
    description: "常驻菜单栏的倒计时，把一个当下任务清楚地放在眼前。",
    href: "https://apps.apple.com/us/app/x%E8%87%AA%E4%B8%BB%E5%80%92%E8%AE%A1%E6%97%B6/id6504705716?mt=12",
    accent: "grey",
  },
  {
    index: "09",
    name: "DuoCue · 双拍",
    type: "iPhone · 创作者工具",
    description: "同时记录前后摄像头，让表达、提词和创作过程更自然。",
    href: "https://github.com/zhangxiaomeng1/DualCamCreator",
    accent: "violet",
  },
];

const practiceNotes = [
  {
    index: "A",
    title: "把人生当成自己的项目",
    text: "记录、拆解、执行，再复盘。先做一个选择，再用行动证明它。",
  },
  {
    index: "B",
    title: "用 AI 把想法推进到产品",
    text: "从问题、原型到上线，留下真实过程，而不是只展示结果。",
  },
  {
    index: "C",
    title: "注意力不是工具，是选择",
    text: "FocusLock 是一件关于主动生活的实践作品，也是一次持续中的实验。",
  },
];

export default function Home() {
  return (
    <main className="site-shell">
      <nav className="topbar" aria-label="主导航">
        <a className="brand" href="#top" aria-label="张晓檬个人实践">
          <span className="brand-mark" aria-hidden="true">张</span>
          <span>张晓檬 / YANGMING</span>
        </a>
        <div className="nav-links">
          <a href="#practice">实践</a>
          <a href="#works">作品</a>
          <a href="https://yangmingjiuha.xyz">主站 <span aria-hidden="true">↗</span></a>
        </div>
      </nav>

      <section className="hero section-frame" id="top" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> PERSONAL PRACTICE · APP NODE</p>
          <h1 id="hero-title">不按默认轨道生活，<br /><em>把想法做成作品。</em></h1>
          <p className="hero-lede">
            这里是张晓檬的个人实践入口：用 AI、产品和持续行动，把人生当成一个可以记录、执行和迭代的项目。
          </p>
          <div className="hero-meta" aria-label="个人简介">
            <span>iOS 工程师</span><i aria-hidden="true" />
            <span>一人公司实践</span><i aria-hidden="true" />
            <span>9 款作品</span>
          </div>
          <div className="hero-actions">
            <a className="button button-primary" href="#works">查看作品 <span aria-hidden="true">↓</span></a>
            <a className="button button-quiet" href="#practice">我在实践什么 <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="hero-art" aria-label="九款作品与持续实践的视觉标记">
          <div className="hero-art-paper" />
          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />
          <div className="hero-number"><span>9</span><small>WORKS<br />IN PROGRESS</small></div>
          <span className="art-label art-label-top">MAKE<br /><b>IT REAL</b></span>
          <span className="art-label art-label-bottom">KEEP<br /><b>GOING</b></span>
        </div>
      </section>

      <section className="signal-strip section-frame" aria-label="实践状态">
        <div><span className="strip-label">当前入口</span><strong>app.yangmingjiuha.xyz</strong></div>
        <div><span className="strip-label">正在记录</span><strong>人生 · 产品 · 注意力</strong></div>
        <div><span className="strip-label">状态</span><strong className="live"><span className="status-dot" /> 持续中</strong></div>
      </section>

      <section className="practice section-frame" id="practice" aria-labelledby="practice-title">
        <div className="section-heading">
          <p className="eyebrow"><span>02</span> A LIFE IN PRACTICE</p>
          <h2 id="practice-title">先做一个选择，<br /><em>再用行动证明。</em></h2>
        </div>
        <div className="practice-grid">
          {practiceNotes.map((note) => (
            <article className="practice-card" key={note.index}>
              <span className="practice-index">{note.index}</span>
              <div>
                <h3>{note.title}</h3>
                <p>{note.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="works section-frame" id="works" aria-labelledby="works-title">
        <div className="works-heading">
          <div>
            <p className="eyebrow"><span>03</span> WORKS ARCHIVE</p>
            <h2 id="works-title">9 款作品，<br /><em>是走过的路。</em></h2>
          </div>
          <p className="works-lede">这些产品来自不同的问题：清理、专注、记录、定价、创作。它们共同构成一份仍在展开的个人实践档案。</p>
        </div>
        <div className="works-grid">
          {works.map((work) => (
            <a className={`work-card ${work.accent}`} href={work.href} target="_blank" rel="noopener noreferrer" key={work.name}>
              <div className="work-top"><span>{work.index}</span><span className="work-arrow" aria-hidden="true">↗</span></div>
              <div className="work-copy">
                <span className="work-type">{work.type}</span>
                <h3>{work.name}</h3>
                <p>{work.description}</p>
              </div>
              <span className="work-link">查看作品</span>
            </a>
          ))}
        </div>
      </section>

      <section className="bridge section-frame" aria-labelledby="bridge-title">
        <div className="bridge-copy">
          <p className="eyebrow"><span>04</span> ONE PERSON · MANY LAYERS</p>
          <h2 id="bridge-title">工具是手段，<br /><em>主动生活才是方向。</em></h2>
          <p>公司、代码、AI、书和电影，最后都会回到同一个问题：我想怎样使用自己的时间，又愿意为此承担什么。</p>
        </div>
        <div className="bridge-links">
          <a href="https://yangmingjiuha.xyz"><span>公司主页</span><strong>yangmingjiuha.xyz ↗</strong></a>
          <a href="https://github.com/zhangxiaomeng1"><span>代码与版本</span><strong>GitHub / zhangxiaomeng1 ↗</strong></a>
          <a href="https://apps.apple.com/us/app/focuslock-app-blocker/id6781309683"><span>代表作品</span><strong>FocusLock · App Store ↗</strong></a>
        </div>
      </section>

      <footer className="footer section-frame">
        <span>© 2026 张晓檬 / YANGMING TECHNOLOGY</span>
        <span>Keep making the life you mean to live.</span>
      </footer>
    </main>
  );
}
