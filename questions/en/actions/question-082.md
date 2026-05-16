---
question: "How can you ensure a job runs only on a specific branch?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#using-filters"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> By using the branches filter
- <input type="checkbox" disabled> By using the runs-on filter
- <input type="checkbox" disabled> By using the jobs filter
- <input type="checkbox" disabled> By using the branch keyword

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

- [x] By using the branches filter
> **Simple:** Add `branches` (or `branches-ignore`) under the event in `on:` to limit which refs trigger the workflow.
>
> **Detailed:** Branch filters sit under the triggering event, not on the job. They compare the ref name from the webhook (push or pull request) against your patterns.
>
> ```yaml
> on:
>   push:
>     branches:
>       - main
>       - 'release/**'
>   pull_request:
>     branches: [main]
> ```
>
> A push to `feature/login` does not match `main` or `release/**`, so the workflow does not run. `branches-ignore` excludes names instead of allowing only listed ones. This controls **when** the workflow starts; it is separate from `runs-on` labels or `environment:` deployment gates. To run a job only on certain branches after the workflow already fired, use a job-level `if:` instead.
