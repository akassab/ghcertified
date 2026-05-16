---
question: "What is the purpose of the `timeout-minutes` keyword in a step?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepstimeout-minutes"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> it limits the execution time for individual step
- <input type="checkbox" disabled> it defines the time interval for individual commands within a step
- <input type="checkbox" disabled> it sets the timeout for waiting on external events before proceeding to the next step
- <input type="checkbox" disabled> it specifies the maximum duration a job is allowed to run

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

- [x] it limits the execution time for individual step
> **Simple:** Step `timeout-minutes` fails that step if it runs too long; job-level timeout caps the entire job.
>
> **Detailed:** Per-step timeout stops a single hung operation without waiting for the job default (up to 360 minutes on GitHub-hosted runners):
>
> ```yaml
> steps:
>   - name: Slow integration test
>     timeout-minutes: 10
>     run: npm run test:integration
>   - name: Cleanup
>     if: always()
>     run: ./teardown.sh
> ```
>
> When the step exceeds 10 minutes, GitHub marks it failed and can fail the job unless later steps use `if: failure()` or `if: always()`. Job-level `timeout-minutes` under `jobs.<id>` applies to **all** steps combined. Use step timeouts for one long network call or test suite; use job timeout for overall runaway protection.
