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
> Use the `branches` filter (or `branches-ignore`) under event keys like `on.push` or `on.pull_request` to limit which branch names start the workflow. For example, `branches: [main, 'release/**']` runs on `main` and any `release/1.0` branch but not on `feature/login`. Without this filter, pushes to any branch can trigger the workflow. Branch filters apply to the Git ref involved in the event, not to runner labels or deployment environments.
