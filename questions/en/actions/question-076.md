---
question: "What's the maximum amount of reusable workflows that can be called from a single workflow file?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/reusing-workflow-configurations#limitations-of-reusable-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 20
- <input type="checkbox" disabled> 5
- <input type="checkbox" disabled> 1
- <input type="checkbox" disabled> 10
- <input type="checkbox" disabled> 50

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

- [x] 50
> A single workflow run can trigger at most **50** downstream workflows via `workflow_run` (and related limits cap how many reusable workflows you can chain with `workflow_call` in one run). If every merge fired unbounded `workflow_run` listeners, one push could fan out thousands of runs—GitHub's limit prevents runaway cascading automation. The distractors (1, 5, 10, 20) are below the documented ceiling.
