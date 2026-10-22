import { XMLParser } from "fast-xml-parser";
import fs from "node:fs/promises";

const LOCAL_URL = "http://localhost:3000";
const SITE_URL = "https://akademiosn.com";
const CONCURRENCY = 10;

const xml = await fs.readFile("public/sitemap.xml", "utf8");
const parser = new XMLParser({
  ignoreAttributes: false,
  trimValues: true,
  removeNSPrefix: true,
});

const parsed = parser.parse(xml);
const entries = parsed.urlset?.url ?? [];
const records = Array.isArray(entries) ? entries : [entries];

const urls = records.map((entry) => String(entry.loc ?? "").trim());
const unique = [...new Set(urls)];

const failures = [];
let completed = 0;
let passed = 0;
let cursor = 0;

console.log("Total URL:", urls.length);
console.log("Unique URL:", unique.length);
console.log("Duplikat:", urls.length - unique.length);

if (urls.length === 0) {
  throw new Error("Sitemap kosong atau format XML tidak terbaca.");
}

if (urls.length !== unique.length) {
  throw new Error(`Ditemukan ${urls.length - unique.length} URL duplikat.`);
}

async function checkPage(url) {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.origin !== SITE_URL) {
      throw new Error(`Domain tidak valid: ${parsedUrl.origin}`);
    }

    const pathname = parsedUrl.pathname;
    const localUrl = `${LOCAL_URL}${pathname}`;

    const response = await fetch(localUrl, {
      signal: AbortSignal.timeout(30000),
    });

    if (response.status !== 200) {
      throw new Error(`HTTP ${response.status}`);
    }

    const html = await response.text();

    const canonical = html.match(
      /<link\b[^>]*\brel=["']canonical["'][^>]*\bhref=["']([^"']+)["'][^>]*>/i,
    )?.[1];

    const expectedCanonical = `${SITE_URL}${pathname}`.replace(/\/$/, "");

    if (canonical !== expectedCanonical) {
      throw new Error(
        `Canonical: ${canonical ?? "MISSING"} | Expected: ${expectedCanonical}`,
      );
    }

    passed++;
  } catch (error) {
    failures.push({
      url,
      error: error instanceof Error ? error.message : String(error),
    });
  }

  completed++;

  if (completed % 250 === 0 || completed === unique.length) {
    console.log(
      `Progress: ${completed}/${unique.length} | PASS: ${passed} | FAIL: ${failures.length}`,
    );
  }
}

async function worker() {
  while (cursor < unique.length) {
    const index = cursor++;
    await checkPage(unique[index]);
  }
}

await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()));

await fs.writeFile(
  "seo-audit-results.json",
  JSON.stringify(
    {
      total: urls.length,
      unique: unique.length,
      passed,
      failed: failures.length,
      failures,
    },
    null,
    2,
  ),
);

console.log("\n=== HASIL AKHIR ===");
console.log(`PASS: ${passed}/${unique.length}`);
console.log(`FAIL: ${failures.length}`);
console.log("Laporan: seo-audit-results.json");

if (failures.length || urls.length !== unique.length) {
  process.exitCode = 1;
}
