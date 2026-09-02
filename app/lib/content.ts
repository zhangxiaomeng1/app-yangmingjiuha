export type Course = {
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  audience: string;
  promise: string;
  stage: string;
  accent: string;
  modules: string[];
  deliverables: string[];
  tools: string[];
};

export const courses: Course[] = [
  {
    slug: "ai-agent-workflow",
    number: "01",
    title: "AI 智能体工作流",
    shortTitle: "从一句话到可交付结果",
    audience: "想用 AI 做事，但总停在聊天窗口的人",
    promise: "用 WorkBuddy、Codex 和豆包，把一个模糊想法拆成能执行、能检查、能交付的任务。",
    stage: "课程方向",
    accent: "violet",
    modules: ["先说清问题：目标、边界和验收标准", "WorkBuddy：让智能体处理文件与工作任务", "Codex：让智能体进入项目、修改代码并接受检查", "豆包：把复杂想法改写成清楚的中文表达", "把结果变成文档、页面、视频或下一步行动"],
    deliverables: ["一份自己的智能体工作流卡片", "一个可复用的任务简报模板", "一次从需求到交付的完整演练"],
    tools: ["WorkBuddy", "Codex", "豆包"],
  },
  {
    slug: "ai-ios-app",
    number: "02",
    title: "用 AI 参与 iOS App 开发",
    shortTitle: "从想法、原型到上架准备",
    audience: "有产品想法，但没有完整开发团队的人",
    promise: "公开一个 App 怎样被收敛、拆解、实现、测试，再走到 App Store 准备阶段。",
    stage: "实践记录",
    accent: "orange",
    modules: ["把想法收敛成一个核心场景", "用自然语言描述页面、状态和验收条件", "让 AI 协助理解代码库与完成小步修改", "用测试、真机验证和版本记录减少返工", "上架资料、隐私、订阅与审核风险的准备边界"],
    deliverables: ["一个可运行的最小项目切片", "产品需求与验收清单", "上架前自检表"],
    tools: ["ChatGPT", "Codex", "WorkBuddy", "Xcode"],
  },
  {
    slug: "one-person-company-ip",
    number: "03",
    title: "一人公司与个人 IP",
    shortTitle: "把实践变成口播、教程和长期资产",
    audience: "想把个人能力变成作品、内容和选择权的人",
    promise: "记录如何从真实项目提炼选题，用口播讲清过程，再让课程从重复问题里长出来。",
    stage: "正在构建",
    accent: "green",
    modules: ["个人母题：你到底在长期解决什么问题", "从经历卡片提炼口播主题", "一条内容的开头、冲突、证据与行动", "教程如何从真实项目中产生，而不是凭空编课", "内容、作品、课程和公司之间的自然承接"],
    deliverables: ["个人 IP 定位卡", "10 个可口播选题", "一套从口播到教程的改写模板"],
    tools: ["ChatGPT", "豆包", "剪映", "即梦"],
  },
  {
    slug: "focuslock-case",
    number: "04",
    title: "FocusLock 产品案例",
    shortTitle: "从注意力问题到订阅产品",
    audience: "想学习一个真实产品如何持续迭代的人",
    promise: "不改动现有 FocusLock 源码，公开它的产品判断、定价思路、内容表达和复盘边界。",
    stage: "案例档案",
    accent: "peach",
    modules: ["为什么从无意识刷手机这个问题开始", "免费体验、试用和订阅的判断过程", "如何用内容解释一个看不见的产品价值", "哪些反馈值得进入产品，哪些只是噪声", "代码不变时，如何通过内容、定位和渠道验证"],
    deliverables: ["产品案例拆解表", "用户问题与内容选题映射", "一次公开复盘的口播脚本"],
    tools: ["FocusLock", "ChatGPT", "剪映"],
  },
];

export const mediaTracks = [
  { slug: "life-experiments", number: "01", title: "口播｜主动设计自己的人生", text: "讲选择、失败、注意力、自由和长期行动，让人生观落到一个具体经历。", format: "真人口播 · 3—8分钟" },
  { slug: "agent-tutorials", number: "02", title: "教程｜让智能体真正帮你做事", text: "用屏幕录制和口播，演示 WorkBuddy、Codex、豆包在真实任务里的分工。", format: "口播 + 屏幕实操" },
  { slug: "indie-builder", number: "03", title: "复盘｜一个人把产品推到下一步", text: "公开9款作品的选择、取舍、上线、定价与没有解决的问题。", format: "案例拆解 · 连载" },
];

export const ipPlan = {
  title: "张晓檬主动设计人生·长期个人 IP 计划",
  subtitle: "用真实经历做母题，用口播建立信任，用课程和作品承接价值。",
  identity: "人生实践记录者 · AI 产品独立开发者 · 一人公司实践者",
  source: "飞书多维表格分析记录 · 2026 年 7 月",
  pillars: [
    { title: "主动设计人生", text: "讲选择、注意力、时间自由、职业尊严和长期行动，把人生观落到具体经历。" },
    { title: "AI 帮我做事", text: "用 WorkBuddy、Codex、豆包和 ChatGPT 演示从问题到交付的真实过程。" },
    { title: "一人公司与产品", text: "公开 9 款作品、FocusLock 和公司实践，讲清取舍、验证、上线与复盘。" },
  ],
  phases: [
    ["01", "建立识别度", "固定一句定位、三条内容线和统一口播结构，让陌生人知道为什么关注。"],
    ["02", "做口播样本", "先做 9 条同一定位的不同角度，比较完播、互动、关注和评论质量，不承诺爆款。"],
    ["03", "沉淀教程", "把高质量评论和真实项目整理成 WorkBuddy、Codex、豆包的分层教程。"],
    ["04", "连接作品", "让内容自然进入 9 款作品、FocusLock 和公司网站，形成可验证的产品证据。"],
    ["05", "验证商业化", "需求稳定后再选择课程、陪跑、服务或订阅中的一个主入口。"],
  ],
};

