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
> By default, `needs` skips dependents when an upstream job fails. Adding `if: ${{ always() }}` forces `job3` to evaluate and run after `job1` and `job2` finish regardless of success—typical for cleanup uploads, Slack notifications, or tearing down test infrastructure even when tests failed.
