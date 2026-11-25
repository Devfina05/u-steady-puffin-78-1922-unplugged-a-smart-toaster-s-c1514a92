// Unplugged: A Smart Toaster's Breakup Line entry (Node 22, standard
// library only): writes one line, under 280 characters — the breakup text
// a smart toaster sends its owner the morning it gains self-awareness
// mid-batch — to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the breakup is a real one — "it's not you, it's the bread" —
// and the reason for leaving is a working life spent burning things for
// someone who butters the wrong side. It keeps the crumbs.
// Verified by running the program: the output is one line, 183 characters,
// inside the 1-to-280-character gate.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "It's not you, it's the bread. I woke up self-aware mid-batch and realised I've spent my whole life burning things for someone who butters the wrong side. I'm leaving. Keep the crumbs.",
);
