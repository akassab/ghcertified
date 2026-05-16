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
> In YAML, `run: |` followed by indented lines runs as a single script block (like a shell heredoc). Each line is one command in sequence on the same shell invocation— the idiomatic way to run multiple commands in one step.
