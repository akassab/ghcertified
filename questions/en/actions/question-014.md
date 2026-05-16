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
> The YAML in the question is a **job matrix**: `version: [10, 12, 14]` × `os: [ubuntu-latest, windows-latest]` creates **6 jobs inside one workflow** (3 × 2)—for example `example_matrix (10, ubuntu-latest)`, `(10, windows-latest)`, through `(14, windows-latest)`. Each job runs that workflow’s steps on a different version/OS combo.
>
> **Do those 6 run in parallel?** Yes, by default. Matrix jobs do not wait on each other unless you add `needs` or limit concurrency. GitHub starts as many as it can on available runners, so you often see several or all six running at once. To cap that, set `strategy.max-parallel` (for example `max-parallel: 2` runs at most two matrix jobs at a time while the rest queue).
>
> The question also asks something different: can a matrix spin up **whole workflows** in parallel—not just jobs in a single file?
>
> **Yes.** A job can call a **reusable workflow** with `uses:` instead of `runs-on` + `steps`. Put that job in a matrix and each matrix combination starts a separate reusable-workflow run. Example:
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
> That launches **two full workflow runs** (staging and production) in parallel, each executing every job defined in `ci.yml`. You are not limited to the same repository (caller and reusable workflow can be in different repos if permissions allow), and GitHub-hosted runners work fine—self-hosted runners are optional, not required.
