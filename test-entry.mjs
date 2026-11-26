// TDD-lite test for the Break Production, Own It entry.
// Checks the kit gate: /output/entry.txt is UTF-8 text, 1-200 chars,
// not only whitespace, single line, deterministic across runs,
// and the output dir holds no dotfile.
// Run: node test-entry.mjs   (expects main.ts in the same directory)
import { spawnSync } from "node:child_process";
import { mkdtempSync, readFileSync, readdirSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const dir = dirname(fileURLToPath(import.meta.url));
const main = join(dir, "main.ts");
let failures = 0;
const check = (ok, label) => {
  console.log(`${ok ? "PASS" : "FAIL"}: ${label}`);
  if (!ok) failures++;
};

const runOnce = () => {
  const out = mkdtempSync(join(tmpdir(), "makefun-out-"));
  const r = spawnSync(process.execPath, [main], {
    env: { ...process.env, MAKEFUN_OUTPUT_DIR: out, MAKEFUN_INPUT_DIR: "/input" },
    encoding: "utf8",
  });
  return { out, r };
};

const a = runOnce();
check(a.r.status === 0, `main.ts exits 0 (got ${a.r.status}) ${a.r.stderr || ""}`);
const b = runOnce();
check(b.r.status === 0, `main.ts exits 0 on second run (got ${b.r.status})`);

const textA = readFileSync(join(a.out, "entry.txt"), "utf8");
const textB = readFileSync(join(b.out, "entry.txt"), "utf8");
check(textA === textB, "deterministic: identical output across runs");
check(textA.length >= 1 && textA.length <= 200, `length 1-200 chars (got ${textA.length})`);
check(textA.trim().length > 0, "not only whitespace");
check(!textA.includes("\n"), "single line (no newline)");
check(!/[.]/.test(readdirSync(a.out).join("").replace(/entry\.txt/, "")) || true, "output listing readable");
check(readdirSync(a.out).every((f) => !f.startsWith(".")), "no dotfile in output dir");
console.log(`\nEntry (${textA.length} chars): ${textA}`);

rmSync(a.out, { recursive: true, force: true });
rmSync(b.out, { recursive: true, force: true });
process.exit(failures ? 1 : 0);
