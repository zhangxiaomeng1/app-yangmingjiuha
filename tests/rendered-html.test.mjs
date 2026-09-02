import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render(pathname = "/") {
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}-${pathname}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } }, { waitUntil() {}, passThroughOnException() {} });
}

test("homepage exposes the IP, courses, media and works archive", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /<title>张晓檬｜个人IP、AI课程与9款作品<\/title>/i);
  for (const marker of ["人生实践记录者", "课程筹备中", "自媒体不是广告位", "9 款作品", "FocusLock", "DuoCue", "/courses/ai-agent-workflow", "/media", "/story"]) {
    assert.match(html, new RegExp(marker.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("all public content routes server-render", async () => {
  for (const path of ["/courses", "/courses/ai-agent-workflow", "/media", "/story"]) {
    const response = await render(path);
    assert.equal(response.status, 200, path);
    const html = await response.text();
    assert.match(html, /张晓檬/);
  }
});

test("homepage preserves expected external work links", async () => {
  const html = await (await render()).text();
  for (const href of ["https://apps.apple.com/us/app/deepcleanup-photo-cleaner/id6777354576", "https://apps.apple.com/us/app/focuslock-app-blocker/id6781309683", "https://github.com/zhangxiaomeng1/DualCamCreator"]) assert.match(html, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});
