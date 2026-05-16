---
question: "This code will launch 6 different jobs in parallel using the matrix strategy. Can you use the matrix strategy to parallelize entire workflows?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#using-a-matrix-strategy-with-a-reusable-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- <input type="checkbox" disabled> Yes
- <input type="checkbox" disabled> No
- <input type="checkbox" disabled> Only if the workflows are in the same repository
- <input type="checkbox" disabled> Only with self-hosted runners

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

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [x] Yes
> **Simple:** A matrix can run multiple jobs in parallel inside one workflow (this snippet creates 6), and it can also call reusable workflows in parallel with `uses:`.
>
> **Detailed:** The YAML in the question is a **job matrix**: `version: [10, 12, 14]` × `os: [ubuntu-latest, windows-latest]` creates **6 jobs inside one workflow** (3 × 2)—for example `example_matrix (10, ubuntu-latest)` through `(14, windows-latest)`. **Do those 6 run in parallel?** Yes, by default. Matrix jobs do not wait on each other unless you add `needs` or `strategy.max-parallel` (for example `max-parallel: 2` caps how many run at once).
>
> The question also asks whether a matrix can spin up **whole workflows** in parallel—not only jobs in one file. **Yes:** a job can call a reusable workflow with `uses:` instead of `runs-on` + `steps`:
>
> ```yaml
> jobs:
>   call-ci:
>     strategy:
>       matrix:
>         environment: [staging, production]
>     uses: my-org/shared-pipelines/.github/workflows/ci.yml@main
>     with:
>       target: ${{ matrix.environment }}
>     secrets: inherit
> ```
>
> Each matrix value starts a full run of `ci.yml`. That works across repos when access allows; self-hosted runners are not required.
