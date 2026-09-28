import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(fileURLToPath(new URL("..", import.meta.url)));
const dist = resolve(root, "dist");
const html = await readFile(resolve(dist, "index.html"), "utf8");
const body = html.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? "";
const visibleText = body
  .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, " ")
  .replace(/<[^>]+>/g, " ")
  .replace(/&(?:amp|lt|gt|quot|#39);/g, " ")
  .replace(/\s+/g, " ")
  .trim();

const structuredData = html.match(
  /<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i
)?.[1];
const person = structuredData ? JSON.parse(structuredData) : null;
const image = await readFile(resolve(dist, "og-image.png"));
const imageWidth = image.readUInt32BE(16);
const imageHeight = image.readUInt32BE(20);
const robots = await readFile(resolve(dist, "robots.txt"), "utf8");
const sitemap = await readFile(resolve(dist, "sitemap.xml"), "utf8");

const checks = [
  ["Title and description", /<title>[^<]+<\/title>/i.test(html) && /<meta\s+name="description"\s+content="[^"]+"/i.test(html)],
  ["Canonical URL", /<link\s+rel="canonical"\s+href="https:\/\/www\.pranavojha\.com\/"/i.test(html)],
  ["Open Graph metadata", /property="og:title"/i.test(html) && /property="og:description"/i.test(html) && /property="og:url"/i.test(html) && /property="og:image"/i.test(html)],
  ["Twitter card metadata", /name="twitter:card"\s+content="summary_large_image"/i.test(html) && /name="twitter:image"/i.test(html)],
  ["Person JSON-LD", person?.["@type"] === "Person" && person.name === "Pranav Ojha" && person.url === "https://www.pranavojha.com/"],
  [
    "Crawlable page and Nova details",
    visibleText.split(/\s+/).length > 500 &&
      [
        "Pranav Ojha",
        "Nova",
        "exactly-once actions",
        "bounded authorization",
        "Postgres",
        "58 tests",
        "staging and production environments are in progress",
      ].every((detail) => visibleText.toLowerCase().includes(detail.toLowerCase())),
  ],
  ["Portfolio projects in HTML", ["The Himalayan Trout House", "Automated Job-Search &amp; Application Platform", "AI Second Brain", "WebscrapeAI", "Smart Stock"].every((name) => html.includes(name))],
  ["Robots allows crawling", robots.includes("User-agent: *") && robots.includes("Allow: /") && robots.includes("Sitemap: https://www.pranavojha.com/sitemap.xml")],
  ["Sitemap canonical URL", sitemap.includes("<loc>https://www.pranavojha.com/</loc>")],
  ["Social image is 1200×630", imageWidth === 1200 && imageHeight === 630],
];

for (const [label, passed] of checks) {
  console.log(`${passed ? "PASS" : "FAIL"} ${label}`);
}

const passedCount = checks.filter(([, passed]) => passed).length;
console.log(`SEO static audit: ${passedCount}/${checks.length} checks passed.`);
assert.equal(passedCount, checks.length, "SEO static audit failed.");
