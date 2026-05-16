---
question: "A reusable workflow named `build` creates zip file artifacts. How do you pass the zip file location to the caller workflow that is calling the `build` workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-outputs-from-a-reusable-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> You define an output on workflow level in the `build` workflow
- <input type="checkbox" disabled> You define an output on job level in the `build` workflow
- <input type="checkbox" disabled> In the `build` workflow you write the output into `$GITHUB_OUTPUT` in one of the steps
- <input type="checkbox" disabled> All outputs are automatically passed to the caller workflows

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

- [x] You define an output on workflow level in the `build` workflow
> Reusable workflows expose return values under `on.workflow_call.outputs`. Map each output to a job output (for example `value: ${{ jobs.build.outputs.result }}`) so callers can read them after the called workflow finishes.

- [x] You define an output on job level in the `build` workflow
> Jobs declare `outputs` that reference step outputs (for example `result: ${{ steps.set.outputs.result }}`). The called workflow's workflow-level outputs typically pull from these job outputs.

- [x] In the `build` workflow you write the output into `$GITHUB_OUTPUT` in one of the steps
> Step outputs are set by appending `name=value` lines to `$GITHUB_OUTPUT`. Without writing to `GITHUB_OUTPUT`, downstream jobs and workflow outputs have nothing to expose to the caller.
