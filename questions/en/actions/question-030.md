---
question: "When will job3 run?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```
- <input type="checkbox" disabled> job3 will run after job1 and job2 have completed, regardless of whether they were successful
- <input type="checkbox" disabled> You cannot use `if: ${{ always() }}` and `needs` together. The workflow will fail on startup.
- <input type="checkbox" disabled> job3 will run after job1 and job2 have been successfully completed
- <input type="checkbox" disabled> job3 will run after both job1 and job2 have failed

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
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```
- [x] job3 will run after job1 and job2 have completed, regardless of whether they were successful
> By default, `needs` skips dependent jobs when an upstream job fails. Wrapping the condition in `always()` evaluates the job's `if` even after failure, so `job3` still runs once `job1` and `job2` have finished—success or failure—useful for cleanup or notification jobs.
