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
> `strategy.matrix` defines one or more axes (such as `os` and `node`) whose combinations GitHub expands into parallel jobs. Six combinations from `[ubuntu, windows]` × `[18, 20, 22]` produce six jobs that run concurrently subject to runner availability. Each job receives a `matrix` context (for example `${{ matrix.os }}`) for that combination. Matrix jobs are for variant testing, not for defining secrets or cron schedules.
