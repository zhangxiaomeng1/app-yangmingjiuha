"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";

type LaneKey = "content" | "product" | "knowledge";
type WorkItem = { id: number; title: string; lane: LaneKey; step: number };

const lanes = {
  content: {
    name: "内容与个人 IP",
    short: "内容",
    note: "把真实经历和项目证据，整理成可发布、可复盘的内容。",
    output: "一条有场景、冲突、动作、证据、复盘和下一步的口播内容",
    steps: [
      ["ChatGPT", "收敛主题、受众、证据边界和唯一结论"],
      ["豆包", "改写标题、三秒钩子和自然中文口播"],
      ["即梦 / 剪映", "准备封面、配图、字幕和最终成片"],
      ["飞书", "记录发布链接、数据、评论与下次假设"],
    ],
  },
  product: {
    name: "产品与开发",
    short: "产品",
    note: "把产品问题拆成可以验收的小任务，再进入真实项目。",
    output: "一份有边界、验收条件和验证结果的产品任务",
    steps: [
      ["ChatGPT", "明确用户问题、最小范围和验收标准"],
      ["Codex", "理解项目、实施小步修改并完成检查"],
      ["WorkBuddy", "串联文件、清单、版本记录和重复流程"],
      ["飞书", "沉淀变更、验证结果和继续或冻结决定"],
    ],
  },
  knowledge: {
    name: "知识与经营",
    short: "经营",
    note: "把资料、评论和经营数据变成有证据的下一步判断。",
    output: "一份区分事实、推断和行动的经营简报",
    steps: [
      ["飞书", "汇集原始资料、记录和真实数据"],
      ["ChatGPT", "整理事实、口径差异、风险与决策选项"],
      ["豆包", "提炼中文摘要、用户问题和对外表达"],
      ["WorkBuddy", "把重复收集与回写步骤变成固定流程"],
    ],
  },
} satisfies Record<LaneKey, { name: string; short: string; note: string; output: string; steps: string[][] }>;

const starterTasks: WorkItem[] = [
  { id: 1, title: "确定第一条工作台口播的真实证据", lane: "content", step: 1 },
  { id: 2, title: "整理 FocusLock 内容转化入口", lane: "product", step: 0 },
];

const feishuKnowledgeBase = "https://my.feishu.cn/wiki/W5JzwIlEmiI2fKk3tHFc5oiNngc";

