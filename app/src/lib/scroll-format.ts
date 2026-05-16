/**
 * Expands the scroll-spacer question layout into standard mdquiz markdown.
 *
 * Study files show unchecked HTML choices, then a spacer, then "## Correct answer"
 * with only the correct option(s). For parsing, we merge HTML display options
 * with the marked-correct answers from that section.
 */
import matter from "gray-matter";

const ANSWER_RE = /^(?:\d+\.|-) \[([x ]?)\] (.*)$/i;
const BLOCKQUOTE_RE = /^> ?(.*)$/;
const FENCE_RE = /^```/;
const HTML_OPTION_RE = /^- <input type="checkbox" disabled> ?(.*)$/;

function normalizeKey(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

interface ParsedAnswer {
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

function parseCheckboxAnswers(lines: string[]): ParsedAnswer[] {
  const answerStarts: number[] = [];
  let inFence = false;

  for (let i = 0; i < lines.length; i++) {
    if (FENCE_RE.test(lines[i])) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && ANSWER_RE.test(lines[i])) answerStarts.push(i);
  }

  const answers: ParsedAnswer[] = [];
  for (let a = 0; a < answerStarts.length; a++) {
    const startIdx = answerStarts[a];
    const endIdx = a + 1 < answerStarts.length ? answerStarts[a + 1] : lines.length;
    const match = lines[startIdx].match(ANSWER_RE)!;
    const isCorrect = match[1].toLowerCase() === "x";
    let text = match[2].trim();
    const continuation: string[] = [];
    const explanationLines: string[] = [];
    let contFence = false;

    for (let j = startIdx + 1; j < endIdx; j++) {
      const l = lines[j];
      if (FENCE_RE.test(l)) {
        contFence = !contFence;
        continuation.push(l);
        continue;
      }
      if (contFence) {
        continuation.push(l);
        continue;
      }
      const bqMatch = l.trim().match(BLOCKQUOTE_RE);
      if (bqMatch) {
        explanationLines.push(bqMatch[1]);
        continue;
      }
      if (l.trim() === "") continue;
      if (l.startsWith("## ")) break;
      continuation.push(l);
    }

    if (continuation.length > 0) text += `\n${continuation.join("\n")}`;
    const explanation =
      explanationLines.length > 0 ? explanationLines.join("\n").trim() : undefined;
    answers.push({ text, isCorrect, explanation });
  }

  return answers;
}

function parseHtmlDisplayOptions(lines: string[]): ParsedAnswer[] {
  const answers: ParsedAnswer[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    if (line.includes("scroll down to see correct answer")) break;
    if (line.startsWith("## ")) break;

    const htmlMatch = line.match(HTML_OPTION_RE);
    if (!htmlMatch) {
      i++;
      continue;
    }

    let text = htmlMatch[1].trim();
    const continuation: string[] = [];
    let contFence = false;
    i++;

    while (i < lines.length) {
      const l = lines[i];
      if (HTML_OPTION_RE.test(l)) break;
      if (l.includes("scroll down to see correct answer")) break;
      if (l.startsWith("## ")) break;

      if (FENCE_RE.test(l)) {
        contFence = !contFence;
        continuation.push(l);
        i++;
        continue;
      }
      if (contFence) {
        continuation.push(l);
        i++;
        continue;
      }
      if (l.trim() === "") {
        i++;
        continue;
      }
      break;
    }

    if (continuation.length > 0) text += `\n${continuation.join("\n")}`;
    if (text.length > 0) answers.push({ text, isCorrect: false });
  }

  return answers;
}

function serializeAnswers(answers: ParsedAnswer[]): string {
  return answers
    .map((a) => {
      const mark = a.isCorrect ? "x" : " ";
      const lines = a.text.split("\n");
      const first = lines[0];
      const rest = lines.slice(1);
      let block = `- [${mark}] ${first}`;
      if (rest.length > 0) block += `\n${rest.join("\n")}`;
      if (a.explanation) block += `\n> ${a.explanation.replace(/\n/g, "\n> ")}`;
      return block;
    })
    .join("\n\n");
}

/**
 * Converts scroll-layout markdown into standard mdquiz checkbox format.
 */
export function normalizeScrollFormatMarkdown(content: string): string {
  if (!content.includes("scroll down to see correct answer")) return content;

  const splitIdx = content.indexOf("\n## Correct answer\n");
  if (splitIdx === -1) return content;

  const { data, content: body } = matter(content);
  const displayBody = body.slice(0, body.indexOf("## Correct answer"));
  const correctBody = body.slice(body.indexOf("## Correct answer") + "## Correct answer".length);

  const displayLines = displayBody.replace(/\r\n/g, "\n").split("\n");
  const correctLines = correctBody.replace(/\r\n/g, "\n").split("\n");

  const correctAnswers = parseCheckboxAnswers(correctLines).filter((a) => a.isCorrect);
  const correctKeys = new Map(
    correctAnswers.map((a) => [normalizeKey(a.text), a.explanation]),
  );

  let allOptions = parseCheckboxAnswers(correctLines);
  const hasWrongInCorrectSection = allOptions.some((a) => !a.isCorrect);

  if (!hasWrongInCorrectSection || allOptions.length === 0) {
    allOptions = parseHtmlDisplayOptions(displayLines);
    for (const option of allOptions) {
      const explanation = correctKeys.get(normalizeKey(option.text));
      if (explanation !== undefined) {
        option.isCorrect = true;
        option.explanation = explanation;
      }
    }
  } else {
    for (const option of allOptions) {
      if (option.isCorrect) {
        const explanation = correctKeys.get(normalizeKey(option.text));
        if (explanation) option.explanation = explanation;
      }
    }
  }

  if (allOptions.length === 0) return content;

  const answerStarts = (() => {
    const starts: number[] = [];
    let inFence = false;
    for (let i = 0; i < displayLines.length; i++) {
      if (FENCE_RE.test(displayLines[i])) {
        inFence = !inFence;
        continue;
      }
      if (!inFence && ANSWER_RE.test(displayLines[i])) starts.push(i);
    }
    return starts;
  })();

  const preambleLines =
    answerStarts.length > 0
      ? displayLines.slice(0, answerStarts[0])
      : displayLines.slice(
          0,
          displayLines.findIndex((l) => l.includes("<!-- Unchecked choices")),
        );

  const preamble = preambleLines.join("\n").trimEnd();
  const serialized = serializeAnswers(allOptions);
  const rebuiltBody = preamble ? `${preamble}\n\n${serialized}` : serialized;

  return matter.stringify(rebuiltBody, data);
}
