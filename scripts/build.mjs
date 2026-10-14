import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { join } from "node:path";

const root = fileURLToPath(new URL("../", import.meta.url));
const output = join(root, "build");
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
for (const entry of [
  "index.html",
  "style.css",
  "app.js",
  "robots.txt",
  "assets",
]) {
  await cp(join(root, "site", entry), join(output, entry), { recursive: true });
}
await writeFile(join(output, ".nojekyll"), "");
console.log("Built static site in build/");
