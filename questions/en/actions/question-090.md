---
question: "What is the default timeout for a GitHub Actions job?"
documentation: "https://docs.github.com/en/actions/reference/limits#existing-system-limits"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 30 minutes
- <input type="checkbox" disabled> 60 minutes
- <input type="checkbox" disabled> 120 minutes
- <input type="checkbox" disabled> 360 minutes

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

- [x] 360 minutes
> Unless you set `timeout-minutes` on a job, GitHub-hosted runner jobs may run up to 360 minutes (6 hours) before the platform terminates them. You can set a lower ceiling—for example `timeout-minutes: 30` on a quick lint job—to fail fast if a step hangs. The default is not 30, 60, or 120 minutes. Self-hosted runners follow the same default unless you configure otherwise.
