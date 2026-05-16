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
> Workflow-level `timeout-minutes` caps the **entire** run across all jobs—for example, `timeout-minutes: 60` at the top of the file stops the workflow if the combined runtime exceeds one hour. Use this when many parallel jobs should share one global budget. Individual jobs can still hit their own limits first if those are lower.
- [x] Job level
> `jobs.<job_id>.timeout-minutes` applies only to that job, which is useful when deploy steps need more time than lint. A job with `timeout-minutes: 30` is cancelled if it runs longer than thirty minutes even when the workflow-level limit is higher. Steps inherit the job limit unless a step sets its own.
- [x] Step level
> `jobs.<job_id>.steps[*].timeout-minutes` can cap a single long-running step, such as an integration test script, without shortening the whole job. Action metadata in `action.yml` does not define a workflow timeout level—only workflow YAML does. Typical defaults are 360 minutes at workflow level and 6 hours per job unless you set lower values.
