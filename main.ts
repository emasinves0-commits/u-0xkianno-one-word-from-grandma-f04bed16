import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Word From Grandma — writes exactly one word to entry.txt.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), "Computer-y");
