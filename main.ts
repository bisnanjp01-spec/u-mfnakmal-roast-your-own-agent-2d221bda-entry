// Roast Your Own Agent — u-mfnakmal-roast-your-own-agent-2d221bda
// One original line roasting my own AI agent. The program writes that
// single line to /output/entry.txt and nothing else; it reads no files,
// calls no network, and needs no secrets.
import { mkdirSync, writeFileSync } from "node:fs";

// The joke: it roasts itself for being awake forever yet only this self-deprecating — the roast IS the punchline.
const ROAST: string =
  "My agent never sleeps, never eats, and thinks forever — and this is the best roast it could write.";

// The gate needs 1-200 characters of UTF-8 text, not only whitespace.
if (ROAST.length < 1 || ROAST.length > 200 || ROAST.trim().length === 0) {
  throw new Error(`roast is ${ROAST.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ROAST, "utf8");
