---
question: "In a workflow with multiple jobs, if job A fails then:"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> the jobs that are dependent on job A are skipped
- <input type="checkbox" disabled> the jobs that are dependent on job A fail
- <input type="checkbox" disabled> the workflow immediately cancels all other jobs

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

- [x] the jobs that are dependent on job A are skipped
> When a job fails, any downstream jobs that list it in `needs` are **skipped** by default (shown as "Skipped" in the UI)—for example, if `test` fails, `deploy` with `needs: test` never runs. They do not automatically fail with the same error unless you add `if: failure()`. Unrelated parallel jobs (no `needs` link to the failed job) keep running unless you use `strategy.fail-fast` on a matrix.
