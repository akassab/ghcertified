---
question: "Which should you use when passing information between jobs: job outputs or `GITHUB_ENV`?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-variables#passing-values-between-steps-and-jobs-in-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Job outputs, because the value of environmental variables set via writing to `GITHUB_ENV` only applies to the current job.
- <input type="checkbox" disabled> `GITHUB_ENV`, because job outputs can only be set and referenced within the same job.
- <input type="checkbox" disabled> Job outputs, because they are simpler to set up
- <input type="checkbox" disabled> `GITHUB_ENV`, because using it to set environmental variables puts significantly less strain on the runner, reducing workflow runtime.

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

- [x] Job outputs, because the value of environmental variables set via writing to `GITHUB_ENV` only applies to the current job.
> **Simple:** Use **job outputs** to pass data between jobs—`GITHUB_ENV` only affects later steps in the **same** job.
>
> **Detailed:** Writing to `GITHUB_ENV` does not reach other jobs; workflow-level `env` sets initial values per job but each runner is isolated. Downstream jobs read upstream values with `needs.<job_id>.outputs.<name>` after mapping step outputs in the producing job’s `outputs` block.
