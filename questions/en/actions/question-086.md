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
> **Simple:** Use a multiline string with `run: |` so several commands run in one shell in a single step.
>
> **Detailed:** In workflow YAML, `|` after `run:` preserves line breaks. All lines execute in **one** shell session for that step—variables and `cd` persist between lines:
>
> ```yaml
> - name: Build and test
>   run: |
>     npm ci
>     npm test
>     npm run build
> ```
>
> That is equivalent to one script block. You can also chain with `&&` on one line (`run: npm ci && npm test`), but `run: |` is idiomatic for longer scripts. Each separate `- run:` step starts a **new** shell, so multiline `|` is the syntax for multiple commands **in one step**.
