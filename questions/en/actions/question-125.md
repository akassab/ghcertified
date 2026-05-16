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
> **Simple:** Workflow-level `timeout-minutes` caps the **entire** run across all jobs.
>
> **Detailed:** For example, `timeout-minutes: 60` at the top of the file stops the workflow if the combined runtime exceeds one hour. Use this when many parallel jobs should share one global budget. Individual jobs can still hit their own limits first if those are lower. GitHub’s default workflow timeout is 360 minutes unless you set a lower value.
- [x] Job level
> **Simple:** `jobs.<job_id>.timeout-minutes` applies only to that job—useful when deploy needs more time than lint.
>
> **Detailed:** A job with `timeout-minutes: 30` is cancelled if it runs longer than thirty minutes even when the workflow-level limit is higher. Steps inherit the job limit unless a step sets its own. Default per-job timeout is six hours unless configured otherwise.
- [x] Step level
> **Simple:** Step-level `timeout-minutes` can cap one long-running step without shortening the whole job.
>
> **Detailed:** `jobs.<job_id>.steps[*].timeout-minutes` is useful for a single integration test script that must not hang the job indefinitely. Action metadata in `action.yml` does not define workflow timeouts—only workflow YAML does. There is no separate “action timeout” level in the syntax reference.
