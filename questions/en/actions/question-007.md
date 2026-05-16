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
> Every workflow needs an `on` section—for example `on: push` or `on: [push, pull_request]`. Without a trigger, GitHub will not start the workflow.

- [x] One or more jobs
> A workflow must define at least one job under `jobs`. The optional top-level `name` is not required, and there is no standalone `branches` property—branch filters belong inside event types like `push.branches`.
