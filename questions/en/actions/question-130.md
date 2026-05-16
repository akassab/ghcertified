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
> A workflow-level `outputs` block is a direct child of `on.workflow_call` in **reusable** workflows—it exposes values to the caller. Ordinary caller workflows only define `outputs` on jobs, mapping step results with `${{ steps.<step>.outputs.<name> }}`. Putting `outputs` at the workflow root of a non-reusable workflow is not the pattern GitHub documents for callers.
- [x] A reusable workflow can have both workflow-level and job-level `outputs` blocks.
> A reusable workflow often needs **both** levels: the job computes the value (`jobs.build.outputs.image`), and `workflow_call.outputs` maps it for the caller with `value: ${{ jobs.build.outputs.image }}`. The caller then reads it via `needs.<job>.outputs.<name>` on the job that invoked the reusable workflow. Skipping either block breaks the chain from step to caller.
- [x] A workflow-level `outputs` block must have the following structure:
```
outputs:
    <output-name>
        value: ${{ jobs.<job-name>.outputs.<output-name> }}
```
> Each workflow-level output requires a `value` expression, typically `${{ jobs.<job-id>.outputs.<output-name> }}`—not step outputs directly. An optional `description` documents the output for callers. Example: `build-version: value: ${{ jobs.build.outputs.version }}` lets the caller pass that string to a deploy job.
