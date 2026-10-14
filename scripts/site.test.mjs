import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile, access } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const site = fileURLToPath(new URL("../", import.meta.url));
const html = await readFile(join(site, "index.html"), "utf8");
const script = await readFile(join(site, "app.js"), "utf8");

test("local links, styles, and image assets resolve", async () => {
  const references = [...html.matchAll(/(?:src|href)="([^"#]+)"/g)]
    .map((match) => match[1])
    .filter((value) => !/^(?:https?:|mailto:)/.test(value));
  const photos = [
    ...script.matchAll(/(?:src|fullSrc):\s*['"]([^'"]+)['"]/g),
  ].map((match) => "assets/" + match[1]);
  for (const reference of new Set([...references, ...photos]))
    await access(join(site, reference));
});

test("section navigation targets exist and element IDs are unique", () => {
  const ids = [...html.matchAll(/\bid="([^" ]+)"/g)].map((match) => match[1]);
  assert.equal(ids.length, new Set(ids).size);
  for (const match of html.matchAll(/href="#([^" ]+)"/g)) {
    if (["work", "photography"].includes(match[1])) continue; // Section routes are handled by app.js.
    assert.ok(ids.includes(match[1]), `Missing target: ${match[1]}`);
  }
});

test("content images have descriptive alternatives", () => {
  const imageTags = [...html.matchAll(/<img\b[^>]*>/g)].map(
    (match) => match[0],
  );
  for (const tag of imageTags) assert.match(tag, /\balt="[^"]*"/);
});
