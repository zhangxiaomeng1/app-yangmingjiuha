import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function render() {
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the personal practice homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>张晓檬｜人生实践与9款作品<\/title>/i);
  assert.match(html, /不按默认轨道生活/);
  assert.match(html, /把想法做成作品/);
  assert.match(html, /9 款作品/);
  assert.match(html, /FocusLock/);
  assert.match(html, /DuoCue/);
  assert.match(html, /yangmingjiuha\.xyz/);
  assert.doesNotMatch(html, /Your site is taking shape|Building your site/);
});

test("homepage exposes the expected external work links", async () => {
  const response = await render();
  const html = await response.text();

  for (const href of [
    "https://apps.apple.com/us/app/deepcleanup-photo-cleaner/id6777354576",
    "https://apps.apple.com/us/app/focuslock-app-blocker/id6781309683",
    "https://github.com/zhangxiaomeng1/DualCamCreator",
  ]) {
    assert.match(html, new RegExp(href.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  }
});
