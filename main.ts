import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "One star: Earth welcomed me with a 40-page visa form and a pat-down, then served noodles so good I asked for a second form.";

// Gate guard: the entry must be one sentence of 1-200 characters,
// a single line, and not only whitespace. Fail loudly instead of
// shipping an invalid entry.
const trimmed = ENTRY.trim();
if (
  trimmed.length < 1 ||
  trimmed.length > 200 ||
  trimmed.includes("\n") ||
  ENTRY !== trimmed
) {
  throw new Error(
    `entry fails the gate: ${trimmed.length} chars, single line required`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
