import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Grandma's kitchen smelled of fried garlic and woodsmoke, and I only understood I would miss it the day the stove stayed cold.";

// Self-gate: the competition gate requires UTF-8 text of 1 to 280
// characters, not only white space. Refuse to write an invalid entry.
const length = [...ENTRY].length;
if (length < 1 || length > 280 || ENTRY.trim().length === 0) {
  console.error(`entry invalid: ${length} characters`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
// No trailing newline: the gate counts every character.
writeFileSync("/output/entry.txt", ENTRY, "utf8");
