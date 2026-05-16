---
question: "Which components are required for a workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/about-workflows#workflow-basics"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> One or more events that will trigger the workflow
- <input type="checkbox" disabled> One or more jobs
- <input type="checkbox" disabled> Workflow name
- <input type="checkbox" disabled> Defined branches on which the workflow will run

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

- [x] One or more events that will trigger the workflow
> Every workflow needs an `on` section listing the events (or `workflow_dispatch` / `schedule`) that should start a run.

- [x] One or more jobs
> A workflow must define at least one job under `jobs`. The optional top-level `name` field is not required, and branch filters belong inside specific event types (for example `push.branches`), not as a standalone workflow property.
