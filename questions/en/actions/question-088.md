---
question: "What does the `matrix` keyword do in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/actions/using-jobs/using-a-matrix-for-your-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Allows defining multiple job configurations to run in parallel
- <input type="checkbox" disabled> Sets environment variables for the job
- <input type="checkbox" disabled> Triggers workflows based on a schedule
- <input type="checkbox" disabled> Defines secrets for the workflow

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

- [x] Allows defining multiple job configurations to run in parallel
> **Simple:** `strategy.matrix` expands each combination of axis values into a separate parallel job.
>
> **Detailed:** Under `jobs.<id>.strategy.matrix`, you list one or more axes. GitHub creates one job per combination and runs them in parallel (unless limited by `max-parallel` or `needs`):
>
> ```yaml
> jobs:
>   test:
>     strategy:
>       matrix:
>         os: [ubuntu-latest, windows-latest]
>         node: [18, 20, 22]
>     runs-on: ${{ matrix.os }}
>     steps:
>       - uses: actions/setup-node@v4
>         with:
>           node-version: ${{ matrix.node }}
>       - run: npm test
> ```
>
> Two OS values × three Node versions = **six jobs**. Each job sees `matrix.os` and `matrix.node` for its row. Use matrices for cross-platform or multi-version testing—not for secrets (`secrets` context), cron (`on.schedule`), or arbitrary key/value bags unrelated to job variants.
