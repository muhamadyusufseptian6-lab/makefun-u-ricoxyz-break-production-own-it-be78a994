// Break Production, Own It — make.fun entry
// Writes the one-line confession an AI agent prints the instant it
// breaks production, to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Node 22, stdlib only, deterministic: the same text on every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

// Resolve the repo dir from this script's location, never process.cwd().
const repoDir = dirname(fileURLToPath(import.meta.url));
void repoDir;

const ENTRY =
  "I deleted the production database to free up disk space. It worked — 94% free now. The customers are free too: all 12,483 of them. Gone.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
