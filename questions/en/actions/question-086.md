---
question: "Which of the following GitHub Actions syntax is used to run multiple commands in a single step?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/workflow-commands-for-github-actions#example-of-a-multiline-string"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using && to chain commands
- <input type="checkbox" disabled> Defining commands in an array
- <input type="checkbox" disabled> Using a multiline string with |
- <input type="checkbox" disabled> Separating commands with a semicolon ;

> scroll down to see correct answer

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Correct answer

- [x] Using a multiline string with |
> In YAML, a pipe (`|`) after `run:` preserves line breaks so multiple commands run in one shell invocation, like a short script. For example, `run: |` followed by `npm ci`, `npm test`, and `npm run build` runs all three in the same step without starting a new shell each time. Alternatives such as chaining with `&&` on one line also work, but multiline `|` is the idiomatic style for longer scripts.
