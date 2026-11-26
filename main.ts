// Make the Judge Laugh in One Line — @syukuran entry.
// One funny line, 200 characters or fewer. The program writes it to
// /output/entry.txt exactly as written below, nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My washing machine ate one sock and left a ransom note written in lint.";

// The gate: 1 to 200 characters, not only whitespace. Refuse to write an
// entry that could never pass it, instead of shipping a bad file.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${LINE.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
