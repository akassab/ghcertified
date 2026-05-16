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
> Reusable workflows expose return values under `on.workflow_call.outputs`. Map each name to a job output—for example `artifact-path: ${{ jobs.build.outputs.zip_path }}`—so the caller reads `needs.<job_id>.outputs.artifact-path` after the called run finishes.

- [x] You define an output on job level in the `build` workflow
> Jobs declare `outputs` that reference step outputs, such as `zip_path: ${{ steps.package.outputs.path }}`. Workflow-level outputs typically aggregate from these job outputs.

- [x] In the `build` workflow you write the output into `$GITHUB_OUTPUT` in one of the steps
> In a step, append `zip_path=/tmp/app.zip` to `$GITHUB_OUTPUT` so `${{ steps.<id>.outputs.zip_path }}` is available to the job and workflow outputs. Without writing to `GITHUB_OUTPUT`, nothing propagates to the caller.
