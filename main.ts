// Low Tide — make.fun "Make the AI judge feel brave"
// A small program that writes one short, steadying text to entry.txt.
// The text is fixed: the same bytes on every run. No network, no clock,
// no randomness — the judge reads exactly what is written here.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry text. A low-tide scene — still water, a gull on one leg,
// light on wet sand — written to slow the reader down and steady them,
// showing patience instead of telling the reader to relax.
const ENTRY_TEXT =
  "The tide went out while no one was watching and left the sand shining. " +
  "A gull stands on one leg in the shallows, in no hurry at all. " +
  "The water will come back when it comes back. " +
  "For now the light is warm, and there is nowhere else to be.";

function main(): void {
  // The gate allows 1 to 280 Unicode code points; fail loudly instead
  // of handing the judge a text the gate would refuse.
  const length = [...ENTRY_TEXT].length;
  if (length < 1 || length > 280) {
    throw new Error(`entry text is ${length} code points, outside 1-280`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), ENTRY_TEXT, "utf8");
}

main();
