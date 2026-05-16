---
question: "Is this statement true? `Workflows can be reused, but a reusable workflow cannot call another reusable workflow.`"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#nesting-reusable-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> False
- <input type="checkbox" disabled> True

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

- [x] False
> **Simple:** Reusable workflows can call other reusable workflows; nesting is supported within documented limits.
>
> **Detailed:** The statement is **false**. GitHub documents **nesting reusable workflows**: a caller job can use `uses: org/app/.github/workflows/ci.yml@main`, and that reusable workflow can itself call another reusable workflow in a `jobs` entry. Limits apply (depth, which events may trigger nested calls, how many `workflow_call` targets per run)—you cannot nest without bound. Example chain:
>
> ```yaml
> jobs:
>   orchestrator:
>     uses: my-org/pipelines/.github/workflows/deploy.yml@main
> ```
>
> Inside `deploy.yml`, another job may call `uses: my-org/pipelines/.github/workflows/notify.yml@main`. Chaining is supported when you stay within those limits.
