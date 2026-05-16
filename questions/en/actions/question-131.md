---
question: "Which of the following are true regarding calling reusable workflows versus calling composite actions?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/reusing-workflow-configurations#key-differences-between-reusable-workflows-and-composite-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Composite actions are called via referencing the folder that contains their `action.yml` file.
- <input type="checkbox" disabled> Reusable workflows are called via referencing the folder that contains their `action.yml` file.
- <input type="checkbox" disabled> Composite actions must be called as a step within a job
- <input type="checkbox" disabled> Reusable workflows must be called on workflow job level (not from step-level).
- <input type="checkbox" disabled> Secrets can be passed to both reusable workflows and calling composite actions via the `uses.secrets` block.
- <input type="checkbox" disabled> Only reusable workflows can accept inputs.
- <input type="checkbox" disabled> Reusable workflows can use a different runner type than the caller workflow, while composite actions cannot. 

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

- [x] Composite actions are called via referencing the folder that contains their `action.yml` file.
> Composite actions bundle steps in `action.yml` under `runs.steps`. Call them with `uses:` pointing at the folder that contains that file—for example `uses: ./.github/actions/my-composite` or `uses: ./` when the action lives at the repo root. The path is relative to the caller workflow’s repository, same as any other action reference.
- [x] Composite actions must be called as a step within a job
> Composite actions run as a **step** inside an existing job, like `uses: ./.github/actions/lint` under `steps:`. You do not allocate a whole job only to invoke a composite action unless you want isolation for other reasons. Multiple composite actions can run sequentially in the same job on the same runner.
- [x] Reusable workflows must be called on workflow job level (not from step-level).
> Reusable workflows are invoked at **job** level with `uses: org/repo/.github/workflows/reusable.yml@ref`, not from inside `steps:`. A caller job that `uses` a reusable workflow may show nested jobs in the Actions UI. You cannot `uses:` a workflow file from a step the way you `uses:` an action.
- [x] Reusable workflows can use a different runner type than the caller workflow, while composite actions cannot. 
> Reusable workflows define their own `runs-on` per job—`ubuntu-latest` in the callee and `windows-latest` in the caller is valid. Composite actions always run on the **same** runner as the calling step; they cannot switch OS or machine type. Choose reusable workflows when you need separate runners or job boundaries.
