import type { Metadata } from "next";
import { SiteChrome } from "../components/site-chrome";
import { WorkbenchClient } from "./workbench-client";

export const metadata: Metadata = {
  title: "阳明 AI 工作台｜张晓檬",
  description: "把内容、产品开发和知识经营拆成清晰任务，并交给 ChatGPT、豆包、Codex、WorkBuddy、即梦与剪映协作完成。",
  openGraph: {
    title: "阳明 AI 工作台｜张晓檬",
    description: "一个不依赖 DeepSeek API 的本地优先 AI 协作工作台。",
    url: "https://app.yangmingjiuha.xyz/workbench",
  },
  twitter: {
    card: "summary",
    title: "阳明 AI 工作台｜张晓檬",
    description: "把想法变成任务卡，让六个工具各司其职。",
  },
};

export default function WorkbenchPage() {
  return (
    <SiteChrome>
      <WorkbenchClient />
    </SiteChrome>
  );
}
