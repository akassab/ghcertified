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
> **Simple:** In the reusable workflow, declare `on.workflow_call.outputs` and map them to job outputs.
>
> **Detailed:** Called workflow:
>
> ```yaml
> on:
>   workflow_call:
>     outputs:
>       artifact-path:
>         description: Path to zip
>         value: ${{ jobs.package.outputs.zip_path }}
> jobs:
>   package:
>     runs-on: ubuntu-latest
>     outputs:
>       zip_path: ${{ steps.zip.outputs.zip_path }}
> ```
>
> Caller reads: `needs.call-build.outputs.artifact-path` (job id that used `uses:`).

- [x] You define an output on job level in the `build` workflow
> **Simple:** The job exposes `outputs:` that pull from step outputs—workflow outputs usually reference those.
>
> **Detailed:** Chain step → job → workflow:
>
> ```yaml
> jobs:
>   package:
>     outputs:
>       zip_path: ${{ steps.zip.outputs.zip_path }}
>     steps:
>       - id: zip
>         run: echo "zip_path=/tmp/app.zip" >> "$GITHUB_OUTPUT"
> ```
>
> Job outputs are the bridge between steps and `workflow_call.outputs.value`.

- [x] In the `build` workflow you write the output into `$GITHUB_OUTPUT` in one of the steps
> **Simple:** Steps must write `name=value` to `$GITHUB_OUTPUT` before job/workflow outputs can expose them.
>
> **Detailed:** In the packaging step:
>
> ```bash
> echo "zip_path=/tmp/app.zip" >> "$GITHUB_OUTPUT"
> ```
>
> Then `${{ steps.zip.outputs.zip_path }}` feeds the job `outputs` block, then workflow-level `outputs`. Misconception: returning files automatically—callers get **strings** (paths, URLs you set), not binary artifacts unless you upload artifacts separately and pass an ID or URL as the output value.