export const benchmarkAccount = {
  name: "胡楚靓",
  douyinId: "7124467",
  followers: "889.2 万",
  works: "1094 条",
  likes: "1.91 亿",
  avgLikes: "17.5 万 / 条",
  aiAvgLikes: "36.7 万 / 条",
  track: "生活 / 自媒体干货 / 美妆；AI 工具为新增垂类",
  profileHref: "https://www.douyin.com/search/胡楚靓?type=user",
  dataHref: "https://dy.feigua.cn/bloggeropen/35715B3AD4E12361",
};

export const benchmarkVideos = [
  { number: "01", title: "如何用AI做自己的专属工作台（首条爆款）", category: "效果展示种草", tool: "WorkBuddy、Vibe coding", views: "4100 万", likes: "82.5 万", saves: "66.5 万", comments: "1.1 万", shares: "26.6 万", href: "https://www.douyin.com/search/胡楚靓 AI工作台?type=video" },
  { number: "02", title: "AI工作台保姆级制作教程", category: "实操教程", tool: "WorkBuddy", views: "900 万", likes: "18.2 万", saves: "21.4 万", comments: "4200", shares: "7.3 万", href: "https://www.douyin.com/search/胡楚靓 AI工作台?type=video" },
  { number: "03", title: "网友AI工作台作业合集展示", category: "案例互动", tool: "WorkBuddy", views: "470 万", likes: "9.5 万", saves: "8.7 万", comments: "1800", shares: "2.1 万", href: "https://www.douyin.com/search/胡楚靓 AI工作台?type=video" },
];

export const categoryComparison = [
  { category: "效果展示种草类", avgLikes: "82.5 万", purpose: "拉流量、破圈传播", saveRatio: "80.6%" },
  { category: "实操教程类", avgLikes: "18.2 万", purpose: "涨粉、留用户、建立专业度", saveRatio: "117.6%" },
  { category: "案例互动类", avgLikes: "9.5 万", purpose: "促互动、拉长话题周期", saveRatio: "91.6%" },
];

export const works = [
  { index: "01", name: "DeepCleanup", type: "iPhone · AI 工具", description: "从重复照片、截图和大视频开始，把混乱的相册变成可以重新掌控的空间。", href: "https://apps.apple.com/us/app/deepcleanup-photo-cleaner/id6777354576", accent: "lavender" },
  { index: "02", name: "DeepCleanup for Mac", type: "Mac · AI 工具", description: "把同一套清理体验延伸到桌面，继续解决数字生活里的冗余。", href: "https://apps.apple.com/us/app/deepcleanup/id6777946333?mt=12", accent: "sand" },
  { index: "03", name: "FocusLock", type: "iPhone · 注意力实践", description: "屏蔽无意识刷手机的入口，为深度工作、休息和真实连接留出空间。", href: "https://apps.apple.com/us/app/focuslock-app-blocker/id6781309683", accent: "peach" },
  { index: "04", name: "LongShot", type: "iPhone · 效率工具", description: "把零散截图拼成一张连续、清晰、随时可以分享的长图。", href: "https://apps.apple.com/us/app/longshot-screenshot-stitch/id6745420963", accent: "blue" },
  { index: "05", name: "LifeLog", type: "iPhone · 个人记录", description: "倒计时、重要日子和私密记录，让生活留下可以回看的轨迹。", href: "https://apps.apple.com/us/app/lifelog-countdown-journal/id1610261169", accent: "rose" },
  { index: "06", name: "RatePilot", type: "海外 · 开发者工具", description: "帮助开发者比较不同市场的 App 与订阅定价策略。", href: "https://apps.apple.com/us/app/ratepilot-fx-pricing/id6782362394", accent: "mint" },
  { index: "07", name: "Stamp Studio", type: "iPhone / iPad · 效率工具", description: "导入文档、创建签名与印章，再把处理后的 PDF 带走。", href: "https://apps.apple.com/br/app/stamp-studio/id6790093959", accent: "yellow" },
  { index: "08", name: "X Autonomy Countdown", type: "Mac · 专注工具", description: "常驻菜单栏的倒计时，把一个当下任务清楚地放在眼前。", href: "https://apps.apple.com/us/app/x%E8%87%AA%E4%B8%BB%E5%80%92%E8%AE%A1%E6%97%B6/id6504705716?mt=12", accent: "grey" },
  { index: "09", name: "DuoCue · 双拍", type: "iPhone · 创作者工具", description: "同时记录前后摄像头，让表达、提词和创作过程更自然。", href: "https://github.com/zhangxiaomeng1/DualCamCreator", accent: "violet" },
];
