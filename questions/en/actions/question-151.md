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
> Writing to `GITHUB_ENV` updates a variable only for **later steps in the same job**—not for other jobs in the workflow. Workflow-level `env` gives every job the same initial value, but each job’s runner is isolated. To pass data across jobs, use **job outputs** (`jobs.<id>.outputs`) and `needs` in downstream jobs.