export function WorkbenchClient() {
  const [lane, setLane] = useState<LaneKey>("content");
  const [title, setTitle] = useState("");
  const [items, setItems] = useState<WorkItem[]>(starterTasks);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      const saved = window.localStorage.getItem("yangming-workbench-items");
      if (saved) {
        try { setItems(JSON.parse(saved) as WorkItem[]); }
        catch { window.localStorage.removeItem("yangming-workbench-items"); }
      }
      setReady(true);
    });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    if (ready) window.localStorage.setItem("yangming-workbench-items", JSON.stringify(items));
  }, [items, ready]);

  const activeLane = lanes[lane];
  const activeItems = useMemo(() => items.filter((item) => item.step < lanes[item.lane].steps.length), [items]);

  function addItem(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setNotice("先写下这次真正要完成的一件事。");
      return;
    }
    setItems((current) => [{ id: Date.now(), title: cleanTitle, lane, step: 0 }, ...current]);
    setTitle("");
    setNotice("任务卡已加入今日队列，并保存在当前浏览器。");
  }

  function advanceItem(id: number) {
    setItems((current) => current.map((item) => item.id === id ? { ...item, step: Math.min(item.step + 1, lanes[item.lane].steps.length) } : item));
  }

  async function copyBrief() {
    const brief = `任务：${title.trim() || "请补充一个明确任务"}\n类型：${activeLane.name}\n目标产出：${activeLane.output}\n边界：不调用 DeepSeek API；不把计划写成结果；需要人工确认事实与最终发布。\n分工：\n${activeLane.steps.map(([tool, action], index) => `${index + 1}. ${tool}：${action}`).join("\n")}`;
    await navigator.clipboard.writeText(brief);
    setNotice("任务简报已复制，可以交给对应工具继续处理。");
  }

  return (
    <div className="workbench-shell" data-workbench-root>
      <section className="workbench-hero section-frame">
        <div className="workbench-kicker"><span>YANGMING / WORKBENCH</span><b>LOCAL FIRST</b></div>
        <div className="workbench-hero-grid">
          <div>
            <p className="workbench-overline">把想法送到正确的工具，而不是同时打开所有工具。</p>
            <h1>阳明 AI<br /><em>工作台</em></h1>
            <p className="workbench-lede">从一个真实任务开始，选择工作类型，生成分工简报，再按顺序完成、检查和回写。</p>
          </div>
          <div className="workbench-status-board" aria-label="工作台状态">
            <div className="status-board-head"><span>系统状态</span><span className="online-dot">在线</span></div>
            <div className="status-metric"><strong>06</strong><span>当前工具</span></div>
            <div className="status-metric"><strong>{activeItems.length.toString().padStart(2, "0")}</strong><span>进行中的任务</span></div>
            <div className="status-metric status-wide"><strong>01</strong><span>每次只推进一个关键结果</span></div>
            <div className="api-off"><span>OFFLINE</span><strong>DeepSeek API 暂不启用</strong></div>
          </div>
        </div>
      </section>

      <section className="workbench-main section-frame">
        <div className="workbench-composer">
          <div className="panel-heading">
            <div><span>01 / START</span><h2>创建一张任务卡</h2></div>
            <a href={feishuKnowledgeBase} target="_blank" rel="noreferrer">打开飞书知识库 ↗</a>
          </div>
          <div className="lane-tabs" role="tablist" aria-label="工作类型">
            {(Object.keys(lanes) as LaneKey[]).map((key) => <button key={key} type="button" role="tab" aria-selected={lane === key} className={lane === key ? "active" : ""} onClick={() => setLane(key)}><span>{lanes[key].short}</span>{lanes[key].name}</button>)}
          </div>
          <form className="task-form" onSubmit={addItem}>
            <label htmlFor="workbench-task">这次真正要完成什么？</label>
            <div className="task-input-row">
              <textarea id="workbench-task" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="例如：把我做 FocusLock 的真实原因整理成第一条小红书口播" rows={3} maxLength={180} />
              <button type="submit">加入队列 <span>↗</span></button>
            </div>
            <div className="form-foot"><span>{title.length}/180</span><button type="button" onClick={copyBrief}>复制完整分工简报</button></div>
            {notice && <p className="workbench-notice" role="status">{notice}</p>}
          </form>
        </div>

        <aside className="output-card">
          <span>EXPECTED OUTPUT</span><h2>{activeLane.name}</h2><p>{activeLane.note}</p>
          <div><small>本轮交付</small><strong>{activeLane.output}</strong></div>
        </aside>
      </section>

      <section className="handoff-section section-frame">
        <div className="panel-heading"><div><span>02 / HANDOFF</span><h2>工具接力，不并行打架</h2></div><p>{activeLane.name}的推荐顺序</p></div>
        <div className="handoff-flow">
          {activeLane.steps.map(([tool, action], index) => <article key={`${lane}-${tool}`}>
            <div className="tool-symbol"><span>{String(index + 1).padStart(2, "0")}</span><b>{tool.slice(0, 1)}</b></div>
            <div><h3>{tool}</h3><p>{action}</p></div><span className="flow-arrow" aria-hidden="true">→</span>
          </article>)}
        </div>
      </section>

      <section className="queue-section section-frame">
        <div className="panel-heading"><div><span>03 / TODAY</span><h2>今日任务队列</h2></div><p>任务只保存在当前浏览器</p></div>
        <div className="queue-list">
          {items.map((item) => {
            const itemLane = lanes[item.lane];
            const done = item.step >= itemLane.steps.length;
            const currentTool = done ? "已完成" : itemLane.steps[item.step][0];
            return <article className={done ? "queue-item done" : "queue-item"} key={item.id}>
              <div className="queue-index">{itemLane.short}</div>
              <div className="queue-copy"><span>{itemLane.name}</span><h3>{item.title}</h3><div className="progress-track"><i style={{ width: `${(item.step / itemLane.steps.length) * 100}%` }} /></div></div>
              <div className="queue-action"><small>{done ? "DONE" : `NEXT · ${currentTool}`}</small><button type="button" disabled={done} onClick={() => advanceItem(item.id)}>{done ? "完成" : "完成本步 →"}</button></div>
            </article>;
          })}
        </div>
      </section>

      <section className="workbench-rules section-frame">
        <div><span>RULE 01</span><strong>一次只推动一个明确结果</strong></div>
        <div><span>RULE 02</span><strong>计划、脚本和真实结果分开记录</strong></div>
        <div><span>RULE 03</span><strong>最终发布、产品边界与商业判断由你确认</strong></div>
      </section>
    </div>
  );
}
