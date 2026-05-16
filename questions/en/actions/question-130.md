---
question: "Which of the following are true regarding workflow-level vs. job-level outputs blocks?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#example-defining-outputs-for-a-job"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Job-level `outputs` blocks should only be used in caller workflows, not reusable workflows.
- <input type="checkbox" disabled> A workflow-level `outputs` block should only be used in reusable workflows, not caller workflows.
- <input type="checkbox" disabled> A reusable workflow can have both workflow-level and job-level `outputs` blocks.
- <input type="checkbox" disabled> A job-level `outputs` block must have the following structure:
```
outputs:
    <output-name>
        value: ${{ steps.<step-name>.outputs.<output-name> }}
```
- <input type="checkbox" disabled> A workflow-level `outputs` block must have the following structure:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```

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

- [x] A workflow-level `outputs` block should only be used in reusable workflows, not caller workflows.
> **Simple:** Workflow-level `outputs` belong under `on.workflow_call` in **reusable** workflows, not at the root of ordinary caller workflows.
>
> **Detailed:** That block exposes values to the caller. Ordinary caller workflows define `outputs` on jobs, mapping step results with `${{ steps.<step>.outputs.<name> }}`. Putting `outputs` at the workflow root of a non-reusable workflow is not the pattern GitHub documents for callers.
- [x] A reusable workflow can have both workflow-level and job-level `outputs` blocks.
> **Simple:** Reusable workflows often define outputs on jobs **and** map them at the workflow level for callers.
>
> **Detailed:** The job computes the value (`jobs.build.outputs.image`), and `workflow_call.outputs` maps it for the caller with `value: ${{ jobs.build.outputs.image }}`. The caller reads it via `needs.<job>.outputs.<name>` on the job that invoked the reusable workflow. Skipping either block breaks the chain from step to caller.
- [x] A workflow-level `outputs` block must have the following structure:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```
> **Simple:** Each workflow-level output needs a `value` expression, usually `${{ jobs.<job-id>.outputs.<name> }}`.
>
> **Detailed:** Step outputs are not referenced directly at workflow level—map through job outputs first. An optional `description` documents the output for callers. Example: `build-version: value: ${{ jobs.build.outputs.version }}` lets the caller pass that string to a deploy job in the parent workflow.
