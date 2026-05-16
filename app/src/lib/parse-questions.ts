import { readFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";
import { parseQuestionFile } from "mdquiz";
import { normalizeScrollFormatMarkdown } from "./scroll-format";

export function parseDirectoryWithScrollSupport(
  dir: string,
  options: { filePrefix?: string; strict?: boolean } = {},
) {
  const { filePrefix, strict = false } = options;
  const questions = [];

  for (const entry of readdirSync(dir).sort()) {
    if (!entry.endsWith(".md") || entry.startsWith("_")) continue;
    if (filePrefix && !entry.startsWith(filePrefix)) continue;

    const id = basename(entry, ".md");
    const path = join(dir, entry);
    try {
      const content = readFileSync(path, "utf-8");
      questions.push(parseQuestionFile(normalizeScrollFormatMarkdown(content), id));
    } catch (err) {
      if (strict) throw new Error(`Failed to parse ${path}: ${(err as Error).message}`);
    }
  }

  return questions;
}
