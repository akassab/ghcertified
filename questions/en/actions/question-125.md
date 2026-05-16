---
question: "At what levels can environment variables be defined ?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/store-information-in-variables"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Workflow level
- <input type="checkbox" disabled> Job level
- <input type="checkbox" disabled> Step level
- <input type="checkbox" disabled> Action level

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

- [x] Workflow level
> Set `timeout-minutes` at the workflow root to cap total runtime for all jobs in the run.
- [x] Job level
> `jobs.<job_id>.timeout-minutes` limits a single job.
- [x] Step level
> `jobs.<job_id>.steps[*].timeout-minutes` limits an individual step. Actions do not define a separate timeout level in metadata.
