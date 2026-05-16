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
> `jobs.<job_id>.steps[*].timeout-minutes` caps how long a single step may run. Job-level `timeout-minutes` limits the entire job, not per-step command intervals or external wait times.
