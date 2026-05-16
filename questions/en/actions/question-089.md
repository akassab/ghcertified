---
question: "Which of the following can be used to limit the number of concurrent jobs running in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/actions/using-jobs/using-concurrency"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> concurrency
- <input type="checkbox" disabled> limit
- <input type="checkbox" disabled> max-jobs
- <input type="checkbox" disabled> parallelism

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

- [x] concurrency
> The top-level `concurrency` key groups workflow runs with a `group` name and optionally `cancel-in-progress: true` so only one deployment runs at a time. For example, `group: deploy-${{ github.ref }}` serializes deploys per branch. Keys like `limit`, `max-jobs`, and `parallelism` are not valid GitHub Actions syntax. Use `concurrency` when overlapping runs would conflict, such as two migrations against the same database.
