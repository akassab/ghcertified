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
> **Simple:** A single workflow file can call at most **50** reusable workflows (via `workflow_call`) in one run.
>
> **Detailed:** GitHub limits how many **reusable workflows** (`workflow_call`) a single workflow run can invoke—**50** is the documented ceiling for calls from one workflow file/run. Related limits also cap **`workflow_run`** fan-out so one event cannot cascade thousands of downstream runs.
>
> Without limits, one push could trigger unbounded chained automation. The distractors (1, 5, 10, 20) are below the documented maximum.
